(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=globalThis,bt=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ft=Symbol(),St=new WeakMap;let Dt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(bt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=St.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&St.set(e,t))}return t}toString(){return this.cssText}};const Wt=r=>new Dt(typeof r=="string"?r:r+"",void 0,ft),w=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Dt(e,r,ft)},Kt=(r,t)=>{if(bt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=st.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},_t=bt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Wt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yt,defineProperty:Jt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Qt,getOwnPropertySymbols:Xt,getPrototypeOf:te}=Object,E=globalThis,At=E.trustedTypes,ee=At?At.emptyScript:"",dt=E.reactiveElementPolyfillSupport,G=(r,t)=>r,it={toAttribute(r,t){switch(t){case Boolean:r=r?ee:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},vt=(r,t)=>!Yt(r,t),Et={attribute:!0,type:String,converter:it,reflect:!1,useDefault:!1,hasChanged:vt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);let z=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Jt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=Zt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const t=te(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const e=this.properties,i=[...Qt(e),...Xt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(_t(s))}else t!==void 0&&e.push(_t(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:it).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o,n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:it;this._$Em=s;const d=l.fromAttribute(e,a.type);this[s]=d??((n=this._$Ej)==null?void 0:n.get(s))??d,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){var n;if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),i??(i=a.getPropertyOptions(t)),!((i.hasChanged??vt)(o,e)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[G("elementProperties")]=new Map,z[G("finalized")]=new Map,dt==null||dt({ReactiveElement:z}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,Ct=r=>r,ot=B.trustedTypes,Mt=ot?ot.createPolicy("lit-html",{createHTML:r=>r}):void 0,zt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+A,re=`<${Ht}>`,O=document,W=()=>O.createComment(""),K=r=>r===null||typeof r!="object"&&typeof r!="function",yt=Array.isArray,se=r=>yt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ct=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,Lt=/>/g,M=RegExp(`>|${ct}(?:([^\\s"'>=/]+)(${ct}*=${ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Tt=/"/g,Nt=/^(?:script|style|textarea|title)$/i,ie=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),h=ie(1),N=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),kt=new WeakMap,P=O.createTreeWalker(O,129);function jt(r,t){if(!yt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt!==void 0?Mt.createHTML(t):t}const oe=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=q;for(let a=0;a<e;a++){const l=r[a];let d,u,c=-1,b=0;for(;b<l.length&&(n.lastIndex=b,u=n.exec(l),u!==null);)b=n.lastIndex,n===q?u[1]==="!--"?n=Pt:u[1]!==void 0?n=Lt:u[2]!==void 0?(Nt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=M):u[3]!==void 0&&(n=M):n===M?u[0]===">"?(n=s??q,c=-1):u[1]===void 0?c=-2:(c=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?M:u[3]==='"'?Tt:Ot):n===Tt||n===Ot?n=M:n===Pt||n===Lt?n=q:(n=M,s=void 0);const S=n===M&&r[a+1].startsWith("/>")?" ":"";o+=n===q?l+re:c>=0?(i.push(d),l.slice(0,c)+zt+l.slice(c)+A+S):l+A+(c===-2?a:S)}return[jt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,u]=oe(t,e);if(this.el=Y.createElement(d,i),P.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=P.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(zt)){const b=u[n++],S=s.getAttribute(c).split(A),rt=/([.?@])?(.*)/.exec(b);l.push({type:1,index:o,name:rt[2],strings:S,ctor:rt[1]==="."?ae:rt[1]==="?"?le:rt[1]==="@"?de:at}),s.removeAttribute(c)}else c.startsWith(A)&&(l.push({type:6,index:o}),s.removeAttribute(c));if(Nt.test(s.tagName)){const c=s.textContent.split(A),b=c.length-1;if(b>0){s.textContent=ot?ot.emptyScript:"";for(let S=0;S<b;S++)s.append(c[S],W()),P.nextNode(),l.push({type:2,index:++o});s.append(c[b],W())}}}else if(s.nodeType===8)if(s.data===Ht)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(A,c+1))!==-1;)l.push({type:7,index:o}),c+=A.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function j(r,t,e=r,i){var n,a;if(t===N)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=K(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=j(r,s._$AS(r,t.values),s,i)),t}class ne{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??O).importNode(e,!0);P.currentNode=s;let o=P.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Z(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new ce(o,this,t)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=P.nextNode(),n++)}return P.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),K(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):se(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&K(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Y.createElement(jt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new ne(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=kt.get(t.strings);return e===void 0&&kt.set(t.strings,e=new Y(t)),e}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Z(this.O(W()),this.O(W()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=Ct(t).nextSibling;Ct(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=j(this,t,e,0),n=!K(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=j(this,a[i+l],e,l),d===N&&(d=this._$AH[l]),n||(n=!K(d)||d!==this._$AH[l]),d===m?t=m:t!==m&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ae extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class le extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class de extends at{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=j(this,t,e,0)??m)===N)return;const i=this._$AH,s=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==m&&(i===m||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class ce{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const ht=B.litHtmlPolyfillSupport;ht==null||ht(Y,Z),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.3.3");const he=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new Z(t.insertBefore(W(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis;let f=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=he(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return N}};var Rt;f._$litElement$=!0,f.finalized=!0,(Rt=L.litElementHydrateSupport)==null||Rt.call(L,{LitElement:f});const ut=L.litElementPolyfillSupport;ut==null||ut({LitElement:f});(L.litElementVersions??(L.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:vt},pe=(r=ue,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(i==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,r,!0,a)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(t,e)=>typeof e=="object"?pe(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vt(r,t){return(e,i,s)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(r))??null};return me(e,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qt=class extends Event{constructor(t,e,i,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=i,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ut=class{constructor(t,e,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){const o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new qt(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:i}]of this.subscriptions)e(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let be=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}};class It extends ge{constructor(t,e,i){var s,o;super(e.context!==void 0?e.initialValue:i),this.onContextRequest=n=>{if(n.context!==this.context)return;const a=n.contextTarget??n.composedPath()[0];a!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,a,n.subscribe))},this.onProviderRequest=n=>{if(n.context!==this.context||(n.contextTarget??n.composedPath()[0])===this.host)return;const a=new Set;for(const[l,{consumerHost:d}]of this.subscriptions)a.has(l)||(a.add(l),d.dispatchEvent(new qt(this.context,d,l,!0)));n.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(o=(s=this.host).addController)==null||o.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new be(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt({context:r}){return(t,e)=>{const i=new WeakMap;if(typeof e=="object")return{get(){return t.get.call(this)},set(s){return i.get(this).setValue(s),t.set.call(this,s)},init(s){return i.set(this,new It(this,{context:r,initialValue:s})),s}};{t.constructor.addInitializer((n=>{i.set(n,new It(n,{context:r}))}));const s=Object.getOwnPropertyDescriptor(t,e);let o;if(s===void 0){const n=new WeakMap;o={get(){return n.get(this)},set(a){i.get(this).setValue(a),n.set(this,a)},configurable:!0,enumerable:!0}}else{const n=s.set;o={...s,set(a){i.get(this).setValue(a),n==null||n.call(this,a)}}}return void Object.defineProperty(t,e,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I({context:r,subscribe:t}){return(e,i)=>{typeof i=="object"?i.addInitializer((function(){new Ut(this,{context:r,callback:s=>{e.set.call(this,s)},subscribe:t})})):e.constructor.addInitializer((s=>{new Ut(s,{context:r,callback:o=>{s[i]=o},subscribe:t})}))}}const Q=Symbol("auth-context"),wt=Symbol("telemetry-context"),Gt=Symbol("audio-context");class fe{constructor(){this.store=new Map}getItem(t){return this.store.has(t)?this.store.get(t):null}setItem(t,e){this.store.set(t,String(e))}removeItem(t){this.store.delete(t)}clear(){this.store.clear()}}function Bt(){try{if(typeof sessionStorage<"u"){const r="__storage_test__";return sessionStorage.setItem(r,"1"),sessionStorage.removeItem(r),sessionStorage}}catch{}return new fe}const H=class H extends EventTarget{constructor(t=Bt()){super(),this.session=null,this.storage=t,this.currentTabId=`tab_${Math.random().toString(36).slice(2,9)}_${Date.now()}`,this.hydrateFromStorage()}hydrateFromStorage(){try{const t=this.storage.getItem(H.STORAGE_KEY);if(t){const e=JSON.parse(t);e&&typeof e.username=="string"&&(this.session={username:e.username,authenticatedAt:e.authenticatedAt||Date.now(),tabId:this.currentTabId})}}catch{this.session=null}}get isAuthenticated(){return this.session!==null}get currentUser(){var t;return((t=this.session)==null?void 0:t.username)??null}get activeSession(){return this.session?{...this.session}:null}login(t,e){const i=t.trim();if(!i)return{success:!1,error:"Username is required."};if(e!=="joshua")return{success:!1,error:'Invalid password. (Hint: password is "joshua")'};this.session={username:i,authenticatedAt:Date.now(),tabId:this.currentTabId};try{this.storage.setItem(H.STORAGE_KEY,JSON.stringify(this.session))}catch{}return this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!0,user:i}})),{success:!0}}logout(){this.session=null;try{this.storage.removeItem(H.STORAGE_KEY)}catch{}this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!1,user:null}}))}};H.STORAGE_KEY="__APP_AUTH_SESSION__";let pt=H;const _=class _ extends EventTarget{constructor(){super(),this.nodes=[],this.activeIncident=null,this.timer=null,this.initDefaultNodes(),this.startSimulation()}initDefaultNodes(){this.nodes=[{id:"node-alpha",name:"US-East Core Alpha",region:"us-east-1",status:"healthy",cpuLoad:24,memoryUsage:45,latencyMs:14,lastUpdated:Date.now(),isCordoned:!1},{id:"node-beta",name:"EU-Central Edge Beta",region:"eu-west-1",status:"healthy",cpuLoad:38,memoryUsage:62,latencyMs:32,lastUpdated:Date.now(),isCordoned:!1},{id:"node-gamma",name:"AP-Tokyo Gateway Gamma",region:"ap-northeast-1",status:"warning",cpuLoad:78,memoryUsage:88,latencyMs:142,lastUpdated:Date.now(),isCordoned:!1},{id:"node-delta",name:"US-West Replica Delta",region:"us-west-2",status:"healthy",cpuLoad:19,memoryUsage:33,latencyMs:22,lastUpdated:Date.now(),isCordoned:!1}]}getNodes(){return[...this.nodes]}getNodeById(t){return this.nodes.find(e=>e.id===t)}getIncident(){return this.activeIncident}triggerMockIncident(t="node-gamma"){this.activeIncident={id:`inc-${Date.now().toString(36)}`,severity:"high",message:`Memory threshold exceeded on [${t}] (>85% sustained for 300s). Potential threadpool exhaustion.`,timestamp:Date.now(),nodeId:t},this.dispatchEvent(new CustomEvent("incident-raised",{detail:this.activeIncident}))}resolveIncident(){this.activeIncident&&(this.activeIncident=null,this.dispatchEvent(new CustomEvent("incident-resolved")))}toggleCordon(t){const e=this.nodes.find(s=>s.id===t);if(!e)return;if(!e.isCordoned){const s=Math.max(0,e.cpuLoad-_.IDLE_CPU),o=Math.max(0,e.memoryUsage-_.IDLE_MEM),n=this.nodes.filter(d=>d.id!==t&&!d.isCordoned),a=n.length>0?Math.round(s/n.length):0,l=n.length>0?Math.round(o/n.length):0;this.nodes=this.nodes.map(d=>{if(d.id===t)return{...d,isCordoned:!0,cpuLoad:_.IDLE_CPU,memoryUsage:_.IDLE_MEM,status:"healthy",latencyMs:0,lastUpdated:Date.now()};if(!d.isCordoned){const u=Math.min(99,d.cpuLoad+a),c=Math.min(99,d.memoryUsage+l),b=u>85||c>90?"critical":u>70?"warning":"healthy";return{...d,cpuLoad:u,memoryUsage:c,status:b,latencyMs:Math.round(d.latencyMs*1.25),lastUpdated:Date.now()}}return d})}else{const s=this.nodes.filter(a=>!a.isCordoned),o=s.length>0?Math.round(s.reduce((a,l)=>a+l.cpuLoad,0)/(s.length+1)):35,n=s.length>0?Math.round(s.reduce((a,l)=>a+l.memoryUsage,0)/(s.length+1)):50;this.nodes=this.nodes.map(a=>{if(a.id===t){const l=o>85||n>90?"critical":o>70?"warning":"healthy";return{...a,isCordoned:!1,cpuLoad:o,memoryUsage:n,status:l,latencyMs:25,lastUpdated:Date.now()}}if(!a.isCordoned){const l=Math.max(15,Math.round(a.cpuLoad*.8)),d=Math.max(20,Math.round(a.memoryUsage*.85)),u=l>85||d>90?"critical":l>70?"warning":"healthy";return{...a,cpuLoad:l,memoryUsage:d,status:u,latencyMs:Math.max(10,Math.round(a.latencyMs*.8)),lastUpdated:Date.now()}}return a})}this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}}))}startSimulation(){typeof window>"u"||(this.timer=window.setInterval(()=>{const t=this.nodes.filter(i=>!i.isCordoned).length,e=t===0?1:Math.max(1,4/t);this.nodes=this.nodes.map(i=>{if(i.isCordoned){const c=Math.max(4,Math.min(12,Math.round(i.cpuLoad+(Math.random()-.5)*1.5))),b=Math.max(15,Math.min(25,Math.round(i.memoryUsage+(Math.random()-.5)*1)));return{...i,cpuLoad:c,memoryUsage:b,status:"healthy",latencyMs:0,lastUpdated:Date.now()}}const s=(Math.random()-.48)*4,o=(Math.random()-.48)*2,n=Math.round(20*e),a=Math.round(30*e),l=Math.max(n,Math.min(99,Math.round(i.cpuLoad+s))),d=Math.max(a,Math.min(99,Math.round(i.memoryUsage+o))),u=l>85||d>90?"critical":l>70?"warning":"healthy";return{...i,cpuLoad:l,memoryUsage:d,status:u,latencyMs:Math.max(5,Math.round(i.latencyMs+(Math.random()-.5)*6)),lastUpdated:Date.now()}}),this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}}))},2500))}destroy(){this.timer!==null&&(clearInterval(this.timer),this.timer=null)}};_.IDLE_CPU=8,_.IDLE_MEM=20;let mt=_;class ve{constructor(){this.ctx=null,this.masterGain=null,this.droneOsc1=null,this.droneOsc2=null,this.alertInterval=null,this.alertState="healthy",this.isRunning=!1}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.init(),!this.ctx||!this.masterGain||(this.ctx.state==="suspended"&&await this.ctx.resume(),this.isRunning))return;this.isRunning=!0,this.droneOsc1=this.ctx.createOscillator(),this.droneOsc1.type="sine",this.droneOsc1.frequency.setValueAtTime(55,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(140,this.ctx.currentTime),this.droneOsc2=this.ctx.createOscillator(),this.droneOsc2.type="triangle",this.droneOsc2.frequency.setValueAtTime(55.4,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.12,this.ctx.currentTime),this.droneOsc1.connect(t),this.droneOsc2.connect(t),t.connect(e),e.connect(this.masterGain),this.droneOsc1.start(),this.droneOsc2.start(),this.restartAlertLoop()}setAlertState(t){this.alertState!==t&&(this.alertState=t,this.isRunning&&this.restartAlertLoop())}get currentAlertState(){return this.alertState}restartAlertLoop(){if(this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null),this.alertState==="healthy"||!this.isRunning)return;const t=this.alertState,e=t==="critical"?500:2e3;this.playAlertBeep(t),this.alertInterval=window.setInterval(()=>{this.playAlertBeep(t)},e)}playAlertBeep(t){if(!this.ctx||!this.masterGain||!this.isRunning)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain(),s=t==="critical"?1174.66:784,o=t==="critical"?.12:.18,n=t==="critical"?.09:.06;e.type=t==="critical"?"square":"sine",e.frequency.setValueAtTime(s,this.ctx.currentTime),i.gain.setValueAtTime(n,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+o),e.connect(i),i.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+o)}setVolume(t){if(!this.masterGain||!this.ctx)return;const e=Math.max(0,Math.min(1,t));this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}stop(){var t,e,i,s;if(this.isRunning){this.isRunning=!1,this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null);try{(t=this.droneOsc1)==null||t.stop(),(e=this.droneOsc2)==null||e.stop(),(i=this.droneOsc1)==null||i.disconnect(),(s=this.droneOsc2)==null||s.disconnect()}catch{}}}get running(){return this.isRunning}}const F=class F extends EventTarget{constructor(t=Bt()){super(),this.isEnabled=!0,this.isMuted=!1,this.volumeLevel=.3,this.storage=t,this.engine=new ve,this.hydrateFromStorage()}hydrateFromStorage(){try{const t=this.storage.getItem(F.STORAGE_KEY);if(t){const e=JSON.parse(t);typeof e.enabled=="boolean"&&(this.isEnabled=e.enabled),typeof e.muted=="boolean"&&(this.isMuted=e.muted),typeof e.volume=="number"&&(this.volumeLevel=Math.max(0,Math.min(1,e.volume)))}}catch{}}saveToStorage(){try{const t={enabled:this.isEnabled,muted:this.isMuted,volume:this.volumeLevel};this.storage.setItem(F.STORAGE_KEY,JSON.stringify(t))}catch{}}get isPlaying(){return this.engine.running}get isAudioEnabled(){return this.isEnabled}get muted(){return this.isMuted}get volume(){return this.volumeLevel}async start(){this.isEnabled=!0,this.saveToStorage(),this.engine.running||(await this.engine.start(),this.engine.setVolume(this.isMuted?0:this.volumeLevel)),this.notifyState()}stop(){this.isEnabled=!1,this.saveToStorage(),this.engine.running&&this.engine.stop(),this.notifyState()}async togglePlay(){this.engine.running?this.stop():await this.start()}toggleMute(){this.isMuted=!this.isMuted,this.engine.setVolume(this.isMuted?0:this.volumeLevel),this.saveToStorage(),this.notifyState()}setAlertState(t){this.engine.setAlertState(t),this.notifyState()}get alertState(){return this.engine.currentAlertState}setVolume(t){this.volumeLevel=Math.max(0,Math.min(1,t)),this.isMuted||this.engine.setVolume(this.volumeLevel),this.saveToStorage(),this.notifyState()}notifyState(){this.dispatchEvent(new CustomEvent("audio-changed",{detail:{isPlaying:this.engine.running,muted:this.isMuted,volume:this.volumeLevel,alertState:this.engine.currentAlertState}}))}};F.STORAGE_KEY="__APP_AUDIO_PREFS__";let gt=F;class ye extends EventTarget{constructor(){super(),this.guards=[],this.attachLinkInterceptor(),window.addEventListener("popstate",t=>this.handlePopState(t))}addGuard(t){this.guards.push(t)}attachLinkInterceptor(){document.addEventListener("click",t=>{const i=(t.composedPath?t.composedPath():[t.target]).find(o=>o instanceof HTMLElement&&o.tagName==="A");if(!i)return;const s=i.getAttribute("href");!s||s.startsWith("http://")||s.startsWith("https://")||s.startsWith("#")||i.target==="_blank"||(t.preventDefault(),this.navigate(s))})}async navigate(t,e=!0){let i=t;for(const o of this.guards){const n=o(i);if(n===!1)return;typeof n=="string"&&(i=n)}this.dispatchEvent(new CustomEvent("route-changing",{detail:{targetUrl:i}}));const s=document;if(typeof s.startViewTransition=="function")try{const o=s.startViewTransition(async()=>{await this.loadView(i)});o&&"finished"in o&&o.finished?await o.finished:o instanceof Promise&&await o}catch{await this.loadView(i)}else await this.loadView(i);e&&window.history.pushState({url:i},"",i),this.dispatchEvent(new CustomEvent("route-changed",{detail:{currentUrl:i}}))}async loadView(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);const i=await e.text(),o=new DOMParser().parseFromString(i,"text/html");document.title=o.title;const n=o.querySelector(".main-content"),a=document.querySelector(".main-content");n&&a&&(a.innerHTML=n.innerHTML)}catch{window.location.href=t}}handlePopState(t){const e=window.location.pathname.split("/").pop()||"index.html";this.navigate(e,!1)}}var xe=Object.defineProperty,we=Object.getOwnPropertyDescriptor,R=(r,t,e,i)=>{for(var s=i>1?void 0:i?we(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&xe(t,e,s),s};let y=class extends f{constructor(){super(...arguments),this.isAudioPlaying=!1,this.isAudioMuted=!1,this.audioVolume=.3,this.currentUser=null,this.onAuthChanged=r=>{this.currentUser=r.detail.user},this.onAudioChanged=r=>{const t=r.detail;this.isAudioPlaying=t.isPlaying,this.isAudioMuted=t.muted,this.audioVolume=t.volume}}connectedCallback(){super.connectedCallback(),this.syncStores()}willUpdate(r){(r.has("authStore")||r.has("audioStore"))&&this.syncStores()}syncStores(){var e,i;const r=this.authStore||((e=window.__AETHER_SHELL__)==null?void 0:e.authStore);r&&(this.currentUser=r.currentUser,r.removeEventListener("auth-changed",this.onAuthChanged),r.addEventListener("auth-changed",this.onAuthChanged));const t=this.audioStore||((i=window.__AETHER_SHELL__)==null?void 0:i.audioStore);t&&(this.isAudioPlaying=t.isPlaying,this.isAudioMuted=t.muted,this.audioVolume=t.volume,t.removeEventListener("audio-changed",this.onAudioChanged),t.addEventListener("audio-changed",this.onAudioChanged))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.audioStore&&this.audioStore.removeEventListener("audio-changed",this.onAudioChanged)}async toggleAudio(){var r;await((r=this.audioStore)==null?void 0:r.togglePlay())}toggleMute(){var r;(r=this.audioStore)==null||r.toggleMute()}handleVolume(r){var e;const t=parseFloat(r.target.value);(e=this.audioStore)==null||e.setVolume(t)}handleLogout(){var r;(r=this.authStore)==null||r.logout(),this.dispatchEvent(new CustomEvent("request-navigation",{bubbles:!0,composed:!0,detail:{url:"index.html"}}))}render(){return h`
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
    `}};y.styles=w`
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
  `;R([I({context:Q,subscribe:!0}),g({attribute:!1})],y.prototype,"authStore",2);R([I({context:Gt,subscribe:!0}),g({attribute:!1})],y.prototype,"audioStore",2);R([p()],y.prototype,"isAudioPlaying",2);R([p()],y.prototype,"isAudioMuted",2);R([p()],y.prototype,"audioVolume",2);R([p()],y.prototype,"currentUser",2);y=R([$("app-header")],y);var $e=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,C=(r,t,e,i)=>{for(var s=i>1?void 0:i?Se(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&$e(t,e,s),s};let v=class extends f{constructor(){super(),this.username="",this.password="",this.errorMessage="",this.isSubmitting=!1,this.currentUser=null,this.activeTabId=null,this.onAuthChanged=r=>{var e;const t=r.detail;this.currentUser=t.user,this.activeTabId=((e=this.authStore)==null?void 0:e.currentTabId)??null},this.internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.syncAuth()}willUpdate(r){r.has("authStore")&&this.syncAuth()}syncAuth(){var t;const r=this.authStore||((t=window.__AETHER_SHELL__)==null?void 0:t.authStore);if(r)this.currentUser=r.currentUser,this.activeTabId=r.currentTabId,r.removeEventListener("auth-changed",this.onAuthChanged),r.addEventListener("auth-changed",this.onAuthChanged);else if(typeof sessionStorage<"u")try{const e=sessionStorage.getItem("__APP_AUTH_SESSION__");if(e){const i=JSON.parse(e);i&&typeof i.username=="string"&&(this.currentUser=i.username)}}catch{}}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged)}handleUsernameChange(r){this.username=r.target.value,this.errorMessage="",this.updateFormValidity()}handlePasswordChange(r){this.password=r.target.value,this.errorMessage="",this.updateFormValidity()}updateFormValidity(){this.internals.setFormValue(`${this.username}`),this.username?this.internals.setValidity({}):this.internals.setValidity({valueMissing:!0},"Username is required")}handleSubmit(r){var i;r.preventDefault();const t=this.authStore||((i=window.__AETHER_SHELL__)==null?void 0:i.authStore);if(!t)return;this.isSubmitting=!0;const e=t.login(this.username,this.password);this.isSubmitting=!1,e.success?this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0,detail:{username:this.username}})):this.errorMessage=e.error||"Authentication failed."}handleTerminateSession(){var t;const r=this.authStore||((t=window.__AETHER_SHELL__)==null?void 0:t.authStore);r==null||r.logout()}render(){return this.currentUser?h`
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
    `}};v.formAssociated=!0;v.styles=w`
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
  `;C([I({context:Q,subscribe:!0}),g({attribute:!1})],v.prototype,"authStore",2);C([p()],v.prototype,"username",2);C([p()],v.prototype,"password",2);C([p()],v.prototype,"errorMessage",2);C([p()],v.prototype,"isSubmitting",2);C([p()],v.prototype,"currentUser",2);C([p()],v.prototype,"activeTabId",2);v=C([$("login-panel")],v);var _e=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Ft=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ae(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&_e(t,e,s),s};let nt=class extends f{constructor(){super(...arguments),this.node=null}render(){if(!this.node)return h``;const r=`popover-${this.node.id}`;return h`
      <button class="trigger-btn" popovertarget=${r}>
        Inspect Specs
      </button>

      <div id=${r} popover="auto">
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
    `}};nt.styles=w`
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
  `;Ft([g({type:Object})],nt.prototype,"node",2);nt=Ft([$("node-popover")],nt);var Ee=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,$t=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ce(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ee(t,e,s),s};let J=class extends f{constructor(){super(...arguments),this.incident=null}openModal(){this.dialogEl.showModal()}closeModal(){this.dialogEl.close()}handleResolve(){this.dispatchEvent(new CustomEvent("incident-resolved",{bubbles:!0,composed:!0})),this.closeModal()}render(){var r,t,e;return h`
      <dialog aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <div class="modal-header">
          <span class="badge">${((r=this.incident)==null?void 0:r.severity)||"Alert"}</span>
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
    `}};J.styles=w`
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
  `;$t([g({type:Object})],J.prototype,"incident",2);$t([Vt("dialog")],J.prototype,"dialogEl",2);J=$t([$("incident-modal")],J);var Me=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,X=(r,t,e,i)=>{for(var s=i>1?void 0:i?Pe(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Me(t,e,s),s};let T=class extends f{constructor(){super(...arguments),this.title="",this.description="",this.actionLabel="",this.actionHref=""}render(){return h`
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
    `}};T.styles=w`
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
  `;X([g({type:String})],T.prototype,"title",2);X([g({type:String})],T.prototype,"description",2);X([g({type:String})],T.prototype,"actionLabel",2);X([g({type:String})],T.prototype,"actionHref",2);T=X([$("ui-card")],T);var Le=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,D=(r,t,e,i)=>{for(var s=i>1?void 0:i?Oe(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Le(t,e,s),s};let x=class extends f{constructor(){super(...arguments),this.nodes=[],this.activeIncident=null,this.isAuthenticated=!1,this.onTick=r=>{this.nodes=r.detail.nodes},this.onIncident=r=>{this.activeIncident=r.detail},this.onIncidentResolved=()=>{this.activeIncident=null},this.handleModalResolve=()=>{var r;this.activeIncident=null,(r=this.telemetryStore)==null||r.resolveIncident()},this.onAuthChanged=r=>{var e;const t=(e=r.detail)==null?void 0:e.user;this.isAuthenticated=!!t}}connectedCallback(){super.connectedCallback(),this.syncStores()}willUpdate(r){(r.has("telemetryStore")||r.has("authStore"))&&this.syncStores()}syncStores(){this.authStore&&(this.isAuthenticated=this.authStore.isAuthenticated,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged)),this.telemetryStore&&(this.nodes=this.telemetryStore.getNodes(),this.activeIncident=this.telemetryStore.getIncident(),this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.removeEventListener("incident-raised",this.onIncident),this.telemetryStore.removeEventListener("incident-resolved",this.onIncidentResolved),this.telemetryStore.addEventListener("telemetry-tick",this.onTick),this.telemetryStore.addEventListener("incident-raised",this.onIncident),this.telemetryStore.addEventListener("incident-resolved",this.onIncidentResolved))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.telemetryStore&&(this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.removeEventListener("incident-raised",this.onIncident),this.telemetryStore.removeEventListener("incident-resolved",this.onIncidentResolved))}handleOpenModal(){this.modalEl.openModal()}handleSimulateIncident(){var r;(r=this.telemetryStore)==null||r.triggerMockIncident("node-gamma")}render(){return this.isAuthenticated?h`
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
        ${this.nodes.map(r=>h`
          <div class="card ${r.isCordoned?"status-cordoned":`status-${r.status}`}">
            <div class="node-header">
              <div>
                <div class="node-name">
                  ${r.name}
                  ${r.isCordoned?h`<span style="font-size: 0.7rem; color: var(--color-warning); font-weight: normal; margin-left: 0.35rem;">(Cordoned)</span>`:null}
                </div>
                <div class="node-region">${r.region}</div>
              </div>
            </div>

            <div class="metrics">
              <div class="metric-row">
                <span>CPU Load</span>
                <span>${r.cpuLoad}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${r.cpuLoad>85?"critical":r.cpuLoad>70?"warning":""}"
                  style="width: ${r.cpuLoad}%"
                ></div>
              </div>

              <div class="metric-row" style="margin-top: 0.25rem;">
                <span>Memory</span>
                <span>${r.memoryUsage}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${r.memoryUsage>85?"critical":r.memoryUsage>70?"warning":""}"
                  style="width: ${r.memoryUsage}%"
                ></div>
              </div>
            </div>

            <div class="card-footer">
              <span style="font-size: 0.75rem; color: var(--color-text-faint);">
                Ping: ${r.latencyMs}ms
              </span>
              <!-- Native Popover element -->
              <node-popover .node=${r}></node-popover>
            </div>
          </div>
        `)}
      </div>

      <!-- Native <dialog> Modal -->
      <incident-modal
        .incident=${this.activeIncident}
        @incident-resolved=${this.handleModalResolve}
      ></incident-modal>
    `:h`
        <ui-card
          title="Access Restricted"
          description="You must authenticate at the gateway before accessing real-time telemetry clusters."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `}};x.styles=w`
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
  `;D([I({context:Q,subscribe:!0}),g({attribute:!1})],x.prototype,"authStore",2);D([I({context:wt,subscribe:!0}),g({attribute:!1})],x.prototype,"telemetryStore",2);D([p()],x.prototype,"nodes",2);D([p()],x.prototype,"activeIncident",2);D([p()],x.prototype,"isAuthenticated",2);D([Vt("incident-modal")],x.prototype,"modalEl",2);x=D([$("telemetry-grid")],x);var Te=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,tt=(r,t,e,i)=>{for(var s=i>1?void 0:i?ke(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Te(t,e,s),s};let k=class extends f{constructor(){super(...arguments),this.nodes=[],this.isAuthenticated=!1,this.onTick=r=>{this.nodes=r.detail.nodes},this.onAuthChanged=r=>{var e;const t=(e=r.detail)==null?void 0:e.user;this.isAuthenticated=!!t}}connectedCallback(){super.connectedCallback(),this.syncStores()}willUpdate(r){(r.has("telemetryStore")||r.has("authStore"))&&this.syncStores()}syncStores(){this.authStore&&(this.isAuthenticated=this.authStore.isAuthenticated,this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.authStore.addEventListener("auth-changed",this.onAuthChanged)),this.telemetryStore&&(this.nodes=this.telemetryStore.getNodes(),this.telemetryStore.removeEventListener("telemetry-tick",this.onTick),this.telemetryStore.addEventListener("telemetry-tick",this.onTick))}disconnectedCallback(){super.disconnectedCallback(),this.authStore&&this.authStore.removeEventListener("auth-changed",this.onAuthChanged),this.telemetryStore&&this.telemetryStore.removeEventListener("telemetry-tick",this.onTick)}handleToggleCordon(r){var t;(t=this.telemetryStore)==null||t.toggleCordon(r)}render(){return this.isAuthenticated?h`
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
            ${this.nodes.map(r=>h`
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
    `:h`
        <ui-card
          title="Access Restricted"
          description="Node cluster topology is restricted to authenticated operators."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `}};k.styles=w`
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
  `;tt([I({context:Q,subscribe:!0}),g({attribute:!1})],k.prototype,"authStore",2);tt([I({context:wt,subscribe:!0}),g({attribute:!1})],k.prototype,"telemetryStore",2);tt([p()],k.prototype,"nodes",2);tt([p()],k.prototype,"isAuthenticated",2);k=tt([$("nodes-view")],k);var Ue=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,et=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ie(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ue(t,e,s),s};let U=class extends f{constructor(){super(...arguments),this.items=[],this.page=1,this.isLoading=!1,this.totalSimulated=18,this.categories=["audit","telemetry","network","mesh"]}connectedCallback(){super.connectedCallback(),this.loadInitialBatch()}firstUpdated(){const r=this.renderRoot.querySelector("#feed-sentinel");r&&(this.observer=new IntersectionObserver(t=>{t[0].isIntersecting&&!this.isLoading&&this.items.length<this.totalSimulated&&this.loadNextPage()},{rootMargin:"100px"}),this.observer.observe(r))}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.observer)==null||r.disconnect()}loadInitialBatch(){this.items=this.generateBatch(1,4),this.page=1}async loadNextPage(){if(this.isLoading||this.items.length>=this.totalSimulated)return;this.isLoading=!0,await new Promise(e=>setTimeout(e,250));const r=this.page+1,t=this.generateBatch(r,3);this.items=[...this.items,...t],this.page=r,this.isLoading=!1}generateBatch(r,t){const e=(r-1)*t+1;return Array.from({length:t},(i,s)=>{const o=e+s,n=this.categories[(o-1)%this.categories.length];return{id:o,title:`Telemetry Event Record #${1e3+o} (Page ${r})`,source:`mesh-node-${o%6+1}.cluster.local`,timestamp:new Date(Date.now()-(100-o)*45e3).toLocaleTimeString(),category:n}})}resetFeed(){this.loadInitialBatch()}render(){return h`
      <div class="header-bar">
        <span>Loaded: <strong>${this.items.length}</strong> / ${this.totalSimulated} events (Page ${this.page})</span>
        <button class="btn-reset" @click=${this.resetFeed}>↺ Reset Feed</button>
      </div>

      <div class="feed-container" role="feed" aria-busy=${this.isLoading} aria-label="IntersectionObserver Stream">
        ${this.items.map(r=>h`
            <article class="feed-item" role="article">
              <div class="item-meta">
                <span class="item-title">${r.title}</span>
                <span class="item-sub">${r.source} &bull; ${r.timestamp}</span>
              </div>
              <span class="tag ${r.category}">${r.category}</span>
            </article>
          `)}

        <div id="feed-sentinel" class="sentinel-box">
          ${this.isLoading?h`<span>⏳ Paging in next chunk via IntersectionObserver...</span>`:this.items.length>=this.totalSimulated?h`<span>✓ All stream events paged in</span>`:h`<span>↓ Scroll down to trigger sentinel</span>`}
        </div>
      </div>
    `}};U.styles=w`
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
  `;et([p()],U.prototype,"items",2);et([p()],U.prototype,"page",2);et([p()],U.prototype,"isLoading",2);et([p()],U.prototype,"totalSimulated",2);U=et([$("infinite-feed-demo")],U);var Re=Object.defineProperty,De=Object.getOwnPropertyDescriptor,lt=(r,t,e,i)=>{for(var s=i>1?void 0:i?De(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Re(t,e,s),s};typeof window<"u"&&(window.addEventListener("error",r=>{var t,e;if((t=r.message)!=null&&t.includes("Cannot read properties of undefined (reading 'startTime')")||r.error instanceof TypeError&&((e=r.error.message)!=null&&e.includes("'startTime'")))return r.preventDefault(),r.stopImmediatePropagation(),!0},!0),window.addEventListener("unhandledrejection",r=>{var t,e,i;((e=(t=r.reason)==null?void 0:t.message)!=null&&e.includes("Cannot read properties of undefined (reading 'startTime')")||r.reason instanceof TypeError&&((i=r.reason.message)!=null&&i.includes("'startTime'")))&&(r.preventDefault(),r.stopImmediatePropagation())},!0));let V=class extends f{constructor(){super(),window.__AETHER_SHELL__?(this.authStore=window.__AETHER_SHELL__.authStore,this.telemetryStore=window.__AETHER_SHELL__.telemetryStore,this.audioStore=window.__AETHER_SHELL__.audioStore,this.router=window.__AETHER_SHELL__.router):(this.authStore=new pt,this.telemetryStore=new mt,this.audioStore=new gt,this.router=new ye,this.router.addGuard(r=>{const t=r.split("?")[0].split("#")[0].split("/").pop()||"index.html";return(t==="dashboard.html"||t==="dashboard-nodes.html")&&!this.authStore.isAuthenticated?"index.html":!0}),window.__AETHER_SHELL__=this,window.__SHELL_BOOTED__=!0,this.telemetryStore.addEventListener("telemetry-tick",r=>{const t=r.detail.nodes;this.evaluateClusterAlarm(t)})),this.evaluateClusterAlarm(this.telemetryStore.getNodes())}evaluateClusterAlarm(r){const t=(r||[]).filter(e=>!e.isCordoned);t.some(e=>e.status==="critical")?this.audioStore.setAlertState("critical"):t.some(e=>e.status==="warning")?this.audioStore.setAlertState("warning"):this.audioStore.setAlertState("healthy")}connectedCallback(){super.connectedCallback(),this.evaluateClusterAlarm(this.telemetryStore.getNodes()),this.addEventListener("request-navigation",r=>{const t=r.detail.url;this.router.navigate(t)}),this.addEventListener("login-success",()=>{this.router.navigate("dashboard.html")}),this.authStore.addEventListener("auth-changed",()=>{this.verifyRouteProtection()}),this.verifyRouteProtection(),this.initAudioAutoplay()}initAudioAutoplay(){if(!this.audioStore.isAudioEnabled)return;this.audioStore.start().catch(()=>{});const r=()=>{this.audioStore.isAudioEnabled&&!this.audioStore.isPlaying&&this.audioStore.start().catch(()=>{}),window.removeEventListener("pointerdown",r),window.removeEventListener("keydown",r)};window.addEventListener("pointerdown",r,{once:!0,passive:!0}),window.addEventListener("keydown",r,{once:!0,passive:!0})}verifyRouteProtection(){const r=window.location.pathname.split("/").pop()||"index.html";(r==="dashboard.html"||r==="dashboard-nodes.html")&&!this.authStore.isAuthenticated&&this.router.navigate("index.html")}render(){return h`
      <div class="app-layout">
        <app-header></app-header>
        <slot></slot>
      </div>
    `}};V.styles=w`
    :host {
      display: contents;
    }
  `;lt([xt({context:Q}),g({attribute:!1})],V.prototype,"authStore",2);lt([xt({context:wt}),g({attribute:!1})],V.prototype,"telemetryStore",2);lt([xt({context:Gt}),g({attribute:!1})],V.prototype,"audioStore",2);V=lt([$("app-shell")],V);
