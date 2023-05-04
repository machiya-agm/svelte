import{o as De,t as ye}from"../chunks/index.e8d42111.js";import{S as Ge,a as Je,I as q,g as Ce,f as qe,b as we,c as le,s as M,i as _e,d as Q,e as J,P as Fe,h as We}from"../chunks/singletons.076ee777.js";function Xe(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function Ze(t){return t.split("%25").map(decodeURI).join("%25")}function Qe(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(t,o){const f=new URL(t);for(const c of et){let u=f[c];Object.defineProperty(f,c,{get(){return o(),u},enumerable:!0,configurable:!0})}return nt(f),f}function nt(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(t){return t.replace(/\/$/,"")+at}function Ke(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Me(t,o){const f=JSON.stringify(o);try{sessionStorage[t]=f}catch{}}function ot(...t){let o=5381;for(const f of t)if(typeof f=="string"){let c=f.length;for(;c;)o=o*33^f.charCodeAt(--c)}else if(ArrayBuffer.isView(f)){const c=new Uint8Array(f.buffer,f.byteOffset,f.byteLength);let u=c.length;for(;u;)o=o*33^c[--u]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(t,o)=>((t instanceof Request?t.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(Se(t)),fe(t,o));const te=new Map;function it(t,o){const f=Se(t,o),c=document.querySelector(f);if(c!=null&&c.textContent){const{body:u,...d}=JSON.parse(c.textContent),R=c.getAttribute("data-ttl");return R&&te.set(f,{body:u,init:d,ttl:1e3*Number(R)}),Promise.resolve(new Response(u,d))}return fe(t,o)}function st(t,o,f){if(te.size>0){const c=Se(t,f),u=te.get(c);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(f==null?void 0:f.cache))return new Response(u.body,u.init);te.delete(c)}}return fe(o,f)}function Se(t,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const u=[];o.headers&&u.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&u.push(o.body),c+=`[data-hash="${ot(...u)}"]`}return c}const ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function lt(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ut(t).map(c=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(u)return o.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const R=c.split(/\[(.+?)\](?!\])/);return"/"+R.map((w,y)=>{if(y%2){if(w.startsWith("x+"))return be(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return be(String.fromCharCode(...w.slice(2).split("-").map(O=>parseInt(O,16))));const p=ct.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,U,S,T]=p;return o.push({name:S,matcher:T,optional:!!$,rest:!!U,chained:U?y===1&&R[0]==="":!1}),U?"(.*?)":$?"([^/]*)?":"([^/]+?)"}return be(w)}).join("")}).join("")}/?$`),params:o}}function ft(t){return!/^\([^)]+\)$/.test(t)}function ut(t){return t.slice(1).split("/").filter(ft)}function dt(t,o,f){const c={},u=t.slice(1);let d=0;for(let R=0;R<o.length;R+=1){const l=o[R],w=u[R-d];if(l.chained&&l.rest&&d){c[l.name]=u.slice(R-d,R+1).filter(y=>y).join("/"),d=0;continue}if(w===void 0){l.rest&&(c[l.name]="");continue}if(!l.matcher||f[l.matcher](w)){c[l.name]=w;const y=o[R+1],p=u[R+1];y&&!y.rest&&y.optional&&p&&(d=0);continue}if(l.optional&&l.chained){d++;continue}return}if(!d)return c}function be(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function pt({nodes:t,server_loads:o,dictionary:f,matchers:c}){const u=new Set(o);return Object.entries(f).map(([l,[w,y,p]])=>{const{pattern:$,params:U}=lt(l),S={id:l,exec:T=>{const O=$.exec(T);if(O)return dt(O,U,c)},errors:[1,...p||[]].map(T=>t[T]),layouts:[0,...y||[]].map(R),leaf:d(w)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function d(l){const w=l<0;return w&&(l=~l),[w,t[l]]}function R(l){return l===void 0?l:[u.has(l),t[l]]}}let ee=class{constructor(o,f){this.status=o,typeof f=="string"?this.body={message:f}:f?this.body=f:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},He=class{constructor(o,f){this.status=o,this.location=f}};async function ht(t){var o;for(const f in t)if(typeof((o=t[f])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([c,u])=>[c,await u])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const mt=-1,gt=-2,yt=-3,wt=-4,_t=-5,bt=-6;function vt(t,o){if(typeof t=="number")return u(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const f=t,c=Array(f.length);function u(d,R=!1){if(d===mt)return;if(d===yt)return NaN;if(d===wt)return 1/0;if(d===_t)return-1/0;if(d===bt)return-0;if(R)throw new Error("Invalid input");if(d in c)return c[d];const l=f[d];if(!l||typeof l!="object")c[d]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],y=o==null?void 0:o[w];if(y)return c[d]=y(u(l[1]));switch(w){case"Date":c[d]=new Date(l[1]);break;case"Set":const p=new Set;c[d]=p;for(let S=1;S<l.length;S+=1)p.add(u(l[S]));break;case"Map":const $=new Map;c[d]=$;for(let S=1;S<l.length;S+=2)$.set(u(l[S]),u(l[S+1]));break;case"RegExp":c[d]=new RegExp(l[1],l[2]);break;case"Object":c[d]=Object(l[1]);break;case"BigInt":c[d]=BigInt(l[1]);break;case"null":const U=Object.create(null);c[d]=U;for(let S=1;S<l.length;S+=2)U[l[S]]=u(l[S+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);c[d]=w;for(let y=0;y<l.length;y+=1){const p=l[y];p!==gt&&(w[y]=u(p))}}else{const w={};c[d]=w;for(const y in l){const p=l[y];w[y]=u(p)}}return c[d]}return u(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Et=new Set([...ze,"actions"]);[...Et];function St(t){return t.filter(o=>o!=null)}const kt="x-sveltekit-invalidated",K=Ke(Ge)??{},Z=Ke(Je)??{};function ve(t){K[t]=Q()}function Rt(t,o){var xe;const f=pt(t),c=t.nodes[0],u=t.nodes[1];c(),u();const d=document.documentElement,R=[],l=[];let w=null;const y={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},$=!1,U=!1,S=!0,T=!1,O=!1,z=!1,H=!1,F,N=(xe=history.state)==null?void 0:xe[q];N||(N=Date.now(),history.replaceState({...history.state,[q]:N},"",location.href));const ue=K[N];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let V,ne,ae;async function ke(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),n=W(e,!0);w=null;const r=ne={},a=n&&await he(n);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);F.$set(a.props)}}function Re(e){l.some(n=>n==null?void 0:n.snapshot)&&(Z[e]=l.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Le(e){var n;(n=Z[e])==null||n.forEach((r,a)=>{var s,i;(i=(s=l[a])==null?void 0:s.snapshot)==null||i.restore(r)})}function Ae(){ve(N),Me(Ge,K),Re(N),Me(Je,Z)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},h,m){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:n?Q():null,keepfocus:a,redirect_chain:h,details:{state:s,replaceState:r},nav_token:m,accepted:()=>{i&&(H=!0)},blocked:()=>{},type:"goto"})}async function Ie(e){return w={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(w=null),n))},w.promise}async function oe(...e){const r=f.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Pe(e){var a;p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),V=e.props.page,F=new t.root({target:o,props:{...e.props,stores:M,components:l},hydrate:!0}),Le(N);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(s=>s(r)),U=!0}async function Y({url:e,params:n,branch:r,status:a,error:s,route:i,form:h}){let m="never";for(const b of r)(b==null?void 0:b.slash)!==void 0&&(m=b.slash);e.pathname=Xe(e.pathname,m),e.search=e.search;const v={type:"loaded",state:{url:e,params:n,branch:r,error:s,route:i},props:{constructors:St(r).map(b=>b.node.component)}};h!==void 0&&(v.props.form=h);let g={},k=!V,I=0;for(let b=0;b<Math.max(r.length,p.branch.length);b+=1){const _=r[b],x=p.branch[b];(_==null?void 0:_.data)!==(x==null?void 0:x.data)&&(k=!0),_&&(g={...g,..._.data},k&&(v.props[`data_${I}`]=g),I+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||h!==void 0&&h!==V.form||k)&&(v.props.page={error:s,params:n,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(e),form:h??null,data:k?g:V.data}),v}async function de({loader:e,parent:n,url:r,params:a,route:s,server_data_node:i}){var g,k,I;let h=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await e();if((g=v.universal)!=null&&g.load){let P=function(..._){for(const x of _){const{href:D}=new URL(x,r);m.dependencies.add(D)}};const b={route:{get id(){return m.route=!0,s.id}},params:new Proxy(a,{get:(_,x)=>(m.params.add(x),_[x])}),data:(i==null?void 0:i.data)??null,url:tt(r,()=>{m.url=!0}),async fetch(_,x){let D;_ instanceof Request?(D=_.url,x={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...x}):D=_;const C=new URL(D,r);return P(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),U?st(D,C.href,x):it(D,x)},setHeaders:()=>{},depends:P,parent(){return m.parent=!0,n()}};h=await v.universal.load.call(null,b)??null,h=h?await ht(h):null}return{node:v,loader:e,server:i,universal:(k=v.universal)!=null&&k.load?{type:"data",data:h,uses:m}:null,data:h??(i==null?void 0:i.data)??null,slash:((I=v.universal)==null?void 0:I.trailingSlash)??(i==null?void 0:i.slash)}}function Oe(e,n,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const i of a.params)if(s[i]!==p.params[i])return!0;for(const i of a.dependencies)if(R.some(h=>h(new URL(i))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:s}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:i,layouts:h,leaf:m}=s,v=[...h,m];i.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let g=null;const k=p.url?e!==p.url.pathname+p.url.search:!1,I=p.route?s.id!==p.route.id:!1;let P=!1;const b=v.map((E,A)=>{var G;const L=p.branch[A],j=!!(E!=null&&E[0])&&((L==null?void 0:L.loader)!==E[1]||Oe(P,I,k,(G=L.server)==null?void 0:G.uses,a));return j&&(P=!0),j});if(b.some(Boolean)){try{g=await Ve(r,b)}catch(E){return ie({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(g.type==="redirect")return g}const _=g==null?void 0:g.nodes;let x=!1;const D=v.map(async(E,A)=>{var me;if(!E)return;const L=p.branch[A],j=_==null?void 0:_[A];if((!j||j.type==="skip")&&E[1]===(L==null?void 0:L.loader)&&!Oe(x,I,k,(me=L.universal)==null?void 0:me.uses,a))return L;if(x=!0,(j==null?void 0:j.type)==="error")throw j;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var $e;const je={};for(let ge=0;ge<A;ge+=1)Object.assign(je,($e=await D[ge])==null?void 0:$e.data);return je},server_data_node:pe(j===void 0&&E[0]?{type:"skip"}:j??null,E[0]?L==null?void 0:L.server:void 0)})});for(const E of D)E.catch(()=>{});const C=[];for(let E=0;E<v.length;E+=1)if(v[E])try{C.push(await D[E])}catch(A){if(A instanceof He)return{type:"redirect",location:A.location};let L=500,j;if(_!=null&&_.includes(A))L=A.status??L,j=A.error;else if(A instanceof ee)L=A.status,j=A.body;else{if(await M.updated.check())return await B(r);j=await X(A,{params:a,url:r,route:{id:s.id}})}const G=await Ue(E,C,i);return G?await Y({url:r,params:a,branch:C.slice(0,G.idx).concat(G.node),status:L,error:j,route:s}):await Ne(r,{id:s.id},j,L)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:s,form:n?void 0:null})}async function Ue(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const s={};let i=null;if(t.server_loads[0]===0)try{const g=await Ve(r,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;i=g.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||$)&&await B(r)}const m=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(i)}),v={node:await u(),loader:u,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[m,v],status:e,error:n,route:null})}function W(e,n){if(_e(e,J))return;const r=se(e);for(const a of f){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:n,route:a,params:Qe(s),url:e}}}function se(e){return Ze(e.pathname.slice(J.length)||"/")}function Te({url:e,type:n,intent:r,delta:a}){var m,v;let s=!1;const i={from:{params:p.params,route:{id:((m=p.route)==null?void 0:m.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((v=r==null?void 0:r.route)==null?void 0:v.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(i.delta=a);const h={...i,cancel:()=>{s=!0}};return O||y.before_navigate.forEach(g=>g(h)),s?null:i}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:s,type:i,delta:h,nav_token:m={},accepted:v,blocked:g}){var D,C,E;const k=W(e,!1),I=Te({url:e,type:i,delta:h,intent:k});if(!I){g();return}const P=N;v(),O=!0,U&&M.navigating.set(I),ne=m;let b=k&&await he(k);if(!b){if(_e(e,J))return await B(e);b=await Ne(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(k==null?void 0:k.url)||e,ne!==m)return!1;if(b.type==="redirect")if(a.length>10||a.includes(e.pathname))b=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(b.location,e).href,{},[...a,e.pathname],m),!1;else((D=b.props.page)==null?void 0:D.status)>=400&&await M.updated.check()&&await B(e);if(R.length=0,H=!1,T=!0,ve(P),Re(P),(C=b.props.page)!=null&&C.url&&b.props.page.url.pathname!==e.pathname&&(e.pathname=(E=b.props.page)==null?void 0:E.url.pathname),s){const A=s.replaceState?0:1;if(s.state[q]=N+=A,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let L=N+1;for(;Z[L]||K[L];)delete Z[L],delete K[L],L+=1}}w=null,U?(p=b.state,b.props.page&&(b.props.page.url=e),F.$set(b.props)):Pe(b);const{activeElement:_}=document;if(await ye(),S){const A=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):A?A.scrollIntoView():scrollTo(0,0)}const x=document.activeElement!==_&&document.activeElement!==document.body;!r&&!x&&await Ee(),S=!0,b.props.page&&(V=b.props.page),O=!1,y.after_navigate.forEach(A=>A(I)),M.navigating.set(null),T=!1}async function Ne(e,n,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!$?await ie({status:a,error:r,url:e,route:n}):await B(e)}function B(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;d.addEventListener("mousemove",i=>{const h=i.target;clearTimeout(e),e=setTimeout(()=>{a(h,2)},20)});function n(i){a(i.composedPath()[0],1)}d.addEventListener("mousedown",n),d.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const h of i)h.isIntersecting&&(oe(se(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(i,h){const m=qe(i,d);if(!m)return;const{url:v,external:g,download:k}=we(m,J);if(g||k)return;const I=le(m);if(!I.reload)if(h<=I.preload_data){const P=W(v,!1);P&&Ie(P)}else h<=I.preload_code&&oe(se(v))}function s(){r.disconnect();for(const i of d.querySelectorAll("a")){const{url:h,external:m,download:v}=we(i,J);if(m||v)continue;const g=le(i);g.reload||(g.preload_code===Fe.viewport&&r.observe(i),g.preload_code===Fe.eager&&oe(se(h)))}}y.after_navigate.push(s),s()}function X(e,n){return e instanceof ee?e.body:t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{De(()=>(y.after_navigate.push(e),()=>{const n=y.after_navigate.indexOf(e);y.after_navigate.splice(n,1)}))},before_navigate:e=>{De(()=>(y.before_navigate.push(e),()=>{const n=y.before_navigate.indexOf(e);y.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{(T||!U)&&(S=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")R.push(e);else{const{href:n}=new URL(e,location.href);R.push(r=>r.href===n)}return ke()},invalidate_all:()=>(H=!0,ke()),preload_data:async e=>{const n=new URL(e,Ce(document)),r=W(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Ie(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Ue(p.branch.length,r,a.errors);if(s){const i=await Y({url:n,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});p=i.state,F.$set(i.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:e.data,status:e.status}}),await ye(),F.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Ae(),!O){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};y.before_navigate.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ae()}),(e=navigator.connection)!=null&&e.saveData||Ye(),d.addEventListener("click",n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=qe(n.composedPath()[0],d);if(!r)return;const{url:a,external:s,target:i,download:h}=we(r,J);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||h)return;if(s||m.reload){Te({url:a,type:"link"})?O=!0:n.preventDefault();return}const[g,k]=a.href.split("#");if(k!==void 0&&g===location.href.split("#")[0]){if(z=!0,ve(N),p.url=a,M.page.set({...V,url:a}),M.page.notify(),!m.replace_state)return;z=!1,n.preventDefault()}ce({url:a,scroll:m.noscroll?Q():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),d.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(i,J))return;const h=n.target,{keep_focus:m,noscroll:v,reload:g,replace_state:k}=le(h);if(g)return;n.preventDefault(),n.stopPropagation();const I=new FormData(h),P=a==null?void 0:a.getAttribute("name");P&&I.append(P,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(I).toString(),ce({url:i,scroll:v?Q():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:k??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){if(n.state[q]===N)return;const a=K[n.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){K[N]=Q(),N=n.state[q],scrollTo(a.x,a.y);return}const s=n.state[q]-N;let i=!1;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=n.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Le(N)}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[q]:++N},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&M.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:s,data:i,form:h})=>{$=!0;const m=new URL(location.href);({params:a={},route:s={id:null}}=W(m,!1)||{});let v;try{const g=r.map(async(k,I)=>{const P=i[I];return P!=null&&P.uses&&(P.uses=Be(P.uses)),de({loader:t.nodes[k],url:m,params:a,route:s,parent:async()=>{const b={};for(let _=0;_<I;_+=1)Object.assign(b,(await g[_]).data);return b},server_data_node:pe(P)})});v=await Y({url:m,params:a,branch:await Promise.all(g),status:e,error:n,form:h,route:f.find(({id:k})=>k===s.id)??null})}catch(g){if(g instanceof He){await B(new URL(g.location,location.href));return}v=await ie({status:g instanceof ee?g.status:500,error:await X(g,{url:m,params:a,route:s}),url:m,route:s})}Pe(v)}}}async function Ve(t,o){const f=new URL(t);f.pathname=rt(t.pathname),f.searchParams.append(kt,o.map(u=>u?"1":"0").join(""));const c=await fe(f.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async u=>{var p;const d=new Map,R=c.body.getReader(),l=new TextDecoder;function w($){return vt($,{Promise:U=>new Promise((S,T)=>{d.set(U,{fulfil:S,reject:T})})})}let y="";for(;;){const{done:$,value:U}=await R.read();if($&&!y)break;for(y+=!U&&y?`
`:l.decode(U);;){const S=y.indexOf(`
`);if(S===-1)break;const T=JSON.parse(y.slice(0,S));if(y=y.slice(S+1),T.type==="redirect")return u(T);if(T.type==="data")(p=T.nodes)==null||p.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=Be(O.uses),O.data=w(O.data))}),u(T);else if(T.type==="chunk"){const{id:O,data:z,error:H}=T,F=d.get(O);d.delete(O),H?F.reject(w(H)):F.fulfil(w(z))}}}})}function Be(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,f=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),f!==null?o.setAttribute("tabindex",f):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var u;c((u=getSelection())==null?void 0:u.removeAllRanges())})})}}async function Ot(t,o,f){const c=Rt(t,o);We({client:c}),f?await c._hydrate(f):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Ot as start};
