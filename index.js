// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterIntersection=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var s,a,c,h;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(t,e)||f.call(t,e)?(s=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=s):t[e]=r.value),c="get"in r,h="set"in r,a&&(c||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&i&&i.call(t,e,r.get),h&&u&&u.call(t,e,r.set),t};var s=e;function a(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var c=/./;function h(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;function b(t,e){return null!=t&&y.call(t,e)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=_()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[d],e=b(t,d);try{t[d]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[d]=r:delete t[d],n}:function(t){return v.call(t)},m=Boolean.prototype.toString;var w=_();function x(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function j(t){return h(t)||x(t)}function S(){return new Function("return this;")()}a(j,"isPrimitive",h),a(j,"isObject",x);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,O="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!h(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(A)return A;if(E)return E;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,P=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(k,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function G(t){return null!==t&&"object"==typeof t}function I(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var L="function"==typeof c||"object"==typeof P||"function"==typeof B?function(t){return I(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?I(t).toLowerCase():e};function M(t){return"function"===L(t)}function F(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&M(t.next)}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function R(t){return s(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,s(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),s(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function U(){return this instanceof U?(this._length=0,this._first=null,this._last=null,this):new U}function J(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function X(t,e){for(var r=t.first();r;){if(r.value[0]===e)return r;r=r.next}return null}function q(t,e){for(var r=t.first();r;)r.value[1]<e&&t.remove(r),r=r.next;return t}function z(t){var e,r,n,o,i;for(e=new U,r=t[0];!(n=r.next()).done;)null===(o=X(e,n.value))&&e.push([n.value,1]);if(0===e.length)return e;for(i=1;i<t.length;i++){for(r=t[i];!(n=r.next()).done;)(o=X(e,n.value))&&o.value[1]===i&&(o.value[1]+=1);if(q(e,i+1),0===e.length)return e}return e}return a(U.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),a(U.prototype,"first",(function(){if(this._length)return this._first})),a(U.prototype,"insert",(function(t,e){var r;if(t===this._last)return this.push(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new R(e),t._next._prev=r,r._next=t._next,t._next=r,r._prev=t,this._length+=1,this})),a(U.prototype,"iterator",(function(){var t,e,r,n,o;return r=this,o=-1,t=this.toArray(),a(e={},"next",(function(){if(o+=1,n||o>=t.length)return{done:!0};return{value:t[o],done:!1}})),a(e,"return",(function(t){if(n=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),N&&a(e,N,(function(){return r.iterator()})),e})),a(U.prototype,"last",(function(){if(this._length)return this._last})),function(t,e,r){s(t,e,{configurable:!1,enumerable:!1,get:r})}(U.prototype,"length",(function(){return this._length})),a(U.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),a(U.prototype,"push",(function(t){var e;return e=new R(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),a(U.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),a(U.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),a(U.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),a(U.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),a(U.prototype,"unshift",(function(t){var e;return e=new R(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this})),function t(){var e,r,n,o,i,u;if((n=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(e=[],u=0;u<n;u++){if(!F(arguments[u]))throw new TypeError(J("0CV4A",u,arguments[u]));e.push(arguments[u])}if(a(o={},"next",l),a(o,"return",f),N){for(u=0;u<n;u++)if(!M(e[u][N])){i=!0;break}i||a(o,N,s)}return i=!1,o;function l(){var t,n;if(i)return{done:!0};if(void 0===r){if(0===(t=z(e)).length)return i=!0,{done:!0};r=t.iterator()}return(n=r.next()).done?(i=!0,n):{value:n.value[0],done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function s(){var r,o;for(r=[],o=0;o<n;o++)r.push(e[o][N]());return t.apply(null,r)}}}));
//# sourceMappingURL=index.js.map
