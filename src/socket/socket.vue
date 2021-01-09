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
    <div class="tips" :class="tclass">进入直播</div>
    <div class="d"></div>
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
      list: [],
      tclass: ""
    };
  },
  computed: {},
  mounted() {
    var myWorker = new Worker("worker.js");
    console.log(this.$socket, myWorker);
  },
  sockets: {
    //这里是监听connect事件
    connection(data) {
      this.users = data.users;
      this.list = data.list;
      console.log(data.msg);
    },
    msginfo(data) {
      this.list = data.list;
      this.userID = data.list[0] ? data.list[0].userID : "";
      console.log(data);
    },
    leaveInfo(data) {
      if (data) {
        this.$notify.info({
          title: "消息",
          message: data
        });
      } else {
        this.tclass = "tshow";
        setTimeout(_ => {
          this.tclass = "";
        }, 800);
      }
    },
    ipt(data) {
      this.ipt = data;
    },
    disconnect(data) {
      console.log(data);
    }
  },
  methods: {
    replaceTxt,
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
          say: replaceI(this.checkHtml),
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
.d {
  height: 12px;
  width: 21px;
  background: url("/static/qqface/qqface/qqface.png") no-repeat;
  background-position: 0 0;
}
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
.socket {
  position: relative;
  .tips {
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 20px;
    color: #333;
    opacity: 0;
  }
  .tshow {
    animation: opacitys 0.8s ease-in-out 0s 1 alternate forwards;
  }
  @keyframes opacitys {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
