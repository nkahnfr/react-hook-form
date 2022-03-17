!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactHookForm={},e.React)}(this,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=r(t),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"==typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>[...e].some(e=>(e=>e.substring(0,e.search(/.\d/))||e)(t)===e),d=e=>e.filter(Boolean),f=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce((e,t)=>i(e)?e:e[t],e);return f(s)||s===e?f(e[t])?r:e[t]:s};const g="blur",y="focusout",b="change",h="onBlur",p="onChange",_="onSubmit",v="onTouched",x="all",A="max",F="min",j="maxLength",V="minLength",O="pattern",S="required",w="validate";var k=(e,t)=>{const r=Object.assign({},e);return delete r[t],r};const D=s.default.createContext(null),C=()=>s.default.useContext(D);var E=(e,t,r,s=!0)=>{const a={};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t[a]!==x&&(t[a]=!s||x),r&&(r[a]=!0),e[a]}});return a},U=e=>u(e)&&!Object.keys(e).length,B=(e,t,r)=>{const s=k(e,"name");return U(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(e=>t[e]===(!r||x))},T=e=>Array.isArray(e)?e:[e],M=(e,t,r)=>r&&t?e===t:!e||!t||e===t||T(e).some(e=>e&&(e.startsWith(t)||t.startsWith(e)));function N(e){const t=s.default.useRef(e);t.current=e,s.default.useEffect(()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)},[e.disabled])}function R(e){const t=C(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,u]=s.default.useState(r._formState),l=s.default.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=s.default.useRef(n),d=s.default.useRef(!0);c.current=n;return N({disabled:a,callback:s.default.useCallback(e=>d.current&&M(c.current,e.name,i)&&B(e,l.current)&&u(Object.assign(Object.assign({},r._formState),e)),[r,i]),subject:r._subjects.state}),s.default.useEffect(()=>()=>{d.current=!1},[]),E(o,r._proxyFormState,l.current,!1)}var L=e=>"string"==typeof e,q=(e,t,r,s)=>{const a=Array.isArray(e);return L(e)?(s&&t.watch.add(e),m(r,e)):a?e.map(e=>(s&&t.watch.add(e),m(r,e))):(s&&(t.watchAll=!0),r)},W=e=>"function"==typeof e,I=e=>{for(const t in e)if(W(e[t]))return!0;return!1};function P(e){const t=C(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},l=s.default.useRef(a);l.current=a;const c=s.default.useCallback(e=>{if(M(l.current,e.name,o)){const t=q(l.current,r._names,e.values||r._formValues);m(f(l.current)||u(t)&&!I(t)?Object.assign({},t):Array.isArray(t)?[...t]:f(t)?n:t)}},[r,o,n]);N({disabled:i,subject:r._subjects.watch,callback:c});const[d,m]=s.default.useState(f(n)?r._getWatch(a):n);return s.default.useEffect(()=>{r._removeUnmounted()}),d}function $(e){const t=C(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=P({control:a,name:r,defaultValue:m(a._formValues,r,m(a._defaultValues,r,e.defaultValue)),exact:!0}),u=R({control:a,name:r}),d=s.default.useRef(a.register(r,Object.assign(Object.assign({},e.rules),{value:o})));return s.default.useEffect(()=>{const e=(e,t)=>{const r=m(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;(i?t&&!a._stateFlags.action:t)?a.unregister(r):e(r,!1)}},[r,a,i,n]),{field:{name:r,value:o,onChange:s.default.useCallback(e=>{d.current.onChange({target:{value:l(e),name:r},type:b})},[r]),onBlur:s.default.useCallback(()=>{d.current.onBlur({target:{value:m(a._formValues,r),name:r},type:g})},[r,a]),ref:s.default.useCallback(e=>{const t=m(a._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})},[r,a._fields])},formState:u,fieldState:a.getFieldState(r,u)}}var H=(e,t,r,s,a)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[s]:a||!0})}):{},z=e=>/^\w*$/.test(e),G=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function J(e,t,r){let s=-1;const a=z(t)?[t]:G(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const K=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=m(e,s);if(r){const e=r._f,s=k(r,"_f");if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(s)&&K(s,t)}}};var Q=()=>{const e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)})},X=(e,t,r={})=>r.shouldFocus||f(r.shouldFocus)?r.focusName||`${e}.${f(r.focusIndex)?t:r.focusIndex}.`:"",Y=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));function Z(e,t){return[...e,...T(t)]}function ee(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set){t=new Set;for(const r of e)t.add(ee(r))}else if(e instanceof Map){t=new Map;for(const[r,s]of e)t.set(ee(r),ee(s))}else{if(!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(W(e[r])){t=e;break}t[r]=ee(e[r])}}return t}var te=e=>Array.isArray(e)?e.map(()=>{}):void 0;function re(e,t,r){return[...e.slice(0,t),...T(r),...e.slice(t)]}var se=(e,t,r)=>Array.isArray(e)?(f(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function ae(e,t){return[...T(t),...T(e)]}var ne=(e,t)=>f(t)?[]:function(e,t){let r=0;const s=[...e];for(const e of t)s.splice(e-r,1),r++;return d(s).length?s:[]}(e,T(t).sort((e,t)=>e-t)),ie=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]},oe=(e,t,r)=>(e[t]=r,e);function ue(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}}var le=e=>i(e)||!o(e);function ce(e,t){if(le(e)||le(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ce(r,e):r!==e)return!1}}return!0}var de=e=>({isOnSubmit:!e||e===_,isOnBlur:e===h,isOnChange:e===p,isOnAll:e===x,isOnTouch:e===v}),fe=e=>"boolean"==typeof e,me=e=>"file"===e.type,ge=e=>e instanceof HTMLElement,ye=e=>"select-multiple"===e.type,be=e=>"radio"===e.type,he="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document,pe=e=>ge(e)&&e.isConnected;function _e(e,t){const r=z(t)?[t]:G(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let t=0;t<r.slice(0,-1).length;t++){let s,a=-1;const i=r.slice(0,-(t+1)),o=i.length-1;for(t>0&&(n=e);++a<i.length;){const t=i[a];s=s?s[t]:e[t],o===a&&(u(s)&&U(s)||Array.isArray(s)&&!s.filter(e=>!f(e)).length)&&(n?delete n[t]:delete e[t]),n=s}}return e}function ve(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const r in e)Array.isArray(e[r])||u(e[r])&&!I(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ve(e[r],t[r])):i(e[r])||(t[r]=!0);return t}var xe=(e,t)=>function e(t,r,s){const a=Array.isArray(t);if(u(t)||a)for(const a in t)Array.isArray(t[a])||u(t[a])&&!I(t[a])?f(r)||le(s[a])?s[a]=Array.isArray(t[a])?ve(t[a],[]):Object.assign({},ve(t[a])):e(t[a],i(r)?{}:r[a],s[a]):s[a]=!ce(t[a],r[a]);return s}(e,t,ve(t));const Ae={value:!1,isValid:!1},Fe={value:!0,isValid:!0};var je=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?Fe:{value:e[0].value,isValid:!0}:Fe:Ae}return Ae},Ve=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:+e:r&&L(e)?new Date(e):s?s(e):e;const Oe={isValid:!1,value:null};var Se=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,Oe):Oe;function we(e){const t=e.ref;if(!(e.refs?e.refs.every(e=>e.disabled):t.disabled))return me(t)?t.files:be(t)?Se(e.refs).value:ye(t)?[...t.selectedOptions].map(({value:e})=>e):a(t)?je(e.refs).value:Ve(f(t.value)?e.ref.value:t.value,e)}var ke=e=>e instanceof RegExp,De=e=>f(e)?void 0:ke(e)?e.source:u(e)?ke(e.value)?e.value.source:e.value:e;function Ce(e,t,r){const s=m(e,r);if(s||z(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=m(t,s),i=m(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var Ee=e=>L(e)||s.default.isValidElement(e);function Ue(e,t,r="validate"){if(Ee(e)||Array.isArray(e)&&e.every(Ee)||fe(e)&&!e)return{type:r,message:Ee(e)?e:"",ref:t}}var Be=e=>u(e)&&!ke(e)?e:{value:e,message:""},Te=async(e,t,r,s)=>{const{ref:n,refs:o,required:l,maxLength:c,minLength:d,min:f,max:m,pattern:g,validate:y,name:b,valueAsNumber:h,mount:p,disabled:_}=e._f;if(!p||_)return{};const v=o?o[0]:n,x=e=>{s&&v.reportValidity&&(v.setCustomValidity(fe(e)?"":e||" "),v.reportValidity())},k={},D=be(n),C=a(n),E=D||C,B=(h||me(n))&&!n.value||""===t||Array.isArray(t)&&!t.length,T=H.bind(null,b,r,k),M=(e,t,r,s=j,a=V)=>{const i=e?t:r;k[b]=Object.assign({type:e?s:a,message:i,ref:n},T(e?s:a,i))};if(l&&(!E&&(B||i(t))||fe(t)&&!t||C&&!je(o).isValid||D&&!Se(o).isValid)){const{value:e,message:t}=Ee(l)?{value:!!l,message:l}:Be(l);if(e&&(k[b]=Object.assign({type:S,message:t,ref:v},T(S,t)),!r))return x(t),k}if(!(B||i(f)&&i(m))){let e,s;const a=Be(m),o=Be(f);if(isNaN(t)){const r=n.valueAsDate||new Date(t);L(a.value)&&(e=r>new Date(a.value)),L(o.value)&&(s=r<new Date(o.value))}else{const r=n.valueAsNumber||+t;i(a.value)||(e=r>a.value),i(o.value)||(s=r<o.value)}if((e||s)&&(M(!!e,a.message,o.message,A,F),!r))return x(k[b].message),k}if((c||d)&&!B&&L(t)){const e=Be(c),s=Be(d),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(M(a,e.message,s.message),!r))return x(k[b].message),k}if(g&&!B&&L(t)){const{value:e,message:s}=Be(g);if(ke(e)&&!t.match(e)&&(k[b]=Object.assign({type:O,message:s,ref:n},T(O,s)),!r))return x(s),k}if(y)if(W(y)){const e=Ue(await y(t),v);if(e&&(k[b]=Object.assign(Object.assign({},e),T(w,e.message)),!r))return x(e.message),k}else if(u(y)){let e={};for(const s in y){if(!U(e)&&!r)break;const a=Ue(await y[s](t),v,s);a&&(e=Object.assign(Object.assign({},a),T(s,a.message)),x(a.message),r&&(k[b]=e))}if(!U(e)&&(k[b]=Object.assign({ref:v},e),!r))return k}return x(!0),k};const Me={mode:_,reValidateMode:p,shouldFocusError:!0};function Ne(e={}){let t,r=Object.assign(Object.assign({},Me),e),s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},u=r.defaultValues||{},b=r.shouldUnregister?{}:ee(u),h={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},_=0,v={};const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},F={watch:ue(),array:ue(),state:ue()},j=de(r.mode),V=de(r.reValidateMode),O=r.criteriaMode===x,S=async e=>{let t=!1;return A.isValid&&(t=r.resolver?U((await B()).errors):await M(o,!0),e||t===s.isValid||(s.isValid=t,F.state.next({isValid:t}))),t},w=(e,t)=>(J(s.errors,e,t),F.state.next({errors:s.errors})),D=(e,t,r,s)=>{const a=m(o,e);if(a){const n=m(b,e,f(r)?m(u,e):r);f(n)||s&&s.defaultChecked||t?J(b,e,t?n:we(a._f)):I(e,n),h.mount&&S()}},C=(e,t,r,a,n)=>{let i=!1;const o={name:e},l=m(s.touchedFields,e);if(A.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=N(),i=e!==o.isDirty}if(A.dirtyFields&&(!r||a)){const r=m(s.dirtyFields,e);ce(m(u,e),t)?_e(s.dirtyFields,e):J(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,i=i||r!==m(s.dirtyFields,e)}return r&&!l&&(J(s.touchedFields,e,r),o.touchedFields=s.touchedFields,i=i||A.touchedFields&&l!==r),i&&n&&F.state.next(o),i?o:{}},E=async(r,a,n,i,o)=>{const u=m(s.errors,a),l=A.isValid&&s.isValid!==n;var c,d;if(e.delayError&&i?(t=t||(c=w,d=e.delayError,(...e)=>{clearTimeout(_),_=window.setTimeout(()=>c(...e),d)}),t(a,i)):(clearTimeout(_),i?J(s.errors,a,i):_e(s.errors,a)),((i?!ce(u,i):u)||!U(o)||l)&&!r){const e=Object.assign(Object.assign(Object.assign({},o),l?{isValid:n}:{}),{errors:s.errors,name:a});s=Object.assign(Object.assign({},s),e),F.state.next(e)}v[a]--,A.isValidating&&!Object.values(v).some(e=>e)&&(F.state.next({isValidating:!1}),v={})},B=async e=>r.resolver?await r.resolver(Object.assign({},b),r.context,((e,t,r,s)=>{const a={};for(const r of e){const e=m(t,r);e&&J(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||p.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},M=async(e,t,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const e=i._f,n=k(i,"_f");if(e){const n=await Te(i,m(b,e.name),O,r.shouldUseNativeValidation);if(n[e.name]&&(a.valid=!1,t))break;t||(n[e.name]?J(s.errors,e.name,n[e.name]):_e(s.errors,e.name))}n&&await M(n,t,a)}}return a.valid},N=(e,t)=>(e&&t&&J(b,e,t),!ce(G(),u)),R=(e,t,r)=>{const s=Object.assign({},h.mount?b:f(t)?u:L(e)?{[e]:t}:t);return q(e,p,s,r)},I=(e,t,r={})=>{const s=m(o,e);let n=t;if(s){const r=s._f;r&&(!r.disabled&&J(b,e,Ve(t,r)),n=he&&ge(r.ref)&&i(t)?"":t,ye(r.ref)?[...r.ref.options].forEach(e=>e.selected=n.includes(e.value)):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach(e=>e.checked=Array.isArray(n)?!!n.find(t=>t===e.value):n===e.value):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach(e=>e.checked=e.value===n):me(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||F.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&C(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&z(e)},P=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,u=m(o,i);!p.array.has(e)&&le(a)&&(!u||u._f)||n(a)?I(i,a,r):P(i,a,r)}},$=(e,t,r={})=>{const a=m(o,e),n=p.array.has(e),l=ee(t);J(b,e,l),n?(F.array.next({name:e,values:b}),(A.isDirty||A.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=xe(u,b),F.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:N(e,l)}))):!a||a._f||i(l)?I(e,l,r):P(e,l,r),Y(e,p)&&F.state.next({}),F.watch.next({name:e})},H=async e=>{const t=e.target;let a=t.name;const n=m(o,a);if(n){let u,c;const d=t.type?we(n._f):l(e),f=e.type===g||e.type===y,h=!((i=n._f).mount&&(i.required||i.min||i.max||i.maxLength||i.minLength||i.pattern||i.validate)||r.resolver||m(s.errors,a)||n._f.deps)||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(f,m(s.touchedFields,a),s.isSubmitted,V,j),_=Y(a,p,f);J(b,a,d),f?n._f.onBlur&&n._f.onBlur(e):n._f.onChange&&n._f.onChange(e);const x=C(a,d,f,!1),A=!U(x)||_;if(!f&&F.watch.next({name:a,type:e.type}),h)return A&&F.state.next(Object.assign({name:a},_?{}:x));if(!f&&_&&F.state.next({}),v[a]=(v[a],1),F.state.next({isValidating:!0}),r.resolver){const{errors:e}=await B([a]),t=Ce(s.errors,o,a),r=Ce(e,o,t.name||a);u=r.error,a=r.name,c=U(e)}else u=(await Te(n,m(b,a),O,r.shouldUseNativeValidation))[a],c=await S(!0);n._f.deps&&z(n._f.deps),E(!1,a,c,u,x)}var i},z=async(e,t={})=>{let a,n;const i=T(e);if(F.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await B();if(e)for(const r of e){const e=m(t,r);e?J(s.errors,r,e):_e(s.errors,r)}else s.errors=t;return t})(f(e)?e:i);a=U(t),n=e?!i.some(e=>m(t,e)):a}else e?(n=(await Promise.all(i.map(async e=>{const t=m(o,e);return await M(t&&t._f?{[e]:t}:t)}))).every(Boolean),(n||s.isValid)&&S()):n=a=await M(o);return F.state.next(Object.assign(Object.assign(Object.assign({},!L(e)||A.isValid&&a!==s.isValid?{}:{name:e}),r.resolver?{isValid:a}:{}),{errors:s.errors,isValidating:!1})),t.shouldFocus&&!n&&K(o,e=>m(s.errors,e),e?i:p.mount),n},G=e=>{const t=Object.assign(Object.assign({},u),h.mount?b:{});return f(e)?t:L(e)?m(t,e):e.map(e=>m(t,e))},Q=(e,t)=>({invalid:!!m((t||s).errors,e),isDirty:!!m((t||s).dirtyFields,e),isTouched:!!m((t||s).touchedFields,e),error:m((t||s).errors,e)}),X=(e,t={})=>{for(const a of e?T(e):p.mount)p.mount.delete(a),p.array.delete(a),m(o,a)&&(t.keepValue||(_e(o,a),_e(b,a)),!t.keepError&&_e(s.errors,a),!t.keepDirty&&_e(s.dirtyFields,a),!t.keepTouched&&_e(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&_e(u,a));F.watch.next({}),F.state.next(Object.assign(Object.assign({},s),t.keepDirty?{isDirty:N()}:{})),!t.keepIsValid&&S()},Z=(e,t={})=>{let s=m(o,e);const n=fe(t.disabled);return J(o,e,{_f:Object.assign(Object.assign(Object.assign({},s&&s._f?s._f:{ref:{name:e}}),{name:e,mount:!0}),t)}),p.mount.add(e),s?n&&J(b,e,t.disabled?void 0:m(b,e,we(s._f))):D(e,!0,t.value),Object.assign(Object.assign(Object.assign({},n?{disabled:t.disabled}:{}),r.shouldUseNativeValidation?{required:!!t.required,min:De(t.min),max:De(t.max),minLength:De(t.minLength),maxLength:De(t.maxLength),pattern:De(t.pattern)}:{}),{name:e,onChange:H,onBlur:H,ref:n=>{if(n){Z(e,t),s=m(o,e);const r=f(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,i=(e=>be(e)||a(e))(r),u=s._f.refs||[];if(i?u.find(e=>e===r):r===s._f.ref)return;J(o,e,{_f:Object.assign(Object.assign({},s._f),i?{refs:[...u.filter(pe),r],ref:{type:r.type,name:e}}:{ref:r})}),D(e,!1,void 0,r)}else s=m(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(p.array,e)||!h.action)&&p.unMount.add(e)}})};return{control:{register:Z,unregister:X,getFieldState:Q,_executeSchema:B,_getWatch:R,_getDirty:N,_updateValid:S,_removeUnmounted:()=>{for(const e of p.unMount){const t=m(o,e);t&&(t._f.refs?t._f.refs.every(e=>!pe(e)):!pe(t._f.ref))&&X(e)}p.unMount=new Set},_updateFieldArray:(e,t=[],r,a,n=!0,i=!0)=>{if(a&&r){if(h.action=!0,i&&Array.isArray(m(o,e))){const t=r(m(o,e),a.argA,a.argB);n&&J(o,e,t)}if(A.errors&&i&&Array.isArray(m(s.errors,e))){const t=r(m(s.errors,e),a.argA,a.argB);n&&J(s.errors,e,t),((e,t)=>{!d(m(e,t)).length&&_e(e,t)})(s.errors,e)}if(A.touchedFields&&i&&Array.isArray(m(s.touchedFields,e))){const t=r(m(s.touchedFields,e),a.argA,a.argB);n&&J(s.touchedFields,e,t)}A.dirtyFields&&(s.dirtyFields=xe(u,b)),F.state.next({isDirty:N(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else J(b,e,t)},_getFieldArray:t=>d(m(h.mount?b:u,t,e.shouldUnregister?m(u,t,[]):[])),_subjects:F,_proxyFormState:A,get _fields(){return o},get _formValues(){return b},get _stateFlags(){return h},set _stateFlags(e){h=e},get _defaultValues(){return u},get _names(){return p},set _names(e){p=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r=Object.assign(Object.assign({},r),e)}},trigger:z,register:Z,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let n=!0,i=ee(b);F.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await B();s.errors=e,i=t}else await M(o);U(s.errors)&&Object.keys(s.errors).every(e=>m(i,e))?(F.state.next({errors:{},isSubmitting:!0}),await e(i,a)):(t&&await t(Object.assign({},s.errors),a),r.shouldFocusError&&K(o,e=>m(s.errors,e),p.mount))}catch(e){throw n=!1,e}finally{s.isSubmitted=!0,F.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(s.errors)&&n,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>W(e)?F.watch.subscribe({next:r=>e(R(void 0,t),r)}):R(e,t,!0),setValue:$,getValues:G,reset:(t,r={})=>{const a=t||u,n=ee(a),i=t&&!U(t)?n:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(he&&f(t))for(const e of p.mount){const t=m(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{ge(e)&&e.closest("form").reset();break}catch(e){}}}b=e.shouldUnregister?r.keepDefaultValues?ee(u):{}:n,o={},F.array.next({values:i}),F.watch.next({values:i})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!A.isValid||!!r.keepIsValid,h.watch=!!e.shouldUnregister,F.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty?s.isDirty:!!r.keepDefaultValues&&!ce(t,u),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty?s.dirtyFields:r.keepDefaultValues&&t?Object.entries(t).reduce((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r!==m(u,t)}),{}):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{m(o,e)&&(f(t.defaultValue)?$(e,m(u,e)):($(e,t.defaultValue),J(u,e,t.defaultValue)),t.keepTouched||_e(s.touchedFields,e),t.keepDirty||(_e(s.dirtyFields,e),s.isDirty=t.defaultValue?N(e,m(u,e)):N()),t.keepError||(_e(s.errors,e),A.isValid&&S()),F.state.next(Object.assign({},s)))},clearErrors:e=>{e?T(e).forEach(e=>_e(s.errors,e)):s.errors={},F.state.next({errors:s.errors})},unregister:X,setError:(e,t,r)=>{const a=(m(o,e,{_f:{}})._f||{}).ref;J(s.errors,e,Object.assign(Object.assign({},t),{ref:a})),F.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=m(o,e)._f,s=r.refs?r.refs[0]:r.ref;t.shouldSelect?s.select():s.focus()},getFieldState:Q}}e.Controller=e=>e.render($(e)),e.FormProvider=e=>s.default.createElement(D.Provider,{value:k(e,"children")},e.children),e.appendErrors=H,e.get=m,e.set=J,e.useController=$,e.useFieldArray=function(e){const t=C(),{control:r=t.control,name:a,keyName:n="id",shouldUnregister:i}=e,[o,u]=s.default.useState(r._getFieldArray(a)),l=s.default.useRef(r._getFieldArray(a).map(Q)),c=s.default.useRef(o),d=s.default.useRef(a),f=s.default.useRef(!1);d.current=a,c.current=o,r._names.array.add(a),N({callback:s.default.useCallback(({values:e,name:t})=>{if(t===d.current||!t){const t=m(e,d.current,[]);u(t),l.current=t.map(Q)}},[]),subject:r._subjects.array});const g=s.default.useCallback(e=>{f.current=!0,r._updateFieldArray(a,e)},[r,a]);return s.default.useEffect(()=>{r._stateFlags.action=!1,Y(a,r._names)&&r._subjects.state.next({}),f.current&&r._executeSchema([a]).then(e=>{const t=m(e.errors,a);t&&t.type&&!m(r._formState.errors,a)&&(J(r._formState.errors,a,t),r._subjects.state.next({errors:r._formState.errors}))}),r._subjects.watch.next({name:a,values:r._formValues}),r._names.focus&&K(r._fields,e=>e.startsWith(r._names.focus)),r._names.focus="",r._proxyFormState.isValid&&r._updateValid()},[o,a,r]),s.default.useEffect(()=>(!m(r._formValues,a)&&r._updateFieldArray(a),()=>{(r._options.shouldUnregister||i)&&r.unregister(a)}),[a,r,n,i]),{swap:s.default.useCallback((e,t)=>{const s=r._getFieldArray(a);ie(s,e,t),ie(l.current,e,t),g(s),u(s),r._updateFieldArray(a,s,ie,{argA:e,argB:t},!1)},[g,a,r]),move:s.default.useCallback((e,t)=>{const s=r._getFieldArray(a);se(s,e,t),se(l.current,e,t),g(s),u(s),r._updateFieldArray(a,s,se,{argA:e,argB:t},!1)},[g,a,r]),prepend:s.default.useCallback((e,t)=>{const s=T(ee(e)),n=ae(r._getFieldArray(a),s);r._names.focus=X(a,0,t),l.current=ae(l.current,s.map(Q)),g(n),u(n),r._updateFieldArray(a,n,ae,{argA:te(e)})},[g,a,r]),append:s.default.useCallback((e,t)=>{const s=T(ee(e)),n=Z(r._getFieldArray(a),s);r._names.focus=X(a,n.length-1,t),l.current=Z(l.current,s.map(Q)),g(n),u(n),r._updateFieldArray(a,n,Z,{argA:te(e)})},[g,a,r]),remove:s.default.useCallback(e=>{const t=ne(r._getFieldArray(a),e);l.current=ne(l.current,e),g(t),u(t),r._updateFieldArray(a,t,ne,{argA:e})},[g,a,r]),insert:s.default.useCallback((e,t,s)=>{const n=T(ee(t)),i=re(r._getFieldArray(a),e,n);r._names.focus=X(a,e,s),l.current=re(l.current,e,n.map(Q)),g(i),u(i),r._updateFieldArray(a,i,re,{argA:e,argB:te(t)})},[g,a,r]),update:s.default.useCallback((e,t)=>{const s=ee(t),n=oe(r._getFieldArray(a),e,s);l.current=[...n].map((t,r)=>t&&r!==e?l.current[r]:Q()),g(n),u([...n]),r._updateFieldArray(a,n,oe,{argA:e,argB:s},!0,!1)},[g,a,r]),replace:s.default.useCallback(e=>{const t=T(ee(e));l.current=t.map(Q),g([...t]),u([...t]),r._updateFieldArray(a,[...t],e=>e,{},!0,!1)},[g,a,r]),fields:s.default.useMemo(()=>o.map((e,t)=>Object.assign(Object.assign({},e),{[n]:l.current[t]||Q()})),[o,n])}},e.useForm=function(e={}){const t=s.default.useRef(),[r,a]=s.default.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=Object.assign(Object.assign({},Ne(e)),{formState:r});const n=t.current.control,i=s.default.useCallback(e=>{B(e,n._proxyFormState,!0)&&(n._formState=Object.assign(Object.assign({},n._formState),e),a(Object.assign({},n._formState)))},[n]);return N({subject:n._subjects.state,callback:i}),s.default.useEffect(()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()}),t.current.formState=E(r,n._proxyFormState),t.current},e.useFormContext=C,e.useFormState=R,e.useWatch=P,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
