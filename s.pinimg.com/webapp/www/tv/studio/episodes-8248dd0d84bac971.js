(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[22013],{5595:function(e,t,i){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/tv/studio/episodes"]=function(){return i(593314).Z}},647867:function(e,t,i){"use strict";var r=i(684404),o=i(140017),n=i(819267);t.Z=function(){var e=(0,o.ZP)();return(0,n.jsx)(r.xu,{color:"darkWash",paddingX:2,paddingY:1,rounding:"pill",children:(0,n.jsx)(r.kC,{alignItems:"center",direction:"row",gap:1,children:(0,n.jsx)(r.xv,{size:"100",weight:"bold",children:e._('Test Episode', 'web.pinTv.studio.testStatus.testEpisode', 'Test Episode')})})})}},145195:function(e,t,i){"use strict";var r=i(684404),o=i(140017),n=i(641016),s=i(819267);t.Z=function(e){var t=e.approvalStatus,i=(0,o.ZP)();return t===n.oF.PENDING||t===n.oF.SOFT_REJECTED?(0,s.jsx)(r.xu,{color:"infoWeak",paddingX:2,paddingY:1,rounding:"pill",children:(0,s.jsx)(r.xv,{size:"100",weight:"bold",children:i._('Pending', 'web.pinTv.studio.approvalStatus.pending', 'Pending approval status')})}):t===n.oF.REJECTED?(0,s.jsx)(r.xu,{color:"errorWeak",paddingX:2,paddingY:1,rounding:"pill",children:(0,s.jsx)(r.xv,{size:"100",weight:"bold",children:i._('Rejected', 'web.pinTv.studio.approvalStatus.rejected', 'Rejected approval status')})}):t===n.oF.APPROVED?(0,s.jsx)(r.xu,{color:"successWeak",paddingX:2,paddingY:1,rounding:"pill",children:(0,s.jsx)(r.xv,{size:"100",weight:"bold",children:i._('Approved', 'web.pinTv.studio.approvalStatus.approved', 'Approved approval status')})}):t===n.oF.DRAFT?(0,s.jsx)(r.xu,{color:"warningWeak",paddingX:2,paddingY:1,rounding:"pill",children:(0,s.jsx)(r.xv,{size:"100",weight:"bold",children:i._('Draft', 'web.pinTv.studio.approvalStatus.draft', 'Draft approval status')})}):null}},905937:function(e,t,i){"use strict";i.d(t,{H:function(){return g},Q:function(){return v}});var r,o,n=i(672652),s=i(342513),a=i(7829),l=i(107366);function d(e,t,i,r,o,n,s){try{var a=e[n](s),l=a.value}catch(e){i(e);return}a.done?t(l):Promise.resolve(l).then(r,o)}var c=(r=regeneratorRuntime.mark(function e(t){var i,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.seriesId,r=t.isAutogenerated,e.next=3,(0,l.Z)({url:"/v3/classes/".concat(i,"/"),method:"PUT",data:{is_autogenerated:r,add_fields:"creatorclass.is_autogenerated"}});case 3:if(!(o=e.sent.resource_response)){e.next=7;break}return e.abrupt("return",o.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}),o=function(){var e=this,t=arguments;return new Promise(function(i,o){var n=r.apply(e,t);function s(e){d(n,i,o,s,a,"next",e)}function a(e){d(n,i,o,s,a,"throw",e)}s(void 0)})},function(e){return o.apply(this,arguments)}),u=i(819267);function _(e,t,i,r,o,n,s){try{var a=e[n](s),l=a.value}catch(e){i(e);return}a.done?t(l):Promise.resolve(l).then(r,o)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=Array(t);i<t;i++)r[i]=e[i];return r}var h=(0,s.Z)("ActiveSeries"),f=h.Provider,v=h.useHook,g=function(e){var t,i,r,o=e.children,s=function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(void 0))||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,o,n,s,a=[],l=!0,d=!1;try{if(n=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;l=!1}else for(;!(l=(r=n.call(i)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){d=!0,o=e}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(d)throw o}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return p(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=s[0],d=s[1],h=(0,a.Z)({name:"ApiResource",getOptions:function(e){var t=e.user;return t.isAuth&&t.id?{url:"/v3/users/".concat(t.id,"/classes/"),data:{class_user_type:1,add_fields:"creatorclass.is_autogenerated"}}:{}}}),v=h.data,g=h.refresh,m=(0,n.useCallback)((i=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({seriesId:t,isAutogenerated:!0});case 2:d(e.sent);case 4:case"end":return e.stop()}},e)}),r=function(){var e=this,t=arguments;return new Promise(function(r,o){var n=i.apply(e,t);function s(e){_(n,r,o,s,a,"next",e)}function a(e){_(n,r,o,s,a,"throw",e)}s(void 0)})},function(e){return r.apply(this,arguments)}),[]);return(0,n.useEffect)(function(){if(!l){var e=v&&v.find(function(e){return e.is_autogenerated});e?d(e):v&&1===v.length&&m(v[0].id)}},[l,v,m]),(0,u.jsx)(f,{value:{series:l,refresh:g},children:o})}},593314:function(e,t,i){"use strict";i.d(t,{Z:function(){return H}});var r=i(672652),o=i(328038),n=i(684404),s=i(140017),a=i(340523),l=i(149722),d=i(164212),c=i(568378),u=i(635634),_=i(561953),p=i(302909),h=i(7829),f=i(483092),v=i(339001),g=i(97484),m=i(736561),x=i(624090),b=i(641016),A=i(60266),P=i(819267);function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=Array(t);i<t;i++)r[i]=e[i];return r}var j=function(e){var t,i,o,a=e.episode,l=e.onDelete,d=(0,s.ZP)(),c=function(e){if(Array.isArray(e))return e}(t=(0,r.useState)(!1))||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var r,o,n,s,a=[],l=!0,d=!1;try{if(n=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;l=!1}else for(;!(l=(r=n.call(i)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){d=!0,o=e}finally{try{if(!l&&null!=i.return&&(s=i.return(),Object(s)!==s))return}finally{if(d)throw o}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return w(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=c[0],_=c[1],p=a.live_status===m.Ct.POST_LIVE,h=a.admin_approval_status===b.oF.APPROVED,f=a.id,v=(0,g.Z)(new Date(null!==(i=a.ends_at)&&void 0!==i?i:""));return p||!f||h&&v?null:(0,P.jsxs)(r.Fragment,{children:[(0,P.jsxs)(n.kC,{direction:"row",children:[!v&&(0,P.jsx)(n.hU,{accessibilityLabel:d._('Edit episode', 'webapp.app.pinTv.creatorStudio.episode.button.edit', 'accessibility label for episode edit button'),icon:"edit",onClick:function(e){e.event.preventDefault(),window.location=(0,A.Z)("EDIT_EPISODE",f)},size:"lg",tooltip:{text:d._('Edit episode', 'webapp.app.pinTv.creatorStudio.episode.button.edit.tooltip', 'tooltip text for episode edit button')}}),(0,P.jsx)(n.hU,{accessibilityLabel:d._('Delete episode', 'webapp.app.pinTv.creatorStudio.episode.button.delete', 'accessibility label for episode delete button'),icon:"trash-can",onClick:function(){_(!0)},size:"lg",tooltip:{text:d._('Delete episode', 'webapp.app.pinTv.creatorStudio.episode.button.delete.tooltip', 'tooltip text for episode delete button')}})]}),l&&(0,P.jsx)(x.Z,{episodeId:f,episodeTitle:null!==(o=a.title)&&void 0!==o?o:"",isVisible:u,onDismiss:function(){l(),_(!1)}})]})},T=function(e){var t,i=e.episode,r=(0,s.ZP)(),o=i.hero_images?i.hero_images["750x"]:{},a=i.preview_video||{};return(0,P.jsx)(n.xu,{height:110,overflow:"hidden",rounding:4,width:140,children:(0,P.jsxs)(n.kC,{direction:"row",height:"100%",width:"100%",children:[(0,P.jsx)(n.kC.Item,{flex:"grow",children:o&&o.url?(0,P.jsx)(n.Ee,{alt:r._('Preview image for episode', 'webapp.app.pinTv.creatorStudio.episode.previewImage.alt', 'accessibility, alt label for preview image'),color:"gray",fit:"cover",naturalHeight:o.height||0,naturalWidth:o.width||0,src:o.url||""}):(0,P.jsx)(n.xu,{alignItems:"center",color:"secondary",direction:"column",display:"flex",height:"100%",justifyContent:"center",width:"100%"})}),(0,P.jsx)(n.iz,{}),(0,P.jsx)(n.kC.Item,{flex:"grow",children:a.cover_image_url?(0,P.jsx)(n.Ee,{alt:r._('Preview image for episodes preview video', 'webapp.app.pinTv.creatorStudio.episode.previewImageVideo.alt', 'accessibility, alt label for preview video image'),color:"gray",fit:"cover",naturalHeight:0,naturalWidth:0,src:(null===(t=i.preview_video)||void 0===t?void 0:t.cover_image_url)||"",children:(0,P.jsx)(n.kC,{alignItems:"center",height:"100%",justifyContent:"center",width:"100%",children:(0,P.jsx)(n.xu,{opacity:.5,children:(0,P.jsx)(n.JO,{accessibilityLabel:"",color:"inverse",icon:"play",size:"24"})})})}):(0,P.jsx)(n.xu,{alignItems:"center",color:"secondary",direction:"column",display:"flex",height:"100%",justifyContent:"center",width:"100%"})})]})})},y=i(656418),E=i(502187),z=function(e){var t=e.startsAt;if(!t)return null;var i=(0,E.N)(t);return i<-120?null:(0,P.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:i>5||i<=0?y._VP:y.EEg}},paddingX:2,paddingY:1,rounding:"pill",children:(0,P.jsxs)(n.kC,{alignItems:"center",direction:"row",gap:1,children:[(0,P.jsx)(n.JO,{accessibilityLabel:"",color:"dark",icon:"clock",size:"12"}),(0,P.jsx)(n.xv,{size:"100",weight:"bold",children:(0,P.jsx)(E.Z,{time:t})})]})})},S=i(647867),D=i(145195),I=function(e){var t,i,r,o,a=e.episode,d=e.onDelete,c=e.shouldHideActions,u=e.shouldHideApprovalBadge,_=(0,s.ZP)(),p=(0,l.Z)(),h=null!==(t=null===(i=a.creator_class)||void 0===i?void 0:i.creator)&&void 0!==t?t:{},g=null!==(r=null===(o=a.creator_class)||void 0===o?void 0:o.is_test)&&void 0!==r?r:{},m=h.id===(p.isAuth?p.id:""),x=a.admin_approval_status;return a.id?(0,P.jsx)(n.xu,{borderStyle:"shadow","data-test-id":"episode-".concat(a.id),padding:5,rounding:4,width:"100%",children:(0,P.jsxs)(n.kC,{alignItems:"center",direction:"row",gap:5,children:[(0,P.jsx)(T,{episode:a}),(0,P.jsx)(n.kC.Item,{flex:"grow",children:(0,P.jsx)(n.Tg,{fullHeight:!0,fullWidth:!0,href:(0,A.Z)("EPISODE",a.id),rounding:4,children:(0,P.jsxs)(n.kC,{direction:"column",gap:3,children:[(0,P.jsxs)(n.kC,{alignItems:"center",direction:"row",gap:2,children:[(0,P.jsx)(z,{startsAt:a.starts_at}),!(void 0!==u&&u)&&x&&(0,P.jsx)(D.Z,{approvalStatus:x}),g&&(0,P.jsx)(S.Z,{}),!m&&(0,P.jsx)(n.xv,{lineClamp:1,size:"100",children:(0,v.nk)(_._('Hosted by {{hostName}}', 'webapp.app.pinTv.creatorStudio.episode.hostedBy', 'label for episode if it is hosted by someone who is not the viewer, hostName: name of the host of the episode'),{hostName:h.full_name})})]}),(0,P.jsx)(n.xv,{lineClamp:1,size:"500",weight:"bold",children:a.title}),(0,P.jsx)(n.xv,{children:(0,v.nk)(_._('{{date}} at {{time}} - {{endTime}}', 'webapp.app.pinTv.creatorStudio.episode.dateTime', 'date and time of an episode, date: date of episode, time: time of episode, endTime: end time of episode'),{date:(0,f.Z)(a.starts_at?new Date(a.starts_at):new Date,b.yd,"eeee, MMMM do"),time:(0,f.Z)(a.starts_at?new Date(a.starts_at):new Date,b.yd,"h:mm aaa zzz"),endTime:(0,f.Z)(a.ends_at?new Date(a.ends_at):new Date,b.yd,"h:mm aaa zzz")})})]})})}),m&&!(void 0!==c&&c)&&(0,P.jsx)(j,{episode:a,onDelete:d})]})}):null},C=function(){var e=(0,s.ZP)();return(0,P.jsx)(r.Fragment,{children:(0,P.jsx)(n.ci,{iconAccessibilityLabel:e._('warning', 'webapp.app.pinTv.studio.episodes.deprecation.icon', 'Callout icon a11y label'),message:e._('Video content across Pinterest is now integrated into our most highly trafficked surfaces, like Home feed. We encourage you to submit your content in alignment to our Monthly Trends at the link below for a chance to be featured in Pinterest content.', 'webapp.app.pinTv.studio.episodes.deprecation.message', 'Pinterest TV deprecation callout message'),primaryAction:{accessibilityLabel:e._('Submit to Monthly Trends', 'webapp.app.pinTv.studio.episodes.deprecation.primaryAction.a11yLabel', 'a11y label for trends to try link'),href:"https://creators.pinterest.com/trends/?utm_source=TV_Studio_09142023",target:"blank",label:e._('Submit to Monthly Trends', 'webapp.app.pinTv.studio.episodes.deprecation.primaryAction.label', 'trends to try link button'),role:"link"},type:"warning"})})},O=function(e){var t=e.filter,i=(0,s.ZP)(),r=(0,h.Z)({name:"ApiResource",getOptions:function(e){var t=e.routeData.parsedSearch.filter;return t?{url:"/v3/users/me/episodes",data:{feed_type:t,add_fields:["creatorclass.{creator(),hero_video(),hero_images(),is_test}","creatorclassinstance.{creator_class(),hero_images(),hero_video(),preview_video(),admin_approval_status,admin_rejection_reasons}","video.{id,cover_image_url,signature}"]}}:{}}}),o=r.data,a=r.isAtEnd,l=r.isFetching,d=r.fetchMore,c=r.refresh,f=r.isLoaded;return f?f&&o&&0===o.length?(0,P.jsx)(n.xu,{"data-test-id":"pintv-studio-no-episodes",marginBottom:12,marginEnd:"auto",marginStart:"auto",maxWidth:920,paddingY:6,width:"90%",children:(0,P.jsxs)(n.kC,{direction:"column",gap:2,children:[(0,P.jsx)(C,{}),t===b.Tx.REJECTED&&(0,P.jsx)(n.xv,{children:i._('No rejected episodes', 'webapp.app.pinTv.studio.episodes.noRejected', 'Note for user that they have no rejected episodes')})]})}):f&&o&&o.length>0?(0,P.jsxs)(n.xu,{"data-test-id":"pintv-studio-episodes-list",marginBottom:12,marginEnd:"auto",marginStart:"auto",maxWidth:920,width:"90%",children:[(0,P.jsx)(C,{}),(0,P.jsxs)(n.kC,{direction:"column",gap:5,children:[o.reduce(function(e,t,i,r){var o,s,a,l=r[i-1],d=[];return(0===i||!function(e,t){(0,_.Z)(2,arguments);var i=(0,u.Z)(e),r=(0,u.Z)(t);return i.getFullYear()===r.getFullYear()&&i.getMonth()===r.getMonth()}(new Date(null!==(o=l.starts_at)&&void 0!==o?o:""),new Date(null!==(s=t.starts_at)&&void 0!==s?s:"")))&&d.push((0,P.jsx)(n.xu,{marginTop:4,children:(0,P.jsx)(n.X6,{accessibilityLevel:"none",size:"300",children:(0,p.Z)(new Date(null!==(a=t.starts_at)&&void 0!==a?a:""),"MMMM yyyy")})},t.starts_at)),d.push((0,P.jsx)(I,{episode:t,onDelete:function(){return c()}},t.id)),e.concat(d)},[]),!a&&(0,P.jsxs)(n.xu,{marginTop:4,children:[l&&(0,P.jsx)(n.xu,{marginBottom:4,children:(0,P.jsx)(n.$j,{accessibilityLabel:i._('Loading more episodes', 'webapp.app.pinTv.studio.episodes.loadMore.a11yLabel', 'accessibility label for loading more'),show:!0})}),(0,P.jsx)(n.kC,{alignItems:"center",direction:"column",width:"100%",children:(0,P.jsx)(n.zx,{onClick:function(){return d()},text:i._('Load more', 'webapp.app.pinTv.studio.episodes.loadMore', 'Button to load more episodes')})})]})]})]}):null:(0,P.jsx)(n.xu,{"data-test-id":"pintv-studio-no-episodes-loading",marginBottom:12,marginEnd:"auto",marginStart:"auto",maxWidth:920,paddingY:6,width:"90%",children:(0,P.jsx)(n.$j,{accessibilityLabel:i._('Loading episodes', 'webapp.app.pinTv.studio.episodes.fetching', 'Loading episodes spinner'),show:!0,size:"md"})})},k=i(53978),R=function(e){var t=e.filter,i=(0,o.TH)().pathname,r=(0,k.Z)("PINTEREST_TV_CREATOR_STUDIO_EPISODES_PAGE"),a=(0,s.ZP)();return(0,P.jsx)(n.mQ,{activeTabIndex:t?t-1:0,onChange:function(e){var t,i;r({eventName:"PINTEREST_TV_CREATOR_STUDIO_ACTION",component:"PINTEREST_TV_CREATOR_STUDIO_NAVIGATION",componentId:"episodes-navigation-tabs",element:"PINTEREST_TV_CREATOR_STUDIO_TAB",elementId:null!==(t=null===(i=e.event.currentTarget.parentElement)||void 0===i?void 0:i.id)&&void 0!==t?t:""})},tabs:[{href:"".concat(i,"?filter=").concat(b.Tx.UPCOMING),id:"upcoming",text:a._('Upcoming', 'webapp.app.pinTv.creatorStudio.episodes.upcoming', 'Upcoming filter for episodes')},{href:"".concat(i,"?filter=").concat(b.Tx.PREVIOUS),id:"previous",text:a._('Previous', 'webapp.app.pinTv.creatorStudio.episodes.previous', 'Previous filter for episodes')},{href:"".concat(i,"?filter=").concat(b.Tx.PENDING),id:"pending",text:a._('Pending', 'webapp.app.pinTv.creatorStudio.episodes.pending', 'Pending filter for episodes')},{href:"".concat(i,"?filter=").concat(b.Tx.DRAFT),id:"drafts",text:a._('Drafts', 'webapp.app.pinTv.creatorStudio.episodes.drafts', 'Draft filter for episodes')},{href:"".concat(i,"?filter=").concat(b.Tx.REJECTED),id:"rejected",text:a._('Rejected', 'webapp.app.pinTv.creatorStudio.episodes.rejected', 'Rejected fitler for episodes')}]})},Z=function(){var e=(0,o.TH)().search;return(0,r.useMemo)(function(){return new URLSearchParams(e)},[e])},L=function(){var e=Z(),t=(0,o.k6)().replace,i=(0,o.TH)().pathname,s=e.has("filter")?parseInt(e.get("filter"),10):void 0;return((0,r.useEffect)(function(){s&&Object.values(b.Tx).includes(s)||t("".concat(i,"?filter=1"))},[s,t,i]),s)?(0,P.jsxs)(n.kC,{alignItems:"center",direction:"column",width:"100%",children:[(0,P.jsx)(R,{filter:s}),(0,P.jsx)(O,{filter:s})]}):null},N=i(788095),M=i(905937),U=i(331430),V=i(991154),H=function(){var e=(0,s.ZP)(),t=(0,(0,a.F)().checkExperiment)("web_pintv_studio_pending_page").anyEnabled,i=(0,l.Z)(),u=(0,k.Z)("PINTEREST_TV_CREATOR_STUDIO_EPISODES_PAGE");return((0,r.useEffect)(function(){u({eventName:"PINTEREST_TV_CREATOR_STUDIO_PAGE_VIEW"})},[u]),i.isAuth)?(0,P.jsx)(V.Z,{children:(0,P.jsx)(d.Z,{children:(0,P.jsx)(M.H,{children:(0,P.jsxs)(U.x,{children:[(0,P.jsx)(c.Z,{}),(0,P.jsx)(N.Z,{actions:t?[(0,P.jsx)(n.ZP,{href:"/tv/studio/pending/",text:e._('Pending episodes and creators', 'webapp.app.pinTv.studio.sessions.linkToPendingPage', 'Link text indicating the target')},"pending-page-btn")]:[],pageTitle:e._('Pinterest TV Studio', 'webapp.app.pinTv.creatorStudio.episodes.title', 'creator studio page heading'),showAvatar:!0}),(0,P.jsx)(n.xu,{"data-test-id":"series-container",display:"flex",justifyContent:"center",marginEnd:10,marginStart:10,children:(0,P.jsx)(L,{})})]})})})}):(0,P.jsx)(o.l_,{to:"/login?next=".concat(encodeURIComponent("/tv/studio"))})}}},function(e){e.O(0,[97270,84404,28038,24797,55169,64283,56418,2909,64212,38832,31430,53978,93745,55979],function(){return e(e.s=5595)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/tv/studio/episodes-8248dd0d84bac971.js.map