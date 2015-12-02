define(["system/enumerable","system/mvc/componentManager","system/logManager","system/mvc/html"],function(a,b,c,d){"use strict";function e(){var a={};this.createComponentScope=function(b,c){return i.debug("Creating MVC scope for component {0}",b),c instanceof f?a[b]=c:a[b]=new f(c.controller,c.view)},this.MvcScope=f}function f(b,c){function e(){f={},j=[],a.of(c.querySelectorAll("[model]")).each(function(a){var b=a.getAttribute("model");f[b]||(f[b]=[]);var c=f[b];c.push(new g(a,k))}),a.of(c.querySelectorAll("[event]")).each(function(a){j.push(new h(a,k))})}var f,j,k=this;this.model=b.model||(b.model={}),this.controller=b,this.updateView=function(b){a.of(f[b]).select(function(a){return d.of(a.element)}).where(function(a){return a.value()!=k.model[b]}).each(function(a){i.debug("updating model.{0} on element {1}",b,a.toString()),a.value(k.model[b])})},e()}function g(b,c){function e(){a.of(f(b.tagName)).each(function(a){b.addEventListener(a,g)})}function f(){switch(b.tagName){case"TEXTAREA":case"INPUT":return["change","keyup"];case"SELECT":return["change"];default:return[]}}function g(){var a=d.of(b).value();a!=c.model[h]&&(c.model[h]=a,c.updateView(h),c.controller.modelChanged&&c.controller.modelChanged(h,b,a))}var h=b.getAttribute("model");this.element=b,this.modelKey=h,e()}function h(b,c){function d(){a.of(j||g(b.tagName)).each(function(a){b.addEventListener(a,e)})}function e(){b.disabled||(i.info("Event {0} fired.",h),l.length>0?(b.disabled=!0,l.apply(c,[f])):l.apply(c))}function f(){b.disabled=!1}function g(){switch(b.tagName){case"TEXTAREA":case"INPUT":return["change","keyup"];case"SELECT":return["change"];default:return["click"]}}var h=b.getAttribute("event"),j=null;if(-1!==h.indexOf(":")){var k=h.split(":");h=k[1],j=k[0].split(",")}var l=c.controller[h]||null;this.element=b,l&&d()}var i=c.getLogger("MVC Binder");return new e});