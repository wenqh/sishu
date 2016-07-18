function getParam(key)
{
	var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
}
var source_0 = [{file: "dis/35t", name : "铁艺电动门"}, {file: "dis/36t", name : "感应自动门"}, {file: "dis/37t", name : "铁艺大门"}, {file: "dis/38t", name : "安防系统"}, {file: "dis/39t", name : "智能家居"}, {file: "dis/40t", name : "停车场系统"}];
var source_1 = [{file: "cat1/1", name: "上海竖木结构电动门"}, {file: "cat1/2", name: "魏玛铁艺电动门"}, {file: "cat1/3", name: "安盛山庄铁艺电动门"}, {file: "cat1/4", name: "上海铁艺电动平移门"}, {file: "cat1/5", name: "上海电动门"}, {file: "cat1/6", name: "上海世界花园铁艺电动门"}];
var source_2 = [{file: "cat2/1", name: "感应自动门 一"}, {file: "cat2/2", name: "感应自动门 二"}, {file: "cat2/3", name: "感应自动门 三"}, {file: "cat2/4", name: "感应自动门 四"}, {file: "cat2/5", name: "感应自动门 五"}, {file: "cat2/6", name: "感应自动门 六"}];
var source_3 = [{file: "cat3/1", name: "铁艺大门 一 "}, {file: "cat3/2", name: "铁艺大门 二"}, {file: "cat3/3", name: "铁艺大门 三"}, {file: "cat3/4", name: "铁艺大门 四"}, {file: "cat3/5", name: "铁艺大门 五"}, {file: "cat3/6", name: "铁艺大门 六"}];
var source_4 = [{file: "cat4/1", name: "安防系统 一 "}, {file: "cat4/2", name: "安防系统 二"}, {file: "cat4/3", name: "安防系统 三"}, {file: "cat4/4", name: "安防系统 四"}, {file: "cat4/5", name: "安防系统 五"}, {file: "cat4/6", name: "安防系统 六"}];
var source_5 = [{file: "cat5/chekm01", name: "翻版车库门 "}, {file: "cat5/chekm02", name: "翻版车库门"}, {file: "cat5/chekm03", name: "卷帘车库门"}, {file: "cat5/chekm04", name: "卷帘车库门"}, {file: "cat5/chekm05", name: "实木车库门"}, {file: "cat5/chekm06", name: "实木车库门"}];
var source_6 = [{file: "cat6/zhineng01", name: "DR安全智能家居 "}, {file: "cat6/zhineng02", name: "智能家居 二"}, {file: "cat6/zhineng03", name: "智能家居 三"}, {file: "cat6/zhineng04", name: "智能家居 四"}, {file: "cat6/zhineng05", name: "智能家居 五"}, {file: "cat6/zhineng06", name: "智能家居 六"}];
var source_7 = [{file: "cat7/car1", name: "停车场系统一 "}, {file: "cat7/car2", name: "停车场系统二"}, {file: "cat7/car3", name: "停车场系统三"}, {file: "cat7/car4", name: "停车场系统四"}, {file: "cat7/car5", name: "停车场系统五"}, {file: "cat7/car6", name: "停车场系统六"}];