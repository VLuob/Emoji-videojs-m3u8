<template>
  <div id="comment">
    <img :src="img.bj" class="comment_bgimg" alt="" draggable="false" />
    <div class="comment_box">
      <div class="comment_notice">
        <img :src="img.lb" alt="" draggable="false" />
        <div class="notice_txt">
          可以在这里发布课堂公告,可以在这里发布课堂公告,可以在这里发布课堂公告
          ,可以在这里发布课堂公告,可以在这里发布课堂公告
        </div>
      </div>
      <div class="comment_txtbox">
        <div
          class="txtbox_list"
          v-for="(item, index) in levalList"
          :key="index"
        >
          <div class="list_user">
            <img :src="img.icon" alt="" class="user_icon" draggable="false" />
            <div
              class="user_name"
              :title="item.name"
              :style="{
                color: item.Ttype == 1 ? '#ec6c14' : '#554b39'
              }"
            >
              {{ item.name }}
            </div>
            <div
              class="user_type"
              :style="{
                background: item.Ttype == 1 ? '#f23b29' : '#72d016'
              }"
            >
              {{ item.Ttype == 1 ? "老师" : "学生" }}
            </div>
            <div class="user_more">
              <el-popover placement="bottom" width="20" trigger="click">
                <div
                  class="more_btnlist"
                  v-for="item in moreBtnList"
                  :key="item"
                  @click="userHandle(item)"
                >
                  {{ item }}
                </div>
                <div
                  class="more_click"
                  slot="reference"
                  @click="curUserInfo = item"
                >
                  ···
                </div>
              </el-popover>
            </div>
          </div>
          <div class="list_txt">
            <div class="txt" v-html="item.say"></div>
            <div class="txt_triangle"></div>
          </div>
        </div>
      </div>
      <div class="comment_ipt">
        <ipt-edit
          class="ipt_edit"
          ref="edit"
          emoji
          v-model="checkHtml"
          @keyup.enter="send"
          :placeholder="placeholder"
        />
        <div class="comment_btn">
          <emoji class="emoji" @onEmoJi="onEmoJi" :emoIcon="emoIcon" />
          <div class="ipt_btn" @click="send">发送</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Emoji from "@/components/Emoji";
import IptEdit from "@/components/IptEdit";
import { replaceImg, replaceTxt } from "@/components/Emoji/utils";
export default {
  name: "comment",
  components: {
    IptEdit,
    Emoji
  },
  data() {
    return {
      checkHtml: "",
      placeholder: "点击输入内容", //输入框提示文字
      emoIcon: require("@/assets/img/emoji.png"),
      curUserInfo: {}, //当前点击到的用户信息
      moreBtnList: ["引用", "踢人", "举报"],
      levalList: [
        {
          icon: "",
          say: "欢迎同学们来到智编牛Python线上直播课堂",
          Ttype: 1,
          name: "智编牛助教"
        },
        {
          icon: "",
          say: "开始上课了吗?",
          Ttype: 2,
          name: "张三"
        }
      ],
      emoIcon: require("@/assets/img/emoji.png"),
      img: {
        lb: require("@/assets/img/lb.png"),
        bj: require("@/assets/img/bj.png"),
        icon: require("@/assets/img/可爱.gif")
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    //发送消息按钮
    send() {
      try {
        if (this.checkHtml) {
          this.levalList.push({
            icon: "",
            say: replaceTxt(this.checkHtml),
            Ttype: 2,
            name: "学生"
          });
          console.log(replaceImg(this.checkHtml));
          this.checkHtml = "";
          this.$refs.edit.emptyInnerHTML();
          this.placeholder = "点击输入内容";
        } else {
          this.placeholder = "输入不能为空";
        }
      } catch (err) {}
    },
    //更多
    userHandle(item) {
      switch (item) {
        case "引用":
          this.$refs.edit.setIptValue(
            this.checkHtml
              ? this.checkHtml + this.curUserInfo.say
              : this.curUserInfo.say
          );
          break;
        case "踢人":
          console.log(item);
          break;
        case "举报":
          console.log(item);
          break;
      }
    },
    //选择表情
    onEmoJi(emoji) {
      this.$refs.edit.onEmoJi(emoji);
    }
  },
  updated() {
    //滚动条定位到底部
    let ele = document.querySelector(".comment_txtbox");
    ele.scrollTop = ele.scrollHeight;
  }
};
</script>
<style scoped lang="less">
@import "./index.less";
</style>
<style lang="less">
.el-popover {
  min-width: 50px !important;
  .more_btnlist {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    letter-spacing: 2px;
    &:hover {
      background: #eee;
    }
  }
}
</style>
