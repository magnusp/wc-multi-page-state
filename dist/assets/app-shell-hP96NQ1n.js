(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=globalThis,mt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),$t=new WeakMap;let It=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(mt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&$t.set(e,t))}return t}toString(){return this.cssText}};const Gt=s=>new It(typeof s=="string"?s:s+"",void 0,gt),A=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new It(e,s,gt)},Bt=(s,t)=>{if(mt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=et.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},wt=mt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Gt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wt,defineProperty:Ft,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Yt,getOwnPropertySymbols:Jt,getPrototypeOf:Zt}=Object,_=globalThis,St=_.trustedTypes,Qt=St?St.emptyScript:"",at=_.reactiveElementPolyfillSupport,q=(s,t)=>s,rt={toAttribute(s,t){switch(t){case Boolean:s=s?Qt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},bt=(s,t)=>!Wt(s,t),_t={attribute:!0,type:String,converter:rt,reflect:!1,useDefault:!1,hasChanged:bt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let D=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&Ft(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=Kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){const a=r==null?void 0:r.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_t}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const t=Zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const e=this.properties,i=[...Yt(e),...Jt(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(wt(r))}else t!==void 0&&e.push(wt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:rt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var o,n;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:rt;this._$Em=r;const d=l.fromAttribute(e,a.type);this[r]=d??((n=this._$Ej)==null?void 0:n.get(r))??d,this._$Em=null}}requestUpdate(t,e,i,r=!1,o){var n;if(t!==void 0){const a=this.constructor;if(r===!1&&(o=this[t]),i??(i=a.getPropertyOptions(t)),!((i.hasChanged??bt)(o,e)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[q("elementProperties")]=new Map,D[q("finalized")]=new Map,at==null||at({ReactiveElement:D}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,At=s=>s,st=G.trustedTypes,Et=st?st.createPolicy("lit-html",{createHTML:s=>s}):void 0,Rt="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Dt="?"+S,Xt=`<${Dt}>`,O=document,W=()=>O.createComment(""),F=s=>s===null||typeof s!="object"&&typeof s!="function",ft=Array.isArray,te=s=>ft(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",lt=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ct=/-->/g,Mt=/>/g,M=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,Lt=/"/g,zt=/^(?:script|style|textarea|title)$/i,ee=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),u=ee(1),N=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ot=new WeakMap,P=O.createTreeWalker(O,129);function Nt(s,t){if(!ft(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}const re=(s,t)=>{const e=s.length-1,i=[];let r,o=t===2?"<svg>":t===3?"<math>":"",n=V;for(let a=0;a<e;a++){const l=s[a];let d,h,c=-1,b=0;for(;b<l.length&&(n.lastIndex=b,h=n.exec(l),h!==null);)b=n.lastIndex,n===V?h[1]==="!--"?n=Ct:h[1]!==void 0?n=Mt:h[2]!==void 0?(zt.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=M):h[3]!==void 0&&(n=M):n===M?h[0]===">"?(n=r??V,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?M:h[3]==='"'?Lt:Pt):n===Lt||n===Pt?n=M:n===Ct||n===Mt?n=V:(n=M,r=void 0);const $=n===M&&s[a+1].startsWith("/>")?" ":"";o+=n===V?l+Xt:c>=0?(i.push(d),l.slice(0,c)+Rt+l.slice(c)+S+$):l+S+(c===-2?a:$)}return[Nt(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,h]=re(t,e);if(this.el=K.createElement(d,i),P.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=P.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(Rt)){const b=h[n++],$=r.getAttribute(c).split(S),tt=/([.?@])?(.*)/.exec(b);l.push({type:1,index:o,name:tt[2],strings:$,ctor:tt[1]==="."?ie:tt[1]==="?"?oe:tt[1]==="@"?ne:ot}),r.removeAttribute(c)}else c.startsWith(S)&&(l.push({type:6,index:o}),r.removeAttribute(c));if(zt.test(r.tagName)){const c=r.textContent.split(S),b=c.length-1;if(b>0){r.textContent=st?st.emptyScript:"";for(let $=0;$<b;$++)r.append(c[$],W()),P.nextNode(),l.push({type:2,index:++o});r.append(c[b],W())}}}else if(r.nodeType===8)if(r.data===Dt)l.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(S,c+1))!==-1;)l.push({type:7,index:o}),c+=S.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function H(s,t,e=s,i){var n,a;if(t===N)return t;let r=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=F(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=r:e._$Cl=r),r!==void 0&&(t=H(s,r._$AS(s,t.values),r,i)),t}class se{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??O).importNode(e,!0);P.currentNode=r;let o=P.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new J(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new ae(o,this,t)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=P.nextNode(),n++)}return P.currentNode=O,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),F(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):te(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=K.createElement(Nt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{const n=new se(r,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=Ot.get(t.strings);return e===void 0&&Ot.set(t.strings,e=new K(t)),e}k(t){ft(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new J(this.O(W()),this.O(W()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const r=At(t).nextSibling;At(t).remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(o===void 0)t=H(this,t,e,0),n=!F(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=H(this,a[i+l],e,l),d===N&&(d=this._$AH[l]),n||(n=!F(d)||d!==this._$AH[l]),d===p?t=p:t!==p&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ie extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class oe extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class ne extends ot{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??p)===N)return;const i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ae{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const dt=G.litHtmlPolyfillSupport;dt==null||dt(K,J),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.3.3");const le=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new J(t.insertBefore(W(),o),o,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis;let f=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=le(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return N}};var kt;f._$litElement$=!0,f.finalized=!0,(kt=L.litElementHydrateSupport)==null||kt.call(L,{LitElement:f});const ct=L.litElementPolyfillSupport;ct==null||ct({LitElement:f});(L.litElementVersions??(L.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de={attribute:!0,type:String,converter:rt,reflect:!1,hasChanged:bt},ce=(s=de,t,e)=>{const{kind:i,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(e.name,s),i==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,s,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,s,a),a}}}if(i==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function m(s){return(t,e)=>typeof e=="object"?ce(s,t,e):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(s){return m({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=(s,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(s,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(s,t){return(e,i,r)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(s))??null};return he(e,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let jt=class extends Event{constructor(t,e,i,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=i,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tt=class{constructor(t,e,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){const o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new jt(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ue{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:i}]of this.subscriptions)e(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pe=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}};class Ut extends ue{constructor(t,e,i){var r,o;super(e.context!==void 0?e.initialValue:i),this.onContextRequest=n=>{if(n.context!==this.context)return;const a=n.contextTarget??n.composedPath()[0];a!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,a,n.subscribe))},this.onProviderRequest=n=>{if(n.context!==this.context||(n.contextTarget??n.composedPath()[0])===this.host)return;const a=new Set;for(const[l,{consumerHost:d}]of this.subscriptions)a.has(l)||(a.add(l),d.dispatchEvent(new jt(this.context,d,l,!0)));n.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(o=(r=this.host).addController)==null||o.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new pe(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt({context:s}){return(t,e)=>{const i=new WeakMap;if(typeof e=="object")return{get(){return t.get.call(this)},set(r){return i.get(this).setValue(r),t.set.call(this,r)},init(r){return i.set(this,new Ut(this,{context:s,initialValue:r})),r}};{t.constructor.addInitializer((n=>{i.set(n,new Ut(n,{context:s}))}));const r=Object.getOwnPropertyDescriptor(t,e);let o;if(r===void 0){const n=new WeakMap;o={get(){return n.get(this)},set(a){i.get(this).setValue(a),n.set(this,a)},configurable:!0,enumerable:!0}}else{const n=r.set;o={...r,set(a){i.get(this).setValue(a),n==null||n.call(this,a)}}}return void Object.defineProperty(t,e,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k({context:s,subscribe:t}){return(e,i)=>{typeof i=="object"?i.addInitializer((function(){new Tt(this,{context:s,callback:r=>{e.set.call(this,r)},subscribe:t})})):e.constructor.addInitializer((r=>{new Tt(r,{context:s,callback:o=>{r[i]=o},subscribe:t})}))}}const Z=Symbol("auth-context"),yt=Symbol("telemetry-context"),Vt=Symbol("audio-context"),z=class z extends EventTarget{constructor(){super(),this.session=null,this.currentTabId=`tab_${Math.random().toString(36).slice(2,9)}_${Date.now()}`,this.hydrateFromStorage()}hydrateFromStorage(){try{const t=sessionStorage.getItem(z.STORAGE_KEY);if(t){const e=JSON.parse(t);e&&typeof e.username=="string"&&(this.session={username:e.username,authenticatedAt:e.authenticatedAt||Date.now(),tabId:this.currentTabId})}}catch{this.session=null}}get isAuthenticated(){return this.session!==null}get currentUser(){var t;return((t=this.session)==null?void 0:t.username)??null}get activeSession(){return this.session?{...this.session}:null}login(t,e){const i=t.trim();if(!i)return{success:!1,error:"Username is required."};if(e!=="joshua")return{success:!1,error:'Invalid password. (Hint: password is "joshua")'};this.session={username:i,authenticatedAt:Date.now(),tabId:this.currentTabId};try{sessionStorage.setItem(z.STORAGE_KEY,JSON.stringify(this.session))}catch{}return this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!0,user:i}})),{success:!0}}logout(){this.session=null;try{sessionStorage.removeItem(z.STORAGE_KEY)}catch{}this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!1,user:null}}))}};z.STORAGE_KEY="__APP_AUTH_SESSION__";let ht=z;const w=class w extends EventTarget{constructor(){super(),this.nodes=[],this.activeIncident=null,this.timer=null,this.initDefaultNodes(),this.startSimulation()}initDefaultNodes(){this.nodes=[{id:"node-alpha",name:"US-East Core Alpha",region:"us-east-1",status:"healthy",cpuLoad:24,memoryUsage:45,latencyMs:14,lastUpdated:Date.now(),isCordoned:!1},{id:"node-beta",name:"EU-Central Edge Beta",region:"eu-west-1",status:"healthy",cpuLoad:38,memoryUsage:62,latencyMs:32,lastUpdated:Date.now(),isCordoned:!1},{id:"node-gamma",name:"AP-Tokyo Gateway Gamma",region:"ap-northeast-1",status:"warning",cpuLoad:78,memoryUsage:88,latencyMs:142,lastUpdated:Date.now(),isCordoned:!1},{id:"node-delta",name:"US-West Replica Delta",region:"us-west-2",status:"healthy",cpuLoad:19,memoryUsage:33,latencyMs:22,lastUpdated:Date.now(),isCordoned:!1}]}getNodes(){return[...this.nodes]}getNodeById(t){return this.nodes.find(e=>e.id===t)}getIncident(){return this.activeIncident}triggerMockIncident(t="node-gamma"){this.activeIncident={id:`inc-${Date.now().toString(36)}`,severity:"high",message:`Memory threshold exceeded on [${t}] (>85% sustained for 300s). Potential threadpool exhaustion.`,timestamp:Date.now(),nodeId:t},this.dispatchEvent(new CustomEvent("incident-raised",{detail:this.activeIncident}))}resolveIncident(){this.activeIncident&&(this.activeIncident=null,this.dispatchEvent(new CustomEvent("incident-resolved")))}toggleCordon(t){const e=this.nodes.find(r=>r.id===t);if(!e)return;if(!e.isCordoned){const r=Math.max(0,e.cpuLoad-w.IDLE_CPU),o=Math.max(0,e.memoryUsage-w.IDLE_MEM),n=this.nodes.filter(d=>d.id!==t&&!d.isCordoned),a=n.length>0?Math.round(r/n.length):0,l=n.length>0?Math.round(o/n.length):0;this.nodes=this.nodes.map(d=>{if(d.id===t)return{...d,isCordoned:!0,cpuLoad:w.IDLE_CPU,memoryUsage:w.IDLE_MEM,status:"healthy",latencyMs:0,lastUpdated:Date.now()};if(!d.isCordoned){const h=Math.min(99,d.cpuLoad+a),c=Math.min(99,d.memoryUsage+l),b=h>85||c>90?"critical":h>70?"warning":"healthy";return{...d,cpuLoad:h,memoryUsage:c,status:b,latencyMs:Math.round(d.latencyMs*1.25),lastUpdated:Date.now()}}return d})}else{const r=this.nodes.filter(a=>!a.isCordoned),o=r.length>0?Math.round(r.reduce((a,l)=>a+l.cpuLoad,0)/(r.length+1)):35,n=r.length>0?Math.round(r.reduce((a,l)=>a+l.memoryUsage,0)/(r.length+1)):50;this.nodes=this.nodes.map(a=>{if(a.id===t){const l=o>85||n>90?"critical":o>70?"warning":"healthy";return{...a,isCordoned:!1,cpuLoad:o,memoryUsage:n,status:l,latencyMs:25,lastUpdated:Date.now()}}if(!a.isCordoned){const l=Math.max(15,Math.round(a.cpuLoad*.8)),d=Math.max(20,Math.round(a.memoryUsage*.85)),h=l>85||d>90?"critical":l>70?"warning":"healthy";return{...a,cpuLoad:l,memoryUsage:d,status:h,latencyMs:Math.max(10,Math.round(a.latencyMs*.8)),lastUpdated:Date.now()}}return a})}this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}}))}startSimulation(){typeof window>"u"||(this.timer=window.setInterval(()=>{const t=this.nodes.filter(i=>!i.isCordoned).length,e=t===0?1:Math.max(1,4/t);this.nodes=this.nodes.map(i=>{if(i.isCordoned){const c=Math.max(4,Math.min(12,Math.round(i.cpuLoad+(Math.random()-.5)*1.5))),b=Math.max(15,Math.min(25,Math.round(i.memoryUsage+(Math.random()-.5)*1)));return{...i,cpuLoad:c,memoryUsage:b,status:"healthy",latencyMs:0,lastUpdated:Date.now()}}const r=(Math.random()-.48)*4,o=(Math.random()-.48)*2,n=Math.round(20*e),a=Math.round(30*e),l=Math.max(n,Math.min(99,Math.round(i.cpuLoad+r))),d=Math.max(a,Math.min(99,Math.round(i.memoryUsage+o))),h=l>85||d>90?"critical":l>70?"warning":"healthy";return{...i,cpuLoad:l,memoryUsage:d,status:h,latencyMs:Math.max(5,Math.round(i.latencyMs+(Math.random()-.5)*6)),lastUpdated:Date.now()}}),this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}}))},2500))}destroy(){this.timer!==null&&(clearInterval(this.timer),this.timer=null)}};w.IDLE_CPU=8,w.IDLE_MEM=20;let ut=w;class me{constructor(){this.ctx=null,this.masterGain=null,this.droneOsc1=null,this.droneOsc2=null,this.alertInterval=null,this.alertState="healthy",this.isRunning=!1}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.init(),!this.ctx||!this.masterGain||(this.ctx.state==="suspended"&&await this.ctx.resume(),this.isRunning))return;this.isRunning=!0,this.droneOsc1=this.ctx.createOscillator(),this.droneOsc1.type="sine",this.droneOsc1.frequency.setValueAtTime(55,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(140,this.ctx.currentTime),this.droneOsc2=this.ctx.createOscillator(),this.droneOsc2.type="triangle",this.droneOsc2.frequency.setValueAtTime(55.4,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.12,this.ctx.currentTime),this.droneOsc1.connect(t),this.droneOsc2.connect(t),t.connect(e),e.connect(this.masterGain),this.droneOsc1.start(),this.droneOsc2.start(),this.restartAlertLoop()}setAlertState(t){this.alertState!==t&&(this.alertState=t,this.isRunning&&this.restartAlertLoop())}get currentAlertState(){return this.alertState}restartAlertLoop(){if(this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null),this.alertState==="healthy"||!this.isRunning)return;const t=this.alertState,e=t==="critical"?500:2e3;this.playAlertBeep(t),this.alertInterval=window.setInterval(()=>{this.playAlertBeep(t)},e)}playAlertBeep(t){if(!this.ctx||!this.masterGain||!this.isRunning)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),r=t==="critical"?1174.66:784,o=t==="critical"?.12:.18,n=t==="critical"?.09:.06;e.type=t==="critical"?"square":"sine",e.frequency.setValueAtTime(r,this.ctx.currentTime),i.gain.setValueAtTime(n,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+o),e.connect(i),i.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+o)}setVolume(t){if(!this.masterGain||!this.ctx)return;const e=Math.max(0,Math.min(1,t));this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}stop(){var t,e,i,r;if(this.isRunning){this.isRunning=!1,this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null);try{(t=this.droneOsc1)==null||t.stop(),(e=this.droneOsc2)==null||e.stop(),(i=this.droneOsc1)==null||i.disconnect(),(r=this.droneOsc2)==null||r.disconnect()}catch{}}}get running(){return this.isRunning}}const B=class B extends EventTarget{constructor(){super(),this.isMuted=!1,this.volumeLevel=.3,this.engine=new me,this.hydrateFromStorage()}hydrateFromStorage(){try{const t=sessionStorage.getItem(B.STORAGE_KEY);if(t){const e=JSON.parse(t);typeof e.muted=="boolean"&&(this.isMuted=e.muted),typeof e.volume=="number"&&(this.volumeLevel=Math.max(0,Math.min(1,e.volume)))}}catch{}}saveToStorage(){try{const t={muted:this.isMuted,volume:this.volumeLevel};sessionStorage.setItem(B.STORAGE_KEY,JSON.stringify(t))}catch{}}get isPlaying(){return this.engine.running}get muted(){return this.isMuted}get volume(){return this.volumeLevel}async togglePlay(){this.engine.running?this.engine.stop():(await this.engine.start(),this.engine.setVolume(this.isMuted?0:this.volumeLevel)),this.notifyState()}toggleMute(){this.isMuted=!this.isMuted,this.engine.setVolume(this.isMuted?0:this.volumeLevel),this.saveToStorage(),this.notifyState()}setAlertState(t){this.engine.setAlertState(t),this.notifyState()}get alertState(){return this.engine.currentAlertState}setVolume(t){this.volumeLevel=Math.max(0,Math.min(1,t)),this.isMuted||this.engine.setVolume(this.volumeLevel),this.saveToStorage(),this.notifyState()}notifyState(){this.dispatchEvent(new CustomEvent("audio-changed",{detail:{isPlaying:this.engine.running,muted:this.isMuted,volume:this.volumeLevel,alertState:this.engine.currentAlertState}}))}};B.STORAGE_KEY="__APP_AUDIO_PREFS__";let pt=B;class ge extends EventTarget{constructor(){super(),this.guards=[],this.attachLinkInterceptor(),window.addEventListener("popstate",t=>this.handlePopState(t))}addGuard(t){this.guards.push(t)}attachLinkInterceptor(){document.addEventListener("click",t=>{const i=(t.composedPath?t.composedPath():[t.target]).find(o=>o instanceof HTMLElement&&o.tagName==="A");if(!i)return;const r=i.getAttribute("href");!r||r.startsWith("http://")||r.startsWith("https://")||r.startsWith("#")||i.target==="_blank"||(t.preventDefault(),this.navigate(r))})}async navigate(t,e=!0){let i=t;for(const o of this.guards){const n=o(i);if(n===!1)return;typeof n=="string"&&(i=n)}this.dispatchEvent(new CustomEvent("route-changing",{detail:{targetUrl:i}}));const r=document;if(typeof r.startViewTransition=="function")try{const o=r.startViewTransition(async()=>{await this.loadView(i)});o&&"finished"in o&&o.finished?await o.finished:o instanceof Promise&&await o}catch{await this.loadView(i)}else await this.loadView(i);e&&window.history.pushState({url:i},"",i),this.dispatchEvent(new CustomEvent("route-changed",{detail:{currentUrl:i}}))}async loadView(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);const i=await e.text(),o=new DOMParser().parseFromString(i,"text/html");document.title=o.title;const n=o.querySelector(".main-content"),a=document.querySelector(".main-content");n&&a&&(a.innerHTML=n.innerHTML)}catch{window.location.href=t}}handlePopState(t){const e=window.location.pathname.split("/").pop()||"index.html";this.navigate(e,!1)}}var be=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,I=(s,t,e,i)=>{for(var r=i>1?void 0:i?fe(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&be(t,e,r),r};let y=class extends f{constructor(){super(...arguments),this.isAudioPlaying=!1,this.isAudioMuted=!1,this.audioVolume=.3,this.currentUser=null,this.onAuthChanged=s=>{this.currentUser=s.detail.user},this.onAudioChanged=s=>{const t=s.detail;this.isAudioPlaying=t.isPlaying,this.isAudioMuted=t.muted,this.audioVolume=t.volume}}connectedCallback(){super.connectedCallback(),this.syncStores()}willUpdate(s){(s.has("authStore")||s.has("audioStore"))&&this.syncStores()}syncStores(){this.authStore&&(this.currentUser=this.authStore.currentUser,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged)),this.audioStore&&(this.isAudioPlaying=this.audioStore.isPlaying,this.isAudioMuted=this.audioStore.muted,this.audioVolume=this.audioStore.volume,this.audioStore.removeEventListener("audio-changed",this.onAudioChanged),this.audioStore.addEventListener("audio-changed",this.onAudioChanged))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.audioStore&&this.audioStore.removeEventListener("audio-changed",this.onAudioChanged)}async toggleAudio(){var s;await((s=this.audioStore)==null?void 0:s.togglePlay())}toggleMute(){var s;(s=this.audioStore)==null||s.toggleMute()}handleVolume(s){var e;const t=parseFloat(s.target.value);(e=this.audioStore)==null||e.setVolume(t)}handleLogout(){var s;(s=this.authStore)==null||s.logout(),this.dispatchEvent(new CustomEvent("request-navigation",{bubbles:!0,composed:!0,detail:{url:"index.html"}}))}render(){return u`
      <div class="header-inner">
        <a href="index.html" class="brand" aria-label="AetherWatch Home">
          <span class="brand-icon">⬡</span>
          <span>AetherWatch</span>
        </a>

        <nav aria-label="Main Navigation">
          <a href="index.html">Gateway</a>
          <a href="showcase.html">Standards Showcase</a>
          ${this.currentUser?u`
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
              class="btn-ctrl ${this.isAudioPlaying?"active":""}"
              @click=${this.toggleAudio}
              aria-label="${this.isAudioPlaying?"Stop ambient audio":"Start ambient audio"}"
              title="${this.isAudioPlaying?"Stop ambient audio":"Start ambient audio"}"
            >
              ${this.isAudioPlaying?"■ Audio On":"▶ Audio Off"}
            </button>

            <button
              class="btn-ctrl ${this.isAudioMuted?"muted":""}"
              @click=${this.toggleMute}
              ?disabled=${!this.isAudioPlaying}
              aria-label="${this.isAudioMuted?"Unmute audio":"Mute audio"}"
              title="${this.isAudioMuted?"Unmute audio":"Mute audio"}"
            >
              ${this.isAudioMuted?"🔇 Muted":"🔊 Sound"}
            </button>

            <label for="soundscape-vol" class="visually-hidden" style="display:none;">Volume</label>
            <input
              id="soundscape-vol"
              type="range"
              min="0"
              max="1"
              step="0.05"
              class="volume-slider"
              .value=${this.audioVolume}
              @input=${this.handleVolume}
              ?disabled=${!this.isAudioPlaying}
              aria-label="Soundscape Volume"
            />
          </div>

          ${this.currentUser?u`
            <div class="user-pill">
              <span>👤 ${this.currentUser}</span>
              <button class="btn-logout" @click=${this.handleLogout}>Sign Out</button>
            </div>
          `:null}
        </div>
      </div>
    `}};y.styles=A`
    :host {
      display: block;
      background: var(--color-bg-surface, #111726);
      border-bottom: 1px solid var(--color-border, #24304d);
      position: sticky;
      top: 0;
      z-index: 50;
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
  `;I([k({context:Z,subscribe:!0}),m({attribute:!1})],y.prototype,"authStore",2);I([k({context:Vt,subscribe:!0}),m({attribute:!1})],y.prototype,"audioStore",2);I([g()],y.prototype,"isAudioPlaying",2);I([g()],y.prototype,"isAudioMuted",2);I([g()],y.prototype,"audioVolume",2);I([g()],y.prototype,"currentUser",2);y=I([E("app-header")],y);var ve=Object.defineProperty,ye=Object.getOwnPropertyDescriptor,C=(s,t,e,i)=>{for(var r=i>1?void 0:i?ye(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&ve(t,e,r),r};let v=class extends f{constructor(){super(),this.username="",this.password="",this.errorMessage="",this.isSubmitting=!1,this.currentUser=null,this.activeTabId=null,this.onAuthChanged=s=>{var e;const t=s.detail;this.currentUser=t.user,this.activeTabId=((e=this.authStore)==null?void 0:e.currentTabId)??null},this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.syncAuth()}willUpdate(s){s.has("authStore")&&this.syncAuth()}syncAuth(){this.authStore&&(this.currentUser=this.authStore.currentUser,this.activeTabId=this.authStore.currentTabId,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged)}handleUsernameChange(s){this.username=s.target.value,this.errorMessage="",this.updateFormValidity()}handlePasswordChange(s){this.password=s.target.value,this.errorMessage="",this.updateFormValidity()}updateFormValidity(){this.internals.setFormValue(`${this.username}`),this.username?this.internals.setValidity({}):this.internals.setValidity({valueMissing:!0},"Username is required")}handleSubmit(s){if(s.preventDefault(),!this.authStore)return;this.isSubmitting=!0;const t=this.authStore.login(this.username,this.password);this.isSubmitting=!1,t.success?this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0,detail:{username:this.username}})):this.errorMessage=t.error||"Authentication failed."}handleTerminateSession(){var s;(s=this.authStore)==null||s.logout()}render(){return this.currentUser?u`
        <div class="card" role="region" aria-label="Active Session Established">
          <div class="session-badge">
            <span>●</span> Active Session Established
          </div>

          <h2 class="title">Welcome, ${this.currentUser}</h2>
          <p class="subtitle">An authenticated operator session is currently active.</p>

          <div class="session-info">
            <div class="session-row">
              <span class="label">Operator:</span>
              <span class="value">${this.currentUser}</span>
            </div>
            <div class="session-row">
              <span class="label">Tab Instance:</span>
              <span class="value">${this.activeTabId?this.activeTabId.slice(0,14)+"…":"current-tab"}</span>
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
      `:u`
      <div class="card" role="region" aria-label="Sign In Portal">
        <h2 class="title">Gateway Access</h2>
        <p class="subtitle">Authenticate to view live node telemetry</p>

        ${this.errorMessage?u`
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
    `}};v.formAssociated=!0;v.styles=A`
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
  `;C([k({context:Z,subscribe:!0}),m({attribute:!1})],v.prototype,"authStore",2);C([g()],v.prototype,"username",2);C([g()],v.prototype,"password",2);C([g()],v.prototype,"errorMessage",2);C([g()],v.prototype,"isSubmitting",2);C([g()],v.prototype,"currentUser",2);C([g()],v.prototype,"activeTabId",2);v=C([E("login-panel")],v);var xe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,qt=(s,t,e,i)=>{for(var r=i>1?void 0:i?$e(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&xe(t,e,r),r};let it=class extends f{constructor(){super(...arguments),this.node=null}render(){if(!this.node)return u``;const s=`popover-${this.node.id}`;return u`
      <button class="trigger-btn" popovertarget=${s}>
        Inspect Specs
      </button>

      <div id=${s} popover="auto">
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
    `}};it.styles=A`
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
  `;qt([m({type:Object})],it.prototype,"node",2);it=qt([E("node-popover")],it);var we=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,xt=(s,t,e,i)=>{for(var r=i>1?void 0:i?Se(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&we(t,e,r),r};let Y=class extends f{constructor(){super(...arguments),this.incident=null}openModal(){this.dialogEl.showModal()}closeModal(){this.dialogEl.close()}handleResolve(){this.dispatchEvent(new CustomEvent("incident-resolved",{bubbles:!0,composed:!0})),this.closeModal()}render(){var s,t,e;return u`
      <dialog aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <div class="modal-header">
          <span class="badge">${((s=this.incident)==null?void 0:s.severity)||"Alert"}</span>
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
    `}};Y.styles=A`
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
  `;xt([m({type:Object})],Y.prototype,"incident",2);xt([Ht("dialog")],Y.prototype,"dialogEl",2);Y=xt([E("incident-modal")],Y);var _e=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Q=(s,t,e,i)=>{for(var r=i>1?void 0:i?Ae(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&_e(t,e,r),r};let T=class extends f{constructor(){super(...arguments),this.title="",this.description="",this.actionLabel="",this.actionHref=""}render(){return u`
      <div class="card" role="region" aria-label=${this.title||"Notification Card"}>
        <div class="icon-badge">🔒</div>
        ${this.title?u`<h2 class="title">${this.title}</h2>`:null}
        ${this.description?u`<p class="description">${this.description}</p>`:null}
        
        <div class="actions">
          <slot name="action">
            ${this.actionHref&&this.actionLabel?u`
              <a href=${this.actionHref} class="btn-action">
                ${this.actionLabel}
              </a>
            `:null}
          </slot>
        </div>
      </div>
    `}};T.styles=A`
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
  `;Q([m({type:String})],T.prototype,"title",2);Q([m({type:String})],T.prototype,"description",2);Q([m({type:String})],T.prototype,"actionLabel",2);Q([m({type:String})],T.prototype,"actionHref",2);T=Q([E("ui-card")],T);var Ee=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,R=(s,t,e,i)=>{for(var r=i>1?void 0:i?Ce(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Ee(t,e,r),r};let x=class extends f{constructor(){super(...arguments),this.nodes=[],this.activeIncident=null,this.isAuthenticated=!1,this.onTick=s=>{this.nodes=s.detail.nodes},this.onIncident=s=>{this.activeIncident=s.detail},this.onIncidentResolved=()=>{this.activeIncident=null},this.handleModalResolve=()=>{var s;this.activeIncident=null,(s=this.telemetryStore)==null||s.resolveIncident()},this.onAuthChanged=s=>{var e;const t=(e=s.detail)==null?void 0:e.user;this.isAuthenticated=!!t}}connectedCallback(){super.connectedCallback(),this.syncStores()}willUpdate(s){(s.has("telemetryStore")||s.has("authStore"))&&this.syncStores()}syncStores(){this.authStore&&(this.isAuthenticated=this.authStore.isAuthenticated,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged)),this.telemetryStore&&(this.nodes=this.telemetryStore.getNodes(),this.activeIncident=this.telemetryStore.getIncident(),this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.removeEventListener("incident-raised",this.onIncident),this.telemetryStore.removeEventListener("incident-resolved",this.onIncidentResolved),this.telemetryStore.addEventListener("telemetry-tick",this.onTick),this.telemetryStore.addEventListener("incident-raised",this.onIncident),this.telemetryStore.addEventListener("incident-resolved",this.onIncidentResolved))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.telemetryStore&&(this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.removeEventListener("incident-raised",this.onIncident),this.telemetryStore.removeEventListener("incident-resolved",this.onIncidentResolved))}handleOpenModal(){this.modalEl.openModal()}handleSimulateIncident(){var s;(s=this.telemetryStore)==null||s.triggerMockIncident("node-gamma")}render(){return this.isAuthenticated?u`
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

      ${this.activeIncident?u`
        <div class="incident-alert-banner" role="alert">
          <div>
            <strong>Incident Detected:</strong> ${this.activeIncident.message}
          </div>
          <button class="btn-alert" @click=${this.handleOpenModal}>
            Open Incident Dialog
          </button>
        </div>
      `:null}

      <div class="grid">
        ${this.nodes.map(s=>u`
          <div class="card ${s.isCordoned?"status-cordoned":`status-${s.status}`}">
            <div class="node-header">
              <div>
                <div class="node-name">
                  ${s.name}
                  ${s.isCordoned?u`<span style="font-size: 0.7rem; color: var(--color-warning); font-weight: normal; margin-left: 0.35rem;">(Cordoned)</span>`:null}
                </div>
                <div class="node-region">${s.region}</div>
              </div>
            </div>

            <div class="metrics">
              <div class="metric-row">
                <span>CPU Load</span>
                <span>${s.cpuLoad}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${s.cpuLoad>85?"critical":s.cpuLoad>70?"warning":""}"
                  style="width: ${s.cpuLoad}%"
                ></div>
              </div>

              <div class="metric-row" style="margin-top: 0.25rem;">
                <span>Memory</span>
                <span>${s.memoryUsage}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${s.memoryUsage>85?"critical":s.memoryUsage>70?"warning":""}"
                  style="width: ${s.memoryUsage}%"
                ></div>
              </div>
            </div>

            <div class="card-footer">
              <span style="font-size: 0.75rem; color: var(--color-text-faint);">
                Ping: ${s.latencyMs}ms
              </span>
              <!-- Native Popover element -->
              <node-popover .node=${s}></node-popover>
            </div>
          </div>
        `)}
      </div>

      <!-- Native <dialog> Modal -->
      <incident-modal
        .incident=${this.activeIncident}
        @incident-resolved=${this.handleModalResolve}
      ></incident-modal>
    `:u`
        <ui-card
          title="Access Restricted"
          description="You must authenticate at the gateway before accessing real-time telemetry clusters."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `}};x.styles=A`
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
  `;R([k({context:Z,subscribe:!0}),m({attribute:!1})],x.prototype,"authStore",2);R([k({context:yt,subscribe:!0}),m({attribute:!1})],x.prototype,"telemetryStore",2);R([g()],x.prototype,"nodes",2);R([g()],x.prototype,"activeIncident",2);R([g()],x.prototype,"isAuthenticated",2);R([Ht("incident-modal")],x.prototype,"modalEl",2);x=R([E("telemetry-grid")],x);var Me=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,X=(s,t,e,i)=>{for(var r=i>1?void 0:i?Pe(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Me(t,e,r),r};let U=class extends f{constructor(){super(...arguments),this.nodes=[],this.isAuthenticated=!1,this.onTick=s=>{this.nodes=s.detail.nodes},this.onAuthChanged=s=>{var e;const t=(e=s.detail)==null?void 0:e.user;this.isAuthenticated=!!t}}connectedCallback(){super.connectedCallback(),this.syncStores()}willUpdate(s){(s.has("telemetryStore")||s.has("authStore"))&&this.syncStores()}syncStores(){this.authStore&&(this.isAuthenticated=this.authStore.isAuthenticated,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged)),this.telemetryStore&&(this.nodes=this.telemetryStore.getNodes(),this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.addEventListener("telemetry-tick",this.onTick))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.telemetryStore&&this.telemetryStore.removeEventListener("telemetry-tick",this.onTick)}handleToggleCordon(s){var t;(t=this.telemetryStore)==null||t.toggleCordon(s)}render(){return this.isAuthenticated?u`
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
            ${this.nodes.map(s=>u`
              <tr class=${s.isCordoned?"row-cordoned":""}>
                <td>
                  <strong>${s.name}</strong>
                  ${s.isCordoned?u`<span style="margin-left: 0.4rem; font-size: 0.75rem; color: var(--color-warning);">[Cordoned]</span>`:null}
                </td>
                <td><code>${s.region}</code></td>
                <td>
                  <span class="badge-status ${s.isCordoned?"status-cordoned":`status-${s.status}`}">
                    ${s.isCordoned?"DRAINING":s.status}
                  </span>
                </td>
                <td>${s.cpuLoad}%</td>
                <td>${s.memoryUsage}%</td>
                <td>${s.isCordoned?"—":`${s.latencyMs} ms`}</td>
                <td>
                  <button
                    type="button"
                    class="btn-cordon ${s.isCordoned?"active":""}"
                    @click=${()=>this.handleToggleCordon(s.id)}
                    aria-label="${s.isCordoned?`Uncordon node ${s.name}`:`Cordon node ${s.name}`}"
                    title="${s.isCordoned?"Resume live cluster traffic":"Drain and isolate node from cluster traffic"}"
                  >
                    ${s.isCordoned?"✓ Uncordon":"⛔ Cordon"}
                  </button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `:u`
        <ui-card
          title="Access Restricted"
          description="Node cluster topology is restricted to authenticated operators."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `}};U.styles=A`
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
  `;X([k({context:Z,subscribe:!0}),m({attribute:!1})],U.prototype,"authStore",2);X([k({context:yt,subscribe:!0}),m({attribute:!1})],U.prototype,"telemetryStore",2);X([g()],U.prototype,"nodes",2);X([g()],U.prototype,"isAuthenticated",2);U=X([E("nodes-view")],U);var Le=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,nt=(s,t,e,i)=>{for(var r=i>1?void 0:i?Oe(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Le(t,e,r),r};typeof window<"u"&&(window.addEventListener("error",s=>{var t,e;if((t=s.message)!=null&&t.includes("Cannot read properties of undefined (reading 'startTime')")||s.error instanceof TypeError&&((e=s.error.message)!=null&&e.includes("'startTime'")))return s.preventDefault(),s.stopImmediatePropagation(),!0},!0),window.addEventListener("unhandledrejection",s=>{var t,e,i;((e=(t=s.reason)==null?void 0:t.message)!=null&&e.includes("Cannot read properties of undefined (reading 'startTime')")||s.reason instanceof TypeError&&((i=s.reason.message)!=null&&i.includes("'startTime'")))&&(s.preventDefault(),s.stopImmediatePropagation())},!0));let j=class extends f{constructor(){super(),window.__AETHER_SHELL__?(this.authStore=window.__AETHER_SHELL__.authStore,this.telemetryStore=window.__AETHER_SHELL__.telemetryStore,this.audioStore=window.__AETHER_SHELL__.audioStore,this.router=window.__AETHER_SHELL__.router):(this.authStore=new ht,this.telemetryStore=new ut,this.audioStore=new pt,this.router=new ge,this.router.addGuard(s=>{const t=s.split("?")[0].split("#")[0].split("/").pop()||"index.html";return(t==="dashboard.html"||t==="dashboard-nodes.html")&&!this.authStore.isAuthenticated?"index.html":!0}),window.__AETHER_SHELL__=this,window.__SHELL_BOOTED__=!0,this.telemetryStore.addEventListener("telemetry-tick",s=>{const t=s.detail.nodes;this.evaluateClusterAlarm(t)})),this.evaluateClusterAlarm(this.telemetryStore.getNodes())}evaluateClusterAlarm(s){const t=(s||[]).filter(e=>!e.isCordoned);t.some(e=>e.status==="critical")?this.audioStore.setAlertState("critical"):t.some(e=>e.status==="warning")?this.audioStore.setAlertState("warning"):this.audioStore.setAlertState("healthy")}connectedCallback(){super.connectedCallback(),this.evaluateClusterAlarm(this.telemetryStore.getNodes()),this.addEventListener("request-navigation",s=>{const t=s.detail.url;this.router.navigate(t)}),this.addEventListener("login-success",()=>{this.router.navigate("dashboard.html")}),this.authStore.addEventListener("auth-changed",()=>{this.verifyRouteProtection()}),this.verifyRouteProtection()}verifyRouteProtection(){const s=window.location.pathname.split("/").pop()||"index.html";(s==="dashboard.html"||s==="dashboard-nodes.html")&&!this.authStore.isAuthenticated&&this.router.navigate("index.html")}render(){return u`
      <div class="app-layout">
        <app-header></app-header>
        <slot></slot>
      </div>
    `}};j.styles=A`
    :host {
      display: contents;
    }
  `;nt([vt({context:Z}),m({attribute:!1})],j.prototype,"authStore",2);nt([vt({context:yt}),m({attribute:!1})],j.prototype,"telemetryStore",2);nt([vt({context:Vt}),m({attribute:!1})],j.prototype,"audioStore",2);j=nt([E("app-shell")],j);
