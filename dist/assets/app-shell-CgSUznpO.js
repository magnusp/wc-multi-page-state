(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,ut=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),yt=new WeakMap;let kt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ut&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&yt.set(e,t))}return t}toString(){return this.cssText}};const Vt=i=>new kt(typeof i=="string"?i:i+"",void 0,pt),_=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new kt(e,i,pt)},qt=(i,t)=>{if(ut)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=X.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},xt=ut?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Vt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gt,defineProperty:Wt,getOwnPropertyDescriptor:Bt,getOwnPropertyNames:Ft,getOwnPropertySymbols:Kt,getPrototypeOf:Yt}=Object,w=globalThis,$t=w.trustedTypes,Jt=$t?$t.emptyScript:"",nt=w.reactiveElementPolyfillSupport,V=(i,t)=>i,tt={toAttribute(i,t){switch(t){case Boolean:i=i?Jt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},mt=(i,t)=>!Gt(i,t),wt={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:mt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);let U=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Wt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=Bt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const t=Yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const e=this.properties,r=[...Ft(e),...Kt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(xt(s))}else t!==void 0&&e.push(xt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:tt).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o,n;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=r.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:tt;this._$Em=s;const d=l.fromAttribute(e,a.type);this[s]=d??((n=this._$Ej)==null?void 0:n.get(s))??d,this._$Em=null}}requestUpdate(t,e,r,s=!1,o){var n;if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??mt)(o,e)||r.useDefault&&r.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:o},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[V("elementProperties")]=new Map,U[V("finalized")]=new Map,nt==null||nt({ReactiveElement:U}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,St=i=>i,et=q.trustedTypes,_t=et?et.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ut="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+$,Zt=`<${It}>`,T=document,W=()=>T.createComment(""),B=i=>i===null||typeof i!="object"&&typeof i!="function",gt=Array.isArray,Qt=i=>gt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",at=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,Et=/>/g,C=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,Pt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,Xt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),h=Xt(1),R=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Mt=new WeakMap,P=T.createTreeWalker(T,129);function zt(i,t){if(!gt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return _t!==void 0?_t.createHTML(t):t}const te=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=j;for(let a=0;a<e;a++){const l=i[a];let d,m,c=-1,v=0;for(;v<l.length&&(n.lastIndex=v,m=n.exec(l),m!==null);)v=n.lastIndex,n===j?m[1]==="!--"?n=At:m[1]!==void 0?n=Et:m[2]!==void 0?(Rt.test(m[2])&&(s=RegExp("</"+m[2],"g")),n=C):m[3]!==void 0&&(n=C):n===C?m[0]===">"?(n=s??j,c=-1):m[1]===void 0?c=-2:(c=n.lastIndex-m[2].length,d=m[1],n=m[3]===void 0?C:m[3]==='"'?Pt:Ct):n===Pt||n===Ct?n=C:n===At||n===Et?n=j:(n=C,s=void 0);const x=n===C&&i[a+1].startsWith("/>")?" ":"";o+=n===j?l+Zt:c>=0?(r.push(d),l.slice(0,c)+Ut+l.slice(c)+$+x):l+$+(c===-2?a:x)}return[zt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class F{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,m]=te(t,e);if(this.el=F.createElement(d,r),P.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=P.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Ut)){const v=m[n++],x=s.getAttribute(c).split($),Q=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:Q[2],strings:x,ctor:Q[1]==="."?re:Q[1]==="?"?se:Q[1]==="@"?ie:st}),s.removeAttribute(c)}else c.startsWith($)&&(l.push({type:6,index:o}),s.removeAttribute(c));if(Rt.test(s.tagName)){const c=s.textContent.split($),v=c.length-1;if(v>0){s.textContent=et?et.emptyScript:"";for(let x=0;x<v;x++)s.append(c[x],W()),P.nextNode(),l.push({type:2,index:++o});s.append(c[v],W())}}}else if(s.nodeType===8)if(s.data===It)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf($,c+1))!==-1;)l.push({type:7,index:o}),c+=$.length-1}o++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function z(i,t,e=i,r){var n,a;if(t===R)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=B(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=z(i,s._$AS(i,t.values),s,r)),t}class ee{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??T).importNode(e,!0);P.currentNode=s;let o=P.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Y(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new oe(o,this,t)),this._$AV.push(d),l=r[++a]}n!==(l==null?void 0:l.index)&&(o=P.nextNode(),n++)}return P.currentNode=T,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Y{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),B(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=F.createElement(zt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new ee(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new F(t)),e}k(t){gt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new Y(this.O(W()),this.O(W()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t!==this._$AB;){const s=St(t).nextSibling;St(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=z(this,t,e,0),n=!B(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=z(this,a[r+l],e,l),d===R&&(d=this._$AH[l]),n||(n=!B(d)||d!==this._$AH[l]),d===u?t=u:t!==u&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class re extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class se extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class ie extends st{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=z(this,t,e,0)??u)===R)return;const r=this._$AH,s=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==u&&(r===u||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class oe{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const lt=q.litHtmlPolyfillSupport;lt==null||lt(F,Y),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.3.3");const ne=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new Y(t.insertBefore(W(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis;let b=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ne(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return R}};var Lt;b._$litElement$=!0,b.finalized=!0,(Lt=M.litElementHydrateSupport)==null||Lt.call(M,{LitElement:b});const dt=M.litElementPolyfillSupport;dt==null||dt({LitElement:b});(M.litElementVersions??(M.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:mt},le=(i=ae,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),r==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,i,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(r==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,i,!0,a)}}throw Error("Unsupported decorator location: "+r)};function p(i){return(t,e)=>typeof e=="object"?le(i,t,e):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(i){return p({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(i,t){return(e,r,s)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(i))??null};return de(e,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ht=class extends Event{constructor(t,e,r,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=r,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tt=class{constructor(t,e,r,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){const o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ht(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ce{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:r}]of this.subscriptions)e(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let he=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}};class Ot extends ce{constructor(t,e,r){var s,o;super(e.context!==void 0?e.initialValue:r),this.onContextRequest=n=>{if(n.context!==this.context)return;const a=n.contextTarget??n.composedPath()[0];a!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,a,n.subscribe))},this.onProviderRequest=n=>{if(n.context!==this.context||(n.contextTarget??n.composedPath()[0])===this.host)return;const a=new Set;for(const[l,{consumerHost:d}]of this.subscriptions)a.has(l)||(a.add(l),d.dispatchEvent(new Ht(this.context,d,l,!0)));n.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(o=(s=this.host).addController)==null||o.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new he(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt({context:i}){return(t,e)=>{const r=new WeakMap;if(typeof e=="object")return{get(){return t.get.call(this)},set(s){return r.get(this).setValue(s),t.set.call(this,s)},init(s){return r.set(this,new Ot(this,{context:i,initialValue:s})),s}};{t.constructor.addInitializer((n=>{r.set(n,new Ot(n,{context:i}))}));const s=Object.getOwnPropertyDescriptor(t,e);let o;if(s===void 0){const n=new WeakMap;o={get(){return n.get(this)},set(a){r.get(this).setValue(a),n.set(this,a)},configurable:!0,enumerable:!0}}else{const n=s.set;o={...s,set(a){r.get(this).setValue(a),n==null||n.call(this,a)}}}return void Object.defineProperty(t,e,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L({context:i,subscribe:t}){return(e,r)=>{typeof r=="object"?r.addInitializer((function(){new Tt(this,{context:i,callback:s=>{e.set.call(this,s)},subscribe:t})})):e.constructor.addInitializer((s=>{new Tt(s,{context:i,callback:o=>{s[r]=o},subscribe:t})}))}}const J=Symbol("auth-context"),ft=Symbol("telemetry-context"),Nt=Symbol("audio-context"),I=class I extends EventTarget{constructor(){super(),this.session=null,this.currentTabId=`tab_${Math.random().toString(36).slice(2,9)}_${Date.now()}`,this.hydrateFromStorage()}hydrateFromStorage(){try{const t=sessionStorage.getItem(I.STORAGE_KEY);if(t){const e=JSON.parse(t);e&&typeof e.username=="string"&&(this.session={username:e.username,authenticatedAt:e.authenticatedAt||Date.now(),tabId:this.currentTabId})}}catch{this.session=null}}get isAuthenticated(){return this.session!==null}get currentUser(){var t;return((t=this.session)==null?void 0:t.username)??null}get activeSession(){return this.session?{...this.session}:null}login(t,e){const r=t.trim();if(!r)return{success:!1,error:"Username is required."};if(e!=="joshua")return{success:!1,error:'Invalid password. (Hint: password is "joshua")'};this.session={username:r,authenticatedAt:Date.now(),tabId:this.currentTabId};try{sessionStorage.setItem(I.STORAGE_KEY,JSON.stringify(this.session))}catch{}return this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!0,user:r}})),{success:!0}}logout(){this.session=null;try{sessionStorage.removeItem(I.STORAGE_KEY)}catch{}this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!1,user:null}}))}};I.STORAGE_KEY="__APP_AUTH_SESSION__";let ct=I;class ue extends EventTarget{constructor(){super(),this.nodes=[],this.activeIncident=null,this.timer=null,this.initDefaultNodes(),this.startSimulation()}initDefaultNodes(){this.nodes=[{id:"node-alpha",name:"US-East Core Alpha",region:"us-east-1",status:"healthy",cpuLoad:24,memoryUsage:45,latencyMs:14,lastUpdated:Date.now(),isCordoned:!1},{id:"node-beta",name:"EU-Central Edge Beta",region:"eu-west-1",status:"healthy",cpuLoad:38,memoryUsage:62,latencyMs:32,lastUpdated:Date.now(),isCordoned:!1},{id:"node-gamma",name:"AP-Tokyo Gateway Gamma",region:"ap-northeast-1",status:"warning",cpuLoad:78,memoryUsage:88,latencyMs:142,lastUpdated:Date.now(),isCordoned:!1},{id:"node-delta",name:"US-West Replica Delta",region:"us-west-2",status:"healthy",cpuLoad:19,memoryUsage:33,latencyMs:22,lastUpdated:Date.now(),isCordoned:!1}]}getNodes(){return[...this.nodes]}getNodeById(t){return this.nodes.find(e=>e.id===t)}getIncident(){return this.activeIncident}triggerMockIncident(t="node-gamma"){this.activeIncident={id:`inc-${Date.now().toString(36)}`,severity:"high",message:`Memory threshold exceeded on [${t}] (>85% sustained for 300s). Potential threadpool exhaustion.`,timestamp:Date.now(),nodeId:t},this.dispatchEvent(new CustomEvent("incident-raised",{detail:this.activeIncident}))}resolveIncident(){this.activeIncident=null,this.dispatchEvent(new CustomEvent("incident-resolved"))}toggleCordon(t){this.nodes=this.nodes.map(e=>{if(e.id!==t)return e;const r=!e.isCordoned;return{...e,isCordoned:r,cpuLoad:r?Math.min(e.cpuLoad,12):e.cpuLoad,memoryUsage:r?Math.min(e.memoryUsage,25):e.memoryUsage,status:r?"healthy":e.status,lastUpdated:Date.now()}}),this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}}))}startSimulation(){typeof window>"u"||(this.timer=window.setInterval(()=>{this.nodes=this.nodes.map(t=>{if(t.isCordoned){const a=Math.max(4,Math.min(15,Math.round(t.cpuLoad+(Math.random()-.5)*1.5))),l=Math.max(15,Math.min(28,Math.round(t.memoryUsage+(Math.random()-.5)*1)));return{...t,cpuLoad:a,memoryUsage:l,status:"healthy",latencyMs:0,lastUpdated:Date.now()}}const e=(Math.random()-.48)*4,r=(Math.random()-.48)*2,s=Math.max(5,Math.min(99,Math.round(t.cpuLoad+e))),o=Math.max(10,Math.min(99,Math.round(t.memoryUsage+r))),n=s>85||o>90?"critical":s>70?"warning":"healthy";return{...t,cpuLoad:s,memoryUsage:o,status:n,latencyMs:Math.max(5,Math.round(t.latencyMs+(Math.random()-.5)*6)),lastUpdated:Date.now()}}),this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}}))},2500))}destroy(){this.timer!==null&&(clearInterval(this.timer),this.timer=null)}}class pe{constructor(){this.ctx=null,this.masterGain=null,this.droneOsc1=null,this.droneOsc2=null,this.alertInterval=null,this.alertState="healthy",this.isRunning=!1}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.init(),!this.ctx||!this.masterGain||(this.ctx.state==="suspended"&&await this.ctx.resume(),this.isRunning))return;this.isRunning=!0,this.droneOsc1=this.ctx.createOscillator(),this.droneOsc1.type="sine",this.droneOsc1.frequency.setValueAtTime(55,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(140,this.ctx.currentTime),this.droneOsc2=this.ctx.createOscillator(),this.droneOsc2.type="triangle",this.droneOsc2.frequency.setValueAtTime(55.4,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.12,this.ctx.currentTime),this.droneOsc1.connect(t),this.droneOsc2.connect(t),t.connect(e),e.connect(this.masterGain),this.droneOsc1.start(),this.droneOsc2.start(),this.restartAlertLoop()}setAlertState(t){this.alertState!==t&&(this.alertState=t,this.isRunning&&this.restartAlertLoop())}get currentAlertState(){return this.alertState}restartAlertLoop(){if(this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null),this.alertState==="healthy"||!this.isRunning)return;const t=this.alertState,e=t==="critical"?500:2e3;this.playAlertBeep(t),this.alertInterval=window.setInterval(()=>{this.playAlertBeep(t)},e)}playAlertBeep(t){if(!this.ctx||!this.masterGain||!this.isRunning)return;const e=this.ctx.createOscillator(),r=this.ctx.createGain(),s=t==="critical"?1174.66:784,o=t==="critical"?.12:.18,n=t==="critical"?.09:.06;e.type=t==="critical"?"square":"sine",e.frequency.setValueAtTime(s,this.ctx.currentTime),r.gain.setValueAtTime(n,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+o),e.connect(r),r.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+o)}setVolume(t){if(!this.masterGain||!this.ctx)return;const e=Math.max(0,Math.min(1,t));this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}stop(){var t,e,r,s;if(this.isRunning){this.isRunning=!1,this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null);try{(t=this.droneOsc1)==null||t.stop(),(e=this.droneOsc2)==null||e.stop(),(r=this.droneOsc1)==null||r.disconnect(),(s=this.droneOsc2)==null||s.disconnect()}catch{}}}get running(){return this.isRunning}}const G=class G extends EventTarget{constructor(){super(),this.isMuted=!1,this.volumeLevel=.3,this.engine=new pe,this.hydrateFromStorage()}hydrateFromStorage(){try{const t=sessionStorage.getItem(G.STORAGE_KEY);if(t){const e=JSON.parse(t);typeof e.muted=="boolean"&&(this.isMuted=e.muted),typeof e.volume=="number"&&(this.volumeLevel=Math.max(0,Math.min(1,e.volume)))}}catch{}}saveToStorage(){try{const t={muted:this.isMuted,volume:this.volumeLevel};sessionStorage.setItem(G.STORAGE_KEY,JSON.stringify(t))}catch{}}get isPlaying(){return this.engine.running}get muted(){return this.isMuted}get volume(){return this.volumeLevel}async togglePlay(){this.engine.running?this.engine.stop():(await this.engine.start(),this.engine.setVolume(this.isMuted?0:this.volumeLevel)),this.notifyState()}toggleMute(){this.isMuted=!this.isMuted,this.engine.setVolume(this.isMuted?0:this.volumeLevel),this.saveToStorage(),this.notifyState()}setAlertState(t){this.engine.setAlertState(t),this.notifyState()}get alertState(){return this.engine.currentAlertState}setVolume(t){this.volumeLevel=Math.max(0,Math.min(1,t)),this.isMuted||this.engine.setVolume(this.volumeLevel),this.saveToStorage(),this.notifyState()}notifyState(){this.dispatchEvent(new CustomEvent("audio-changed",{detail:{isPlaying:this.engine.running,muted:this.isMuted,volume:this.volumeLevel,alertState:this.engine.currentAlertState}}))}};G.STORAGE_KEY="__APP_AUDIO_PREFS__";let ht=G;class me extends EventTarget{constructor(){super(),this.guards=[],this.attachLinkInterceptor(),window.addEventListener("popstate",t=>this.handlePopState(t))}addGuard(t){this.guards.push(t)}attachLinkInterceptor(){document.addEventListener("click",t=>{const r=(t.composedPath?t.composedPath():[t.target]).find(o=>o instanceof HTMLElement&&o.tagName==="A");if(!r)return;const s=r.getAttribute("href");!s||s.startsWith("http://")||s.startsWith("https://")||s.startsWith("#")||r.target==="_blank"||(t.preventDefault(),this.navigate(s))})}async navigate(t,e=!0){let r=t;for(const o of this.guards){const n=o(r);if(n===!1)return;typeof n=="string"&&(r=n)}this.dispatchEvent(new CustomEvent("route-changing",{detail:{targetUrl:r}}));const s=document;if(typeof s.startViewTransition=="function")try{const o=s.startViewTransition(async()=>{await this.loadView(r)});o&&"finished"in o&&o.finished?await o.finished:o instanceof Promise&&await o}catch{await this.loadView(r)}else await this.loadView(r);e&&window.history.pushState({url:r},"",r),this.dispatchEvent(new CustomEvent("route-changed",{detail:{currentUrl:r}}))}async loadView(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);const r=await e.text(),o=new DOMParser().parseFromString(r,"text/html");document.title=o.title;const n=o.querySelector(".main-content"),a=document.querySelector(".main-content");n&&a&&(a.innerHTML=n.innerHTML)}catch{window.location.href=t}}handlePopState(t){const e=window.location.pathname.split("/").pop()||"index.html";this.navigate(e,!1)}}var ge=Object.defineProperty,be=Object.getOwnPropertyDescriptor,k=(i,t,e,r)=>{for(var s=r>1?void 0:r?be(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ge(t,e,s),s};let y=class extends b{constructor(){super(...arguments),this.isAudioPlaying=!1,this.isAudioMuted=!1,this.audioVolume=.3,this.currentUser=null,this.onAuthChanged=i=>{this.currentUser=i.detail.user},this.onAudioChanged=i=>{const t=i.detail;this.isAudioPlaying=t.isPlaying,this.isAudioMuted=t.muted,this.audioVolume=t.volume}}connectedCallback(){super.connectedCallback(),this.syncStores()}willUpdate(i){(i.has("authStore")||i.has("audioStore"))&&this.syncStores()}syncStores(){this.authStore&&(this.currentUser=this.authStore.currentUser,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged)),this.audioStore&&(this.isAudioPlaying=this.audioStore.isPlaying,this.isAudioMuted=this.audioStore.muted,this.audioVolume=this.audioStore.volume,this.audioStore.removeEventListener("audio-changed",this.onAudioChanged),this.audioStore.addEventListener("audio-changed",this.onAudioChanged))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.audioStore&&this.audioStore.removeEventListener("audio-changed",this.onAudioChanged)}async toggleAudio(){var i;await((i=this.audioStore)==null?void 0:i.togglePlay())}toggleMute(){var i;(i=this.audioStore)==null||i.toggleMute()}handleVolume(i){var e;const t=parseFloat(i.target.value);(e=this.audioStore)==null||e.setVolume(t)}handleLogout(){var i;(i=this.authStore)==null||i.logout(),this.dispatchEvent(new CustomEvent("request-navigation",{bubbles:!0,composed:!0,detail:{url:"index.html"}}))}render(){return h`
      <div class="header-inner">
        <a href="index.html" class="brand" aria-label="AetherWatch Home">
          <span class="brand-icon">⬡</span>
          <span>AetherWatch</span>
        </a>

        <nav aria-label="Main Navigation">
          <a href="index.html">Gateway</a>
          <a href="showcase.html">Standards Showcase</a>
          ${this.currentUser?h`
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

          ${this.currentUser?h`
            <div class="user-pill">
              <span>👤 ${this.currentUser}</span>
              <button class="btn-logout" @click=${this.handleLogout}>Sign Out</button>
            </div>
          `:null}
        </div>
      </div>
    `}};y.styles=_`
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
  `;k([L({context:J,subscribe:!0}),p({attribute:!1})],y.prototype,"authStore",2);k([L({context:Nt,subscribe:!0}),p({attribute:!1})],y.prototype,"audioStore",2);k([g()],y.prototype,"isAudioPlaying",2);k([g()],y.prototype,"isAudioMuted",2);k([g()],y.prototype,"audioVolume",2);k([g()],y.prototype,"currentUser",2);y=k([A("app-header")],y);var fe=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,E=(i,t,e,r)=>{for(var s=r>1?void 0:r?ve(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&fe(t,e,s),s};let f=class extends b{constructor(){super(),this.username="",this.password="",this.errorMessage="",this.isSubmitting=!1,this.currentUser=null,this.activeTabId=null,this.onAuthChanged=i=>{var e;const t=i.detail;this.currentUser=t.user,this.activeTabId=((e=this.authStore)==null?void 0:e.currentTabId)??null},this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.syncAuth()}willUpdate(i){i.has("authStore")&&this.syncAuth()}syncAuth(){this.authStore&&(this.currentUser=this.authStore.currentUser,this.activeTabId=this.authStore.currentTabId,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged)}handleUsernameChange(i){this.username=i.target.value,this.errorMessage="",this.updateFormValidity()}handlePasswordChange(i){this.password=i.target.value,this.errorMessage="",this.updateFormValidity()}updateFormValidity(){this.internals.setFormValue(`${this.username}`),this.username?this.internals.setValidity({}):this.internals.setValidity({valueMissing:!0},"Username is required")}handleSubmit(i){if(i.preventDefault(),!this.authStore)return;this.isSubmitting=!0;const t=this.authStore.login(this.username,this.password);this.isSubmitting=!1,t.success?this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0,detail:{username:this.username}})):this.errorMessage=t.error||"Authentication failed."}handleTerminateSession(){var i;(i=this.authStore)==null||i.logout()}render(){return this.currentUser?h`
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
    `}};f.formAssociated=!0;f.styles=_`
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
  `;E([L({context:J,subscribe:!0}),p({attribute:!1})],f.prototype,"authStore",2);E([g()],f.prototype,"username",2);E([g()],f.prototype,"password",2);E([g()],f.prototype,"errorMessage",2);E([g()],f.prototype,"isSubmitting",2);E([g()],f.prototype,"currentUser",2);E([g()],f.prototype,"activeTabId",2);f=E([A("login-panel")],f);var ye=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,jt=(i,t,e,r)=>{for(var s=r>1?void 0:r?xe(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ye(t,e,s),s};let rt=class extends b{constructor(){super(...arguments),this.node=null}render(){if(!this.node)return h``;const i=`popover-${this.node.id}`;return h`
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
    `}};rt.styles=_`
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
  `;jt([p({type:Object})],rt.prototype,"node",2);rt=jt([A("node-popover")],rt);var $e=Object.defineProperty,we=Object.getOwnPropertyDescriptor,vt=(i,t,e,r)=>{for(var s=r>1?void 0:r?we(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&$e(t,e,s),s};let K=class extends b{constructor(){super(...arguments),this.incident=null}openModal(){this.dialogEl.showModal()}closeModal(){this.dialogEl.close()}handleResolve(){this.dispatchEvent(new CustomEvent("incident-resolved",{bubbles:!0,composed:!0})),this.closeModal()}render(){var i,t,e;return h`
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
    `}};K.styles=_`
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
  `;vt([p({type:Object})],K.prototype,"incident",2);vt([Dt("dialog")],K.prototype,"dialogEl",2);K=vt([A("incident-modal")],K);var Se=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,Z=(i,t,e,r)=>{for(var s=r>1?void 0:r?_e(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Se(t,e,s),s};let O=class extends b{constructor(){super(...arguments),this.title="",this.description="",this.actionLabel="",this.actionHref=""}render(){return h`
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
    `}};O.styles=_`
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
  `;Z([p({type:String})],O.prototype,"title",2);Z([p({type:String})],O.prototype,"description",2);Z([p({type:String})],O.prototype,"actionLabel",2);Z([p({type:String})],O.prototype,"actionHref",2);O=Z([A("ui-card")],O);var Ae=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,N=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ee(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ae(t,e,s),s};let S=class extends b{constructor(){super(...arguments),this.nodes=[],this.activeIncident=null,this.onTick=i=>{this.nodes=i.detail.nodes},this.onIncident=i=>{this.activeIncident=i.detail},this.onIncidentResolved=()=>{var i;this.activeIncident=null,(i=this.telemetryStore)==null||i.resolveIncident()}}connectedCallback(){super.connectedCallback(),this.syncStore()}willUpdate(i){i.has("telemetryStore")&&this.syncStore()}syncStore(){this.telemetryStore&&(this.nodes=this.telemetryStore.getNodes(),this.activeIncident=this.telemetryStore.getIncident(),this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.removeEventListener("incident-raised",this.onIncident),this.telemetryStore.removeEventListener("incident-resolved",this.onIncidentResolved),this.telemetryStore.addEventListener("telemetry-tick",this.onTick),this.telemetryStore.addEventListener("incident-raised",this.onIncident),this.telemetryStore.addEventListener("incident-resolved",this.onIncidentResolved))}disconnectedCallback(){super.disconnectedCallback(),this.telemetryStore&&(this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.removeEventListener("incident-raised",this.onIncident),this.telemetryStore.removeEventListener("incident-resolved",this.onIncidentResolved))}handleOpenModal(){this.modalEl.openModal()}handleSimulateIncident(){var i;(i=this.telemetryStore)==null||i.triggerMockIncident("node-gamma")}render(){return this.authStore&&!this.authStore.isAuthenticated?h`
        <ui-card
          title="Access Restricted"
          description="You must authenticate at the gateway before accessing real-time telemetry clusters."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `:h`
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

      ${this.activeIncident?h`
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
        ${this.nodes.map(i=>h`
          <div class="card ${i.isCordoned?"status-cordoned":`status-${i.status}`}">
            <div class="node-header">
              <div>
                <div class="node-name">
                  ${i.name}
                  ${i.isCordoned?h`<span style="font-size: 0.7rem; color: var(--color-warning); font-weight: normal; margin-left: 0.35rem;">(Cordoned)</span>`:null}
                </div>
                <div class="node-region">${i.region}</div>
              </div>
            </div>

            <div class="metrics">
              <div class="metric-row">
                <span>CPU Load</span>
                <span>${i.cpuLoad}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${i.cpuLoad>85?"critical":i.cpuLoad>70?"warning":""}"
                  style="width: ${i.cpuLoad}%"
                ></div>
              </div>

              <div class="metric-row" style="margin-top: 0.25rem;">
                <span>Memory</span>
                <span>${i.memoryUsage}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${i.memoryUsage>85?"critical":i.memoryUsage>70?"warning":""}"
                  style="width: ${i.memoryUsage}%"
                ></div>
              </div>
            </div>

            <div class="card-footer">
              <span style="font-size: 0.75rem; color: var(--color-text-faint);">
                Ping: ${i.latencyMs}ms
              </span>
              <!-- Native Popover element -->
              <node-popover .node=${i}></node-popover>
            </div>
          </div>
        `)}
      </div>

      <!-- Native <dialog> Modal -->
      <incident-modal
        .incident=${this.activeIncident}
        @incident-resolved=${this.onIncidentResolved}
      ></incident-modal>
    `}};S.styles=_`
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
  `;N([L({context:J,subscribe:!0}),p({attribute:!1})],S.prototype,"authStore",2);N([L({context:ft,subscribe:!0}),p({attribute:!1})],S.prototype,"telemetryStore",2);N([g()],S.prototype,"nodes",2);N([g()],S.prototype,"activeIncident",2);N([Dt("incident-modal")],S.prototype,"modalEl",2);S=N([A("telemetry-grid")],S);var Ce=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,it=(i,t,e,r)=>{for(var s=r>1?void 0:r?Pe(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ce(t,e,s),s};let D=class extends b{constructor(){super(...arguments),this.nodes=[],this.onTick=i=>{this.nodes=i.detail.nodes}}connectedCallback(){super.connectedCallback(),this.syncStore()}willUpdate(i){i.has("telemetryStore")&&this.syncStore()}syncStore(){this.telemetryStore&&(this.nodes=this.telemetryStore.getNodes(),this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.addEventListener("telemetry-tick",this.onTick))}disconnectedCallback(){super.disconnectedCallback(),this.telemetryStore&&this.telemetryStore.removeEventListener("telemetry-tick",this.onTick)}handleToggleCordon(i){var t;(t=this.telemetryStore)==null||t.toggleCordon(i)}render(){return this.authStore&&!this.authStore.isAuthenticated?h`
        <ui-card
          title="Access Restricted"
          description="Node cluster topology is restricted to authenticated operators."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `:h`
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
            ${this.nodes.map(i=>h`
              <tr class=${i.isCordoned?"row-cordoned":""}>
                <td>
                  <strong>${i.name}</strong>
                  ${i.isCordoned?h`<span style="margin-left: 0.4rem; font-size: 0.75rem; color: var(--color-warning);">[Cordoned]</span>`:null}
                </td>
                <td><code>${i.region}</code></td>
                <td>
                  <span class="badge-status ${i.isCordoned?"status-cordoned":`status-${i.status}`}">
                    ${i.isCordoned?"DRAINING":i.status}
                  </span>
                </td>
                <td>${i.cpuLoad}%</td>
                <td>${i.memoryUsage}%</td>
                <td>${i.isCordoned?"—":`${i.latencyMs} ms`}</td>
                <td>
                  <button
                    type="button"
                    class="btn-cordon ${i.isCordoned?"active":""}"
                    @click=${()=>this.handleToggleCordon(i.id)}
                    aria-label="${i.isCordoned?`Uncordon node ${i.name}`:`Cordon node ${i.name}`}"
                    title="${i.isCordoned?"Resume live cluster traffic":"Drain and isolate node from cluster traffic"}"
                  >
                    ${i.isCordoned?"✓ Uncordon":"⛔ Cordon"}
                  </button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `}};D.styles=_`
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
  `;it([L({context:J,subscribe:!0}),p({attribute:!1})],D.prototype,"authStore",2);it([L({context:ft,subscribe:!0}),p({attribute:!1})],D.prototype,"telemetryStore",2);it([g()],D.prototype,"nodes",2);D=it([A("nodes-view")],D);var Me=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,ot=(i,t,e,r)=>{for(var s=r>1?void 0:r?Te(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Me(t,e,s),s};typeof window<"u"&&(window.addEventListener("error",i=>{var t,e;if((t=i.message)!=null&&t.includes("Cannot read properties of undefined (reading 'startTime')")||i.error instanceof TypeError&&((e=i.error.message)!=null&&e.includes("'startTime'")))return i.preventDefault(),i.stopImmediatePropagation(),!0},!0),window.addEventListener("unhandledrejection",i=>{var t,e,r;((e=(t=i.reason)==null?void 0:t.message)!=null&&e.includes("Cannot read properties of undefined (reading 'startTime')")||i.reason instanceof TypeError&&((r=i.reason.message)!=null&&r.includes("'startTime'")))&&(i.preventDefault(),i.stopImmediatePropagation())},!0));let H=class extends b{constructor(){super(),window.__AETHER_SHELL__?(this.authStore=window.__AETHER_SHELL__.authStore,this.telemetryStore=window.__AETHER_SHELL__.telemetryStore,this.audioStore=window.__AETHER_SHELL__.audioStore,this.router=window.__AETHER_SHELL__.router):(this.authStore=new ct,this.telemetryStore=new ue,this.audioStore=new ht,this.router=new me,this.router.addGuard(i=>{const t=i.split("?")[0].split("#")[0].split("/").pop()||"index.html";return(t==="dashboard.html"||t==="dashboard-nodes.html")&&!this.authStore.isAuthenticated?"index.html":!0}),window.__AETHER_SHELL__=this,window.__SHELL_BOOTED__=!0,this.telemetryStore.addEventListener("telemetry-tick",i=>{const e=i.detail.nodes.filter(r=>!r.isCordoned);e.some(r=>r.status==="critical")?this.audioStore.setAlertState("critical"):e.some(r=>r.status==="warning")?this.audioStore.setAlertState("warning"):this.audioStore.setAlertState("healthy")}))}connectedCallback(){super.connectedCallback(),this.addEventListener("request-navigation",i=>{const t=i.detail.url;this.router.navigate(t)}),this.addEventListener("login-success",()=>{this.router.navigate("dashboard.html")}),this.verifyRouteProtection()}verifyRouteProtection(){const i=window.location.pathname.split("/").pop()||"index.html";(i==="dashboard.html"||i==="dashboard-nodes.html")&&!this.authStore.isAuthenticated&&this.router.navigate("index.html")}render(){return h`
      <div class="app-layout">
        <app-header></app-header>
        <slot></slot>
      </div>
    `}};H.styles=_`
    :host {
      display: contents;
    }
  `;ot([bt({context:J}),p({attribute:!1})],H.prototype,"authStore",2);ot([bt({context:ft}),p({attribute:!1})],H.prototype,"telemetryStore",2);ot([bt({context:Nt}),p({attribute:!1})],H.prototype,"audioStore",2);H=ot([A("app-shell")],H);
