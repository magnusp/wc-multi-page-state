(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,mt=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ft=Symbol(),$t=new WeakMap;let It=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(mt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&$t.set(e,t))}return t}toString(){return this.cssText}};const Wt=i=>new It(typeof i=="string"?i:i+"",void 0,ft),y=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,r,a)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new It(e,i,ft)},Kt=(i,t)=>{if(mt)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=tt.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},St=mt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Wt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yt,defineProperty:Jt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Qt,getOwnPropertySymbols:Xt,getPrototypeOf:te}=Object,$=globalThis,Et=$.trustedTypes,ee=Et?Et.emptyScript:"",nt=$.reactiveElementPolyfillSupport,N=(i,t)=>i,et={toAttribute(i,t){switch(t){case Boolean:i=i?ee:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},gt=(i,t)=>!Yt(i,t),At={attribute:!0,type:String,converter:et,reflect:!1,useDefault:!1,hasChanged:gt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=At){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Jt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:a}=Zt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){const n=r==null?void 0:r.call(this);a==null||a.call(this,o),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??At}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const t=te(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const e=this.properties,s=[...Qt(e),...Xt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(St(r))}else t!==void 0&&e.push(St(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var a;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const o=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:et).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var a,o;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((a=n.converter)==null?void 0:a.fromAttribute)!==void 0?n.converter:et;this._$Em=r;const d=l.fromAttribute(e,n.type);this[r]=d??((o=this._$Ej)==null?void 0:o.get(r))??d,this._$Em=null}}requestUpdate(t,e,s,r=!1,a){var o;if(t!==void 0){const n=this.constructor;if(r===!1&&(a=this[t]),s??(s=n.getPropertyOptions(t)),!((s.hasChanged??gt)(a,e)||s.useDefault&&s.reflect&&a===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:a},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),a!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,o]of r){const{wrapped:n}=o,l=this[a];n!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[N("elementProperties")]=new Map,T[N("finalized")]=new Map,nt==null||nt({ReactiveElement:T}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,Ct=i=>i,rt=j.trustedTypes,Mt=rt?rt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Dt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,zt="?"+_,re=`<${zt}>`,M=document,q=()=>M.createComment(""),G=i=>i===null||typeof i!="object"&&typeof i!="function",bt=Array.isArray,se=i=>bt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",lt=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Pt=/>/g,E=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Tt=/"/g,Nt=/^(?:script|style|textarea|title)$/i,ie=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),h=ie(1),U=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ht=new WeakMap,A=M.createTreeWalker(M,129);function jt(i,t){if(!bt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt!==void 0?Mt.createHTML(t):t}const oe=(i,t)=>{const e=i.length-1,s=[];let r,a=t===2?"<svg>":t===3?"<math>":"",o=z;for(let n=0;n<e;n++){const l=i[n];let d,u,c=-1,f=0;for(;f<l.length&&(o.lastIndex=f,u=o.exec(l),u!==null);)f=o.lastIndex,o===z?u[1]==="!--"?o=Lt:u[1]!==void 0?o=Pt:u[2]!==void 0?(Nt.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=E):u[3]!==void 0&&(o=E):o===E?u[0]===">"?(o=r??z,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?E:u[3]==='"'?Tt:Ot):o===Tt||o===Ot?o=E:o===Lt||o===Pt?o=z:(o=E,r=void 0);const b=o===E&&i[n+1].startsWith("/>")?" ":"";a+=o===z?l+re:c>=0?(s.push(d),l.slice(0,c)+Dt+l.slice(c)+_+b):l+_+(c===-2?n:b)}return[jt(i,a+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class B{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let a=0,o=0;const n=t.length-1,l=this.parts,[d,u]=oe(t,e);if(this.el=B.createElement(d,s),A.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=A.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(Dt)){const f=u[o++],b=r.getAttribute(c).split(_),X=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:X[2],strings:b,ctor:X[1]==="."?ne:X[1]==="?"?le:X[1]==="@"?de:it}),r.removeAttribute(c)}else c.startsWith(_)&&(l.push({type:6,index:a}),r.removeAttribute(c));if(Nt.test(r.tagName)){const c=r.textContent.split(_),f=c.length-1;if(f>0){r.textContent=rt?rt.emptyScript:"";for(let b=0;b<f;b++)r.append(c[b],q()),A.nextNode(),l.push({type:2,index:++a});r.append(c[f],q())}}}else if(r.nodeType===8)if(r.data===zt)l.push({type:2,index:a});else{let c=-1;for(;(c=r.data.indexOf(_,c+1))!==-1;)l.push({type:7,index:a}),c+=_.length-1}a++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function R(i,t,e=i,s){var o,n;if(t===U)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const a=G(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((n=r==null?void 0:r._$AO)==null||n.call(r,!1),a===void 0?r=void 0:(r=new a(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=R(i,r._$AS(i,t.values),r,s)),t}class ae{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??M).importNode(e,!0);A.currentNode=r;let a=A.nextNode(),o=0,n=0,l=s[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new Y(a,a.nextSibling,this,t):l.type===1?d=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(d=new ce(a,this,t)),this._$AV.push(d),l=s[++n]}o!==(l==null?void 0:l.index)&&(a=A.nextNode(),o++)}return A.currentNode=M,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),G(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=B.createElement(jt(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===r)this._$AH.p(e);else{const o=new ae(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Ht.get(t.strings);return e===void 0&&Ht.set(t.strings,e=new B(t)),e}k(t){bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const a of t)r===e.length?e.push(s=new Y(this.O(q()),this.O(q()),this,this.options)):s=e[r],s._$AI(a),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const r=Ct(t).nextSibling;Ct(t).remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,a){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,r){const a=this.strings;let o=!1;if(a===void 0)t=R(this,t,e,0),o=!G(t)||t!==this._$AH&&t!==U,o&&(this._$AH=t);else{const n=t;let l,d;for(t=a[0],l=0;l<a.length-1;l++)d=R(this,n[s+l],e,l),d===U&&(d=this._$AH[l]),o||(o=!G(d)||d!==this._$AH[l]),d===p?t=p:t!==p&&(t+=(d??"")+a[l+1]),this._$AH[l]=d}o&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ne extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class le extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class de extends it{constructor(t,e,s,r,a){super(t,e,s,r,a),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??p)===U)return;const s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ce{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const dt=j.litHtmlPolyfillSupport;dt==null||dt(B,Y),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.3.3");const he=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const a=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new Y(t.insertBefore(q(),a),a,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;let g=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=he(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return U}};var kt;g._$litElement$=!0,g.finalized=!0,(kt=C.litElementHydrateSupport)==null||kt.call(C,{LitElement:g});const ct=C.litElementPolyfillSupport;ct==null||ct({LitElement:g});(C.litElementVersions??(C.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:gt},pe=(i=ue,t,e)=>{const{kind:s,metadata:r}=e;let a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),a.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,l,i,!0,n)},init(n){return n!==void 0&&this.C(o,void 0,i,n),n}}}if(s==="setter"){const{name:o}=e;return function(n){const l=this[o];t.call(this,n),this.requestUpdate(o,l,i,!0,n)}}throw Error("Unsupported decorator location: "+s)};function m(i){return(t,e)=>typeof e=="object"?pe(i,t,e):((s,r,a)=>{const o=r.hasOwnProperty(a);return r.constructor.createProperty(a,s),o?Object.getOwnPropertyDescriptor(r,a):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(i){return m({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vt(i,t){return(e,s,r)=>{const a=o=>{var n;return((n=o.renderRoot)==null?void 0:n.querySelector(i))??null};return me(e,s,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qt=class extends Event{constructor(t,e,s,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=s,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ut=class{constructor(t,e,s,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(a,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=a,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(a,o)),this.unsubscribe=o},this.host=t,e.context!==void 0){const a=e;this.context=a.context,this.callback=a.callback,this.subscribe=a.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new qt(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fe{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:s}]of this.subscriptions)e(this.o,s)},t!==void 0&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ge=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}};class Rt extends fe{constructor(t,e,s){var r,a;super(e.context!==void 0?e.initialValue:s),this.onContextRequest=o=>{if(o.context!==this.context)return;const n=o.contextTarget??o.composedPath()[0];n!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,n,o.subscribe))},this.onProviderRequest=o=>{if(o.context!==this.context||(o.contextTarget??o.composedPath()[0])===this.host)return;const n=new Set;for(const[l,{consumerHost:d}]of this.subscriptions)n.has(l)||(n.add(l),d.dispatchEvent(new qt(this.context,d,l,!0)));o.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(a=(r=this.host).addController)==null||a.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new ge(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt({context:i}){return(t,e)=>{const s=new WeakMap;if(typeof e=="object")return{get(){return t.get.call(this)},set(r){return s.get(this).setValue(r),t.set.call(this,r)},init(r){return s.set(this,new Rt(this,{context:i,initialValue:r})),r}};{t.constructor.addInitializer((o=>{s.set(o,new Rt(o,{context:i}))}));const r=Object.getOwnPropertyDescriptor(t,e);let a;if(r===void 0){const o=new WeakMap;a={get(){return o.get(this)},set(n){s.get(this).setValue(n),o.set(this,n)},configurable:!0,enumerable:!0}}else{const o=r.set;a={...r,set(n){s.get(this).setValue(n),o==null||o.call(this,n)}}}return void Object.defineProperty(t,e,a)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function O({context:i,subscribe:t}){return(e,s)=>{typeof s=="object"?s.addInitializer((function(){new Ut(this,{context:i,callback:r=>{e.set.call(this,r)},subscribe:t})})):e.constructor.addInitializer((r=>{new Ut(r,{context:i,callback:a=>{r[s]=a},subscribe:t})}))}}const J=Symbol("auth-context"),yt=Symbol("telemetry-context"),Gt=Symbol("audio-context");class be{constructor(){this.store=new Map}getItem(t){return this.store.has(t)?this.store.get(t):null}setItem(t,e){this.store.set(t,String(e))}removeItem(t){this.store.delete(t)}clear(){this.store.clear()}}function Bt(){try{if(typeof sessionStorage<"u"){const i="__storage_test__";return sessionStorage.setItem(i,"1"),sessionStorage.removeItem(i),sessionStorage}}catch{}return new be}const H=class H extends EventTarget{constructor(t=Bt()){super(),this.session=null,this.hosts=new Set,this.storage=t,this.currentTabId=`tab_${Math.random().toString(36).slice(2,9)}_${Date.now()}`,this.hydrateFromStorage()}addHost(t){this.hosts.add(t),t.addController({hostDisconnected:()=>{this.hosts.delete(t)}}),t.requestUpdate()}removeHost(t){this.hosts.delete(t)}notifyHosts(){for(const t of this.hosts)t.requestUpdate()}hydrateFromStorage(){try{const t=this.storage.getItem(H.STORAGE_KEY);if(t){const e=JSON.parse(t);e&&typeof e.username=="string"&&(this.session={username:e.username,authenticatedAt:e.authenticatedAt||Date.now(),tabId:this.currentTabId})}}catch{this.session=null}}get isAuthenticated(){return this.session!==null}get currentUser(){var t;return((t=this.session)==null?void 0:t.username)??null}get activeSession(){return this.session?{...this.session}:null}login(t,e){const s=t.trim();if(!s)return{success:!1,error:"Username is required."};if(e!=="joshua")return{success:!1,error:'Invalid password. (Hint: password is "joshua")'};this.session={username:s,authenticatedAt:Date.now(),tabId:this.currentTabId};try{this.storage.setItem(H.STORAGE_KEY,JSON.stringify(this.session))}catch{}return this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!0,user:s}})),this.notifyHosts(),{success:!0}}logout(){this.session=null;try{this.storage.removeItem(H.STORAGE_KEY)}catch{}this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!1,user:null}})),this.notifyHosts()}};H.STORAGE_KEY="__APP_AUTH_SESSION__";let ht=H;const x=class x extends EventTarget{constructor(){super(),this.nodes=[],this.activeIncident=null,this.timer=null,this.hosts=new Set,this.initDefaultNodes(),this.startSimulation()}addHost(t){this.hosts.add(t),t.addController({hostDisconnected:()=>{this.hosts.delete(t)}}),t.requestUpdate()}removeHost(t){this.hosts.delete(t)}notifyHosts(){for(const t of this.hosts)t.requestUpdate()}initDefaultNodes(){this.nodes=[{id:"node-alpha",name:"US-East Core Alpha",region:"us-east-1",status:"healthy",cpuLoad:24,memoryUsage:45,latencyMs:14,lastUpdated:Date.now(),isCordoned:!1},{id:"node-beta",name:"EU-Central Edge Beta",region:"eu-west-1",status:"healthy",cpuLoad:38,memoryUsage:62,latencyMs:32,lastUpdated:Date.now(),isCordoned:!1},{id:"node-gamma",name:"AP-Tokyo Gateway Gamma",region:"ap-northeast-1",status:"warning",cpuLoad:78,memoryUsage:88,latencyMs:142,lastUpdated:Date.now(),isCordoned:!1},{id:"node-delta",name:"US-West Replica Delta",region:"us-west-2",status:"healthy",cpuLoad:19,memoryUsage:33,latencyMs:22,lastUpdated:Date.now(),isCordoned:!1}]}getNodes(){return[...this.nodes]}getNodeById(t){return this.nodes.find(e=>e.id===t)}getIncident(){return this.activeIncident}triggerMockIncident(t="node-gamma"){this.activeIncident={id:`inc-${Date.now().toString(36)}`,severity:"high",message:`Memory threshold exceeded on [${t}] (>85% sustained for 300s). Potential threadpool exhaustion.`,timestamp:Date.now(),nodeId:t},this.dispatchEvent(new CustomEvent("incident-raised",{detail:this.activeIncident})),this.notifyHosts()}resolveIncident(){this.activeIncident&&(this.activeIncident=null,this.dispatchEvent(new CustomEvent("incident-resolved")),this.notifyHosts())}toggleCordon(t){const e=this.nodes.find(r=>r.id===t);if(!e)return;if(!e.isCordoned){const r=Math.max(0,e.cpuLoad-x.IDLE_CPU),a=Math.max(0,e.memoryUsage-x.IDLE_MEM),o=this.nodes.filter(d=>d.id!==t&&!d.isCordoned),n=o.length>0?Math.round(r/o.length):0,l=o.length>0?Math.round(a/o.length):0;this.nodes=this.nodes.map(d=>{if(d.id===t)return{...d,isCordoned:!0,cpuLoad:x.IDLE_CPU,memoryUsage:x.IDLE_MEM,status:"healthy",latencyMs:0,lastUpdated:Date.now()};if(!d.isCordoned){const u=Math.min(99,d.cpuLoad+n),c=Math.min(99,d.memoryUsage+l),f=u>85||c>90?"critical":u>70?"warning":"healthy";return{...d,cpuLoad:u,memoryUsage:c,status:f,latencyMs:Math.round(d.latencyMs*1.25),lastUpdated:Date.now()}}return d})}else{const r=this.nodes.filter(n=>!n.isCordoned),a=r.length>0?Math.round(r.reduce((n,l)=>n+l.cpuLoad,0)/(r.length+1)):35,o=r.length>0?Math.round(r.reduce((n,l)=>n+l.memoryUsage,0)/(r.length+1)):50;this.nodes=this.nodes.map(n=>{if(n.id===t){const l=a>85||o>90?"critical":a>70?"warning":"healthy";return{...n,isCordoned:!1,cpuLoad:a,memoryUsage:o,status:l,latencyMs:25,lastUpdated:Date.now()}}if(!n.isCordoned){const l=Math.max(15,Math.round(n.cpuLoad*.8)),d=Math.max(20,Math.round(n.memoryUsage*.85)),u=l>85||d>90?"critical":l>70?"warning":"healthy";return{...n,cpuLoad:l,memoryUsage:d,status:u,latencyMs:Math.max(10,Math.round(n.latencyMs*.8)),lastUpdated:Date.now()}}return n})}this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}})),this.notifyHosts()}startSimulation(){typeof window>"u"||(this.timer=window.setInterval(()=>{const t=this.nodes.filter(s=>!s.isCordoned).length,e=t===0?1:Math.max(1,4/t);this.nodes=this.nodes.map(s=>{if(s.isCordoned){const c=Math.max(4,Math.min(12,Math.round(s.cpuLoad+(Math.random()-.5)*1.5))),f=Math.max(15,Math.min(25,Math.round(s.memoryUsage+(Math.random()-.5)*1)));return{...s,cpuLoad:c,memoryUsage:f,status:"healthy",latencyMs:0,lastUpdated:Date.now()}}const r=(Math.random()-.48)*4,a=(Math.random()-.48)*2,o=Math.round(20*e),n=Math.round(30*e),l=Math.max(o,Math.min(99,Math.round(s.cpuLoad+r))),d=Math.max(n,Math.min(99,Math.round(s.memoryUsage+a))),u=l>85||d>90?"critical":l>70?"warning":"healthy";return{...s,cpuLoad:l,memoryUsage:d,status:u,latencyMs:Math.max(5,Math.round(s.latencyMs+(Math.random()-.5)*6)),lastUpdated:Date.now()}}),this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}})),this.notifyHosts()},2500))}destroy(){this.timer!==null&&(clearInterval(this.timer),this.timer=null),this.hosts.clear()}};x.IDLE_CPU=8,x.IDLE_MEM=20;let ut=x;class ve{constructor(){this.ctx=null,this.masterGain=null,this.droneOsc1=null,this.droneOsc2=null,this.alertInterval=null,this.alertState="healthy",this.isRunning=!1}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.init(),!this.ctx||!this.masterGain||(this.ctx.state==="suspended"&&await this.ctx.resume(),this.isRunning))return;this.isRunning=!0,this.droneOsc1=this.ctx.createOscillator(),this.droneOsc1.type="sine",this.droneOsc1.frequency.setValueAtTime(55,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(140,this.ctx.currentTime),this.droneOsc2=this.ctx.createOscillator(),this.droneOsc2.type="triangle",this.droneOsc2.frequency.setValueAtTime(55.4,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.12,this.ctx.currentTime),this.droneOsc1.connect(t),this.droneOsc2.connect(t),t.connect(e),e.connect(this.masterGain),this.droneOsc1.start(),this.droneOsc2.start(),this.restartAlertLoop()}setAlertState(t){this.alertState!==t&&(this.alertState=t,this.isRunning&&this.restartAlertLoop())}get currentAlertState(){return this.alertState}restartAlertLoop(){if(this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null),this.alertState==="healthy"||!this.isRunning)return;const t=this.alertState,e=t==="critical"?500:2e3;this.playAlertBeep(t),this.alertInterval=window.setInterval(()=>{this.playAlertBeep(t)},e)}playAlertBeep(t){if(!this.ctx||!this.masterGain||!this.isRunning)return;const e=this.ctx.createOscillator(),s=this.ctx.createGain(),r=t==="critical"?1174.66:784,a=t==="critical"?.12:.18,o=t==="critical"?.09:.06;e.type=t==="critical"?"square":"sine",e.frequency.setValueAtTime(r,this.ctx.currentTime),s.gain.setValueAtTime(o,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+a),e.connect(s),s.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+a)}setVolume(t){if(!this.masterGain||!this.ctx)return;const e=Math.max(0,Math.min(1,t));this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}stop(){var t,e,s,r;if(this.isRunning){this.isRunning=!1,this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null);try{(t=this.droneOsc1)==null||t.stop(),(e=this.droneOsc2)==null||e.stop(),(s=this.droneOsc1)==null||s.disconnect(),(r=this.droneOsc2)==null||r.disconnect()}catch{}}}get running(){return this.isRunning}}const V=class V extends EventTarget{constructor(t=Bt()){super(),this.isEnabled=!0,this.isMuted=!1,this.volumeLevel=.3,this.hosts=new Set,this.storage=t,this.engine=new ve,this.hydrateFromStorage()}addHost(t){this.hosts.add(t),t.addController({hostDisconnected:()=>{this.hosts.delete(t)}}),t.requestUpdate()}removeHost(t){this.hosts.delete(t)}notifyHosts(){for(const t of this.hosts)t.requestUpdate()}hydrateFromStorage(){try{const t=this.storage.getItem(V.STORAGE_KEY);if(t){const e=JSON.parse(t);typeof e.enabled=="boolean"&&(this.isEnabled=e.enabled),typeof e.muted=="boolean"&&(this.isMuted=e.muted),typeof e.volume=="number"&&(this.volumeLevel=Math.max(0,Math.min(1,e.volume)))}}catch{}}saveToStorage(){try{const t={enabled:this.isEnabled,muted:this.isMuted,volume:this.volumeLevel};this.storage.setItem(V.STORAGE_KEY,JSON.stringify(t))}catch{}}get isPlaying(){return this.engine.running}get isAudioEnabled(){return this.isEnabled}get muted(){return this.isMuted}get volume(){return this.volumeLevel}async start(){this.isEnabled=!0,this.saveToStorage(),this.engine.running||(await this.engine.start(),this.engine.setVolume(this.isMuted?0:this.volumeLevel)),this.notifyState()}stop(){this.isEnabled=!1,this.saveToStorage(),this.engine.running&&this.engine.stop(),this.notifyState()}async togglePlay(){this.engine.running?this.stop():await this.start()}toggleMute(){this.isMuted=!this.isMuted,this.engine.setVolume(this.isMuted?0:this.volumeLevel),this.saveToStorage(),this.notifyState()}setAlertState(t){this.engine.setAlertState(t),this.notifyState()}get alertState(){return this.engine.currentAlertState}setVolume(t){this.volumeLevel=Math.max(0,Math.min(1,t)),this.isMuted||this.engine.setVolume(this.volumeLevel),this.saveToStorage(),this.notifyState()}notifyState(){this.dispatchEvent(new CustomEvent("audio-changed",{detail:{isPlaying:this.engine.running,muted:this.isMuted,volume:this.volumeLevel,alertState:this.engine.currentAlertState}})),this.notifyHosts()}};V.STORAGE_KEY="__APP_AUDIO_PREFS__";let pt=V;class ye extends EventTarget{constructor(){super(),this.guards=[],this.attachLinkInterceptor(),window.addEventListener("popstate",t=>this.handlePopState(t))}addGuard(t){this.guards.push(t)}attachLinkInterceptor(){document.addEventListener("click",t=>{const s=(t.composedPath?t.composedPath():[t.target]).find(a=>a instanceof HTMLElement&&a.tagName==="A");if(!s)return;const r=s.getAttribute("href");!r||r.startsWith("http://")||r.startsWith("https://")||r.startsWith("#")||s.target==="_blank"||(t.preventDefault(),this.navigate(r))})}async navigate(t,e=!0){let s=t;for(const a of this.guards){const o=a(s);if(o===!1)return;typeof o=="string"&&(s=o)}this.dispatchEvent(new CustomEvent("route-changing",{detail:{targetUrl:s}}));const r=document;if(typeof r.startViewTransition=="function")try{const a=r.startViewTransition(async()=>{await this.loadView(s)});a&&"finished"in a&&a.finished?await a.finished:a instanceof Promise&&await a}catch{await this.loadView(s)}else await this.loadView(s);e&&window.history.pushState({url:s},"",s),this.dispatchEvent(new CustomEvent("route-changed",{detail:{currentUrl:s}}))}async loadView(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);const s=await e.text(),a=new DOMParser().parseFromString(s,"text/html");document.title=a.title;const o=a.querySelector(".main-content"),n=document.querySelector(".main-content");o&&n&&(n.innerHTML=o.innerHTML)}catch{window.location.href=t}}handlePopState(t){const e=window.location.pathname.split("/").pop()||"index.html";this.navigate(e,!1)}}var we=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,wt=(i,t,e,s)=>{for(var r=s>1?void 0:s?xe(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&we(t,e,r),r};let F=class extends g{connectedCallback(){var i,t;super.connectedCallback(),!this.authStore&&typeof window<"u"&&((i=window.__AETHER_SHELL__)!=null&&i.authStore)&&(this.authStore=window.__AETHER_SHELL__.authStore,this.authStore.addHost(this)),!this.audioStore&&typeof window<"u"&&((t=window.__AETHER_SHELL__)!=null&&t.audioStore)&&(this.audioStore=window.__AETHER_SHELL__.audioStore,this.audioStore.addHost(this))}willUpdate(i){var t,e,s,r;i.has("authStore")&&((t=i.get("authStore"))==null||t.removeHost(this),(e=this.authStore)==null||e.addHost(this)),i.has("audioStore")&&((s=i.get("audioStore"))==null||s.removeHost(this),(r=this.audioStore)==null||r.addHost(this))}async toggleAudio(){var i;await((i=this.audioStore)==null?void 0:i.togglePlay())}toggleMute(){var i;(i=this.audioStore)==null||i.toggleMute()}handleVolume(i){var e;const t=parseFloat(i.target.value);(e=this.audioStore)==null||e.setVolume(t)}handleLogout(){var i;(i=this.authStore)==null||i.logout(),this.dispatchEvent(new CustomEvent("request-navigation",{bubbles:!0,composed:!0,detail:{url:"index.html"}}))}render(){var i,t,e,s,r,a,o,n,l,d,u,c,f,b;return h`
      <div class="header-inner">
        <a href="index.html" class="brand" aria-label="AetherWatch Home">
          <span class="brand-icon">⬡</span>
          <span>AetherWatch</span>
        </a>

        <nav aria-label="Main Navigation">
          <a href="index.html">Gateway</a>
          <a href="showcase.html">Standards Showcase</a>
          ${(i=this.authStore)!=null&&i.currentUser?h`
            <a href="dashboard.html">Telemetry</a>
            <a href="dashboard-nodes.html">Nodes</a>
            <button
              type="button"
              class="btn-nav-terminate"
              @click=${this.handleLogout}
              aria-label="Terminate active operator session"
              title="Terminate active session"
            >
              Terminate Session
            </button>
          `:null}
        </nav>

        <div class="controls-group">
          <!-- Web Audio Soundscape Controls -->
          <div class="audio-controls" role="toolbar" aria-label="Soundscape Controls">
            <button
              class="btn-ctrl ${(t=this.audioStore)!=null&&t.isPlaying?"active":""}"
              @click=${this.toggleAudio}
              aria-label="${(e=this.audioStore)!=null&&e.isPlaying?"Stop ambient audio":"Start ambient audio"}"
              title="${(s=this.audioStore)!=null&&s.isPlaying?"Stop ambient audio":"Start ambient audio"}"
            >
              ${(r=this.audioStore)!=null&&r.isPlaying?"■ Audio On":"▶ Audio Off"}
            </button>

            <button
              class="btn-ctrl ${(a=this.audioStore)!=null&&a.muted?"muted":""}"
              @click=${this.toggleMute}
              ?disabled=${!((o=this.audioStore)!=null&&o.isPlaying)}
              aria-label="${(n=this.audioStore)!=null&&n.muted?"Unmute audio":"Mute audio"}"
              title="${(l=this.audioStore)!=null&&l.muted?"Unmute audio":"Mute audio"}"
            >
              ${(d=this.audioStore)!=null&&d.muted?"🔇 Muted":"🔊 Sound"}
            </button>

            <label for="soundscape-vol" class="visually-hidden">Volume</label>
            <input
              id="soundscape-vol"
              type="range"
              min="0"
              max="1"
              step="0.05"
              class="volume-slider"
              .value=${((u=this.audioStore)==null?void 0:u.volume)??.3}
              @input=${this.handleVolume}
              ?disabled=${!((c=this.audioStore)!=null&&c.isPlaying)}
              aria-label="Soundscape Volume"
            />
          </div>

          ${(f=this.authStore)!=null&&f.currentUser?h`
            <div class="user-pill">
              <span>👤 ${(b=this.authStore)==null?void 0:b.currentUser}</span>
              <button class="btn-logout" @click=${this.handleLogout}>Sign Out</button>
            </div>
          `:null}
        </div>
      </div>
    `}};F.styles=y`
    :host {
      display: block;
      background: var(--color-bg-surface, #111726);
      border-bottom: 1px solid var(--color-border, #24304d);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.85rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--color-text-main, #f8fafc);
      text-decoration: none;
    }

    .brand-icon {
      color: var(--color-primary, #38bdf8);
      font-size: 1.25rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    nav a {
      color: var(--color-text-muted, #94a3b8);
      font-size: 0.9rem;
      font-weight: 500;
      transition: color var(--transition-speed, 200ms);
    }

    nav a:hover {
      color: var(--color-primary, #38bdf8);
      text-decoration: none;
    }

    .controls-group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .audio-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-bg-base, #0a0d14);
      padding: 0.35rem 0.65rem;
      border-radius: var(--radius-md, 8px);
      border: 1px solid var(--color-border, #24304d);
    }

    .btn-ctrl {
      background: transparent;
      border: none;
      color: var(--color-text-muted, #94a3b8);
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0.2rem 0.4rem;
      border-radius: var(--radius-sm, 4px);
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .btn-ctrl:hover {
      color: var(--color-text-main, #f8fafc);
    }

    .btn-ctrl.active {
      color: var(--color-primary, #38bdf8);
    }

    .btn-ctrl.muted {
      color: var(--color-danger, #f87171);
    }

    .volume-slider {
      width: 60px;
      height: 4px;
      accent-color: var(--color-primary, #38bdf8);
      cursor: pointer;
    }

    .user-pill {
      font-size: 0.8rem;
      color: var(--color-text-muted, #94a3b8);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-nav-terminate {
      background: transparent;
      border: 1px solid var(--color-danger, #f87171);
      color: var(--color-danger, #f87171);
      border-radius: var(--radius-sm, 4px);
      padding: 0.25rem 0.6rem;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: background var(--transition-speed, 200ms), color var(--transition-speed, 200ms);
    }

    .btn-nav-terminate:hover {
      background: rgba(248, 113, 113, 0.15);
      color: var(--color-danger, #f87171);
    }

    .btn-logout {
      background: transparent;
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-text-faint, #64748b);
      border-radius: var(--radius-sm, 4px);
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
      cursor: pointer;
    }

    .btn-logout:hover {
      color: var(--color-danger, #f87171);
      border-color: var(--color-danger, #f87171);
    }
  `;wt([O({context:J,subscribe:!0}),m({attribute:!1})],F.prototype,"authStore",2);wt([O({context:Gt,subscribe:!0}),m({attribute:!1})],F.prototype,"audioStore",2);F=wt([w("app-header")],F);var _e=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,D=(i,t,e,s)=>{for(var r=s>1?void 0:s?$e(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&_e(t,e,r),r};let v=class extends g{constructor(){super(),this.username="",this.password="",this.errorMessage="",this.isSubmitting=!1,typeof this.attachInternals=="function"&&(this.internals=this.attachInternals())}connectedCallback(){var i;super.connectedCallback(),!this.authStore&&typeof window<"u"&&((i=window.__AETHER_SHELL__)!=null&&i.authStore)&&(this.authStore=window.__AETHER_SHELL__.authStore)}willUpdate(i){var t,e;i.has("authStore")&&((t=i.get("authStore"))==null||t.removeHost(this),(e=this.authStore)==null||e.addHost(this))}handleUsernameChange(i){this.username=i.target.value,this.errorMessage="",this.updateFormValidity()}handlePasswordChange(i){this.password=i.target.value,this.errorMessage="",this.updateFormValidity()}updateFormValidity(){var i,t,e,s,r,a;(t=(i=this.internals)==null?void 0:i.setFormValue)==null||t.call(i,`${this.username}`),this.username?(a=(r=this.internals)==null?void 0:r.setValidity)==null||a.call(r,{}):(s=(e=this.internals)==null?void 0:e.setValidity)==null||s.call(e,{valueMissing:!0},"Username is required")}handleSubmit(i){var s;i.preventDefault();const t=this.authStore||(typeof window<"u"?(s=window.__AETHER_SHELL__)==null?void 0:s.authStore:void 0);if(!t)return;this.isSubmitting=!0;const e=t.login(this.username,this.password);this.isSubmitting=!1,e.success?this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0,detail:{username:this.username}})):this.errorMessage=e.error||"Authentication failed."}handleTerminateSession(){var t;const i=this.authStore||(typeof window<"u"?(t=window.__AETHER_SHELL__)==null?void 0:t.authStore:void 0);i==null||i.logout()}render(){var e,s;const i=(e=this.authStore)==null?void 0:e.currentUser,t=(s=this.authStore)==null?void 0:s.currentTabId;return i?h`
        <div class="card" role="region" aria-label="Active Session Established">
          <div class="session-badge">
            <span>●</span> Active Session Established
          </div>

          <h2 class="title">Welcome, ${i}</h2>
          <p class="subtitle">An authenticated operator session is currently active.</p>

          <div class="session-info">
            <div class="session-row">
              <span class="label">Operator:</span>
              <span class="value">${i}</span>
            </div>
            <div class="session-row">
              <span class="label">Tab Instance:</span>
              <span class="value">${t?t.slice(0,14)+"…":"current-tab"}</span>
            </div>
            <div class="session-row">
              <span class="label">Storage Scope:</span>
              <span class="value">sessionStorage</span>
            </div>
          </div>

          <div class="session-actions">
            <a href="dashboard.html" class="btn-resume">
              Resume Dashboard Matrix &rarr;
            </a>
            <button type="button" class="btn-terminate" @click=${this.handleTerminateSession}>
              Terminate Session
            </button>
          </div>
        </div>
      `:h`
      <div class="card" role="region" aria-label="Sign In Portal">
        <h2 class="title">Gateway Access</h2>
        <p class="subtitle">Authenticate to view live node telemetry</p>

        ${this.errorMessage?h`
          <div class="error-box" role="alert">
            ${this.errorMessage}
          </div>
        `:null}

        <form @submit=${this.handleSubmit} novalidate>
          <div class="form-group">
            <label for="username">Operator Call-Sign</label>
            <input
              id="username"
              type="text"
              name="username"
              required
              autocomplete="username"
              placeholder="e.g. operator-01"
              .value=${this.username}
              @input=${this.handleUsernameChange}
            />
          </div>

          <div class="form-group">
            <label for="password">Access Key</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              autocomplete="current-password"
              placeholder="Enter security key"
              .value=${this.password}
              @input=${this.handlePasswordChange}
            />
          </div>

          <button type="submit" class="btn-submit" ?disabled=${this.isSubmitting}>
            ${this.isSubmitting?"Verifying...":"Establish Session"}
          </button>
        </form>

        <p class="hint">Standards Demo: Any username accepted. Security key is <code>joshua</code>.</p>
      </div>
    `}};v.formAssociated=!0;v.styles=y`
    :host {
      display: block;
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
    }

    .card {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      padding: 2rem;
      box-shadow: var(--shadow-subtle);
    }

    .title {
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--color-text-main, #f8fafc);
    }

    .subtitle {
      font-size: 0.875rem;
      color: var(--color-text-muted, #94a3b8);
      margin-bottom: 1.5rem;
    }

    .session-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(52, 211, 153, 0.12);
      border: 1px solid rgba(52, 211, 153, 0.3);
      color: var(--color-success, #34d399);
      padding: 0.4rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
    }

    .session-info {
      background: var(--color-bg-base, #0a0d14);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-md, 8px);
      padding: 1rem;
      margin-bottom: 1.5rem;
      text-align: left;
    }

    .session-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      padding: 0.35rem 0;
    }

    .session-row:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .session-row .label {
      color: var(--color-text-muted, #94a3b8);
    }

    .session-row .value {
      font-family: var(--font-family-mono);
      color: var(--color-text-main, #f8fafc);
      font-weight: 600;
    }

    .session-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .btn-resume {
      display: block;
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      padding: 0.75rem;
      background: var(--color-primary, #38bdf8);
      color: #04101e;
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: var(--radius-md, 8px);
      text-decoration: none;
      transition: background var(--transition-speed, 200ms);
    }

    .btn-resume:hover {
      background: var(--color-primary-hover, #0284c7);
      text-decoration: none;
    }

    .btn-terminate {
      width: 100%;
      padding: 0.7rem;
      background: transparent;
      border: 1px solid var(--color-danger, #f87171);
      color: var(--color-danger, #f87171);
      border-radius: var(--radius-md, 8px);
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background var(--transition-speed, 200ms), color var(--transition-speed, 200ms);
    }

    .btn-terminate:hover {
      background: rgba(248, 113, 113, 0.15);
    }

    .form-group {
      margin-bottom: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    label {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-text-muted, #94a3b8);
    }

    input {
      background: var(--color-bg-base, #0a0d14);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-md, 8px);
      padding: 0.65rem 0.85rem;
      color: var(--color-text-main, #f8fafc);
      font-size: 0.95rem;
      transition: border-color var(--transition-speed, 200ms);
    }

    input:focus {
      outline: none;
      border-color: var(--color-primary, #38bdf8);
      box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
    }

    .btn-submit {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: var(--radius-md, 8px);
      background: var(--color-primary, #38bdf8);
      color: #04101e;
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      margin-top: 0.5rem;
      transition: background var(--transition-speed, 200ms), transform 100ms;
    }

    .btn-submit:hover:not(:disabled) {
      background: var(--color-primary-hover, #0284c7);
    }

    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error-box {
      background: rgba(248, 113, 113, 0.1);
      border: 1px solid var(--color-danger, #f87171);
      color: var(--color-danger, #f87171);
      padding: 0.65rem;
      border-radius: var(--radius-md, 8px);
      font-size: 0.85rem;
      margin-bottom: 1.25rem;
    }

    .hint {
      margin-top: 1rem;
      font-size: 0.8rem;
      color: var(--color-text-faint, #64748b);
      text-align: center;
    }
  `;D([O({context:J,subscribe:!0}),m({attribute:!1})],v.prototype,"authStore",2);D([S()],v.prototype,"username",2);D([S()],v.prototype,"password",2);D([S()],v.prototype,"errorMessage",2);D([S()],v.prototype,"isSubmitting",2);v=D([w("login-panel")],v);var Se=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Ft=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ee(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Se(t,e,r),r};let st=class extends g{constructor(){super(...arguments),this.node=null}render(){if(!this.node)return h``;const i=`popover-${this.node.id}`;return h`
      <button class="trigger-btn" popovertarget=${i}>
        Inspect Specs
      </button>

      <div id=${i} popover="auto">
        <div class="pop-title">${this.node.name}</div>
        <div class="row">
          <span>Region:</span>
          <span class="val">${this.node.region}</span>
        </div>
        <div class="row">
          <span>Latency:</span>
          <span class="val">${this.node.latencyMs} ms</span>
        </div>
        <div class="row">
          <span>Node ID:</span>
          <span class="val">${this.node.id}</span>
        </div>
      </div>
    `}};st.styles=y`
    :host {
      display: inline-block;
    }

    .trigger-btn {
      background: transparent;
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-primary, #38bdf8);
      border-radius: var(--radius-sm, 4px);
      padding: 0.25rem 0.6rem;
      font-size: 0.75rem;
      cursor: pointer;
      font-family: var(--font-family-mono);
      transition: background var(--transition-speed, 200ms);
    }

    .trigger-btn:hover {
      background: rgba(56, 189, 248, 0.1);
    }

    /* Native Popover styles */
    [popover] {
      background: var(--color-bg-surface-elevated, #1a2236);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-md, 8px);
      padding: 1rem;
      color: var(--color-text-main, #f8fafc);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
      margin: auto;
      max-width: 300px;
    }

    [popover]::backdrop {
      background: rgba(0, 0, 0, 0.25);
    }

    .pop-title {
      font-weight: 700;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      color: var(--color-primary, #38bdf8);
    }

    .row {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      margin-bottom: 0.25rem;
      color: var(--color-text-muted, #94a3b8);
    }

    .val {
      font-family: var(--font-family-mono);
      color: var(--color-text-main, #f8fafc);
    }
  `;Ft([m({type:Object})],st.prototype,"node",2);st=Ft([w("node-popover")],st);var Ae=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,xt=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ce(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Ae(t,e,r),r};let W=class extends g{constructor(){super(...arguments),this.incident=null}openModal(){this.dialogEl.showModal()}closeModal(){this.dialogEl.close()}handleResolve(){this.dispatchEvent(new CustomEvent("incident-resolved",{bubbles:!0,composed:!0})),this.closeModal()}render(){var i,t,e;return h`
      <dialog aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <div class="modal-header">
          <span class="badge">${((i=this.incident)==null?void 0:i.severity)||"Alert"}</span>
          <h3 id="dialog-title">Telemetry Alert: ${(t=this.incident)==null?void 0:t.nodeId}</h3>
        </div>

        <p class="body" id="dialog-desc">
          ${((e=this.incident)==null?void 0:e.message)||"No active incidents reported."}
        </p>

        <form method="dialog" class="actions">
          <button class="btn btn-secondary" value="cancel">Dismiss</button>
          <button type="button" class="btn btn-primary" @click=${this.handleResolve}>Acknowledge & Triage</button>
        </form>
      </dialog>
    `}};W.styles=y`
    dialog {
      background: var(--color-bg-surface-elevated, #1a2236);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      padding: 1.75rem;
      color: var(--color-text-main, #f8fafc);
      max-width: 500px;
      width: 90%;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
    }

    dialog::backdrop {
      background: rgba(4, 8, 16, 0.75);
      backdrop-filter: blur(4px);
    }

    .modal-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .badge {
      background: rgba(248, 113, 113, 0.2);
      color: var(--color-danger, #f87171);
      border: 1px solid var(--color-danger, #f87171);
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    h3 {
      font-size: 1.15rem;
      margin: 0;
    }

    .body {
      font-size: 0.95rem;
      color: var(--color-text-muted, #94a3b8);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: var(--radius-md, 8px);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
    }

    .btn-secondary {
      background: transparent;
      border-color: var(--color-border, #24304d);
      color: var(--color-text-muted, #94a3b8);
    }

    .btn-primary {
      background: var(--color-primary, #38bdf8);
      color: #04101e;
    }
  `;xt([m({type:Object})],W.prototype,"incident",2);xt([Vt("dialog")],W.prototype,"dialogEl",2);W=xt([w("incident-modal")],W);var Me=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Z=(i,t,e,s)=>{for(var r=s>1?void 0:s?Le(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Me(t,e,r),r};let L=class extends g{constructor(){super(...arguments),this.title="",this.description="",this.actionLabel="",this.actionHref=""}render(){return h`
      <div class="card" role="region" aria-label=${this.title||"Notification Card"}>
        <div class="icon-badge">🔒</div>
        ${this.title?h`<h2 class="title">${this.title}</h2>`:null}
        ${this.description?h`<p class="description">${this.description}</p>`:null}
        
        <div class="actions">
          <slot name="action">
            ${this.actionHref&&this.actionLabel?h`
              <a href=${this.actionHref} class="btn-action">
                ${this.actionLabel}
              </a>
            `:null}
          </slot>
        </div>
      </div>
    `}};L.styles=y`
    :host {
      display: block;
      width: 100%;
    }

    .card {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      padding: 2.5rem 1.75rem;
      text-align: center;
      max-width: 520px;
      margin: 2rem auto;
      box-shadow: var(--shadow-subtle);
    }

    .icon-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 9999px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid var(--color-border-glow, rgba(56, 189, 248, 0.35));
      color: var(--color-primary, #38bdf8);
      font-size: 1.4rem;
      margin-bottom: 1.25rem;
    }

    .title {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--color-text-main, #f8fafc);
      margin-bottom: 0.75rem;
      line-height: 1.2;
    }

    .description {
      font-size: 0.95rem;
      color: var(--color-text-muted, #94a3b8);
      line-height: 1.6;
      margin-bottom: 1.75rem;
    }

    .actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .btn-action {
      display: inline-block;
      padding: 0.65rem 1.35rem;
      background: var(--color-primary, #38bdf8);
      color: #04101e;
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: var(--radius-md, 8px);
      text-decoration: none;
      transition: background var(--transition-speed, 200ms);
    }

    .btn-action:hover {
      background: var(--color-primary-hover, #0284c7);
      text-decoration: none;
    }
  `;Z([m({type:String})],L.prototype,"title",2);Z([m({type:String})],L.prototype,"description",2);Z([m({type:String})],L.prototype,"actionLabel",2);Z([m({type:String})],L.prototype,"actionHref",2);L=Z([w("ui-card")],L);var Pe=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,ot=(i,t,e,s)=>{for(var r=s>1?void 0:s?Oe(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Pe(t,e,r),r};let k=class extends g{constructor(){super(...arguments),this.handleModalResolve=()=>{var i;(i=this.telemetryStore)==null||i.resolveIncident()}}connectedCallback(){var i,t;super.connectedCallback(),!this.authStore&&typeof window<"u"&&((i=window.__AETHER_SHELL__)!=null&&i.authStore)&&(this.authStore=window.__AETHER_SHELL__.authStore),!this.telemetryStore&&typeof window<"u"&&((t=window.__AETHER_SHELL__)!=null&&t.telemetryStore)&&(this.telemetryStore=window.__AETHER_SHELL__.telemetryStore)}willUpdate(i){var t,e,s,r;i.has("authStore")&&((t=i.get("authStore"))==null||t.removeHost(this),(e=this.authStore)==null||e.addHost(this)),i.has("telemetryStore")&&((s=i.get("telemetryStore"))==null||s.removeHost(this),(r=this.telemetryStore)==null||r.addHost(this))}handleOpenModal(){this.modalEl.openModal()}handleSimulateIncident(){var i;(i=this.telemetryStore)==null||i.triggerMockIncident("node-gamma")}render(){var s,r,a;if(!(((s=this.authStore)==null?void 0:s.isAuthenticated)??!1))return h`
        <ui-card
          title="Access Restricted"
          description="You must authenticate at the gateway before accessing real-time telemetry clusters."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `;const t=((r=this.telemetryStore)==null?void 0:r.getIncident())??null,e=((a=this.telemetryStore)==null?void 0:a.getNodes())??[];return h`
      <div class="header-bar">
        <div>
          <h2 class="title">Active Telemetry Cluster</h2>
          <p style="font-size: 0.85rem; color: var(--color-text-muted);">
            Real-time node telemetry stream via decoupled EventTarget store
          </p>
        </div>

        <button class="btn-trigger" @click=${this.handleSimulateIncident}>
          Simulate Incident
        </button>
      </div>

      ${t?h`
        <div class="incident-alert-banner" role="alert">
          <div>
            <strong>Incident Detected:</strong> ${t.message}
          </div>
          <button class="btn-alert" @click=${this.handleOpenModal}>
            Open Incident Dialog
          </button>
        </div>
      `:null}

      <div class="grid">
        ${e.map(o=>h`
          <div class="card ${o.isCordoned?"status-cordoned":`status-${o.status}`}">
            <div class="node-header">
              <div>
                <div class="node-name">
                  ${o.name}
                  ${o.isCordoned?h`<span style="font-size: 0.7rem; color: var(--color-warning); font-weight: normal; margin-left: 0.35rem;">(Cordoned)</span>`:null}
                </div>
                <div class="node-region">${o.region}</div>
              </div>
            </div>

            <div class="metrics">
              <div class="metric-row">
                <span>CPU Load</span>
                <span>${o.cpuLoad}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${o.cpuLoad>85?"critical":o.cpuLoad>70?"warning":""}"
                  style="width: ${o.cpuLoad}%"
                ></div>
              </div>

              <div class="metric-row" style="margin-top: 0.25rem;">
                <span>Memory</span>
                <span>${o.memoryUsage}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${o.memoryUsage>85?"critical":o.memoryUsage>70?"warning":""}"
                  style="width: ${o.memoryUsage}%"
                ></div>
              </div>
            </div>

            <div class="card-footer">
              <span style="font-size: 0.75rem; color: var(--color-text-faint);">
                Ping: ${o.latencyMs}ms
              </span>
              <!-- Native Popover element -->
              <node-popover .node=${o}></node-popover>
            </div>
          </div>
        `)}
      </div>

      <!-- Native <dialog> Modal -->
      <incident-modal
        .incident=${t}
        @incident-resolved=${this.handleModalResolve}
      ></incident-modal>
    `}};k.styles=y`
    :host {
      display: block;
      container-type: inline-size;
      container-name: telemetry-container;
    }

    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-main, #f8fafc);
    }

    .incident-alert-banner {
      background: rgba(248, 113, 113, 0.15);
      border: 1px solid var(--color-danger, #f87171);
      border-radius: var(--radius-md, 8px);
      padding: 0.75rem 1rem;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .btn-alert {
      background: var(--color-danger, #f87171);
      color: #04101e;
      border: none;
      padding: 0.4rem 0.8rem;
      border-radius: var(--radius-sm, 4px);
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
    }

    .btn-trigger {
      background: var(--color-bg-surface-elevated, #1a2236);
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-text-muted, #94a3b8);
      padding: 0.5rem 0.85rem;
      border-radius: var(--radius-md, 8px);
      font-size: 0.85rem;
      cursor: pointer;
    }

    .btn-trigger:hover {
      border-color: var(--color-primary, #38bdf8);
      color: var(--color-primary, #38bdf8);
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    /* CSS Container Query for modular card responsiveness */
    @container telemetry-container (min-width: 650px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @container telemetry-container (min-width: 950px) {
      .grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .card {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      position: relative;
    }

    .card.status-healthy { border-left: 4px solid var(--color-success, #34d399); }
    .card.status-warning { border-left: 4px solid var(--color-warning, #fbbf24); }
    .card.status-critical { border-left: 4px solid var(--color-danger, #f87171); }
    .card.status-cordoned { border-left: 4px solid var(--color-text-faint, #64748b); opacity: 0.75; }

    .node-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .node-name {
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--color-text-main, #f8fafc);
    }

    .node-region {
      font-size: 0.75rem;
      color: var(--color-text-faint, #64748b);
      font-family: var(--font-family-mono);
    }

    .metrics {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .metric-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      color: var(--color-text-muted, #94a3b8);
    }

    .bar {
      height: 6px;
      background: var(--color-bg-base, #0a0d14);
      border-radius: 9999px;
      overflow: hidden;
    }

    .bar-fill {
      height: 100%;
      background: var(--color-primary, #38bdf8);
      transition: width 300ms ease;
    }

    .bar-fill.warning { background: var(--color-warning, #fbbf24); }
    .bar-fill.critical { background: var(--color-danger, #f87171); }

    .card-footer {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
  `;ot([O({context:J,subscribe:!0}),m({attribute:!1})],k.prototype,"authStore",2);ot([O({context:yt,subscribe:!0}),m({attribute:!1})],k.prototype,"telemetryStore",2);ot([Vt("incident-modal")],k.prototype,"modalEl",2);k=ot([w("telemetry-grid")],k);var Te=Object.defineProperty,He=Object.getOwnPropertyDescriptor,_t=(i,t,e,s)=>{for(var r=s>1?void 0:s?He(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Te(t,e,r),r};let K=class extends g{connectedCallback(){var i,t;super.connectedCallback(),!this.authStore&&typeof window<"u"&&((i=window.__AETHER_SHELL__)!=null&&i.authStore)&&(this.authStore=window.__AETHER_SHELL__.authStore),!this.telemetryStore&&typeof window<"u"&&((t=window.__AETHER_SHELL__)!=null&&t.telemetryStore)&&(this.telemetryStore=window.__AETHER_SHELL__.telemetryStore)}willUpdate(i){var t,e,s,r;i.has("authStore")&&((t=i.get("authStore"))==null||t.removeHost(this),(e=this.authStore)==null||e.addHost(this)),i.has("telemetryStore")&&((s=i.get("telemetryStore"))==null||s.removeHost(this),(r=this.telemetryStore)==null||r.addHost(this))}handleToggleCordon(i){var t;(t=this.telemetryStore)==null||t.toggleCordon(i)}render(){var e,s;if(!(((e=this.authStore)==null?void 0:e.isAuthenticated)??!1))return h`
        <ui-card
          title="Access Restricted"
          description="Node cluster topology is restricted to authenticated operators."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `;const t=((s=this.telemetryStore)==null?void 0:s.getNodes())??[];return h`
      <div class="header">
        <h2 class="title">Active Relay Registry</h2>
        <p class="subtitle">Deep inspection and maintenance control for distributed edge relay nodes</p>
      </div>

      <div class="callout" role="note">
        <span style="font-size: 1.25rem;">🔊</span>
        <div>
          <strong>Dynamic Threshold Simulation:</strong> Cordoning an unstable or critical node isolates it from traffic, shedding load and immediately calming the Web Audio alert loop.
        </div>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Node Name</th>
              <th>Region</th>
              <th>Status</th>
              <th>CPU Load</th>
              <th>Memory</th>
              <th>Latency</th>
              <th>Traffic Control</th>
            </tr>
          </thead>
          <tbody>
            ${t.map(r=>h`
              <tr class=${r.isCordoned?"row-cordoned":""}>
                <td>
                  <strong>${r.name}</strong>
                  ${r.isCordoned?h`<span style="margin-left: 0.4rem; font-size: 0.75rem; color: var(--color-warning);">[Cordoned]</span>`:null}
                </td>
                <td><code>${r.region}</code></td>
                <td>
                  <span class="badge-status ${r.isCordoned?"status-cordoned":`status-${r.status}`}">
                    ${r.isCordoned?"DRAINING":r.status}
                  </span>
                </td>
                <td>${r.cpuLoad}%</td>
                <td>${r.memoryUsage}%</td>
                <td>${r.isCordoned?"—":`${r.latencyMs} ms`}</td>
                <td>
                  <button
                    type="button"
                    class="btn-cordon ${r.isCordoned?"active":""}"
                    @click=${()=>this.handleToggleCordon(r.id)}
                    aria-label="${r.isCordoned?`Uncordon node ${r.name}`:`Cordon node ${r.name}`}"
                    title="${r.isCordoned?"Resume live cluster traffic":"Drain and isolate node from cluster traffic"}"
                  >
                    ${r.isCordoned?"✓ Uncordon":"⛔ Cordon"}
                  </button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `}};K.styles=y`
    :host {
      display: block;
    }

    .header {
      margin-bottom: 2rem;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-main, #f8fafc);
      margin-bottom: 0.25rem;
    }

    .subtitle {
      color: var(--color-text-muted, #94a3b8);
      font-size: 0.9rem;
    }

    .callout {
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: var(--radius-md, 8px);
      padding: 1rem 1.25rem;
      margin-bottom: 2rem;
      font-size: 0.9rem;
      color: var(--color-text-main, #f8fafc);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .table-container {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.875rem;
    }

    th {
      background: var(--color-bg-surface-elevated, #1a2236);
      padding: 0.85rem 1.25rem;
      color: var(--color-text-muted, #94a3b8);
      font-weight: 600;
      border-bottom: 1px solid var(--color-border, #24304d);
    }

    td {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      color: var(--color-text-main, #f8fafc);
    }

    tr:last-child td {
      border-bottom: none;
    }

    .badge-status {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .status-healthy { background: rgba(52, 211, 153, 0.15); color: var(--color-success, #34d399); }
    .status-warning { background: rgba(251, 191, 36, 0.15); color: var(--color-warning, #fbbf24); }
    .status-critical { background: rgba(248, 113, 113, 0.15); color: var(--color-danger, #f87171); }
    .status-cordoned { background: rgba(148, 163, 184, 0.15); color: var(--color-text-muted, #94a3b8); border: 1px dashed var(--color-border); }

    .row-cordoned {
      opacity: 0.7;
      background: rgba(10, 13, 20, 0.4);
    }

    .btn-cordon {
      padding: 0.35rem 0.75rem;
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: var(--radius-sm, 4px);
      cursor: pointer;
      border: 1px solid var(--color-border, #24304d);
      background: var(--color-bg-surface-elevated, #1a2236);
      color: var(--color-text-main, #f8fafc);
      transition: all var(--transition-speed, 200ms);
    }

    .btn-cordon:hover {
      border-color: var(--color-warning, #fbbf24);
      color: var(--color-warning, #fbbf24);
    }

    .btn-cordon.active {
      background: rgba(251, 191, 36, 0.15);
      border-color: var(--color-warning, #fbbf24);
      color: var(--color-warning, #fbbf24);
    }

    .btn-cordon.active:hover {
      background: rgba(52, 211, 153, 0.15);
      border-color: var(--color-success, #34d399);
      color: var(--color-success, #34d399);
    }
  `;_t([O({context:J,subscribe:!0}),m({attribute:!1})],K.prototype,"authStore",2);_t([O({context:yt,subscribe:!0}),m({attribute:!1})],K.prototype,"telemetryStore",2);K=_t([w("nodes-view")],K);var Ue=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Q=(i,t,e,s)=>{for(var r=s>1?void 0:s?Re(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Ue(t,e,r),r};let P=class extends g{constructor(){super(...arguments),this.items=[],this.page=1,this.isLoading=!1,this.totalSimulated=18,this.categories=["audit","telemetry","network","mesh"]}connectedCallback(){super.connectedCallback(),this.loadInitialBatch()}firstUpdated(){const i=this.renderRoot.querySelector("#feed-sentinel");i&&(this.observer=new IntersectionObserver(t=>{t[0].isIntersecting&&!this.isLoading&&this.items.length<this.totalSimulated&&this.loadNextPage()},{rootMargin:"100px"}),this.observer.observe(i))}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.observer)==null||i.disconnect()}loadInitialBatch(){this.items=this.generateBatch(1,4),this.page=1}async loadNextPage(){if(this.isLoading||this.items.length>=this.totalSimulated)return;this.isLoading=!0,await new Promise(e=>setTimeout(e,250));const i=this.page+1,t=this.generateBatch(i,3);this.items=[...this.items,...t],this.page=i,this.isLoading=!1}generateBatch(i,t){const e=(i-1)*t+1;return Array.from({length:t},(s,r)=>{const a=e+r,o=this.categories[(a-1)%this.categories.length];return{id:a,title:`Telemetry Event Record #${1e3+a} (Page ${i})`,source:`mesh-node-${a%6+1}.cluster.local`,timestamp:new Date(Date.now()-(100-a)*45e3).toLocaleTimeString(),category:o}})}resetFeed(){this.loadInitialBatch()}render(){return h`
      <div class="header-bar">
        <span>Loaded: <strong>${this.items.length}</strong> / ${this.totalSimulated} events (Page ${this.page})</span>
        <button class="btn-reset" @click=${this.resetFeed}>↺ Reset Feed</button>
      </div>

      <div class="feed-container" role="feed" aria-busy=${this.isLoading} aria-label="IntersectionObserver Stream">
        ${this.items.map(i=>h`
            <article class="feed-item" role="article">
              <div class="item-meta">
                <span class="item-title">${i.title}</span>
                <span class="item-sub">${i.source} &bull; ${i.timestamp}</span>
              </div>
              <span class="tag ${i.category}">${i.category}</span>
            </article>
          `)}

        <div id="feed-sentinel" class="sentinel-box">
          ${this.isLoading?h`<span>⏳ Paging in next chunk via IntersectionObserver...</span>`:this.items.length>=this.totalSimulated?h`<span>✓ All stream events paged in</span>`:h`<span>↓ Scroll down to trigger sentinel</span>`}
        </div>
      </div>
    `}};P.styles=y`
    :host {
      display: block;
      margin-top: 1rem;
    }

    .feed-container {
      background: var(--color-bg-base, #0a0d14);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-md, 8px);
      padding: 1rem;
      max-height: 280px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .feed-item {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-sm, 4px);
      padding: 0.6rem 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.85rem;
      /* Native Virtualization */
      content-visibility: auto;
      contain-intrinsic-size: auto 42px;
    }

    .feed-item:hover {
      border-color: var(--color-primary, #38bdf8);
    }

    .item-meta {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .item-title {
      color: var(--color-text-main, #f8fafc);
      font-weight: 600;
      font-size: 0.85rem;
    }

    .item-sub {
      color: var(--color-text-muted, #94a3b8);
      font-family: var(--font-family-mono, monospace);
      font-size: 0.75rem;
    }

    .tag {
      font-family: var(--font-family-mono, monospace);
      font-size: 0.7rem;
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 600;
    }

    .tag.audit { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }
    .tag.telemetry { background: rgba(52, 211, 153, 0.15); color: #34d399; }
    .tag.network { background: rgba(251, 191, 36, 0.15); color: #fbbf24; }
    .tag.mesh { background: rgba(167, 139, 250, 0.15); color: #a78bfa; }

    .sentinel-box {
      padding: 0.5rem;
      text-align: center;
      font-size: 0.75rem;
      color: var(--color-text-faint, #64748b);
      font-family: var(--font-family-mono, monospace);
    }

    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      color: var(--color-text-muted, #94a3b8);
    }

    .btn-reset {
      background: transparent;
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-text-muted, #94a3b8);
      border-radius: var(--radius-sm, 4px);
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
      cursor: pointer;
    }

    .btn-reset:hover {
      color: var(--color-primary, #38bdf8);
      border-color: var(--color-primary, #38bdf8);
    }
  `;Q([S()],P.prototype,"items",2);Q([S()],P.prototype,"page",2);Q([S()],P.prototype,"isLoading",2);Q([S()],P.prototype,"totalSimulated",2);P=Q([w("infinite-feed-demo")],P);var ke=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,at=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ie(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&ke(t,e,r),r};typeof window<"u"&&(window.addEventListener("error",i=>{var t,e;if((t=i.message)!=null&&t.includes("Cannot read properties of undefined (reading 'startTime')")||i.error instanceof TypeError&&((e=i.error.message)!=null&&e.includes("'startTime'")))return i.preventDefault(),i.stopImmediatePropagation(),!0},!0),window.addEventListener("unhandledrejection",i=>{var t,e,s;((e=(t=i.reason)==null?void 0:t.message)!=null&&e.includes("Cannot read properties of undefined (reading 'startTime')")||i.reason instanceof TypeError&&((s=i.reason.message)!=null&&s.includes("'startTime'")))&&(i.preventDefault(),i.stopImmediatePropagation())},!0));let I=class extends g{constructor(){super(),window.__AETHER_SHELL__?(this.authStore=window.__AETHER_SHELL__.authStore,this.telemetryStore=window.__AETHER_SHELL__.telemetryStore,this.audioStore=window.__AETHER_SHELL__.audioStore,this.router=window.__AETHER_SHELL__.router):(this.authStore=new ht,this.telemetryStore=new ut,this.audioStore=new pt,this.router=new ye,this.router.addGuard(i=>{const t=i.split("?")[0].split("#")[0].split("/").pop()||"index.html";return(t==="dashboard.html"||t==="dashboard-nodes.html")&&!this.authStore.isAuthenticated?"index.html":!0}),window.__AETHER_SHELL__=this,window.__SHELL_BOOTED__=!0,this.telemetryStore.addEventListener("telemetry-tick",i=>{const t=i.detail.nodes;this.evaluateClusterAlarm(t)})),this.evaluateClusterAlarm(this.telemetryStore.getNodes())}evaluateClusterAlarm(i){const t=(i||[]).filter(e=>!e.isCordoned);t.some(e=>e.status==="critical")?this.audioStore.setAlertState("critical"):t.some(e=>e.status==="warning")?this.audioStore.setAlertState("warning"):this.audioStore.setAlertState("healthy")}connectedCallback(){super.connectedCallback(),this.evaluateClusterAlarm(this.telemetryStore.getNodes()),this.addEventListener("request-navigation",i=>{const t=i.detail.url;this.router.navigate(t)}),this.addEventListener("login-success",()=>{this.router.navigate("dashboard.html")}),this.authStore.addEventListener("auth-changed",()=>{this.verifyRouteProtection()}),this.verifyRouteProtection(),this.initAudioAutoplay()}initAudioAutoplay(){if(!this.audioStore.isAudioEnabled)return;this.audioStore.start().catch(()=>{});const i=()=>{this.audioStore.isAudioEnabled&&!this.audioStore.isPlaying&&this.audioStore.start().catch(()=>{}),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i)};window.addEventListener("pointerdown",i,{once:!0,passive:!0}),window.addEventListener("keydown",i,{once:!0,passive:!0})}verifyRouteProtection(){const i=window.location.pathname.split("/").pop()||"index.html";(i==="dashboard.html"||i==="dashboard-nodes.html")&&!this.authStore.isAuthenticated&&this.router.navigate("index.html")}render(){return h`
      <div class="app-layout">
        <app-header></app-header>
        <slot></slot>
      </div>
    `}};I.styles=y`
    :host {
      display: contents;
    }
  `;at([vt({context:J}),m({attribute:!1})],I.prototype,"authStore",2);at([vt({context:yt}),m({attribute:!1})],I.prototype,"telemetryStore",2);at([vt({context:Gt}),m({attribute:!1})],I.prototype,"audioStore",2);I=at([w("app-shell")],I);
