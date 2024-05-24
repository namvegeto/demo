(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8619],{320585:function(e,t,n){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/tv/studio/episodes/[episodeId]/control-room"]=function(){return n(886305).Z}},14583:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(672652),i=n(819267);function o(e){var t=e.children,n=e.fallback;return(0,i.jsx)(r.Suspense,{fallback:n||null,children:t})}},608516:function(e,t,n){"use strict";var r=n(14583);t.Z=r.Z},748058:function(e,t,n){"use strict";var r=n(672652);t.Z=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e},[e]),(0,r.useEffect)(function(){if(null===t)return function(){};var e=setInterval(function(){return n.current()},t);return function(){return clearInterval(e)}},[t])}},138503:function(e,t,n){"use strict";var r=n(412116),i=n(684404),o=n(608516),a=n(153053),s=n(819267),l=(0,r.ZP)({resolved:{},chunkName:function(){return"app-www-pinterestTv-creatorStudio-components-controlRoom-Video"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(58591),n.e(67065)]).then(n.bind(n,856920))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then(function(e){return t.resolved[n]=!0,e})},requireSync:function(e){return n(this.resolve(e))},resolve:function(){return 856920}});t.Z=function(){return(0,s.jsx)(i.xu,{color:"secondary",height:570,rounding:4,width:320,children:(0,s.jsx)(o.Z,{fallback:(0,s.jsx)(a.Z,{height:570,joining:!0,width:320}),children:(0,s.jsx)(l,{height:570,width:320})})})}},153053:function(e,t,n){"use strict";var r=n(684404),i=n(140017),o=n(871703),a=n(819267),s=["width","height"],l=function(){var e=(0,i.ZP)();return(0,a.jsxs)(r.kC,{alignItems:"center",direction:"column",gap:6,height:"100%",justifyContent:"center",children:[(0,a.jsx)(r.$j,{accessibilityLabel:"",delay:!1,show:!0,size:"sm"}),(0,a.jsxs)(r.kC,{alignItems:"center",direction:"column",gap:1,justifyContent:"center",children:[(0,a.jsx)(r.X6,{accessibilityLevel:3,size:"300",children:e._('Getting ready to go live', 'webapp.app.pinTv.creatorStudio.controlCenter.callStatus.joining.heading', 'Connecting to the camera stream')}),(0,a.jsx)(r.xv,{align:"center",children:e._('Connecting you to the stream preview', 'webapp.app.pinTv.creatorStudio.controlCenter.callStatus.joining.description', 'Additional text for connecting to the camera stream')})]})]})},c=function(){var e=(0,i.ZP)();return(0,a.jsxs)(r.kC,{alignItems:"center",direction:"column",gap:6,height:"100%",justifyContent:"center",children:[(0,a.jsx)(r.$j,{accessibilityLabel:"",delay:!1,show:!0,size:"sm"}),(0,a.jsxs)(r.kC,{alignItems:"center",direction:"column",gap:1,justifyContent:"center",children:[(0,a.jsx)(r.X6,{accessibilityLevel:3,size:"300",children:e._('Disconnecting for now', 'webapp.app.pinTv.creatorStudio.controlCenter.callLeaving.heading', 'leaving the stream heading')}),(0,a.jsx)(r.xv,{align:"center",children:e._('We couldn\'t find any connected cameras.', 'webapp.app.pinTv.creatorStudio.controlCenter.callLeaving.description', 'additional information for no cameras available')})]})]})},u=function(){var e=(0,i.ZP)();return(0,a.jsxs)(r.kC,{alignItems:"center",direction:"column",gap:6,height:"100%",justifyContent:"center",children:[(0,a.jsx)(r.$j,{accessibilityLabel:"",delay:!1,show:!0,size:"sm"}),(0,a.jsxs)(r.kC,{alignItems:"center",direction:"column",gap:1,justifyContent:"center",children:[(0,a.jsx)(r.X6,{accessibilityLevel:3,size:"300",children:e._('Preparing the stream', 'webapp.app.pinTv.creatorStudio.controlCenter.callInitial.heading', 'Initially joining the stream heading')}),(0,a.jsx)(r.xv,{align:"center",children:e._('You\'ll be able to add cameras soon.', 'webapp.app.pinTv.creatorStudio.controlCenter.callInitial.description', 'additional information for initializing the stream')})]})]})};t.Z=function(e){var t=e.width,n=e.height,i=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,s),d=null;return i.leaving&&(d=(0,a.jsx)(c,{})),i.joining&&(d=(0,a.jsx)(l,{})),i.initial&&(d=(0,a.jsx)(u,{})),(0,a.jsx)(r.xu,{color:"secondary",height:n,padding:4,rounding:4,width:t,children:(0,a.jsxs)(r.kC,{alignItems:"center",direction:"column",gap:2,height:"100%",justifyContent:"center",width:"100%",children:[(0,a.jsx)(r.kC.Item,{alignSelf:"start",flex:"none",children:(0,a.jsx)(o.Z,{})}),(0,a.jsx)(r.kC.Item,{flex:"grow",children:d})]})})}},871703:function(e,t,n){"use strict";var r=n(684404),i=n(140017),o=n(641016),a=n(819267);t.Z=function(){var e=(0,i.ZP)();return(0,a.jsx)(r.xu,{margin:2,children:(0,a.jsx)(r.X6,{size:o.Vr,children:e._('Preview', 'webapp.app.pinTv.creatorStudio.controlCenter.preview.heading', 'header for the preview section')})})}},435409:function(e,t,n){"use strict";var r=n(328038),i=n(684404),o=n(140017),a=n(60266),s=n(819267);t.Z=function(){var e=(0,o.ZP)(),t=(0,r.$B)().params.episodeId,n=new i.Ry(1e3);return(0,s.jsx)(i.I_,{accessibilityLabel:e._('Back to episode', 'webapp.app.pinTv.creatorStudio.navigation.backToEpisode', 'Back to Pinterest TV Episode'),href:(0,a.Z)("EPISODE",t||""),icon:"arrow-back",iconColor:"darkGray",size:"sm",tooltip:{idealDirection:"up",text:e._('Back to episode', 'webapp.app.pinTv.creatorStudio.navigation.backToEpisode', 'Back to Pinterest TV Episode'),zIndex:n}})}},535746:function(e,t,n){"use strict";var r=n(684404),i=n(140017),o=n(60266),a=n(331430),s=n(819267);t.Z=function(){var e=(0,a.F)().data,t=(0,i.ZP)(),n=(0,o.Z)("EPISODE",null==e?void 0:e.id);return(0,s.jsx)(r.ZP,{color:"gray",href:n,text:t._('Details', 'webapp.app.pinTv.creatorStudio.navigation.details', 'details button')})}},638512:function(e,t,n){"use strict";var r=n(684404),i=n(140017),o=n(736561),a=n(60266),s=n(331430),l=n(819267);t.Z=function(){var e=(0,s.F)().data,t=(0,i.ZP)(),n=(0,a.Z)("EPISODE_INSIGHTS",null==e?void 0:e.id);return(null==e?void 0:e.live_status)!==o.Ct.POST_LIVE?null:(0,l.jsx)(r.ZP,{color:"red",href:n,text:t._('Insights', 'webapp.app.pinTv.creatorStudio.navigation.insights', 'insights button')})}},101139:function(e,t,n){"use strict";n.d(t,{H:function(){return h},M:function(){return p}});var r=n(672652),i=n(684404),o=n(342513),a=n(140017),s=n(339001),l=n(819267);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var u=(0,o.Z)("BrowserNotSupported"),d=u.Provider,h=u.useMaybeHook,p=function(e){var t,n=e.children,o=function(e){if(Array.isArray(e))return e}(t=(0,r.useState)(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(t,2)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=o[0],h=o[1],p=(0,a.ZP)(),f=(0,r.useCallback)(function(e){return h(e)},[]),_=(0,r.useMemo)(function(){return{browserNotSupported:u,setBrowserNotSupported:f}},[u,f]);return(0,l.jsx)(d,{value:_,children:u?(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{marginTop:"5%"}},marginEnd:"auto",marginStart:"auto",maxWidth:"50%",minHeight:"80vh",children:(0,l.jsxs)(i.kC,{alignItems:"center",direction:"column",gap:6,children:[(0,l.jsx)(i.JO,{accessibilityLabel:"",color:"error",icon:"alert",size:52}),(0,l.jsx)(i.X6,{size:"500",children:p._('Oh no! Your browser is not supported', 'webapp.app.pinTv.creatorStudio.notSupportedError.heading', 'header for browser not supported page')}),(0,l.jsx)(i.xv,{align:"center",children:(0,s.nk)(p._('Make sure you\'re using one of our recommended browsers ({{linkChrome}}, {{linkFirefox}} or {{linkEdge}}) and check our troubleshooting steps below.', 'webapp.app.pinTv.creatorStudio.notSupportedError.subHeading', 'sub header for browser not supported page, linkChrome: link to google chrome download, linkFirefox: link to firefox download, linkEdge: link to microsoft edge download'),{linkChrome:(0,l.jsx)(i.rU,{display:"inlineBlock",href:"https://www.google.com/chrome/dr/download/",target:"blank",children:"Chrome"}),linkFirefox:(0,l.jsx)(i.rU,{display:"inlineBlock",href:"https://www.mozilla.org/en-US/firefox/new/",target:"blank",children:"Firefox"}),linkEdge:(0,l.jsx)(i.rU,{display:"inlineBlock",href:"https://www.microsoft.com/en-us/edge",target:"blank",children:"Microsoft Edge"})})}),(0,l.jsxs)(i.kC,{direction:"column",gap:2,maxWidth:550,children:[(0,l.jsxs)(i.kC,{alignItems:"center",direction:"row",gap:{row:2,column:0},children:[(0,l.jsx)(i.JO,{accessibilityLabel:"",icon:"lightbulb",size:12}),(0,l.jsx)(i.xv,{size:"200",children:p._('Update your browser to the latest version.', 'webapp.app.pinTv.creatorStudio.notSupportedError.tipOne', 'tip for a user to try')})]}),(0,l.jsxs)(i.kC,{alignItems:"center",direction:"row",gap:{row:2,column:0},children:[(0,l.jsx)(i.JO,{accessibilityLabel:"",icon:"lightbulb",size:12}),(0,l.jsx)(i.xv,{size:"200",children:p._('Clear your cache and cookies to remove any temporary files that may be causing issues.', 'webapp.app.pinTv.creatorStudio.notSupportedError.tipTwo', 'tip for a user to try')})]})]})]})}):n})}},886305:function(e,t,n){"use strict";n.d(t,{Z:function(){return eE}});var r,i,o,a,s,l,c,u,d=n(672652),h=n(328038),p=n(946445),f=n(483092),_=n(684404),m=n(140017),g=n(339001),v=n(340523),b=n(5859),x=n(164212),y=n(568378),j=n(342513),w=n(331430),S=n(107366);function P(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}var A=(r=regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.episodeId,r=t.chatEnabled,e.next=3,(0,S.Z)({url:"/v3/livestreams/toggle_chat/",method:"PUT",data:{chat_enabled:r,creator_class_instance:n}});case 3:if(!(i=e.sent.resource_response)){e.next=7;break}return e.abrupt("return",i.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}),i=function(){var e=this,t=arguments;return new Promise(function(n,i){var o=r.apply(e,t);function a(e){P(o,n,i,a,s,"next",e)}function s(e){P(o,n,i,a,s,"throw",e)}a(void 0)})},function(e){return i.apply(this,arguments)}),C=n(819267);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var E=(0,j.Z)("ChatDisabled"),z=E.Provider,O=E.useHook,T=function(e){var t,n=e.children,r=(0,w.F)().data,i=function(e){if(Array.isArray(e))return e}(t=(0,d.useState)(!0))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(t,2)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=i[0],a=i[1],s=(0,d.useCallback)(function(e){a(e)},[]),l=(0,d.useCallback)(function(){null!=r&&r.id&&(A({episodeId:r.id,chatEnabled:!o}),s(!o))},[r,o,s]),c=(0,d.useMemo)(function(){return{chatEnabled:o,toggleChatEnabled:l,handleToggleChatEvent:s}},[o,l,s]);return(0,C.jsx)(z,{value:c,children:n})},k=n(995917),Z=n(748058),D=function(){var e=(0,m.ZP)();return(0,C.jsxs)(_.kC,{alignItems:"center",direction:"column",height:"100%",justifyContent:"center",width:"100%",children:[(0,C.jsx)(_.xu,{children:(0,C.jsx)(_.JO,{accessibilityLabel:"",color:"default",icon:"speech",size:"24"})}),(0,C.jsx)(_.xu,{marginTop:6,children:(0,C.jsx)(_.X6,{accessibilityLevel:3,size:"400",children:e._('Chat disabled', 'webapp.app.pinTv.creatorStudio.session.controller.chat.disabled.heading.newVersion', 'header for label if chat is disabled')})}),(0,C.jsx)(_.xu,{marginTop:2,paddingX:12,children:(0,C.jsx)(_.xv,{align:"center",color:"subtle",children:e._('Chat has been disabled for this episode and is no longer visible to your audience', 'webapp.app.pinTv.creatorStudio.session.controller.chat.disabled.description.newVersion', 'description if chat is disabled')})})]})},R=n(205841),L={NOT_HIDDEN:0,USER_MUTED:3,MODERATOR_HIDE:9},H=["livestreamchatmessage","livestreamhidemessage","livestreamunhidemessage","livestreamtogglecomment"];function M(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}function N(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){M(o,r,i,a,s,"next",e)}function s(e){M(o,r,i,a,s,"throw",e)}a(void 0)})}}var U=(o=N(regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.hiddenReason,r=t.messageId,e.next=3,(0,S.Z)({url:"/v3/livestream/messages/".concat(r,"/"),method:"PUT",data:{hidden_for:L[n]}});case 3:if(!(i=e.sent.resource_response)){e.next=7;break}return e.abrupt("return",i.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)})),function(e){return o.apply(this,arguments)}),F=(a=N(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.messageId,e.abrupt("return",U({messageId:n,hiddenReason:"NOT_HIDDEN"}));case 2:case"end":return e.stop()}},e)})),function(e){return a.apply(this,arguments)}),B=function(e){var t=e.message,n=e.isHidden,r=e.toggleHidden,i=(0,m.ZP)();if(!t)return null;var o=t.id;return void 0!==n&&n?(0,C.jsx)(_.iP,{onTap:function(){F({messageId:o}).then(function(){return r(o)})},children:(0,C.jsx)(_.xv,{color:"default",inline:!0,size:"100",weight:"bold",children:i._('Unhide comment', 'webapp.app.pinTv.creatorStudio.episode.controlRoom.chat.unhideComment', 'button about unhiding a comment')})}):(0,C.jsx)(_.iP,{onTap:function(){U({messageId:o,hiddenReason:"MODERATOR_HIDE"}).then(function(){return r(o)})},children:(0,C.jsx)(_.xv,{color:"shopping",inline:!0,size:"100",weight:"bold",children:i._('Hide comment', 'webapp.app.pinTv.creatorStudio.episode.controlRoom.chat.hideComment', 'button about hiding a comment')})})};function V(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}var X=(s=regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.episodeId,e.next=3,(0,S.Z)({url:"/v3/livestream/users/".concat(n,"/muted/"),method:"PUT",data:{creator_class_instance:r}});case 3:if(!(i=e.sent.resource_response)){e.next=7;break}return e.abrupt("return",i.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}),l=function(){var e=this,t=arguments;return new Promise(function(n,r){var i=s.apply(e,t);function o(e){V(i,n,r,o,a,"next",e)}function a(e){V(i,n,r,o,a,"throw",e)}o(void 0)})},function(e){return l.apply(this,arguments)});function $(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){n(e);return}s.done?t(l):Promise.resolve(l).then(r,i)}var W=(c=regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.episodeId,e.next=3,(0,S.Z)({url:"/v3/livestream/users/".concat(n,"/muted/"),method:"DELETE",data:{creator_class_instance:r}});case 3:if(!(i=e.sent.resource_response)){e.next=7;break}return e.abrupt("return",i.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}),u=function(){var e=this,t=arguments;return new Promise(function(n,r){var i=c.apply(e,t);function o(e){$(i,n,r,o,a,"next",e)}function a(e){$(i,n,r,o,a,"throw",e)}o(void 0)})},function(e){return u.apply(this,arguments)}),Y=function(e){var t,n,r=e.message,i=e.isHidden,o=e.toggleHidden,a=(0,m.ZP)(),s=(0,w.F)().data,l=null==s?void 0:s.id;if(!r)return null;var c=r.id,u=null!==(t=null===(n=r.data.sender)||void 0===n?void 0:n.id)&&void 0!==t?t:"";return void 0!==i&&i?(0,C.jsx)(_.iP,{onTap:function(){l&&W({userId:u,episodeId:l}).then(function(){return o(c)})},children:(0,C.jsx)(_.xv,{color:"default",inline:!0,size:"100",weight:"bold",children:a._('Unmute user', 'webapp.app.pinTv.creatorStudio.episode.controlRoom.chat.unmuteUser', 'button for unmuting user')})}):(0,C.jsx)(_.iP,{onTap:function(){l&&X({userId:u,episodeId:l}).then(function(){return o(c)})},children:(0,C.jsx)(_.xv,{color:"shopping",inline:!0,size:"100",weight:"bold",children:a._('Mute user', 'webapp.app.pinTv.creatorStudio.episode.controlRoom.chat.muteUser', 'button about muting user')})})},G=["id"],J=function(e){var t=e.senderId,n=e.creatorId;return n&&n===t?"success":"default"},q=function(e){var t,n,r=e.message,i=e.messageFocused,o=e.creatorId,a=e.onUserHidden,s=e.onMessageHidden,l=e.onMessageFocused,c=(0,b.B)().locale,u=(0,w.F)().data,d=null==u?void 0:u.id;if("livestreamchatmessage"!==r.message_type||r.hidden_for&&0!==r.hidden_for)return null;var h=r.data.sender,p=h.id,f=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(h,G),m=J({senderId:p,creatorId:o}),g=r.sender_hide&&"pinsubuserhide"===r.sender_hide.type&&(null===(t=r.sender_hide.message_type_hide_objects)||void 0===t?void 0:null===(n=t.livestreamchatmessage)||void 0===n?void 0:n.includes(d)),v=g||r.hidden_for!==L.NOT_HIDDEN;return(0,C.jsx)(_.iP,{onTap:function(){return l(r.id)},children:(0,C.jsx)(_.xu,{dangerouslySetInlineStyle:{__style:{paddingRight:0}},marginBottom:4,paddingX:4,children:(0,C.jsxs)(_.kC,{direction:"row",gap:2,width:"100%",children:[(0,C.jsxs)(_.xu,{height:32,position:"relative",width:32,children:[(0,C.jsx)(_.xu,{height:"100%",left:!0,overflow:"hidden",position:"absolute",rounding:"circle",top:!0,width:"100%",children:(0,C.jsx)(_.xu,{dangerouslySetInlineStyle:{__style:g?{filter:"blur(2px)"}:{}},height:"100%",width:"100%",children:(0,C.jsx)(R.qE,{name:f.full_name,size:"fit",src:f.image_medium_url})})}),g&&(0,C.jsx)(_.xu,{height:"100%",left:!0,position:"absolute",top:!0,width:"100%",children:(0,C.jsx)(_.xu,{alignItems:"center",direction:"column",display:"flex",height:"100%",justifyContent:"center",rounding:"circle",width:"100%",children:(0,C.jsx)(_.JO,{accessibilityLabel:"",color:"inverse",icon:"mute",size:16})})})]}),(0,C.jsx)(_.kC.Item,{flex:"grow",children:(0,C.jsxs)(_.kC,{direction:"column",gap:1,children:[(0,C.jsxs)(_.kC,{direction:"row",gap:2,justifyContent:"between",children:[(0,C.jsx)(_.xv,{color:m,size:"100",weight:"bold",children:f.full_name||f.first_name||f.username}),(0,C.jsx)(_.kC.Item,{flex:"none",children:(0,C.jsx)(_.xv,{color:"subtle",size:"100",children:new Date(r.timestamp_nanos/1e6).toLocaleString(c,{timeStyle:"short"})})})]}),(0,C.jsx)(_.xv,{color:v?"subtle":"default",size:"200",children:r.data.text}),void 0!==i&&i&&(0,C.jsxs)(_.kC,{direction:"row",gap:1,children:[(0,C.jsx)(B,{isHidden:r.hidden_for!==L.NOT_HIDDEN,message:r,toggleHidden:s}),(0,C.jsx)(_.xv,{inline:!0,size:"100",weight:"bold",children:"∙"}),(0,C.jsx)(Y,{isHidden:g,message:r,toggleHidden:a})]})]})})]})})})},K=function(){var e=(0,m.ZP)();return(0,C.jsxs)(_.kC,{alignItems:"center",direction:"column",height:"100%",justifyContent:"center",width:"100%",children:[(0,C.jsx)(_.xu,{children:(0,C.jsx)(_.JO,{accessibilityLabel:"",color:"default",icon:"speech-ellipsis",size:"24"})}),(0,C.jsx)(_.xu,{marginTop:6,children:(0,C.jsx)(_.X6,{accessibilityLevel:3,size:"400",children:e._('No activity', 'webapp.app.pinTv.creatorStudio.session.controller.chat.none.heading.newVersion', 'header for label if there is no chat messages')})}),(0,C.jsx)(_.xu,{marginTop:2,paddingX:12,children:(0,C.jsx)(_.xv,{align:"center",color:"subtle",children:e._('You will see comments once your episode goes live', 'webapp.app.pinTv.creatorStudio.session.controller.chat.none.description.newVersion', 'description if there is no chat messages')})})]})};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var ee=function(e){var t,n=e.pinSubTopic,r=e.refetchChats,i=(0,m.ZP)(),o=function(e){if(Array.isArray(e))return e}(t=(0,d.useState)(""))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(t,2)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=o[0],s=o[1],l=O().chatEnabled,c=function(){null!=n&&n.id&&(0,S.Z)({url:"/v3/livestreams/pinsub/".concat(n.id,"/chats/"),method:"POST",data:{text:a}}).then(function(){s(""),r&&r()})};return null!=n&&n.id?(0,C.jsxs)("form",{onSubmit:function(e){c(),e.preventDefault()},style:{opacity:l?1:.5},children:[(0,C.jsx)(_.iz,{}),(0,C.jsx)(_.xu,{margin:4,children:(0,C.jsxs)(_.kC,{alignItems:"center",gap:{row:4,column:0},children:[(0,C.jsx)(_.kC.Item,{flex:"grow",children:(0,C.jsx)("input",{disabled:!l,id:"chat-comment",onChange:function(e){return s(e.target.value)},placeholder:i._('Say something', 'webapp.app.pinTv.creatorStudio.episode.controller.chat.sendPlaceholder.newVersion', 'placeholder message input to reply to chat'),style:{width:"100%",border:"none",height:"100%",fontSize:"16px",background:"none"},type:"text",value:a})}),(0,C.jsx)(_.hU,{accessibilityLabel:i._('Send message', 'webapp.app.pinTv.creatorStudio.episode.controller.chat.sendMessage', 'send chat message accessibility label'),bgColor:"lightGray",disabled:0===a.length||!l,icon:"directional-arrow-right",padding:2,size:"md",type:"submit"})]})})]}):null};function et(e){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function en(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function er(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?en(Object(n),!0).forEach(function(t){ei(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):en(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ei(e,t,n){var r;return(r=function(e,t){if("object"!==et(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==et(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===et(r)?r:String(r))in e)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eo(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(e,t)||ea(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ea(e,t){if(e){if("string"==typeof e)return es(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return es(e,t)}}function es(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var el=function(){var e,t,n=eo((0,d.useState)(!1),2),r=n[0],i=n[1],o=eo((0,d.useState)([]),2),a=o[0],s=o[1],l=eo((0,d.useState)({}),2),c=l[0],u=l[1],h=eo((0,d.useState)(),2),p=h[0],f=h[1],m=eo((0,d.useState)(0),2),g=m[0],v=m[1],b=eo((0,d.useState)(1e3),2),x=b[0],y=b[1],j=(0,w.F)().data,S=O(),P=S.chatEnabled,A=S.handleToggleChatEvent,I=(0,d.useRef)(null),E=(0,d.useRef)(null),z=null==j?void 0:j.id,T=null==j?void 0:null===(e=j.creator_class)||void 0===e?void 0:null===(t=e.creator)||void 0===t?void 0:t.id,R=null==j?void 0:j.pinsub_topic,M=function(e){var t=c[e];t&&(t.hidden_for&&0!==t.hidden_for?u(er(er({},c),{},ei({},e,er(er({},t),{},{hidden_for:L.NOT_HIDDEN})))):u(er(er({},c),{},ei({},e,er(er({},t),{},{hidden_for:L.MODERATOR_HIDE})))))},N=function(e){var t,n,r=c[e];r.sender_hide&&"pinsubuserhide"===r.sender_hide.type&&(null===(t=r.sender_hide.message_type_hide_objects)||void 0===t?void 0:null===(n=t.livestreamchatmessage)||void 0===n?void 0:n.includes(z))?u(er(er({},c),{},ei({},e,er(er({},r),{},{sender_hide:{type:"pinsubuserhide",message_type_hide_objects:{livestreamchatmessage:[]}}})))):u(er(er({},c),{},ei({},e,er(er({},r),{},{sender_hide:{type:"pinsubuserhide",message_type_hide_objects:{livestreamchatmessage:[z]}}}))))},U=(0,k.Z)({name:"ApiResource",options:{url:"/v3/pinsub/topics/".concat(R&&R.id||"","/messages/"),data:{ascending:!0,page_size:50,min_timestamp_nanos:g,add_fields:"pinsubmessage.{id,type,message_type,data,timestamp_nanos,hidden_for,sender_hide(),pinsub_topic()}"}}}),F=U.refresh,B=U.isAtEnd,V=U.fetchMore,X=U.isFetching,$=U.data;(0,d.useEffect)(function(){if($){var e=$.filter(function(e){return H.includes(e.message_type)&&!c[e.id]});if(0===e.length&&B&&y(function(e){return Math.min(1e4,e+1e3)}),e.length>0){s(a.concat(e.map(function(e){return e.id})));var t,n=er({},c),r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ea(e))){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;if("livestreamtogglecomment"===i.message_type&&A(i.data.comment_enabled),"livestreamhidemessage"===i.message_type||"livestreamunhidemessage"===i.message_type){var o=i.data,l=o.message_id,d=o.type,h=n[l];h&&(n=er(er({},n),{},ei({},l,er(er({},h),{},{hidden_for:"livestreamhidemessage"===d?L.MODERATOR_HIDE:L.NOT_HIDDEN}))))}n=er(er({},n),{},ei({},i.id,i))}}catch(e){r.e(e)}finally{r.f()}u(n),y(1e3)}B||V(),B&&a&&a.length>0&&v(c[a.slice(-1)[0]].timestamp_nanos+1e3)}},[$,A,a,c,B,V]);var W=function(){E.current&&I.current&&E.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})};return((0,d.useEffect)(function(){E.current&&a.length>4&&!r&&W()},[E,a,r]),(0,d.useEffect)(function(){var e=I.current,t=function(){i(!0)},n=function(){i(!1),W()};return e&&(e.addEventListener("mouseenter",t),e.addEventListener("mouseleave",n)),function(){e&&(e.removeEventListener("mouseenter",t),e.removeEventListener("mouseleave",n))}},[I]),(0,Z.Z)(function(){p||(i(!1),W())},r?1e4:null),(0,d.useEffect)(function(){p&&i(!0)},[p]),(0,Z.Z)(function(){f(),W(),i(!1)},p?6e4:null),(0,Z.Z)(function(){B&&!X&&F()},x),P)?0!==a.length&&a.some(function(e){return"livestreamchatmessage"===c[e].message_type})?(0,C.jsxs)(_.kC,{direction:"column",height:"100%",justifyContent:"center",children:[(0,C.jsx)(_.kC.Item,{flex:"grow",children:(0,C.jsx)(_.kC,{direction:"column",height:"100%",justifyContent:"end",children:(0,C.jsxs)(_.xu,{ref:I,dangerouslySetInlineStyle:{__style:{background:"\n                /* Shadow covers */\n                linear-gradient(white 30%, rgba(255, 255, 255, 0)),\n                linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,\n                /* Shadows */\n                radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)),\n                radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%\n              ",backgroundRepeat:"no-repeat",backgroundSize:"100% 40px, 100% 40px, 100% 14px, 100% 14px",backgroundAttachment:"local, local, scroll, scroll"}},direction:"column",display:"flex",flex:"shrink",justifyContent:"start",maxHeight:"100%",overflow:"scrollY",position:"relative",width:"100%",children:[a.map(function(e){return(0,C.jsx)(q,{creatorId:T,message:c[e],messageFocused:p===e,onMessageFocused:function(e){return f(e)},onMessageHidden:M,onUserHidden:N},"chat_message_".concat(e))}),(0,C.jsx)(_.xu,{ref:E,width:"100%"})]})})}),(0,C.jsx)(_.kC.Item,{flex:"none",children:(0,C.jsx)(ee,{pinSubTopic:R,refetchChats:F})})]}):(0,C.jsxs)(_.kC,{direction:"column",height:"100%",justifyContent:"center",children:[(0,C.jsx)(_.kC.Item,{flex:"grow",children:(0,C.jsx)(K,{})}),(0,C.jsx)(_.kC.Item,{flex:"none",children:(0,C.jsx)(ee,{pinSubTopic:R,refetchChats:F})})]}):(0,C.jsxs)(_.kC,{direction:"column",height:"100%",justifyContent:"center",children:[(0,C.jsx)(_.kC.Item,{flex:"grow",children:(0,C.jsx)(D,{})}),(0,C.jsx)(_.kC.Item,{flex:"none",children:(0,C.jsx)(ee,{pinSubTopic:R,refetchChats:F})})]})};function ec(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var eu=function(){var e,t=(0,m.ZP)(),n=function(e){if(Array.isArray(e))return e}(e=(0,d.useState)(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(e,2)||function(e,t){if(e){if("string"==typeof e)return ec(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ec(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=n[0],i=n[1],o=O(),a=o.chatEnabled,s=o.toggleChatEnabled;return(0,C.jsx)(_.xu,{marginTop:6,children:(0,C.jsx)(_.iP,{onBlur:function(){return i(!1)},onFocus:function(){return i(!0)},onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},onTap:s,children:(0,C.jsx)(_.kC,{direction:"row",justifyContent:"center",children:(0,C.jsx)(_.xv,{color:"shopping",size:"100",underline:r,children:a?t._('Disable chat', 'webapp.app.pinTV.creatorStudio.controlCenter.chat.disableChat', 'text button to disable chat'):t._('Enable chat', 'webapp.app.pinTV.creatorStudio.controlCenter.chat.enableChat', 'text button to enable chat')})})})})},ed=n(641016),eh=function(){var e=(0,m.ZP)();return(0,C.jsxs)(T,{children:[(0,C.jsx)(_.xu,{borderStyle:"shadow",height:570,rounding:4,width:320,children:(0,C.jsxs)(_.kC,{alignItems:"stretch",direction:"column",height:"100%",justifyContent:"start",width:"100%",children:[(0,C.jsx)(_.kC.Item,{flex:"none",children:(0,C.jsx)(_.xu,{margin:6,children:(0,C.jsx)(_.X6,{accessibilityLevel:2,size:ed.Vr,children:e._('Chat', 'webapp.app.pinTv.creatorStudio.controlCenter.chat.heading', 'header for the chat section')})})}),(0,C.jsx)(_.kC.Item,{flex:"grow",children:(0,C.jsx)(el,{})})]})}),(0,C.jsx)(eu,{})]})},ep=n(291262),ef=n(138503),e_=n(101139),em=n(668113),eg=function(){return(0,C.jsx)(e_.M,{children:(0,C.jsx)(em.u,{children:(0,C.jsx)(_.xu,{height:"80vh",marginTop:8,minHeight:600,children:(0,C.jsxs)(_.kC,{direction:"row",gap:8,height:"100%",justifyContent:"center",children:[(0,C.jsx)(eh,{}),(0,C.jsx)(ef.Z,{}),(0,C.jsx)(ep.Z,{})]})})})})},ev=n(435409),eb=n(535746),ex=n(638512),ey=n(788095),ej=n(139972),ew=n(502187),eS=n(60266),eP=n(991154),eA=n(802021),eC=n(53978),eI=function(){var e,t=(0,h.k6)().push,n=(0,m.ZP)(),r=(0,w.F)().data,i=(0,v.F)().checkExperiment,o=r||{},a=o.title,s=o.starts_at,l=void 0===s?"":s,c=o.live_status,u=void 0===c?1:c,d=o.ends_at,b=void 0===d?"":d,x=o.id,y=(null==r?void 0:null===(e=r.canonical_pin)||void 0===e?void 0:e.id)||"",j=u===ed.Ct.LIVE;b&&x&&u===ed.Ct.POST_LIVE&&(0,p.Z)(new Date,new Date(b))>=30&&t("/tv/studio/episodes/".concat(x,"/insights/"));var S=j?(0,C.jsx)(_.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"red",width:"fit-content",whiteSpace:"nowrap"}},paddingX:3,paddingY:2,rounding:"pill",children:(0,C.jsx)(_.xv,{color:"light",inline:!0,size:"300",weight:"bold",children:n._('Live', 'creatorStudio.session.nav.liveNow.text', 'Text indicating the live status')})}):(0,C.jsx)(_.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#FFFEBB",width:"fit-content",whiteSpace:"nowrap"}},paddingX:3,paddingY:2,rounding:"pill",children:(0,C.jsx)(_.xv,{inline:!0,size:"300",weight:"bold",children:(0,C.jsx)(ew.Z,{time:l})})});return(0,C.jsx)(ey.Z,{actions:[(0,C.jsx)(ej.Z,{},"save-status-message"),(0,C.jsx)(eb.Z,{},"episode-details-button"),(0,C.jsx)(ex.Z,{},"episode-insights-button")],backButton:(0,C.jsx)(ev.Z,{}),badge:i("pinterest_tv_design_revamp_control_room").anyEnabled?void 0:S,pageTitle:void 0===a?"":a,pageType:"EPISODE_CONTROL_ROOM",shareLink:"https://www.pinterest.com/tv/".concat(y),subTitle:l&&b&&(0,g.Wc)(n._('{{ formattedDate }} at {{ formattedTime }} - {{ formattedEndTime }}', 'webapp.app.pinTv.creatorStudio.episode.formattedDateTime', 'formattedDate: Formatted date when the episode will be live, formattedTime: Formatted time when the episode will be live, formattedEndTime: Formatted time when the episode will ned'),{formattedDate:(0,f.Z)(new Date(l),ed.yd,"eeee, MMMM do"),formattedTime:(0,f.Z)(new Date(l),ed.yd,"h:mm aaa zzz"),formattedEndTime:(0,f.Z)(new Date(b),ed.yd,"h:mm aaa zzz")})})},eE=function(){var e=(0,b.B)().isAuthenticated,t=(0,h.$B)().params.episodeId,n=(0,h.k6)().push,r=(0,eC.Z)("PINTEREST_TV_CREATOR_STUDIO_EPISODE_CONTROL_ROOM_PAGE");return((0,d.useEffect)(function(){r({eventName:"PINTEREST_TV_CREATOR_STUDIO_PAGE_VIEW"})},[]),e)?t?(0,C.jsx)(eP.Z,{children:(0,C.jsx)(x.Z,{children:(0,C.jsx)(w.x,{children:(0,C.jsxs)(eA.uW,{children:[(0,C.jsx)(y.Z,{}),(0,C.jsx)(eI,{}),(0,C.jsx)(_.xu,{marginBottom:5,marginEnd:ed.CY,marginStart:ed.CY,marginTop:0,children:(0,C.jsx)(eg,{})})]})})})}):(n((0,eS.Z)("EPISODES")),null):(0,C.jsx)(h.l_,{to:"/login?next=".concat(encodeURIComponent("/tv/studio"))})}}},function(e){e.O(0,[97270,84404,28038,24797,55169,64283,64212,38832,31430,53978,93745,55979,42192],function(){return e(e.s=320585)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/tv/studio/episodes/[episodeId]/control-room-29dcb60b517f29c4.js.map