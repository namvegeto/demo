(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[90959],{406893:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}}),r(823364);var n=r(819267),i=["css","unsafeCSS"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var n,i;n=t,i=r[t],(n=l(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}function l(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}var s=function(){var e,t;function r(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}return e=[{key:"toString",value:function(){return this._private_safe_value}}],t=[{key:"factory",value:function(e){return e instanceof r?e:new r(String(e))}}],e&&c(r.prototype,e),t&&c(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}();function _(e){var t=e.css,r=e.unsafeCSS,o=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,i),a=String(t||"")||r||"";return a?(0,n.jsx)("style",u(u({},o),{},{dangerouslySetInnerHTML:{__html:String(s.factory(a))}})):null}},934378:function(e,t,r){"use strict";r.d(t,{$N:function(){return p},Cu:function(){return O},GY:function(){return l},MZ:function(){return u},NR:function(){return _},Vn:function(){return s},bC:function(){return d},fm:function(){return n},kM:function(){return o},q6:function(){return i},qp:function(){return c},uV:function(){return f},ug:function(){return E},xL:function(){return a}});var n={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",RESOURCES:"RESOURCES"},i={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},o={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",TAX_DOCUMENTS:"TAX_DOCUMENTS",DOCUMENTS:"DOCUMENTS",PREPAID_CAMPAIGN_SPEND:"PREPAID_CAMPAIGN_SPEND_SUMMARY"},u={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce",PREMMERCE:"Premmerce",SEGMENT:"Segment",BRANCH:"Branch",HIGHTOUCH:"Hightouch",EULERIAN:"Eulerian",ADOBE_CDP:"Adobe Real-Time CDP",ADOBE_COMMERCE:"Adobe Commerce",SALESFORCE_COMMERCE_CLOUD:"Salesforce Commerce Cloud"},a={GTM:"GTM",SHOPIFY:"SHOPIFY",WORDPRESS:"WORDPRESS",WOOCOMMERCE:"WOOCOMMERCE",TEALIUM:"TEALIUM"},c={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_MANUAL_SETUP_FLOW:"PINTEREST_TAG_MANUAL_SETUP_FLOW",PINTEREST_TEST_EVENTS:"PINTEREST_TEST_EVENTS",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_HEALTH:"CONVERSION_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD",CONVERSIONS_API:"CONVERSIONS_API",CONVERSIONS_API_ACCESS_TOKEN:"CONVERSIONS_API_ACCESS_TOKEN",CONVERSIONS_API_DEDUPLICATION:"CONVERSIONS_API_DEDUPLICATION",CONVERSIONS_API_PARTNER_SETUP_FLOW:"CONVERSIONS_API_PARTNER_SETUP_FLOW",CONVERSIONS_API_MANUAL_SETUP_FLOW:"CONVERSIONS_API_MANUAL_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW:"PINTEREST_EVENTS_OVERVIEW",PINTEREST_EVENT_HISTORY:"PINTEREST_EVENT_HISTORY",CONVERSIONS:"CONVERSIONS",PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:"PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP",PINTEREST_SETUP_API:"PINTEREST_SETUP_API",NOCODE_CONVERSIONS_API_SETUP_FLOW:"NOCODE_CONVERSIONS_API_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW_CAPI_TAB:"PINTEREST_EVENTS_OVERVIEW_CAPI_TAB",PINTEREST_EVENT_HISTORY_CAPI_TAB:"PINTEREST_EVENT_HISTORY_CAPI_TAB"},l={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},s={UNREAD:"UNREAD",READ:"READ",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",DISMISSED:"DISMISSED",INVALID:"INVALID",MUTED:"MUTED",SNOOZED:"SNOOZED",PMP_REPORTED:"PMP_REPORTED",EMAILED:"EMAILED",BULK_DOWNLOADED:"BULK_DOWNLOADED",FILTERED:"FILTERED",PUSHED:"PUSHED"},_={DESTINATION:"destination",EXPIRY:"expiry",SOURCE:"attributionsrc",SOURCE_EVENT_ID:"source_event_id",SOURCE_EVENT_TYPE:"source_event_type",PRIORITY:"priority",CLICK_PRIORITY:"2",VIEW_PRIORITY:"1",HOSTNAME:"hostname",CAMPAIGN_ID:"campaign_id",ADVERTISER_ID:"advertiser_id"},f="604800",E="86400",p={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"},d="click",O="view"},25919:function(e,t,r){"use strict";r.d(t,{Am:function(){return I},Ig:function(){return P},N:function(){return h},Sd:function(){return b},YX:function(){return R},be:function(){return T},fO:function(){return O},kd:function(){return N},pz:function(){return S}});var n,i=r(672652),o=r(216167),u=r(587703),a=r(703404),c=r(957753),l=r(107366),s=r(953565);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){var n,i;n=t,i=r[t],(n=function(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===_(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,s.nP)("".concat(e,".").concat(t),{sampleRate:1,tags:r})},O=function(e,t){return function(r){var n=t?{extra_context:e,targeting:t}:{extra_context:e};return o.Z.create("UserExperiencePlatformResource",n).callGet().then(function(e){return e.resource_response?r((0,c.OD)(e.resource_response.data)):void 0})}},S=function(e,t,r,i){return function(u,l){if(t)return Promise.resolve();if(i&&(n=i),1===e.length){var s=e[0],_=l().experiences[s];if(JSON.stringify((null==_?void 0:_.extraContext)||null)===JSON.stringify(r)||(0,a.E3)(_)&&!(r&&Object.keys(r).length>0))return Promise.resolve()}return o.Z.create("UserExperienceResource",{placement_ids:e,extra_context:r||null,targeting:i}).callGet().then(function(e){return e.resource_response?u((0,c.cL)(e.resource_response.data)):void 0})}},A=function(e,t,r,i){return function(u,a,l){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],_=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0;return function(E,p){var d,S=p(),A=S.experiences,P=S.experiencesMulti,T=null,I=!0;if(s||(T=(I=A[u]&&A[u].experience_id===a)?A[u]:Array.isArray(P[u])&&(null===(d=P[u])||void 0===d?void 0:d.find(function(e){return e.experience_id===a}))),T&&T.experience_id===a||s&&u&&a){var b=o.Z.create(e,{placed_experience_id:"".concat(u,"%3A").concat(a),extra_context:null!=_?_:{},targeting:f}),N=I?c.Yb:c.xW;switch(t){case"dismissed":return b.callDelete().then(function(){E(N(u,a,t)),E(O(void 0,n)),r&&i&&r({event_type:i,object_id_str:a.toString()})});case"completed":return b.callUpdate().then(function(){!l&&(E(N(u,a,t)),E(O(void 0,n)),r&&i&&r({event_type:i,object_id_str:a.toString()}))});case"viewed":return E(N(u,a,t)),b.callUpdate().then(function(){1000162===u&&E(O()),r&&i&&r({event_type:i,object_id_str:a.toString()})});case"completedWithoutHomefeed":return b.callUpdate().then(function(){l||E(N(u,a,t)),r&&i&&r({event_type:i,object_id_str:a.toString()})})}}return Promise.resolve()}}},P=function(){var e=(0,u.Z)();return(0,i.useCallback)(A("UserExperienceViewedResource","viewed",e,4503),[e])},T=function(){var e=(0,u.Z)();return(0,i.useCallback)(A("UserExperienceCompletedResource","completed",e,6567),[e])},I=function(){var e=(0,u.Z)();return(0,i.useCallback)(A("UserExperienceResource","dismissed",e,6568),[e])},b=function(){var e=(0,u.Z)();return(0,i.useCallback)(A("UserExperienceCompletedResource","completedWithoutHomefeed",e,6567),[e])},N=function(e,t){return function(r,n){var i=n().experiences[e];i&&i.triggerable_placed_exps&&i.triggerable_placed_exps.length&&i.triggerable_placed_exps.forEach(function(r){var n,o=(function(e){if(Array.isArray(e))return e}(n=r.split(":"))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,u,a=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw i}}return a}}(n,2)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1],u=t;i.metadata&&i.metadata[o]&&(u=E(E({},t),i.metadata[o])),(0,l.Z)({url:"/v3/experiences/".concat(r.replace(":","%3A"),"/trigger/"),method:"PUT",data:u?{extra_context:JSON.stringify(u,null,1)}:{}}).then(function(){d("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:o})})})}},R=function(e){return function(t,r){return t(N(e)),r().experiences[e]}},h=function(e,t,r){return function(i){r&&(n=r),i(N(e,t)),t&&Object.keys(t).length>0&&i(S([e],!1,t,r))}}},703404:function(e,t,r){"use strict";r.d(t,{A0:function(){return l},E3:function(){return a},MQ:function(){return c},fL:function(){return s}});var n=r(684404),i=r(862249),o=r(819267);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return!!e&&0!==e.type}var c=function(e,t,r){var n=e[r];return t[r]&&a(n)?n:null};function l(e){var t;return null===(t=e.display_data)||void 0===t?void 0:t.anchor}var s=function(e){var t,r,a=((function(e){if(Array.isArray(e))return u(e)})(r=(null===(t=new DOMParser().parseFromString(e,"text/html").body)||void 0===t?void 0:t.childNodes)||[])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(e){if("A"!==e.nodeName)return(0,o.jsx)(n.xv,{inline:!0,children:e.textContent});var t=e.href||"",r=(0,i.Z)({url:t});return(0,o.jsx)(n.rU,{display:"inline",externalLinkIcon:r?"default":"none",href:t,rel:r?"nofollow":"none",target:"blank",children:e.textContent})});return(0,o.jsx)(n.xv,{inline:!0,children:a})}},26616:function(e,t,r){"use strict";r.d(t,{$S:function(){return n},V$:function(){return i},_4:function(){return u},iY:function(){return a},mR:function(){return o}});var n="REFRESH_ALL_EXPERIENCES_MULTI",i="UPDATE_EXPERIENCE_MULTI",o="FETCH_EXPERIENCES",u="REFRESH_ALL_EXPERIENCES",a="UPDATE_EXPERIENCE"},957753:function(e,t,r){"use strict";r.d(t,{NW:function(){return u},OD:function(){return c},Yb:function(){return a},cL:function(){return l},xW:function(){return o}});var n=r(216167),i=r(26616),o=function(e,t,r){return{type:i.V$,payload:{placementId:e,experienceId:t,status:r}}},u=function(e){return function(t){return n.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then(function(e){var r;return e.resource_response?t((r=e.resource_response.data,{type:i.$S,payload:{experiencesMulti:r}})):void 0})}},a=function(e,t,r){return{type:i.iY,payload:{placementId:e,experienceId:t,status:r}}},c=function(e){return{type:i._4,payload:{experiences:e}}},l=function(e){return{type:i.mR,payload:{experiences:e}}}},154779:function(e,t,r){"use strict";function n(e,t){var r;if(e.error){var n=e.error,i=n.httpStatus,o=n.api_error_code,u=n.redirectUrl;(404===i||401===i&&7===o)&&(r={pathname:t?"/ideas/":"/",state:{showError:!0}}),301===i&&u&&(r={pathname:u})}return r}r.d(t,{Z:function(){return n}})},870319:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(328038),i=r(96157),o=r(154779),u=r(995917),a=r(149722);function c(e){var t=(0,n.k6)(),r=(0,n.TH)(),c=!(0,a.Z)().isAuth&&(0,i.L6)(r),l=(0,u.Z)(e),s=(0,o.Z)(l,c);return s&&t.replace(s.pathname,s.state),l}},862249:function(e,t,r){"use strict";var n=r(968946);t.Z=function(e){var t=e.url;return!!(t&&t.match(/^https{0,1}:\/\//)&&!(0,n.Z)(t))}},760101:function(e,t,r){"use strict";r.d(t,{G:function(){return c},Z:function(){return l}});var n=r(672652),i=r(328038),o=r(819267);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var a=(0,n.createContext)(!0);function c(e){var t,r=e.children,c=(0,i.TH)(),l=function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(!0))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,u,a=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw i}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=l[0],_=l[1],f=(0,n.useRef)(c);return(0,n.useEffect)(function(){f.current!==c&&(f.current=c,_(!1))},[c]),(0,o.jsx)(a.Provider,{value:s,children:r})}function l(){return(0,n.useContext)(a)}},19447:function(e,t,r){"use strict";r.d(t,{AF:function(){return c},H0:function(){return l},S6:function(){return s},_S:function(){return _}});var n=r(780277),i=r(342513),o=r(819267),u=(0,i.Z)("Pins"),a=u.Provider,c=u.useHook,l=u.useMaybeHook;function s(){var e=c();return function(t){return e[t]}}function _(e){var t=e.children,r=(0,n.useSelector)(function(e){return e.pins},n.shallowEqual);return(0,o.jsx)(a,{value:r,children:t})}},86967:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(684404),i=r(140017),o=r(165706),u=r(179425),a=r(913449),c=r(125768),l=r(819267);function s(e){var t=(0,i.ZP)(),r=e.backButtonIcon,s=e.errorMessage,_=e.name,f=e.onNextButtonTouch,E=e.onNameChange,p=e.selectedPinIds,d=void 0===p?[]:p,O=e.useRoundedCorners,S=d.length>0?130:64;return(0,l.jsxs)(u.default,{hasFixedHeader:!0,children:[(0,l.jsxs)(o.FixedHeader,{height:S,paddingY:3,useRoundedCorners:O,children:[(0,l.jsxs)(n.kC,{alignItems:"center",justifyContent:"between",children:[(0,l.jsx)(c.Z,{color:"darkGray",icon:r||"cancel",padding:3,size:"sm"}),(0,l.jsx)(n.X6,{accessibilityLevel:1,size:"300",children:t._('Add section', 'for add board section page', 'for add board section page')}),(0,l.jsx)(n.xu,{"data-test-id":"create-section-button",children:(0,l.jsx)(n.zx,{accessibilityLabel:t._('Add', 'boardSectionCreate.Add.Button.Text', 'Add button accessibility label for board section create page'),color:"red",disabled:""===_.trim(),onClick:f,size:"lg",text:t._('Next', 'Next button for board section create page', 'Next button for board section create page')})})]}),d&&(0,l.jsx)(a.Z,{selectedPinIds:d})]}),(0,l.jsx)(n.xu,{"data-test-id":"addSectionName",paddingX:2,paddingY:3,children:(0,l.jsx)(n.nv,{errorMessage:s||"",id:"section-name-input",label:t._('Name', 'boardSectionCreate.TextField.Name.Label', 'TextField label to Name on BoardSectionCreate'),onChange:function(e){return E(e.event)},size:"lg",value:_})})]})}},913449:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(672652),i=r(684404),o=r(140017),u=r(19447),a=r(819267);function c(e){var t=e.selectedPinIds,r=(0,o.ZP)(),c=(0,n.useRef)(),l=(0,u.AF)(),s=(t||[]).map(function(e){return l[e]}).filter(Boolean);(0,n.useEffect)(function(){var e=c.current;e&&(e.scrollLeft=e.scrollWidth-e.offsetWidth)},[s]);var _=s.map(function(e,t){var n,o,u,c,l=e.description,s=e.images,_=null==s?void 0:s["236x"];return(0,a.jsx)(i.xu,{marginEnd:1,children:(0,a.jsx)(i.zd,{height:65,rounding:2,wash:!0,width:50,children:(0,a.jsx)(i.Ee,{alt:!!(null!=l&&l.trim())&&(null==l?void 0:l.trim())||r._('Selected Pin', 'SelectedPinsPreview.image.accessibilityLabel', 'Accessibility label for Pin image without description'),color:null!==(n=e.dominant_color)&&void 0!==n?n:"",fit:"contain",naturalHeight:null!==(o=null==_?void 0:_.height)&&void 0!==o?o:1,naturalWidth:null!==(u=null==_?void 0:_.width)&&void 0!==u?u:1,src:null!==(c=null==_?void 0:_.url)&&void 0!==c?c:""})})},t)});return(0,a.jsx)(i.xu,{ref:c,display:"flex",marginTop:2,overflow:"scroll",children:_})}},237040:function(e,t,r){"use strict";r.d(t,{J1:function(){return l},Uw:function(){return c},Yg:function(){return _},ib:function(){return E},jT:function(){return O},nF:function(){return d},xX:function(){return p}});var n=r(340523),i=r(5859),o=r(554786),u=r(953565),a=function(){var e=(0,i.B)(),t=e.isAuthenticated;return e.isBot?"bot":t?"auth":"unauth"},c=function(e){var t=e.isDesktop,r=e.viewerType;return"bot"===r?"seo_graphql_pin_page":"auth"===r?t?"auth_dweb_graphql_pin_page":"auth_mweb_graphql_pin_page":t?"unauth_dweb_graphql_pin_page":"unauth_mweb_graphql_pin_page"},l=function(){return c({isDesktop:(0,o.HG)(),viewerType:a()})},s=function(e){var t=e.checkExperiment,r=e.isAuthMweb&&t("auth_mweb_graphql_pin_page",{dangerouslySkipActivation:!0}).group;return r?function(e){return(0,u.nP)("webapp.graphql.debug_auth_mweb_graphql_pin_page",{sampleRate:1,tags:{event:e,group:r}})}:null},_=function(){var e=(0,i.B)().isAuthenticated,t=(0,o.HG)();return s({checkExperiment:(0,n.F)().checkExperiment,isAuthMweb:e&&!t})},f=0,E=function(e){var t=s({checkExperiment:e.checkExperiment,isAuthMweb:e.isAuthMweb});t&&(f+=1)<10&&t("repin_".concat(f))};function p(e,t,r){var n=c({isDesktop:t,viewerType:r});switch(n){case"auth_dweb_graphql_pin_page":return e(n),{isGraphQLEnabledForRelatedPins:!1,isGraphQLEnabledInGeneral:!1,experimentName:n};case"seo_graphql_pin_page":case"unauth_dweb_graphql_pin_page":case"unauth_mweb_graphql_pin_page":return e(n),{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,experimentName:n};case"auth_mweb_graphql_pin_page":var i=e(n),o=i.anyEnabled,u=i.group;if(o)return{isGraphQLEnabledInGeneral:!0,isGraphQLEnabledForRelatedPins:!0,experimentName:n};if(u.includes("only_related_pins"))return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!0,experimentName:n};return{isGraphQLEnabledInGeneral:!1,isGraphQLEnabledForRelatedPins:!1,experimentName:n};default:throw Error("Unexpected case")}}function d(){return p((0,n.F)().checkExperiment,(0,o.HG)(),a())}function O(){var e=d();return"auth_mweb_graphql_pin_page"===e.experimentName?e.isGraphQLEnabledInGeneral&&e.isGraphQLEnabledForRelatedPins?"enabled":e.isGraphQLEnabledForRelatedPins?"only_related_pins":"disabled":"auth_dweb_graphql_pin_page"===e.experimentName?"":"enabled"}},273937:function(e){e.exports=function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},789543:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},498038:function(e,t,r){var n=r(176589);e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},8235:function(e){e.exports=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r},e.exports.__esModule=!0,e.exports.default=e.exports},176589:function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/90959-bdbcd748df795822.js.map