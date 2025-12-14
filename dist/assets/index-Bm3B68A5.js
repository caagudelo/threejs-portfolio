(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function u_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lm={exports:{}},Sl={},um={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),c_=Symbol.for("react.portal"),f_=Symbol.for("react.fragment"),d_=Symbol.for("react.strict_mode"),h_=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),g_=Symbol.for("react.forward_ref"),v_=Symbol.for("react.suspense"),__=Symbol.for("react.memo"),x_=Symbol.for("react.lazy"),Ed=Symbol.iterator;function y_(t){return t===null||typeof t!="object"?null:(t=Ed&&t[Ed]||t["@@iterator"],typeof t=="function"?t:null)}var cm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,dm={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=dm,this.updater=n||cm}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hm(){}hm.prototype=Ts.prototype;function cf(t,e,n){this.props=t,this.context=e,this.refs=dm,this.updater=n||cm}var ff=cf.prototype=new hm;ff.constructor=cf;fm(ff,Ts.prototype);ff.isPureReactComponent=!0;var Td=Array.isArray,pm=Object.prototype.hasOwnProperty,df={current:null},mm={key:!0,ref:!0,__self:!0,__source:!0};function gm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pm.call(e,i)&&!mm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Do,type:t,key:s,ref:o,props:r,_owner:df.current}}function S_(t,e){return{$$typeof:Do,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Do}function M_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wd=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?M_(""+t.key):e.toString(36)}function ba(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Do:case c_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ql(o,0):i,Td(r)?(n="",t!=null&&(n=t.replace(wd,"$&/")+"/"),ba(r,e,n,"",function(u){return u})):r!=null&&(hf(r)&&(r=S_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Td(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ql(s,a);o+=ba(s,e,n,l,r)}else if(l=y_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ql(s,a++),o+=ba(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(t,e,n){if(t==null)return t;var i=[],r=0;return ba(t,i,"","",function(s){return e.call(n,s,r++)}),i}function E_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Da={transition:null},T_={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Da,ReactCurrentOwner:df};function vm(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Ts;We.Fragment=f_;We.Profiler=h_;We.PureComponent=cf;We.StrictMode=d_;We.Suspense=v_;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T_;We.act=vm;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=df.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pm.call(e,l)&&!mm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Do,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:m_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:p_,_context:t},t.Consumer=t};We.createElement=gm;We.createFactory=function(t){var e=gm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:g_,render:t}};We.isValidElement=hf;We.lazy=function(t){return{$$typeof:x_,_payload:{_status:-1,_result:t},_init:E_}};We.memo=function(t,e){return{$$typeof:__,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};We.unstable_act=vm;We.useCallback=function(t,e){return Zt.current.useCallback(t,e)};We.useContext=function(t){return Zt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Zt.current.useEffect(t,e)};We.useId=function(){return Zt.current.useId()};We.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Zt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};We.useRef=function(t){return Zt.current.useRef(t)};We.useState=function(t){return Zt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Zt.current.useTransition()};We.version="18.3.1";um.exports=We;var et=um.exports;const w_=u_(et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_=et,R_=Symbol.for("react.element"),C_=Symbol.for("react.fragment"),P_=Object.prototype.hasOwnProperty,L_=A_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b_={key:!0,ref:!0,__self:!0,__source:!0};function _m(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)P_.call(e,i)&&!b_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:R_,type:t,key:s,ref:o,props:r,_owner:L_.current}}Sl.Fragment=C_;Sl.jsx=_m;Sl.jsxs=_m;lm.exports=Sl;var be=lm.exports,ec={},xm={exports:{}},mn={},ym={exports:{}},Sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,B){var H=F.length;F.push(B);e:for(;0<H;){var U=H-1>>>1,z=F[U];if(0<r(z,B))F[U]=B,F[H]=z,H=U;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var B=F[0],H=F.pop();if(H!==B){F[0]=H;e:for(var U=0,z=F.length,le=z>>>1;U<le;){var ce=2*(U+1)-1,he=F[ce],Se=ce+1,Ee=F[Se];if(0>r(he,H))Se<z&&0>r(Ee,he)?(F[U]=Ee,F[Se]=H,U=Se):(F[U]=he,F[ce]=H,U=ce);else if(Se<z&&0>r(Ee,H))F[U]=Ee,F[Se]=H,U=Se;else break e}}return B}function r(F,B){var H=F.sortIndex-B.sortIndex;return H!==0?H:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=F)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function y(F){if(x=!1,g(F),!v)if(n(l)!==null)v=!0,W(E);else{var B=n(u);B!==null&&q(y,B.startTime-F)}}function E(F,B){v=!1,x&&(x=!1,f(D),D=-1),p=!0;var H=h;try{for(g(B),d=n(l);d!==null&&(!(d.expirationTime>B)||F&&!I());){var U=d.callback;if(typeof U=="function"){d.callback=null,h=d.priorityLevel;var z=U(d.expirationTime<=B);B=t.unstable_now(),typeof z=="function"?d.callback=z:d===n(l)&&i(l),g(B)}else i(l);d=n(l)}if(d!==null)var le=!0;else{var ce=n(u);ce!==null&&q(y,ce.startTime-B),le=!1}return le}finally{d=null,h=H,p=!1}}var A=!1,T=null,D=-1,M=5,w=-1;function I(){return!(t.unstable_now()-w<M)}function $(){if(T!==null){var F=t.unstable_now();w=F;var B=!0;try{B=T(!0,F)}finally{B?K():(A=!1,T=null)}}else A=!1}var K;if(typeof _=="function")K=function(){_($)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,V=b.port2;b.port1.onmessage=$,K=function(){V.postMessage(null)}}else K=function(){m($,0)};function W(F){T=F,A||(A=!0,K())}function q(F,B){D=m(function(){F(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,W(E))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var H=h;h=B;try{return F()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=h;h=F;try{return B()}finally{h=H}},t.unstable_scheduleCallback=function(F,B,H){var U=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?U+H:U):H=U,F){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=H+z,F={id:c++,callback:B,priorityLevel:F,startTime:H,expirationTime:z,sortIndex:-1},H>U?(F.sortIndex=H,e(u,F),n(l)===null&&F===n(u)&&(x?(f(D),D=-1):x=!0,q(y,H-U))):(F.sortIndex=z,e(l,F),v||p||(v=!0,W(E))),F},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(F){var B=h;return function(){var H=h;h=B;try{return F.apply(this,arguments)}finally{h=H}}}})(Sm);ym.exports=Sm;var D_=ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_=et,pn=D_;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mm=new Set,uo={};function Er(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(uo[t]=e,t=0;t<e.length;t++)Mm.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=Object.prototype.hasOwnProperty,N_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ad={},Rd={};function I_(t){return tc.call(Rd,t)?!0:tc.call(Ad,t)?!1:N_.test(t)?Rd[t]=!0:(Ad[t]=!0,!1)}function F_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O_(t,e,n,i){if(e===null||typeof e>"u"||F_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var pf=/[\-:]([a-z])/g;function mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pf,mf);Dt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pf,mf);Dt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pf,mf);Dt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gf(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(O_(e,n,r,i)&&(n=null),i||r===null?I_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=U_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),wm=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=Cd&&t[Cd]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,Yl;function js(t){if(Yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yl=e&&e[1]||""}return`
`+Yl+t}var $l=!1;function Kl(t,e){if(!t||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function z_(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=Kl(t.type,!1),t;case 11:return t=Kl(t.type.render,!1),t;case 1:return t=Kl(t.type,!0),t;default:return""}}function sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wr:return"Fragment";case Vr:return"Portal";case nc:return"Profiler";case vf:return"StrictMode";case ic:return"Suspense";case rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tm:return(t.displayName||"Context")+".Consumer";case Em:return(t._context.displayName||"Context")+".Provider";case _f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:sc(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return sc(t(e))}catch{}}return null}function k_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Am(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function B_(t){var e=Am(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=B_(t))}function Rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Am(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oc(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cm(t,e){e=e.checked,e!=null&&gf(t,"checked",e,!1)}function ac(t,e){Cm(t,e);var n=Gi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&lc(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ld(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lc(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(qs(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function Pm(t,e){var n=Gi(e.value),i=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,bm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H_=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){H_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function Dm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function Um(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var G_=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(t,e){if(e){if(G_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hc=null;function yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pc=null,ss=null,os=null;function Ud(t){if(t=Io(t)){if(typeof pc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Al(e),pc(t.stateNode,t.type,e))}}function Nm(t){ss?os?os.push(t):os=[t]:ss=t}function Im(){if(ss){var t=ss,e=os;if(os=ss=null,Ud(t),e)for(t=0;t<e.length;t++)Ud(e[t])}}function Fm(t,e){return t(e)}function Om(){}var Zl=!1;function zm(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return Fm(t,e,n)}finally{Zl=!1,(ss!==null||os!==null)&&(Om(),Im())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var i=Al(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var mc=!1;if(fi)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){mc=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{mc=!1}function V_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Js=!1,ja=null,qa=!1,gc=null,W_={onError:function(t){Js=!0,ja=t}};function X_(t,e,n,i,r,s,o,a,l){Js=!1,ja=null,V_.apply(W_,arguments)}function j_(t,e,n,i,r,s,o,a,l){if(X_.apply(this,arguments),Js){if(Js){var u=ja;Js=!1,ja=null}else throw Error(te(198));qa||(qa=!0,gc=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nd(t){if(Tr(t)!==t)throw Error(te(188))}function q_(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nd(r),t;if(s===i)return Nd(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Bm(t){return t=q_(t),t!==null?Hm(t):null}function Hm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hm(t);if(e!==null)return e;t=t.sibling}return null}var Gm=pn.unstable_scheduleCallback,Id=pn.unstable_cancelCallback,Y_=pn.unstable_shouldYield,$_=pn.unstable_requestPaint,vt=pn.unstable_now,K_=pn.unstable_getCurrentPriorityLevel,Sf=pn.unstable_ImmediatePriority,Vm=pn.unstable_UserBlockingPriority,Ya=pn.unstable_NormalPriority,Z_=pn.unstable_LowPriority,Wm=pn.unstable_IdlePriority,Ml=null,qn=null;function J_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:t0,Q_=Math.log,e0=Math.LN2;function t0(t){return t>>>=0,t===0?32:31-(Q_(t)/e0|0)|0}var jo=64,qo=4194304;function Ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $a(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ys(a):(s&=o,s!==0&&(i=Ys(s)))}else o=n&~r,o!==0?i=Ys(o):s!==0&&(i=Ys(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function n0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=n0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xm(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function r0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function jm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qm,Ef,Ym,$m,Km,_c=!1,Yo=[],bi=null,Di=null,Ui=null,ho=new Map,po=new Map,wi=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ui=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Ns(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Io(e),e!==null&&Ef(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function o0(t,e,n,i,r){switch(e){case"focusin":return bi=Ns(bi,t,e,n,i,r),!0;case"dragenter":return Di=Ns(Di,t,e,n,i,r),!0;case"mouseover":return Ui=Ns(Ui,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ho.set(s,Ns(ho.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,po.set(s,Ns(po.get(s)||null,t,e,n,i,r)),!0}return!1}function Zm(t){var e=or(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=km(n),e!==null){t.blockedOn=e,Km(t.priority,function(){Ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hc=i,n.target.dispatchEvent(i),hc=null}else return e=Io(n),e!==null&&Ef(e),t.blockedOn=n,!1;e.shift()}return!0}function Od(t,e,n){Ua(t)&&n.delete(e)}function a0(){_c=!1,bi!==null&&Ua(bi)&&(bi=null),Di!==null&&Ua(Di)&&(Di=null),Ui!==null&&Ua(Ui)&&(Ui=null),ho.forEach(Od),po.forEach(Od)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,_c||(_c=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,a0)))}function mo(t){function e(r){return Is(r,t)}if(0<Yo.length){Is(Yo[0],t);for(var n=1;n<Yo.length;n++){var i=Yo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(bi!==null&&Is(bi,t),Di!==null&&Is(Di,t),Ui!==null&&Is(Ui,t),ho.forEach(e),po.forEach(e),n=0;n<wi.length;n++)i=wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<wi.length&&(n=wi[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&wi.shift()}var as=gi.ReactCurrentBatchConfig,Ka=!0;function l0(t,e,n,i){var r=Ze,s=as.transition;as.transition=null;try{Ze=1,Tf(t,e,n,i)}finally{Ze=r,as.transition=s}}function u0(t,e,n,i){var r=Ze,s=as.transition;as.transition=null;try{Ze=4,Tf(t,e,n,i)}finally{Ze=r,as.transition=s}}function Tf(t,e,n,i){if(Ka){var r=xc(t,e,n,i);if(r===null)lu(t,e,i,Za,n),Fd(t,i);else if(o0(r,t,e,n,i))i.stopPropagation();else if(Fd(t,i),e&4&&-1<s0.indexOf(t)){for(;r!==null;){var s=Io(r);if(s!==null&&qm(s),s=xc(t,e,n,i),s===null&&lu(t,e,i,Za,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lu(t,e,i,null,n)}}var Za=null;function xc(t,e,n,i){if(Za=null,t=yf(i),t=or(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Za=t,null}function Jm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K_()){case Sf:return 1;case Vm:return 4;case Ya:case Z_:return 16;case Wm:return 536870912;default:return 16}default:return 16}}var Ri=null,wf=null,Na=null;function Qm(){if(Na)return Na;var t,e=wf,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Na=r.slice(t,1<i?1-i:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $o(){return!0}function zd(){return!1}function gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$o:zd,this.isPropagationStopped=zd,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=gn(ws),No=ft({},ws,{view:0,detail:0}),c0=gn(No),Ql,eu,Fs,El=ft({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Ql=t.screenX-Fs.screenX,eu=t.screenY-Fs.screenY):eu=Ql=0,Fs=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),kd=gn(El),f0=ft({},El,{dataTransfer:0}),d0=gn(f0),h0=ft({},No,{relatedTarget:0}),tu=gn(h0),p0=ft({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=gn(p0),g0=ft({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v0=gn(g0),_0=ft({},ws,{data:0}),Bd=gn(_0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S0[t])?!!e[t]:!1}function Rf(){return M0}var E0=ft({},No,{key:function(t){if(t.key){var e=x0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T0=gn(E0),w0=ft({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=gn(w0),A0=ft({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),R0=gn(A0),C0=ft({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=gn(C0),L0=ft({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=gn(L0),D0=[9,13,27,32],Cf=fi&&"CompositionEvent"in window,Qs=null;fi&&"documentMode"in document&&(Qs=document.documentMode);var U0=fi&&"TextEvent"in window&&!Qs,eg=fi&&(!Cf||Qs&&8<Qs&&11>=Qs),Gd=" ",Vd=!1;function tg(t,e){switch(t){case"keyup":return D0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function N0(t,e){switch(t){case"compositionend":return ng(e);case"keypress":return e.which!==32?null:(Vd=!0,Gd);case"textInput":return t=e.data,t===Gd&&Vd?null:t;default:return null}}function I0(t,e){if(Xr)return t==="compositionend"||!Cf&&tg(t,e)?(t=Qm(),Na=wf=Ri=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eg&&e.locale!=="ko"?null:e.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F0[t.type]:e==="textarea"}function ig(t,e,n,i){Nm(i),e=Ja(e,"onChange"),0<e.length&&(n=new Af("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var eo=null,go=null;function O0(t){pg(t,0)}function Tl(t){var e=Yr(t);if(Rm(e))return t}function z0(t,e){if(t==="change")return e}var rg=!1;if(fi){var nu;if(fi){var iu="oninput"in document;if(!iu){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),iu=typeof Xd.oninput=="function"}nu=iu}else nu=!1;rg=nu&&(!document.documentMode||9<document.documentMode)}function jd(){eo&&(eo.detachEvent("onpropertychange",sg),go=eo=null)}function sg(t){if(t.propertyName==="value"&&Tl(go)){var e=[];ig(e,go,t,yf(t)),zm(O0,e)}}function k0(t,e,n){t==="focusin"?(jd(),eo=e,go=n,eo.attachEvent("onpropertychange",sg)):t==="focusout"&&jd()}function B0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(go)}function H0(t,e){if(t==="click")return Tl(e)}function G0(t,e){if(t==="input"||t==="change")return Tl(e)}function V0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:V0;function vo(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tc.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yd(t,e){var n=qd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qd(n)}}function og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ag(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function Pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W0(t){var e=ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&og(n.ownerDocument.documentElement,n)){if(i!==null&&Pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Yd(n,s);var o=Yd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X0=fi&&"documentMode"in document&&11>=document.documentMode,jr=null,yc=null,to=null,Sc=!1;function $d(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||jr==null||jr!==Xa(i)||(i=jr,"selectionStart"in i&&Pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),to&&vo(to,i)||(to=i,i=Ja(yc,"onSelect"),0<i.length&&(e=new Af("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}function Ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qr={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},ru={},lg={};fi&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function wl(t){if(ru[t])return ru[t];if(!qr[t])return t;var e=qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lg)return ru[t]=e[n];return t}var ug=wl("animationend"),cg=wl("animationiteration"),fg=wl("animationstart"),dg=wl("transitionend"),hg=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){hg.set(t,e),Er(e,[t])}for(var su=0;su<Kd.length;su++){var ou=Kd[su],j0=ou.toLowerCase(),q0=ou[0].toUpperCase()+ou.slice(1);Xi(j0,"on"+q0)}Xi(ug,"onAnimationEnd");Xi(cg,"onAnimationIteration");Xi(fg,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(dg,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Zd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,j_(i,e,void 0,t),t.currentTarget=null}function pg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Zd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Zd(r,a,u),s=l}}}if(qa)throw t=gc,qa=!1,gc=null,t}function it(t,e){var n=e[Ac];n===void 0&&(n=e[Ac]=new Set);var i=t+"__bubble";n.has(i)||(mg(e,t,2,!1),n.add(i))}function au(t,e,n){var i=0;e&&(i|=4),mg(n,t,i,e)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Zo]){t[Zo]=!0,Mm.forEach(function(n){n!=="selectionchange"&&(Y0.has(n)||au(n,!1,t),au(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Zo]||(e[Zo]=!0,au("selectionchange",!1,e))}}function mg(t,e,n,i){switch(Jm(e)){case 1:var r=l0;break;case 4:r=u0;break;default:r=Tf}n=r.bind(null,e,n,t),r=void 0,!mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}zm(function(){var u=s,c=yf(n),d=[];e:{var h=hg.get(t);if(h!==void 0){var p=Af,v=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":p=T0;break;case"focusin":v="focus",p=tu;break;case"focusout":v="blur",p=tu;break;case"beforeblur":case"afterblur":p=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=R0;break;case ug:case cg:case fg:p=m0;break;case dg:p=P0;break;case"scroll":p=c0;break;case"wheel":p=b0;break;case"copy":case"cut":case"paste":p=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hd}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,f!==null&&(y=fo(_,f),y!=null&&x.push(xo(_,y,g)))),m)break;_=_.return}0<x.length&&(h=new p(h,v,null,n,c),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==hc&&(v=n.relatedTarget||n.fromElement)&&(or(v)||v[di]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?or(v):null,v!==null&&(m=Tr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=kd,y="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Hd,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:Yr(p),g=v==null?h:Yr(v),h=new x(y,_+"leave",p,n,c),h.target=m,h.relatedTarget=g,y=null,or(c)===u&&(x=new x(f,_+"enter",v,n,c),x.target=g,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,f=v,_=0,g=x;g;g=wr(g))_++;for(g=0,y=f;y;y=wr(y))g++;for(;0<_-g;)x=wr(x),_--;for(;0<g-_;)f=wr(f),g--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=wr(x),f=wr(f)}x=null}else x=null;p!==null&&Jd(d,h,p,x,!1),v!==null&&m!==null&&Jd(d,m,v,x,!0)}}e:{if(h=u?Yr(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=z0;else if(Wd(h))if(rg)E=G0;else{E=B0;var A=k0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=H0);if(E&&(E=E(t,u))){ig(d,E,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&lc(h,"number",h.value)}switch(A=u?Yr(u):window,t){case"focusin":(Wd(A)||A.contentEditable==="true")&&(jr=A,yc=u,to=null);break;case"focusout":to=yc=jr=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,$d(d,n,c);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":$d(d,n,c)}var T;if(Cf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Xr?tg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(eg&&n.locale!=="ko"&&(Xr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Xr&&(T=Qm()):(Ri=c,wf="value"in Ri?Ri.value:Ri.textContent,Xr=!0)),A=Ja(u,D),0<A.length&&(D=new Bd(D,t,null,n,c),d.push({event:D,listeners:A}),T?D.data=T:(T=ng(n),T!==null&&(D.data=T)))),(T=U0?N0(t,n):I0(t,n))&&(u=Ja(u,"onBeforeInput"),0<u.length&&(c=new Bd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}pg(d,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fo(t,n),s!=null&&i.unshift(xo(t,s,r)),s=fo(t,e),s!=null&&i.push(xo(t,s,r))),t=t.return}return i}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=fo(n,s),l!=null&&o.unshift(xo(n,l,a))):r||(l=fo(n,s),l!=null&&o.push(xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Qd(t){return(typeof t=="string"?t:""+t).replace($0,`
`).replace(K0,"")}function Jo(t,e,n){if(e=Qd(e),Qd(t)!==e&&n)throw Error(te(425))}function Qa(){}var Mc=null,Ec=null;function Tc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(t){return eh.resolve(null).then(t).catch(Q0)}:wc;function Q0(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);mo(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function th(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),Xn="__reactFiber$"+As,yo="__reactProps$"+As,di="__reactContainer$"+As,Ac="__reactEvents$"+As,ex="__reactListeners$"+As,tx="__reactHandles$"+As;function or(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[di]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=th(t);t!==null;){if(n=t[Xn])return n;t=th(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Xn]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Al(t){return t[yo]||null}var Rc=[],$r=-1;function ji(t){return{current:t}}function st(t){0>$r||(t.current=Rc[$r],Rc[$r]=null,$r--)}function tt(t,e){$r++,Rc[$r]=t.current,t.current=e}var Vi={},Bt=ji(Vi),nn=ji(!1),mr=Vi;function ps(t,e){var n=t.type.contextTypes;if(!n)return Vi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function el(){st(nn),st(Bt)}function nh(t,e,n){if(Bt.current!==Vi)throw Error(te(168));tt(Bt,e),tt(nn,n)}function gg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,k_(t)||"Unknown",r));return ft({},n,i)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,mr=Bt.current,tt(Bt,t),tt(nn,nn.current),!0}function ih(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=gg(t,e,mr),i.__reactInternalMemoizedMergedChildContext=t,st(nn),st(Bt),tt(Bt,t)):st(nn),tt(nn,n)}var oi=null,Rl=!1,cu=!1;function vg(t){oi===null?oi=[t]:oi.push(t)}function nx(t){Rl=!0,vg(t)}function qi(){if(!cu&&oi!==null){cu=!0;var t=0,e=Ze;try{var n=oi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Rl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Gm(Sf,qi),r}finally{Ze=e,cu=!1}}return null}var Kr=[],Zr=0,nl=null,il=0,xn=[],yn=0,gr=null,ai=1,li="";function er(t,e){Kr[Zr++]=il,Kr[Zr++]=nl,nl=t,il=e}function _g(t,e,n){xn[yn++]=ai,xn[yn++]=li,xn[yn++]=gr,gr=t;var i=ai;t=li;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ai=1<<32-On(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function Lf(t){t.return!==null&&(er(t,1),_g(t,1,0))}function bf(t){for(;t===nl;)nl=Kr[--Zr],Kr[Zr]=null,il=Kr[--Zr],Kr[Zr]=null;for(;t===gr;)gr=xn[--yn],xn[yn]=null,li=xn[--yn],xn[yn]=null,ai=xn[--yn],xn[yn]=null}var dn=null,fn=null,ot=!1,Un=null;function xg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,fn=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,fn=null,!0):!1;default:return!1}}function Cc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(ot){var e=fn;if(e){var n=e;if(!rh(t,e)){if(Cc(t))throw Error(te(418));e=Ni(n.nextSibling);var i=dn;e&&rh(t,e)?xg(i,n):(t.flags=t.flags&-4097|2,ot=!1,dn=t)}}else{if(Cc(t))throw Error(te(418));t.flags=t.flags&-4097|2,ot=!1,dn=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Qo(t){if(t!==dn)return!1;if(!ot)return sh(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tc(t.type,t.memoizedProps)),e&&(e=fn)){if(Cc(t))throw yg(),Error(te(418));for(;e;)xg(t,e),e=Ni(e.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=dn?Ni(t.stateNode.nextSibling):null;return!0}function yg(){for(var t=fn;t;)t=Ni(t.nextSibling)}function ms(){fn=dn=null,ot=!1}function Df(t){Un===null?Un=[t]:Un.push(t)}var ix=gi.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function oh(t){var e=t._init;return e(t._payload)}function Sg(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=zi(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,y){return _===null||_.tag!==6?(_=vu(g,f.mode,y),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,y){var E=g.type;return E===Wr?c(f,_,g.props.children,y,g.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ei&&oh(E)===_.type)?(y=r(_,g.props),y.ref=Os(f,_,g),y.return=f,y):(y=Ga(g.type,g.key,g.props,null,f.mode,y),y.ref=Os(f,_,g),y.return=f,y)}function u(f,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=_u(g,f.mode,y),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function c(f,_,g,y,E){return _===null||_.tag!==7?(_=fr(g,f.mode,y,E),_.return=f,_):(_=r(_,g),_.return=f,_)}function d(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=vu(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Vo:return g=Ga(_.type,_.key,_.props,null,f.mode,g),g.ref=Os(f,null,_),g.return=f,g;case Vr:return _=_u(_,f.mode,g),_.return=f,_;case Ei:var y=_._init;return d(f,y(_._payload),g)}if(qs(_)||Ds(_))return _=fr(_,f.mode,g,null),_.return=f,_;ea(f,_)}return null}function h(f,_,g,y){var E=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(f,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:return g.key===E?l(f,_,g,y):null;case Vr:return g.key===E?u(f,_,g,y):null;case Ei:return E=g._init,h(f,_,E(g._payload),y)}if(qs(g)||Ds(g))return E!==null?null:c(f,_,g,y,null);ea(f,g)}return null}function p(f,_,g,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(g)||null,a(_,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vo:return f=f.get(y.key===null?g:y.key)||null,l(_,f,y,E);case Vr:return f=f.get(y.key===null?g:y.key)||null,u(_,f,y,E);case Ei:var A=y._init;return p(f,_,g,A(y._payload),E)}if(qs(y)||Ds(y))return f=f.get(g)||null,c(_,f,y,E,null);ea(_,y)}return null}function v(f,_,g,y){for(var E=null,A=null,T=_,D=_=0,M=null;T!==null&&D<g.length;D++){T.index>D?(M=T,T=null):M=T.sibling;var w=h(f,T,g[D],y);if(w===null){T===null&&(T=M);break}t&&T&&w.alternate===null&&e(f,T),_=s(w,_,D),A===null?E=w:A.sibling=w,A=w,T=M}if(D===g.length)return n(f,T),ot&&er(f,D),E;if(T===null){for(;D<g.length;D++)T=d(f,g[D],y),T!==null&&(_=s(T,_,D),A===null?E=T:A.sibling=T,A=T);return ot&&er(f,D),E}for(T=i(f,T);D<g.length;D++)M=p(T,f,D,g[D],y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?D:M.key),_=s(M,_,D),A===null?E=M:A.sibling=M,A=M);return t&&T.forEach(function(I){return e(f,I)}),ot&&er(f,D),E}function x(f,_,g,y){var E=Ds(g);if(typeof E!="function")throw Error(te(150));if(g=E.call(g),g==null)throw Error(te(151));for(var A=E=null,T=_,D=_=0,M=null,w=g.next();T!==null&&!w.done;D++,w=g.next()){T.index>D?(M=T,T=null):M=T.sibling;var I=h(f,T,w.value,y);if(I===null){T===null&&(T=M);break}t&&T&&I.alternate===null&&e(f,T),_=s(I,_,D),A===null?E=I:A.sibling=I,A=I,T=M}if(w.done)return n(f,T),ot&&er(f,D),E;if(T===null){for(;!w.done;D++,w=g.next())w=d(f,w.value,y),w!==null&&(_=s(w,_,D),A===null?E=w:A.sibling=w,A=w);return ot&&er(f,D),E}for(T=i(f,T);!w.done;D++,w=g.next())w=p(T,f,D,w.value,y),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?D:w.key),_=s(w,_,D),A===null?E=w:A.sibling=w,A=w);return t&&T.forEach(function($){return e(f,$)}),ot&&er(f,D),E}function m(f,_,g,y){if(typeof g=="object"&&g!==null&&g.type===Wr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:e:{for(var E=g.key,A=_;A!==null;){if(A.key===E){if(E=g.type,E===Wr){if(A.tag===7){n(f,A.sibling),_=r(A,g.props.children),_.return=f,f=_;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ei&&oh(E)===A.type){n(f,A.sibling),_=r(A,g.props),_.ref=Os(f,A,g),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===Wr?(_=fr(g.props.children,f.mode,y,g.key),_.return=f,f=_):(y=Ga(g.type,g.key,g.props,null,f.mode,y),y.ref=Os(f,_,g),y.return=f,f=y)}return o(f);case Vr:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=_u(g,f.mode,y),_.return=f,f=_}return o(f);case Ei:return A=g._init,m(f,_,A(g._payload),y)}if(qs(g))return v(f,_,g,y);if(Ds(g))return x(f,_,g,y);ea(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=vu(g,f.mode,y),_.return=f,f=_),o(f)):n(f,_)}return m}var gs=Sg(!0),Mg=Sg(!1),rl=ji(null),sl=null,Jr=null,Uf=null;function Nf(){Uf=Jr=sl=null}function If(t){var e=rl.current;st(rl),t._currentValue=e}function Lc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){sl=t,Uf=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Uf!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(sl===null)throw Error(te(308));Jr=t,sl.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var ar=null;function Ff(t){ar===null?ar=[t]:ar.push(t)}function Eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,hi(t,i)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function Of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ii(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(t,n)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mf(t,n)}}function ah(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=ft({},d,h);break e;case 2:Ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=d}}function lh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Fo={},Yn=ji(Fo),So=ji(Fo),Mo=ji(Fo);function lr(t){if(t===Fo)throw Error(te(174));return t}function zf(t,e){switch(tt(Mo,e),tt(So,t),tt(Yn,Fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cc(e,t)}st(Yn),tt(Yn,e)}function vs(){st(Yn),st(So),st(Mo)}function wg(t){lr(Mo.current);var e=lr(Yn.current),n=cc(e,t.type);e!==n&&(tt(So,t),tt(Yn,n))}function kf(t){So.current===t&&(st(Yn),st(So))}var lt=ji(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Bf(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var Oa=gi.ReactCurrentDispatcher,du=gi.ReactCurrentBatchConfig,vr=0,ct=null,Mt=null,Rt=null,ll=!1,no=!1,Eo=0,rx=0;function Ut(){throw Error(te(321))}function Hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Gf(t,e,n,i,r,s){if(vr=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=t===null||t.memoizedState===null?lx:ux,t=n(i,r),no){s=0;do{if(no=!1,Eo=0,25<=s)throw Error(te(301));s+=1,Rt=Mt=null,e.updateQueue=null,Oa.current=cx,t=n(i,r)}while(no)}if(Oa.current=ul,e=Mt!==null&&Mt.next!==null,vr=0,Rt=Mt=ct=null,ll=!1,e)throw Error(te(300));return t}function Vf(){var t=Eo!==0;return Eo=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function An(){if(Mt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?ct.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(te(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?ct.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function To(t,e){return typeof e=="function"?e(t):e}function hu(t){var e=An(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ct.lanes|=c,_r|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Bn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ct.lanes|=s,_r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pu(t){var e=An(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ag(){}function Rg(t,e){var n=ct,i=An(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Wf(Lg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,wo(9,Pg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(te(349));vr&30||Cg(n,e,r)}return r}function Cg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pg(t,e,n,i){e.value=n,e.getSnapshot=i,bg(e)&&Dg(t)}function Lg(t,e,n){return n(function(){bg(e)&&Dg(t)})}function bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Dg(t){var e=hi(t,1);e!==null&&zn(e,t,1,-1)}function uh(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=ax.bind(null,ct,t),[e.memoizedState,t]}function wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ug(){return An().memoizedState}function za(t,e,n,i){var r=Vn();ct.flags|=t,r.memoizedState=wo(1|e,n,void 0,i===void 0?null:i)}function Cl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&Hf(i,o.deps)){r.memoizedState=wo(e,n,s,i);return}}ct.flags|=t,r.memoizedState=wo(1|e,n,s,i)}function ch(t,e){return za(8390656,8,t,e)}function Wf(t,e){return Cl(2048,8,t,e)}function Ng(t,e){return Cl(4,2,t,e)}function Ig(t,e){return Cl(4,4,t,e)}function Fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Og(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,Fg.bind(null,e,t),n)}function Xf(){}function zg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Bg(t,e,n){return vr&21?(Bn(n,e)||(n=Xm(),ct.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function sx(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=du.transition;du.transition={};try{t(!1),e()}finally{Ze=n,du.transition=i}}function Hg(){return An().memoizedState}function ox(t,e,n){var i=Oi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(t))Vg(e,n);else if(n=Eg(t,e,n,i),n!==null){var r=Yt();zn(n,t,i,r),Wg(n,e,i)}}function ax(t,e,n){var i=Oi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(t))Vg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bn(a,o)){var l=e.interleaved;l===null?(r.next=r,Ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Eg(t,e,r,i),n!==null&&(r=Yt(),zn(n,t,i,r),Wg(n,e,i))}}function Gg(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function Vg(t,e){no=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mf(t,n)}}var ul={readContext:wn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},lx={readContext:wn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:ch,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,za(4194308,4,Fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return za(4194308,4,t,e)},useInsertionEffect:function(t,e){return za(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ox.bind(null,ct,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:uh,useDebugValue:Xf,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=uh(!1),e=t[0];return t=sx.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ct,r=Vn();if(ot){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ct===null)throw Error(te(349));vr&30||Cg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ch(Lg.bind(null,i,s,t),[t]),i.flags|=2048,wo(9,Pg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Ct.identifierPrefix;if(ot){var n=li,i=ai;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ux={readContext:wn,useCallback:zg,useContext:wn,useEffect:Wf,useImperativeHandle:Og,useInsertionEffect:Ng,useLayoutEffect:Ig,useMemo:kg,useReducer:hu,useRef:Ug,useState:function(){return hu(To)},useDebugValue:Xf,useDeferredValue:function(t){var e=An();return Bg(e,Mt.memoizedState,t)},useTransition:function(){var t=hu(To)[0],e=An().memoizedState;return[t,e]},useMutableSource:Ag,useSyncExternalStore:Rg,useId:Hg,unstable_isNewReconciler:!1},cx={readContext:wn,useCallback:zg,useContext:wn,useEffect:Wf,useImperativeHandle:Og,useInsertionEffect:Ng,useLayoutEffect:Ig,useMemo:kg,useReducer:pu,useRef:Ug,useState:function(){return pu(To)},useDebugValue:Xf,useDeferredValue:function(t){var e=An();return Mt===null?e.memoizedState=t:Bg(e,Mt.memoizedState,t)},useTransition:function(){var t=pu(To)[0],e=An().memoizedState;return[t,e]},useMutableSource:Ag,useSyncExternalStore:Rg,useId:Hg,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Oi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(zn(e,t,r,i),Fa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Oi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ii(t,s,r),e!==null&&(zn(e,t,r,i),Fa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Oi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ii(t,r,i),e!==null&&(zn(e,t,i,n),Fa(e,t,i))}};function fh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function Xg(t,e,n){var i=!1,r=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=rn(e)?mr:Bt.current,i=e.contextTypes,s=(i=i!=null)?ps(t,r):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pl.enqueueReplaceState(e,e.state,null)}function Dc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Of(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=rn(e)?mr:Bt.current,r.context=ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pl.enqueueReplaceState(r,r.state,null),ol(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,e){try{var n="",i=e;do n+=z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fx=typeof WeakMap=="function"?WeakMap:Map;function jg(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){fl||(fl=!0,Vc=i),Uc(t,e)},n}function qg(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uc(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wx.bind(null,t,e,n),e.then(t,t))}function ph(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Ii(n,e,1))),n.lanes|=1),t)}var dx=gi.ReactCurrentOwner,tn=!1;function Xt(t,e,n,i){e.child=t===null?Mg(e,null,n,i):gs(e,t.child,n,i)}function gh(t,e,n,i,r){n=n.render;var s=e.ref;return ls(e,r),i=Gf(t,e,n,i,s,r),n=Vf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(ot&&n&&Lf(e),e.flags|=1,Xt(t,e,i,r),e.child)}function vh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Yg(t,e,s,i,r)):(t=Ga(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Yg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Nc(t,e,n,i,r)}function $g(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(es,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(es,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(es,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(es,un),un|=i;return Xt(t,e,r,n),e.child}function Kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nc(t,e,n,i,r){var s=rn(n)?mr:Bt.current;return s=ps(e,s),ls(e,r),n=Gf(t,e,n,i,s,r),i=Vf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(ot&&i&&Lf(e),e.flags|=1,Xt(t,e,n,r),e.child)}function _h(t,e,n,i,r){if(rn(n)){var s=!0;tl(e)}else s=!1;if(ls(e,r),e.stateNode===null)ka(t,e),Xg(e,n,i),Dc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=rn(n)?mr:Bt.current,u=ps(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&dh(e,o,i,u),Ti=!1;var h=e.memoizedState;o.state=h,ol(e,i,o,r),l=e.memoizedState,a!==i||h!==l||nn.current||Ti?(typeof c=="function"&&(bc(e,n,c,i),l=e.memoizedState),(a=Ti||fh(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Tg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:bn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=rn(n)?mr:Bt.current,l=ps(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&dh(e,o,i,l),Ti=!1,h=e.memoizedState,o.state=h,ol(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||nn.current||Ti?(typeof p=="function"&&(bc(e,n,p,i),v=e.memoizedState),(u=Ti||fh(e,n,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ic(t,e,n,i,s,r)}function Ic(t,e,n,i,r,s){Kg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ih(e,n,!1),pi(t,e,s);i=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&ih(e,n,!0),e.child}function Zg(t){var e=t.stateNode;e.pendingContext?nh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nh(t,e.context,!1),zf(t,e.containerInfo)}function xh(t,e,n,i,r){return ms(),Df(r),e.flags|=256,Xt(t,e,n,i),e.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function Oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jg(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return Pc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,i,0,null),t=fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oc(n),e.memoizedState=Fc,t):jf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=zi(a,s):(s=fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Oc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fc,i}return s=t.child,t=s.sibling,i=zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jf(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,i){return i!==null&&Df(i),gs(e,t.child,null,n),t=jf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=mu(Error(te(422))),ta(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dl({mode:"visible",children:i.children},r,0,null),s=fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=Oc(o),e.memoizedState=Fc,s);if(!(e.mode&1))return ta(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=mu(s,i,void 0),ta(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hi(t,r),zn(i,t,r,-1))}return Jf(),i=mu(Error(te(421))),ta(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ax.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=Ni(r.nextSibling),dn=e,ot=!0,Un=null,t!==null&&(xn[yn++]=ai,xn[yn++]=li,xn[yn++]=gr,ai=t.id,li=t.overflow,gr=e),e=jf(e,i.children),e.flags|=4096,e)}function yh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lc(t.return,e,n)}function gu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Qg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yh(t,n,e);else if(t.tag===19)yh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&al(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gu(e,!0,n,null,s);break;case"together":gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function px(t,e,n){switch(e.tag){case 3:Zg(e),ms();break;case 5:wg(e);break;case 1:rn(e.type)&&tl(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Jg(t,e,n):(tt(lt,lt.current&1),t=pi(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Qg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,$g(t,e,n)}return pi(t,e,n)}var ev,zc,tv,nv;ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zc=function(){};tv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,lr(Yn.current);var s=null;switch(n){case"input":r=oc(t,r),i=oc(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=uc(t,r),i=uc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Qa)}fc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};nv=function(t,e,n,i){n!==i&&(e.flags|=4)};function zs(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mx(t,e,n){var i=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return rn(e.type)&&el(),Nt(e),null;case 3:return i=e.stateNode,vs(),st(nn),st(Bt),Bf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(jc(Un),Un=null))),zc(t,e),Nt(e),null;case 5:kf(e);var r=lr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)tv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Nt(e),null}if(t=lr(Yn.current),Qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[yo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)it($s[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Pd(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":bd(i,s),it("invalid",i)}fc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jo(i.textContent,a,t),r=["children",""+a]):uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":Wo(i),Ld(i,s,!0);break;case"textarea":Wo(i),Dd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Xn]=e,t[yo]=i,ev(t,e,!1,!1),e.stateNode=t;e:{switch(o=dc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)it($s[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Pd(t,i),r=oc(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":bd(t,i),r=uc(t,i),it("invalid",t);break;default:r=i}fc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Um(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&co(t,l):typeof l=="number"&&co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&gf(t,s,l,o))}switch(n){case"input":Wo(t),Ld(t,i,!1);break;case"textarea":Wo(t),Dd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)nv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=lr(Mo.current),lr(Yn.current),Qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Jo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Nt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&fn!==null&&e.mode&1&&!(e.flags&128))yg(),ms(),e.flags|=98560,s=!1;else if(s=Qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Xn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else Un!==null&&(jc(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Et===0&&(Et=3):Jf())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return vs(),zc(t,e),t===null&&_o(e.stateNode.containerInfo),Nt(e),null;case 10:return If(e.type._context),Nt(e),null;case 17:return rn(e.type)&&el(),Nt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)zs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=al(t),o!==null){for(e.flags|=128,zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>xs&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=al(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return Nt(e),null}else 2*vt()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Zf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function gx(t,e){switch(bf(e),e.tag){case 1:return rn(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),st(nn),st(Bt),Bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return vs(),null;case 10:return If(e.type._context),null;case 22:case 23:return Zf(),null;case 24:return null;default:return null}}var na=!1,Ot=!1,vx=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function kc(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Sh=!1;function _x(t,e){if(Mc=Ka,t=ag(),Pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ec={focusedElem:t,selectionRange:n},Ka=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:bn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){pt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return v=Sh,Sh=!1,v}function io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&kc(e,n,s)}r=r.next}while(r!==i)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iv(t){var e=t.alternate;e!==null&&(t.alternate=null,iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[yo],delete e[Ac],delete e[ex],delete e[tx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rv(t){return t.tag===5||t.tag===3||t.tag===4}function Mh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(i!==4&&(t=t.child,t!==null))for(Hc(t,e,n),t=t.sibling;t!==null;)Hc(t,e,n),t=t.sibling}function Gc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gc(t,e,n),t=t.sibling;t!==null;)Gc(t,e,n),t=t.sibling}var Pt=null,Dn=!1;function vi(t,e,n){for(n=n.child;n!==null;)sv(t,e,n),n=n.sibling}function sv(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Ot||Qr(n,e);case 6:var i=Pt,r=Dn;Pt=null,vi(t,e,n),Pt=i,Dn=r,Pt!==null&&(Dn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Dn?(t=Pt,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),mo(t)):uu(Pt,n.stateNode));break;case 4:i=Pt,r=Dn,Pt=n.stateNode.containerInfo,Dn=!0,vi(t,e,n),Pt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kc(n,e,o),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Ot&&(Qr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,vi(t,e,n),Ot=i):vi(t,e,n);break;default:vi(t,e,n)}}function Eh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vx),e.forEach(function(i){var r=Rx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Dn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Dn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(Pt===null)throw Error(te(160));sv(s,o,r),Pt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ov(e,t),e=e.sibling}function ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Gn(t),i&4){try{io(3,t,t.return),Ll(3,t)}catch(x){pt(t,t.return,x)}try{io(5,t,t.return)}catch(x){pt(t,t.return,x)}}break;case 1:Cn(e,t),Gn(t),i&512&&n!==null&&Qr(n,n.return);break;case 5:if(Cn(e,t),Gn(t),i&512&&n!==null&&Qr(n,n.return),t.flags&32){var r=t.stateNode;try{co(r,"")}catch(x){pt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cm(r,s),dc(a,o);var u=dc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Um(r,d):c==="dangerouslySetInnerHTML"?bm(r,d):c==="children"?co(r,d):gf(r,c,d,u)}switch(a){case"input":ac(r,s);break;case"textarea":Pm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?rs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?rs(r,!!s.multiple,s.defaultValue,!0):rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[yo]=s}catch(x){pt(t,t.return,x)}}break;case 6:if(Cn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){pt(t,t.return,x)}}break;case 3:if(Cn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(x){pt(t,t.return,x)}break;case 4:Cn(e,t),Gn(t);break;case 13:Cn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($f=vt())),i&4&&Eh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||c,Cn(e,t),Ot=u):Cn(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ve=t,c=t.child;c!==null;){for(d=ve=c;ve!==null;){switch(h=ve,p=h.child,h.tag){case 0:case 11:case 14:case 15:io(4,h,h.return);break;case 1:Qr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){pt(i,n,x)}}break;case 5:Qr(h,h.return);break;case 22:if(h.memoizedState!==null){wh(d);continue}}p!==null?(p.return=h,ve=p):wh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dm("display",o))}catch(x){pt(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){pt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Cn(e,t),Gn(t),i&4&&Eh(t);break;case 21:break;default:Cn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rv(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(co(r,""),i.flags&=-33);var s=Mh(t);Gc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Mh(t);Hc(t,a,o);break;default:throw Error(te(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xx(t,e,n){ve=t,av(t)}function av(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=na;var u=Ot;if(na=o,(Ot=l)&&!u)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Ah(r):l!==null?(l.return=o,ve=l):Ah(r);for(;s!==null;)ve=s,av(s),s=s.sibling;ve=r,na=a,Ot=u}Th(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Th(t)}}function Th(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&mo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ot||e.flags&512&&Bc(e)}catch(h){pt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function wh(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Ah(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{Bc(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{Bc(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var yx=Math.ceil,cl=gi.ReactCurrentDispatcher,qf=gi.ReactCurrentOwner,Tn=gi.ReactCurrentBatchConfig,Ye=0,Ct=null,St=null,bt=0,un=0,es=ji(0),Et=0,Ao=null,_r=0,bl=0,Yf=0,ro=null,en=null,$f=0,xs=1/0,si=null,fl=!1,Vc=null,Fi=null,ia=!1,Ci=null,dl=0,so=0,Wc=null,Ba=-1,Ha=0;function Yt(){return Ye&6?vt():Ba!==-1?Ba:Ba=vt()}function Oi(t){return t.mode&1?Ye&2&&bt!==0?bt&-bt:ix.transition!==null?(Ha===0&&(Ha=Xm()),Ha):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Jm(t.type)),t):1}function zn(t,e,n,i){if(50<so)throw so=0,Wc=null,Error(te(185));Uo(t,n,i),(!(Ye&2)||t!==Ct)&&(t===Ct&&(!(Ye&2)&&(bl|=n),Et===4&&Ai(t,bt)),sn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(xs=vt()+500,Rl&&qi()))}function sn(t,e){var n=t.callbackNode;i0(t,e);var i=$a(t,t===Ct?bt:0);if(i===0)n!==null&&Id(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Id(n),e===1)t.tag===0?nx(Rh.bind(null,t)):vg(Rh.bind(null,t)),J0(function(){!(Ye&6)&&qi()}),n=null;else{switch(jm(i)){case 1:n=Sf;break;case 4:n=Vm;break;case 16:n=Ya;break;case 536870912:n=Wm;break;default:n=Ya}n=mv(n,lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lv(t,e){if(Ba=-1,Ha=0,Ye&6)throw Error(te(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=$a(t,t===Ct?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hl(t,i);else{e=i;var r=Ye;Ye|=2;var s=cv();(Ct!==t||bt!==e)&&(si=null,xs=vt()+500,cr(t,e));do try{Ex();break}catch(a){uv(t,a)}while(!0);Nf(),cl.current=s,Ye=r,St!==null?e=0:(Ct=null,bt=0,e=Et)}if(e!==0){if(e===2&&(r=vc(t),r!==0&&(i=r,e=Xc(t,r))),e===1)throw n=Ao,cr(t,0),Ai(t,i),sn(t,vt()),n;if(e===6)Ai(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sx(r)&&(e=hl(t,i),e===2&&(s=vc(t),s!==0&&(i=s,e=Xc(t,s))),e===1))throw n=Ao,cr(t,0),Ai(t,i),sn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:tr(t,en,si);break;case 3:if(Ai(t,i),(i&130023424)===i&&(e=$f+500-vt(),10<e)){if($a(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=wc(tr.bind(null,t,en,si),e);break}tr(t,en,si);break;case 4:if(Ai(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yx(i/1960))-i,10<i){t.timeoutHandle=wc(tr.bind(null,t,en,si),i);break}tr(t,en,si);break;case 5:tr(t,en,si);break;default:throw Error(te(329))}}}return sn(t,vt()),t.callbackNode===n?lv.bind(null,t):null}function Xc(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(cr(t,e).flags|=256),t=hl(t,e),t!==2&&(e=en,en=n,e!==null&&jc(e)),t}function jc(t){en===null?en=t:en.push.apply(en,t)}function Sx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ai(t,e){for(e&=~Yf,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Rh(t){if(Ye&6)throw Error(te(327));us();var e=$a(t,0);if(!(e&1))return sn(t,vt()),null;var n=hl(t,e);if(t.tag!==0&&n===2){var i=vc(t);i!==0&&(e=i,n=Xc(t,i))}if(n===1)throw n=Ao,cr(t,0),Ai(t,e),sn(t,vt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,en,si),sn(t,vt()),null}function Kf(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(xs=vt()+500,Rl&&qi())}}function xr(t){Ci!==null&&Ci.tag===0&&!(Ye&6)&&us();var e=Ye;Ye|=1;var n=Tn.transition,i=Ze;try{if(Tn.transition=null,Ze=1,t)return t()}finally{Ze=i,Tn.transition=n,Ye=e,!(Ye&6)&&qi()}}function Zf(){un=es.current,st(es)}function cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z0(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&el();break;case 3:vs(),st(nn),st(Bt),Bf();break;case 5:kf(i);break;case 4:vs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:If(i.type._context);break;case 22:case 23:Zf()}n=n.return}if(Ct=t,St=t=zi(t.current,null),bt=un=e,Et=0,Ao=null,Yf=bl=_r=0,en=ro=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ar=null}return t}function uv(t,e){do{var n=St;try{if(Nf(),Oa.current=ul,ll){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ll=!1}if(vr=0,Rt=Mt=ct=null,no=!1,Eo=0,qf.current=null,n===null||n.return===null){Et=1,Ao=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ph(o);if(p!==null){p.flags&=-257,mh(p,o,a,s,e),p.mode&1&&hh(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){hh(s,u,e),Jf();break e}l=Error(te(426))}}else if(ot&&a.mode&1){var m=ph(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mh(m,o,a,s,e),Df(_s(l,a));break e}}s=l=_s(l,a),Et!==4&&(Et=2),ro===null?ro=[s]:ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=jg(s,l,e);ah(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Fi===null||!Fi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=qg(s,a,e);ah(s,y);break e}}s=s.return}while(s!==null)}dv(n)}catch(E){e=E,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function cv(){var t=cl.current;return cl.current=ul,t===null?ul:t}function Jf(){(Et===0||Et===3||Et===2)&&(Et=4),Ct===null||!(_r&268435455)&&!(bl&268435455)||Ai(Ct,bt)}function hl(t,e){var n=Ye;Ye|=2;var i=cv();(Ct!==t||bt!==e)&&(si=null,cr(t,e));do try{Mx();break}catch(r){uv(t,r)}while(!0);if(Nf(),Ye=n,cl.current=i,St!==null)throw Error(te(261));return Ct=null,bt=0,Et}function Mx(){for(;St!==null;)fv(St)}function Ex(){for(;St!==null&&!Y_();)fv(St)}function fv(t){var e=pv(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?dv(t):St=e,qf.current=null}function dv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=mx(n,e,un),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function tr(t,e,n){var i=Ze,r=Tn.transition;try{Tn.transition=null,Ze=1,Tx(t,e,n,i)}finally{Tn.transition=r,Ze=i}return null}function Tx(t,e,n,i){do us();while(Ci!==null);if(Ye&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r0(t,s),t===Ct&&(St=Ct=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,mv(Ya,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=Ze;Ze=1;var a=Ye;Ye|=4,qf.current=null,_x(t,n),ov(n,t),W0(Ec),Ka=!!Mc,Ec=Mc=null,t.current=n,xx(n),$_(),Ye=a,Ze=o,Tn.transition=s}else t.current=n;if(ia&&(ia=!1,Ci=t,dl=r),s=t.pendingLanes,s===0&&(Fi=null),J_(n.stateNode),sn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(fl)throw fl=!1,t=Vc,Vc=null,t;return dl&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===Wc?so++:(so=0,Wc=t):so=0,qi(),null}function us(){if(Ci!==null){var t=jm(dl),e=Tn.transition,n=Ze;try{if(Tn.transition=null,Ze=16>t?16:t,Ci===null)var i=!1;else{if(t=Ci,Ci=null,dl=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:io(8,c,s)}var d=c.child;if(d!==null)d.return=c,ve=d;else for(;ve!==null;){c=ve;var h=c.sibling,p=c.return;if(iv(c),c===u){ve=null;break}if(h!==null){h.return=p,ve=h;break}ve=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ve=f;break e}ve=s.return}}var _=t.current;for(ve=_;ve!==null;){o=ve;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ve=g;else e:for(o=_;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(E){pt(a,a.return,E)}if(a===o){ve=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ve=y;break e}ve=a.return}}if(Ye=r,qi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Ml,t)}catch{}i=!0}return i}finally{Ze=n,Tn.transition=e}}return!1}function Ch(t,e,n){e=_s(n,e),e=jg(t,e,1),t=Ii(t,e,1),e=Yt(),t!==null&&(Uo(t,1,e),sn(t,e))}function pt(t,e,n){if(t.tag===3)Ch(t,t,n);else for(;e!==null;){if(e.tag===3){Ch(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=_s(n,t),t=qg(e,t,1),e=Ii(e,t,1),t=Yt(),e!==null&&(Uo(e,1,t),sn(e,t));break}}e=e.return}}function wx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(bt&n)===n&&(Et===4||Et===3&&(bt&130023424)===bt&&500>vt()-$f?cr(t,0):Yf|=n),sn(t,e)}function hv(t,e){e===0&&(t.mode&1?(e=qo,qo<<=1,!(qo&130023424)&&(qo=4194304)):e=1);var n=Yt();t=hi(t,e),t!==null&&(Uo(t,e,n),sn(t,n))}function Ax(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hv(t,n)}function Rx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),hv(t,n)}var pv;pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,px(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ot&&e.flags&1048576&&_g(e,il,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ka(t,e),t=e.pendingProps;var r=ps(e,Bt.current);ls(e,n),r=Gf(null,e,i,t,r,n);var s=Vf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Of(e),r.updater=Pl,e.stateNode=r,r._reactInternals=e,Dc(e,i,t,n),e=Ic(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&Lf(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ka(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Px(i),t=bn(i,t),r){case 0:e=Nc(null,e,i,t,n);break e;case 1:e=_h(null,e,i,t,n);break e;case 11:e=gh(null,e,i,t,n);break e;case 14:e=vh(null,e,i,bn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Nc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),_h(t,e,i,r,n);case 3:e:{if(Zg(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tg(t,e),ol(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_s(Error(te(423)),e),e=xh(t,e,i,n,r);break e}else if(i!==r){r=_s(Error(te(424)),e),e=xh(t,e,i,n,r);break e}else for(fn=Ni(e.stateNode.containerInfo.firstChild),dn=e,ot=!0,Un=null,n=Mg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),i===r){e=pi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return wg(e),t===null&&Pc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Tc(i,r)?o=null:s!==null&&Tc(i,s)&&(e.flags|=32),Kg(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&Pc(e),null;case 13:return Jg(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=gs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),gh(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(rl,i._currentValue),i._currentValue=o,s!==null)if(Bn(s.value,o)){if(s.children===r.children&&!nn.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ls(e,n),r=wn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),vh(t,e,i,r,n);case 15:return Yg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),ka(t,e),e.tag=1,rn(i)?(t=!0,tl(e)):t=!1,ls(e,n),Xg(e,i,r),Dc(e,i,r,n),Ic(null,e,i,!0,t,n);case 19:return Qg(t,e,n);case 22:return $g(t,e,n)}throw Error(te(156,e.tag))};function mv(t,e){return Gm(t,e)}function Cx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,i){return new Cx(t,e,n,i)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Px(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_f)return 11;if(t===xf)return 14}return 2}function zi(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wr:return fr(n.children,r,s,e);case vf:o=8,r|=8;break;case nc:return t=En(12,n,e,r|2),t.elementType=nc,t.lanes=s,t;case ic:return t=En(13,n,e,r),t.elementType=ic,t.lanes=s,t;case rc:return t=En(19,n,e,r),t.elementType=rc,t.lanes=s,t;case wm:return Dl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Em:o=10;break e;case Tm:o=9;break e;case _f:o=11;break e;case xf:o=14;break e;case Ei:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=En(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fr(t,e,n,i){return t=En(7,t,i,e),t.lanes=n,t}function Dl(t,e,n,i){return t=En(22,t,i,e),t.elementType=wm,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ed(t,e,n,i,r,s,o,a,l){return t=new Lx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(s),t}function bx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function gv(t){if(!t)return Vi;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(rn(n))return gg(t,n,e)}return e}function vv(t,e,n,i,r,s,o,a,l){return t=ed(n,i,!0,t,r,s,o,a,l),t.context=gv(null),n=t.current,i=Yt(),r=Oi(n),s=ci(i,r),s.callback=e??null,Ii(n,s,r),t.current.lanes=r,Uo(t,r,i),sn(t,i),t}function Ul(t,e,n,i){var r=e.current,s=Yt(),o=Oi(r);return n=gv(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ii(r,e,o),t!==null&&(zn(t,r,o,s),Fa(t,r,o)),o}function pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ph(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function td(t,e){Ph(t,e),(t=t.alternate)&&Ph(t,e)}function Dx(){return null}var _v=typeof reportError=="function"?reportError:function(t){console.error(t)};function nd(t){this._internalRoot=t}Nl.prototype.render=nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Ul(t,e,null,null)};Nl.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){Ul(null,t,null,null)}),e[di]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=$m();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wi.length&&e!==0&&e<wi[n].priority;n++);wi.splice(n,0,t),n===0&&Zm(t)}};function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lh(){}function Ux(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=pl(o);s.call(u)}}var o=vv(e,i,t,0,null,!1,!1,"",Lh);return t._reactRootContainer=o,t[di]=o.current,_o(t.nodeType===8?t.parentNode:t),xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=pl(l);a.call(u)}}var l=ed(t,0,!1,null,null,!1,!1,"",Lh);return t._reactRootContainer=l,t[di]=l.current,_o(t.nodeType===8?t.parentNode:t),xr(function(){Ul(e,l,n,i)}),l}function Fl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=pl(o);a.call(l)}}Ul(e,o,t,r)}else o=Ux(n,e,t,r,i);return pl(o)}qm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ys(e.pendingLanes);n!==0&&(Mf(e,n|1),sn(e,vt()),!(Ye&6)&&(xs=vt()+500,qi()))}break;case 13:xr(function(){var i=hi(t,1);if(i!==null){var r=Yt();zn(i,t,1,r)}}),td(t,1)}};Ef=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=Yt();zn(e,t,134217728,n)}td(t,134217728)}};Ym=function(t){if(t.tag===13){var e=Oi(t),n=hi(t,e);if(n!==null){var i=Yt();zn(n,t,e,i)}td(t,e)}};$m=function(){return Ze};Km=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};pc=function(t,e,n){switch(e){case"input":if(ac(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Al(i);if(!r)throw Error(te(90));Rm(i),ac(i,r)}}}break;case"textarea":Pm(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};Fm=Kf;Om=xr;var Nx={usingClientEntryPoint:!1,Events:[Io,Yr,Al,Nm,Im,Kf]},ks={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ix={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bm(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||Dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{Ml=ra.inject(Ix),qn=ra}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(e))throw Error(te(200));return bx(t,e,null,n)};mn.createRoot=function(t,e){if(!id(t))throw Error(te(299));var n=!1,i="",r=_v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ed(t,1,!1,null,null,n,!1,i,r),t[di]=e.current,_o(t.nodeType===8?t.parentNode:t),new nd(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Bm(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return xr(t)};mn.hydrate=function(t,e,n){if(!Il(e))throw Error(te(200));return Fl(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!id(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=_v;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vv(e,null,t,1,n??null,r,!1,s,o),t[di]=e.current,_o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nl(e)};mn.render=function(t,e,n){if(!Il(e))throw Error(te(200));return Fl(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Il(t))throw Error(te(40));return t._reactRootContainer?(xr(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};mn.unstable_batchedUpdates=Kf;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Il(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Fl(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv)}catch(t){console.error(t)}}xv(),xm.exports=mn;var Fx=xm.exports,bh=Fx;ec.createRoot=bh.createRoot,ec.hydrateRoot=bh.hydrateRoot;function Ox(){return be.jsxs("nav",{style:{position:"fixed",top:0,left:0,width:"100vw",height:60,background:"rgba(16,16,26,0.95)",color:"#00ffd0",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 2rem",zIndex:100,fontWeight:700,letterSpacing:1,fontSize:"1.2rem",boxShadow:"0 2px 16px #0006"},children:[be.jsx("span",{children:"Mi Portafolio 3D"}),be.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[be.jsx("a",{href:"#info-panel",style:{color:"#00ffd0",textDecoration:"none"},children:"Explorar"}),be.jsx("a",{href:"#contacto",style:{color:"#00ffd0",textDecoration:"none"},children:"Contacto"})]})]})}function zx(){const[t,e]=et.useState(!1),n=i=>{i.preventDefault(),e(!1)};return be.jsxs("div",{id:"contacto",style:{position:"absolute",bottom:"6%",left:"6%",zIndex:24,pointerEvents:"auto"},children:[!t&&be.jsx("button",{type:"button",onClick:()=>e(!0),style:{padding:"0.75rem 1.5rem",borderRadius:"999px",border:"1px solid #00ffd0",background:"rgba(10, 12, 24, 0.85)",color:"#00ffd0",fontWeight:700,cursor:"pointer",boxShadow:"0 4px 18px rgba(0,0,0,0.45)"},children:"Contacto"}),t&&be.jsxs("form",{onSubmit:n,style:{background:"rgba(10, 12, 24, 0.92)",borderRadius:"1.2rem",boxShadow:"0 4px 32px rgba(0,0,0,0.65)",color:"#fff",minWidth:260,maxWidth:360,width:"100%",padding:"1.8rem",display:"flex",flexDirection:"column",gap:"1rem",border:"1px solid #00ffd0",backdropFilter:"blur(6px)"},children:[be.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[be.jsx("h3",{style:{margin:0,color:"#00ffd0",fontWeight:700},children:"Contacto"}),be.jsx("button",{type:"button",onClick:()=>e(!1),style:{border:"none",background:"transparent",color:"#00ffd0",fontSize:"1.2rem",cursor:"pointer"},children:"×"})]}),be.jsx("input",{type:"text",placeholder:"Nombre",style:{padding:"0.7rem",borderRadius:8,border:"1px solid #00ffd0",background:"#181828",color:"#fff"}}),be.jsx("input",{type:"email",placeholder:"Email",style:{padding:"0.7rem",borderRadius:8,border:"1px solid #00ffd0",background:"#181828",color:"#fff"}}),be.jsx("textarea",{placeholder:"Mensaje",rows:4,style:{padding:"0.7rem",borderRadius:8,border:"1px solid #00ffd0",background:"#181828",color:"#fff"}}),be.jsx("button",{type:"submit",style:{padding:"0.7rem",borderRadius:8,border:"none",background:"#00ffd0",color:"#181828",fontWeight:700,cursor:"pointer"},children:"Enviar"})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="157",kx=0,Dh=1,Bx=2,yv=1,Hx=2,ri=3,Wi=0,kt=1,jn=2,ki=0,cs=1,ml=2,Uh=3,Nh=4,Gx=5,Gr=100,Vx=101,Wx=102,Ih=103,Fh=104,Xx=200,jx=201,qx=202,Yx=203,Sv=204,Mv=205,$x=206,Kx=207,Zx=208,Jx=209,Qx=210,ey=0,ty=1,ny=2,qc=3,iy=4,ry=5,sy=6,oy=7,Ev=0,ay=1,ly=2,Bi=0,uy=1,cy=2,fy=3,dy=4,hy=5,Tv=300,ys=301,Ss=302,Yc=303,$c=304,Ol=306,Kc=1e3,In=1001,Zc=1002,jt=1003,Oh=1004,xu=1005,Sn=1006,py=1007,Ro=1008,Hi=1009,my=1010,gy=1011,sd=1012,wv=1013,Pi=1014,Li=1015,Co=1016,Av=1017,Rv=1018,dr=1020,vy=1021,Fn=1023,_y=1024,xy=1025,hr=1026,Ms=1027,yy=1028,Cv=1029,Sy=1030,Pv=1031,Lv=1033,yu=33776,Su=33777,Mu=33778,Eu=33779,zh=35840,kh=35841,Bh=35842,Hh=35843,My=36196,Gh=37492,Vh=37496,Wh=37808,Xh=37809,jh=37810,qh=37811,Yh=37812,$h=37813,Kh=37814,Zh=37815,Jh=37816,Qh=37817,ep=37818,tp=37819,np=37820,ip=37821,Tu=36492,rp=36494,sp=36495,Ey=36283,op=36284,ap=36285,lp=36286,bv=3e3,pr=3001,Ty=3200,wy=3201,Dv=0,Ay=1,Mn="",Lt="srgb",mi="srgb-linear",od="display-p3",zl="display-p3-linear",gl="linear",rt="srgb",vl="rec709",_l="p3",wu=7680,Ry=519,Cy=512,Py=513,Ly=514,by=515,Dy=516,Uy=517,Ny=518,Iy=519,up=35044,cp="300 es",Jc=1035,ui=2e3,xl=2001;class Rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,Qc=180/Math.PI;function Cs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function Fy(t,e){return(t%e+e)%e}function Ru(t,e,n){return(1-n)*t+n*e}function fp(t){return(t&t-1)===0&&t!==0}function ef(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Bs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,n=0){de.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],_=r[1],g=r[4],y=r[7],E=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*E,s[3]=o*m+a*g+l*A,s[6]=o*f+a*y+l*T,s[1]=u*x+c*_+d*E,s[4]=u*m+c*g+d*A,s[7]=u*f+c*y+d*T,s[2]=h*x+p*_+v*E,s[5]=h*m+p*g+v*A,s[8]=h*f+p*y+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cu.makeScale(e,n)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new Ge;function Uv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Oy(){const t=yl("canvas");return t.style.display="block",t}const dp={};function oo(t){t in dp||(dp[t]=!0,console.warn(t))}const hp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[mi]:{transfer:gl,primaries:vl,toReference:t=>t,fromReference:t=>t},[Lt]:{transfer:rt,primaries:vl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[zl]:{transfer:gl,primaries:_l,toReference:t=>t.applyMatrix3(pp),fromReference:t=>t.applyMatrix3(hp)},[od]:{transfer:rt,primaries:_l,toReference:t=>t.convertSRGBToLinear().applyMatrix3(pp),fromReference:t=>t.applyMatrix3(hp).convertLinearToSRGB()}},zy=new Set([mi,zl]),Qe={enabled:!0,_workingColorSpace:mi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!zy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=sa[e].toReference,r=sa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return sa[t].primaries},getTransfer:function(t){return t===Mn?gl:sa[t].transfer}};function fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ar;class Nv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ar===void 0&&(Ar=yl("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ar}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fs(n[i]/255)*255):n[i]=fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ky=0;class Iv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Cs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lu(r[o].image)):s.push(Lu(r[o]))}else s=Lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Nv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let By=0;class hn extends Rs{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=In,r=In,s=Sn,o=Ro,a=Fn,l=Hi,u=hn.DEFAULT_ANISOTROPY,c=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Cs(),this.name="",this.source=new Iv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===pr?Lt:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kc:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kc:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?pr:bv}set encoding(e){oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pr?Lt:Mn}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Tv;hn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(p+1)/2,E=(f+1)/2,A=(c+h)/4,T=(d+x)/4,D=(v+m)/4;return g>y&&g>E?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=T/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=D/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=D/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends Rs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===pr?Lt:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Iv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends Hy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Fv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gy extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||u!==p||c!==v){let m=1-a;const f=l*h+u*p+c*v+d*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const E=Math.sqrt(g),A=Math.atan2(E,f*_);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const y=a*_;if(l=l*m+h*y,u=u*m+p*y,c=c*m+v*y,d=d*m+x*y,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*d+l*p-u*h,e[n+1]=l*v+c*h+u*d-a*p,e[n+2]=u*v+c*p+a*h-l*d,e[n+3]=c*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"YXZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"ZXY":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"ZYX":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"YZX":this._x=h*c*d+u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d-h*p*v;break;case"XZY":this._x=h*c*d-u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new N,mp=new Oo;class zo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Jn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Jn)}else r.boundingBox===null&&r.computeBoundingBox(),Rr.copy(r.boundingBox),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),oa.subVectors(this.max,Hs),Cr.subVectors(e.a,Hs),Pr.subVectors(e.b,Hs),Lr.subVectors(e.c,Hs),_i.subVectors(Pr,Cr),xi.subVectors(Lr,Pr),Ki.subVectors(Cr,Lr);let n=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Ki.z,Ki.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Ki.z,0,-Ki.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Ki.y,Ki.x,0];return!Du(n,Cr,Pr,Lr,oa)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,Cr,Pr,Lr,oa))?!1:(aa.crossVectors(_i,xi),n=[aa.x,aa.y,aa.z],Du(n,Cr,Pr,Lr,oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new N,new N,new N,new N,new N,new N,new N,new N],Jn=new N,Rr=new zo,Cr=new N,Pr=new N,Lr=new N,_i=new N,xi=new N,Ki=new N,Hs=new N,oa=new N,aa=new N,Zi=new N;function Du(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zi.fromArray(t,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),u=n.dot(Zi),c=i.dot(Zi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Vy=new zo,Gs=new N,Uu=new N;class kl{constructor(e=new N,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Vy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const n=Gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Uu)),this.expandByPoint(Gs.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new N,Nu=new N,la=new N,yi=new N,Iu=new N,ua=new N,Fu=new N;class ad{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),la.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(la),a=yi.dot(this.direction),l=-yi.dot(la),u=yi.lengthSq(),c=Math.abs(1-o*o);let d,h,p,v;if(c>0)if(d=o*l-a,h=o*a-l,v=s*c,d>=0)if(h>=-v)if(h<=v){const x=1/c;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Nu).addScaledVector(la,h),p}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,s){Iu.subVectors(n,e),ua.subVectors(i,e),Fu.crossVectors(Iu,ua);let o=this.direction.dot(Fu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(ua.crossVectors(yi,ua));if(l<0)return null;const u=a*this.direction.dot(Iu.cross(yi));if(u<0||l+u>o)return null;const c=-a*yi.dot(Fu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,u,c,d,h,p,v,x,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,h,p,v,x,m)}set(e,n,i,r,s,o,a,l,u,c,d,h,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,v=a*c,x=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,v=u*c,x=u*d;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,v=u*c,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,v=a*c,x=a*d;n[0]=l*c,n[4]=v*u-p,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+x,n[5]=o*c,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*c,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,Xy)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Si.crossVectors(i,an),Si.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Si.crossVectors(i,an)),Si.normalize(),ca.crossVectors(an,Si),r[0]=Si.x,r[4]=ca.x,r[8]=an.x,r[1]=Si.y,r[5]=ca.y,r[9]=an.y,r[2]=Si.z,r[6]=ca.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],_=i[3],g=i[7],y=i[11],E=i[15],A=r[0],T=r[4],D=r[8],M=r[12],w=r[1],I=r[5],$=r[9],K=r[13],b=r[2],V=r[6],W=r[10],q=r[14],F=r[3],B=r[7],H=r[11],U=r[15];return s[0]=o*A+a*w+l*b+u*F,s[4]=o*T+a*I+l*V+u*B,s[8]=o*D+a*$+l*W+u*H,s[12]=o*M+a*K+l*q+u*U,s[1]=c*A+d*w+h*b+p*F,s[5]=c*T+d*I+h*V+p*B,s[9]=c*D+d*$+h*W+p*H,s[13]=c*M+d*K+h*q+p*U,s[2]=v*A+x*w+m*b+f*F,s[6]=v*T+x*I+m*V+f*B,s[10]=v*D+x*$+m*W+f*H,s[14]=v*M+x*K+m*q+f*U,s[3]=_*A+g*w+y*b+E*F,s[7]=_*T+g*I+y*V+E*B,s[11]=_*D+g*$+y*W+E*H,s[15]=_*M+g*K+y*q+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],_=d*m*u-x*h*u+x*l*p-a*m*p-d*l*f+a*h*f,g=v*h*u-c*m*u-v*l*p+o*m*p+c*l*f-o*h*f,y=c*x*u-v*d*u+v*a*p-o*x*p-c*a*f+o*d*f,E=v*d*l-c*x*l-v*a*h+o*x*h+c*a*m-o*d*m,A=n*_+i*g+r*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*f-i*h*f)*T,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*f+i*l*f)*T,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(c*m*s-v*h*s+v*r*p-n*m*p-c*r*f+n*h*f)*T,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*f-n*l*f)*T,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*T,e[8]=y*T,e[9]=(v*d*s-c*x*s-v*i*p+n*x*p+c*i*f-n*d*f)*T,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*f+n*a*f)*T,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*p-n*a*p)*T,e[12]=E*T,e[13]=(c*x*r-v*d*r+v*i*h-n*x*h-c*i*m+n*d*m)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,v=s*d,x=o*c,m=o*d,f=a*d,_=l*u,g=l*c,y=l*d,E=i.x,A=i.y,T=i.z;return r[0]=(1-(x+f))*E,r[1]=(p+y)*E,r[2]=(v-g)*E,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(v+g)*T,r[9]=(m-_)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const o=br.set(r[4],r[5],r[6]).length(),a=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/s,c=1/o,d=1/a;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=c,Pn.elements[5]*=c,Pn.elements[6]*=c,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,n.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ui){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===ui)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===xl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ui){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*c;let v,x;if(a===ui)v=(o+s)*d,x=-2*d;else if(a===xl)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const br=new N,Pn=new mt,Wy=new N(0,0,0),Xy=new N(1,1,1),Si=new N,ca=new N,an=new N,gp=new mt,vp=new Oo;class Bl{constructor(e=0,n=0,i=0,r=Bl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vp.setFromEuler(this),this.setFromQuaternion(vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bl.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jy=0;const _p=new N,Dr=new Oo,ei=new mt,fa=new N,Vs=new N,qy=new N,Yy=new Oo,xp=new N(1,0,0),yp=new N(0,1,0),Sp=new N(0,0,1),$y={type:"added"},Ky={type:"removed"};class $t extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new N,n=new Bl,i=new Oo,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(Sp,e)}translateOnAxis(e,n){return _p.copy(e).applyQuaternion(this.quaternion),this.position.add(_p.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(Sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fa.copy(e):fa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Vs,fa,this.up):ei.lookAt(fa,Vs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(ei),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($y)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ky)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new N(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new N,ti=new N,Ou=new N,ni=new N,Ur=new N,Nr=new N,Mp=new N,zu=new N,ku=new N,Bu=new N;let da=!1;class Nn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ti.subVectors(i,n),Ou.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(ti),l=Ln.dot(Ou),u=ti.dot(ti),c=ti.dot(Ou),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,n,i,r,s,o,a,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ni),l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ti.subVectors(e,n),Ln.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ln.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Nr.subVectors(s,i),zu.subVectors(e,i);const l=Ur.dot(zu),u=Nr.dot(zu);if(l<=0&&u<=0)return n.copy(i);ku.subVectors(e,r);const c=Ur.dot(ku),d=Nr.dot(ku);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Ur,o);Bu.subVectors(e,s);const p=Ur.dot(Bu),v=Nr.dot(Bu);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Nr,a);const m=c*v-p*d;if(m<=0&&d-c>=0&&p-v>=0)return Mp.subVectors(s,r),a=(d-c)/(d-c+(p-v)),n.copy(r).addScaledVector(Mp,a);const f=1/(m+x+h);return o=x*f,a=h*f,n.copy(i).addScaledVector(Ur,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Zy=0;class Ps extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=cs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sv,this.blendDst=Mv,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wu,this.stencilZFail=wu,this.stencilZPass=wu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Fy(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Hu(o,s,e+1/3),this.g=Hu(o,s,e),this.b=Hu(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Lt){const i=Ov[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Pu(e.r),this.g=Pu(e.g),this.b=Pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(zt(Ft.r*255,0,255))*65536+Math.round(zt(Ft.g*255,0,255))*256+Math.round(zt(Ft.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Lt){Qe.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Lt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(ha);const i=Ru(Mi.h,ha.h,n),r=Ru(Mi.s,ha.s,n),s=Ru(Mi.l,ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ke;Ke.NAMES=Ov;class ts extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new N,pa=new de;class kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=up,this.updateRange={offset:0,count:-1},this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pa.fromBufferAttribute(this,n),pa.applyMatrix3(e),this.setXY(n,pa.x,pa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==up&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class zv extends kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class kv extends kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kt extends kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Jy=0;const _n=new mt,Gu=new $t,Ir=new N,ln=new zo,Ws=new zo,At=new N;class Rn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?kv:zv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(ln.min,Ws.min),ln.expandByPoint(At),At.addVectors(ln.max,Ws.max),ln.expandByPoint(At)):(ln.expandByPoint(Ws.min),ln.expandByPoint(Ws.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)At.fromBufferAttribute(a,u),l&&(Ir.fromBufferAttribute(e,u),At.add(Ir)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new N,c[w]=new N;const d=new N,h=new N,p=new N,v=new de,x=new de,m=new de,f=new N,_=new N;function g(w,I,$){d.fromArray(r,w*3),h.fromArray(r,I*3),p.fromArray(r,$*3),v.fromArray(o,w*2),x.fromArray(o,I*2),m.fromArray(o,$*2),h.sub(d),p.sub(d),x.sub(v),m.sub(v);const K=1/(x.x*m.y-m.x*x.y);isFinite(K)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(K),_.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(K),u[w].add(f),u[I].add(f),u[$].add(f),c[w].add(_),c[I].add(_),c[$].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,I=y.length;w<I;++w){const $=y[w],K=$.start,b=$.count;for(let V=K,W=K+b;V<W;V+=3)g(i[V+0],i[V+1],i[V+2])}const E=new N,A=new N,T=new N,D=new N;function M(w){T.fromArray(s,w*3),D.copy(T);const I=u[w];E.copy(I),E.sub(T.multiplyScalar(T.dot(I))).normalize(),A.crossVectors(D,I);const K=A.dot(c[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=K}for(let w=0,I=y.length;w<I;++w){const $=y[w],K=$.start,b=$.count;for(let V=K,W=K+b;V<W;V+=3)M(i[V+0]),M(i[V+1]),M(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,d=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let f=0;f<c;f++)h[v++]=u[p++]}return new kn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ep=new mt,Ji=new ad,ma=new kl,Tp=new N,Fr=new N,Or=new N,zr=new N,Vu=new N,ga=new N,va=new de,_a=new de,xa=new de,wp=new N,Ap=new N,Rp=new N,ya=new N,Sa=new N;class qt extends $t{constructor(e=new Rn,n=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ga.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Vu.fromBufferAttribute(d,e),o?ga.addScaledVector(Vu,c):ga.addScaledVector(Vu.sub(n),c))}n.add(ga)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(ma.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ma,Tp)===null||Ji.origin.distanceToSquared(Tp)>(e.far-e.near)**2))&&(Ep.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Ep),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ji)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=g;y<E;y+=3){const A=a.getX(y),T=a.getX(y+1),D=a.getX(y+2);r=Ma(this,f,e,i,u,c,d,A,T,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=Ma(this,o,e,i,u,c,d,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=g;y<E;y+=3){const A=y,T=y+1,D=y+2;r=Ma(this,f,e,i,u,c,d,A,T,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=m,g=m+1,y=m+2;r=Ma(this,o,e,i,u,c,d,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Qy(t,e,n,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wi,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Sa);return u<n.near||u>n.far?null:{distance:u,point:Sa.clone(),object:t}}function Ma(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Fr),t.getVertexPosition(l,Or),t.getVertexPosition(u,zr);const c=Qy(t,e,n,i,Fr,Or,zr,ya);if(c){r&&(va.fromBufferAttribute(r,a),_a.fromBufferAttribute(r,l),xa.fromBufferAttribute(r,u),c.uv=Nn.getInterpolation(ya,Fr,Or,zr,va,_a,xa,new de)),s&&(va.fromBufferAttribute(s,a),_a.fromBufferAttribute(s,l),xa.fromBufferAttribute(s,u),c.uv1=Nn.getInterpolation(ya,Fr,Or,zr,va,_a,xa,new de),c.uv2=c.uv1),o&&(wp.fromBufferAttribute(o,a),Ap.fromBufferAttribute(o,l),Rp.fromBufferAttribute(o,u),c.normal=Nn.getInterpolation(ya,Fr,Or,zr,wp,Ap,Rp,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new N,materialIndex:0};Nn.getNormal(Fr,Or,zr,d.normal),c.face=d}return c}class ko extends Rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(d,2));function v(x,m,f,_,g,y,E,A,T,D,M){const w=y/T,I=E/D,$=y/2,K=E/2,b=A/2,V=T+1,W=D+1;let q=0,F=0;const B=new N;for(let H=0;H<W;H++){const U=H*I-K;for(let z=0;z<V;z++){const le=z*w-$;B[x]=le*_,B[m]=U*g,B[f]=b,u.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[f]=A>0?1:-1,c.push(B.x,B.y,B.z),d.push(z/T),d.push(1-H/D),q+=1}}for(let H=0;H<D;H++)for(let U=0;U<T;U++){const z=h+U+V*H,le=h+U+V*(H+1),ce=h+(U+1)+V*(H+1),he=h+(U+1)+V*H;l.push(z,le,he),l.push(le,ce,he),F+=6}a.addGroup(p,F,M),p+=F,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Es(t[n]);for(const r in i)e[r]=i[r]}return e}function eS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Bv(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const tS={clone:Es,merge:Wt};var nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=eS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Hv extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends Hv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,Br=1;class rS extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(kr,Br,e,n);r.layers=this.layers,this.add(r);const s=new cn(kr,Br,e,n);s.layers=this.layers,this.add(s);const o=new cn(kr,Br,e,n);o.layers=this.layers,this.add(o);const a=new cn(kr,Br,e,n);a.layers=this.layers,this.add(a);const l=new cn(kr,Br,e,n);l.layers=this.layers,this.add(l);const u=new cn(kr,Br,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Gv extends hn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ys,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sS extends yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pr?Lt:Mn),this.texture=new Gv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ko(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:ki});s.uniforms.tEquirect.value=n;const o=new qt(r,s),a=n.minFilter;return n.minFilter===Ro&&(n.minFilter=Sn),new rS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Wu=new N,oS=new N,aS=new Ge;class nr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wu.subVectors(i,n).cross(oS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||aS.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new kl,Ea=new N;class ud{constructor(e=new nr,n=new nr,i=new nr,r=new nr,s=new nr,o=new nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+v,y+_).normalize(),i[3].setComponents(l-o,h-c,m-v,y-_).normalize(),i[4].setComponents(l-a,h-d,m-x,y-g).normalize(),n===ui)i[5].setComponents(l+a,h+d,m+x,y+g).normalize();else if(n===xl)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function lS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,d,h),u.onUploadCallback();let v;if(d instanceof Float32Array)v=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=t.SHORT;else if(d instanceof Uint32Array)v=t.UNSIGNED_INT;else if(d instanceof Int32Array)v=t.INT;else if(d instanceof Int8Array)v=t.BYTE;else if(d instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,p=c.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class cd extends Rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,p=[],v=[],x=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let g=0;g<u;g++){const y=g*d-s;v.push(y,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+u*f,y=_+u*(f+1),E=_+1+u*(f+1),A=_+1+u*f;p.push(g,y,A),p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.width,e.height,e.widthSegments,e.heightSegments)}}var uS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,LS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OS="gl_FragColor = linearToOutputTexel( gl_FragColor );",zS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,kS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$S=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,KS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,oM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,MM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,TM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,VM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,YM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:uS,alphahash_pars_fragment:cS,alphamap_fragment:fS,alphamap_pars_fragment:dS,alphatest_fragment:hS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,begin_vertex:vS,beginnormal_vertex:_S,bsdfs:xS,iridescence_fragment:yS,bumpmap_pars_fragment:SS,clipping_planes_fragment:MS,clipping_planes_pars_fragment:ES,clipping_planes_pars_vertex:TS,clipping_planes_vertex:wS,color_fragment:AS,color_pars_fragment:RS,color_pars_vertex:CS,color_vertex:PS,common:LS,cube_uv_reflection_fragment:bS,defaultnormal_vertex:DS,displacementmap_pars_vertex:US,displacementmap_vertex:NS,emissivemap_fragment:IS,emissivemap_pars_fragment:FS,colorspace_fragment:OS,colorspace_pars_fragment:zS,envmap_fragment:kS,envmap_common_pars_fragment:BS,envmap_pars_fragment:HS,envmap_pars_vertex:GS,envmap_physical_pars_fragment:eM,envmap_vertex:VS,fog_vertex:WS,fog_pars_vertex:XS,fog_fragment:jS,fog_pars_fragment:qS,gradientmap_pars_fragment:YS,lightmap_fragment:$S,lightmap_pars_fragment:KS,lights_lambert_fragment:ZS,lights_lambert_pars_fragment:JS,lights_pars_begin:QS,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:rM,lights_physical_fragment:sM,lights_physical_pars_fragment:oM,lights_fragment_begin:aM,lights_fragment_maps:lM,lights_fragment_end:uM,logdepthbuf_fragment:cM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:vM,metalnessmap_fragment:_M,metalnessmap_pars_fragment:xM,morphcolor_vertex:yM,morphnormal_vertex:SM,morphtarget_pars_vertex:MM,morphtarget_vertex:EM,normal_fragment_begin:TM,normal_fragment_maps:wM,normal_pars_fragment:AM,normal_pars_vertex:RM,normal_vertex:CM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:bM,clearcoat_pars_fragment:DM,iridescence_pars_fragment:UM,opaque_fragment:NM,packing:IM,premultiplied_alpha_fragment:FM,project_vertex:OM,dithering_fragment:zM,dithering_pars_fragment:kM,roughnessmap_fragment:BM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:GM,shadowmap_pars_vertex:VM,shadowmap_vertex:WM,shadowmask_pars_fragment:XM,skinbase_vertex:jM,skinning_pars_vertex:qM,skinning_vertex:YM,skinnormal_vertex:$M,specularmap_fragment:KM,specularmap_pars_fragment:ZM,tonemapping_fragment:JM,tonemapping_pars_fragment:QM,transmission_fragment:eE,transmission_pars_fragment:tE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:rE,worldpos_vertex:sE,background_vert:oE,background_frag:aE,backgroundCube_vert:lE,backgroundCube_frag:uE,cube_vert:cE,cube_frag:fE,depth_vert:dE,depth_frag:hE,distanceRGBA_vert:pE,distanceRGBA_frag:mE,equirect_vert:gE,equirect_frag:vE,linedashed_vert:_E,linedashed_frag:xE,meshbasic_vert:yE,meshbasic_frag:SE,meshlambert_vert:ME,meshlambert_frag:EE,meshmatcap_vert:TE,meshmatcap_frag:wE,meshnormal_vert:AE,meshnormal_frag:RE,meshphong_vert:CE,meshphong_frag:PE,meshphysical_vert:LE,meshphysical_frag:bE,meshtoon_vert:DE,meshtoon_frag:UE,points_vert:NE,points_frag:IE,shadow_vert:FE,shadow_frag:OE,sprite_vert:zE,sprite_frag:kE},fe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Wn={basic:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Wt([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Wt([fe.lights,fe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Wn.physical={uniforms:Wt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ta={r:0,b:0,g:0};function BE(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function v(m,f){let _=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ol)?(c===void 0&&(c=new qt(new ko(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Es(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,(d!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new qt(new cd(2,2),new Sr({name:"BackgroundMaterial",uniforms:Es(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function x(m,f){m.getRGB(Ta,Bv(t)),i.buffers.color.setClear(Ta.r,Ta.g,Ta.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function HE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(b,V,W,q,F){let B=!1;if(o){const H=x(q,W,V);u!==H&&(u=H,p(u.object)),B=f(b,q,W,F),B&&_(b,q,W,F)}else{const H=V.wireframe===!0;(u.geometry!==q.id||u.program!==W.id||u.wireframe!==H)&&(u.geometry=q.id,u.program=W.id,u.wireframe=H,B=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,D(b,V,W,q),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(b){return i.isWebGL2?t.bindVertexArray(b):s.bindVertexArrayOES(b)}function v(b){return i.isWebGL2?t.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function x(b,V,W){const q=W.wireframe===!0;let F=a[b.id];F===void 0&&(F={},a[b.id]=F);let B=F[V.id];B===void 0&&(B={},F[V.id]=B);let H=B[q];return H===void 0&&(H=m(h()),B[q]=H),H}function m(b){const V=[],W=[],q=[];for(let F=0;F<r;F++)V[F]=0,W[F]=0,q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:q,object:b,attributes:{},index:null}}function f(b,V,W,q){const F=u.attributes,B=V.attributes;let H=0;const U=W.getAttributes();for(const z in U)if(U[z].location>=0){const ce=F[z];let he=B[z];if(he===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),ce===void 0||ce.attribute!==he||he&&ce.data!==he.data)return!0;H++}return u.attributesNum!==H||u.index!==q}function _(b,V,W,q){const F={},B=V.attributes;let H=0;const U=W.getAttributes();for(const z in U)if(U[z].location>=0){let ce=B[z];ce===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));const he={};he.attribute=ce,ce&&ce.data&&(he.data=ce.data),F[z]=he,H++}u.attributes=F,u.attributesNum=H,u.index=q}function g(){const b=u.newAttributes;for(let V=0,W=b.length;V<W;V++)b[V]=0}function y(b){E(b,0)}function E(b,V){const W=u.newAttributes,q=u.enabledAttributes,F=u.attributeDivisors;W[b]=1,q[b]===0&&(t.enableVertexAttribArray(b),q[b]=1),F[b]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,V),F[b]=V)}function A(){const b=u.newAttributes,V=u.enabledAttributes;for(let W=0,q=V.length;W<q;W++)V[W]!==b[W]&&(t.disableVertexAttribArray(W),V[W]=0)}function T(b,V,W,q,F,B,H){H===!0?t.vertexAttribIPointer(b,V,W,F,B):t.vertexAttribPointer(b,V,W,q,F,B)}function D(b,V,W,q){if(i.isWebGL2===!1&&(b.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const F=q.attributes,B=W.getAttributes(),H=V.defaultAttributeValues;for(const U in B){const z=B[U];if(z.location>=0){let le=F[U];if(le===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const ce=le.normalized,he=le.itemSize,Se=n.get(le);if(Se===void 0)continue;const Ee=Se.buffer,Ae=Se.type,je=Se.bytesPerElement,Le=i.isWebGL2===!0&&(Ae===t.INT||Ae===t.UNSIGNED_INT||le.gpuType===wv);if(le.isInterleavedBufferAttribute){const ye=le.data,P=ye.stride,ne=le.offset;if(ye.isInstancedInterleavedBuffer){for(let Y=0;Y<z.locationSize;Y++)E(z.location+Y,ye.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Y=0;Y<z.locationSize;Y++)y(z.location+Y);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Y=0;Y<z.locationSize;Y++)T(z.location+Y,he/z.locationSize,Ae,ce,P*je,(ne+he/z.locationSize*Y)*je,Le)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<z.locationSize;ye++)E(z.location+ye,le.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<z.locationSize;ye++)y(z.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let ye=0;ye<z.locationSize;ye++)T(z.location+ye,he/z.locationSize,Ae,ce,he*je,he/z.locationSize*ye*je,Le)}}else if(H!==void 0){const ce=H[U];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(z.location,ce);break;case 3:t.vertexAttrib3fv(z.location,ce);break;case 4:t.vertexAttrib4fv(z.location,ce);break;default:t.vertexAttrib1fv(z.location,ce)}}}}A()}function M(){$();for(const b in a){const V=a[b];for(const W in V){const q=V[W];for(const F in q)v(q[F].object),delete q[F];delete V[W]}delete a[b]}}function w(b){if(a[b.id]===void 0)return;const V=a[b.id];for(const W in V){const q=V[W];for(const F in q)v(q[F].object),delete q[F];delete V[W]}delete a[b.id]}function I(b){for(const V in a){const W=a[V];if(W[b.id]===void 0)continue;const q=W[b.id];for(const F in q)v(q[F].object),delete q[F];delete W[b.id]}}function $(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:y,disableUnusedAttributes:A}}function GE(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function VE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=o||e.has("OES_texture_float"),E=g&&y,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function WE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new nr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,g=_*4;let y=f.clippingState||null;l.value=y,y=c(v,h,g,p);for(let E=0;E!==g;++E)y[E]=n[E];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function XE(t){let e=new WeakMap;function n(o,a){return a===Yc?o.mapping=ys:a===$c&&(o.mapping=Ss),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Yc||a===$c)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new sS(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jE extends Hv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ns=4,Cp=[.125,.215,.35,.446,.526,.582],rr=20,Xu=new jE,Pp=new Ke;let ju=null;const ir=(1+Math.sqrt(5))/2,Hr=1/ir,Lp=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ir,Hr),new N(0,ir,-Hr),new N(Hr,0,ir),new N(-Hr,0,ir),new N(ir,Hr,0),new N(-ir,Hr,0)];class bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ju=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ys||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Co,format:Fn,colorSpace:mi,depthBuffer:!1},r=Dp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qE(s)),this._blurMaterial=YE(s,e,n)}return r}_compileMaterial(e){const n=new qt(this._lodPlanes[0],e);this._renderer.compile(n,Xu)}_sceneToCubeUV(e,n,i,r){const a=new cn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Pp),c.toneMapping=Bi,c.autoClear=!1;const p=new ts({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),v=new qt(new ko,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Pp),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;wa(r,_*g,f>2?g:0,g,g),c.setRenderTarget(r),x&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ys||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Up());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lp[(r-1)%Lp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new qt(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rr-1),x=s/v,m=isFinite(s)?1+Math.floor(c*x):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const f=[];let _=0;for(let T=0;T<rr;++T){const D=T/x,M=Math.exp(-D*D/2);f.push(M),T===0?_+=M:T<m&&(_+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const y=this._sizeLods[r],E=3*y*(r>g-ns?r-g+ns:0),A=4*(this._cubeSize-y);wa(n,E,A,3*y,2*y),l.setRenderTarget(n),l.render(d,Xu)}}function qE(t){const e=[],n=[],i=[];let r=t;const s=t-ns+1+Cp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ns?l=Cp[o-t+ns-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,x=3,m=2,f=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,D=A>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];_.set(M,x*v*A),g.set(h,m*v*A);const w=[A,A,A,A,A,A];y.set(w,f*v*A)}const E=new Rn;E.setAttribute("position",new kn(_,x)),E.setAttribute("uv",new kn(g,m)),E.setAttribute("faceIndex",new kn(y,f)),e.push(E),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dp(t,e,n){const i=new yr(t,e,n);return i.texture.mapping=Ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YE(t,e,n){const i=new Float32Array(rr),r=new N(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Up(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Np(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $E(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Yc||l===$c,c=l===ys||l===Ss;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new bp(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new bp(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function KE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZE(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const E=_[g+0],A=_[g+1],T=_[g+2];h.push(E,A,A,T,T,E)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const E=g+0,A=g+1,T=g+2;h.push(E,A,A,T,T,E)}}else return;const m=new(Uv(h)?kv:zv)(h,1);m.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function JE(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function d(h,p,v){if(v===0)return;let x,m;if(r)x=t,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,p,a,h*l,v),n.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function QE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eT(t,e){return t[0]-e[0]}function tT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function nT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==x){let V=function(){K.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var p=V;m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),E===!0&&(M=3);let w=c.attributes.position.count*M,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const $=new Float32Array(w*I*4*x),K=new Fv($,w,I,x);K.type=Li,K.needsUpdate=!0;const b=M*4;for(let W=0;W<x;W++){const q=A[W],F=T[W],B=D[W],H=w*I*4*W;for(let U=0;U<q.count;U++){const z=U*b;g===!0&&(o.fromBufferAttribute(q,U),$[H+z+0]=o.x,$[H+z+1]=o.y,$[H+z+2]=o.z,$[H+z+3]=0),y===!0&&(o.fromBufferAttribute(F,U),$[H+z+4]=o.x,$[H+z+5]=o.y,$[H+z+6]=o.z,$[H+z+7]=0),E===!0&&(o.fromBufferAttribute(B,U),$[H+z+8]=o.x,$[H+z+9]=o.y,$[H+z+10]=o.z,$[H+z+11]=B.itemSize===4?o.w:1)}}m={count:x,texture:K,size:new de(w,I)},s.set(c,m),c.addEventListener("dispose",V)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let x=i[c.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[c.id]=x}for(let y=0;y<v;y++){const E=x[y];E[0]=y,E[1]=h[y]}x.sort(tT);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(eT);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const E=a[y],A=E[0],T=E[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&c.getAttribute("morphTarget"+y)!==m[A]&&c.setAttribute("morphTarget"+y,m[A]),f&&c.getAttribute("morphNormal"+y)!==f[A]&&c.setAttribute("morphNormal"+y,f[A]),r[y]=T,_+=T):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const g=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function iT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Wv=new hn,Xv=new Fv,jv=new Gy,qv=new Gv,Ip=[],Fp=[],Op=new Float32Array(16),zp=new Float32Array(9),kp=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ip[r];if(s===void 0&&(s=new Float32Array(r),Ip[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hl(t,e){let n=Fp[e];n===void 0&&(n=new Int32Array(e),Fp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;kp.set(i),t.uniformMatrix2fv(this.addr,!1,kp),wt(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;zp.set(i),t.uniformMatrix3fv(this.addr,!1,zp),wt(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;Op.set(i),t.uniformMatrix4fv(this.addr,!1,Op),wt(n,i)}}function fT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Wv,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||jv,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qv,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Xv,r)}function ET(t){switch(t){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return uT;case 35676:return cT;case 5124:case 35670:return fT;case 35667:case 35671:return dT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function TT(t,e){t.uniform1fv(this.addr,e)}function wT(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function AT(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function RT(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function CT(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PT(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LT(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bT(t,e){t.uniform1iv(this.addr,e)}function DT(t,e){t.uniform2iv(this.addr,e)}function UT(t,e){t.uniform3iv(this.addr,e)}function NT(t,e){t.uniform4iv(this.addr,e)}function IT(t,e){t.uniform1uiv(this.addr,e)}function FT(t,e){t.uniform2uiv(this.addr,e)}function OT(t,e){t.uniform3uiv(this.addr,e)}function zT(t,e){t.uniform4uiv(this.addr,e)}function kT(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Wv,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||jv,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qv,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Xv,s[o])}function VT(t){switch(t){case 5126:return TT;case 35664:return wT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return PT;case 35676:return LT;case 5124:case 35670:return bT;case 35667:case 35671:return DT;case 35668:case 35672:return UT;case 35669:case 35673:return NT;case 5125:return IT;case 36294:return FT;case 36295:return OT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ET(n.type)}}class XT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=VT(n.type)}}class jT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function Bp(t,e){t.seq.push(e),t.map[e.id]=e}function qT(t,e,n){const i=t.name,r=i.length;for(qu.lastIndex=0;;){const s=qu.exec(i),o=qu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Bp(n,u===void 0?new WT(a,t,e):new XT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new jT(a),Bp(n,d)),n=d}}}class Va{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);qT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Hp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let YT=0;function $T(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function KT(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===_l&&n===vl?i="LinearDisplayP3ToLinearSRGB":e===vl&&n===_l&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case zl:return[i,"LinearTransferOETF"];case Lt:case od:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Gp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+$T(t.getShaderSource(e),o)}else return r}function ZT(t,e){const n=KT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function JT(t,e){let n;switch(e){case uy:n="Linear";break;case cy:n="Reinhard";break;case fy:n="OptimizedCineon";break;case dy:n="ACESFilmic";break;case hy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function QT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function ew(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ks(t){return t!==""}function Vp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(t){return t.replace(nw,rw)}const iw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rw(t,e){let n=He[e];if(n===void 0){const i=iw.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tf(n)}const sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(t){return t.replace(sw,ow)}function ow(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Hx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function lw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ys:case Ss:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function cw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ev:e="ENVMAP_BLENDING_MULTIPLY";break;case ay:e="ENVMAP_BLENDING_MIX";break;case ly:e="ENVMAP_BLENDING_ADD";break}return e}function fw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function dw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aw(n),u=lw(n),c=uw(n),d=cw(n),h=fw(n),p=n.isWebGL2?"":QT(n),v=ew(s),x=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ks).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ks).join(`
`),f.length>0&&(f+=`
`)):(m=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),f=[p,jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?He.tonemapping_pars_fragment:"",n.toneMapping!==Bi?JT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,ZT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ks).join(`
`)),o=tf(o),o=Vp(o,n),o=Wp(o,n),a=tf(a),a=Vp(a,n),a=Wp(a,n),o=Xp(o),a=Xp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+m+o,y=_+f+a,E=Hp(r,r.VERTEX_SHADER,g),A=Hp(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,E),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),w=r.getShaderInfoLog(E).trim(),I=r.getShaderInfoLog(A).trim();let $=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,E,A);else{const b=Gp(r,E,"vertex"),V=Gp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+b+`
`+V)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||I==="")&&(K=!1);K&&(this.diagnostics={runnable:$,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:I,prefix:f}})}r.deleteShader(E),r.deleteShader(A);let T;this.getUniforms=function(){return T===void 0&&(T=new Va(r,x)),T};let D;return this.getAttributes=function(){return D===void 0&&(D=tw(r,x)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}let hw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mw(e),n.set(e,i)),i}}class mw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function gw(t,e,n,i,r,s,o){const a=new ld,l=new pw,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,w,I,$,K){const b=$.fog,V=K.geometry,W=M.isMeshStandardMaterial?$.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||W),F=q&&q.mapping===Ol?q.image.height:null,B=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const H=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,U=H!==void 0?H.length:0;let z=0;V.morphAttributes.position!==void 0&&(z=1),V.morphAttributes.normal!==void 0&&(z=2),V.morphAttributes.color!==void 0&&(z=3);let le,ce,he,Se;if(B){const nt=Wn[B];le=nt.vertexShader,ce=nt.fragmentShader}else le=M.vertexShader,ce=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),Se=l.getFragmentShaderID(M);const Ee=t.getRenderTarget(),Ae=K.isInstancedMesh===!0,je=!!M.map,Le=!!M.matcap,ye=!!q,P=!!M.aoMap,ne=!!M.lightMap,Y=!!M.bumpMap,Z=!!M.normalMap,J=!!M.displacementMap,we=!!M.emissiveMap,ge=!!M.metalnessMap,Me=!!M.roughnessMap,Oe=M.anisotropy>0,qe=M.clearcoat>0,dt=M.iridescence>0,C=M.sheen>0,S=M.transmission>0,G=Oe&&!!M.anisotropyMap,ie=qe&&!!M.clearcoatMap,ee=qe&&!!M.clearcoatNormalMap,re=qe&&!!M.clearcoatRoughnessMap,Te=dt&&!!M.iridescenceMap,oe=dt&&!!M.iridescenceThicknessMap,me=C&&!!M.sheenColorMap,Ue=C&&!!M.sheenRoughnessMap,$e=!!M.specularMap,se=!!M.specularColorMap,Je=!!M.specularIntensityMap,ze=S&&!!M.transmissionMap,Ne=S&&!!M.thicknessMap,Pe=!!M.gradientMap,L=!!M.alphaMap,ue=M.alphaTest>0,ae=!!M.alphaHash,_e=!!M.extensions,pe=!!V.attributes.uv1,Q=!!V.attributes.uv2,Re=!!V.attributes.uv3;let ke=Bi;return M.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ke=t.toneMapping),{isWebGL2:c,shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:ce,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Ae,instancingColor:Ae&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:mi,map:je,matcap:Le,envMap:ye,envMapMode:ye&&q.mapping,envMapCubeUVHeight:F,aoMap:P,lightMap:ne,bumpMap:Y,normalMap:Z,displacementMap:h&&J,emissiveMap:we,normalMapObjectSpace:Z&&M.normalMapType===Ay,normalMapTangentSpace:Z&&M.normalMapType===Dv,metalnessMap:ge,roughnessMap:Me,anisotropy:Oe,anisotropyMap:G,clearcoat:qe,clearcoatMap:ie,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,iridescence:dt,iridescenceMap:Te,iridescenceThicknessMap:oe,sheen:C,sheenColorMap:me,sheenRoughnessMap:Ue,specularMap:$e,specularColorMap:se,specularIntensityMap:Je,transmission:S,transmissionMap:ze,thicknessMap:Ne,gradientMap:Pe,opaque:M.transparent===!1&&M.blending===cs,alphaMap:L,alphaTest:ue,alphaHash:ae,combine:M.combine,mapUv:je&&x(M.map.channel),aoMapUv:P&&x(M.aoMap.channel),lightMapUv:ne&&x(M.lightMap.channel),bumpMapUv:Y&&x(M.bumpMap.channel),normalMapUv:Z&&x(M.normalMap.channel),displacementMapUv:J&&x(M.displacementMap.channel),emissiveMapUv:we&&x(M.emissiveMap.channel),metalnessMapUv:ge&&x(M.metalnessMap.channel),roughnessMapUv:Me&&x(M.roughnessMap.channel),anisotropyMapUv:G&&x(M.anisotropyMap.channel),clearcoatMapUv:ie&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(M.sheenRoughnessMap.channel),specularMapUv:$e&&x(M.specularMap.channel),specularColorMapUv:se&&x(M.specularColorMap.channel),specularIntensityMapUv:Je&&x(M.specularIntensityMap.channel),transmissionMapUv:ze&&x(M.transmissionMap.channel),thicknessMapUv:Ne&&x(M.thicknessMap.channel),alphaMapUv:L&&x(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Z||Oe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:pe,vertexUv2s:Q,vertexUv3s:Re,pointsUvs:K.isPoints===!0&&!!V.attributes.uv&&(je||L),fog:!!b,useFog:M.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,useLegacyLights:t._useLegacyLights,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jn,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:_e&&M.extensions.derivatives===!0,extensionFragDepth:_e&&M.extensions.fragDepth===!0,extensionDrawBuffers:_e&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)w.push(I),w.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(w,M),g(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const w=v[M.type];let I;if(w){const $=Wn[w];I=tS.clone($.uniforms)}else I=M.uniforms;return I}function E(M,w){let I;for(let $=0,K=u.length;$<K;$++){const b=u[$];if(b.cacheKey===w){I=b,++I.usedTimes;break}}return I===void 0&&(I=new dw(t,w,M,s),u.push(I)),I}function A(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:D}}function vw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _w(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,v,x,m){const f=o(d,h,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,x,m){const f=o(d,h,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||_w),i.length>1&&i.sort(h||qp),r.length>1&&r.sort(h||qp)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function xw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Yp,t.set(i,[o])):r>=s.length?(o=new Yp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function yw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Ke};break;case"SpotLight":n={position:new N,direction:new N,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function Sw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Mw=0;function Ew(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Tw(t,e){const n=new yw,i=Sw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new N);const s=new N,o=new mt,a=new mt;function l(c,d){let h=0,p=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,m=0,f=0,_=0,g=0,y=0,E=0,A=0,T=0,D=0,M=0;c.sort(Ew);const w=d===!0?Math.PI:1;for(let $=0,K=c.length;$<K;$++){const b=c[$],V=b.color,W=b.intensity,q=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=V.r*W*w,p+=V.g*W*w,v+=V.b*W*w;else if(b.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(b.sh.coefficients[B],W);M++}else if(b.isDirectionalLight){const B=n.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity*w),b.castShadow){const H=b.shadow,U=i.get(b);U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,r.directionalShadow[x]=U,r.directionalShadowMap[x]=F,r.directionalShadowMatrix[x]=b.shadow.matrix,y++}r.directional[x]=B,x++}else if(b.isSpotLight){const B=n.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(V).multiplyScalar(W*w),B.distance=q,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,r.spot[f]=B;const H=b.shadow;if(b.map&&(r.spotLightMap[T]=b.map,T++,H.updateMatrices(b),b.castShadow&&D++),r.spotLightMatrix[f]=H.matrix,b.castShadow){const U=i.get(b);U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,r.spotShadow[f]=U,r.spotShadowMap[f]=F,A++}f++}else if(b.isRectAreaLight){const B=n.get(b);B.color.copy(V).multiplyScalar(W),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),r.rectArea[_]=B,_++}else if(b.isPointLight){const B=n.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity*w),B.distance=b.distance,B.decay=b.decay,b.castShadow){const H=b.shadow,U=i.get(b);U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,r.pointShadow[m]=U,r.pointShadowMap[m]=F,r.pointShadowMatrix[m]=b.shadow.matrix,E++}r.point[m]=B,m++}else if(b.isHemisphereLight){const B=n.get(b);B.skyColor.copy(b.color).multiplyScalar(W*w),B.groundColor.copy(b.groundColor).multiplyScalar(W*w),r.hemi[g]=B,g++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const I=r.hash;(I.directionalLength!==x||I.pointLength!==m||I.spotLength!==f||I.rectAreaLength!==_||I.hemiLength!==g||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==T||I.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,I.directionalLength=x,I.pointLength=m,I.spotLength=f,I.rectAreaLength=_,I.hemiLength=g,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=T,I.numLightProbes=M,r.version=Mw++)}function u(c,d){let h=0,p=0,v=0,x=0,m=0;const f=d.matrixWorldInverse;for(let _=0,g=c.length;_<g;_++){const y=c[_];if(y.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(y.isSpotLight){const E=r.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const E=r.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function $p(t,e){const n=new Tw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function ww(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new $p(t,e),n.set(s,[l])):o>=a.length?(l=new $p(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Aw extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rw extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lw(t,e,n){let i=new ud;const r=new de,s=new de,o=new at,a=new Aw({depthPacking:wy}),l=new Rw,u={},c=n.maxTextureSize,d={[Wi]:kt,[kt]:Wi,[jn]:jn},h=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Cw,fragmentShader:Pw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Rn;v.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qt(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let f=this.type;this.render=function(E,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const D=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),I=t.state;I.setBlending(ki),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const $=f!==ri&&this.type===ri,K=f===ri&&this.type!==ri;for(let b=0,V=E.length;b<V;b++){const W=E[b],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const F=q.getFrameExtents();if(r.multiply(F),s.copy(q.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,q.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,q.mapSize.y=s.y)),q.map===null||$===!0||K===!0){const H=this.type!==ri?{minFilter:jt,magFilter:jt}:{};q.map!==null&&q.map.dispose(),q.map=new yr(r.x,r.y,H),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const B=q.getViewportCount();for(let H=0;H<B;H++){const U=q.getViewport(H);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),I.viewport(o),q.updateMatrices(W,H),i=q.getFrustum(),y(A,T,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===ri&&_(q,T),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(D,M,w)};function _(E,A){const T=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new yr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,T,h,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,T,p,x,null)}function g(E,A,T,D){let M=null;const w=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=T.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=M.uuid,$=A.uuid;let K=u[I];K===void 0&&(K={},u[I]=K);let b=K[$];b===void 0&&(b=M.clone(),K[$]=b),M=b}if(M.visible=A.visible,M.wireframe=A.wireframe,D===ri?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=t.properties.get(M);I.light=T}return M}function y(E,A,T,D,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ri)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const $=e.update(E),K=E.material;if(Array.isArray(K)){const b=$.groups;for(let V=0,W=b.length;V<W;V++){const q=b[V],F=K[q.materialIndex];if(F&&F.visible){const B=g(E,F,D,M);t.renderBufferDirect(T,null,$,B,E,q)}}}else if(K.visible){const b=g(E,K,D,M);t.renderBufferDirect(T,null,$,b,E,null)}}const I=E.children;for(let $=0,K=I.length;$<K;$++)y(I[$],A,T,D,M)}}function bw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ue=new at;let ae=null;const _e=new at(0,0,0,0);return{setMask:function(pe){ae!==pe&&!L&&(t.colorMask(pe,pe,pe,pe),ae=pe)},setLocked:function(pe){L=pe},setClear:function(pe,Q,Re,ke,Ht){Ht===!0&&(pe*=ke,Q*=ke,Re*=ke),ue.set(pe,Q,Re,ke),_e.equals(ue)===!1&&(t.clearColor(pe,Q,Re,ke),_e.copy(ue))},reset:function(){L=!1,ae=null,_e.set(-1,0,0,0)}}}function s(){let L=!1,ue=null,ae=null,_e=null;return{setTest:function(pe){pe?Ee(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!L&&(t.depthMask(pe),ue=pe)},setFunc:function(pe){if(ae!==pe){switch(pe){case ey:t.depthFunc(t.NEVER);break;case ty:t.depthFunc(t.ALWAYS);break;case ny:t.depthFunc(t.LESS);break;case qc:t.depthFunc(t.LEQUAL);break;case iy:t.depthFunc(t.EQUAL);break;case ry:t.depthFunc(t.GEQUAL);break;case sy:t.depthFunc(t.GREATER);break;case oy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=pe}},setLocked:function(pe){L=pe},setClear:function(pe){_e!==pe&&(t.clearDepth(pe),_e=pe)},reset:function(){L=!1,ue=null,ae=null,_e=null}}}function o(){let L=!1,ue=null,ae=null,_e=null,pe=null,Q=null,Re=null,ke=null,Ht=null;return{setTest:function(nt){L||(nt?Ee(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!L&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,Hn,Gt){(ae!==nt||_e!==Hn||pe!==Gt)&&(t.stencilFunc(nt,Hn,Gt),ae=nt,_e=Hn,pe=Gt)},setOp:function(nt,Hn,Gt){(Q!==nt||Re!==Hn||ke!==Gt)&&(t.stencilOp(nt,Hn,Gt),Q=nt,Re=Hn,ke=Gt)},setLocked:function(nt){L=nt},setClear:function(nt){Ht!==nt&&(t.clearStencil(nt),Ht=nt)},reset:function(){L=!1,ue=null,ae=null,_e=null,pe=null,Q=null,Re=null,ke=null,Ht=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,y=null,E=null,A=null,T=null,D=null,M=!1,w=null,I=null,$=null,K=null,b=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=q>=1):F.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=q>=2);let B=null,H={};const U=t.getParameter(t.SCISSOR_BOX),z=t.getParameter(t.VIEWPORT),le=new at().fromArray(U),ce=new at().fromArray(z);function he(L,ue,ae,_e){const pe=new Uint8Array(4),Q=t.createTexture();t.bindTexture(L,Q),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<ae;Re++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ue,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ue+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return Q}const Se={};Se[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(t.DEPTH_TEST),l.setFunc(qc),J(!1),we(Dh),Ee(t.CULL_FACE),Y(ki);function Ee(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function je(L,ue){return p[L]!==ue?(t.bindFramebuffer(L,ue),p[L]=ue,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ue)),!0):!1}function Le(L,ue){let ae=x,_e=!1;if(L)if(ae=v.get(ue),ae===void 0&&(ae=[],v.set(ue,ae)),L.isWebGLMultipleRenderTargets){const pe=L.texture;if(ae.length!==pe.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,Re=pe.length;Q<Re;Q++)ae[Q]=t.COLOR_ATTACHMENT0+Q;ae.length=pe.length,_e=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,_e=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,_e=!0);_e&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ye(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const P={[Gr]:t.FUNC_ADD,[Vx]:t.FUNC_SUBTRACT,[Wx]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Ih]=t.MIN,P[Fh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(P[Ih]=L.MIN_EXT,P[Fh]=L.MAX_EXT)}const ne={[Xx]:t.ZERO,[jx]:t.ONE,[qx]:t.SRC_COLOR,[Sv]:t.SRC_ALPHA,[Qx]:t.SRC_ALPHA_SATURATE,[Zx]:t.DST_COLOR,[$x]:t.DST_ALPHA,[Yx]:t.ONE_MINUS_SRC_COLOR,[Mv]:t.ONE_MINUS_SRC_ALPHA,[Jx]:t.ONE_MINUS_DST_COLOR,[Kx]:t.ONE_MINUS_DST_ALPHA};function Y(L,ue,ae,_e,pe,Q,Re,ke){if(L===ki){f===!0&&(Ae(t.BLEND),f=!1);return}if(f===!1&&(Ee(t.BLEND),f=!0),L!==Gx){if(L!==_||ke!==M){if((g!==Gr||A!==Gr)&&(t.blendEquation(t.FUNC_ADD),g=Gr,A=Gr),ke)switch(L){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ml:t.blendFunc(t.ONE,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ml:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,T=null,D=null,_=L,M=ke}return}pe=pe||ue,Q=Q||ae,Re=Re||_e,(ue!==g||pe!==A)&&(t.blendEquationSeparate(P[ue],P[pe]),g=ue,A=pe),(ae!==y||_e!==E||Q!==T||Re!==D)&&(t.blendFuncSeparate(ne[ae],ne[_e],ne[Q],ne[Re]),y=ae,E=_e,T=Q,D=Re),_=L,M=!1}function Z(L,ue){L.side===jn?Ae(t.CULL_FACE):Ee(t.CULL_FACE);let ae=L.side===kt;ue&&(ae=!ae),J(ae),L.blending===cs&&L.transparent===!1?Y(ki):Y(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const _e=L.stencilWrite;u.setTest(_e),_e&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){w!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),w=L)}function we(L){L!==kx?(Ee(t.CULL_FACE),L!==I&&(L===Dh?t.cullFace(t.BACK):L===Bx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),I=L}function ge(L){L!==$&&(W&&t.lineWidth(L),$=L)}function Me(L,ue,ae){L?(Ee(t.POLYGON_OFFSET_FILL),(K!==ue||b!==ae)&&(t.polygonOffset(ue,ae),K=ue,b=ae)):Ae(t.POLYGON_OFFSET_FILL)}function Oe(L){L?Ee(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function qe(L){L===void 0&&(L=t.TEXTURE0+V-1),B!==L&&(t.activeTexture(L),B=L)}function dt(L,ue,ae){ae===void 0&&(B===null?ae=t.TEXTURE0+V-1:ae=B);let _e=H[ae];_e===void 0&&(_e={type:void 0,texture:void 0},H[ae]=_e),(_e.type!==L||_e.texture!==ue)&&(B!==ae&&(t.activeTexture(ae),B=ae),t.bindTexture(L,ue||Se[L]),_e.type=L,_e.texture=ue)}function C(){const L=H[B];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(L){le.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function Je(L){ce.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}function ze(L,ue){let ae=d.get(ue);ae===void 0&&(ae=new WeakMap,d.set(ue,ae));let _e=ae.get(L);_e===void 0&&(_e=t.getUniformBlockIndex(ue,L.name),ae.set(L,_e))}function Ne(L,ue){const _e=d.get(ue).get(L);c.get(ue)!==_e&&(t.uniformBlockBinding(ue,_e,L.__bindingPointIndex),c.set(ue,_e))}function Pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},B=null,H={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,y=null,E=null,A=null,T=null,D=null,M=!1,w=null,I=null,$=null,K=null,b=null,le.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ee,disable:Ae,bindFramebuffer:je,drawBuffers:Le,useProgram:ye,setBlending:Y,setMaterial:Z,setFlipSided:J,setCullFace:we,setLineWidth:ge,setPolygonOffset:Me,setScissorTest:Oe,activeTexture:qe,bindTexture:dt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Ue,texImage3D:$e,updateUBOMapping:ze,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:me,texSubImage2D:ie,texSubImage3D:ee,compressedTexSubImage2D:re,compressedTexSubImage3D:Te,scissor:se,viewport:Je,reset:Pe}}function Dw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return f?new OffscreenCanvas(C,S):yl("canvas")}function g(C,S,G,ie){let ee=1;if((C.width>ie||C.height>ie)&&(ee=ie/Math.max(C.width,C.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const re=S?ef:Math.floor,Te=re(ee*C.width),oe=re(ee*C.height);x===void 0&&(x=_(Te,oe));const me=G?_(Te,oe):x;return me.width=Te,me.height=oe,me.getContext("2d").drawImage(C,0,0,Te,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Te+"x"+oe+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return fp(C.width)&&fp(C.height)}function E(C){return a?!1:C.wrapS!==In||C.wrapT!==In||C.minFilter!==jt&&C.minFilter!==Sn}function A(C,S){return C.generateMipmaps&&S&&C.minFilter!==jt&&C.minFilter!==Sn}function T(C){t.generateMipmap(C)}function D(C,S,G,ie,ee=!1){if(a===!1)return S;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=S;if(S===t.RED&&(G===t.FLOAT&&(re=t.R32F),G===t.HALF_FLOAT&&(re=t.R16F),G===t.UNSIGNED_BYTE&&(re=t.R8)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(re=t.R8UI),G===t.UNSIGNED_SHORT&&(re=t.R16UI),G===t.UNSIGNED_INT&&(re=t.R32UI),G===t.BYTE&&(re=t.R8I),G===t.SHORT&&(re=t.R16I),G===t.INT&&(re=t.R32I)),S===t.RG&&(G===t.FLOAT&&(re=t.RG32F),G===t.HALF_FLOAT&&(re=t.RG16F),G===t.UNSIGNED_BYTE&&(re=t.RG8)),S===t.RGBA){const Te=ee?gl:Qe.getTransfer(ie);G===t.FLOAT&&(re=t.RGBA32F),G===t.HALF_FLOAT&&(re=t.RGBA16F),G===t.UNSIGNED_BYTE&&(re=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function M(C,S,G){return A(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){return C===jt||C===Oh||C===xu?t.NEAREST:t.LINEAR}function I(C){const S=C.target;S.removeEventListener("dispose",I),K(S),S.isVideoTexture&&v.delete(S)}function $(C){const S=C.target;S.removeEventListener("dispose",$),V(S)}function K(C){const S=i.get(C);if(S.__webglInit===void 0)return;const G=C.source,ie=m.get(G);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(C),Object.keys(ie).length===0&&m.delete(G)}i.remove(C)}function b(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const G=C.source,ie=m.get(G);delete ie[S.__cacheKey],o.memory.textures--}function V(C){const S=C.texture,G=i.get(C),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(G.__webglFramebuffer[ee]))for(let re=0;re<G.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(G.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(G.__webglFramebuffer[ee]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ee])}else{if(Array.isArray(G.__webglFramebuffer))for(let ee=0;ee<G.__webglFramebuffer.length;ee++)t.deleteFramebuffer(G.__webglFramebuffer[ee]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,re=S.length;ee<re;ee++){const Te=i.get(S[ee]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(C)}let W=0;function q(){W=0}function F(){const C=W;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),W+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function H(C,S){const G=i.get(C);if(C.isVideoTexture&&qe(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(G,C,S);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function U(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){je(G,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function z(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){je(G,C,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function le(C,S){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Le(G,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const ce={[Kc]:t.REPEAT,[In]:t.CLAMP_TO_EDGE,[Zc]:t.MIRRORED_REPEAT},he={[jt]:t.NEAREST,[Oh]:t.NEAREST_MIPMAP_NEAREST,[xu]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[py]:t.LINEAR_MIPMAP_NEAREST,[Ro]:t.LINEAR_MIPMAP_LINEAR},Se={[Cy]:t.NEVER,[Iy]:t.ALWAYS,[Py]:t.LESS,[by]:t.LEQUAL,[Ly]:t.EQUAL,[Ny]:t.GEQUAL,[Dy]:t.GREATER,[Uy]:t.NOTEQUAL};function Ee(C,S,G){if(G?(t.texParameteri(C,t.TEXTURE_WRAP_S,ce[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ce[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ce[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,he[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,he[S.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==In||S.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==jt&&S.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===jt||S.minFilter!==xu&&S.minFilter!==Ro||S.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Co&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(C,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Ae(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I));const ie=S.source;let ee=m.get(ie);ee===void 0&&(ee={},m.set(ie,ee));const re=B(S);if(re!==C.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[re].usedTimes++;const Te=ee[C.__cacheKey];Te!==void 0&&(ee[C.__cacheKey].usedTimes--,Te.usedTimes===0&&b(S)),C.__cacheKey=re,C.__webglTexture=ee[re].texture}return G}function je(C,S,G){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=Ae(C,S),re=S.source;n.bindTexture(ie,C.__webglTexture,t.TEXTURE0+G);const Te=i.get(re);if(re.version!==Te.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const oe=Qe.getPrimaries(Qe.workingColorSpace),me=S.colorSpace===Mn?null:Qe.getPrimaries(S.colorSpace),Ue=S.colorSpace===Mn||oe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const $e=E(S)&&y(S.image)===!1;let se=g(S.image,$e,!1,c);se=dt(S,se);const Je=y(se)||a,ze=s.convert(S.format,S.colorSpace);let Ne=s.convert(S.type),Pe=D(S.internalFormat,ze,Ne,S.colorSpace,S.isVideoTexture);Ee(ie,S,Je);let L;const ue=S.mipmaps,ae=a&&S.isVideoTexture!==!0,_e=Te.__version===void 0||ee===!0,pe=M(S,se,Je);if(S.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?S.type===Li?Pe=t.DEPTH_COMPONENT32F:S.type===Pi?Pe=t.DEPTH_COMPONENT24:S.type===dr?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:S.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===hr&&Pe===t.DEPTH_COMPONENT&&S.type!==sd&&S.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Pi,Ne=s.convert(S.type)),S.format===Ms&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,S.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=dr,Ne=s.convert(S.type))),_e&&(ae?n.texStorage2D(t.TEXTURE_2D,1,Pe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,ze,Ne,null));else if(S.isDataTexture)if(ue.length>0&&Je){ae&&_e&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,ue[0].width,ue[0].height);for(let Q=0,Re=ue.length;Q<Re;Q++)L=ue[Q],ae?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,L.width,L.height,ze,Ne,L.data):n.texImage2D(t.TEXTURE_2D,Q,Pe,L.width,L.height,0,ze,Ne,L.data);S.generateMipmaps=!1}else ae?(_e&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ze,Ne,se.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,ze,Ne,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Pe,ue[0].width,ue[0].height,se.depth);for(let Q=0,Re=ue.length;Q<Re;Q++)L=ue[Q],S.format!==Fn?ze!==null?ae?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,L.width,L.height,se.depth,ze,L.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Pe,L.width,L.height,se.depth,0,L.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,L.width,L.height,se.depth,ze,Ne,L.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Pe,L.width,L.height,se.depth,0,ze,Ne,L.data)}else{ae&&_e&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,ue[0].width,ue[0].height);for(let Q=0,Re=ue.length;Q<Re;Q++)L=ue[Q],S.format!==Fn?ze!==null?ae?n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,L.width,L.height,ze,L.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Pe,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,L.width,L.height,ze,Ne,L.data):n.texImage2D(t.TEXTURE_2D,Q,Pe,L.width,L.height,0,ze,Ne,L.data)}else if(S.isDataArrayTexture)ae?(_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Pe,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ze,Ne,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,ze,Ne,se.data);else if(S.isData3DTexture)ae?(_e&&n.texStorage3D(t.TEXTURE_3D,pe,Pe,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ze,Ne,se.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,ze,Ne,se.data);else if(S.isFramebufferTexture){if(_e)if(ae)n.texStorage2D(t.TEXTURE_2D,pe,Pe,se.width,se.height);else{let Q=se.width,Re=se.height;for(let ke=0;ke<pe;ke++)n.texImage2D(t.TEXTURE_2D,ke,Pe,Q,Re,0,ze,Ne,null),Q>>=1,Re>>=1}}else if(ue.length>0&&Je){ae&&_e&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,ue[0].width,ue[0].height);for(let Q=0,Re=ue.length;Q<Re;Q++)L=ue[Q],ae?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ze,Ne,L):n.texImage2D(t.TEXTURE_2D,Q,Pe,ze,Ne,L);S.generateMipmaps=!1}else ae?(_e&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ze,Ne,se)):n.texImage2D(t.TEXTURE_2D,0,Pe,ze,Ne,se);A(S,Je)&&T(ie),Te.__version=re.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Le(C,S,G){if(S.image.length!==6)return;const ie=Ae(C,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+G);const Te=Qe.getPrimaries(Qe.workingColorSpace),oe=S.colorSpace===Mn?null:Qe.getPrimaries(S.colorSpace),me=S.colorSpace===Mn||Te===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,$e=S.image[0]&&S.image[0].isDataTexture,se=[];for(let Q=0;Q<6;Q++)!Ue&&!$e?se[Q]=g(S.image[Q],!1,!0,u):se[Q]=$e?S.image[Q].image:S.image[Q],se[Q]=dt(S,se[Q]);const Je=se[0],ze=y(Je)||a,Ne=s.convert(S.format,S.colorSpace),Pe=s.convert(S.type),L=D(S.internalFormat,Ne,Pe,S.colorSpace),ue=a&&S.isVideoTexture!==!0,ae=re.__version===void 0||ie===!0;let _e=M(S,Je,ze);Ee(t.TEXTURE_CUBE_MAP,S,ze);let pe;if(Ue){ue&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,L,Je.width,Je.height);for(let Q=0;Q<6;Q++){pe=se[Q].mipmaps;for(let Re=0;Re<pe.length;Re++){const ke=pe[Re];S.format!==Fn?Ne!==null?ue?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,ke.width,ke.height,Ne,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,L,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,ke.width,ke.height,Ne,Pe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,L,ke.width,ke.height,0,Ne,Pe,ke.data)}}}else{pe=S.mipmaps,ue&&ae&&(pe.length>0&&_e++,n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,L,se[0].width,se[0].height));for(let Q=0;Q<6;Q++)if($e){ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,se[Q].width,se[Q].height,Ne,Pe,se[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,L,se[Q].width,se[Q].height,0,Ne,Pe,se[Q].data);for(let Re=0;Re<pe.length;Re++){const Ht=pe[Re].image[Q].image;ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Ht.width,Ht.height,Ne,Pe,Ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,L,Ht.width,Ht.height,0,Ne,Pe,Ht.data)}}else{ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ne,Pe,se[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,L,Ne,Pe,se[Q]);for(let Re=0;Re<pe.length;Re++){const ke=pe[Re];ue?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Ne,Pe,ke.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,L,Ne,Pe,ke.image[Q])}}}A(S,ze)&&T(t.TEXTURE_CUBE_MAP),re.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ye(C,S,G,ie,ee,re){const Te=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),me=D(G.internalFormat,Te,oe,G.colorSpace);if(!i.get(S).__hasExternalTextures){const $e=Math.max(1,S.width>>re),se=Math.max(1,S.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,me,$e,se,S.depth,0,Te,oe,null):n.texImage2D(ee,re,me,$e,se,0,Te,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Oe(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(G).__webglTexture,0,Me(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(G).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function P(C,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||Oe(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Li?ie=t.DEPTH_COMPONENT32F:ee.type===Pi&&(ie=t.DEPTH_COMPONENT24));const re=Me(S);Oe(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Me(S);G&&Oe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):Oe(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],Te=s.convert(re.format,re.colorSpace),oe=s.convert(re.type),me=D(re.internalFormat,Te,oe,re.colorSpace),Ue=Me(S);G&&Oe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,me,S.width,S.height):Oe(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ne(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,ee=Me(S);if(S.depthTexture.format===hr)Oe(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===Ms)Oe(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Y(C){const S=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ne(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),P(S.__webglDepthbuffer[ie],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),P(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Z(C,S,G){const ie=i.get(C);S!==void 0&&ye(ie.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Y(C)}function J(C){const S=C.texture,G=i.get(C),ie=i.get(S);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,Te=y(C)||a;if(ee){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let me=0;me<S.mipmaps.length;me++)G.__webglFramebuffer[oe][me]=t.createFramebuffer()}else G.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)G.__webglFramebuffer[oe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const oe=C.texture;for(let me=0,Ue=oe.length;me<Ue;me++){const $e=i.get(oe[me]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Oe(C)===!1){const oe=re?S:[S];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){const Ue=oe[me];G.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const $e=s.convert(Ue.format,Ue.colorSpace),se=s.convert(Ue.type),Je=D(Ue.internalFormat,$e,se,Ue.colorSpace,C.isXRRenderTarget===!0),ze=Me(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Je,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,G.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),P(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,S,Te);for(let oe=0;oe<6;oe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)ye(G.__webglFramebuffer[oe][me],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else ye(G.__webglFramebuffer[oe],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);A(S,Te)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const oe=C.texture;for(let me=0,Ue=oe.length;me<Ue;me++){const $e=oe[me],se=i.get($e);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Ee(t.TEXTURE_2D,$e,Te),ye(G.__webglFramebuffer,C,$e,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),A($e,Te)&&T(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,ie.__webglTexture),Ee(oe,S,Te),a&&S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)ye(G.__webglFramebuffer[me],C,S,t.COLOR_ATTACHMENT0,oe,me);else ye(G.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,oe,0);A(S,Te)&&T(oe),n.unbindTexture()}C.depthBuffer&&Y(C)}function we(C){const S=y(C)||a,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ie=0,ee=G.length;ie<ee;ie++){const re=G[ie];if(A(re,S)){const Te=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(re).__webglTexture;n.bindTexture(Te,oe),T(Te),n.unbindTexture()}}}function ge(C){if(a&&C.samples>0&&Oe(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,ie=C.height;let ee=t.COLOR_BUFFER_BIT;const re=[],Te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(C),me=C.isWebGLMultipleRenderTargets===!0;if(me)for(let Ue=0;Ue<S.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ue=0;Ue<S.length;Ue++){re.push(t.COLOR_ATTACHMENT0+Ue),C.depthBuffer&&re.push(Te);const $e=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if($e===!1&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Ue]),$e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Te])),me){const se=i.get(S[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,G,ie,0,0,G,ie,ee,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ue=0;Ue<S.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Ue]);const $e=i.get(S[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Me(C){return Math.min(d,C.samples)}function Oe(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qe(C){const S=o.render.frame;v.get(C)!==S&&(v.set(C,S),C.update())}function dt(C,S){const G=C.colorSpace,ie=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Jc||G!==mi&&G!==Mn&&(Qe.getTransfer(G)===rt?a===!1?e.has("EXT_sRGB")===!0&&ie===Fn?(C.format=Jc,C.minFilter=Sn,C.generateMipmaps=!1):S=Nv.sRGBToLinear(S):(ie!==Fn||ee!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=F,this.resetTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=le,this.rebindTextures=Z,this.setupRenderTarget=J,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Oe}function Uw(t,e,n){const i=n.isWebGL2;function r(s,o=Mn){let a;const l=Qe.getTransfer(o);if(s===Hi)return t.UNSIGNED_BYTE;if(s===Av)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Rv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===my)return t.BYTE;if(s===gy)return t.SHORT;if(s===sd)return t.UNSIGNED_SHORT;if(s===wv)return t.INT;if(s===Pi)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===Co)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===vy)return t.ALPHA;if(s===Fn)return t.RGBA;if(s===_y)return t.LUMINANCE;if(s===xy)return t.LUMINANCE_ALPHA;if(s===hr)return t.DEPTH_COMPONENT;if(s===Ms)return t.DEPTH_STENCIL;if(s===Jc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===yy)return t.RED;if(s===Cv)return t.RED_INTEGER;if(s===Sy)return t.RG;if(s===Pv)return t.RG_INTEGER;if(s===Lv)return t.RGBA_INTEGER;if(s===yu||s===Su||s===Mu||s===Eu)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===yu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===yu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zh||s===kh||s===Bh||s===Hh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===My)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gh||s===Vh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Gh)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wh||s===Xh||s===jh||s===qh||s===Yh||s===$h||s===Kh||s===Zh||s===Jh||s===Qh||s===ep||s===tp||s===np||s===ip)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$h)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ep)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tp)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===np)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ip)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tu||s===rp||s===sp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Tu)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ey||s===op||s===ap||s===lp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Tu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===op)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===dr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Nw extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ur extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iw={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(u,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ur;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Fw extends hn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:hr,c!==hr&&c!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===hr&&(i=Pi),i===void 0&&c===Ms&&(i=dr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ow extends Rs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,v=null;const x=n.getContextAttributes();let m=null,f=null;const _=[],g=[],y=new cn;y.layers.enable(1),y.viewport=new at;const E=new cn;E.layers.enable(2),E.viewport=new at;const A=[y,E],T=new Nw;T.layers.enable(1),T.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let z=_[U];return z===void 0&&(z=new Yu,_[U]=z),z.getTargetRaySpace()},this.getControllerGrip=function(U){let z=_[U];return z===void 0&&(z=new Yu,_[U]=z),z.getGripSpace()},this.getHand=function(U){let z=_[U];return z===void 0&&(z=new Yu,_[U]=z),z.getHandSpace()};function w(U){const z=g.indexOf(U.inputSource);if(z===-1)return;const le=_[z];le!==void 0&&(le.update(U.inputSource,U.frame,u||o),le.dispatchEvent({type:U.type,data:U.inputSource}))}function I(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",$);for(let U=0;U<_.length;U++){const z=g[U];z!==null&&(g[U]=null,_[U].disconnect(z))}D=null,M=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",I),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,z),r.updateRenderState({baseLayer:p}),f=new yr(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let z=null,le=null,ce=null;x.depth&&(ce=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,z=x.stencil?Ms:hr,le=x.stencil?dr:Pi);const he={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(he),r.updateRenderState({layers:[h]}),f=new yr(h.textureWidth,h.textureHeight,{format:Fn,type:Hi,depthTexture:new Fw(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Se=e.properties.get(f);Se.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(U){for(let z=0;z<U.removed.length;z++){const le=U.removed[z],ce=g.indexOf(le);ce>=0&&(g[ce]=null,_[ce].disconnect(le))}for(let z=0;z<U.added.length;z++){const le=U.added[z];let ce=g.indexOf(le);if(ce===-1){for(let Se=0;Se<_.length;Se++)if(Se>=g.length){g.push(le),ce=Se;break}else if(g[Se]===null){g[Se]=le,ce=Se;break}if(ce===-1)break}const he=_[ce];he&&he.connect(le)}}const K=new N,b=new N;function V(U,z,le){K.setFromMatrixPosition(z.matrixWorld),b.setFromMatrixPosition(le.matrixWorld);const ce=K.distanceTo(b),he=z.projectionMatrix.elements,Se=le.projectionMatrix.elements,Ee=he[14]/(he[10]-1),Ae=he[14]/(he[10]+1),je=(he[9]+1)/he[5],Le=(he[9]-1)/he[5],ye=(he[8]-1)/he[0],P=(Se[8]+1)/Se[0],ne=Ee*ye,Y=Ee*P,Z=ce/(-ye+P),J=Z*-ye;z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(J),U.translateZ(Z),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const we=Ee+Z,ge=Ae+Z,Me=ne-J,Oe=Y+(ce-J),qe=je*Ae/ge*we,dt=Le*Ae/ge*we;U.projectionMatrix.makePerspective(Me,Oe,qe,dt,we,ge),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function W(U,z){z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;T.near=E.near=y.near=U.near,T.far=E.far=y.far=U.far,(D!==T.near||M!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,M=T.far);const z=U.parent,le=T.cameras;W(T,z);for(let ce=0;ce<le.length;ce++)W(le[ce],z);le.length===2?V(T,y,E):T.projectionMatrix.copy(y.projectionMatrix),q(U,T,z)};function q(U,z,le){le===null?U.matrix.copy(z.matrixWorld):(U.matrix.copy(le.matrixWorld),U.matrix.invert(),U.matrix.multiply(z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(z.projectionMatrix),U.projectionMatrixInverse.copy(z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Qc*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)};let F=null;function B(U,z){if(c=z.getViewerPose(u||o),v=z,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ce=!1;le.length!==T.cameras.length&&(T.cameras.length=0,ce=!0);for(let he=0;he<le.length;he++){const Se=le[he];let Ee=null;if(p!==null)Ee=p.getViewport(Se);else{const je=d.getViewSubImage(h,Se);Ee=je.viewport,he===0&&(e.setRenderTargetTextures(f,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(f))}let Ae=A[he];Ae===void 0&&(Ae=new cn,Ae.layers.enable(he),Ae.viewport=new at,A[he]=Ae),Ae.matrix.fromArray(Se.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Se.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),he===0&&(T.matrix.copy(Ae.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ce===!0&&T.cameras.push(Ae)}}for(let le=0;le<_.length;le++){const ce=g[le],he=_[le];ce!==null&&he!==void 0&&he.update(ce,z,u||o)}F&&F(U,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),v=null}const H=new Vv;H.setAnimationLoop(B),this.setAnimationLoop=function(U){F=U},this.dispose=function(){}}}function zw(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Bv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function u(_,g){let y=r[_.id];y===void 0&&(v(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(_,E);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function c(_){const g=d();_.__bindingPointIndex=g;const y=t.createBuffer(),E=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],y=_.uniforms,E=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=y.length;A<T;A++){const D=y[A];if(p(D,A,E)===!0){const M=D.__offset,w=Array.isArray(D.value)?D.value:[D.value];let I=0;for(let $=0;$<w.length;$++){const K=w[$],b=x(K);typeof K=="number"?(D.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,M+I,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=K.elements[0],D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=K.elements[0],D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=K.elements[0]):(K.toArray(D.__data,I),I+=b.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,y){const E=_.value;if(y[g]===void 0){if(typeof E=="number")y[g]=E;else{const A=Array.isArray(E)?E:[E],T=[];for(let D=0;D<A.length;D++)T.push(A[D].clone());y[g]=T}return!0}else if(typeof E=="number"){if(y[g]!==E)return y[g]=E,!0}else{const A=Array.isArray(y[g])?y[g]:[y[g]],T=Array.isArray(E)?E:[E];for(let D=0;D<A.length;D++){const M=A[D];if(M.equals(T[D])===!1)return M.copy(T[D]),!0}}return!1}function v(_){const g=_.uniforms;let y=0;const E=16;let A=0;for(let T=0,D=g.length;T<D;T++){const M=g[T],w={boundary:0,storage:0},I=Array.isArray(M.value)?M.value:[M.value];for(let $=0,K=I.length;$<K;$++){const b=I[$],V=x(b);w.boundary+=V.boundary,w.storage+=V.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,T>0){A=y%E;const $=E-A;A!==0&&$-w.boundary<0&&(y+=E-A,M.__offset=y)}y+=w.storage}return A=y%E,A>0&&(y+=E-A),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class Yv{constructor(e={}){const{canvas:n=Oy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const g=this;let y=!1,E=0,A=0,T=null,D=-1,M=null;const w=new at,I=new at;let $=null;const K=new Ke(0);let b=0,V=n.width,W=n.height,q=1,F=null,B=null;const H=new at(0,0,V,W),U=new at(0,0,V,W);let z=!1;const le=new ud;let ce=!1,he=!1,Se=null;const Ee=new mt,Ae=new de,je=new N,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return T===null?q:1}let P=i;function ne(R,O){for(let X=0;X<R.length;X++){const k=R[X],j=n.getContext(k,O);if(j!==null)return j}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rd}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",_e,!1),P===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),P=ne(O,R),P===null)throw ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Y,Z,J,we,ge,Me,Oe,qe,dt,C,S,G,ie,ee,re,Te,oe,me,Ue,$e,se,Je,ze,Ne;function Pe(){Y=new KE(P),Z=new VE(P,Y,e),Y.init(Z),Je=new Uw(P,Y,Z),J=new bw(P,Y,Z),we=new QE(P),ge=new vw,Me=new Dw(P,Y,J,ge,Z,Je,we),Oe=new XE(g),qe=new $E(g),dt=new lS(P,Z),ze=new HE(P,Y,dt,Z),C=new ZE(P,dt,we,ze),S=new iT(P,C,dt,we),Ue=new nT(P,Z,Me),Te=new WE(ge),G=new gw(g,Oe,qe,Y,Z,ze,Te),ie=new zw(g,ge),ee=new xw,re=new ww(Y,Z),me=new BE(g,Oe,qe,J,S,h,l),oe=new Lw(g,S,Z),Ne=new kw(P,we,Z,J),$e=new GE(P,Y,we,Z),se=new JE(P,Y,we,Z),we.programs=G.programs,g.capabilities=Z,g.extensions=Y,g.properties=ge,g.renderLists=ee,g.shadowMap=oe,g.state=J,g.info=we}Pe();const L=new Ow(g,P);this.xr=L,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=Y.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Y.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(V,W,!1))},this.getSize=function(R){return R.set(V,W)},this.setSize=function(R,O,X=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,W=O,n.width=Math.floor(R*q),n.height=Math.floor(O*q),X===!0&&(n.style.width=R+"px",n.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(V*q,W*q).floor()},this.setDrawingBufferSize=function(R,O,X){V=R,W=O,q=X,n.width=Math.floor(R*X),n.height=Math.floor(O*X),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,O,X,k){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,O,X,k),J.viewport(w.copy(H).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(U)},this.setScissor=function(R,O,X,k){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,O,X,k),J.scissor(I.copy(U).multiplyScalar(q).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(R){J.setScissorTest(z=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){B=R},this.getClearColor=function(R){return R.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(R=!0,O=!0,X=!0){let k=0;if(R){let j=!1;if(T!==null){const xe=T.texture.format;j=xe===Lv||xe===Pv||xe===Cv}if(j){const xe=T.texture.type,Ce=xe===Hi||xe===Pi||xe===sd||xe===dr||xe===Av||xe===Rv,Ie=me.getClearColor(),Fe=me.getClearAlpha(),Ve=Ie.r,De=Ie.g,Be=Ie.b;Ce?(p[0]=Ve,p[1]=De,p[2]=Be,p[3]=Fe,P.clearBufferuiv(P.COLOR,0,p)):(v[0]=Ve,v[1]=De,v[2]=Be,v[3]=Fe,P.clearBufferiv(P.COLOR,0,v))}else k|=P.COLOR_BUFFER_BIT}O&&(k|=P.DEPTH_BUFFER_BIT),X&&(k|=P.STENCIL_BUFFER_BIT),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),ee.dispose(),re.dispose(),ge.dispose(),Oe.dispose(),qe.dispose(),S.dispose(),ze.dispose(),Ne.dispose(),G.dispose(),L.dispose(),L.removeEventListener("sessionstart",nt),L.removeEventListener("sessionend",Hn),Se&&(Se.dispose(),Se=null),Gt.stop()};function ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=we.autoReset,O=oe.enabled,X=oe.autoUpdate,k=oe.needsUpdate,j=oe.type;Pe(),we.autoReset=R,oe.enabled=O,oe.autoUpdate=X,oe.needsUpdate=k,oe.type=j}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const O=R.target;O.removeEventListener("dispose",pe),Q(O)}function Q(R){Re(R),ge.remove(R)}function Re(R){const O=ge.get(R).programs;O!==void 0&&(O.forEach(function(X){G.releaseProgram(X)}),R.isShaderMaterial&&G.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,X,k,j,xe){O===null&&(O=Le);const Ce=j.isMesh&&j.matrixWorld.determinant()<0,Ie=s_(R,O,X,k,j);J.setMaterial(k,Ce);let Fe=X.index,Ve=1;if(k.wireframe===!0){if(Fe=C.getWireframeAttribute(X),Fe===void 0)return;Ve=2}const De=X.drawRange,Be=X.attributes.position;let ht=De.start*Ve,gt=(De.start+De.count)*Ve;xe!==null&&(ht=Math.max(ht,xe.start*Ve),gt=Math.min(gt,(xe.start+xe.count)*Ve)),Fe!==null?(ht=Math.max(ht,0),gt=Math.min(gt,Fe.count)):Be!=null&&(ht=Math.max(ht,0),gt=Math.min(gt,Be.count));const vn=gt-ht;if(vn<0||vn===1/0)return;ze.setup(j,k,Ie,X,Fe);let Kn,_t=$e;if(Fe!==null&&(Kn=dt.get(Fe),_t=se,_t.setIndex(Kn)),j.isMesh)k.wireframe===!0?(J.setLineWidth(k.wireframeLinewidth*ye()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(j.isLine){let Xe=k.linewidth;Xe===void 0&&(Xe=1),J.setLineWidth(Xe*ye()),j.isLineSegments?_t.setMode(P.LINES):j.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else j.isPoints?_t.setMode(P.POINTS):j.isSprite&&_t.setMode(P.TRIANGLES);if(j.isInstancedMesh)_t.renderInstances(ht,vn,j.count);else if(X.isInstancedBufferGeometry){const Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Vl=Math.min(X.instanceCount,Xe);_t.renderInstances(ht,vn,Vl)}else _t.render(ht,vn)},this.compile=function(R,O){function X(k,j,xe){k.transparent===!0&&k.side===jn&&k.forceSinglePass===!1?(k.side=kt,k.needsUpdate=!0,Ho(k,j,xe),k.side=Wi,k.needsUpdate=!0,Ho(k,j,xe),k.side=jn):Ho(k,j,xe)}m=re.get(R),m.init(),_.push(m),R.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(g._useLegacyLights),R.traverse(function(k){const j=k.material;if(j)if(Array.isArray(j))for(let xe=0;xe<j.length;xe++){const Ce=j[xe];X(Ce,R,k)}else X(j,R,k)}),_.pop(),m=null};let ke=null;function Ht(R){ke&&ke(R)}function nt(){Gt.stop()}function Hn(){Gt.start()}const Gt=new Vv;Gt.setAnimationLoop(Ht),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(R){ke=R,L.setAnimationLoop(R),R===null?Gt.stop():Gt.start()},L.addEventListener("sessionstart",nt),L.addEventListener("sessionend",Hn),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(O),O=L.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,O,T),m=re.get(R,_.length),m.init(),_.push(m),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),le.setFromProjectionMatrix(Ee),he=this.localClippingEnabled,ce=Te.init(this.clippingPlanes,he),x=ee.get(R,f.length),x.init(),f.push(x),vd(R,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(F,B),this.info.render.frame++,ce===!0&&Te.beginShadows();const X=m.state.shadowsArray;if(oe.render(X,R,O),ce===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(x,R),m.setupLights(g._useLegacyLights),O.isArrayCamera){const k=O.cameras;for(let j=0,xe=k.length;j<xe;j++){const Ce=k[j];_d(x,R,Ce,Ce.viewport)}}else _d(x,R,O);T!==null&&(Me.updateMultisampleRenderTarget(T),Me.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(g,R,O),ze.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function vd(R,O,X,k){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||le.intersectsSprite(R)){k&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const Ce=S.update(R),Ie=R.material;Ie.visible&&x.push(R,Ce,Ie,X,je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||le.intersectsObject(R))){const Ce=S.update(R),Ie=R.material;if(k&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),je.copy(Ce.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ie)){const Fe=Ce.groups;for(let Ve=0,De=Fe.length;Ve<De;Ve++){const Be=Fe[Ve],ht=Ie[Be.materialIndex];ht&&ht.visible&&x.push(R,Ce,ht,X,je.z,Be)}}else Ie.visible&&x.push(R,Ce,Ie,X,je.z,null)}}const xe=R.children;for(let Ce=0,Ie=xe.length;Ce<Ie;Ce++)vd(xe[Ce],O,X,k)}function _d(R,O,X,k){const j=R.opaque,xe=R.transmissive,Ce=R.transparent;m.setupLightsView(X),ce===!0&&Te.setGlobalState(g.clippingPlanes,X),xe.length>0&&r_(j,xe,O,X),k&&J.viewport(w.copy(k)),j.length>0&&Bo(j,O,X),xe.length>0&&Bo(xe,O,X),Ce.length>0&&Bo(Ce,O,X),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function r_(R,O,X,k){const j=Z.isWebGL2;Se===null&&(Se=new yr(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?Co:Hi,minFilter:Ro,samples:j?4:0})),g.getDrawingBufferSize(Ae),j?Se.setSize(Ae.x,Ae.y):Se.setSize(ef(Ae.x),ef(Ae.y));const xe=g.getRenderTarget();g.setRenderTarget(Se),g.getClearColor(K),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const Ce=g.toneMapping;g.toneMapping=Bi,Bo(R,X,k),Me.updateMultisampleRenderTarget(Se),Me.updateRenderTargetMipmap(Se);let Ie=!1;for(let Fe=0,Ve=O.length;Fe<Ve;Fe++){const De=O[Fe],Be=De.object,ht=De.geometry,gt=De.material,vn=De.group;if(gt.side===jn&&Be.layers.test(k.layers)){const Kn=gt.side;gt.side=kt,gt.needsUpdate=!0,xd(Be,X,k,ht,gt,vn),gt.side=Kn,gt.needsUpdate=!0,Ie=!0}}Ie===!0&&(Me.updateMultisampleRenderTarget(Se),Me.updateRenderTargetMipmap(Se)),g.setRenderTarget(xe),g.setClearColor(K,b),g.toneMapping=Ce}function Bo(R,O,X){const k=O.isScene===!0?O.overrideMaterial:null;for(let j=0,xe=R.length;j<xe;j++){const Ce=R[j],Ie=Ce.object,Fe=Ce.geometry,Ve=k===null?Ce.material:k,De=Ce.group;Ie.layers.test(X.layers)&&xd(Ie,O,X,Fe,Ve,De)}}function xd(R,O,X,k,j,xe){R.onBeforeRender(g,O,X,k,j,xe),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(g,O,X,k,R,xe),j.transparent===!0&&j.side===jn&&j.forceSinglePass===!1?(j.side=kt,j.needsUpdate=!0,g.renderBufferDirect(X,O,k,j,R,xe),j.side=Wi,j.needsUpdate=!0,g.renderBufferDirect(X,O,k,j,R,xe),j.side=jn):g.renderBufferDirect(X,O,k,j,R,xe),R.onAfterRender(g,O,X,k,j,xe)}function Ho(R,O,X){O.isScene!==!0&&(O=Le);const k=ge.get(R),j=m.state.lights,xe=m.state.shadowsArray,Ce=j.state.version,Ie=G.getParameters(R,j.state,xe,O,X),Fe=G.getProgramCacheKey(Ie);let Ve=k.programs;k.environment=R.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(R.isMeshStandardMaterial?qe:Oe).get(R.envMap||k.environment),Ve===void 0&&(R.addEventListener("dispose",pe),Ve=new Map,k.programs=Ve);let De=Ve.get(Fe);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===Ce)return yd(R,Ie),De}else Ie.uniforms=G.getUniforms(R),R.onBuild(X,Ie,g),R.onBeforeCompile(Ie,g),De=G.acquireProgram(Ie,Fe),Ve.set(Fe,De),k.uniforms=Ie.uniforms;const Be=k.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Be.clippingPlanes=Te.uniform),yd(R,Ie),k.needsLights=a_(R),k.lightsStateVersion=Ce,k.needsLights&&(Be.ambientLightColor.value=j.state.ambient,Be.lightProbe.value=j.state.probe,Be.directionalLights.value=j.state.directional,Be.directionalLightShadows.value=j.state.directionalShadow,Be.spotLights.value=j.state.spot,Be.spotLightShadows.value=j.state.spotShadow,Be.rectAreaLights.value=j.state.rectArea,Be.ltc_1.value=j.state.rectAreaLTC1,Be.ltc_2.value=j.state.rectAreaLTC2,Be.pointLights.value=j.state.point,Be.pointLightShadows.value=j.state.pointShadow,Be.hemisphereLights.value=j.state.hemi,Be.directionalShadowMap.value=j.state.directionalShadowMap,Be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Be.spotShadowMap.value=j.state.spotShadowMap,Be.spotLightMatrix.value=j.state.spotLightMatrix,Be.spotLightMap.value=j.state.spotLightMap,Be.pointShadowMap.value=j.state.pointShadowMap,Be.pointShadowMatrix.value=j.state.pointShadowMatrix);const ht=De.getUniforms(),gt=Va.seqWithValue(ht.seq,Be);return k.currentProgram=De,k.uniformsList=gt,De}function yd(R,O){const X=ge.get(R);X.outputColorSpace=O.outputColorSpace,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function s_(R,O,X,k,j){O.isScene!==!0&&(O=Le),Me.resetTextureUnits();const xe=O.fog,Ce=k.isMeshStandardMaterial?O.environment:null,Ie=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:mi,Fe=(k.isMeshStandardMaterial?qe:Oe).get(k.envMap||Ce),Ve=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,De=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Be=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,gt=!!X.morphAttributes.color;let vn=Bi;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vn=g.toneMapping);const Kn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=Kn!==void 0?Kn.length:0,Xe=ge.get(k),Vl=m.state.lights;if(ce===!0&&(he===!0||R!==M)){const on=R===M&&k.id===D;Te.setState(k,R,on)}let xt=!1;k.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Vl.state.version||Xe.outputColorSpace!==Ie||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||Xe.envMap!==Fe||k.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Te.numPlanes||Xe.numIntersection!==Te.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==De||Xe.morphTargets!==Be||Xe.morphNormals!==ht||Xe.morphColors!==gt||Xe.toneMapping!==vn||Z.isWebGL2===!0&&Xe.morphTargetsCount!==_t)&&(xt=!0):(xt=!0,Xe.__version=k.version);let Yi=Xe.currentProgram;xt===!0&&(Yi=Ho(k,O,j));let Sd=!1,bs=!1,Wl=!1;const Vt=Yi.getUniforms(),$i=Xe.uniforms;if(J.useProgram(Yi.program)&&(Sd=!0,bs=!0,Wl=!0),k.id!==D&&(D=k.id,bs=!0),Sd||M!==R){Vt.setValue(P,"projectionMatrix",R.projectionMatrix),Vt.setValue(P,"viewMatrix",R.matrixWorldInverse);const on=Vt.map.cameraPosition;on!==void 0&&on.setValue(P,je.setFromMatrixPosition(R.matrixWorld)),Z.logarithmicDepthBuffer&&Vt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Vt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,bs=!0,Wl=!0)}if(j.isSkinnedMesh){Vt.setOptional(P,j,"bindMatrix"),Vt.setOptional(P,j,"bindMatrixInverse");const on=j.skeleton;on&&(Z.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Vt.setValue(P,"boneTexture",on.boneTexture,Me),Vt.setValue(P,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xl=X.morphAttributes;if((Xl.position!==void 0||Xl.normal!==void 0||Xl.color!==void 0&&Z.isWebGL2===!0)&&Ue.update(j,X,Yi),(bs||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,Vt.setValue(P,"receiveShadow",j.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&($i.envMap.value=Fe,$i.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),bs&&(Vt.setValue(P,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&o_($i,Wl),xe&&k.fog===!0&&ie.refreshFogUniforms($i,xe),ie.refreshMaterialUniforms($i,k,q,W,Se),Va.upload(P,Xe.uniformsList,$i,Me)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Va.upload(P,Xe.uniformsList,$i,Me),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Vt.setValue(P,"center",j.center),Vt.setValue(P,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(P,"normalMatrix",j.normalMatrix),Vt.setValue(P,"modelMatrix",j.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const on=k.uniformsGroups;for(let jl=0,l_=on.length;jl<l_;jl++)if(Z.isWebGL2){const Md=on[jl];Ne.update(Md,Yi),Ne.bind(Md,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function o_(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function a_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,O,X){ge.get(R.texture).__webglTexture=O,ge.get(R.depthTexture).__webglTexture=X;const k=ge.get(R);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=X===void 0,k.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,O){const X=ge.get(R);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,X=0){T=R,E=O,A=X;let k=!0,j=null,xe=!1,Ce=!1;if(R){const Fe=ge.get(R);Fe.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(P.FRAMEBUFFER,null),k=!1):Fe.__webglFramebuffer===void 0?Me.setupRenderTarget(R):Fe.__hasExternalTextures&&Me.rebindTextures(R,ge.get(R.texture).__webglTexture,ge.get(R.depthTexture).__webglTexture);const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const De=ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(De[O])?j=De[O][X]:j=De[O],xe=!0):Z.isWebGL2&&R.samples>0&&Me.useMultisampledRTT(R)===!1?j=ge.get(R).__webglMultisampledFramebuffer:Array.isArray(De)?j=De[X]:j=De,w.copy(R.viewport),I.copy(R.scissor),$=R.scissorTest}else w.copy(H).multiplyScalar(q).floor(),I.copy(U).multiplyScalar(q).floor(),$=z;if(J.bindFramebuffer(P.FRAMEBUFFER,j)&&Z.drawBuffers&&k&&J.drawBuffers(R,j),J.viewport(w),J.scissor(I),J.setScissorTest($),xe){const Fe=ge.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Fe.__webglTexture,X)}else if(Ce){const Fe=ge.get(R.texture),Ve=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,X||0,Ve)}D=-1},this.readRenderTargetPixels=function(R,O,X,k,j,xe,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){J.bindFramebuffer(P.FRAMEBUFFER,Ie);try{const Fe=R.texture,Ve=Fe.format,De=Fe.type;if(Ve!==Fn&&Je.convert(Ve)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=De===Co&&(Y.has("EXT_color_buffer_half_float")||Z.isWebGL2&&Y.has("EXT_color_buffer_float"));if(De!==Hi&&Je.convert(De)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Li&&(Z.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-k&&X>=0&&X<=R.height-j&&P.readPixels(O,X,k,j,Je.convert(Ve),Je.convert(De),xe)}finally{const Fe=T!==null?ge.get(T).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(R,O,X=0){const k=Math.pow(2,-X),j=Math.floor(O.image.width*k),xe=Math.floor(O.image.height*k);Me.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,R.x,R.y,j,xe),J.unbindTexture()},this.copyTextureToTexture=function(R,O,X,k=0){const j=O.image.width,xe=O.image.height,Ce=Je.convert(X.format),Ie=Je.convert(X.type);Me.setTexture2D(X,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,R.x,R.y,j,xe,Ce,Ie,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,R.x,R.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,k,R.x,R.y,Ce,Ie,O.image),k===0&&X.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(R,O,X,k,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=R.max.x-R.min.x+1,Ce=R.max.y-R.min.y+1,Ie=R.max.z-R.min.z+1,Fe=Je.convert(k.format),Ve=Je.convert(k.type);let De;if(k.isData3DTexture)Me.setTexture3D(k,0),De=P.TEXTURE_3D;else if(k.isDataArrayTexture)Me.setTexture2DArray(k,0),De=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const Be=P.getParameter(P.UNPACK_ROW_LENGTH),ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gt=P.getParameter(P.UNPACK_SKIP_PIXELS),vn=P.getParameter(P.UNPACK_SKIP_ROWS),Kn=P.getParameter(P.UNPACK_SKIP_IMAGES),_t=X.isCompressedTexture?X.mipmaps[0]:X.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,R.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,R.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,R.min.z),X.isDataTexture||X.isData3DTexture?P.texSubImage3D(De,j,O.x,O.y,O.z,xe,Ce,Ie,Fe,Ve,_t.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(De,j,O.x,O.y,O.z,xe,Ce,Ie,Fe,_t.data)):P.texSubImage3D(De,j,O.x,O.y,O.z,xe,Ce,Ie,Fe,Ve,_t),P.pixelStorei(P.UNPACK_ROW_LENGTH,Be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,vn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Kn),j===0&&k.generateMipmaps&&P.generateMipmap(De),J.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Me.setTextureCube(R,0):R.isData3DTexture?Me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Me.setTexture2DArray(R,0):Me.setTexture2D(R,0),J.unbindTexture()},this.resetState=function(){E=0,A=0,T=null,J.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===od?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===zl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?pr:bv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pr?Lt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Bw extends Yv{}Bw.prototype.isWebGL1Renderer=!0;class Hw extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class $v extends Ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kp=new mt,nf=new ad,Aa=new kl,Ra=new N;class Gw extends $t{constructor(e=new Rn,n=new $v){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;Kp.copy(r).invert(),nf.copy(e.ray).applyMatrix4(Kp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=h,x=p;v<x;v++){const m=u.getX(v);Ra.fromBufferAttribute(d,m),Zp(Ra,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,x=p;v<x;v++)Ra.fromBufferAttribute(d,v),Zp(Ra,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zp(t,e,n,i,r,s,o){const a=nf.distanceSqToPoint(t);if(a<n){const l=new N;nf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,p=(o-c)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new de:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new N,r=[],s=[],o=[],a=new N,l=new mt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new N)}s[0]=new N,o[0]=new N;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dd extends $n{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*d+this.aX,u=h*d+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Vw extends dd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,d){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+d)+(l-a)/d;h*=c,p*=c,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Ca=new N,$u=new hd,Ku=new hd,Zu=new hd;class Ww extends $n{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(Ca.subVectors(r[0],r[1]).add(r[0]),u=Ca);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(Ca.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(c),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),$u.initNonuniformCatmullRom(u.x,d.x,h.x,c.x,v,x,m),Ku.initNonuniformCatmullRom(u.y,d.y,h.y,c.y,v,x,m),Zu.initNonuniformCatmullRom(u.z,d.z,h.z,c.z,v,x,m)}else this.curveType==="catmullrom"&&($u.initCatmullRom(u.x,d.x,h.x,c.x,this.tension),Ku.initCatmullRom(u.y,d.y,h.y,c.y,this.tension),Zu.initCatmullRom(u.z,d.z,h.z,c.z,this.tension));return i.set($u.calc(l),Ku.calc(l),Zu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jp(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function Xw(t,e){const n=1-t;return n*n*e}function jw(t,e){return 2*(1-t)*t*e}function qw(t,e){return t*t*e}function ao(t,e,n,i){return Xw(t,e)+jw(t,n)+qw(t,i)}function Yw(t,e){const n=1-t;return n*n*n*e}function $w(t,e){const n=1-t;return 3*n*n*t*e}function Kw(t,e){return 3*(1-t)*t*t*e}function Zw(t,e){return t*t*t*e}function lo(t,e,n,i,r){return Yw(t,e)+$w(t,n)+Kw(t,i)+Zw(t,r)}class Kv extends $n{constructor(e=new de,n=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(lo(e,r.x,s.x,o.x,a.x),lo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jw extends $n{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(lo(e,r.x,s.x,o.x,a.x),lo(e,r.y,s.y,o.y,a.y),lo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zv extends $n{constructor(e=new de,n=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new de){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new de){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qw extends $n{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jv extends $n{constructor(e=new de,n=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new de){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ao(e,r.x,s.x,o.x),ao(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e1 extends $n{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ao(e,r.x,s.x,o.x),ao(e,r.y,s.y,o.y),ao(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qv extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new de){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Jp(a,l.x,u.x,c.x,d.x),Jp(a,l.y,u.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new de().fromArray(r))}return this}}var rf=Object.freeze({__proto__:null,ArcCurve:Vw,CatmullRomCurve3:Ww,CubicBezierCurve:Kv,CubicBezierCurve3:Jw,EllipseCurve:dd,LineCurve:Zv,LineCurve3:Qw,QuadraticBezierCurve:Jv,QuadraticBezierCurve3:e1,SplineCurve:Qv});class t1 extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new rf[r.type]().fromJSON(r))}return this}}class sf extends t1{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Zv(this.currentPoint.clone(),new de(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Jv(this.currentPoint.clone(),new de(e,n),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Kv(this.currentPoint.clone(),new de(e,n),new de(i,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Qv(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new dd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wa extends sf{constructor(e){super(e),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new sf().fromJSON(r))}return this}}const n1={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=e_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,d,h,p;if(i&&(s=a1(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let v=n;v<r;v+=n)d=t[v],h=t[v+1],d<a&&(a=d),h<l&&(l=h),d>u&&(u=d),h>c&&(c=h);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return Po(s,o,n,a,l,p,0),o}};function e_(t,e,n,i,r){let s,o;if(r===_1(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Qp(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Qp(s,t[s],t[s+1],o);return o&&Gl(o,o.next)&&(bo(o),o=o.next),o}function Mr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Gl(n,n.next)||ut(n.prev,n,n.next)===0)){if(bo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Po(t,e,n,i,r,s,o){if(!t)return;!o&&s&&d1(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?r1(t,i,r,s):i1(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),bo(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=s1(Mr(t),e,n),Po(t,e,n,i,r,s,2)):o===2&&o1(t,e,n,i,r,s):Po(Mr(t),e,n,i,r,s,1);break}}}function i1(t){const e=t.prev,n=t,i=t.next;if(ut(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,d=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let v=i.next;for(;v!==e;){if(v.x>=c&&v.x<=h&&v.y>=d&&v.y<=p&&is(r,a,s,l,o,u,v.x,v.y)&&ut(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function r1(t,e,n,i){const r=t.prev,s=t,o=t.next;if(ut(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,d=s.y,h=o.y,p=a<l?a<u?a:u:l<u?l:u,v=c<d?c<h?c:h:d<h?d:h,x=a>l?a>u?a:u:l>u?l:u,m=c>d?c>h?c:h:d>h?d:h,f=of(p,v,e,n,i),_=of(x,m,e,n,i);let g=t.prevZ,y=t.nextZ;for(;g&&g.z>=f&&y&&y.z<=_;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&is(a,c,l,d,u,h,g.x,g.y)&&ut(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=x&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&is(a,c,l,d,u,h,y.x,y.y)&&ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=f;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&is(a,c,l,d,u,h,g.x,g.y)&&ut(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&is(a,c,l,d,u,h,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function s1(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Gl(r,s)&&t_(r,i,i.next,s)&&Lo(r,s)&&Lo(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),bo(i),bo(i.next),i=t=s),i=i.next}while(i!==t);return Mr(i)}function o1(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&m1(o,a)){let l=n_(o,a);o=Mr(o,o.next),l=Mr(l,l.next),Po(o,e,n,i,r,s,0),Po(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function a1(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=e_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(p1(u));for(r.sort(l1),s=0;s<r.length;s++)n=u1(r[s],n);return n}function l1(t,e){return t.x-e.x}function u1(t,e){const n=c1(t,e);if(!n)return e;const i=n_(n,t);return Mr(i,i.next),Mr(n,n.next)}function c1(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,d;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&is(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(s-n.x),Lo(n,t)&&(d<c||d===c&&(n.x>r.x||n.x===r.x&&f1(r,n)))&&(r=n,c=d)),n=n.next;while(n!==a);return r}function f1(t,e){return ut(t.prev,t,e.prev)<0&&ut(e.next,t,t.next)<0}function d1(t,e,n,i){let r=t;do r.z===0&&(r.z=of(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,h1(r)}function h1(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function of(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function p1(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function is(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function m1(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!g1(t,e)&&(Lo(t,e)&&Lo(e,t)&&v1(t,e)&&(ut(t.prev,t,e.prev)||ut(t,e.prev,e))||Gl(t,e)&&ut(t.prev,t,t.next)>0&&ut(e.prev,e,e.next)>0)}function ut(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Gl(t,e){return t.x===e.x&&t.y===e.y}function t_(t,e,n,i){const r=La(ut(t,e,n)),s=La(ut(t,e,i)),o=La(ut(n,i,t)),a=La(ut(n,i,e));return!!(r!==s&&o!==a||r===0&&Pa(t,n,e)||s===0&&Pa(t,i,e)||o===0&&Pa(n,t,i)||a===0&&Pa(n,e,i))}function Pa(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function La(t){return t>0?1:t<0?-1:0}function g1(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&t_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Lo(t,e){return ut(t.prev,t,t.next)<0?ut(t,e,t.next)>=0&&ut(t,t.prev,e)>=0:ut(t,e,t.prev)<0||ut(t,t.next,e)<0}function v1(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function n_(t,e){const n=new af(t.i,t.x,t.y),i=new af(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Qp(t,e,n,i){const r=new af(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function bo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function af(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _1(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ds{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ds.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];em(e),tm(i,e);let o=e.length;n.forEach(em);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,tm(i,n[l]);const a=n1.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function em(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function tm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class pd extends Rn{constructor(e=new Wa([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Kt(r,3)),this.setAttribute("uv",new Kt(s,2)),this.computeVertexNormals();function o(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:x1;let g,y=!1,E,A,T,D;f&&(g=f.getSpacedPoints(c),y=!0,h=!1,E=f.computeFrenetFrames(c,!1),A=new N,T=new N,D=new N),h||(m=0,p=0,v=0,x=0);const M=a.extractPoints(u);let w=M.shape;const I=M.holes;if(!ds.isClockWise(w)){w=w.reverse();for(let P=0,ne=I.length;P<ne;P++){const Y=I[P];ds.isClockWise(Y)&&(I[P]=Y.reverse())}}const K=ds.triangulateShape(w,I),b=w;for(let P=0,ne=I.length;P<ne;P++){const Y=I[P];w=w.concat(Y)}function V(P,ne,Y){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ne,Y)}const W=w.length,q=K.length;function F(P,ne,Y){let Z,J,we;const ge=P.x-ne.x,Me=P.y-ne.y,Oe=Y.x-P.x,qe=Y.y-P.y,dt=ge*ge+Me*Me,C=ge*qe-Me*Oe;if(Math.abs(C)>Number.EPSILON){const S=Math.sqrt(dt),G=Math.sqrt(Oe*Oe+qe*qe),ie=ne.x-Me/S,ee=ne.y+ge/S,re=Y.x-qe/G,Te=Y.y+Oe/G,oe=((re-ie)*qe-(Te-ee)*Oe)/(ge*qe-Me*Oe);Z=ie+ge*oe-P.x,J=ee+Me*oe-P.y;const me=Z*Z+J*J;if(me<=2)return new de(Z,J);we=Math.sqrt(me/2)}else{let S=!1;ge>Number.EPSILON?Oe>Number.EPSILON&&(S=!0):ge<-Number.EPSILON?Oe<-Number.EPSILON&&(S=!0):Math.sign(Me)===Math.sign(qe)&&(S=!0),S?(Z=-Me,J=ge,we=Math.sqrt(dt)):(Z=ge,J=Me,we=Math.sqrt(dt/2))}return new de(Z/we,J/we)}const B=[];for(let P=0,ne=b.length,Y=ne-1,Z=P+1;P<ne;P++,Y++,Z++)Y===ne&&(Y=0),Z===ne&&(Z=0),B[P]=F(b[P],b[Y],b[Z]);const H=[];let U,z=B.concat();for(let P=0,ne=I.length;P<ne;P++){const Y=I[P];U=[];for(let Z=0,J=Y.length,we=J-1,ge=Z+1;Z<J;Z++,we++,ge++)we===J&&(we=0),ge===J&&(ge=0),U[Z]=F(Y[Z],Y[we],Y[ge]);H.push(U),z=z.concat(U)}for(let P=0;P<m;P++){const ne=P/m,Y=p*Math.cos(ne*Math.PI/2),Z=v*Math.sin(ne*Math.PI/2)+x;for(let J=0,we=b.length;J<we;J++){const ge=V(b[J],B[J],Z);Ee(ge.x,ge.y,-Y)}for(let J=0,we=I.length;J<we;J++){const ge=I[J];U=H[J];for(let Me=0,Oe=ge.length;Me<Oe;Me++){const qe=V(ge[Me],U[Me],Z);Ee(qe.x,qe.y,-Y)}}}const le=v+x;for(let P=0;P<W;P++){const ne=h?V(w[P],z[P],le):w[P];y?(T.copy(E.normals[0]).multiplyScalar(ne.x),A.copy(E.binormals[0]).multiplyScalar(ne.y),D.copy(g[0]).add(T).add(A),Ee(D.x,D.y,D.z)):Ee(ne.x,ne.y,0)}for(let P=1;P<=c;P++)for(let ne=0;ne<W;ne++){const Y=h?V(w[ne],z[ne],le):w[ne];y?(T.copy(E.normals[P]).multiplyScalar(Y.x),A.copy(E.binormals[P]).multiplyScalar(Y.y),D.copy(g[P]).add(T).add(A),Ee(D.x,D.y,D.z)):Ee(Y.x,Y.y,d/c*P)}for(let P=m-1;P>=0;P--){const ne=P/m,Y=p*Math.cos(ne*Math.PI/2),Z=v*Math.sin(ne*Math.PI/2)+x;for(let J=0,we=b.length;J<we;J++){const ge=V(b[J],B[J],Z);Ee(ge.x,ge.y,d+Y)}for(let J=0,we=I.length;J<we;J++){const ge=I[J];U=H[J];for(let Me=0,Oe=ge.length;Me<Oe;Me++){const qe=V(ge[Me],U[Me],Z);y?Ee(qe.x,qe.y+g[c-1].y,g[c-1].x+Y):Ee(qe.x,qe.y,d+Y)}}}ce(),he();function ce(){const P=r.length/3;if(h){let ne=0,Y=W*ne;for(let Z=0;Z<q;Z++){const J=K[Z];Ae(J[2]+Y,J[1]+Y,J[0]+Y)}ne=c+m*2,Y=W*ne;for(let Z=0;Z<q;Z++){const J=K[Z];Ae(J[0]+Y,J[1]+Y,J[2]+Y)}}else{for(let ne=0;ne<q;ne++){const Y=K[ne];Ae(Y[2],Y[1],Y[0])}for(let ne=0;ne<q;ne++){const Y=K[ne];Ae(Y[0]+W*c,Y[1]+W*c,Y[2]+W*c)}}i.addGroup(P,r.length/3-P,0)}function he(){const P=r.length/3;let ne=0;Se(b,ne),ne+=b.length;for(let Y=0,Z=I.length;Y<Z;Y++){const J=I[Y];Se(J,ne),ne+=J.length}i.addGroup(P,r.length/3-P,1)}function Se(P,ne){let Y=P.length;for(;--Y>=0;){const Z=Y;let J=Y-1;J<0&&(J=P.length-1);for(let we=0,ge=c+m*2;we<ge;we++){const Me=W*we,Oe=W*(we+1),qe=ne+Z+Me,dt=ne+J+Me,C=ne+J+Oe,S=ne+Z+Oe;je(qe,dt,C,S)}}}function Ee(P,ne,Y){l.push(P),l.push(ne),l.push(Y)}function Ae(P,ne,Y){Le(P),Le(ne),Le(Y);const Z=r.length/3,J=_.generateTopUV(i,r,Z-3,Z-2,Z-1);ye(J[0]),ye(J[1]),ye(J[2])}function je(P,ne,Y,Z){Le(P),Le(ne),Le(Z),Le(ne),Le(Y),Le(Z);const J=r.length/3,we=_.generateSideWallUV(i,r,J-6,J-3,J-2,J-1);ye(we[0]),ye(we[1]),ye(we[3]),ye(we[1]),ye(we[2]),ye(we[3])}function Le(P){r.push(l[P*3+0]),r.push(l[P*3+1]),r.push(l[P*3+2])}function ye(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return y1(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new rf[r.type]().fromJSON(r)),new pd(i,e.options)}}const x1={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new de(s,o),new de(a,l),new de(u,c)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],d=e[i*3+2],h=e[r*3],p=e[r*3+1],v=e[r*3+2],x=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new de(o,1-l),new de(u,1-d),new de(h,1-v),new de(x,1-f)]:[new de(a,1-l),new de(c,1-d),new de(p,1-v),new de(m,1-f)]}};function y1(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class md extends Rn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let d=e;const h=(n-e)/r,p=new N,v=new de;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),u.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,c.push(v.x,v.y)}d+=h}for(let x=0;x<r;x++){const m=x*(i+1);for(let f=0;f<i;f++){const _=f+m,g=_,y=_+i+1,E=_+i+2,A=_+1;a.push(g,y,A),a.push(y,E,A)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new md(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sr extends Rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new N,h=new N,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const _=[],g=f/i;let y=0;f===0&&o===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let E=0;E<=n;E++){const A=E/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+y,1-g),_.push(u++)}c.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const g=c[f][_+1],y=c[f][_],E=c[f+1][_],A=c[f+1][_+1];(f!==0||o>0)&&p.push(g,y,A),(f!==i-1||l<Math.PI)&&p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lf extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dv,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const nm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class S1{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],v=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const M1=new S1;class gd{constructor(e){this.manager=e!==void 0?e:M1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gd.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class E1 extends Error{constructor(e,n){super(e),this.response=n}}class T1 extends gd{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=nm.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(ii[e]!==void 0){ii[e].push({onLoad:n,onProgress:i,onError:r});return}ii[e]=[],ii[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=ii[e],d=u.body.getReader(),h=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=h?parseInt(h):0,v=p!==0;let x=0;const m=new ReadableStream({start(f){_();function _(){d.read().then(({done:g,value:y})=>{if(g)f.close();else{x+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:p});for(let A=0,T=c.length;A<T;A++){const D=c[A];D.onProgress&&D.onProgress(E)}f.enqueue(y),_()}})}}});return new Response(m)}else throw new E1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{nm.add(e,u);const c=ii[e];delete ii[e];for(let d=0,h=c.length;d<h;d++){const p=c[d];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=ii[e];if(c===void 0)throw this.manager.itemError(e),u;delete ii[e];for(let d=0,h=c.length;d<h;d++){const p=c[d];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class i_ extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Ju=new mt,im=new N,rm=new N;class w1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ud,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;im.setFromMatrixPosition(e.matrixWorld),n.position.copy(im),rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rm),n.updateMatrixWorld(),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sm=new mt,Xs=new N,Qu=new N;class A1 extends w1{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xs),Qu.copy(i.position),Qu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Qu),i.updateMatrixWorld(),r.makeTranslation(-Xs.x,-Xs.y,-Xs.z),sm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sm)}}class R1 extends i_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new A1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class C1 extends i_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class P1{constructor(e,n,i=0,r=1/0){this.ray=new ad(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ld,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return uf(e,this,i,n),i.sort(om),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)uf(e[r],this,i,n);return i.sort(om),i}}function om(t,e){return t.distance-e.distance}function uf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)uf(r[s],e,n,!0)}}class L1{constructor(){this.type="ShapePath",this.color=new Ke,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new sf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(f){const _=[];for(let g=0,y=f.length;g<y;g++){const E=f[g],A=new Wa;A.curves=E.curves,_.push(A)}return _}function i(f,_){const g=_.length;let y=!1;for(let E=g-1,A=0;A<g;E=A++){let T=_[E],D=_[A],M=D.x-T.x,w=D.y-T.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(T=_[A],M=-M,D=_[E],w=-w),f.y<T.y||f.y>D.y)continue;if(f.y===T.y){if(f.x===T.x)return!0}else{const I=w*(f.x-T.x)-M*(f.y-T.y);if(I===0)return!0;if(I<0)continue;y=!y}}else{if(f.y!==T.y)continue;if(D.x<=f.x&&f.x<=T.x||T.x<=f.x&&f.x<=D.x)return!0}}return y}const r=ds.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new Wa,l.curves=a.curves,u.push(l),u;let c=!r(s[0].getPoints());c=e?!c:c;const d=[],h=[];let p=[],v=0,x;h[v]=void 0,p[v]=[];for(let f=0,_=s.length;f<_;f++)a=s[f],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!c&&h[v]&&v++,h[v]={s:new Wa,p:x},h[v].s.curves=a.curves,c&&v++,p[v]=[]):p[v].push({h:a,p:x[0]});if(!h[0])return n(s);if(h.length>1){let f=!1,_=0;for(let g=0,y=h.length;g<y;g++)d[g]=[];for(let g=0,y=h.length;g<y;g++){const E=p[g];for(let A=0;A<E.length;A++){const T=E[A];let D=!0;for(let M=0;M<h.length;M++)i(T.p,h[M].p)&&(g!==M&&_++,D?(D=!1,d[M].push(T)):f=!0);D&&d[g].push(T)}}_>0&&f===!1&&(p=d)}let m;for(let f=0,_=h.length;f<_;f++){l=h[f].s,u.push(l),m=p[f];for(let g=0,y=m.length;g<y;g++)l.holes.push(m[g].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);class b1 extends gd{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new T1(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));n&&n(l)},i,r)}parse(e){return new D1(e)}}class D1{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100){const i=[],r=U1(e,n,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function U1(t,e,n){const i=Array.from(t),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,l=0;for(let u=0;u<i.length;u++){const c=i[u];if(c===`
`)a=0,l-=s;else{const d=N1(c,r,a,l,n);a+=d.offsetX,o.push(d.path)}}return o}function N1(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new L1;let a,l,u,c,d,h,p,v;if(s.o){const x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,f=x.length;m<f;)switch(x[m++]){case"m":a=x[m++]*e+n,l=x[m++]*e+i,o.moveTo(a,l);break;case"l":a=x[m++]*e+n,l=x[m++]*e+i,o.lineTo(a,l);break;case"q":u=x[m++]*e+n,c=x[m++]*e+i,d=x[m++]*e+n,h=x[m++]*e+i,o.quadraticCurveTo(d,h,u,c);break;case"b":u=x[m++]*e+n,c=x[m++]*e+i,d=x[m++]*e+n,h=x[m++]*e+i,p=x[m++]*e+n,v=x[m++]*e+i,o.bezierCurveTo(d,h,p,v,u,c);break}}return{offsetX:s.ha*e,path:o}}class I1 extends pd{constructor(e,n={}){const i=n.font;if(i===void 0)super();else{const r=i.generateShapes(e,n.size);n.depth=n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n)}this.type="TextGeometry"}}function F1(t){const e=new ur,n=[],i=new sr(12,96,96),r=new ts({color:16766720}),s=new qt(i,r),o=new sr(18,64,64),a=new ts({color:16774337,transparent:!0,opacity:.25,blending:ml,side:kt}),l=new qt(o,a);l.position.copy(s.position),e.add(s),e.add(l);const u=32,c=2*Math.PI/Math.max(1,t.length);return t.forEach((d,h)=>{const p=3+Math.min(6,(d.stargazers_count||0)/12),v=z1(d.language),x=new sr(p,48,48),m=new lf({color:v,metalness:.5,roughness:.35,emissive:new Ke(v).multiplyScalar(.08),emissiveIntensity:.6}),f=new qt(x,m),_=new sr(p*1.6,32,32),g=new ts({color:v,transparent:!0,opacity:.28,blending:ml,side:kt,depthWrite:!1}),y=new qt(_,g),E=new ur;E.add(f),E.add(y);const A=u+h*14,T=h*c+Math.random()*.6;E.position.set(Math.cos(T)*A,Math.sin(T*.45)*12,Math.sin(T)*A),f.userData={repo:d,group:E,glow:y,baseGlowOpacity:g.opacity,radius:A,angle:T,speed:O1(d)},n.push(f),e.add(E);const D=new md(A-.1,A+.1,128),M=new ts({color:1779e3,side:jn,transparent:!0,opacity:.35}),w=new qt(D,M);if(w.rotation.x=Math.PI/2,e.add(w),(d.forks||0)>5){const I=new qt(new sr(p*.4,24,24),new lf({color:14540287,metalness:.2,roughness:.5}));I.position.set(p*2.2,0,0);const $=new ur;$.add(I),$.userData={planet:f,rotationSpeed:.015+Math.random()*.01},E.add($),f.userData.moon=$}}),{group:e,planets:n}}function O1(t){const n=Math.min(.002,(t.stargazers_count||0)/5e3),i=Math.min(.001,(t.forks||0)/2e3);return .0012+n+i+Math.random()*8e-4}function z1(t){return t&&{JavaScript:16244510,TypeScript:3242182,Python:3502757,HTML:14896166,CSS:5651836,Java:11563545,"C#":1541632,"C++":15944573,Go:44504,Shell:9035857,PHP:5201301,Ruby:7345430}[t]||8947967}async function k1(t){const e=`https://api.github.com/users/${t}/repos?type=owner&per_page=100`,n=await fetch(e);if(!n.ok)throw new Error("Error al obtener los repositorios");return(await n.json()).filter(r=>r.stargazers_count>=0)}function B1(){const t=et.useRef(null),e=et.useRef(null),n=et.useRef(null),i=et.useRef(null),r=et.useRef(null),s=et.useRef(null),o=et.useRef(null),a=et.useRef(null),l=et.useRef([]),u=et.useRef(null),c=et.useRef(null),d=et.useRef(new de),h=et.useRef(new P1),[p,v]=et.useState([]),[x,m]=et.useState(!0),[f,_]=et.useState(null),[g,y]=et.useState(null),[E,A]=et.useState(null),T=et.useMemo(()=>{if(!p||p.length===0)return{totalRepos:0,totalStars:0,totalForks:0,topLanguages:[]};const I=p.reduce((K,b)=>{K.totalStars+=b.stargazers_count||0,K.totalForks+=b.forks||0;const V=b.language||"Sin lenguaje";return K.languages[V]=(K.languages[V]||0)+1,K},{totalStars:0,totalForks:0,languages:{}}),$=Object.entries(I.languages).sort((K,b)=>b[1]-K[1]).slice(0,3).map(([K,b])=>({language:K,count:b}));return{totalRepos:p.length,totalStars:I.totalStars,totalForks:I.totalForks,topLanguages:$}},[p]),D=I=>{if(!I||!I.userData)return;const{group:$,glow:K,baseGlowOpacity:b}=I.userData;if($&&$.scale.set(1,1,1),K&&K.material){const V=b??.28;K.material.opacity=V}},M=(I,{scale:$=1.18,glowMultiplier:K=1.8}={})=>{if(!I||!I.userData)return;const{group:b,glow:V,baseGlowOpacity:W}=I.userData;if(b&&b.scale.set($,$,$),V&&V.material){const q=W??.28;V.material.opacity=Math.min(.9,q*K)}},w=()=>{c.current&&(D(c.current),c.current=null),A(null),u.current&&(D(u.current),u.current=null),y(null)};return et.useEffect(()=>{const I=t.current;if(!I)return;const $=I.clientWidth,K=I.clientHeight,b=new Hw;e.current=b;const V=new cn(60,$/K,.1,2e3);V.position.set(0,40,180),n.current=V;const W=new Yv({antialias:!0,alpha:!0});W.setPixelRatio(window.devicePixelRatio),W.setClearColor(328976,1),W.setSize($,K),i.current=W,I.appendChild(W.domElement);const q=new C1(16777215,.5),F=new R1(16777215,1.4,0,2);F.position.set(90,120,180),b.add(q),b.add(F);const B=1500,H=new Rn,U=new Float32Array(B*3);for(let Le=0;Le<B;Le+=1)U[Le*3]=(Math.random()-.5)*1e3,U[Le*3+1]=(Math.random()-.5)*1e3,U[Le*3+2]=(Math.random()-.5)*1e3;H.setAttribute("position",new kn(U,3));const z=new $v({color:16777215,size:1.2,transparent:!0,opacity:.75}),le=new Gw(H,z);b.add(le),s.current=le,new b1().load("https://unpkg.com/three@0.157.0/examples/fonts/helvetiker_regular.typeface.json",Le=>{const ye=new I1("Tu Nombre",{font:Le,size:18,height:2,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.6,bevelSegments:5}),P=new lf({color:65488,metalness:.6,roughness:.3}),ne=new qt(ye,P);ne.position.set(-60,0,0),o.current=ne,b.add(ne)});const he=()=>{if(!i.current||!n.current)return;const Le=I.clientWidth,ye=I.clientHeight;n.current.aspect=Le/ye,n.current.updateProjectionMatrix(),i.current.setSize(Le,ye)};window.addEventListener("resize",he);const Se=Le=>{const ye=n.current,P=i.current;if(!ye||!P||l.current.length===0){Le==="hover"&&(P&&(P.domElement.style.cursor="default"),y(null));return}h.current.setFromCamera(d.current,ye);const Y=h.current.intersectObjects(l.current,!1).find(Z=>Z.object.userData.repo);if(Le==="hover")if(Y){const Z=Y.object;u.current&&u.current!==Z&&u.current!==c.current&&D(u.current),Z!==c.current?M(Z,{scale:1.2,glowMultiplier:2.1}):M(Z,{scale:1.32,glowMultiplier:2.6}),u.current=Z,y(Z.userData.repo),P.domElement.style.cursor="pointer"}else u.current&&(u.current!==c.current?D(u.current):M(u.current,{scale:1.32,glowMultiplier:2.6}),u.current=null,y(null),P.domElement.style.cursor="default");else if(Le==="click")if(Y){const Z=Y.object;c.current&&c.current!==Z&&D(c.current),c.current===Z?(D(Z),c.current=null,A(null),u.current=null,y(null)):(c.current=Z,M(Z,{scale:1.34,glowMultiplier:2.8}),A(Z.userData.repo),u.current=Z,y(Z.userData.repo))}else c.current&&(D(c.current),c.current=null,A(null),u.current=null,y(null))},Ee=Le=>{const ye=i.current;if(!ye||!n.current)return;const P=ye.domElement.getBoundingClientRect();d.current.x=(Le.clientX-P.left)/P.width*2-1,d.current.y=-((Le.clientY-P.top)/P.height)*2+1,Se("hover")},Ae=()=>{Se("click")};W.domElement.addEventListener("pointermove",Ee),W.domElement.addEventListener("click",Ae);const je=()=>{r.current=requestAnimationFrame(je),s.current&&(s.current.rotation.y+=4e-4,s.current.rotation.x+=2e-4),o.current&&(o.current.rotation.y+=.01,o.current.position.y=Math.sin(Date.now()*.001)*5),l.current.forEach(Le=>{Le.userData.angle+=Le.userData.speed;const{radius:ye,angle:P,group:ne,moon:Y}=Le.userData,Z=Math.cos(P)*ye,J=Math.sin(P*.4)*12,we=Math.sin(P)*ye;if(ne&&(ne.position.set(Z,J,we),ne.rotation.y+=.0015),Le.rotation.y+=.01,Y){Y.rotation.y+=Y.userData.rotationSpeed;const ge=Y.children[0];ge&&(ge.rotation.y+=Y.userData.rotationSpeed*1.5)}}),a.current&&(a.current.rotation.y+=6e-4),i.current&&n.current&&e.current&&i.current.render(e.current,n.current)};return je(),()=>{cancelAnimationFrame(r.current),window.removeEventListener("resize",he),W.domElement.removeEventListener("pointermove",Ee),W.domElement.removeEventListener("click",Ae),s.current&&(s.current.geometry.dispose(),s.current.material.dispose(),b.remove(s.current),s.current=null),o.current&&(o.current.geometry.dispose(),o.current.material.dispose(),b.remove(o.current),o.current=null),a.current&&(am(b,a.current),a.current=null,l.current=[],u.current=null,c.current=null,y(null),A(null)),I.removeChild(W.domElement),W.dispose()}},[]),et.useEffect(()=>{let I=!0;return m(!0),k1("caagudelo").then($=>{I&&(v($),m(!1))}).catch(()=>{I&&(_("No se pudieron cargar los repositorios."),m(!1))}),()=>{I=!1}},[]),et.useEffect(()=>{if(!e.current||p.length===0)return;a.current&&(am(e.current,a.current),a.current=null,l.current=[],u.current=null,c.current=null,y(null),A(null));const{group:I,planets:$}=F1(p);a.current=I,l.current=$,e.current.add(I)},[p]),be.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",background:"#050510",position:"relative"},ref:t,children:[be.jsx(Ox,{}),be.jsxs("div",{id:"info-panel",style:{position:"absolute",top:80,left:"3%",maxWidth:320,padding:"1.5rem",background:"rgba(10, 12, 24, 0.82)",border:"1px solid #00ffd0",borderRadius:"1.2rem",color:"#fff",zIndex:16,pointerEvents:"auto",boxShadow:"0 6px 28px rgba(0,0,0,0.45)"},children:[be.jsx("h2",{style:{margin:"0 0 0.6rem",fontSize:"1.4rem",color:"#00ffd0"},children:"Atlas Galáctico"}),be.jsx("p",{style:{margin:"0 0 0.8rem",fontSize:"0.95rem",lineHeight:1.4},children:"Explora tus repositorios representados como planetas. Desplaza el cursor para descubrirlos y haz clic para revelar sus detalles."}),x&&be.jsx("p",{style:{color:"#8ea6ff"},children:"Cargando constelaciones..."}),f&&be.jsx("p",{style:{color:"#ff7185"},children:f}),!x&&!f&&be.jsxs("div",{style:{fontSize:"0.9rem",lineHeight:1.5},children:[be.jsxs("div",{children:[be.jsx("strong",{children:"Repositorios:"})," ",T.totalRepos]}),be.jsxs("div",{children:[be.jsx("strong",{children:"Stars:"})," ",T.totalStars]}),be.jsxs("div",{children:[be.jsx("strong",{children:"Forks:"})," ",T.totalForks]}),T.topLanguages.length>0&&be.jsxs("div",{style:{marginTop:8},children:[be.jsx("strong",{children:"Lenguajes destacados:"}),be.jsx("div",{children:T.topLanguages.map(I=>be.jsxs("span",{style:{display:"inline-block",marginRight:8},children:[I.language," (",I.count,")"]},I.language))})]})]})]}),be.jsx(zx,{}),g&&!E&&be.jsxs("div",{style:{position:"absolute",bottom:"18%",left:"50%",transform:"translateX(-50%)",padding:"1rem 1.5rem",background:"rgba(10, 12, 24, 0.8)",border:"1px solid #00ffd0",borderRadius:"1rem",color:"#fff",zIndex:15,pointerEvents:"none",minWidth:260,textAlign:"center"},children:[be.jsx("strong",{style:{color:"#00ffd0"},children:g.name}),be.jsx("div",{style:{fontSize:"0.9rem",marginTop:"0.5rem"},children:g.description||"Sin descripción disponible."})]}),E&&be.jsxs("div",{style:{position:"absolute",bottom:"5%",right:"5%",padding:"1.5rem",background:"rgba(10, 12, 24, 0.92)",border:"1px solid #00ffd0",borderRadius:"1.2rem",color:"#fff",zIndex:20,maxWidth:320},children:[be.jsx("h3",{style:{marginTop:0,color:"#00ffd0"},children:E.name}),be.jsx("p",{style:{fontSize:"0.95rem"},children:E.description||"Sin descripción disponible."}),be.jsxs("p",{style:{fontSize:"0.85rem",marginBottom:"0.5rem"},children:["Lenguaje: ",E.language||"Sin lenguaje"," • ⭐ ",E.stargazers_count??0," • Forks ",E.forks??0," • Watchers ",E.watchers??E.watchers_count??0]}),be.jsxs("p",{style:{fontSize:"0.8rem",marginBottom:"1rem",color:"#8ea6ff"},children:["Actualizado: ",E.updated_at?new Date(E.updated_at).toLocaleDateString():"Fecha no disponible"]}),be.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[be.jsx("button",{type:"button",onClick:w,style:{padding:"0.5rem 0.8rem",borderRadius:8,border:"1px solid #00ffd0",background:"transparent",color:"#00ffd0",cursor:"pointer"},children:"Cerrar"}),be.jsx("button",{type:"button",onClick:()=>window.open(E.html_url,"_blank","noopener,noreferrer"),style:{padding:"0.5rem 0.8rem",borderRadius:8,border:"none",background:"#00ffd0",color:"#081018",fontWeight:700,cursor:"pointer"},children:"Ver en GitHub"})]})]})]})}function am(t,e){e.children.forEach(n=>{n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose&&i.dispose()):n.material.dispose&&n.material.dispose())}),t.remove(e)}ec.createRoot(document.getElementById("root")).render(be.jsx(w_.StrictMode,{children:be.jsx(B1,{})}));
