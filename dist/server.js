(()=>{"use strict";var e={64:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.nonce=void 0,t.nonce={},n(r(163),t)},163:function(e,t,r){var o=this&&this.__decorate||function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i};Object.defineProperty(t,"__esModule",{value:!0}),t.MyWorkTab=void 0;const n=r(698);let s=class{};s=o([(0,n.PreventIframe)("/myWorkTab/index.html"),(0,n.PreventIframe)("/myWorkTab/config.html"),(0,n.PreventIframe)("/myWorkTab/remove.html")],s),t.MyWorkTab=s},967:function(e,t,r){var o=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=r(860),s=r(685),i=r(17),a=r(470),c=r(698),u=r(974),p=r(455),d=r(567),f=r(167),l=u("msteams");l("Initializing Microsoft Teams Express hosted App..."),r(142).config();const _=r(64),v=n(),m=process.env.port||process.env.PORT||3007;v.use(n.json({verify:(e,t,r,o)=>{e.rawBody=r.toString()}})),v.use(n.urlencoded({extended:!0})),v.set("views",i.join(__dirname,"/")),v.use(a("tiny")),v.use(p()),v.use("/scripts",n.static(i.join(__dirname,"web/scripts"))),v.use("/assets",n.static(i.join(__dirname,"web/assets"))),v.use((0,c.MsTeamsApiRouter)(_)),v.use((0,c.MsTeamsPageRouter)({root:i.join(__dirname,"web/"),components:_})),v.use("/",n.static(i.join(__dirname,"web/"),{index:"index.html"})),v.get("/exchangeSsoTokenForOboToken",((e,t)=>o(void 0,void 0,void 0,(function*(){l("getting access token for Microsoft Graph...");const r=process.env.TAB_APP_ID,o=process.env.TAB_APP_SECRET,n=e.query.ssoToken,s=`https://login.microsoftonline.com/${(0,d.default)(n).tid}/oauth2/v2.0/token`,i={grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",client_id:r,client_secret:o,assertion:n,requested_token_use:"on_behalf_of",scope:process.env.TAB_APP_SCOPES},a=Object.keys(i).map(((e,t)=>`${e}=${encodeURIComponent(i[e])}`)).join("&"),c={accept:"application/json","content-type":"application/x-www-form-urlencoded"};try{const e=yield f.default.post(s,a,{headers:c});200===e.status?t.status(200).send(e.data):"invalid_grant"===e.data.error||"interaction_required"===e.data.error?t.status(403).json({error:"consent_required"}):t.status(500).json({error:"Could not exchange access token"})}catch(e){t.status(400).json({error:`Unknown error: ${e}`})}})))),v.set("port",m),s.createServer(v).listen(m,(()=>{l(`Server running on ${m}`)}))},167:e=>{e.exports=require("axios")},455:e=>{e.exports=require("compression")},974:e=>{e.exports=require("debug")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},698:e=>{e.exports=require("express-msteams-host")},567:e=>{e.exports=require("jwt-decode")},470:e=>{e.exports=require("morgan")},685:e=>{e.exports=require("http")},17:e=>{e.exports=require("path")}},t={};!function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}(967)})();
//# sourceMappingURL=server.js.map