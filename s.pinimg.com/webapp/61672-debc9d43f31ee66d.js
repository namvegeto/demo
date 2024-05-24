"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[61672],{859721:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(328038),a=r(798580),o=r(19447);function i(){var e=(0,o.S6)(),t=(0,n.TH)();return function(r,n){var o,i,s,u=e(r);if(null!=n&&n.shouldTrackForPrevLocation){var c=(null==u?void 0:u.tracking_params_map)||{},l=Object.keys(c).find(function(e){return"PinResource"!==e});u&&(o=l?c[l]:c.PinResource)}else u&&(o=(0,a.Z)({boardUrl:null===(i=u.board)||void 0===i?void 0:i.url,location:t,pinId:u.id,pinnerUserName:null===(s=u.pinner)||void 0===s?void 0:s.username,storyPinDataId:u.story_pin_data_id,trackingParams:u.tracking_params,trackingParamsMap:u.tracking_params_map}));return o}}},161672:function(e,t,r){r.d(t,{i5:function(){return P},sX:function(){return j},aX:function(){return I},Z5:function(){return D},NG:function(){return M},MT:function(){return k},iu:function(){return U}});var n,a=r(672652),o=r(216167),i=r(859721),s=r(342513),u=r(638747),c=r(996523);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t,r){var n;return(n=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===l(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e,t){return e.data[t]&&e.data[t].messages||[]};function _(e,t){var r,n=new Map,a=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=v(e))){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}(e);try{for(a.s();!(r=a.n()).done;){var o=r.value;if(o){var i=t(o);if(n.has(i)){var s=(0,c.Z)(n.get(i),o);n.set(i,s)}else n.set(i,o)}}}catch(e){a.e(e)}finally{a.f()}return y(n.values())}function b(e){return y(e).sort(function(e,t){return new Date(e.created_ms||e.created_at)-new Date(t.created_ms||t.created_at)})}function O(e,t,r){return b(_(m(e,t).concat(r),function(e){return e.id}))}var g={conversationsUnseenCount:0,data:{},newsHubCount:0,open:null,objectAttachment:null,showConversationsDropdown:!1,showNewMessageView:!1,ui:{},unread:0};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;if("CONVERSATION_OPEN"===t.type)return f(f({},e),{},{open:t.payload.id,objectAttachment:null,showNewMessageView:!1,ui:f(f({},e.ui),{},p({},t.payload.id,{contactRequestId:t.payload.contactRequestId||"",isPreview:t.payload.isPreview}))});if("CONVERSATION_CLOSE"===t.type)return f(f({},e),{},{open:null,objectAttachment:null,showNewMessageView:!1,ui:f(f({},e.ui),{},p({},t.payload.id,{contactRequestId:t.payload.contactRequestId||"",isPreview:!1,isDeclined:t.payload.isDeclined}))});if("CONVERSATION_CREATE"===t.type){var r=t.payload.id;return f(f({},e),{},{data:f(f({},e.data),{},p({},r,f(f({},e.data[r]||{}),t.payload)))})}if("CONVERSATION_DELETE"===t.type){var n=f(f({},e),{},{data:f({},e.data)}),a=t.payload.id;return delete n.data[a],n}if("FETCH_COMPLETE"===t.type){var o=t.payload,i=o.options,s=o.resource,u=o.response.resource_response.data;if("ConversationMessagesResource"===s){var c=u||[],l=(null==i?void 0:i.conversation_id)||"",d=O(e,l,c),v=d[d.length-1];return f(f({},e),{},{data:f(f({},e.data),{},p({},l,f(f({},e.data[l]),{},{id:l,messages:d,unread:0,last_message:v})))})}if("ConversationsResource"===s){var E=u||[],C=f(f({},e),{},{data:f({},e.data)});return E.forEach(function(e){var t=e.id,r=e.created_at,n=e.name,a=e.board,o=e.emails,i=e.unread,s=e.users,u=e.last_message,c=O(C,t,[u]);C.data[t]=f(f({},C.data[t]),{},{id:t,created_at:r,name:n,board:a,emails:o||[],unread:i||0,users:s||[],last_message:u,messages:c})}),C}if("ConversationResource"===s){var S=u||{},N=S.id,A=f(f({},e),{},{data:f({},e.data)});return N&&(A.data[N]=f(f({},A.data[N]),S)),A}if("NewsHubBadgeResource"===s&&u){var h=u.conversations_unseen_count||0;return f(f({},e),{},{unread:h})}}else if("MESSAGE_SEND_PENDING"===t.type){var w=t.payload,T=w.id,R=w.message;if(e.data[T])return f(f({},e),{},{data:f(f({},e.data),{},p({},T,f(f({},e.data[T]),{},{id:T,messages:[].concat(y(e.data[T].messages),[R])})))})}else if("MESSAGE_SEND_PENDING_SUCCESS"===t.type){var D=t.payload,P=D.id,I=D.tempMessage,M=D.newMessage;if(e.data[P]&&m(e,P).find(function(e){return e.id===I.id&&e.created_ms===I.created_ms})){var j=b(_(m(e,P).filter(function(e){return e.id!==I.id}).concat([M]),function(e){return e.id}));return f(f({},e),{},{data:f(f({},e.data),{},p({},P,f(f({},e.data[P]),{},{last_message:M,messages:j})))})}}else if("MESSAGE_SEND_PENDING_FAILURE"===t.type){var k=t.payload,U=k.id,x=k.tempMessageId;if(e.data[U]){var V=m(e,U).filter(function(e){return e.id!==x});return f(f({},e),{},{data:f(f({},e.data),{},p({},U,f(f({},e.data[U]),{},{messages:V})))})}}else if("OPEN_NEW_MESSAGE"===t.type){var G=(t.payload||null).objectAttachment;return f(f({},e),{},{showNewMessageView:!0,open:null,objectAttachment:G})}else if("CLOSE_DROPDOWN"===t.type)return f(f({},e),{},{showConversationsDropdown:!1,objectAttachment:null,showNewMessageView:!1});else if("OPEN_DROPDOWN"===t.type)return f(f({},e),{},{showConversationsDropdown:!0});else if("UPDATE_NEWSHUB_COUNT"===t.type)return f(f({},e),{},{newsHubCount:t.payload});else if("UPDATE_UNREAD_COUNT"===t.type)return f(f({},e),{},{conversationsUnseenCount:t.payload});else if("CLEAR_MESSAGE_BADGE"===t.type){var L=t.payload.id;return f(f({},e),{},{data:f(f({},e.data),{},p({},L,f(f({},e.data[L]),{},{unread:0})))})}else if("CONVERSATION_SAVE_POSITION"===t.type){var H=t.payload,Z=H.id,B=H.position;return f(f({},e),{},{data:f(f({},e.data),{},p({},Z,f(f({},e.data[Z]),{},{position:B})))})}else if("CONVERSATION_RESET_POSITION"===t.type){var W=t.payload.id;return f(f({},e),{},{data:f(f({},e.data),{},p({},W,f(f({},e.data[W]),{},{position:null})))})}else if("SET_OBJECT_ATTACHMENT"===t.type){var q=t.payload.objectAttachment;return f(f({},e),{},{objectAttachment:q})}else if("REMOVE_OBJECT_ATTACHMENT"===t.type)return f(f({},e),{},{objectAttachment:null});return e}var S=r(819267);function N(e,t,r,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){r(e);return}s.done?t(u):Promise.resolve(u).then(n,a)}function A(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){N(o,n,a,i,s,"next",e)}function s(e){N(o,n,a,i,s,"throw",e)}i(void 0)})}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var w=(n=0,function(){return n++}),T=(0,s.Z)("Conversations"),R=T.Provider,D=T.useHook;function P(e){var t,r=e.children,n=function(e){if(Array.isArray(e))return e}(t=(0,a.useReducer)(C,g))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,s=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return s}}(t,2)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=n[0],s=n[1],c=(0,a.useCallback)(function(e){return s({type:"FETCH_COMPLETE",payload:e})},[]);(0,u.Z8)("ConversationMessagesResource",c),(0,u.my)("ConversationMessagesResource",c),(0,u.Z8)("ConversationsResource",c),(0,u.Z8)("ConversationResource",c),(0,u.Z8)("NewsHubBadgeResource",c);var l=(0,a.useCallback)(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return s({type:"CONVERSATION_OPEN",payload:{id:e,isPreview:t,contactRequestId:r}})},[]),d=(0,a.useCallback)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s({type:"CONVERSATION_CLOSE",payload:{id:e,contactRequestId:t,isDeclined:r}})},[]),f=(0,a.useCallback)(function(e){return s({type:"CONVERSATION_CREATE",payload:e})},[]),p=(0,a.useCallback)(function(e){return s({type:"CONVERSATION_DELETE",payload:{id:e}})},[]),y=(0,a.useCallback)(function(e,t){return s({type:"CONVERSATION_SAVE_POSITION",payload:{id:e,position:t}})},[]),v=(0,a.useCallback)(function(e){return s({type:"CONVERSATION_RESET_POSITION",payload:{id:e}})},[]),E=(0,a.useCallback)(function(e,t,r){o.Z.create("ConversationsResource",{user_ids:e,emails:t,text:""}).callCreate().then(function(e){s({type:"CONVERSATION_OPEN",payload:{id:(e&&e.resource_response.data).id}})}).catch(function(e){r(e.message_detail||e.message||"")})},[]),m=(0,a.useCallback)(function(){s({type:"CLOSE_DROPDOWN"})},[]),_=(0,a.useCallback)(function(){s({type:"OPEN_DROPDOWN"})},[]),b=(0,a.useCallback)(function(e){s({type:"OPEN_NEW_MESSAGE",payload:{objectAttachment:e}})},[]),O=(0,a.useCallback)(function(e,t){return s({type:"MESSAGE_SEND_PENDING",payload:{id:e,message:t}})},[]),N=(0,a.useCallback)(function(e,t,r){return s({type:"MESSAGE_SEND_PENDING_SUCCESS",payload:{id:e,tempMessage:t,newMessage:r}})},[]),A=(0,a.useCallback)(function(e,t){return s({type:"MESSAGE_SEND_PENDING_FAILURE",payload:{id:e,tempMessageId:t}})},[]),w=(0,a.useCallback)(function(e){return s({type:"UPDATE_NEWSHUB_COUNT",payload:e})},[]),T=(0,a.useCallback)(function(e){return s({type:"UPDATE_UNREAD_COUNT",payload:e})},[]),D=(0,a.useCallback)(function(e){return s({type:"CLEAR_MESSAGE_BADGE",payload:{id:e}})},[]),P=(0,a.useCallback)(function(e){return s({type:"SET_OBJECT_ATTACHMENT",payload:{objectAttachment:e}})},[]),I=(0,a.useCallback)(function(){return s({type:"REMOVE_OBJECT_ATTACHMENT"})},[]),M=(0,a.useMemo)(function(){return{clearMessageBadge:D,conversationOpen:l,conversationClose:d,conversationCreate:f,conversationDelete:p,conversationGet:E,saveConversationPosition:y,resetConversationPosition:v,dropdownClose:m,dropdownOpen:_,newMessageOpen:b,pendingMessageSend:O,pendingMessageSuccess:N,pendingMessageFailure:A,updateNewsHubCount:w,updateUnreadCount:T,conversations:i,setObjectAttachment:P,removeObjectAttachment:I}},[D,l,d,f,p,E,y,v,m,_,b,O,N,A,w,T,i,P,I]);return(0,S.jsx)(R,{value:M,children:r})}function I(){var e,t=D().conversationCreate;return e=A(regeneratorRuntime.mark(function e(r){var n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.Z.create("ConversationsResource",r),e.prev=1,e.next=4,a.callCreate();case 4:(i=e.sent.resource_response.data)&&(t(i),n=i),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),Error(e.t0.message);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}},e,null,[[1,9]])})),function(t){return e.apply(this,arguments)}}function M(){var e,t=D(),r=t.conversations,n=t.conversationCreate,a=t.pendingMessageSend,s=t.pendingMessageSuccess,u=t.pendingMessageFailure,c=(0,i.Z)();return e=A(regeneratorRuntime.mark(function e(t,i,l,d){var f,p,y,v,E,m,_,b,O;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(_=function(){return(_=A(regeneratorRuntime.mark(function e(){var r,n,i,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.Z.create("ConversationMessagesResource",{conversation_id:t,text:f,pin:p,board:y,user:v,user_did_it_data:E,source:l,client_tracking_params:c(null!=p?p:"")}),n="".concat(w()),a(t,i={text:f,sender:d,created_at:new Date().toString(),created_ms:Date.now(),id:n,type:"tempMessage"}),e.prev=4,e.next=7,r.callCreate();case 7:(m=e.sent.resource_response.data)&&s(t,i,m),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(4),u(t,n),Error(e.t0.message);case 16:case"end":return e.stop()}},e,null,[[4,12]])}))).apply(this,arguments)},m=function(){return _.apply(this,arguments)},f=i.text,p=i.pinId,y=i.boardId,v=i.userId,E=i.didItId,r.data[t]){e.next=21;break}return b=o.Z.create("ConversationResource",{conversation_id:t}),e.prev=5,e.next=8,b.callGet();case 8:if(!(O=e.sent.resource_response.data)){e.next=14;break}return n(O),e.next=14,m();case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(5),Error(e.t0.message);case 19:e.next=23;break;case 21:return e.next=23,m();case 23:case"end":return e.stop()}},e,null,[[5,16]])})),function(t,r,n,a){return e.apply(this,arguments)}}function j(e){return D().conversations.data[e]}function k(e){return D().conversations.ui[e]||{contactRequestId:"",isDeclined:!1,isPreview:!1}}function U(){var e;return Array.from(Object.keys(e=D().conversations.data).map(function(t){return e[t]}).filter(function(e){return e.users&&e.last_message})).sort(function(e,t){return new Date((t.last_message||t).created_at)-new Date((e.last_message||e).created_at)})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/61672-debc9d43f31ee66d.js.map