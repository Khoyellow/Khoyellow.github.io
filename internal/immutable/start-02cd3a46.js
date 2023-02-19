import{S as Ye,i as Xe,s as Ze,a as Qe,e as C,c as xe,b as K,g as ue,t as F,d as de,f as B,h as J,j as et,o as Se,k as tt,l as rt,m as nt,n as ve,p as D,q as at,r as ot,u as st,v as H,w as je,x as Y,y as X,z as ie}from"./chunks/index-a80b06f5.js";import{g as Be,f as Je,s as G,a as Oe,b as it,i as lt}from"./chunks/singletons-419e91c9.js";import{_ as V}from"./chunks/preload-helper-176e53da.js";function ct(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function ft(n){return n.split("%25").map(decodeURI).join("%25")}function ut(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(n,e){const r=new URL(n);for(const s of dt){let o=r[s];Object.defineProperty(r,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return ht(r),r}function ht(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const _t="/__data.json";function mt(n){return n.replace(/\/$/,"")+_t}function gt(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=r.length;for(;s;)e=e*33^r[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:e?.method||"GET")!=="GET"){const s=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;te.delete(s)}return pe(n,e)};const te=new Map;function wt(n,e){const r=We(n,e),s=document.querySelector(r);if(s?.textContent){const{body:o,...d}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(r,{body:o,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,d))}return pe(n,e)}function yt(n,e,r){if(te.size>0){const s=We(n,r),o=te.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);te.delete(s)}}return pe(e,r)}function We(n,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e?.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${gt(e.body)}"]`),s}const bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function vt(n){const e=[],r=[],s=[];let o=!0;return{pattern:n==="/"?/^\/$/:new RegExp(`^${kt(n).map((t,u,m)=>{const _=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(_)return e.push(_[1]),r.push(_[2]),s.push(!1),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(g)return e.push(g[1]),r.push(g[2]),s.push(!0),"(?:/([^/]+))?";const y=u===m.length-1;return t?"/"+t.split(/\[(.+?)\](?!\])/).map((j,I)=>{if(I%2){if(j.startsWith("x+"))return Ee(String.fromCharCode(parseInt(j.slice(2),16)));if(j.startsWith("u+"))return Ee(String.fromCharCode(...j.slice(2).split("-").map(Z=>parseInt(Z,16))));const U=bt.exec(j);if(!U)throw new Error(`Invalid param: ${j}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,P,ne,M,ae]=U;return e.push(M),r.push(ae),s.push(!!P),ne?"(.*?)":P?"([^/]*)?":"([^/]+?)"}return y&&j.includes(".")&&(o=!1),Ee(j)}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:r,optional:s}}function Et(n){return!/^\([^)]+\)$/.test(n)}function kt(n){return n.slice(1).split("/").filter(Et)}function Rt(n,{names:e,types:r,optional:s},o){const d={};for(let t=0;t<e.length;t+=1){const u=e[t],m=r[t];let _=n[t+1];if(_||!s[t]){if(m){const g=o[m];if(!g)throw new Error(`Missing "${m}" param matcher`);if(!g(_))return}d[u]=_??""}}return d}function Ee(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function St(n,e,r,s){const o=new Set(e);return Object.entries(r).map(([u,[m,_,g]])=>{const{pattern:y,names:R,types:z,optional:j}=vt(u),I={id:u,exec:U=>{const P=y.exec(U);if(P)return Rt(P,{names:R,types:z,optional:j},s)},errors:[1,...g||[]].map(U=>n[U]),layouts:[0,..._||[]].map(t),leaf:d(m)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function d(u){const m=u<0;return m&&(u=~u),[m,n[u]]}function t(u){return u===void 0?u:[o.has(u),n[u]]}}function Ot(n){let e,r,s;var o=n[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=new o(d(n))),{c(){e&&H(e.$$.fragment),r=C()},l(t){e&&je(e.$$.fragment,t),r=C()},m(t,u){e&&Y(e,t,u),K(t,r,u),s=!0},p(t,u){const m={};if(u&4&&(m.data=t[2]),u&2&&(m.form=t[1]),o!==(o=t[0][0])){if(e){ue();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),de()}o?(e=new o(d(t)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,r.parentNode,r)):e=null}else o&&e.$set(m)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&X(e,t)}}}function It(n){let e,r,s;var o=n[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[$t]},$$scope:{ctx:t}}}}return o&&(e=new o(d(n))),{c(){e&&H(e.$$.fragment),r=C()},l(t){e&&je(e.$$.fragment,t),r=C()},m(t,u){e&&Y(e,t,u),K(t,r,u),s=!0},p(t,u){const m={};if(u&4&&(m.data=t[2]),u&523&&(m.$$scope={dirty:u,ctx:t}),o!==(o=t[0][0])){if(e){ue();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),de()}o?(e=new o(d(t)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,r.parentNode,r)):e=null}else o&&e.$set(m)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&X(e,t)}}}function $t(n){let e,r,s;var o=n[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=new o(d(n))),{c(){e&&H(e.$$.fragment),r=C()},l(t){e&&je(e.$$.fragment,t),r=C()},m(t,u){e&&Y(e,t,u),K(t,r,u),s=!0},p(t,u){const m={};if(u&8&&(m.data=t[3]),u&2&&(m.form=t[1]),o!==(o=t[0][1])){if(e){ue();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),de()}o?(e=new o(d(t)),H(e.$$.fragment),B(e.$$.fragment,1),Y(e,r.parentNode,r)):e=null}else o&&e.$set(m)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&J(r),e&&X(e,t)}}}function ze(n){let e,r=n[5]&&Ge(n);return{c(){e=tt("div"),r&&r.c(),this.h()},l(s){e=rt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=nt(e);r&&r.l(o),o.forEach(J),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(s,o){K(s,e,o),r&&r.m(e,null)},p(s,o){s[5]?r?r.p(s,o):(r=Ge(s),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(s){s&&J(e),r&&r.d()}}}function Ge(n){let e;return{c(){e=at(n[6])},l(r){e=ot(r,n[6])},m(r,s){K(r,e,s)},p(r,s){s&64&&st(e,r[6])},d(r){r&&J(e)}}}function Lt(n){let e,r,s,o,d;const t=[It,Ot],u=[];function m(g,y){return g[0][1]?0:1}e=m(n),r=u[e]=t[e](n);let _=n[4]&&ze(n);return{c(){r.c(),s=Qe(),_&&_.c(),o=C()},l(g){r.l(g),s=xe(g),_&&_.l(g),o=C()},m(g,y){u[e].m(g,y),K(g,s,y),_&&_.m(g,y),K(g,o,y),d=!0},p(g,[y]){let R=e;e=m(g),e===R?u[e].p(g,y):(ue(),F(u[R],1,1,()=>{u[R]=null}),de(),r=u[e],r?r.p(g,y):(r=u[e]=t[e](g),r.c()),B(r,1),r.m(s.parentNode,s)),g[4]?_?_.p(g,y):(_=ze(g),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(g){d||(B(r),d=!0)},o(g){F(r),d=!1},d(g){u[e].d(g),g&&J(s),_&&_.d(g),g&&J(o)}}}function jt(n,e,r){let{stores:s}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:u=null}=e,{data_1:m=null}=e;et(s.page.notify);let _=!1,g=!1,y=null;return Se(()=>{const R=s.page.subscribe(()=>{_&&(r(5,g=!0),r(6,y=document.title||"untitled page"))});return r(4,_=!0),R}),n.$$set=R=>{"stores"in R&&r(7,s=R.stores),"page"in R&&r(8,o=R.page),"components"in R&&r(0,d=R.components),"form"in R&&r(1,t=R.form),"data_0"in R&&r(2,u=R.data_0),"data_1"in R&&r(3,m=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(o)},[d,t,u,m,_,g,y,s,o]}class At extends Ye{constructor(e){super(),Xe(this,e,jt,Lt,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Pt={},he=[()=>V(()=>import("./chunks/0-eb908e61.js"),["./chunks/0-eb908e61.js","./chunks/_layout-0ebf6292.js","./components/pages/_layout.svelte-282d9b8a.js","./chunks/index-a80b06f5.js","./chunks/preload-helper-176e53da.js","./chunks/runtime.esm-0af339e4.js","./chunks/index-900c1e47.js","./chunks/stores-7f31061a.js","./chunks/singletons-419e91c9.js","./chunks/stores-db8fba2f.js","./chunks/env-51d3792f.js","./chunks/historyIdb-feead984.js","./chunks/localstore-babdf033.js","./chunks/importLocalData-ae55aada.js","./chunks/outfits-eb53be92.js","./chunks/Iklan-32f8e378.js","./assets/_layout-68774e84.css"],import.meta.url),()=>V(()=>import("./chunks/1-2e6dd754.js"),["./chunks/1-2e6dd754.js","./components/pages/_error.svelte-c534edc6.js","./chunks/index-a80b06f5.js","./chunks/stores-7f31061a.js","./chunks/singletons-419e91c9.js","./chunks/index-900c1e47.js","./assets/_error-ffb2f0f1.css"],import.meta.url),()=>V(()=>import("./chunks/2-07978606.js"),["./chunks/2-07978606.js","./chunks/_page-4b5c4f6d.js","./chunks/preload-helper-176e53da.js","./chunks/historyIdb-feead984.js","./chunks/localstore-babdf033.js","./chunks/stores-db8fba2f.js","./chunks/index-900c1e47.js","./chunks/index-a80b06f5.js","./chunks/runtime.esm-0af339e4.js","./chunks/outfits-eb53be92.js","./chunks/audio-6d737711.js","./chunks/WishListResult-3d7b1182.js","./chunks/Icon-2b2a573e.js","./assets/Icon-d3e43583.css","./chunks/env-51d3792f.js","./assets/WishListResult-42b90934.css","./chunks/accessKey-21d29ba4.js","./assets/accessKey-1c352f6d.css","./assets/_page-a55faf15.css"],import.meta.url),()=>V(()=>import("./chunks/3-dfe1b315.js"),["./chunks/3-dfe1b315.js","./components/pages/adkey/_page.svelte-669752bf.js","./chunks/index-a80b06f5.js","./chunks/audio-6d737711.js","./chunks/localstore-babdf033.js","./chunks/accessKey-21d29ba4.js","./chunks/runtime.esm-0af339e4.js","./chunks/index-900c1e47.js","./assets/accessKey-1c352f6d.css","./assets/_page-f21e230d.css"],import.meta.url),()=>V(()=>import("./chunks/4-3cdbe39e.js"),["./chunks/4-3cdbe39e.js","./components/pages/install/_page.svelte-2d2e97fc.js","./chunks/index-a80b06f5.js","./chunks/runtime.esm-0af339e4.js","./chunks/index-900c1e47.js","./chunks/env-51d3792f.js","./chunks/stores-db8fba2f.js","./assets/_page-35903308.css"],import.meta.url),()=>V(()=>import("./chunks/5-2960f1e0.js"),["./chunks/5-2960f1e0.js","./components/pages/privacy-policy/_page.svelte-b39bd509.js","./chunks/index-a80b06f5.js","./chunks/runtime.esm-0af339e4.js","./chunks/index-900c1e47.js","./chunks/env-51d3792f.js","./assets/_page-3c659a81.css"],import.meta.url),()=>V(()=>import("./chunks/6-4fcf8065.js"),["./chunks/6-4fcf8065.js","./components/pages/screen/_page.svelte-98d3e5aa.js","./chunks/index-a80b06f5.js"],import.meta.url),()=>V(()=>import("./chunks/7-c363a50d.js"),["./chunks/7-c363a50d.js","./components/pages/screen/chars/_page.svelte-841487af.js","./chunks/index-a80b06f5.js","./chunks/runtime.esm-0af339e4.js","./chunks/index-900c1e47.js","./chunks/env-51d3792f.js","./chunks/stores-db8fba2f.js","./chunks/Icon-2b2a573e.js","./assets/Icon-d3e43583.css","./assets/_page-57a3ecd0.css"],import.meta.url),()=>V(()=>import("./chunks/8-468da715.js"),["./chunks/8-468da715.js","./components/pages/screen/wishlist/_page.svelte-c6669315.js","./chunks/index-a80b06f5.js","./chunks/runtime.esm-0af339e4.js","./chunks/index-900c1e47.js","./chunks/env-51d3792f.js","./chunks/outfits-eb53be92.js","./chunks/stores-db8fba2f.js","./chunks/WishListResult-3d7b1182.js","./chunks/audio-6d737711.js","./chunks/localstore-babdf033.js","./chunks/Icon-2b2a573e.js","./assets/Icon-d3e43583.css","./assets/WishListResult-42b90934.css","./assets/_page-1877199c.css"],import.meta.url)],Nt=[],Tt={"/":[2],"/adkey":[3],"/install":[4],"/privacy-policy":[5],"/screen":[6],"/screen/chars":[7],"/screen/wishlist":[8]},Ut={handleError:({error:n})=>{console.error(n)}};class Ie{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(e,r){this.status=e,this.location=r}}async function Dt(n){for(const e in n)if(typeof n[e]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([r,s])=>[r,await s])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Vt=-1,qt=-2,Ct=-3,Ft=-4,Bt=-5,Jt=-6;function zt(n){if(typeof n=="number")return s(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,r=Array(e.length);function s(o,d=!1){if(o===Vt)return;if(o===Ct)return NaN;if(o===Ft)return 1/0;if(o===Bt)return-1/0;if(o===Jt)return-0;if(d)throw new Error("Invalid input");if(o in r)return r[o];const t=e[o];if(!t||typeof t!="object")r[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":r[o]=new Date(t[1]);break;case"Set":const m=new Set;r[o]=m;for(let y=1;y<t.length;y+=1)m.add(s(t[y]));break;case"Map":const _=new Map;r[o]=_;for(let y=1;y<t.length;y+=2)_.set(s(t[y]),s(t[y+1]));break;case"RegExp":r[o]=new RegExp(t[1],t[2]);break;case"Object":r[o]=Object(t[1]);break;case"BigInt":r[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=s(t[y+1]);break}else{const u=new Array(t.length);r[o]=u;for(let m=0;m<t.length;m+=1){const _=t[m];_!==qt&&(u[m]=s(_))}}else{const u={};r[o]=u;for(const m in t){const _=t[m];u[m]=s(_)}}return r[o]}return s(0)}const He="sveltekit:scroll",q="sveltekit:index",le=St(he,Nt,Tt,Pt),$e=he[0],Le=he[1];$e();Le();let re={};try{re=JSON.parse(sessionStorage[He])}catch{}function ke(n){re[n]=Oe()}function Gt({target:n,base:e,trailing_slash:r}){const s=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,m=!1,_=!0,g=!1,y=!1,R=!1,z=!1,j,I=history.state?.[q];I||(I=Date.now(),history.replaceState({...history.state,[q]:I},"",location.href));const U=re[I];U&&(history.scrollRestoration="manual",scrollTo(U.x,U.y));let P,ne,M;async function ae(){M=M||Promise.resolve(),await M,M=null;const a=new URL(location.href),l=ge(a,!0);o=null,await Pe(l,a,[])}async function Z(a,{noScroll:l=!1,replaceState:c=!1,keepFocus:i=!1,state:f={},invalidateAll:p=!1},h,w){return typeof a=="string"&&(a=new URL(a,Be(document))),we({url:a,scroll:l?Oe():null,keepfocus:i,redirect_chain:h,details:{state:f,replaceState:c},nav_token:w,accepted:()=>{p&&(z=!0)},blocked:()=>{},type:"goto"})}async function Ae(a){const l=ge(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Ue(l).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function Pe(a,l,c,i,f={},p){ne=f;let h=a&&await Ue(a);if(h||(h=await Ce(l,{id:null},ee(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=a?.url||l,ne!==f)return!1;if(h.type==="redirect")if(c.length>10||c.includes(l.pathname))h=await oe({status:500,error:ee(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return Z(new URL(h.location,l).href,{},[...c,l.pathname],f),!1;else h.props?.page?.status>=400&&await G.updated.check()&&await se(l);if(s.length=0,z=!1,g=!0,i&&i.details){const{details:w}=i,E=w.replaceState?0:1;w.state[q]=I+=E,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(o=null,m){t=h.state,h.props.page&&(h.props.page.url=l);const w=fe();j.$set(h.props),w()}else Ne(h);if(i){const{scroll:w,keepfocus:E}=i;if(E||Re(),await ie(),_){const b=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):b?b.scrollIntoView():scrollTo(0,0)}}else await ie();_=!0,h.props.page&&(P=h.props.page),p&&p(),g=!1}function Ne(a){t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),P=a.props.page;const c=fe();j=new At({target:n,props:{...a.props,stores:G},hydrate:!0}),c();const i={from:null,to:ce("to",{params:t.params,route:{id:t.route?.id??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};d.after_navigate.forEach(f=>f(i)),m=!0}async function Q({url:a,params:l,branch:c,status:i,error:f,route:p,form:h}){const w=c.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:c,error:f,route:p},props:{components:w.map(k=>k.node.component)}};h!==void 0&&(E.props.form=h);let b={},S=!P;for(let k=0;k<w.length;k+=1){const $=w[k];b={...b,...$.data},(S||!t.branch.some(N=>N===$))&&(E.props[`data_${k}`]=b,S=S||Object.keys($.data??{}).length>0)}if(S||(S=Object.keys(P.data).length!==Object.keys(b).length),!t.url||a.href!==t.url.href||t.error!==f||h!==void 0||S){E.props.page={error:f,params:l,route:p,status:i,url:a,form:h,data:S?b:P.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const k=($,N)=>{Object.defineProperty(E.props.page,$,{get:()=>{throw new Error(`$page.${$} has been replaced by $page.url.${N}`)}})};k("origin","origin"),k("path","pathname"),k("query","searchParams")}return E}async function _e({loader:a,parent:l,url:c,params:i,route:f,server_data_node:p}){let h=null;const w={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if(E.shared?.load){let b=function(...v){for(const k of v){const{href:$}=new URL(k,c);w.dependencies.add($)}};const S={route:{get id(){return w.route=!0,f.id}},params:new Proxy(i,{get:(v,k)=>(w.params.add(k),v[k])}),data:p?.data??null,url:pt(c,()=>{w.url=!0}),async fetch(v,k){let $;v instanceof Request?($=v.url,k={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...k}):$=v;const N=new URL($,c).href;return b(N),m?yt($,N,k):wt($,k)},setHeaders:()=>{},depends:b,parent(){return w.parent=!0,l()}};Object.defineProperties(S,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=await E.shared.load.call(null,S)??null,h=h?await Dt(h):null}return{node:E,loader:a,server:p,shared:E.shared?.load?{type:"data",data:h,uses:w}:null,data:h??p?.data??null}}function Te(a,l,c,i,f){if(z)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&c)return!0;for(const p of i.params)if(f[p]!==t.params[p])return!0;for(const p of i.dependencies)if(s.some(h=>h(new URL(p))))return!0;return!1}function me(a,l){return a?.type==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:a?.type==="skip"?l??null:null}async function Ue({id:a,invalidating:l,url:c,params:i,route:f}){if(o?.id===a)return o.promise;const{errors:p,layouts:h,leaf:w}=f,E=[...h,w];p.forEach(O=>O?.().catch(()=>{})),E.forEach(O=>O?.[1]().catch(()=>{}));let b=null;const S=t.url?a!==t.url.pathname+t.url.search:!1,v=t.route?a!==t.route.id:!1,k=E.reduce((O,L,T)=>{const A=t.branch[T],W=!!L?.[0]&&(A?.loader!==L[1]||Te(O.some(Boolean),v,S,A.server?.uses,i));return O.push(W),O},[]);if(k.some(Boolean)){try{b=await Me(c,k)}catch(O){return oe({status:500,error:ee(O,{url:c,params:i,route:{id:f.id}}),url:c,route:f})}if(b.type==="redirect")return b}const $=b?.nodes;let N=!1;const ye=E.map(async(O,L)=>{if(!O)return;const T=t.branch[L],A=$?.[L];if((!A||A.type==="skip")&&O[1]===T?.loader&&!Te(N,v,S,T.shared?.uses,i))return T;if(N=!0,A?.type==="error")throw A;return _e({loader:O[1],url:c,params:i,route:f,parent:async()=>{const Fe={};for(let be=0;be<L;be+=1)Object.assign(Fe,(await ye[be])?.data);return Fe},server_data_node:me(A===void 0&&O[0]?{type:"skip"}:A??null,T?.server)})});for(const O of ye)O.catch(()=>{});const x=[];for(let O=0;O<E.length;O+=1)if(E[O])try{x.push(await ye[O])}catch(L){if(L instanceof Ke)return{type:"redirect",location:L.location};let T=500,A;$?.includes(L)?(T=L.status??T,A=L.error):L instanceof Ie?(T=L.status,A=L.body):A=ee(L,{params:i,url:c,route:{id:f.id}});const W=await De(O,x,p);return W?await Q({url:c,params:i,branch:x.slice(0,W.idx).concat(W.node),status:T,error:A,route:f}):await Ce(c,{id:f.id},A,T)}else x.push(void 0);return await Q({url:c,params:i,branch:x,status:200,error:null,route:f,form:l?void 0:null})}async function De(a,l,c){for(;a--;)if(c[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:l,url:c,route:i}){const f={},p=await $e();let h=null;if(p.server)try{const b=await Me(c,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=b.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||u)&&await se(c)}const w=await _e({loader:$e,url:c,params:f,route:i,parent:()=>Promise.resolve({}),server_data_node:me(h)}),E={node:await Le(),loader:Le,shared:null,server:null,data:null};return await Q({url:c,params:f,branch:[w,E],status:a,error:l,route:null})}function ge(a,l){if(Ve(a))return;const c=ft(a.pathname.slice(e.length)||"/");for(const i of le){const f=i.exec(c);if(f){const p=new URL(a.origin+ct(a.pathname,r)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:i,params:ut(f),url:p}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function qe({url:a,type:l,intent:c,delta:i}){let f=!1;const p={from:ce("from",{params:t.params,route:{id:t.route?.id??null},url:t.url}),to:ce("to",{params:c?.params??null,route:{id:c?.route?.id??null},url:a}),willUnload:!c,type:l};i!==void 0&&(p.delta=i);const h={...p,cancel:()=>{f=!0}};return y||d.before_navigate.forEach(w=>w(h)),f?null:p}async function we({url:a,scroll:l,keepfocus:c,redirect_chain:i,details:f,type:p,delta:h,nav_token:w,accepted:E,blocked:b}){const S=ge(a,!1),v=qe({url:a,type:p,delta:h,intent:S});if(!v){b();return}ke(I),E(),y=!0,m&&G.navigating.set(v),await Pe(S,a,i,{scroll:l,keepfocus:c,details:f},w,()=>{y=!1,d.after_navigate.forEach(k=>k(v)),G.navigating.set(null)})}async function Ce(a,l,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await oe({status:i,error:c,url:a,route:l}):await se(a)}function se(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Se(()=>(d.after_navigate.push(a),()=>{const l=d.after_navigate.indexOf(a);d.after_navigate.splice(l,1)}))},before_navigate:a=>{Se(()=>(d.before_navigate.push(a),()=>{const l=d.before_navigate.indexOf(a);d.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(g||!m)&&(_=!1)},goto:(a,l={})=>{if("keepfocus"in l&&!("keepFocus"in l))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l&&!("noScroll"in l))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return Z(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(c=>c.href===l)}return ae()},invalidateAll:()=>(z=!0,ae()),prefetch:async a=>{const l=new URL(a,Be(document));await Ae(l)},prefetch_routes:async a=>{const c=(a?le.filter(i=>a.some(f=>i.exec(f))):le).map(i=>Promise.all([...i.layouts,i.leaf].map(f=>f?.[1]())));await Promise.all(c)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const f=await De(t.branch.length,c,i.errors);if(f){const p=await Q({url:l,params:t.params,branch:c.slice(0,f.idx).concat(f.node),status:500,error:a.error,route:i});t=p.state;const h=fe();j.$set(p.props),h(),ie().then(Re)}}else if(a.type==="redirect")Z(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...P,form:a.data,status:a.status}},c=fe();j.$set(l),c(),a.type==="success"&&ie().then(Re)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{let f=!1;if(!y){const p={from:ce("from",{params:t.params,route:{id:t.route?.id??null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};d.before_navigate.forEach(h=>h(p))}f?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(I);try{sessionStorage[He]=JSON.stringify(re)}catch{}}});const a=i=>{const{url:f,options:p,has:h}=Je(i);if(f&&p.prefetch&&!Ve(f)){if(p.reload||h.rel_external||h.target||h.download)return;Ae(f)}};let l;const c=i=>{clearTimeout(l),l=setTimeout(()=>{i.target?.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",c),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:f,url:p,options:h,has:w}=Je(i);if(!f||!p||!(f instanceof SVGAElement)&&p.protocol!==location.protocol&&!(p.protocol==="https:"||p.protocol==="http:")||w.download)return;if(h.reload||w.rel_external||w.target){qe({url:p,type:"link"})||i.preventDefault(),y=!0;return}const[b,S]=p.href.split("#");if(S!==void 0&&b===location.href.split("#")[0]){R=!0,ke(I),t.url=p,G.page.set({...P,url:p}),G.page.notify();return}we({url:p,scroll:h.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[q]===I)return;const f=i.state[q]-I;we({url:new URL(location.href),scroll:re[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=i.state[q]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[q]:++I},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:c,params:i,route:f,data:p,form:h})=>{u=!0;const w=new URL(location.href);let E;try{const b=c.map(async(S,v)=>{const k=p[v];return _e({loader:he[S],url:w,params:i,route:f,parent:async()=>{const $={};for(let N=0;N<v;N+=1)Object.assign($,(await b[N]).data);return $},server_data_node:me(k)})});E=await Q({url:w,params:i,branch:await Promise.all(b),status:a,error:l,form:h,route:le.find(({id:S})=>S===f.id)??null})}catch(b){if(b instanceof Ke){await se(new URL(b.location,location.href));return}E=await oe({status:b instanceof Ie?b.status:500,error:ee(b,{url:w,params:i,route:f}),url:w,route:f})}Ne(E)}}}async function Me(n,e){const r=new URL(n);r.pathname=mt(n.pathname);const s=await pe(r.href,{headers:{"x-sveltekit-invalidated":e.map(d=>d?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return o.nodes?.forEach(d=>{d?.type==="data"&&(d.data=zt(d.data),d.uses={dependencies:new Set(d.uses.dependencies??[]),params:new Set(d.uses.params??[]),parent:!!d.uses.parent,route:!!d.uses.route,url:!!d.uses.url})}),o}function ee(n,e){return n instanceof Ie?n.body:Ut.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const Kt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(n,e){for(const r of Kt)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${n}.${r} should now be ${n}.url.${r}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function fe(){return()=>{}}function Re(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,r=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{getSelection()?.removeAllRanges()}),r!==null?e.setAttribute("tabindex",r):e.removeAttribute("tabindex")}}async function Yt({env:n,hydrate:e,paths:r,target:s,trailing_slash:o}){it(r);const d=Gt({target:s,base:r.base,trailing_slash:o});lt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Yt as start};
