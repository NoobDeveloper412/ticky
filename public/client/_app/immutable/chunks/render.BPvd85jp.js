import{a7 as b,_ as m,a8 as O,D as N,Q as H,a9 as W,R as q,H as B,aa as k,ab as P,ac as Y,ad as $,ae as T,M as w,L as D,I as z,m as v,af as G,ag as Q,ah as U,ai as x,aj as F,ak as J,al as K,j as X,p as Z,l as L,q as ee,c as te}from"./runtime.DVN_sD8T.js";import{b as re}from"./disclose-version.D8aVZS6W.js";function fe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ae=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function _e(e){return ae.includes(e)}const ne={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function he(e){return e=e.toLowerCase(),ne[e]??e}const oe=["touchstart","touchmove"];function ie(e){return oe.includes(e)}function se(e){var t=O,a=N;b(null),m(null);try{return e()}finally{b(t),m(a)}}const V=new Set,S=new Set;function ue(e,t,a,s){function o(r){if(s.capture||y.call(t,r),!r.cancelBubble)return se(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{t.addEventListener(e,o,s)}):t.addEventListener(e,o,s),o}function pe(e,t,a,s,o){var r={capture:s,passive:o},u=ue(e,t,a,r);(t===document.body||t===window||t===document)&&H(()=>{t.removeEventListener(e,u,r)})}function ve(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var a of S)a(e)}function y(e){var R;var t=this,a=t.ownerDocument,s=e.type,o=((R=e.composedPath)==null?void 0:R.call(e))||[],r=o[0]||e.target,u=0,_=e.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var h=o.indexOf(t);if(h===-1)return;d<=h&&(u=d)}if(r=o[u]||e.target,r!==t){q(e,"currentTarget",{configurable:!0,get(){return r||a}});var E=O,c=N;b(null),m(null);try{for(var n,i=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var f=r["__"+s];if(f!==void 0&&!r.disabled)if(B(f)){var[j,...C]=f;j.apply(r,[e,...C])}else f.call(r,e)}catch(g){n?i.push(g):n=g}if(e.cancelBubble||l===t||l===null)break;r=l}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{e.__root=t,delete e.currentTarget,b(E),m(c)}}}let I=!0;function ye(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ce(e,t){return M(e,t)}function ge(e,t){k(),t.intro=t.intro??!1;const a=t.target,s=L,o=v;try{for(var r=P(a);r&&(r.nodeType!==8||r.data!==Y);)r=$(r);if(!r)throw T;w(!0),D(r),z();const u=M(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==G)throw Q(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&U(),k(),x(a),w(!1),ce(e,t);throw u}finally{w(s),D(o)}}const p=new Map;function M(e,{target:t,anchor:a,props:s={},events:o,context:r,intro:u=!0}){k();var _=new Set,d=c=>{for(var n=0;n<c.length;n++){var i=c[n];if(!_.has(i)){_.add(i);var l=ie(i);t.addEventListener(i,y,{passive:l});var f=p.get(i);f===void 0?(document.addEventListener(i,y,{passive:l}),p.set(i,1)):p.set(i,f+1)}}};d(F(V)),S.add(d);var h=void 0,E=J(()=>{var c=a??t.appendChild(K());return X(()=>{if(r){Z({});var n=te;n.c=r}o&&(s.$$events=o),L&&re(c,null),I=u,h=e(c,s)||{},I=!0,L&&(N.nodes_end=v),r&&ee()}),()=>{var l;for(var n of _){t.removeEventListener(n,y);var i=p.get(n);--i===0?(document.removeEventListener(n,y),p.delete(n)):p.set(n,i)}S.delete(d),c!==a&&((l=c.parentNode)==null||l.removeChild(c))}});return A.set(h,E),h}let A=new WeakMap;function we(e,t){const a=A.get(e);return a?(A.delete(e),a(t)):Promise.resolve()}export{_e as a,I as b,ue as c,ve as d,pe as e,ge as h,fe as i,ce as m,he as n,ye as s,we as u};
