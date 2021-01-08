/*
 * @param needHms [Bollean] 需要时分秒传值
 */
function getNowTime(needHms) {
  var date = new Date();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var hms =
    date.getFullYear() +
    "-" +
    month +
    "-" +
    strDate +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  var currentDate = date.getFullYear() + "-" + month + "-" + strDate;
  return needHms ? hms : currentDate;
}
export { getNowTime };
