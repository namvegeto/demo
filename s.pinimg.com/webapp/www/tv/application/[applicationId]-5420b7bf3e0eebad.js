(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[96047],{48447:function(e,r,t){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/tv/application/[applicationId]"]=function(){return t(59243).Z}},145228:function(e,r,t){"use strict";t.d(r,{Z:function(){return x}});var a=t(672652),o=t(483092),i=t(684404),l=t(140017),s=t(339001),n=t(819267),c=function(e){var r=e.label,t=e.text,a=e.boldText,o=e.children;return(0,n.jsxs)(i.kC,{direction:"column",gap:{row:0,column:2},children:[(0,n.jsx)(i.xv,{size:"100",children:r}),void 0!==t&&(0,n.jsx)(i.xv,{size:"300",weight:void 0!==a&&a?"bold":"normal",children:t}),void 0===o?null:o]})},p=t(205841),_=function(e){var r=e.username,t=e.name,a=e.imageUrl,o=e.isVerified,s=(0,l.ZP)();return(0,n.jsx)(c,{label:s._('Applicant', 'webapp.app.pinTv.creatorStudio.creatorApproval.applicant', 'label for the section about the applicants info'),children:(0,n.jsxs)(i.kC,{alignItems:"center",direction:"row",gap:{row:2,column:0},children:[(0,n.jsx)(i.xu,{children:(0,n.jsx)(p.qE,{name:t,size:"lg",src:a})}),(0,n.jsxs)(i.kC,{direction:"column",gap:{row:0,column:2},children:[(0,n.jsxs)(i.kC,{direction:"row",gap:{row:2,column:0},children:[(0,n.jsx)(i.xv,{weight:"bold",children:t}),void 0!==o&&o&&(0,n.jsx)(i.JO,{accessibilityLabel:s._('verified user', 'webapp.app.pinTv.creatorStudio.creatorApproval.userIsVerified', 'accessability label if a user is verified'),color:"info",icon:"check-circle"})]}),(0,n.jsx)(i.kC,{direction:"row",gap:{row:2,column:0},children:(0,n.jsx)(i.xv,{color:"subtle",children:(0,n.jsxs)(i.rU,{href:"http://pinterest.com/".concat(r,"/"),target:"blank",children:["@",r]})})})]})]})})},u=t(641016),d=function(e){var r,t=e.format,a=(0,l.ZP)();switch(t){case u.Ym.TRENDSETTER:r=a._('Trendsetter', 'webapp.app.pinTv.creatorStudio.creatorApplication.format.trendsetterLabel', 'Trendsetter label');break;case u.Ym.IMMERSIVE:r=a._('Immersive', 'webapp.app.pinTv.creatorStudio.creatorApplication.format.immersiveLabel', 'Immersive label');break;case u.Ym.HOW_TO:r=a._('How-to', 'webapp.app.pinTv.creatorStudio.creatorApplication.howToLabel', 'How-to label');break;case u.Ym.TRANSFORMATIVE:r=a._('Transformative', 'webapp.app.pinTv.creatorStudio.creatorApplication.format.transformativesLabel', 'Transformative label');break;case u.Ym.LIVE_EVENT:r=a._('Live Event', 'webapp.app.pinTv.creatorStudio.creatorApplication.format.liveEventLabel', 'Live Event label');break;default:return null}return(0,n.jsx)(i.xu,{color:"successWeak",marginBottom:2,marginTop:2,padding:2,rounding:"pill",children:(0,n.jsx)(i.xv,{size:"200",weight:"bold",children:r})})},h=function(e){var r=e.interests,t=(0,l.ZP)(),o={BEAUTY:t._('Beauty', 'webapp.app.pinTv.creatorStudio.creatorApplication.category.beautyLabel', 'Beauty label'),WOMENS_FASHION:t._('Women\'s fashion', 'webapp.app.pinTv.creatorStudio.creatorApplication.category.womensFashionLabel', 'Women\'s fashion label'),FOOD_AND_DRINKS:t._('Food and drinks', 'webapp.app.pinTv.creatorStudio.creatorApplication.category.foodAndDrinksLabel', 'Food and Drinks label'),HOME:t._('Home', 'webapp.app.pinTv.creatorStudio.creatorApplication.category.homeLabel', 'Home label'),OTHER:t._('Other', 'webapp.app.pinTv.creatorStudio.creatorApplication.otherLabel', 'Other label')};return r?(0,n.jsx)(a.Fragment,{children:r.map(function(e){return(0,n.jsx)(i.xu,{color:o[e]?"infoWeak":"errorWeak",margin:2,padding:2,rounding:"pill",children:o[e]&&"OTHER"!==e?(0,n.jsx)(i.xv,{size:"200",weight:"bold",children:o[e]}):(0,n.jsx)(i.u,{text:t._('This is not a supported interest, producers will have to manually set them for this creator once approved.', 'webapp.app.pinTv.creatorStudio.creatorApplication.unsupportedInterests', 'Tooltip for unsupported interests appearing in a creator application.'),children:(0,n.jsxs)(i.xv,{size:"200",weight:"bold",children:["OTHER"===e?o[e]:e,"\xa0",(0,n.jsx)(i.JO,{accessibilityLabel:t._('Warning about this interest', 'webapp.app.pinTv.creatorStudio.creatorApplication.unsupporteInterestsIcon', 'Accessibility label for an alert/error icon'),icon:"alert",inline:!0})]})})},e)})}):null};function v(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,o,i,l,s=[],n=!0,c=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;n=!1}else for(;!(n=(a=i.call(t)).done)&&(s.push(a.value),s.length!==r);n=!0);}catch(e){c=!0,o=e}finally{try{if(!n&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw o}}return s}}(e,r)||function(e,r){if(e){if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=Array(r);t<r;t++)a[t]=e[t];return a}var x=function(e){var r=e.id,t=e.name,p=e.applicationSource,f=e.userId,x=e.format,b=e.username,A=e.showBrief,m=e.isPending,w=e.userImage,P=e.interests,g=e.isRejected,j=e.isVerified,T=e.previewVideo,z=e.exampleVideo,y=e.followerCount,S=e.dateSubmitted,E=e.liveExperience,k=e.isBusinessAccount,C=e.onReject,I=e.onApprove,R=e.onUnreject,L=e.userCountry,O=e.rejectionReason,D=(0,l.ZP)(),Z=((null==z?void 0:z.video_list)||{}).V_720P,H=(null==Z?void 0:Z.url)||"",N=(null==Z?void 0:Z.width)||0,B=(null==Z?void 0:Z.height)||0,V=v((0,a.useState)(0),2),M=V[0],U=V[1],W=v((0,a.useState)(!1),2),F=W[0],Y=W[1];return(0,a.useEffect)(function(){U(F?1:0)},[F]),(0,n.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{boxShadow:"rgba(0,0,0,0.1) 0px 1px 10px 0px"}},display:"flex",marginBottom:4,marginTop:2,padding:4,rounding:4,width:"100%",children:(0,n.jsxs)(i.kC,{alignContent:"start",direction:"row",width:"100%",children:[(0,n.jsx)(i.sg,{span:4,children:(0,n.jsxs)(i.kC,{direction:"column",gap:{row:0,column:5},justifyContent:"start",children:[(0,n.jsx)(_,{imageUrl:w||"",isVerified:j,name:t,username:b}),(0,n.jsx)(c,{boldText:!0,label:D._('Application source', 'webapp.app.pinTv.creatorStudio.creatorApproval.applicationSource', 'label for user\'s application source'),text:function(e){switch(e){case u.S7.CREATOR_STUDIO:return D._('Creator Studio Web', 'webapp.app.pinTv.creatorStudio.creatorApproval.creatorStudioWeb', 'Source is Creator Studio web');case u.S7.PINTEREST_APP:return D._('Pinterest App', 'webapp.app.pinTv.creatorStudio.creatorApproval.pinterestApp', 'Source is Pinterest app');case u.S7.MANAGED:return D._('Admin Tool', 'webapp.app.pinTv.creatorStudio.creatorApproval.adminTool', 'Source is Admin tool');default:return e}}(p)}),(0,n.jsx)(c,{boldText:!0,label:D._('User country', 'webapp.app.pinTv.creatorStudio.creatorApproval.userCountry', 'label for users\'s country'),text:(0,s.nk)(D._('{{userCountry}}', 'webapp.app.pinTv.creatorStudio.creatorApproval.userCountry.text', 'userCountry: text with user\'s country'),{userCountry:L})}),(0,n.jsx)(c,{boldText:!0,label:D._('Followers', 'webapp.app.pinTv.creatorStudio.creatorApproval.followers', 'label for users followers count'),text:y}),(0,n.jsx)(c,{boldText:!0,label:D._('Business account', 'webapp.app.pinTv.creatorStudio.creatorApproval.businessAccount', 'Label if a user has a business account'),text:k?D._('Yes', 'webapp.app.pinTv.creatorStudio.creatorApproval.isBusinessAccount.yes', 'The creator is a business account'):D._('No', 'webapp.app.pinTv.creatorStudio.creatorApproval.isBusinessAccount.no', 'The creator is not a business account')}),(0,n.jsx)(c,{boldText:!0,label:D._('Date submitted', 'webapp.app.pinTv.creatorStudio.creatorApproval.dateSubmitted', 'label for the date an application was submitted'),text:(0,o.Z)(new Date(S),u.yd,"eeee, MMMM do")}),(0,n.jsxs)(i.kC,{direction:"column",gap:2,children:[(0,n.jsx)(i.xv,{size:"100",children:D._('Application link', 'webapp.app.pinTv.creatorStudio.creatorApproval.applicationLink', 'label for the application link')}),(0,n.jsx)(i.rU,{href:"/tv/application/".concat(r,"/"),onClick:function(e){e.event.stopPropagation()},children:(0,n.jsx)(i.xv,{size:"300",weight:"bold",children:r})})]})]})}),(0,n.jsxs)(i.sg,{span:8,children:[z&&H&&(0,n.jsx)(c,{label:D._('Example video', 'webapp.app.pinTv.creatorStudio.creatorApproval.exampleVideo', 'label for the example video'),children:(0,n.jsx)(i.xu,{height:u.S2,width:u.Lc,children:(0,n.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"black"}},display:"flex",height:"100%",id:"video-box",justifyContent:"center",overflow:"hidden",rounding:3,width:"100%",children:(0,n.jsx)(i.nk,{aspectRatio:N/B,captions:"",controls:!0,loop:!0,onControlsPause:function(){return Y(!1)},onControlsPlay:function(){return Y(!0)},onPlay:function(){return Y(!0)},onPlayError:function(){return Y(!1)},onVolumeChange:function(e){return U(e.volume)},playing:F,src:H,volume:M})})})}),(0,n.jsxs)(i.kC,{direction:"column",gap:{row:0,column:5},justifyContent:"start",children:[T&&(0,n.jsx)(c,{label:D._('Preview video', 'webapp.app.pinTv.creatorStudio.creatorApproval.previewVideo', 'label for section about the users preview video'),text:(0,n.jsx)(i.rU,{display:"inlineBlock",href:T,children:T})}),A&&(0,n.jsx)(c,{label:D._('Show brief', 'webapp.app.pinTv.creatorStudio.creatorApproval.showBrief', 'label for a section about a summary of what the user wants to do on pinterest tv'),children:(0,n.jsx)(i.xv,{children:A})}),E&&(0,n.jsx)(c,{label:D._('Experience with live content', 'webapp.app.pinTv.creatorStudio.creatorApproval.experienceWithLiveContent', 'label for a section about a users experience with live content'),children:(0,n.jsx)(i.xv,{children:E})}),P&&P.length>0&&(0,n.jsx)(i.kC,{direction:"row",gap:{row:2,column:0},justifyContent:"between",children:(0,n.jsx)(c,{label:D._('Categories', 'webapp.app.pinTv.creatorStudio.creatorApproval.categories', 'label for a section of the users categories'),children:(0,n.jsxs)(i.xu,{direction:"row",display:"flex",margin:-2,wrap:!0,children:[(0,n.jsx)(h,{interests:P}),(0,n.jsx)(d,{format:x})]})})}),g&&(0,n.jsxs)(i.kC,{alignItems:"center",gap:2,justifyContent:"end",children:[(0,n.jsx)(i.xu,{children:(0,n.jsx)(i.xv,{weight:"bold",children:O})}),(0,n.jsx)(i.zx,{onClick:function(){R(r)},text:D._('Unreject', 'webapp.app.pinTv.creatorStudio.creatorApproval.unrejectButton', 'Unreject button')})]}),m&&(0,n.jsx)(i.kC,{justifyContent:"end",children:(0,n.jsxs)(i.hE,{children:[(0,n.jsx)(i.zx,{onClick:function(){C(r)},text:D._('Reject', 'webapp.app.pinTv.creatorStudio.creatorApproval.rejectButton', 'Reject button')}),(0,n.jsx)(i.zx,{color:"red",onClick:function(){I(r,f,t,P)},text:D._('Approve', 'webapp.app.pinTv.creatorStudio.creatorApproval.approveButton', 'Approve button')})]})})]})]})]})})}},97781:function(e,r,t){"use strict";var a,o,i=t(107366),l=t(641016);function s(e,r,t,a,o,i,l){try{var s=e[i](l),n=s.value}catch(e){t(e);return}s.done?r(n):Promise.resolve(n).then(a,o)}var n=(a=regeneratorRuntime.mark(function e(r){var t,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.applicationId,a=r.status,e.next=3,(0,i.Z)({url:"/v3/classes/applications/".concat(t,"/status/"),method:"PUT",data:{status:l.oZ[a]}});case 3:if(!(o=e.sent.resource_response)){e.next=7;break}return e.abrupt("return",o.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}),o=function(){var e=this,r=arguments;return new Promise(function(t,o){var i=a.apply(e,r);function l(e){s(i,t,o,l,n,"next",e)}function n(e){s(i,t,o,l,n,"throw",e)}l(void 0)})},function(e){return o.apply(this,arguments)});r.Z=n},59243:function(e,r,t){"use strict";t.d(r,{Z:function(){return A}});var a=t(328038),o=t(164212),i=t(684404),l=t(454514),s=t(140017),n=t(995917),c=t(13848),p=t(145228),_=t(641016),u=t(97781),d=t(819267);function h(e,r,t,a,o,i,l){try{var s=e[i](l),n=s.value}catch(e){t(e);return}s.done?r(n):Promise.resolve(n).then(a,o)}function v(e){return function(){var r=this,t=arguments;return new Promise(function(a,o){var i=e.apply(r,t);function l(e){h(i,a,o,l,s,"next",e)}function s(e){h(i,a,o,l,s,"throw",e)}l(void 0)})}}var f=function(e){var r,t,a,o=e.id,h=(0,s.ZP)(),f=(0,c.F9)(),x=(0,n.Z)({name:"ApiResource",options:{url:"/v3/classes/applications/".concat(o,"/"),data:{add_fields:["livecreatorapplication.{user(),example_video(),rejection_reason}","user.{full_name,verified_identity,follower_count,is_partner}","video.{id,cover_image_url,duration,signature,title,video_list,video_urls}"]}}}),b=x.data,A=x.isLoaded,m=x.refresh,w=(r=v(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Z)({applicationId:r,status:"HIDDEN"});case 3:f.showToast(function(e){var r=e.hideToast;return(0,d.jsx)(l.ZP,{duration:2e3,onHide:r,text:h._('Success! The application has been successfully rejected.', 'webapp.app.pinTv.studio.pending.application.rejected.successMsg', 'Success message when application has been rejected'),type:"default"})}),m(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f.showToast(function(e){var r=e.hideToast;return(0,d.jsx)(l.ZP,{duration:2e3,onHide:r,text:h._('Error! There was an error. Please try again.', 'webapp.app.pinTv.studio.pending.application.errorMsg', 'Error message of rejecting, approving, or unrejecting fails'),type:"error"})});case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return r.apply(this,arguments)}),P=(t=v(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Z)({applicationId:r,status:"APPROVED"});case 3:f.showToast(function(e){var r=e.hideToast;return(0,d.jsx)(l.ZP,{duration:2e3,onHide:r,text:h._('Success! The application has been successfully approved.', 'webapp.app.pinTv.studio.pending.application.approved.successMsg', 'Success message when application has been approved'),type:"default"})}),m(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f.showToast(function(e){var r=e.hideToast;return(0,d.jsx)(l.ZP,{duration:2e3,onHide:r,text:h._('Error! There was an error. Please try again.', 'webapp.app.pinTv.studio.pending.application.errorMsg', 'Error message of rejecting, approving, or unrejecting fails'),type:"error"})});case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return t.apply(this,arguments)}),g=(a=v(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Z)({applicationId:r,status:"PENDING"});case 3:f.showToast(function(e){var r=e.hideToast;return(0,d.jsx)(l.ZP,{duration:2e3,onHide:r,text:h._('Success! The application has been successfully unrejected.', 'webapp.app.pinTv.studio.pending.application.unrejected.successMsg', 'Success message when application has been unrejected'),type:"default"})}),m(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f.showToast(function(e){var r=e.hideToast;return(0,d.jsx)(l.ZP,{duration:2e3,onHide:r,text:h._('Error! There was an error. Please try again.', 'webapp.app.pinTv.studio.pending.application.errorMsg', 'Error message of rejecting, approving, or unrejecting fails'),type:"error"})});case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return a.apply(this,arguments)});return(0,d.jsxs)(i.xu,{margin:10,children:[(0,d.jsx)(i.xu,{marginBottom:4,children:(0,d.jsx)(i.X6,{children:h._('Creator application', 'webapp.app.pinTv.studio.individualApplication.heading', 'Individual application heading')})}),!A&&(0,d.jsx)(i.$j,{accessibilityLabel:h._('Loading application details', 'webapp.app.pinTv.studio.individualApplication.spinner', 'a11y label for spinner'),show:!A}),b&&(0,d.jsx)(p.Z,{applicationSource:b.application_source,dateSubmitted:b.created_at,exampleVideo:b.example_video,followerCount:b.user.follower_count,format:b.class_format,id:o,interests:b.interests_list,isBusinessAccount:b.user.is_partner,isPending:b.approval_status===_.oZ.PENDING,isRejected:b.approval_status===_.oZ.HIDDEN,isVerified:!1,liveExperience:b.previous_experience_summary,name:b.user.full_name||"".concat(b.user.first_name," ").concat(b.user.last_name),onApprove:P,onReject:w,onUnreject:g,previewVideo:b.example_video_url,rejectionReason:b.rejection_reason,showBrief:b.class_summary,userCountry:b.user_country,userId:b.user.id,userImage:b.user.image_large_url,username:b.user.username},o),!b&&A&&(0,d.jsx)(i.xu,{children:(0,d.jsx)(i.xv,{children:h._('No application found', 'webapp.app.pinTv.studio.noApplicationFound.text', 'No application found text')})})]})},x=t(331430),b=t(991154),A=function(){var e=(0,a.TH)().pathname.split("/")[3];return(0,d.jsx)(b.Z,{children:(0,d.jsx)(o.Z,{children:(0,d.jsx)(x.x,{children:(0,d.jsx)(f,{id:e})})})})}}},function(e){e.O(0,[97270,84404,28038,24797,55169,64283,64212,38832,31430,93745],function(){return e(e.s=48447)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/tv/application/[applicationId]-5420b7bf3e0eebad.js.map