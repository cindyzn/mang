
var d1=document.getElementsByTagName('body')[0];
	console.log(d1);
//	(function(doc, win) {
//	
//  var docEl = doc.documentElement;
//  console.log(docEl);
//      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//      recalc = function() {
//          var clientWidth = docEl.clientWidth;
//          
//          if (!clientWidth) return;
//          if (clientWidth >= 740) {
//              clientWidth = 740;
//          }
//          if (clientWidth <= 320) {
//              clientWidth = 320;
//          }
//          docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
//      };
//  if (!doc.addEventListener) return;
//  win.addEventListener(resizeEvt, recalc, false);
//  doc.addEventListener('DOMContentLoaded', recalc, false);
//})(document, window);

