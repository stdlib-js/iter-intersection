"use strict";var p=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var d=p(function(E,c){"use strict";var f=require("@stdlib/utils-define-nonenumerable-read-only-property"),w=require("@stdlib/assert-is-function"),x=require("@stdlib/assert-is-iterator-like"),v=require("@stdlib/symbol-iterator"),q=require("@stdlib/dstructs-linked-list"),b=require("@stdlib/string-format");function l(n,r){for(var e=n.first();e;){if(e.value[0]===r)return e;e=e.next}return null}function k(n,r){for(var e=n.first();e;)e.value[1]<r&&n.remove(e),e=e.next;return n}function y(n){var r,e,i,u,t;for(r=new q,e=n[0];i=e.next(),!i.done;)u=l(r,i.value),u===null&&r.push([i.value,1]);if(r.length===0)return r;for(t=1;t<n.length;t++){for(e=n[t];i=e.next(),!i.done;)u=l(r,i.value),u&&u.value[1]===t&&(u.value[1]+=1);if(k(r,t+1),r.length===0)return r}return r}function s(){var n,r,e,i,u,t;if(e=arguments.length,e<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(n=[],t=0;t<e;t++){if(!x(arguments[t]))throw new TypeError(b("invalid argument. Must provide an iterator protocol-compliant object. Argument: `%u`. Value: `%s`.",t,arguments[t]));n.push(arguments[t])}if(i={},f(i,"next",g),f(i,"return",h),v){for(t=0;t<e;t++)if(!w(n[t][v])){u=!0;break}u||f(i,v,m)}return u=!1,i;function g(){var a,o;if(u)return{done:!0};if(r===void 0){if(a=y(n),a.length===0)return u=!0,{done:!0};r=a.iterator()}return o=r.next(),o.done?(u=!0,o):{value:o.value[0],done:!1}}function h(a){return u=!0,arguments.length?{value:a,done:!0}:{done:!0}}function m(){var a,o;for(a=[],o=0;o<e;o++)a.push(n[o][v]());return s.apply(null,a)}}c.exports=s});var L=d();module.exports=L;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
