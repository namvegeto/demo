"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[12127],{705895:function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function i(t,n,e){return(n=o(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}var a=new(function(){var t,n;function e(){!function(t,n){if(!(t instanceof n))throw TypeError("Cannot call a class as a function")}(this,e),i(this,"onResumeListeners",[]),i(this,"onPauseListeners",[]),i(this,"inExp",!1),i(this,"windowInFocus",!0)}return t=[{key:"setExperiment",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.inExp=t}},{key:"onSessionResume",value:function(t){return this.onResumeListeners.push(t),this}},{key:"onSessionPause",value:function(t){return this.onPauseListeners.push(t),this}},{key:"removeResumeListener",value:function(t){this.onResumeListeners.filter(function(n){return n!==t})}},{key:"removePauseListener",value:function(t){this.onPauseListeners=this.onPauseListeners.filter(function(n){return n!==t})}},{key:"getAppState",value:function(){return this.windowInFocus?0:void 0}}],r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}()),c=function(t){if(t.isHidden){var n=t.reason;a.windowInFocus=!1,a.onPauseListeners.forEach(function(t){return t(n)})}else a.windowInFocus=!0,a.onResumeListeners.forEach(function(t){return t()})};setTimeout(function(){window.addEventListener("beforeunload",function(){return c({isHidden:!0,reason:"beforeunload"})}),window.addEventListener("focus",function(){return c({isHidden:!1})}),window.addEventListener("blur",function(){return c({isHidden:!0,reason:"blur"})}),window.addEventListener("pageshow",function(){return c({isHidden:!1})}),window.addEventListener("pagehide",function(){return c({isHidden:!0,reason:"pagehide"})}),void 0!==document.hidden?document.addEventListener("visibilitychange",function(){return c(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1})},!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",function(){return c(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1})},!1)},0),n.Z=a},603642:function(t,n,e){e.d(n,{Z:function(){return tS}});var r=e(672652),i=e(705895),o=e(685679),a=e(608029),c=e(297329),s=e(107860),u=e(862536),l=e(906623),p=e(521525),f=e(819281),d=e(793250),m=e(309300);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(Object(e),!0).forEach(function(n){var r,i;r=n,i=e[n],(r=function(t){var n=function(t,n){if("object"!==y(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==y(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===y(n)?n:String(n)}(r))in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var b=function(t){var n=t.constraintMap,e=t.initialNavTiming;return g(g(g(g({},t.annotations),(0,m.jh)("constraint_",n)),(0,m.jh)("mark_",(0,s.gQ)())),(0,m.jh)("browser_",g(g({},e?(0,m.D3)(e):{}),(0,m.rX)())))},h=e(840387);function S(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var T=function(t,n){var e;return function(t){if(Array.isArray(t))return S(t)}(e=t.map(function(t){return(0,h.Z)(t,n)}).filter(Boolean))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,n){if(t){if("string"==typeof t)return S(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return S(t,n)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},w=e(302234),A=e(663678),O=e(953565);function E(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return I(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return I(t,n)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var P=function(t){var n=t.eventPrefix,e=t.endTime,r=t.tags,i=t.resourceArr,o=t.resourceType,a=void 0===o?"allResources":o,c=i.length;if(c>0&&"object"===_(i[0])&&!Array.isArray(i[0])){for(var s=E(i).sort(function(t,n){return t.fetchStart-n.fetchStart}),u=E(i).sort(function(t,n){return t.responseEnd-n.responseEnd}),l=1,p=e/5,f=0;l<=5;){for(var d=0;f<=c-1&&s[f].fetchStart<=p*l;)f+=1,d+=1;(0,O.S0)("".concat(n,".tags.").concat(a,".fetchStartInterval").concat(l,"of5"),d,{sampleRate:.2,tags:r}),(0,O.S0)("".concat(n,".").concat(a,".fetchStartInterval").concat(l,"of5"),d,{sampleRate:.2}),l+=1}var m={zeroPercentInFlight:s[0].fetchStart,twentyFivePercentInFlight:s[Math.floor(c/4)].fetchStart,fiftyPercentInFlight:s[2*Math.floor(c/4)].fetchStart,seventyFivePercentInFlight:s[3*Math.floor(c/4)].fetchStart,hundredPercentInFlight:s[c-1].fetchStart,twentyFivePercentComplete:u[Math.floor(c/4)].responseEnd,fiftyPercentComplete:u[2*Math.floor(c/4)].responseEnd,seventyFivePercentComplete:u[3*Math.floor(c/4)].responseEnd,hundredPercentComplete:u[c-1].responseEnd};for(var y in m)m[y]&&((0,O.LY)("".concat(n,".tags.").concat(a,".").concat(y),m[y],{sampleRate:.2,tags:r}),(0,O.LY)("".concat(n,".").concat(a,".").concat(y),m[y],{sampleRate:.2}))}},C=function(t){var n,e=t.annotateExperiments,r=t.endTime,i=t.entries,o=t.metricId,a=t.pwtStaticContext,c="".concat((0,A.Z)(a),".").concat(o.surface),s=[c];e&&e.forEach(function(t){var n=a.getExperimentGroup(t)||"null";s.push("".concat(c,".").concat(t,".").concat(n))});var u={lcpTimingBucket:((n=(0,w.Bn)())<=2500?"Good":n>2500&&n<=4e3?"Needs Improvement":"Poor")||"unknown",isAuthenticated:a.isAuthenticated,navigationType:o.navigationType},l=Array.from(i.filter(function(t){return"number"==typeof t.encodedBodySize&&t.encodedBodySize>=1e4&&t.responseEnd<=r})),p=[],f=[],d=[],m=[],y=[];l.forEach(function(t){"img"===t.initiatorType?p.push(t):"css"===t.initiatorType?f.push(t):"script"===t.initiatorType?d.push(t):"xmlhttprequest"===t.initiatorType?m.push(t):"link"===t.initiatorType&&t.name.includes("i.pinimg.com")&&y.push(t)}),s.forEach(function(t){P({eventPrefix:t,endTime:r,tags:u,resourceArr:l}),P({eventPrefix:t,endTime:r,tags:u,resourceArr:p,resourceType:"image"}),P({eventPrefix:t,endTime:r,tags:u,resourceArr:f,resourceType:"css"}),P({eventPrefix:t,endTime:r,tags:u,resourceArr:d,resourceType:"scripts"}),P({eventPrefix:t,endTime:r,tags:u,resourceArr:m,resourceType:"xhr"}),P({eventPrefix:t,endTime:r,tags:u,resourceArr:y,resourceType:"preloadedImage"})})},j=e(279600),M=function(t,n){var e=t.startTime,r=t.responseEnd;return e>n.endTime||!!r&&r<n.startTime},N=function(t){var n,e=t.annotateExperiments,r=t.annotations,i=t.binaryAnnotations,o=t.constraintMap,a=t.endTime,c=t.imageTimings,s=t.metricId,u=t.pwtStaticContext,l=t.startTime,m=t.traceId,y=t.spans,v=(0,j.Cg)();"initial_app_load"===s.navigationType&&(n=(0,f.Z)());var g=c.map(function(t){return t.name}),h=v.map(function(t){return(0,d.p)(t,g)}).filter(function(t){return!M(t.timing,{startTime:l,endTime:a})});return("board"===s.surface||"pin_closeup"===s.surface)&&C({annotateExperiments:e,endTime:a,entries:v,metricId:s,pwtStaticContext:u}),{type:"COMPLETE",traceId:m,startTime:l,endTime:a,spans:T(h,m).concat(y),annotationMap:b({constraintMap:o,initialNavTiming:n,annotations:r}),binaryAnnotationMap:(0,p.rA)({annotateExperiments:e,binaryAnnotations:i,entries:v,metricId:s,performanceResources:h,pwtEndTime:a,pwtStaticContext:u})}},L=e(404373),R=!1,x=function(t,n){if(t&&n){if(!R)return R=!0,n;(0,c.H)("duplicated_initial_app_load_surface_pwt")}return(0,L.Z)()},D=e(363404),H=e(367180);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t){return function(t){if(Array.isArray(t))return Z(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return Z(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Z(t,n)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function U(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function z(t,n,e){var r;return(r=function(t,n){if("object"!==B(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==B(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"===B(r)?r:String(r))in t)?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var G=function(t){var n=performance.getEntriesByType("resource").filter(function(t){return t.name.includes("i.pinimg")}).reduce(function(t,n){var e=n.name.replace(".jpg","").split("/");return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?U(Object(e),!0).forEach(function(n){z(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}(z({},e[e.length-1],{downloadSize:n.name.split("/")[3].split("x")[0]}),t)},{}),e=Array.from(document.getElementsByTagName("img")).map(function(t){var e=t.src.replace(".jpg","").split("/"),r=e[e.length-1];if(n[r]){var i,o=(null===(i=(0,H.rZ)(t))||void 0===i?void 0:i.width)||1,a=n[r].downloadSize;return{fileName:r,renderedSize:o,downloadedSize:a,ratio:a/o}}return{fileName:r,renderedSize:1,downloadedSize:1,ratio:1}}),r=Array.from(document.querySelectorAll('div[role="img"]')).map(function(t){var e=t.style.backgroundImage.split('"')[1].replace(".jpg","").split("/"),r=e[e.length-1];if(n[r]&&t instanceof HTMLDivElement){var i,o=(null===(i=(0,H.rZ)(t))||void 0===i?void 0:i.width)||1,a=n[r].downloadSize;return{fileName:r,renderedSize:o,downloadedSize:a,ratio:a/o}}return{fileName:r,renderedSize:1,downloadedSize:1,ratio:1}});[].concat(k(e),k(r)).forEach(function(n){var e=n.ratio,r=n.fileName,i=n.downloadedSize;n.ratio>1.05&&(0,c.A9)("checkImageRatio.".concat(t),{count:Math.round(10*e)/10,tags:{fileName:"".concat(i,"_").concat(r)}})})},F=e(970126),K=e(5859),V=function(t,n){var e=(0,r.useRef)(n);return{getState:function(){return e.current},dispatch:function(n){e.current=t(e.current,n)}}},W=e(184960),J=e(819267),Y=["children"];function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,n){if(null==t)return{};var e,r,i=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],!(n.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}function X(t){return function(t){if(Array.isArray(t))return Q(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return Q(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Q(t,n)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function tt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function tn(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?tt(Object(e),!0).forEach(function(n){te(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):tt(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function te(t,n,e){return(n=tr(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function tr(t){var n=function(t,n){if("object"!==$(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==$(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===$(n)?n:String(n)}var ti=["initial_app_load","client_route_push"],to=(0,a.XV)("PwtSurface"),ta="NavigationComplete",tc="VisuallyComplete",ts=function(t,n){t.isSampled&&(0,D.Z)({metricId:t.metricConfig.metricId,pwtStaticContext:t.metricConfig.pwtStaticContext,result:{type:"ABORT",reason:n}})},tu=function(t,n,e){var r,i=t.metricConfig,a=i.metricId,u=i.pwtStaticContext,l=i.annotateExperiments,p=t.annotations,f=t.binaryAnnotations,d=t.constraintMap,m=t.startTime,y=t.imageTimings,v=t.isSampled,g=t.spans;(0,s.L8)("PWT_Complete_".concat((0,o.KJ)(a)));var b=x("initial_app_load"===a.navigationType,null===(r=u.serverData)||void 0===r?void 0:r.trace_id),h=N({annotateExperiments:l,annotations:p,binaryAnnotations:f,constraintMap:d,endTime:n,imageTimings:y,metricId:a,pwtStaticContext:u,startTime:m,traceId:b,spans:g});v&&!e&&(0,D.Z)({metricId:a,pwtStaticContext:u,result:h});try{G(String(h.binaryAnnotationMap["metricId.surface"].value))}catch(t){(0,c.H)("image_ratio_check_error",{error:t})}return tn(tn({},t),{},{result:h,status:"DONE"})},tl=function(t,n){if(t.metricConfig.constraints.every(function(n){return t.constraintMap[n]})){var e=Math.max.apply(Math,X(t.metricConfig.constraints.map(function(n){return t.constraintMap[n]})));return tu(t,e,n)}return to("Remaining constraints: ".concat(t.metricConfig.constraints.filter(function(n){return!t.constraintMap[n]}).join(", "))),t},tp=function(t,n){var e=n.constraint,r=n.time,i=n.disablePWTLogging,a=(0,o.KJ)(t.metricConfig.metricId);return F.Z?t.metricConfig.constraints.find(function(t){return t===e})?t.constraintMap[e]?(to('constraint "'.concat(e,'" is already complete.')),(0,c.H)("duplicated_constraint_complete",{constraint:e,action:a}),t):(to('marking constraint "'.concat(e,'" as complete')),(0,s.ZP)("constraint_".concat(e,"_is_complete")),tl(tn(tn({},t),{},{constraintMap:tn(tn({},t.constraintMap),{},te({},e,r||F.Z.now()))}),i)):(to('marked constraint "'.concat(e,'" is not a required constraint.')),t):((0,c.H)("missing_window_performance",{action:a}),t)},tf=function(t,n){if(!F.Z){var e=(0,o.KJ)(t.metricConfig.metricId);(0,c.H)("missing_window_performance",{action:e})}to('removing constraint "'.concat(n,'"'));var r=t.metricConfig.constraints.filter(function(t){return t!==n}),i=t.constraintMap,a=(i[n],q(i,[n].map(tr)));return tl(tn(tn({},t),{},{constraintMap:a,metricConfig:tn(tn({},t.metricConfig),{},{constraints:r})}))},td=function(t,n){if(!F.Z){var e=(0,o.KJ)(t.metricConfig.metricId);(0,c.H)("missing_window_performance",{action:e})}to('updating pwt segment to "'.concat(n,'"'));var r=tn(tn({},t.metricConfig.metricId),{},{segment:n});return tn(tn({},t),{},{metricConfig:tn(tn({},t.metricConfig),{},{metricId:r})})},tm=function(t,n){var e,r,i,a,s=n.metricConfig,u=n.startTime,l=n.isSampled,p=n.disablePWTLogging;if(p||"TIMING"!==t.status||u===t.startTime||ts(t,"routeUpdatedOnSameSurface"),!s)return{status:"DISABLED",metricConfig:null};var f=(0,o.KJ)(s.metricId);return"TIMING"===t.status&&t.startTime===u&&t.constraintMap[ta]?((0,c.H)("duplicated_init_route_action",{action:f}),t):(p||("Other"===s.pwtStaticContext.browserName&&!1===s.metricId.isAuthenticated&&"initial_app_load"===s.metricId.navigationType?((0,c.A9)("TIMING.".concat(f),{tags:{userAgent:null===(e=window)||void 0===e?void 0:null===(r=e.navigator)||void 0===r?void 0:r.userAgent}}),(0,c.A9)("TIMING.sampled.".concat(f),{tags:{userAgent:null===(i=window)||void 0===i?void 0:null===(a=i.navigator)||void 0===a?void 0:a.userAgent},sampleRate:.5})):((0,c.A9)("TIMING.".concat(f)),(0,c.A9)("TIMING.sampled.".concat(f),{sampleRate:.5}))),tp({status:"TIMING",metricConfig:s,startTime:u,constraintMap:{},annotations:{},binaryAnnotations:{},imageTimings:[],isSampled:l,spans:[]},{constraint:ta,disablePWTLogging:p}))},ty=function(t,n){if(to("dispatch action",n),"INIT_ROUTE"===n.type)return tm(t,n.payload);if("TIMING"!==t.status)return to("ignoring action due to invalid state ".concat(t.status),n),t;switch(n.type){case"ABORT":ts(t,n.reason);var e={type:"ABORT",reason:n.reason};return tn(tn({},t),{},{status:"DONE",result:e});case"ANNOTATE":var r=n.payload.name;if(!F.Z)return t;var i=F.Z.now();return to("adding annotation {".concat(r,": ").concat(i,"}")),tn(tn({},t),{},{annotations:tn(tn({},t.annotations),te({},r,i))});case"BINARY_ANNOTATE":var a=n.payload,s=a.name,u=a.value,l=a.annotationType;return to("adding binary annotation {".concat(s,": ").concat(u,"}")),tn(tn({},t),{},{binaryAnnotations:tn(tn({},t.binaryAnnotations),te({},s,{value:u,type:l}))});case"MARK_CONSTRAINT_COMPLETE":return tp(t,n.payload);case"REMOVE_CONSTRAINT":return tf(t,n.payload);case"SET_SEGMENT":return td(t,n.payload);case"SET_VISUALLY_COMPLETE_RESULT":var p=n.payload.imageTimings;if(0===p.length)return ts(t,"visuallyComplete_noImages"),tn(tn({},t),{},{status:"DONE",result:{type:"ABORT",reason:"visuallyComplete_noImages"}});var f=Math.max.apply(Math,X(p.map(function(t){return t.responseEnd||0})));return tp(tn(tn({},t),{},{imageTimings:p}),{constraint:tc,time:f});case"ADD_SUBSPAN":var d=t.startTime,m=n.payload,y=m.name,v=m.startTime,g=m.endTime,b=m.annotations,h=m.binaryAnnotations,S=m.parentId;return tn(tn({},t),{},{spans:[].concat(X(t.spans),[{name:y,id:(0,L.Z)(),startTime:v||d,endTime:g,annotationMap:tn({},b),binaryAnnotationMap:tn({},h),parentId:S}])});case"START_SUBSPAN":return tn(tn({},t),{},{spans:[].concat(X(t.spans),[{name:n.payload.name,id:(0,L.Z)(),startTime:F.Z?F.Z.now():0,endTime:1/0,annotationMap:tn({},n.payload.annotations),binaryAnnotationMap:tn({},n.payload.binaryAnnotations),parentId:n.payload.parentId}])});case"STOP_SUBSPAN":var T=t.spans.findIndex(function(t){return t.name===n.payload.name});return T>-1?(t.spans[T].endTime=F.Z?F.Z.now():0,n.payload.annotations&&(t.spans[T].annotationMap=tn(tn({},t.spans[T].annotationMap),n.payload.annotations)),n.payload.binaryAnnotations&&(t.spans[T].binaryAnnotationMap=tn(tn({},t.spans[T].binaryAnnotationMap),n.payload.binaryAnnotations))):(0,c.H)("invalid_subspan_stop_name",{name:n.payload.name}),t;default:var w=(0,o.KJ)(t.metricConfig.metricId);return(0,c.H)("invalid_pwt_surface_action",{action:w}),t}},tv=function(t){if(!t)return"initial_app_load";switch(t.action){case"PUSH":return"client_route_push";case"REPLACE":return"client_route_replace";default:return null}},tg=new Set,tb=function(t){var n=t.surface,e=t.constraints,o=t.segment,a=t.measureGridVisuallyComplete,c=t.annotateExperiments,s=t.customEnabledNavigationTypes,l=t.navigationInfo,p=l.clientNavigation,f=l.navigationType,d=t.sampleRate,m=(0,r.useRef)("NOT_SET"),y=(0,u.N5)(),v=V(ty,{status:"DISABLED",metricConfig:null}),g=v.getState,b=v.dispatch,h=(0,K.B)();if(m.current!==p&&(m.current=p,y)){var S=y.isAuthenticated,T=n&&f&&(s||ti).includes(f)?{metricId:{type:"surface",surface:n,navigationType:f,isAuthenticated:S,segment:o},annotateExperiments:c,constraints:[ta].concat(X(e||[]),X(a?[tc]:[])),pwtStaticContext:y}:null;(0,O.nP)("webapp.pwt_surface.init_route",{tags:{surface:n,navigationType:f,isAuthenticated:S}});var w=!tg.has(p);b({type:"INIT_ROUTE",payload:{metricConfig:T,startTime:p?p.time:0,isSampled:!d||Math.random()<d,disablePWTLogging:!w}}),w&&tg.add(p)}var A=g();if((0,r.useEffect)(function(){return function(){tg.delete(p)}},[p]),(0,r.useEffect)(function(){var t=function(t){b({type:"ABORT",reason:t})};i.Z.onSessionPause(t);var n=window.innerHeight,e=window.innerWidth,r=function t(){var r,i,o,a=Math.abs(window.innerHeight-n),c=Math.abs(window.innerWidth-e),s=window.innerHeight!==n,u=window.innerWidth!==e,l={handler:(0,W.H)(),deviceType:null!==(r=null==y?void 0:y.deviceType)&&void 0!==r?r:"unknown",isAuthenticated:null!==(i=null==y?void 0:y.isAuthenticated)&&void 0!==i?i:"unknown",platform:null!==(o=h.userAgent.platform)&&void 0!==o?o:"unknown"};if((0,O.nP)("webapp.PwtLogger.handleResize",{sampleRate:1,tags:tn(tn({},l),{},{heightChanged:s,widthChanged:u})}),s&&(0,O.S0)("webapp.PwtLogger.resizeHeightDelta",a,{sampleRate:1,tags:l}),u&&(0,O.S0)("webapp.PwtLogger.resizeWidthDelta",c,{sampleRate:1,tags:l}),window.removeEventListener("resize",t),(null==y?void 0:y.deviceType)==="phone"&&(!u&&s&&a<=150||!s&&!u)||(null==y?void 0:y.deviceType)==="desktop"&&!s&&!u){(0,O.nP)("webapp.PwtLogger.skipResizeAbort",{sampleRate:1,tags:tn(tn({},l),{},{heightChanged:s,widthChanged:u})});return}b({type:"ABORT",reason:"windowResized"})};return window.addEventListener("resize",r),function(){var n=g();to("handling unmount",n),"TIMING"===n.status&&ts(n,"unmount"),i.Z.removePauseListener(t),window.removeEventListener("resize",r)}},[]),"TIMING"!==A.status||!A.constraintMap[ta])return{state:A,context:null};var E=A.startTime,I=A.metricConfig;return{state:A,context:{abort:function(t){return b({type:"ABORT",reason:t})},addAnnotation:function(t){return b({type:"ANNOTATE",payload:{name:t}})},addBinaryAnnotation:function(t,n,e){return b({type:"BINARY_ANNOTATE",payload:{name:t,value:n,annotationType:e}})},addSubspan:function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return b({type:"ADD_SUBSPAN",payload:{name:t,startTime:n,endTime:e,annotations:r,binaryAnnotations:i,parentId:o}})},getId:function(){return E},getMetricId:function(){return I.metricId},markConstraintComplete:function(t){return b({type:"MARK_CONSTRAINT_COMPLETE",payload:{constraint:t,time:F.Z?F.Z.now():0}})},removeConstraint:function(t){return b({type:"REMOVE_CONSTRAINT",payload:t})},setSegment:function(t){return b({type:"SET_SEGMENT",payload:t})},setVisuallyCompleteResult:I.constraints.includes(tc)?function(t){return b({type:"SET_VISUALLY_COMPLETE_RESULT",payload:t})}:null,startSubspan:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return b({type:"START_SUBSPAN",payload:{name:t,annotations:n,binaryAnnotations:e,parentId:r}})},stopSubspan:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return b({type:"STOP_SUBSPAN",payload:{name:t,annotations:n,binaryAnnotations:e,parentId:r}})}}}},th=function(){var t=(0,l.E)(),n=!!t;(0,r.useEffect)(function(){if(n){var e=null==t?void 0:t.getMetricId(),r=e?(0,o.KJ)(e):null;(0,c.H)("nested_pwt_surface",{action:r})}},[n])};function tS(t){var n,e=t.children,r=q(t,Y),i=(0,u.fM)(),o=tv(i),a=r.measureGridVisuallyComplete?["web_masonry_v2_auth","web_masonry_v2_unauth"]:[],c=[].concat(X(null!==(n=r.annotateExperiments)&&void 0!==n?n:[]),a),s=tb(tn(tn({},r),{},{annotateExperiments:c,navigationInfo:{navigationType:o,clientNavigation:i}})).context;return th(),(0,J.jsx)(l.S,{value:s,children:e})}},371626:function(t,n){n.Z=function(t){switch(t){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";case"CA":return"CA";case"GB":return"GB";case"FR":return"FR";case"DE":return"DE";case"AU":return"AU";case"IN":return"IN";default:return"OTHER"}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/12127-be6fc7a0675a67c0.js.map