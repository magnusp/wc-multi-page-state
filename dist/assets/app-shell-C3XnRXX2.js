(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,lt=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),vt=new WeakMap;let Tt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(lt&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&vt.set(e,t))}return t}toString(){return this.cssText}};const Vt=i=>new Tt(typeof i=="string"?i:i+"",void 0,dt),C=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new Tt(e,i,dt)},zt=(i,t)=>{if(lt)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=J.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},bt=lt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Vt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jt,defineProperty:qt,getOwnPropertyDescriptor:Gt,getOwnPropertyNames:Wt,getOwnPropertySymbols:Bt,getPrototypeOf:Ft}=Object,w=globalThis,yt=w.trustedTypes,Kt=yt?yt.emptyScript:"",st=w.reactiveElementPolyfillSupport,N=(i,t)=>i,Z={toAttribute(i,t){switch(t){case Boolean:i=i?Kt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ct=(i,t)=>!jt(i,t),$t={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);let T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$t){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&qt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=Gt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$t}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const t=Ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const e=this.properties,r=[...Wt(e),...Bt(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(bt(s))}else t!==void 0&&e.push(bt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Z).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o,n;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=r.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Z;this._$Em=s;const d=l.fromAttribute(e,a.type);this[s]=d??((n=this._$Ej)==null?void 0:n.get(s))??d,this._$Em=null}}requestUpdate(t,e,r,s=!1,o){var n;if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??ct)(o,e)||r.useDefault&&r.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:o},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[N("elementProperties")]=new Map,T[N("finalized")]=new Map,st==null||st({ReactiveElement:T}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,xt=i=>i,Q=D.trustedTypes,wt=Q?Q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Lt="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,Ut="?"+x,Yt=`<${Ut}>`,E=document,z=()=>E.createComment(""),j=i=>i===null||typeof i!="object"&&typeof i!="function",ht=Array.isArray,Jt=i=>ht(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",rt=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,St=/>/g,_=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,Et=/"/g,kt=/^(?:script|style|textarea|title)$/i,Zt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),p=Zt(1),U=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Pt=new WeakMap,S=E.createTreeWalker(E,129);function It(i,t){if(!ht(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return wt!==void 0?wt.createHTML(t):t}const Qt=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=H;for(let a=0;a<e;a++){const l=i[a];let d,u,c=-1,v=0;for(;v<l.length&&(n.lastIndex=v,u=n.exec(l),u!==null);)v=n.lastIndex,n===H?u[1]==="!--"?n=_t:u[1]!==void 0?n=St:u[2]!==void 0?(kt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=_):u[3]!==void 0&&(n=_):n===_?u[0]===">"?(n=s??H,c=-1):u[1]===void 0?c=-2:(c=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?_:u[3]==='"'?Et:At):n===Et||n===At?n=_:n===_t||n===St?n=H:(n=_,s=void 0);const $=n===_&&i[a+1].startsWith("/>")?" ":"";o+=n===H?l+Yt:c>=0?(r.push(d),l.slice(0,c)+Lt+l.slice(c)+x+$):l+x+(c===-2?a:$)}return[It(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class q{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,u]=Qt(t,e);if(this.el=q.createElement(d,r),S.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=S.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Lt)){const v=u[n++],$=s.getAttribute(c).split(x),Y=/([.?@])?(.*)/.exec(v);l.push({type:1,index:o,name:Y[2],strings:$,ctor:Y[1]==="."?te:Y[1]==="?"?ee:Y[1]==="@"?se:tt}),s.removeAttribute(c)}else c.startsWith(x)&&(l.push({type:6,index:o}),s.removeAttribute(c));if(kt.test(s.tagName)){const c=s.textContent.split(x),v=c.length-1;if(v>0){s.textContent=Q?Q.emptyScript:"";for(let $=0;$<v;$++)s.append(c[$],z()),S.nextNode(),l.push({type:2,index:++o});s.append(c[v],z())}}}else if(s.nodeType===8)if(s.data===Ut)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(x,c+1))!==-1;)l.push({type:7,index:o}),c+=x.length-1}o++}}static createElement(t,e){const r=E.createElement("template");return r.innerHTML=t,r}}function k(i,t,e=i,r){var n,a;if(t===U)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=j(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=k(i,s._$AS(i,t.values),s,r)),t}class Xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??E).importNode(e,!0);S.currentNode=s;let o=S.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new B(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new re(o,this,t)),this._$AV.push(d),l=r[++a]}n!==(l==null?void 0:l.index)&&(o=S.nextNode(),n++)}return S.currentNode=E,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class B{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),j(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=q.createElement(It(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Xt(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=Pt.get(t.strings);return e===void 0&&Pt.set(t.strings,e=new q(t)),e}k(t){ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new B(this.O(z()),this.O(z()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t!==this._$AB;){const s=xt(t).nextSibling;xt(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=k(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=k(this,a[r+l],e,l),d===U&&(d=this._$AH[l]),n||(n=!j(d)||d!==this._$AH[l]),d===h?t=h:t!==h&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class ee extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class se extends tt{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??h)===U)return;const r=this._$AH,s=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==h&&(r===h||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class re{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const it=D.litHtmlPolyfillSupport;it==null||it(q,B),(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.3.3");const ie=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new B(t.insertBefore(z(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;let m=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ie(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return U}};var Mt;m._$litElement$=!0,m.finalized=!0,(Mt=A.litElementHydrateSupport)==null||Mt.call(A,{LitElement:m});const ot=A.litElementPolyfillSupport;ot==null||ot({LitElement:m});(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ct},ne=(i=oe,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),r==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,i,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(r==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,i,!0,a)}}throw Error("Unsupported decorator location: "+r)};function g(i){return(t,e)=>typeof e=="object"?ne(i,t,e):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(i){return g({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rt(i,t){return(e,r,s)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(i))??null};return ae(e,r,{get(){return o(this)}})}}/**
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
 */let Ct=class{constructor(t,e,r,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){const o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ht(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class le{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:r}]of this.subscriptions)e(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let de=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}};class Ot extends le{constructor(t,e,r){var s,o;super(e.context!==void 0?e.initialValue:r),this.onContextRequest=n=>{if(n.context!==this.context)return;const a=n.contextTarget??n.composedPath()[0];a!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,a,n.subscribe))},this.onProviderRequest=n=>{if(n.context!==this.context||(n.contextTarget??n.composedPath()[0])===this.host)return;const a=new Set;for(const[l,{consumerHost:d}]of this.subscriptions)a.has(l)||(a.add(l),d.dispatchEvent(new Ht(this.context,d,l,!0)));n.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(o=(s=this.host).addController)==null||o.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new de(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut({context:i}){return(t,e)=>{const r=new WeakMap;if(typeof e=="object")return{get(){return t.get.call(this)},set(s){return r.get(this).setValue(s),t.set.call(this,s)},init(s){return r.set(this,new Ot(this,{context:i,initialValue:s})),s}};{t.constructor.addInitializer((n=>{r.set(n,new Ot(n,{context:i}))}));const s=Object.getOwnPropertyDescriptor(t,e);let o;if(s===void 0){const n=new WeakMap;o={get(){return n.get(this)},set(a){r.get(this).setValue(a),n.set(this,a)},configurable:!0,enumerable:!0}}else{const n=s.set;o={...s,set(a){r.get(this).setValue(a),n==null||n.call(this,a)}}}return void Object.defineProperty(t,e,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F({context:i,subscribe:t}){return(e,r)=>{typeof r=="object"?r.addInitializer((function(){new Ct(this,{context:i,callback:s=>{e.set.call(this,s)},subscribe:t})})):e.constructor.addInitializer((s=>{new Ct(s,{context:i,callback:o=>{s[r]=o},subscribe:t})}))}}const pt=Symbol("auth-context"),mt=Symbol("telemetry-context"),Nt=Symbol("audio-context"),L=class L extends EventTarget{constructor(){super(),this.session=null,this.currentTabId=`tab_${Math.random().toString(36).slice(2,9)}_${Date.now()}`,this.hydrateFromStorage()}hydrateFromStorage(){try{const t=sessionStorage.getItem(L.STORAGE_KEY);if(t){const e=JSON.parse(t);e&&typeof e.username=="string"&&(this.session={username:e.username,authenticatedAt:e.authenticatedAt||Date.now(),tabId:this.currentTabId})}}catch{this.session=null}}get isAuthenticated(){return this.session!==null}get currentUser(){var t;return((t=this.session)==null?void 0:t.username)??null}get activeSession(){return this.session?{...this.session}:null}login(t,e){const r=t.trim();if(!r)return{success:!1,error:"Username is required."};if(e!=="joshua")return{success:!1,error:'Invalid password. (Hint: password is "joshua")'};this.session={username:r,authenticatedAt:Date.now(),tabId:this.currentTabId};try{sessionStorage.setItem(L.STORAGE_KEY,JSON.stringify(this.session))}catch{}return this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!0,user:r}})),{success:!0}}logout(){this.session=null;try{sessionStorage.removeItem(L.STORAGE_KEY)}catch{}this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!1,user:null}}))}};L.STORAGE_KEY="__APP_AUTH_SESSION__";let nt=L;class ce extends EventTarget{constructor(){super(),this.nodes=[],this.activeIncident=null,this.timer=null,this.initDefaultNodes(),this.startSimulation()}initDefaultNodes(){this.nodes=[{id:"node-alpha",name:"US-East Core Alpha",region:"us-east-1",status:"healthy",cpuLoad:24,memoryUsage:45,latencyMs:14,lastUpdated:Date.now()},{id:"node-beta",name:"EU-Central Edge Beta",region:"eu-west-1",status:"healthy",cpuLoad:38,memoryUsage:62,latencyMs:32,lastUpdated:Date.now()},{id:"node-gamma",name:"AP-Tokyo Gateway Gamma",region:"ap-northeast-1",status:"warning",cpuLoad:78,memoryUsage:88,latencyMs:142,lastUpdated:Date.now()},{id:"node-delta",name:"US-West Replica Delta",region:"us-west-2",status:"healthy",cpuLoad:19,memoryUsage:33,latencyMs:22,lastUpdated:Date.now()}]}getNodes(){return[...this.nodes]}getNodeById(t){return this.nodes.find(e=>e.id===t)}getIncident(){return this.activeIncident}triggerMockIncident(t="node-gamma"){this.activeIncident={id:`inc-${Date.now().toString(36)}`,severity:"high",message:`Memory threshold exceeded on [${t}] (>85% sustained for 300s). Potential threadpool exhaustion.`,timestamp:Date.now(),nodeId:t},this.dispatchEvent(new CustomEvent("incident-raised",{detail:this.activeIncident}))}resolveIncident(){this.activeIncident=null,this.dispatchEvent(new CustomEvent("incident-resolved"))}startSimulation(){typeof window>"u"||(this.timer=window.setInterval(()=>{this.nodes=this.nodes.map(t=>{const e=(Math.random()-.48)*4,r=(Math.random()-.48)*2,s=Math.max(5,Math.min(99,Math.round(t.cpuLoad+e))),o=Math.max(10,Math.min(99,Math.round(t.memoryUsage+r))),n=s>85||o>90?"critical":s>70?"warning":"healthy";return{...t,cpuLoad:s,memoryUsage:o,status:n,latencyMs:Math.max(5,Math.round(t.latencyMs+(Math.random()-.5)*6)),lastUpdated:Date.now()}}),this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}}))},2500))}destroy(){this.timer!==null&&(clearInterval(this.timer),this.timer=null)}}class he{constructor(){this.ctx=null,this.masterGain=null,this.droneOsc1=null,this.droneOsc2=null,this.sonarInterval=null,this.isRunning=!1}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.init(),!this.ctx||!this.masterGain||(this.ctx.state==="suspended"&&await this.ctx.resume(),this.isRunning))return;this.isRunning=!0,this.droneOsc1=this.ctx.createOscillator(),this.droneOsc1.type="sine",this.droneOsc1.frequency.setValueAtTime(55,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(140,this.ctx.currentTime),this.droneOsc2=this.ctx.createOscillator(),this.droneOsc2.type="triangle",this.droneOsc2.frequency.setValueAtTime(55.4,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.12,this.ctx.currentTime),this.droneOsc1.connect(t),this.droneOsc2.connect(t),t.connect(e),e.connect(this.masterGain),this.droneOsc1.start(),this.droneOsc2.start(),this.sonarInterval=window.setInterval(()=>{this.playSonarPing()},7e3)}playSonarPing(){if(!this.ctx||!this.masterGain||!this.isRunning)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(880,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(440,this.ctx.currentTime+.8),e.gain.setValueAtTime(.04,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.9),t.connect(e),e.connect(this.masterGain),t.start(),t.stop(this.ctx.currentTime+1)}setVolume(t){if(!this.masterGain||!this.ctx)return;const e=Math.max(0,Math.min(1,t));this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}stop(){var t,e,r,s;if(this.isRunning){this.isRunning=!1,this.sonarInterval!==null&&(clearInterval(this.sonarInterval),this.sonarInterval=null);try{(t=this.droneOsc1)==null||t.stop(),(e=this.droneOsc2)==null||e.stop(),(r=this.droneOsc1)==null||r.disconnect(),(s=this.droneOsc2)==null||s.disconnect()}catch{}}}get running(){return this.isRunning}}const V=class V extends EventTarget{constructor(){super(),this.isMuted=!1,this.volumeLevel=.3,this.engine=new he,this.hydrateFromStorage()}hydrateFromStorage(){try{const t=sessionStorage.getItem(V.STORAGE_KEY);if(t){const e=JSON.parse(t);typeof e.muted=="boolean"&&(this.isMuted=e.muted),typeof e.volume=="number"&&(this.volumeLevel=Math.max(0,Math.min(1,e.volume)))}}catch{}}saveToStorage(){try{const t={muted:this.isMuted,volume:this.volumeLevel};sessionStorage.setItem(V.STORAGE_KEY,JSON.stringify(t))}catch{}}get isPlaying(){return this.engine.running}get muted(){return this.isMuted}get volume(){return this.volumeLevel}async togglePlay(){this.engine.running?this.engine.stop():(await this.engine.start(),this.engine.setVolume(this.isMuted?0:this.volumeLevel)),this.notifyState()}toggleMute(){this.isMuted=!this.isMuted,this.engine.setVolume(this.isMuted?0:this.volumeLevel),this.saveToStorage(),this.notifyState()}setVolume(t){this.volumeLevel=Math.max(0,Math.min(1,t)),this.isMuted||this.engine.setVolume(this.volumeLevel),this.saveToStorage(),this.notifyState()}notifyState(){this.dispatchEvent(new CustomEvent("audio-changed",{detail:{isPlaying:this.engine.running,muted:this.isMuted,volume:this.volumeLevel}}))}};V.STORAGE_KEY="__APP_AUDIO_PREFS__";let at=V;class ue extends EventTarget{constructor(){super(),this.attachLinkInterceptor(),window.addEventListener("popstate",t=>this.handlePopState(t))}attachLinkInterceptor(){document.addEventListener("click",t=>{const r=(t.composedPath?t.composedPath():[t.target]).find(o=>o instanceof HTMLElement&&o.tagName==="A");if(!r)return;const s=r.getAttribute("href");!s||s.startsWith("http://")||s.startsWith("https://")||s.startsWith("#")||r.target==="_blank"||(t.preventDefault(),this.navigate(s))})}async navigate(t,e=!0){this.dispatchEvent(new CustomEvent("route-changing",{detail:{targetUrl:t}}));const r=document;if(typeof r.startViewTransition=="function")try{const s=r.startViewTransition(async()=>{await this.loadView(t)});s&&"finished"in s&&s.finished?await s.finished:s instanceof Promise&&await s}catch{await this.loadView(t)}else await this.loadView(t);e&&window.history.pushState({url:t},"",t),this.dispatchEvent(new CustomEvent("route-changed",{detail:{currentUrl:t}}))}async loadView(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);const r=await e.text(),o=new DOMParser().parseFromString(r,"text/html");document.title=o.title;const n=o.querySelector(".main-content"),a=document.querySelector(".main-content");n&&a&&(a.innerHTML=n.innerHTML)}catch{window.location.href=t}}handlePopState(t){const e=window.location.pathname.split("/").pop()||"index.html";this.navigate(e,!1)}}var pe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,M=(i,t,e,r)=>{for(var s=r>1?void 0:r?me(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&pe(t,e,s),s};let b=class extends m{constructor(){super(...arguments),this.isAudioPlaying=!1,this.isAudioMuted=!1,this.audioVolume=.3,this.currentUser=null,this.onAuthChanged=i=>{this.currentUser=i.detail.user},this.onAudioChanged=i=>{const t=i.detail;this.isAudioPlaying=t.isPlaying,this.isAudioMuted=t.muted,this.audioVolume=t.volume}}connectedCallback(){super.connectedCallback(),this.syncStores()}willUpdate(i){(i.has("authStore")||i.has("audioStore"))&&this.syncStores()}syncStores(){this.authStore&&(this.currentUser=this.authStore.currentUser,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged)),this.audioStore&&(this.isAudioPlaying=this.audioStore.isPlaying,this.isAudioMuted=this.audioStore.muted,this.audioVolume=this.audioStore.volume,this.audioStore.removeEventListener("audio-changed",this.onAudioChanged),this.audioStore.addEventListener("audio-changed",this.onAudioChanged))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.audioStore&&this.audioStore.removeEventListener("audio-changed",this.onAudioChanged)}async toggleAudio(){var i;await((i=this.audioStore)==null?void 0:i.togglePlay())}toggleMute(){var i;(i=this.audioStore)==null||i.toggleMute()}handleVolume(i){var e;const t=parseFloat(i.target.value);(e=this.audioStore)==null||e.setVolume(t)}handleLogout(){var i;(i=this.authStore)==null||i.logout(),this.dispatchEvent(new CustomEvent("request-navigation",{bubbles:!0,composed:!0,detail:{url:"index.html"}}))}render(){return p`
      <div class="header-inner">
        <a href="index.html" class="brand" aria-label="AetherWatch Home">
          <span class="brand-icon">⬡</span>
          <span>AetherWatch</span>
        </a>

        <nav aria-label="Main Navigation">
          <a href="index.html">Gateway</a>
          <a href="product.html">Specs & SEO</a>
          <a href="dashboard.html">Telemetry</a>
          <a href="dashboard-nodes.html">Nodes</a>
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

          ${this.currentUser?p`
            <div class="user-pill">
              <span>👤 ${this.currentUser}</span>
              <button class="btn-logout" @click=${this.handleLogout}>Sign Out</button>
            </div>
          `:null}
        </div>
      </div>
    `}};b.styles=C`
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
  `;M([F({context:pt,subscribe:!0}),g({attribute:!1})],b.prototype,"authStore",2);M([F({context:Nt,subscribe:!0}),g({attribute:!1})],b.prototype,"audioStore",2);M([f()],b.prototype,"isAudioPlaying",2);M([f()],b.prototype,"isAudioMuted",2);M([f()],b.prototype,"audioVolume",2);M([f()],b.prototype,"currentUser",2);b=M([O("app-header")],b);var ge=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,R=(i,t,e,r)=>{for(var s=r>1?void 0:r?fe(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ge(t,e,s),s};let y=class extends m{constructor(){super(),this.username="",this.password="",this.errorMessage="",this.isSubmitting=!1,this.internals=this.attachInternals()}handleUsernameChange(i){this.username=i.target.value,this.errorMessage="",this.updateFormValidity()}handlePasswordChange(i){this.password=i.target.value,this.errorMessage="",this.updateFormValidity()}updateFormValidity(){this.internals.setFormValue(`${this.username}`),this.username?this.internals.setValidity({}):this.internals.setValidity({valueMissing:!0},"Username is required")}handleSubmit(i){if(i.preventDefault(),!this.authStore)return;this.isSubmitting=!0;const t=this.authStore.login(this.username,this.password);this.isSubmitting=!1,t.success?this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0,detail:{username:this.username}})):this.errorMessage=t.error||"Authentication failed."}render(){return p`
      <div class="card" role="region" aria-label="Sign In Portal">
        <h2 class="title">Gateway Access</h2>
        <p class="subtitle">Authenticate to view live node telemetry</p>

        ${this.errorMessage?p`
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
    `}};y.formAssociated=!0;y.styles=C`
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
  `;R([F({context:pt,subscribe:!0}),g({attribute:!1})],y.prototype,"authStore",2);R([f()],y.prototype,"username",2);R([f()],y.prototype,"password",2);R([f()],y.prototype,"errorMessage",2);R([f()],y.prototype,"isSubmitting",2);y=R([O("login-panel")],y);var ve=Object.defineProperty,be=Object.getOwnPropertyDescriptor,Dt=(i,t,e,r)=>{for(var s=r>1?void 0:r?be(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ve(t,e,s),s};let X=class extends m{constructor(){super(...arguments),this.node=null}render(){if(!this.node)return p``;const i=`popover-${this.node.id}`;return p`
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
    `}};X.styles=C`
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
  `;Dt([g({type:Object})],X.prototype,"node",2);X=Dt([O("node-popover")],X);var ye=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,gt=(i,t,e,r)=>{for(var s=r>1?void 0:r?$e(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ye(t,e,s),s};let G=class extends m{constructor(){super(...arguments),this.incident=null}openModal(){this.dialogEl.showModal()}closeModal(){this.dialogEl.close()}handleResolve(){this.dispatchEvent(new CustomEvent("incident-resolved",{bubbles:!0,composed:!0})),this.closeModal()}render(){var i,t,e;return p`
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
    `}};G.styles=C`
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
  `;gt([g({type:Object})],G.prototype,"incident",2);gt([Rt("dialog")],G.prototype,"dialogEl",2);G=gt([O("incident-modal")],G);var xe=Object.defineProperty,we=Object.getOwnPropertyDescriptor,K=(i,t,e,r)=>{for(var s=r>1?void 0:r?we(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&xe(t,e,s),s};let P=class extends m{constructor(){super(...arguments),this.nodes=[],this.activeIncident=null,this.onTick=i=>{this.nodes=i.detail.nodes},this.onIncident=i=>{this.activeIncident=i.detail},this.onIncidentResolved=()=>{var i;this.activeIncident=null,(i=this.telemetryStore)==null||i.resolveIncident()}}connectedCallback(){super.connectedCallback(),this.syncStore()}willUpdate(i){i.has("telemetryStore")&&this.syncStore()}syncStore(){this.telemetryStore&&(this.nodes=this.telemetryStore.getNodes(),this.activeIncident=this.telemetryStore.getIncident(),this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.removeEventListener("incident-raised",this.onIncident),this.telemetryStore.removeEventListener("incident-resolved",this.onIncidentResolved),this.telemetryStore.addEventListener("telemetry-tick",this.onTick),this.telemetryStore.addEventListener("incident-raised",this.onIncident),this.telemetryStore.addEventListener("incident-resolved",this.onIncidentResolved))}disconnectedCallback(){super.disconnectedCallback(),this.telemetryStore&&(this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.removeEventListener("incident-raised",this.onIncident),this.telemetryStore.removeEventListener("incident-resolved",this.onIncidentResolved))}handleOpenModal(){this.modalEl.openModal()}handleSimulateIncident(){var i;(i=this.telemetryStore)==null||i.triggerMockIncident("node-gamma")}render(){return p`
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

      ${this.activeIncident?p`
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
        ${this.nodes.map(i=>p`
          <div class="card status-${i.status}">
            <div class="node-header">
              <div>
                <div class="node-name">${i.name}</div>
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
    `}};P.styles=C`
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
  `;K([F({context:mt,subscribe:!0}),g({attribute:!1})],P.prototype,"telemetryStore",2);K([f()],P.prototype,"nodes",2);K([f()],P.prototype,"activeIncident",2);K([Rt("incident-modal")],P.prototype,"modalEl",2);P=K([O("telemetry-grid")],P);var _e=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,ft=(i,t,e,r)=>{for(var s=r>1?void 0:r?Se(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&_e(t,e,s),s};let W=class extends m{constructor(){super(...arguments),this.nodes=[],this.onTick=i=>{this.nodes=i.detail.nodes}}connectedCallback(){super.connectedCallback(),this.syncStore()}willUpdate(i){i.has("telemetryStore")&&this.syncStore()}syncStore(){this.telemetryStore&&(this.nodes=this.telemetryStore.getNodes(),this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.addEventListener("telemetry-tick",this.onTick))}disconnectedCallback(){super.disconnectedCallback(),this.telemetryStore&&this.telemetryStore.removeEventListener("telemetry-tick",this.onTick)}render(){return p`
      <div class="header">
        <h2 class="title">Active Relay Registry</h2>
        <p class="subtitle">Deep inspection of distributed edge relay nodes</p>
      </div>

      <div class="callout" role="note">
        <span style="font-size: 1.25rem;">🔊</span>
        <div>
          <strong>Audio Continuity Verified:</strong> If the ambient soundscape was playing on the main dashboard,
          notice how audio playback continued completely uninterrupted across this client-side View Transition!
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
            </tr>
          </thead>
          <tbody>
            ${this.nodes.map(i=>p`
              <tr>
                <td><strong>${i.name}</strong></td>
                <td><code>${i.region}</code></td>
                <td><span class="badge-status status-${i.status}">${i.status}</span></td>
                <td>${i.cpuLoad}%</td>
                <td>${i.memoryUsage}%</td>
                <td>${i.latencyMs} ms</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `}};W.styles=C`
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
  `;ft([F({context:mt,subscribe:!0}),g({attribute:!1})],W.prototype,"telemetryStore",2);ft([f()],W.prototype,"nodes",2);W=ft([O("nodes-view")],W);var Ae=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,et=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ee(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ae(t,e,s),s};let I=class extends m{constructor(){super(),window.__AETHER_SHELL__?(this.authStore=window.__AETHER_SHELL__.authStore,this.telemetryStore=window.__AETHER_SHELL__.telemetryStore,this.audioStore=window.__AETHER_SHELL__.audioStore,this.router=window.__AETHER_SHELL__.router):(this.authStore=new nt,this.telemetryStore=new ce,this.audioStore=new at,this.router=new ue,window.__AETHER_SHELL__=this,window.__SHELL_BOOTED__=!0)}connectedCallback(){super.connectedCallback(),this.addEventListener("request-navigation",i=>{const t=i.detail.url;this.router.navigate(t)}),this.addEventListener("login-success",()=>{this.router.navigate("dashboard.html")}),this.verifyRouteProtection()}verifyRouteProtection(){const i=window.location.pathname.split("/").pop()||"index.html";(i==="dashboard.html"||i==="dashboard-nodes.html")&&!this.authStore.isAuthenticated&&this.router.navigate("index.html")}render(){return p`
      <div class="app-layout">
        <app-header></app-header>
        <slot></slot>
      </div>
    `}};I.styles=C`
    :host {
      display: contents;
    }
  `;et([ut({context:pt}),g({attribute:!1})],I.prototype,"authStore",2);et([ut({context:mt}),g({attribute:!1})],I.prototype,"telemetryStore",2);et([ut({context:Nt}),g({attribute:!1})],I.prototype,"audioStore",2);I=et([O("app-shell")],I);
