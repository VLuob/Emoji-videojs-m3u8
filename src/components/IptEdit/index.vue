<template>
  <div id="edit">
    <div
      class="editdiv"
      ref="edit"
      :class="{ isemoji: emoji }"
      :style="{
        '-webkit-user-modify': disabled ? 'read-only' : '',
        '-moz-user-modify': disabled ? 'read-only' : '',
        'overflow-x': disabled ? 'hidden' : '',
        height: disabled && !text ? '35px' : '100%'
      }"
      contenteditable="true"
      @focus="$emit('focus', $event)"
      @click="$emit('click')"
      @blur="$emit('blur', $event)"
      @keydown="keydown"
      @keyup="$emit('keyup', $event)"
      @input="domInput"
      :placeholder="placeholder"
    ></div>
    <keep-alive>
      <emoji class="emoji" @onEmoJi="onEmoJi" v-if="emoji" />
    </keep-alive>
  </div>
</template>
<script>
import EventUtil from "./utils";
import Emoji from "@/components/Emoji";
export default {
  name: "IptEdit",
  components: {
    Emoji
  },
  props: {
    //默认值
    text: {
      type: String,
      default: ""
    },
    //只读
    disabled: {
      type: Boolean,
      default: false
    },
    //表情
    emoji: {
      type: Boolean,
      default: false
    },
    //placeholder
    placeholder: {
      type: String,
      default: "说点什么..."
    }
  },
  mounted() {
    // 组件初始化，对innerHTML赋值
    this.$refs.edit.innerHTML = this.text;
    // 一旦div的dom发生插入值的操作，调用domChange()方法传递值至父组件
    EventUtil.addHandler(this.$refs.edit, "DOMNodeInserted", this.domChange);
  },
  beforeDestroy() {
    // 销毁
    EventUtil.removeHandler(this.$refs.edit, "DOMNodeInserted", this.domChange);
  },
  methods: {
    //选择到的表情
    onEmoJi(i) {
      this.$refs.edit.focus();
      EventUtil.insertHtmlAtCaret(i);
    },
    domChange(event) {
      this.$emit(
        "input",
        this.$refs.edit.innerHTML,
        this.$refs.edit.dataset.index,
        event
      );
    },
    emptyInnerHTML() {
      this.$refs.edit.innerHTML = "";
      this.$emit(
        "input",
        this.$refs.edit.innerHTML,
        this.$refs.edit.dataset.index,
        event
      );
    },
    domInput(event) {
      this.$emit(
        "input",
        this.$refs.edit.innerHTML,
        this.$refs.edit.dataset.index,
        event
      );
    },
    keydown() {
      if (this.emoji) {
        document.onkeydown = function(e) {
          var ev = typeof event != "undefined" ? window.event : e;
          if (ev.keyCode == 13) {
            return false;
          }
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>
#edit {
  position: relative;
}
.editdiv {
  position: relative;
  outline: none;
  border: 1px solid #eaecf1;
  padding: 5px 26px 5px 12px;
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: auto;
  line-height: 24px;
  word-break: break-all;
  user-select: text;
  text-align: left;
  transition: all 0.3s;
}
.isemoji {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.editdiv:empty:before {
  content: attr(placeholder);
  color: #bbb;
}
.editdiv:focus {
  content: none;
  border-color: rosybrown;
}
.emoji {
  position: absolute;
  right: 10px;
  top: 2px;
  cursor: pointer;
}
</style>
