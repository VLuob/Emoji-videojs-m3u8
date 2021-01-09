<template>
  <div id="comment">
    <img :src="img.bj" class="comment_bgimg" alt="" draggable="false" />
    <div class="comment_box">
      <!-- 公告 -->
      <div class="comment_notice">
        <img :src="img.lb" alt="" draggable="false" />
        <!-- 公告内容-->
        <div class="notice_txt">{{ levalInfo.notice }}</div>
      </div>
      <!-- 消息池 -->
      <div class="comment_txtbox" ref="comment">
        <!-- 消息列表 -->
        <div
          class="txtbox_list"
          v-for="(item, index) in levalInfo.list"
          :key="index"
        >
          <div class="list_user">
            <!-- 用户头像 -->
            <img :src="img.icon" alt="" class="user_icon" draggable="false" />
            <!-- 用户名称 -->
            <div
              class="user_name"
              :title="item.name"
              :style="{ color: item.Ttype == 1 ? '#ec6c14' : '#554b39' }"
            >
              {{ item.name }}
            </div>
            <!-- 用户类型徽标 -->
            <div
              class="user_type"
              :style="{ background: item.Ttype == 1 ? '#f23b29' : '#72d016' }"
            >
              {{ item.Ttype == 1 ? "老师" : "学生" }}
            </div>
            <!-- 更多按钮 -->
            <div class="user_more">
              <el-popover placement="bottom" trigger="click">
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
          <!-- 消息框 -->
          <div class="list_txt">
            <div class="txt_triangle"></div>
            <!-- 消息内容 -->
            <div class="txt" v-html="replaceTxt(item.say || '')"></div>
          </div>
        </div>
      </div>
      <!-- 输入框 -->
      <div class="comment_ipt">
        <ipt-edit
          class="ipt_edit"
          ref="edit"
          emoji
          @keyup.enter="send"
          v-model="checkHtml"
          :placeholder="unSpeak ? unSpeakText : placeholder"
        />
        <!-- 禁言遮罩 -->
        <div class="ipt_unspeak" v-if="unSpeak"></div>
        <div class="comment_btn" v-else>
          <emoji class="emoji" @onEmoJi="onEmoJi" :emoIcon="emoIcon" />
          <div class="ipt_btn" @click="send">发送</div>
        </div>
      </div>
    </div>
    <!-- 展开显示聊天框Btn-->
    <div class="comment_hide" @click="$emit('changeSH')">
      {{ isRetract ? "展开" : "收起" }}
    </div>
  </div>
</template>
<script>
import Emoji from "@/components/Emoji";
import IptEdit from "@/components/IptEdit";
import { replaceImg, replaceTxt, myBrowser } from "@/components/Emoji/utils";
export default {
  name: "comment",
  components: {
    IptEdit,
    Emoji
  },
  props: {
    //是否收起
    isRetract: {
      type: Boolean
    }
  },
  data() {
    return {
      checkHtml: "", //输入框
      ws: null, //WebSocket实例
      unSpeak: false, //是否禁言
      count: null, //在线人数
      replaceTxt: replaceTxt, //表情文字替换表情方法
      unSpeakText: "全员禁言中", //禁言文字
      placeholder: "点击输入内容", //输入框提示文字
      emoIcon: require("@/assets/img/emoji.png"), //表情选择icon
      curUserInfo: {}, //当前点击到的用户信息
      moreBtnList: ["引用", "踢人", "举报"], //用户更多按钮列表
      /* 消息列表 */
      levalInfo: {
        notice: "可以在这里发布课堂公告",
        list: []
      },
      img: {
        lb: require("@/assets/img/lb.png") /* 公告icon */,
        bj: require("@/assets/img/bj.png") /* 聊天背景 */,
        icon: require("@/assets/img/可爱.gif") /* 默认用户头像 */
      }
    };
  },
  computed: {},
  mounted() {
    this.initWebSocket();
    console.log();
  },
  methods: {
    //发送消息按钮
    send() {
      try {
        if (this.checkHtml) {
          let _this = this;
          const params = {
            icon: "",
            say: replaceImg(this.checkHtml),
            Ttype: 2,
            name: myBrowser() //"学生"
          };
          _this.ws.send(JSON.stringify(params));
          this.checkHtml = "";
          this.$refs.edit.emptyInnerHTML();
          this.placeholder = "点击输入内容";
        } else {
          this.placeholder = "输入不能为空";
        }
      } catch (err) {}
    },
    //进入页面创建websocket连接
    initWebSocket() {
      let _this = this;
      //判断页面有没有存在websocket连接
      if (window.WebSocket) {
        let ws = new WebSocket("ws://192.168.1.11:8181");
        _this.ws = ws;
        ws.onopen = function(e) {
          console.log("服务器连接成功");
        };
        ws.onclose = function(e) {
          console.log("服务器连接关闭");
        };
        ws.onerror = function() {
          console.log("服务器连接出错");
        };
        ws.onmessage = function(e) {
          //接收服务器返回的数据
          let resData = JSON.parse(e.data);
          if (resData.funName == "userCount") {
            _this.count = resData.users;
            _this.levalInfo.list = resData.chat;
          } else {
            _this.levalInfo.list = [
              ..._this.levalInfo.list,
              {
                name: resData.name,
                say: replaceTxt(resData.say),
                icon: resData.icon,
                Ttype: resData.Ttype
              }
            ];
          }
        };
      } else {
        alert("不支持ws");
        console.log("不支持ws");
      }
    },
    //更多
    userHandle(item) {
      switch (item) {
        case "引用":
          console.log(this.curUserInfo);
          !this.unSpeak &&
            this.$refs.edit.setIptValue(
              replaceTxt(this.checkHtml + this.curUserInfo.say)
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
    },
    //滚动条定位到底部
    locationBottom() {
      let ele = document.querySelector(".comment_txtbox");
      ele.scrollTop = ele.scrollHeight;
    }
  },
  updated() {
    this.locationBottom();
  },
  destroyed() {
    let _this = this;
    _this.ws.close();
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
