const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 4001;
var users = 0;
// io.set( 'origins', '*localhost:4000' );
var levalList = [];
io.on("connection", socket => {
  users++;
  socket.emit("connection", { msg: "连接成功", list: levalList, users: users });
  console.log(users);
  socket.on("msginfo", msg => {
    levalList.unshift({ userID: socket.id, ...msg });
    io.emit("msginfo", { list: levalList });
    console.log("Msg", socket.id, msg);
  });
  socket.on("leave", msg => {
    io.emit("leaveInfo", msg + "离开了房间");
    console.log(msg + "离开了房间");
    users--;
    socket.disconnect(true);
  });
  socket.on("clean", msg => {
    io.emit("leaveInfo", msg + "清空了消息");
    console.log(msg + "清空了消息");
    levalList = [];
    io.emit("msginfo", { list: [] });
  });
  socket.on("focus", msg => {
    io.emit("ipt", msg + "正在输入...");
    console.log(msg + "正在输入...");
  });
  socket.on("blur", msg => {
    io.emit("ipt", "");
  });
});
http.listen(port, function() {
  console.log(`listening on port:${port}`);
});
