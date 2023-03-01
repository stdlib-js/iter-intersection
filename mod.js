// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var s,a,c,h;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(t,e)||f.call(t,e)?(s=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=s):t[e]=r.value),c="get"in r,h="set"in r,a&&(c||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&i&&i.call(t,e,r.get),h&&u&&u.call(t,e,r.set),t};var s=e;function a(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var c=/./;function h(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;function b(t,e){return null!=t&&y.call(t,e)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=_()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[d],e=b(t,d);try{t[d]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[d]=r:delete t[d],n}:function(t){return v.call(t)},w=Boolean.prototype.toString;var m=_();function x(t){return"object"==typeof t&&(t instanceof Boolean||(m?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function j(t){return h(t)||x(t)}function S(){return new Function("return this;")()}a(j,"isPrimitive",h),a(j,"isObject",x);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof O?O:null;var B=function(t){if(arguments.length){if(!h(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(A)return A;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,k=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(C,"REGEXP",V);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function L(t){return null!==t&&"object"==typeof t}function M(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=V.exec(n.toString()))return e[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(L));var F="function"==typeof c||"object"==typeof k||"function"==typeof P?function(t){return M(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?M(t).toLowerCase():e};function I(t){return"function"===F(t)}function N(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&I(t.next)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function U(t){return s(this,"next",{configurable:!1,enumerable:!0,get:function(){return this._next}}),this.value=t,s(this,"_next",{configurable:!1,enumerable:!1,writable:!0,value:null}),s(this,"_prev",{configurable:!1,enumerable:!1,writable:!0,value:null}),this}function J(){return this instanceof J?(this._length=0,this._first=null,this._last=null,this):new J}function X(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function q(t,e){for(var r=t.first();r;){if(r.value[0]===e)return r;r=r.next}return null}function z(t,e){for(var r=t.first();r;)r.value[1]<e&&t.remove(r),r=r.next;return t}function D(t){var e,r,n,o,i;for(e=new J,r=t[0];!(n=r.next()).done;)null===(o=q(e,n.value))&&e.push([n.value,1]);if(0===e.length)return e;for(i=1;i<t.length;i++){for(r=t[i];!(n=r.next()).done;)(o=q(e,n.value))&&o.value[1]===i&&(o.value[1]+=1);if(z(e,i+1),0===e.length)return e}return e}function H(){var t,e,r,n,o,i;if((r=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(t=[],i=0;i<r;i++){if(!N(arguments[i]))throw new TypeError(X("0CV4A",i,arguments[i]));t.push(arguments[i])}if(a(n={},"next",u),a(n,"return",l),R){for(i=0;i<r;i++)if(!I(t[i][R])){o=!0;break}o||a(n,R,f)}return o=!1,n;function u(){var r,n;if(o)return{done:!0};if(void 0===e){if(0===(r=D(t)).length)return o=!0,{done:!0};e=r.iterator()}return(n=e.next()).done?(o=!0,n):{value:n.value[0],done:!1}}function l(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){var e,n;for(e=[],n=0;n<r;n++)e.push(t[n][R]());return H.apply(null,e)}}a(J.prototype,"clear",(function(){return this._length=0,this._first=null,this._last=null,this})),a(J.prototype,"first",(function(){if(this._length)return this._first})),a(J.prototype,"insert",(function(t,e){var r;if(t===this._last)return this.push(e);for(r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return r=new U(e),t._next._prev=r,r._next=t._next,t._next=r,r._prev=t,this._length+=1,this})),a(J.prototype,"iterator",(function(){var t,e,r,n,o;return r=this,o=-1,t=this.toArray(),a(e={},"next",(function(){if(o+=1,n||o>=t.length)return{done:!0};return{value:t[o],done:!1}})),a(e,"return",(function(t){if(n=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),R&&a(e,R,(function(){return r.iterator()})),e})),a(J.prototype,"last",(function(){if(this._length)return this._last})),function(t,e,r){s(t,e,{configurable:!1,enumerable:!1,get:r})}(J.prototype,"length",(function(){return this._length})),a(J.prototype,"pop",(function(){var t;return this._length&&(t=this._last.value,this._last._prev?(this._last=this._last._prev,this._last._next=null):(this._first=null,this._last=null),this._length-=1),t})),a(J.prototype,"push",(function(t){var e;return e=new U(t),0===this._length?(this._first=e,this._last=e):(e._prev=this._last,this._last._next=e,this._last=e),this._length+=1,this})),a(J.prototype,"remove",(function(t){var e,r;if(t===this._first)return this.shift();if(t===this._last)return this.pop();for(e=t.value,r=this._first;r!==this._last&&r!==t;)r=r._next;if(r===this._last)throw new Error("invalid argument. The list does not contain the provided list node.");return t._prev._next=t._next,t._next._prev=t._prev,this._length-=1,e})),a(J.prototype,"shift",(function(){var t;return this._length&&(t=this._first.value,this._first._next?(this._first=this._first._next,this._first._prev=null):(this._first=null,this._last=null),this._length-=1),t})),a(J.prototype,"toArray",(function(){var t,e,r;for(e=[],t=this._first,r=0;r<this._length;r++)e.push(t.value),t=t.next;return e})),a(J.prototype,"toJSON",(function(){var t={type:"linked-list"};return t.data=this.toArray(),t})),a(J.prototype,"unshift",(function(t){var e;return e=new U(t),0===this._length?(this._first=e,this._last=e):(e._next=this._first,this._first._prev=e,this._first=e),this._length+=1,this}));export{H as default};
//# sourceMappingURL=mod.js.map