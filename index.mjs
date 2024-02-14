// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-linked-list@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(e,r){for(var t=e.first();t;){if(t.value[0]===r)return t;t=t.next}return null}function u(e,r){for(var t=e.first();t;)t.value[1]<r&&e.remove(t),t=t.next;return e}function l(e){var r,t,n,o,l;for(r=new i,t=e[0];!(n=t.next()).done;)null===(o=s(r,n.value))&&r.push([n.value,1]);if(0===r.length)return r;for(l=1;l<e.length;l++){for(t=e[l];!(n=t.next()).done;)(o=s(r,n.value))&&o.value[1]===l&&(o.value[1]+=1);if(u(r,l+1),0===r.length)return r}return r}function d(){var i,s,u,f,a,m;if((u=arguments.length)<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(i=[],m=0;m<u;m++){if(!t(arguments[m]))throw new TypeError(o("invalid argument. Must provide an iterator protocol-compliant object. Argument: `%u`. Value: `%s`.",m,arguments[m]));i.push(arguments[m])}if(e(f={},"next",v),e(f,"return",p),n){for(m=0;m<u;m++)if(!r(i[m][n])){a=!0;break}a||e(f,n,h)}return a=!1,f;function v(){var e,r;if(a)return{done:!0};if(void 0===s){if(0===(e=l(i)).length)return a=!0,{done:!0};s=e.iterator()}return(r=s.next()).done?(a=!0,r):{value:r.value[0],done:!1}}function p(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){var e,r;for(e=[],r=0;r<u;r++)e.push(i[r][n]());return d.apply(null,e)}}export{d as default};
//# sourceMappingURL=index.mjs.map
