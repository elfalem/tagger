define([],function(){"use strict";function a(b){function c(){switch(b.tagName){case"TEXTAREA":case"INPUT":return b.value;case"SELECT":return b.items[b.selectedIndex].value;default:return b.innerHTML}}function d(a){switch(b.tagName){case"TEXTAREA":case"INPUT":return void(b.value=a||"");case"SELECT":for(var c in b.items)if(b.items[c].value==a)return void(b.selectedIndex=c);return;default:return void(b.innerHTML=a||"")}}var e=this;this.element=function(){return b},this.tag=b.tagName,this.addClass=function(a){var c=b.className.split(/\s+/);return-1===c.indexOf(a)&&(c.push(a),b.className=c.join(" ")),e},this.removeClass=function(a){var c=b.className.split(/\s+/);return-1===c.indexOf(a)?e:(b.className=c.filter(function(b){return b>""&&b!==a}).join(" "),e)},this.value=function(a){return 0===arguments.length?c():(d(a),e)},this.parent=function(){return new a(b.parentElement)},this.toString=function(){return"<"+b.tagName+">"}}return{of:function(b){return new a(b)}}});