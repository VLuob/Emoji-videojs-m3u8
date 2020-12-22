<template>
  <div class="container">
    <h1 @click="$router.push('/video')">EMOJI</h1>
    <div class="icon">
      <div
        ref="area"
        contenteditable="true"
        class="box text edit"
        placeholder="说点什么.."
      ></div>
      <emotion class="emoji" @onEmoJi="onEmoJi"></emotion>
    </div>
    <button @click="ok">发送</button>
  </div>
</template>
<script>
import Emotion from "@/components/Emotion/index";
import { replaceImg } from "@/components/Emotion/utils";
export default {
  name: "index",
  components: {
    Emotion
  },
  data() {
    return {
      showDialog: false
    };
  },
  methods: {
    ok() {
      const text = this.$refs.area.innerHTML;
      console.log(replaceImg(text));
    },
    //选择到的表情
    onEmoJi(i) {
      this.$refs.area.focus();
      this.insertHtmlAtCaret(i);
    },
    //处理输入框
    insertHtmlAtCaret(html) {
      var sel, range;
      if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          // Range.createContextualFragment() would be useful here but is
          // non-standard and not supported in all browsers (IE9, for one)
          var el = document.createElement("div");
          el.innerHTML = html;
          var frag = document.createDocumentFragment(),
            node,
            lastNode;
          while ((node = el.firstChild)) {
            lastNode = frag.appendChild(node);
          }
          range.insertNode(frag);
          // Preserve the selection
          if (lastNode) {
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }
      } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
      }
    }
  }
};
</script>
<style scoped>
h1 {
  cursor: pointer;
}
.text:empty:before {
  content: attr(placeholder);
  color: #bbb;
}
.text:focus {
  content: none;
}
.edit,
.edit * {
  -webkit-user-select: auto;
  -webkit-user-modify: read-write;
}
.container {
  margin: 0 auto;
  margin-top: 20px;
  width: 300px;
  user-select: none;
}
.text {
  display: block;
  margin: 0 auto;
  width: 300px;
  resize: none;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 8px;
}
.box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #eee;
  outline: none;
  transition: all 0.3s;
  line-height: 24px;
}
.box:focus {
  border-color: rosybrown;
}
.icon {
  display: flex;
  align-items: center;
  position: relative;
}
.icon .emoji {
  position: absolute;
  right: 10px;
  top: 3px;
  cursor: pointer;
}
</style>
