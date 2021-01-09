import qqfaceList from "../../../static/qqface/json/translateqqface.json";
const bg = "/static/qqface/qqface/qqface.png";
const opa = "/static/qqface/qqface/opaticy.png";
//单个表情符替换成img标签
function imgHTML(info) {
  const imgSrc = qqfaceList.find(item => item.value == info);
  return `<img src='${opa}' style='background:url("${bg}");${imgSrc.icon}' emoji=${imgSrc.name} draggable="false" />`;
}
//字符串内的img标签替换成src属性转换的表情符
function replaceImg(text) {
  return text.replace(/<img [^>]*emoji=['"]([^'"]+)[^>]*>/gi, function(
    match,
    capture
  ) {
    //capture,返回每个匹配的字符串
    return qqfaceList.find(item => item.name == capture).value;
  });
}
//字符串内的表情符批量替换成img标签
function replaceTxt(strCont) {
  for (var i in qqfaceList) {
    var item = qqfaceList[i];
    var strimg = `<img src='${opa}' style='background:url("${bg}");${item.icon}' draggable="false" emoji=${item.name}>`;
    var reg = new RegExp("\\" + item.value, "g");
    strCont = strCont.replace(reg, strimg);
  }
  return strCont;
}
const emojiList = [
  [
    "[微笑]",
    "[撇嘴]",
    "[色]",
    "[发呆]",
    "[得意]",
    "[流泪]",
    "[害羞]",
    "[闭嘴]"
  ],
  [
    "[睡]",
    "[大哭]",
    "[尴尬]",
    "[发怒]",
    "[调皮]",
    "[呲牙]",
    "[惊讶]",
    "[难过]"
  ],
  [
    "[冷汗]",
    "[抓狂]",
    "[吐]",
    "[偷笑]",
    "[可爱]",
    "[白眼]",
    "[傲慢]",
    "[饥饿]"
  ],
  ["[困]", "[惊恐]", "[流汗]", "[悠闲]", "[酷]", "[憨笑]", "[奋斗]", "[咒骂]"],
  ["[疑问]", "[嘘]", "[晕]", "[衰]", "[骷髅]", "[敲打]", "[再见]", "[擦汗]"],
  [
    "[抠鼻]",
    "[鼓掌]",
    "[糗大了]",
    "[坏笑]",
    "[疯了]",
    "[左哼哼]",
    "[右哼哼]",
    "[哈欠]"
  ],
  [
    "[鄙视]",
    "[委屈]",
    "[快哭了]",
    "[阴险]",
    "[亲亲]",
    "[吓]",
    "[可怜]",
    "[西瓜]"
  ],
  [
    "[啤酒]",
    "[篮球]",
    "[乒乓]",
    "[菜刀]",
    "[饭]",
    "[猪头]",
    "[玫瑰]",
    "[凋谢]"
  ],
  ["[蛋糕]", "[闪电]", "[足球]", "[瓢虫]", "[咖啡]", "[饭]", "[炸弹]", "[刀]"],
  ["[便便]", "[爱心]", "[心碎]", "[嘴唇]", "[礼物]", "[拥抱]", "[强]", "[弱]"],
  ["[胜利]", "[抱拳]", "[拳头]", "[差劲]", "[爱你]", "[NO]", "[OK]", "[月亮]"],
  [
    "[太阳]",
    "[勾引]",
    "[握手]",
    "[爱情]",
    "[飞吻]",
    "[跳跳]",
    "[发抖]",
    "[怄火]"
  ],
  [
    "[转圈]",
    "[磕头]",
    "[回头]",
    "[激动]",
    "[乱舞]",
    "[献吻]",
    "[右太极]",
    "[跳跳]"
  ]
];
function myBrowser() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  var isIE =
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1 &&
    !isOpera; //判断是否IE浏览器
  var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  var isSafari =
    userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
  var isChrome =
    userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return "IE7";
    } else if (fIEVersion == 8) {
      return "IE8";
    } else if (fIEVersion == 9) {
      return "IE9";
    } else if (fIEVersion == 10) {
      return "IE10";
    } else if (fIEVersion == 11) {
      return "IE11";
    } else {
      return "0";
    } //IE版本过低
    return "IE";
  }
  if (isOpera) {
    return "Opera";
  }
  if (isEdge) {
    return "Edge";
  }
  if (isFF) {
    return "FF";
  }
  if (isSafari) {
    return "Safari";
  }
  if (isChrome) {
    return "Chrome";
  }
}
export { imgHTML, replaceImg, emojiList, replaceTxt, myBrowser };
/*   const list = [
    "微笑",
    "撇嘴",
    "色",
    "发呆",
    "得意",
    "流泪",
    "害羞",
    "闭嘴",
    "睡",
    "大哭",
    "尴尬",
    "发怒",
    "调皮",
    "呲牙",
    "惊讶",
    "难过",
    "酷",
    "冷汗",
    "抓狂",
    "吐",
    "偷笑",
    "可爱",
    "白眼",
    "傲慢",
    "饥饿",
    "困",
    "惊恐",
    "流汗",
    "憨笑",
    "大兵",
    "奋斗",
    "咒骂",
    "疑问",
    "嘘",
    "晕",
    "折磨",
    "衰",
    "骷髅",
    "敲打",
    "再见",
    "擦汗",
    "抠鼻",
    "鼓掌",
    "糗大了",
    "坏笑",
    "左哼哼",
    "右哼哼",
    "哈欠",
    "鄙视",
    "委屈",
    "快哭了",
    "阴险",
    "亲亲",
    "吓",
    "可怜",
    "菜刀",
    "西瓜",
    "啤酒",
    "篮球",
    "乒乓",
    "咖啡",
    "饭",
    "猪头",
    "玫瑰",
    "凋谢",
    "示爱",
    "爱心",
    "心碎",
    "蛋糕",
    "闪电",
    "炸弹",
    "刀",
    "足球",
    "瓢虫",
    "便便",
    "月亮",
    "太阳",
    "礼物",
    "拥抱",
    "强",
    "弱",
    "握手",
    "胜利",
    "抱拳",
    "勾引",
    "拳头",
    "差劲",
    "爱你",
    "NO",
    "OK",
    "爱情",
    "飞吻",
    "跳跳",
    "发抖",
    "怄火",
    "转圈",
    "磕头",
    "回头",
    "跳绳",
    "挥手",
    "激动",
    "街舞",
    "献吻",
    "左太极",
    "右太极"
  ]; */
//return `<img draggable="false" src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/102.gif">`;
