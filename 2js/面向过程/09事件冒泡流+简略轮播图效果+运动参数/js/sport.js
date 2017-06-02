function getstyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
function startmove(obj,json,obj2){
	clearInterval(obj.timer);
	setInterval(function(){
		for(getattr in json){//遍历运动值
			var sport = parseInt(getstyle(obj,getattr));//获取当前对象的实际位置
//			console.log(getstyle(obj,getattr))
			var vel = (json[getattr]-sport)/6;//定义图片的运动速度，用运动值减去实际值，然后除去6(可随意设置，值越大，速度越慢)；
			vel>0?vel=Math.ceil(vel):vel=Math.floor(vel);//判断如果速度值大于0时，向下取整，值小于0时，向上取整
			if(sport == json[getattr]){//判断如果实际值等于目标值，则停止定时器，否则目标的实际值等于实际值加上运动值
				clearInterval(obj.timer);
			}else{
				obj.style[getattr] = (sport + vel)+"px";
			}
		}
	},60)
//	for(var j=0;j<obj2.length;j++){
//		console.log(obj2)
//		obj2.index = j;
////		console.log(obj2.oooo)
//		obj2[obj2.index].onmouseup = function (){
//			that = this;
//			console.log("a")
////			for(var i=0;i<obj2.length;i++){
////				obj2[i].index = i;
////				obj2[i].onmouseup = function (){
//					obj.style.marginLeft = this.index * json[i] + "px";
////				}
////			}
//		}
//	}
};
//function click(obj,json,obj2){
//	that = this;
//	for(var i=0;i<obj.length;i++){
//		obj[i].index = i;
//		obj[i].onmouseup = function (){
//			for(get in json){
////				var speed = getstyle(obj2,get);
//				obj2.style[get] = this.index * -600 + "px";
//				console.log(this.index,json[get])
//			}
//		}
//	}
//}
