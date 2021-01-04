<template>
  <div id="comment">
    <img :src="img.bj" class="comment_bgimg" alt="" draggable="false" />
    <div class="comment_box">
      <div class="comment_notice">
        <img :src="img.lb" alt="" draggable="false" />
        <div class="notice_txt">可以在这里发布课堂公告</div>
      </div>
      <div class="comment_txtbox">
        <div
          class="txtbox_list"
          v-for="(item, index) in levalList"
          :key="index"
        >
          <div class="list_user">
            <img :src="img.icon" alt="" class="user_icon" draggable="false" />
            <span
              class="user_name"
              :style="{
                color: item.Ttype == 1 ? '#ec6c14' : '#554b39'
              }"
              >{{ item.name }}</span
            >
            <div
              class="user_type"
              :style="{
                background: item.Ttype == 1 ? '#f23b29' : '#72d016'
              }"
            >
              {{ item.Ttype == 1 ? "老师" : "学生" }}
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
          :emoIcon="emoIcon"
          placeholder="点击输入内容"
        />
        <div class="ipt_btn" @click="send">发送</div>
      </div>
    </div>
  </div>
</template>
<script>
import IptEdit from "@/components/IptEdit";
import { replaceImg, replaceTxt } from "@/components/Emoji/utils";
export default {
  name: "comment",
  components: {
    IptEdit
  },
  data() {
    return {
      checkHtml: "",
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
    send() {
      const curSay = {
        icon: "",
        say: replaceTxt(this.checkHtml),
        Ttype: 2,
        name: "学生"
      };
      this.levalList.push(curSay);
      this.checkHtml = "";
      this.$refs.edit.emptyInnerHTML();
    }
  }
};
</script>
<style scoped lang="less">
#comment {
  height: 100%;
  width: 100%;
  position: relative;
  user-select: none;
  .comment_bgimg {
    width: 100%;
    height: auto;
  }
  .comment_box {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 8% 0 0 21%;
    .comment_notice {
      width: 88%;
      height: 20%;
      padding: 0 8%;
      img {
        margin: 4% 0 5% 0;
      }
      .notice_txt {
        text-indent: 2em;
        font-size: 14px;
        line-height: 25px;
        word-wrap: break-word;
        word-break: break-all;
        font-weight: 550;
        overflow: hidden;
        color: #814f29;
      }
    }
    .comment_txtbox {
      width: 88%;
      height: 59%;
      padding: 5%;
      margin-top: 4%;
      overflow-y: auto;
      .txtbox_list {
        display: flex;
        flex-direction: column;
        margin-bottom: 3%;
        .list_user {
          display: flex;
          align-items: center;
          .user_icon {
            height: 35px;
            width: 35px;
            border-radius: 50%;
          }
          .user_name {
            font-size: 18px;
            color: #ec6c14;
            margin: 0 4%;
          }
          .user_type {
            width: 47px;
            height: 22px;
            background: #f23b29;
            text-align: center;
            color: #fff;
            line-height: 22px;
            font-size: 16px;
            border-radius: 10px 0 10px 0;
          }
        }
        .list_txt {
          background: #f9eace;
          border-radius: 5px;
          padding: 8%;
          position: relative;
          margin: 5% 0 0 5%;
          .txt {
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
            display: flex;
            align-items: center;
            line-height: 20px;
            font-size: 14px;
            color: #000;
          }
          .txt_triangle {
            position: absolute;
            top: -10px;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 10px solid #f9eace;
          }
        }
      }
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: #d19e5c;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 3px;
        background: #fff;
      }
    }
    .comment_ipt {
      /*
      border: 1px solid #d19e5c;
     */
      height: 11%;
      width: 90%;
      margin-top: 14%;
      position: relative;
      overflow: hidden;
      .ipt_btn {
        color: #fff;
        height: 30%;
        width: 25%;
        position: absolute;
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        letter-spacing: 2px;
        cursor: pointer;
        right: 2%;
        bottom: 12%;
      }
      .ipt_edit {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
