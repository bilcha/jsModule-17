!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="dist/",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(5);const r="q wertyuiop[]asdfghjkl;'zxcvbnm,./".split("");!function(n){const e=document.querySelector("#keyboardTpl").innerHTML.trim(),t=_.template(e)({data:n});document.querySelector(".keyboard").innerHTML=t}([[{q:"do"},{w:"re"},{e:"mi"},{r:"fa"},{t:"sol"},{y:"la"},{u:"si"},{i:"do"},{o:"re"},{p:"mi"},{"[":"fa"},{"]":"sol"}],[{a:"do"},{s:"re"},{d:"mi"},{f:"fa"},{g:"sol"},{h:"la"},{j:"si"},{k:"do"},{l:"re"},{";":"mi"},{"'":"fa"}],[{z:"do"},{x:"re"},{c:"mi"},{v:"fa"},{b:"sol"},{n:"la"},{m:"si"},{",":"do"},{".":"re"},{"/":"mi"}],[{space:"do"}]]);const o=document.querySelectorAll(".keyboard__btn"),i=document.querySelector("#slideThree");window.addEventListener("keydown",function(){let n=function(n){const e={188:"44",109:"45",190:"46",191:"47",192:"96",220:"92",222:"39",221:"93",219:"91",173:"45",187:"61",186:"59",189:"45"};let t=n;e.hasOwnProperty(t)&&(t=e[t]);t=t>=65&&t<=90?String.fromCharCode(t+32):String.fromCharCode(t);return t}(event.which);r.indexOf(n)>=0&&(" "==n&&(n="space"),o.forEach(function(e){e.innerHTML==n&&(e.classList.toggle("keyboard__btn--active"),i.checked&&(n=>{const e=document.querySelector(`audio[data-note=${n}]`);e.currentTime=0,e.play()})(e.getAttribute("data-note")))}))}),window.addEventListener("keyup",function(){o.forEach(function(n){n.classList.remove("keyboard__btn--active")})})},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),l=null,c=0,d=[],f=t(1);function u(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function b(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function h(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),g(e,n.attrs),b(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function y(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var a=c++;t=l||(l=h(e)),r=k.bind(null,t,a,!1),o=k.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),b(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return u(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&u(p(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,v=(x=[],function(n,e){return x[n]=e,x.filter(Boolean).join("\n")});function k(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){(n.exports=t(3)(!1)).push([n.i,".slideThree {\n  width: 80px;\n  height: 26px;\n  background: #333;\n  margin: 20px auto;\n  position: relative;\n  border-radius: 50px;\n  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2); }\n  .slideThree:after {\n    content: 'OFF';\n    color: #000;\n    position: absolute;\n    right: 10px;\n    z-index: 0;\n    font: 12px/26px Arial, sans-serif;\n    font-weight: bold;\n    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15); }\n  .slideThree:before {\n    content: 'ON';\n    color: #27ae60;\n    position: absolute;\n    left: 10px;\n    z-index: 0;\n    font: 12px/26px Arial, sans-serif;\n    font-weight: bold; }\n  .slideThree label {\n    display: block;\n    width: 34px;\n    height: 20px;\n    cursor: pointer;\n    position: absolute;\n    top: 3px;\n    left: 3px;\n    z-index: 1;\n    background: #fcfff4;\n    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);\n    border-radius: 50px;\n    transition: all 0.4s ease;\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3); }\n  .slideThree input[type=checkbox] {\n    visibility: hidden; }\n    .slideThree input[type=checkbox]:checked + label {\n      left: 43px; }\n  .slideThree span {\n    position: absolute;\n    top: -2px;\n    right: 100px;\n    color: #27ae60;\n    font: 26px Arial, sans-serif;\n    font-weight: bold; }\n\na, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: 100%; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:after, blockquote:before, q:after, q:before {\n  content: \"\"; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nbody, button, input, textarea {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nbutton, input[type=button], input[type=submit] {\n  border: none;\n  outline: none;\n  cursor: pointer; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, :after, :before {\n  box-sizing: inherit; }\n\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {\n  display: block; }\n\nembed, img, object, video {\n  display: block;\n  height: auto;\n  width: 100%; }\n\n.page {\n  background-color: #fff;\n  font-family: Roboto,-apple-system,BlinkMacSystemFont,sans-serif; }\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 80rem;\n  margin: auto;\n  padding: 2rem 0;\n  min-height: 100vh; }\n\n.panel {\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n  width: 15%;\n  padding: 1rem .5rem;\n  border-radius: .25rem;\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1); }\n\n.main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 70%;\n  padding: 0 1.5rem; }\n\n.clock {\n  text-align: center; }\n\n.clock__time {\n  font-size: 2rem; }\n\n.keyboard {\n  margin-top: 3rem; }\n\n.keyboard__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: .25rem; }\n\n.keyboard__btn {\n  display: block;\n  outline: 0;\n  padding: 0;\n  width: 3.75rem;\n  height: 3.75rem;\n  margin-right: .5rem;\n  border: 1px solid #bdbdbd;\n  border-radius: .125rem;\n  background-color: transparent;\n  font-size: 1.3rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  color: #424242;\n  cursor: default; }\n\n.keyboard__btn:last-child {\n  margin-right: 0; }\n\n.keyboard__btn--space {\n  width: 20rem; }\n\n.keyboard__btn--active {\n  border: 1px solid transparent;\n  background-color: #03a9f4;\n  color: #fff; }\n\n.lang-ctrls__body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.lang-ctrls__btn {\n  padding: 0;\n  outline: 0;\n  width: 3.25rem;\n  height: 3.25rem;\n  border-radius: .25rem;\n  font-size: 1.125rem;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #616161; }\n\n.lang-ctrls__btn--active {\n  background-color: #03a9f4; }\n\n.typable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n\n.typable, .typable__char {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.typable__char {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 4rem;\n  height: 4rem;\n  margin-right: 1rem;\n  border: 1px solid #616161;\n  border-radius: .25rem;\n  color: #424242;\n  font-size: 3rem; }\n\n.typable__char:last-child {\n  margin-right: 0; }\n\n.typable__char--current {\n  position: relative; }\n\n.typable__char--current:before {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: .5rem;\n  left: 0;\n  bottom: -1rem;\n  border-radius: .25rem;\n  content: \"\";\n  background-color: #03a9f4; }\n\n.typable__char--error {\n  background-color: #ef5350; }\n\n.typable__char--success {\n  background-color: #43a047; }\n\n.user-list {\n  counter-reset: a; }\n\n.user-list__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: .5rem .25rem;\n  color: #424242;\n  border-bottom: 1px solid #bdbdbd; }\n\n.user-list__item:last-child {\n  border-bottom: 0; }\n\n.user-list__item:before {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  counter-increment: a;\n  content: counter(a);\n  background-color: #616161;\n  color: #fff; }\n\n.user-list__score {\n  font-weight: 700; }\n\n.widget {\n  color: color(primary-dark); }\n\n.widget__heading {\n  font-size: 1em;\n  margin-bottom: 1rem;\n  text-align: center; }\n\n.widget-divider {\n  border-top: 1px solid #bdbdbd;\n  padding-top: 1.5rem;\n  margin-top: 1.5rem; }\n\n.pressed {\n  margin: auto;\n  font-size: 32px;\n  height: 60px;\n  line-height: 60px;\n  width: 400px;\n  cursor: pointer;\n  background: #424242;\n  color: #eee;\n  display: flex;\n  justify-content: space-around; }\n\n.keyboard {\n  background: rgba(106, 191, 64, 0.1); }\n",""])},function(n,e,t){var r=t(4);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(2)(r,o);r.locals&&(n.exports=r.locals)}]);