"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[71314],{471314:function(n,t,a){a.d(t,{Z:function(){return P}});var e=a(672652),r=a(342513),i=a(297329),o=a(862536),s=a(608029),c=a(107860),p=a(309300),u=a(521525),m=a(819281),d=a(793250),l=a(363404),b=a(840387),y=a(889998),f=a(59648),v=a(404373),g=a(970126);function T(n){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function A(n){return function(n){if(Array.isArray(n))return I(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||h(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,t){if(n){if("string"==typeof n)return I(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if("Object"===a&&n.constructor&&(a=n.constructor.name),"Map"===a||"Set"===a)return Array.from(n);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(n,t)}}function I(n,t){(null==t||t>n.length)&&(t=n.length);for(var a=0,e=Array(t);a<t;a++)e[a]=n[a];return e}function S(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),a.push.apply(a,e)}return a}function N(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach(function(t){w(n,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))})}return n}function w(n,t,a){var e;return(e=function(n,t){if("object"!==T(n)||null===n)return n;var a=n[Symbol.toPrimitive];if(void 0!==a){var e=a.call(n,t||"default");if("object"!==T(e))return e;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(t,"string"),(t="symbol"===T(e)?e:String(e))in n)?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var C=(0,s.XV)("PwtStopwatch"),O=function(n,t){if(g.Z){if("start"===t.type&&!n.isTiming){var a=t.name,e=t.startTime,r=t.navigationType;return(0,i.A9)("TIMING.".concat(a)),{isTiming:!0,name:a,isSampled:t.isSampled,startTime:"number"==typeof e?e:g.Z.now(),metricId:{type:"stopwatch",name:a,navigationType:r},pwtStaticContext:t.pwtStaticContext,annotations:n.annotations,binaryAnnotations:n.binaryAnnotations,spans:n.spans,traceId:n.traceId,spanNameUpdates:n.spanNameUpdates}}if(!n.isTiming){if(t.bypassIsTimingCheck)C("allowing action while stopwatch is not actively timing (bypassIsTimingCheck is set to true)",t);else{var o=t.name||n.name;return C("ignoring action - stopwatch is not actively timing",t),(0,i.A9)("WARN.".concat(o,".noTiming.").concat(t.type)),n}}if("annotate"===t.type){var s=g.Z.now();return C("adding annotation {".concat(t.label,": ").concat(s,"}")),N(N({},n),{},{annotations:n.annotations.concat([{label:t.label,timestamp:s}])})}if("binaryAnnotate"===t.type)return C("adding binary annotation {".concat(t.name,": ").concat(String(t.value),"}")),N(N({},n),{},{binaryAnnotations:N(N({},n.binaryAnnotations),w({},t.name,{value:t.value,type:t.annotationType}))});if("binaryAnnotateOperation"===t.type){var f=t.binaryAnnotationValueAndType,T=f.value,h=f.type;if(!n.binaryAnnotations[t.name])return N(N({},n),{},{binaryAnnotations:N(N({},n.binaryAnnotations),w({},t.name,{value:T,type:h}))});var I=n.binaryAnnotations[t.name].value||0;return C("operating on binary annotation {\n          name: ".concat(t.name,"\n          pervious value: ").concat(String(I),"\n          operand: ").concat(String(T),"\n        }")),N(N({},n),{},{binaryAnnotations:N(N({},n.binaryAnnotations),w({},t.name,{value:T?t.operation(I,T):I,type:h}))})}if("addSubspan"===t.type){C("adding subspan {".concat(t.name,"}")),-1!==n.spans.findIndex(function(n){return n.name===t.name})&&C("WARNING: adding duplicate subspan name {".concat(t.name,"}"));var S=t.id||(0,v.Z)();-1!==n.spans.findIndex(function(n){return n.id===S})&&C("WARNING: adding duplicate subspan id {".concat(t.name,": ").concat(S,"}"));var O=0;return t.startTime?O=t.startTime:n.startTime?O=n.startTime:C("WARNING: adding subspan {".concat(t.name,"} without start time")),N(N({},n),{},{spans:[].concat(A(n.spans),[{name:t.name,id:S,startTime:O,endTime:t.endTime||1/0,annotationMap:N({},t.annotations),binaryAnnotationMap:N({},t.binaryAnnotations),parentId:t.parentId}])})}if("subspanStart"===t.type){C("starting subspan {".concat(t.name,"}")),-1!==n.spans.findIndex(function(n){return n.name===t.name})&&C("WARNING: starting duplicate subspan name {".concat(t.name,"}"));var k,_=t.id||(0,v.Z)();-1!==n.spans.findIndex(function(n){return n.id===_})&&C("WARNING: starting duplicate subspan id {".concat(t.name,": ").concat(_,"}"));var P=t.parentName?null===(k=n.spans.find(function(n){return n.name===t.parentName}))||void 0===k?void 0:k.id:null;return N(N({},n),{},{spans:[].concat(A(n.spans),[{name:t.name,id:_,parentId:t.parentId||P,startTime:g.Z.now(),endTime:1/0,annotationMap:N({},t.annotations),binaryAnnotationMap:N({},t.binaryAnnotations)}])})}if("subspanStop"===t.type){C("stopping subspan {".concat(t.name,"}")),!t.id&&n.spans.reduce(function(n,a){return a.name===t.name?[].concat(A(n),[a]):n},[]).length>1&&(0,i.H)("duplicate_subspan_stop_name",{name:t.name,type:t.type});var j=t.id?n.spans.findIndex(function(n){return n.id===t.id}):n.spans.findIndex(function(n){return n.name===t.name});return j>-1?(n.spans[j].endTime=g.Z.now(),t.annotations&&(n.spans[j].annotationMap=N(N({},n.spans[j].annotationMap),t.annotations)),t.binaryAnnotations&&(n.spans[j].binaryAnnotationMap=N(N({},n.spans[j].binaryAnnotationMap),t.binaryAnnotations))):(0,i.H)("invalid_subspan_stop_name",{name:t.name}),n}if("subspanUpdateName"===t.type){n.spans.reduce(function(n,a){return a.name===t.currentName?[].concat(A(n),[a]):n},[]).length>1&&(0,i.H)("duplicate_subspan_stop_name",{name:t.currentName,type:t.type});var R=n.spans.findIndex(function(n){return n.name===t.currentName});return R>-1?t.updateWhenStopwatchCompletes?n.spanNameUpdates=[].concat(A(n.spanNameUpdates),[{currentName:t.currentName,newName:t.newName}]):(C("renaming subspan {".concat(t.currentName,"} to {").concat(t.newName,"}")),n.spans[R].name=t.newName):(0,i.H)("no_subspan_found_to_rename",{name:t.currentName}),n}if("stop"===t.type&&n.isTiming){var U=n.startTime,Z=n.metricId,M=n.pwtStaticContext,x=n.annotations,W=n.binaryAnnotations,E=n.isSampled,D=n.spans,B=n.traceId;if(t.stopwatchPerformanceObserver&&t.stopwatchPerformanceObserver.disconnect(),E){var H=t.stopTime||g.Z.now(),L=A(D.map(function(t){t.endTime===1/0&&(t.endTime=H);var a=n.spanNameUpdates.findIndex(function(n){return t.name===n.currentName});return a>-1&&(C("renaming subspan {".concat(t.name,"} to {").concat(n.spanNameUpdates[a].newName,"}")),t.name=n.spanNameUpdates[a].newName,n.spanNameUpdates=n.spanNameUpdates.filter(function(n){return n.newName!==t.name})),t}));if(t.manualAndResourceSpans||0===D.length){var G=(0,v.Z)();L.push.apply(L,[{name:"network_resources",id:G,startTime:U,endTime:H,annotationMap:{},binaryAnnotationMap:{},parentId:null}].concat(A((t.customStopwatchBuffer||[]).map(function(n){return(0,b.Z)((0,d.p)(n,[]),G)}).filter(Boolean))))}var V="initial_app_load"===Z.navigationType&&(0,m.Z)(),K={type:"COMPLETE",traceId:B,startTime:U,endTime:H,spans:L,annotationMap:N(N(N({},(0,y.Z)(x)),(0,p.jh)("browser_",V?(0,p.D3)(V):{})),(0,p.jh)("mark_",(0,c.gQ)())),binaryAnnotationMap:(0,u.ng)({metricId:Z,pwtStaticContext:M,binaryAnnotations:W,performanceResourceTimings:t.customStopwatchBuffer||[]})};(0,l.Z)({metricId:Z,pwtStaticContext:M,result:K})}return{isTiming:!1,name:n.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,v.Z)(),spanNameUpdates:[]}}if("error"===t.type){var Q=t.error,X=t.stopwatchPerformanceObserver;return Q&&(0,i.H)(Q),X&&X.disconnect(),{isTiming:!1,name:n.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,v.Z)(),spanNameUpdates:[]}}if("abort"===t.type&&n.isTiming){t.stopwatchPerformanceObserver&&t.stopwatchPerformanceObserver.disconnect();var $=n.metricId,q=n.pwtStaticContext,z=t.reason||"";return(0,l.Z)({metricId:$,pwtStaticContext:q,result:{type:"ABORT",reason:z}}),{isTiming:!1,name:n.name,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,v.Z)(),spanNameUpdates:[]}}}return n},k=function(n){var t,a=n.name,r=n.sampleRate,i=n.navigationType,s=n.manualAndResourceSpans,c=void 0!==s&&s,p=(0,o.N5)(),u=(0,e.useRef)([]),m=(0,e.useRef)(null),d=function(n){if(Array.isArray(n))return n}(t=(0,e.useReducer)(O,{isTiming:!1,name:a,annotations:[],binaryAnnotations:{},spans:[],traceId:(0,v.Z)(),spanNameUpdates:[]}))||function(n,t){var a=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=a){var e,r,i,o,s=[],c=!0,p=!1;try{if(i=(a=a.call(n)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(e=i.call(a)).done)&&(s.push(e.value),s.length!==t);c=!0);}catch(n){p=!0,r=n}finally{try{if(!c&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(p)throw r}}return s}}(t,2)||h(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=d[0],b=d[1];return p?{isTiming:l.isTiming,start:function(n){return window.PerformanceObserver&&(u.current=[],m.current=(0,f.Z)({entryTypes:["resource"]},function(n){u.current=u.current.concat(n.getEntries()),u.current.length>1e3&&(u.current=u.current.slice(-1e3))})),b({type:"start",startTime:n,name:a,navigationType:i,pwtStaticContext:p,isSampled:!r||Math.random()<r})},stop:function(n){return b({type:"stop",stopTime:n,stopwatchPerformanceObserver:m.current,customStopwatchBuffer:u.current,manualAndResourceSpans:c})},error:function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}(function(n){b({type:"error",stopwatchPerformanceObserver:m.current,error:n})}),abort:function(n){return b({type:"abort",stopwatchPerformanceObserver:m.current,customStopwatchBuffer:u.current,reason:n})},annotate:function(n,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b({type:"annotate",label:n,parentId:t,bypassIsTimingCheck:a})},binaryAnnotate:function(n,t,a,e){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return b({type:"binaryAnnotate",name:n,value:t,annotationType:a,parentId:e,bypassIsTimingCheck:r})},binaryAnnotateOperation:function(n){var t=n.name,a=n.binaryAnnotationValueAndType,e=n.operation,r=n.parentId,i=n.bypassIsTimingCheck;return b({type:"binaryAnnotateOperation",name:t,binaryAnnotationValueAndType:a,operation:e,parentId:r,bypassIsTimingCheck:void 0!==i&&i})},addSubspan:function(n){var t=n.name,a=n.startTime,e=n.endTime,r=n.annotations,i=n.binaryAnnotations,o=n.parentId,s=n.id,c=n.bypassIsTimingCheck;return b({type:"addSubspan",name:t,startTime:a,endTime:e,annotations:void 0===r?{}:r,binaryAnnotations:void 0===i?{}:i,parentId:void 0===o?null:o,id:void 0===s?null:s,bypassIsTimingCheck:void 0!==c&&c})},subspanStart:function(n){var t=n.name,a=n.annotations,e=n.binaryAnnotations,r=n.parentId,i=n.parentName,o=n.id,s=n.bypassIsTimingCheck;return b({type:"subspanStart",name:t,annotations:void 0===a?{}:a,binaryAnnotations:void 0===e?{}:e,parentId:void 0===r?null:r,parentName:void 0===i?null:i,id:void 0===o?null:o,bypassIsTimingCheck:void 0!==s&&s})},subspanStop:function(n){var t=n.name,a=n.annotations,e=n.binaryAnnotations,r=n.id,i=n.parentId,o=n.bypassIsTimingCheck;return b({type:"subspanStop",name:t,annotations:a,binaryAnnotations:e,id:r,parentId:i,bypassIsTimingCheck:void 0!==o&&o})},subspanUpdateName:function(n){var t=n.currentName,a=n.newName,e=n.bypassIsTimingCheck,r=n.updateWhenStopwatchCompletes;return b({type:"subspanUpdateName",currentName:t,newName:a,bypassIsTimingCheck:e,updateWhenStopwatchCompletes:void 0===r||r})},getSpans:function(n,t){return l.spans.filter(function(a){return a[n]===t})},getTraceId:function(){return l.traceId}}:null},_=a(819267),P=function(n){var t=n.name,a=n.sampleRate,s=n.abortOnUnloadOrClientNavigation,c=void 0===s||s,p=n.navigationType,u=n.manualAndResourceSpans,m=void 0!==u&&u,d=(0,r.Z)("Stopwatch_".concat(t)),l=d.Provider;return{Provider:function(n){var r=n.children,s=k({name:t,sampleRate:a,navigationType:p,manualAndResourceSpans:m}),u=(0,o.fM)(),d=u?u.time:0,b=(0,e.useRef)(!1),y=null==s?void 0:s.isTiming,f=(0,e.useCallback)(function(n){b.current?(b.current=!1,null==s||s.abort(n)):(0,i.A9)("WARN.".concat(t,".noTiming.abort"))},[s]),v=(0,e.useCallback)(function(n,t){null==s||s.annotate(n,t)},[s]),g=(0,e.useCallback)(function(n,t,a,e){null==s||s.binaryAnnotate(n,t,a,e)},[s]),T=(0,e.useCallback)(function(n){var t=n.name,a=n.binaryAnnotationValueAndType,e=n.operation,r=n.parentId,i=n.bypassIsTimingCheck;null==s||s.binaryAnnotateOperation({name:t,binaryAnnotationValueAndType:a,operation:e,parentId:r,bypassIsTimingCheck:i})},[s]),A=(0,e.useCallback)(function(n){var t=n.name,a=n.startTime,e=n.endTime,r=n.annotations,i=n.binaryAnnotations,o=n.parentId,c=n.id,p=n.bypassIsTimingCheck;null==s||s.addSubspan({name:t,startTime:a,endTime:e,annotations:r,binaryAnnotations:i,parentId:o,id:c,bypassIsTimingCheck:p})},[s]),h=(0,e.useCallback)(function(n){var t=n.name,a=n.annotations,e=n.binaryAnnotations,r=n.parentId,i=n.parentName,o=n.id,c=n.bypassIsTimingCheck;null==s||s.subspanStart({name:t,annotations:a,binaryAnnotations:e,parentId:r,parentName:i,id:o,bypassIsTimingCheck:c})},[s]),I=(0,e.useCallback)(function(n){var t=n.name,a=n.annotations,e=n.binaryAnnotations,r=n.id,i=n.parentId,o=n.bypassIsTimingCheck;null==s||s.subspanStop({name:t,annotations:a,binaryAnnotations:e,id:r,parentId:i,bypassIsTimingCheck:o})},[s]),S=(0,e.useCallback)(function(n){var t=n.currentName,a=n.newName,e=n.bypassIsTimingCheck,r=n.updateWhenStopwatchCompletes;null==s||s.subspanUpdateName({currentName:t,newName:a,bypassIsTimingCheck:e,updateWhenStopwatchCompletes:r})},[s]),N=(0,e.useCallback)(function(n,t){return s?s.getSpans(n,t):[]},[s]),w=(0,e.useCallback)(function(){return s?s.getTraceId():0},[s]),C=(0,e.useCallback)(function(n){b.current?(b.current=!1,null==s||s.error(n)):(0,i.A9)("WARN.".concat(t,".noTiming.error"))},[s]),O=(0,e.useCallback)(function(n){b.current&&(null==s||s.abort("duplicated_init_stopwatch_action")),b.current=!0,null==s||s.start(n)},[s]),P=(0,e.useCallback)(function(n){b.current?(b.current=!1,null==s||s.stop(n)):(0,i.A9)("WARN.".concat(t,".noTiming.stop"))},[s]);(0,e.useEffect)(function(){return function(){c&&f("unloadOrClientNavigation")}},[d]);var j=(0,e.useMemo)(function(){return{isTiming:y,abort:f,addAnnotation:v,addBinaryAnnotation:g,binaryAnnotationOperation:T,addSubspan:A,subspanStart:h,subspanStop:I,getSpans:N,getTraceId:w,updateSubspanName:S,stop:P,error:C,start:O}},[y,f,v,g,T,A,h,I,N,w,S,P,C,O]);return(0,_.jsx)(l,{value:j,children:r})},useHook:d.useMaybeHook}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/71314-0f34e60526c1c862.js.map