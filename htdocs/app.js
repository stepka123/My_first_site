//* Taken from a codrops article https://tympanus.net/Tutorials/ShapeHoverEffectSVG/ *\\
var _tt=function(){
	var id = 'tt';
	var top = 3;
	var left = 3;
	var maxw = 300;
	var speed = 8;
	var timer = 10;
	var endalpha = 95;
	var alpha = 0;
	var tt,t,/*c,b,*/h;
	var ie = document.all ? true : false;
	return{
		show:function(e,v,w){
			var t=getEventTarget(e);addEvent(t,'mouseout',this.hide); t.style.cursor='help';
			if(tt==null){
				tt=document.createElement('div');
				tt.setAttribute('id',id);
				document.body.appendChild(tt);
				tt.style.opacity=0;
				if(ie)tt.style.filter = 'alpha(opacity=0)';
			}
			tt.style.display = 'block';
			tt.innerHTML = v;
			tt.style.width = w ? w + 'px' : 'auto';
			if(tt.offsetWidth > maxw){tt.style.width=maxw+'px'}
			h = parseInt(tt.offsetHeight) + top;
			clearInterval(tt.timer);
			tt.timer=setInterval(function(){_tt.fade(1)},timer);
		   dd=getOffset(t);
		   tt.style.top = (dd.top-h+4) + "px";
		   tt.style.left = (dd.left+13) + "px";

		},
		pos:function(e){
			var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
			var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
			tt.style.top = (u - h) + 'px';
			tt.style.left = (l + left) + 'px';
		},
		fade:function(d){
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
				if(endalpha - a < speed && d == 1){i = endalpha - a;
				}else if(alpha < speed && d == -1){i = a;}
				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;
				if(ie)tt.style.filter='alpha(opacity=' + alpha + ')';
			}else{
				clearInterval(tt.timer);
				if(d == -1){tt.style.display = 'none'}
			}
		},
		hide:function(e){
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){_tt.fade(-1)},timer);
		}
	};
}();

/* вспомогательная функция получения координат элемента */

function getOffset(elem) {
if(elem.getBoundingClientRect){
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) }
}else{
    var top=0, left=0;
    while(elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
    }
    return {top: top, left: left}
}
}

/* вспомогательная функция получения объекта, на котором возникло событие */

function getEventTarget(e) {
  var e = e || window.event;
  var target=e.target || e.srcElement;
  if(typeof target == "undefined")return e; // передали this, а не event
  if (target.nodeType==3) target=target.parentNode;// боремся с Safari
  return target;
}

/* стандартная вспомогательная функция назначения обработчика событий */

var addEvent = (function(){
	if (document.addEventListener){
        	return function(obj, type, fn, useCapture){
                	obj.addEventListener(type, fn, useCapture);
	}
	} else if (document.attachEvent){ // для Internet Explorer
	return function(obj, type, fn, useCapture){
	        obj.attachEvent("on"+type, fn);
	}
	} else {
	return function(obj, type, fn, useCapture){
	        obj["on"+type] = fn;
	}
	}
})();