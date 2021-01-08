<template>
  <div class="socket">
    <h3>socket</h3>
    <button @click="sendBtn">send</button>
    <button @click="leaveBtn">leave</button>
    <button @click="connectBtn">connection</button>
    <button @click="cleanBtn">clean</button>
    <div>onLine:{{ users }}</div>
    <ipt-Edit
      class="beautiful"
      emoji
      v-model="checkHtml"
      ref="edit"
      @focus="focus"
      @blur="blur"
      @keyup.enter="sendBtn"
    >
      <Emoji slot="emoji" @onEmoJi="onEmoJi" class="emoji" />
    </ipt-Edit>
    <div>{{ ipt }}</div>
    <test :list="list">
      <template slot-scope="scope">
        <h3>userID:{{ scope.row.userID }}</h3>
        <h3 v-html="replaceTxt(scope.row.say)" class="h3"></h3>
        <h3>Time:{{ scope.row.time }}</h3>
      </template>
    </test>
  </div>
</template>
<script>
import IptEdit from "@/components/IptEdit";
import Emoji from "@/components/Emoji";
import test from "@/components/test";
import { replaceImg, replaceTxt } from "@/components/Emoji/utils";
import { getNowTime } from "@/utils";
export default {
  components: {
    IptEdit,
    Emoji,
    test
  },
  data() {
    return {
      checkHtml: "",
      userID: "",
      ipt: "",
      users: "", //在线人数
      replaceTxt: replaceTxt,
      list: []
    };
  },
  computed: {},
  mounted() {
     console.log(  this.$socket)
  },
  sockets: {
    //这里是监听connect事件
    connection(data) {
      console.log(data.msg);
      this.users = data.users;
      this.list = data.list;
    },
    msginfo(data) {
      this.list = data.list;
      this.userID = data.list[0] ? data.list[0].userID : "";
      console.log(data);
    },
    leaveInfo(data) {
      this.$notify.info({
        title: "消息",
        message: data
      });
    },
    ipt(data) {
      this.ipt = data;
    }
  },
  methods: {
    onEmoJi(emoji) {
      this.$refs.edit.onEmoJi(emoji);
    },
    focus() {
      this.$socket.emit("focus", this.userID);
    },
    blur() {
      this.$socket.emit("blur");
    },
    sendBtn() {
      if (this.checkHtml) {
        this.$socket.emit("msginfo", {
          say: replaceImg(this.checkHtml),
          time: getNowTime("hms")
        });
        this.checkHtml = "";
        this.$refs.edit.emptyInnerHTML();
      }
    },
    leaveBtn() {
      this.$socket.emit("leave", this.userID);
    },
    connectBtn() {
      this.$socket.emit("connection");
    },
    cleanBtn() {
      this.$socket.emit("clean", this.userID);
    }
  },
  destroyed() {
    this.leaveBtn();
  }
};
</script>
<style scoped lang="less">
.beautiful {
  width: 300px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  position: relative;
  .emoji {
    position: absolute;
    right: 2px !important;
    top: 3px;
  }
}
.h3 {
  margin: 0 20px;
}
</style>
