"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[44350],{514026:function(e,n,t){t.r(n);var i,a,l,r,o,s={fragment:{argumentDefinitions:i=[{defaultValue:null,kind:"LocalArgument",name:"option"},{defaultValue:null,kind:"LocalArgument",name:"section"},{defaultValue:null,kind:"LocalArgument",name:"value"}],kind:"Fragment",metadata:null,name:"MobileEmailSettingsPostSettingsEmailMutation",selections:[{alias:null,args:a=[{fields:[{kind:"Variable",name:"option",variableName:"option"},{kind:"Variable",name:"section",variableName:"section"},{kind:"Variable",name:"value",variableName:"value"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3PostSettingsEmailMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,concreteType:"NotificationSettings",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null}],type:"NotificationSettingsResponse",abstractKey:null},{kind:"InlineFragment",selections:[l,o={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"InvalidParameters",abstractKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:i,kind:"Operation",name:"MobileEmailSettingsPostSettingsEmailMutation",selections:[{alias:null,args:a,concreteType:null,kind:"LinkedField",name:"v3PostSettingsEmailMutation",plural:!1,selections:[l,{kind:"InlineFragment",selections:[r],type:"NotificationSettingsResponse",abstractKey:null},{kind:"InlineFragment",selections:[o],type:"InvalidParameters",abstractKey:null}],storageKey:null}]},params:{id:"9f198b77361f94859a2f07a375a00d5c5390bfb9f53c7f6f4936ecf5769297a8",metadata:{},name:"MobileEmailSettingsPostSettingsEmailMutation",operationKind:"mutation",text:null}};s.hash="a8a632f6671d5552565ad931700b26eb",n.default=s},286561:function(e,n,t){t.r(n);var i,a,l,r,o,s,u,c,d={fragment:{argumentDefinitions:[i={defaultValue:null,kind:"LocalArgument",name:"option"},a={defaultValue:null,kind:"LocalArgument",name:"recipientId"},l={defaultValue:null,kind:"LocalArgument",name:"section"},r={defaultValue:null,kind:"LocalArgument",name:"value"}],kind:"Fragment",metadata:null,name:"MobileEmailSettingsPostSettingsEmailSignedMutation",selections:[{alias:null,args:o=[{fields:[{kind:"Variable",name:"option",variableName:"option"},{kind:"Variable",name:"recipientId",variableName:"recipientId"},{kind:"Variable",name:"section",variableName:"section"},{kind:"Variable",name:"value",variableName:"value"}],kind:"ObjectValue",name:"input"}],concreteType:null,kind:"LinkedField",name:"v3PostSettingsEmailSignedMutation",plural:!1,selections:[{kind:"InlineFragment",selections:[s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},u={alias:null,args:null,concreteType:"NotificationSettings",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"NotificationSettingsResponse",abstractKey:null},{kind:"InlineFragment",selections:[s,c={alias:null,args:null,concreteType:"ErrorInfo",kind:"LinkedField",name:"error",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"paramPath",storageKey:null}],storageKey:null}],type:"InvalidParameters",abstractKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[i,l,r,a],kind:"Operation",name:"MobileEmailSettingsPostSettingsEmailSignedMutation",selections:[{alias:null,args:o,concreteType:null,kind:"LinkedField",name:"v3PostSettingsEmailSignedMutation",plural:!1,selections:[s,{kind:"InlineFragment",selections:[u],type:"NotificationSettingsResponse",abstractKey:null},{kind:"InlineFragment",selections:[c],type:"InvalidParameters",abstractKey:null}],storageKey:null}]},params:{id:"536b9770cda32342f2cc1245d3d4b07a957b32db650d15b125983bfbf283b3e7",metadata:{},name:"MobileEmailSettingsPostSettingsEmailSignedMutation",operationKind:"mutation",text:null}};d.hash="5ff97ac45026f786e1b3a92e444150b5",n.default=d},89514:function(e,n,t){t.r(n);var i,a,l,r,o,s=(i=[{defaultValue:null,kind:"LocalArgument",name:"signed"}],a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},o=[l={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],{fragment:{argumentDefinitions:i,kind:"Fragment",metadata:null,name:"MobileEmailSettingsQuery",selections:[{condition:"signed",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"v3GetSettingsEmailQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[a,{alias:null,args:null,concreteType:"NotificationSettingsSection",kind:"LinkedField",name:"data",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"MobileEmailSettings_notificationSettingsSection"}],storageKey:null}],type:"V3GetSettingsEmail",abstractKey:null}],storageKey:null}]}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:i,kind:"Operation",name:"MobileEmailSettingsQuery",selections:[{condition:"signed",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"v3GetSettingsEmailQuery",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"NotificationSettingsSection",kind:"LinkedField",name:"data",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"isBiz",storageKey:null},l,r,{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,concreteType:"NotificationSettingsSectionOption",kind:"LinkedField",name:"options",plural:!0,selections:o,storageKey:null},{alias:null,args:null,concreteType:"NotificationSettingsSectionCategoryMap",kind:"LinkedField",name:"categoryMaps",plural:!0,selections:[r,{alias:null,args:null,concreteType:"NotificationSettingsSectionOption",kind:"LinkedField",name:"value",plural:!0,selections:o,storageKey:null}],storageKey:null}],storageKey:null}],type:"V3GetSettingsEmail",abstractKey:null}],storageKey:null}]}]},params:{id:"7a9285229b5069db403037b33c0e137fa1195146bdf1f950a0e598d16eae18ae",metadata:{},name:"MobileEmailSettingsQuery",operationKind:"query",text:null}});s.hash="b9729e5ba59afe468ef8aac091957ec7",n.default=s,function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let n=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[n]=e}}}(s.default||s)},885405:function(e,n,t){t.r(n);var i,a,l,r=(l=[i={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],{argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"MobileEmailSettings_notificationSettingsSection",selections:[{alias:null,args:null,kind:"ScalarField",name:"isBiz",storageKey:null},i,a,{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,concreteType:"NotificationSettingsSectionOption",kind:"LinkedField",name:"options",plural:!0,selections:l,storageKey:null},{alias:null,args:null,concreteType:"NotificationSettingsSectionCategoryMap",kind:"LinkedField",name:"categoryMaps",plural:!0,selections:[a,{alias:null,args:null,concreteType:"NotificationSettingsSectionOption",kind:"LinkedField",name:"value",plural:!0,selections:l,storageKey:null}],storageKey:null}],type:"NotificationSettingsSection",abstractKey:null});r.hash="77ff7380f1168334e14cc991cbe9d923",n.default=r},695238:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(672652),a=t(14583),l=t(819267);function r(e){var n=e.useGraphQLAdapter,t=e.useLegacyAdapter,r=function(e){return(0,e.children)({enabled:!0,data:n(e.data)})},o=function(e){return(0,e.children)({enabled:!1,data:t(e.data)})};return function(e){var n,t=e.children,s=e.input,u=s.enabled?(0,l.jsx)(r,{data:s.data,children:t}):(0,l.jsx)(o,{data:s.data,children:t}),c=null!==(n=s.suspense)&&void 0!==n&&n.dangerouslyServerRender?i.Suspense:a.Z;return s.suspense?(0,l.jsx)(c,{fallback:s.suspense.fallback,children:u}):u}}},876605:function(e,n,t){var i=t(216167);n.Z=function(e){return i.Z.create("UserPasswordResource",e).callUpdate({showError:!1})}},819623:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var i,a,l,r,o=t(672652),s=t(780277),u=t(42279),c=t(684404),d=t(930837),f=t(695238),g=t(140017),m=t(340523),p=t(995917),_=t(14583),y=t(149722),v=t(623281),h=t(819267);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach(function(n){z(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function x(e,n,t,i,a,l,r){try{var o=e[l](r),s=o.value}catch(e){t(e);return}o.done?n(s):Promise.resolve(s).then(i,a)}function E(e){return function(){var n=this,t=arguments;return new Promise(function(i,a){var l=e.apply(n,t);function r(e){x(l,i,a,r,o,"next",e)}function o(e){x(l,i,a,r,o,"throw",e)}r(void 0)})}}function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,a,l,r,o=[],s=!0,u=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(i=l.call(t)).done)&&(o.push(i.value),o.length!==n);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(u)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}function O(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,R(i.key),i)}}function P(e,n){return(P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e})(e,n)}function A(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,n,t){return(n=R(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){var n=function(e,n){if("object"!==b(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n||"default");if("object"!==b(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===b(n)?n:String(n)}var F={TOGGLE_BUTTON:2,BUTTON:4},K=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&P(e,n)}(l,e);var n,t,i,a=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=w(l);if(n){var i=w(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return function(e,n){if(n&&("object"===b(n)||"function"==typeof n))return n;if(void 0!==n)throw TypeError("Derived constructors may only return object or undefined");return A(e)}(this,e)});function l(){var e;!function(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}(this,l);for(var n=arguments.length,t=Array(n),i=0;i<n;i++)t[i]=arguments[i];return z(A(e=a.call.apply(a,[this].concat(t))),"state",{modalOpen:!1,isBizSectionTurnOff:!1,isToastShown:!1}),z(A(e),"onTurnOffButtonTouch",function(n){return e.setState({modalOpen:!0,isBizSectionTurnOff:n})}),z(A(e),"onTurnoffModalClose",function(){return e.setState({modalOpen:!1,isBizSectionTurnOff:!1})}),z(A(e),"handleShowToast",function(){e.setState({isToastShown:!0}),clearTimeout(e.toastTimeout),setTimeout(function(){e.setState({isToastShown:!1})},2e3)}),z(A(e),"handleEmailSettingChange",function(n,t,i){var a=e.props,l=a.viewerId,r=a.changeEmailSetting,o=a.options;r(void 0!==o?o.user_id:null!=l?l:"",n,t,i,o,e.handleShowToast),e.setState({modalOpen:!1,isBizSectionTurnOff:!1})}),z(A(e),"renderSettings",function(n){var t=e.props,i=t.headingSize,a=t.labelSize,l=e.props,r=l.isPartner,o=l.settingsSections,s=o.settings_email_everything,u=o.settings_email_everything_biz,d=void 0!==s.ONLY_REQUIRED&&s.ONLY_REQUIRED.value,f=void 0!==u.ONLY_REQUIRED&&u.ONLY_REQUIRED.value,g=!n.isBiz&&d||n.isBiz&&f||!1,m=void 0!==a&&r?a:"300",p=n.key,_=n.isBiz||!1;if(p){if(n.style===F.BUTTON){var y,v,b,S,k=null===(b=n.options)||void 0===b?void 0:b.filter(Boolean)[0].key;if(k)return(0,h.jsxs)(c.xu,{children:[n.isBiz&&(0,h.jsx)(c.xu,{marginBottom:4,marginTop:4,children:(0,h.jsx)(c.iz,{})}),r&&(0,h.jsxs)(c.xu,{marginBottom:2,marginTop:2,children:[void 0===i&&(0,h.jsx)(c.X6,{children:n.label}),void 0!==i&&(0,h.jsx)(c.xv,{size:i,weight:"bold",children:n.label})]}),!r&&(0,h.jsx)(c.xu,{marginTop:2}),(0,h.jsxs)(c.xu,{marginTop:0,children:[!r&&(0,h.jsx)(c.xv,{size:m,weight:"bold",children:e.props.i18n._('All', 'Header for checkbox global unsubscribe', 'Header for checkbox global unsubscribe')}),(0,h.jsxs)(c.xu,{"data-test-id":"notifications-global-unsub-checkbox",direction:"row",display:"flex",marginTop:5,children:[(0,h.jsx)(c.XZ,{checked:!g,id:"globalUnsubCheck",onChange:g?function(){return e.handleEmailSettingChange(p,k,!o[p][k].value)}:function(){return e.onTurnOffButtonTouch(_)},size:"sm"}),(0,h.jsx)(c.__,{htmlFor:(null===(S=n.options)||void 0===S?void 0:S.filter(Boolean)[0].label)||k,children:(0,h.jsx)(c.xu,{paddingX:4,children:(0,h.jsx)(c.xv,{color:"default",children:e.props.i18n._('Email notifications', 'Subscribe or Unsubscribe to all emails', 'Subscribe or Unsubscribe to all emails')})})})]})]}),g&&r&&"settings_email_everything"===p&&(0,h.jsx)(c.xu,{marginTop:2,children:(0,h.jsx)(c.xv,{color:"error",size:"100",children:e.props.i18n._('Settings for your business account are at the bottom of the page.', 'Warning message for personal email settings', 'Warning message for personal email settings')})}),g&&r&&"settings_email_everything_biz"===p&&(0,h.jsx)(c.xu,{marginTop:2,children:(0,h.jsx)(c.xv,{color:"error",size:"100",children:e.props.i18n._('Control emails for your personal account at the top of the page.', 'Warning message for business email settings', 'Warning message for business email settings')})})]})}else if(n.style===F.TOGGLE_BUTTON)return(0,h.jsxs)(c.xu,{marginTop:6,children:[(0,h.jsx)(c.xv,{size:m,weight:"bold",children:n.label}),null===(y=n.options)||void 0===y?void 0:y.map(function(n){var t=n.label,i=n.key,a=!!n.value;return t&&i?(0,h.jsxs)(c.xu,{direction:"row",display:"flex",marginTop:5,children:[(0,h.jsx)(c.XZ,{checked:!g&&(void 0!==o[p][i]?a:!!o[p][i].value),disabled:g,id:t,name:t,onChange:function(){e.handleEmailSettingChange(p,i,!o[p][i].value)},size:"sm"}),(0,h.jsx)(c.__,{htmlFor:t,children:(0,h.jsx)(c.xu,{paddingX:4,children:(0,h.jsx)(c.xv,{color:g?"subtle":"default",children:n.label})})})]},n.label):null})]});else return(0,h.jsx)(c.xu,{marginTop:4,children:null===(v=n.categoryMaps)||void 0===v?void 0:v.map(function(n){var t;return(0,h.jsxs)(c.xu,{marginTop:6,children:[(0,h.jsx)(c.xv,{size:m,weight:"bold",children:n.label}),null===(t=n.value)||void 0===t?void 0:t.map(function(n){var t=n.label,i=n.key,a=!!n.value;return t&&i?(0,h.jsx)(c.xu,{marginTop:5,children:(0,h.jsxs)(c.kC,{alignItems:"stretch",direction:"row",justifyContent:"start",children:[(0,h.jsx)(c.XZ,{checked:!d&&(void 0===o[p][i]?a:o[p][i].value),disabled:d,id:t,name:t,onChange:function(){e.handleEmailSettingChange(p,i,!(o[p][i]||{}).value)},size:"sm"}),(0,h.jsx)(c.__,{htmlFor:t,children:(0,h.jsx)(c.xu,{paddingX:4,children:(0,h.jsx)(c.xv,{color:d?"subtle":"default",children:n.label})})})]})}):null})]})})})}return null}),e}return t=[{key:"componentWillUnmount",value:function(){this.toastTimeout&&clearTimeout(this.toastTimeout)}},{key:"render",value:function(){var e=this,n=this.props.settings,t=this.state,i=t.modalOpen,a=t.isBizSectionTurnOff,l=t.isToastShown,r=a?"settings_email_everything_biz":"settings_email_everything";return(0,h.jsxs)(c.xu,{"data-test-id":"turn-off-all-mobile-modal-confirmation",children:[(0,h.jsx)(d.ZP,{accessibilityModalLabel:"",closeOnOutsideClick:!1,isOpen:i,mobileHideCloseIcon:!0,onDismiss:function(){},type:"email_settings",children:(0,h.jsxs)(c.xu,{padding:3,children:[(0,h.jsx)(c.xu,{marginTop:3,children:(0,h.jsx)(c.X6,{children:this.props.i18n._('Are you sure?', 'Ask user to confirm turn off all emails', 'Ask user to confirm turn off all emails')})}),(0,h.jsx)(c.xu,{marginTop:3,children:(0,h.jsx)(c.xv,{size:"200",children:this.props.i18n._('You won\'t get any more email notifications from Pinterest for your personal account (except account settings and privacy).', 'Warn user they won\'t receive emails', 'Warn user they won\'t receive emails')})}),(0,h.jsx)(c.xu,{marginTop:6,children:(0,h.jsx)(c.zx,{accessibilityLabel:this.props.i18n._('Turn off all', 'Turn off all emails', 'Turn off all emails'),color:"red",fullWidth:!0,onClick:function(){return e.handleEmailSettingChange(r,"ONLY_REQUIRED",!0)},size:"lg",text:this.props.i18n._('Turn off all', 'Turn off all emails', 'Turn off all emails')})}),(0,h.jsx)(c.xu,{marginBottom:3,marginTop:3,children:(0,h.jsx)(c.zx,{accessibilityLabel:this.props.i18n._('Cancel', 'Cancel turning off all emails', 'Cancel turning off all emails'),color:"gray",fullWidth:!0,onClick:this.onTurnoffModalClose,size:"lg",text:this.props.i18n._('Cancel', 'Cancel turning off all emails', 'Cancel turning off all emails')})})]})}),(0,h.jsx)(c.xu,{paddingY:4,children:n.map(function(n){return(0,h.jsx)(c.xu,{children:e.renderSettings(n)},n.key)})}),l?(0,h.jsx)(c.xu,{dangerouslySetInlineStyle:{__style:{top:28,left:"50%",transform:"translateX(-50%)"}},fit:!0,paddingX:1,position:"fixed",zIndex:new c.Ry(2),children:(0,h.jsx)(c.FN,{text:this.props.i18n._('Email setting saved', 'Confirmation message for email setting saved', 'Confirmation message for email setting saved')})}):null]})}}],O(l.prototype,t),i&&O(l,i),Object.defineProperty(l,"prototype",{writable:!1}),l}(o.PureComponent),C=void 0!==i?i:i=t(885405),L=void 0!==a?a:a=t(89514),I=function(){var e,n=void 0!==l?l:l=t(514026),i=T((0,u.useMutation)(n),1)[0];return e=E(regeneratorRuntime.mark(function e(n,t){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={option:n.option,section:n.section,value:n.value},e.next=4,new Promise(function(e,n){i({variables:k({},a),onCompleted:function(i,a){a&&n(a[0]),t(),e()},onError:function(e){return n(e)}})});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)})),function(n,t){return e.apply(this,arguments)}},N=function(){var e,n=void 0!==r?r:r=t(286561),i=T((0,u.useMutation)(n),1)[0];return e=E(regeneratorRuntime.mark(function e(n,t){var a,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.option,l={option:a,section:n.section,value:n.value,recipientId:n.recipientId},e.next=4,new Promise(function(e,n){i({variables:k({},l),onCompleted:function(i,a){a&&n(a[0]),t(),e()},onError:function(e){return n(e)}})});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)})),function(n,t){return e.apply(this,arguments)}},M=(0,f.Z)({useGraphQLAdapter:function(e){var n,t,i,a=T((0,o.useState)([]),2),l=a[0],r=a[1],s=T((0,o.useState)({settings_email_everything:{},settings_email_v2:{},unsub_group_board:{},settings_email_everything_biz:{},settings_email_biz_v2:{}}),2),c=s[0],d=s[1],f=T((0,o.useState)(!1),2),g=f[0],m=f[1],p=I(),_=N(),y=null===(t=(0,u.useLazyLoadQuery)(L,{signed:!!(null!=e&&e.user_id)}).v3GetSettingsEmailQuery)||void 0===t?void 0:null===(i=t.data)||void 0===i?void 0:i.filter(Boolean),v=(0,u.useFragment)(C,y);(0,o.useEffect)(function(){if(v){r(v);var e={};v.filter(Boolean).forEach(function(n){var t,i=n.key;i&&(e[i]={},null===(t=n.options)||void 0===t||t.filter(Boolean).forEach(function(n){var t=n.key,a=n.value;t&&(e[i][t]={value:a||!1})})),"settings_email_biz_v2"===n.key&&m(!0)}),d(function(n){return k(k({},n),e)})}},[v]);var h=(n=E(regeneratorRuntime.mark(function e(n,t,i,a,l,r){var o,s,u,f,g,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o={settings_email_everything:"settings_email_v2",settings_email_everything_biz:"settings_email_biz_v2"},s=k({},c),t in o&&a)for(f=0,g=Object.keys(s[u=o[t]]);f<g.length;f++)m=g[f],s[u][m]={value:!0};d(function(e){return k(k({},s),{},z({},t,k(k({},e[t]),{},z({},i,{value:a}))))}),void 0!==l?_({section:t,option:i,value:a,recipientId:l.user_id},r):p({section:t,option:i,value:a},r);case 5:case"end":return e.stop()}},e)})),function(e,t,i,a,l,r){return n.apply(this,arguments)});return{settings:l,settingsSections:c,isPartner:g,changeEmailSetting:h}},useLegacyAdapter:function(e){var n,t=T((0,o.useState)([]),2),i=t[0],a=t[1],l=T((0,o.useState)({settings_email_everything:{},settings_email_v2:{},unsub_group_board:{},settings_email_everything_biz:{},settings_email_biz_v2:{}}),2),r=l[0],u=l[1],c=T((0,o.useState)(!1),2),d=c[0],f=c[1],g=(0,p.Z)({name:void 0!==e?"UnsubEmailSettingsResource":"EmailSettingsResource",options:e}).data;(0,o.useEffect)(function(){if(g){a(g);var e={};g.filter(Boolean).forEach(function(n){var t,i=n.key;i&&(e[i]={},null===(t=n.options)||void 0===t||t.filter(Boolean).forEach(function(n){var t=n.key,a=n.value;t&&(e[i][t]={value:a||!1})})),"settings_email_biz_v2"===n.key&&f(!0)}),u(function(n){return k(k({},n),e)})}},[g]);var m=(0,s.useDispatch)(),_=(n=E(regeneratorRuntime.mark(function e(n,t,i,a,l,o){var s,c,d,f,g,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s={settings_email_everything:"settings_email_v2",settings_email_everything_biz:"settings_email_biz_v2"},c=k({},r),t in s&&a)for(f=0,g=Object.keys(c[d=s[t]]);f<g.length;f++)p=g[f],c[d][p]={value:!0};return u(function(e){return k(k({},c),{},z({},t,k(k({},e[t]),{},z({},i,{value:a}))))}),e.next=6,m((0,v.W6)(n,t,i,a,l,o));case 6:case"end":return e.stop()}},e)})),function(e,t,i,a,l,r){return n.apply(this,arguments)});return{settings:i,settingsSections:r,isPartner:d,changeEmailSetting:_}}});function U(e){var n,t=(0,g.ZP)(),i=(0,m.F)().checkExperiment,a=(0,y.Z)().id;return(0,h.jsx)(_.Z,{children:(0,h.jsx)(M,{input:!(null!==(n=e.options)&&void 0!==n&&n.od)&&i("graphql_migration_notifications_settings").anyEnabled?{enabled:!0,data:e.options}:{enabled:!1,data:e.options},children:function(n){var i=n.data,l=i.settings,r=i.settingsSections,o=i.isPartner,s=i.changeEmailSetting;return(0,h.jsx)(K,k(k({},e),{},{changeEmailSetting:s,i18n:t,isPartner:o,settings:l||[],settingsSections:r,viewerId:a}))}})})}},623281:function(e,n,t){t.d(n,{Cp:function(){return g},GT:function(){return s},V6:function(){return r},W2:function(){return c},W6:function(){return m},_L:function(){return f},fm:function(){return o},hT:function(){return u}});var i=t(216167),a=t(876605),l=t(227258);function r(e,n){return{type:"UPDATE_USER_SOCIAL_NETWORK",payload:{socialNetworkName:e,connected:n}}}var o=function(e){return{type:"USER_DOMAIN_VERIFIED",payload:{verifiedWebsite:e}}},s=function(e){return{type:"USER_DOMAIN_UNVERIFIED",payload:{verifiedWebsite:e}}};function u(e){return{type:"UPDATE_HAS_QUICKSAVE_BOARD",payload:{createdQuicksaveBoard:e}}}var c=function(e,n,t){return function(i){i({type:"USER_SETTING_CHANGE",payload:{id:e,field:n,value:t}})}},d=function(e){var n=e.split(" ");return{first_name:n[0],last_name:n[1]}},f=function(e){var n=e.field,t=e.value,a=e.passcode,r=e.onSettingSavedHn,o=e.showErrorHn,s=e.surfaceTag,u=e.userId,f=e.passcodeSkipAcknowledged,g=void 0!==f&&f;return function(e,f){var m=f().users[u],p={user_id:u,surface_tag:s};if("full_name"===n){if(m.is_partner)p.business_name=t;else{var _=d(t);p.first_name=_.first_name,p.last_name=_.last_name||""}}else p[n]=t;a&&(p.passcode=a),"opt_in_private_account"===n&&null!=g&&(p.user_confirm_skip_passcode=g),i.Z.create("UserSettingsResource",p).callUpdate().then(function(){if("profile_image_url"===n)e((0,l.b)("UserResource",{options:p}));else if("full_name"===n){if(m.is_partner)e(c(u,"first_name",t));else{var i=d(t);e(c(u,"first_name",i.first_name)),e(c(u,"last_name",i.last_name))}}m.is_partner&&("account_type"===n||"contact_name"===n)?e(function(e){e({type:"USER_PARTNER_SETTING_CHANGE",payload:{id:u,field:n,value:t}})}):e(c(u,n,t)),r()},o)}},g=function(e,n,t,i,l,r){return function(){(0,a.Z)({new:n,new_confirm:t,old:e,passcode:i}).then(l,r)}},m=function(e,n,t,a,l,r){return function(o){o(c(e,"".concat(n,".").concat(t),a));var s={},u="EmailSettingsResource";void 0!==l?(s={section:n,option:t,value:a,od:l.od,user_id:l.user_id},u="UnsubEmailSettingsResource"):s={section:n,option:t,value:a},i.Z.create(u,s).callUpdate().then(r).catch(function(){return o(c(e,"".concat(n,".").concat(t),!a))})}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/app-www-emails-MobileEmailSettings-e11e9b86fea07cb8.js.map