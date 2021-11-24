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
/**
 * 获取地址栏中的指定参数
 * @param url 地址
 * @param par 需要删除的指定字段
 */
function getvar(url, par) {
  var urlsearch = url.split("?");
  pstr = urlsearch[1].split("&");
  for (var i = pstr.length - 1; i >= 0; i--) {
    var tep = pstr[i].split("=");
    if (tep[0] == par) {
      return tep[1];
    }
  }
  return false;
}
/**
 * 删除地址栏中的指定参数
 * @param url 地址
 * @param par 需要删除的指定字段
 */
function removeURLParameter(url, par) {
  var urlparts = url.split("?");
  if (urlparts.length >= 2) {
    //参数名前缀
    var prefix = encodeURIComponent(parameter) + "=";
    var pars = urlparts[1].split(/[&;]/g);
    //循环查找匹配参数
    for (var i = pars.length; i-- > 0; ) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        //存在则删除
        pars.splice(i, 1);
      }
    }
    return urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
  }
  return url;
}

export { getNowTime };
