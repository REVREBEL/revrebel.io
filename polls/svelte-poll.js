(()=>{
    const ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function l(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerpolicy&&(f.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?f.credentials="include":s.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(s){if(s.ep)return;s.ep=!0;const f=l(s);fetch(s.href,f)}};ze();function ie(){}function Re(e){return e()}function Ge(){return Object.create(null)}function K(e){e.forEach(Re)}function De(e){return typeof e=="function"}function Je(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Qe(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function me(e,t,l){e.insertBefore(t,l||null)}function oe(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function a(e){return document.createTextNode(e)}function y(){return a(" ")}function le(e,t,l,r){return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)}function c(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Ue(e){return Array.from(e.childNodes)}function w(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t,l,r){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,r?"important":"")}let Ae;function H(e){Ae=e}const G=[],He=[],se=[],Ke=[],Xe=Promise.resolve();let be=!1;function Ye(){be||(be=!0,Xe.then(We))}function ye(e){se.push(e)}const we=new Set;let ne=0;function We(){const e=Ae;do{for(;ne<G.length;){const t=G[ne];ne++,H(t),Ze(t.$$)}for(H(null),G.length=0,ne=0;He.length;)He.pop()();for(let t=0;t<se.length;t+=1){const l=se[t];we.has(l)||(we.add(l),l())}se.length=0}while(G.length);for(;Ke.length;)Ke.pop()();be=!1,we.clear(),H(e)}function Ze(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ye)}}const xe=new Set;function et(e,t){e&&e.i&&(xe.delete(e),e.i(t))}function tt(e,t,l,r){const{fragment:s,on_mount:f,on_destroy:p,after_update:v}=e.$$;s&&s.m(t,l),r||ye(()=>{const _=f.map(Re).filter(De);p?p.push(..._):K(_),e.$$.on_mount=[]}),v.forEach(ye)}function lt(e,t){const l=e.$$;l.fragment!==null&&(K(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function nt(e,t){e.$$.dirty[0]===-1&&(G.push(e),Ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ot(e,t,l,r,s,f,p,v=[-1]){const _=Ae;H(e);const o=e.$$={fragment:null,ctx:null,props:f,update:ie,not_equal:s,bound:Ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:Ge(),dirty:v,skip_bound:!1,root:t.target||_.$$.root};p&&p(o.root);let b=!1;if(o.ctx=l?l(e,t.props||{},(h,g,...m)=>{const k=m.length?m[0]:g;return o.ctx&&s(o.ctx[h],o.ctx[h]=k)&&(!o.skip_bound&&o.bound[h]&&o.bound[h](k),b&&nt(e,h)),g}):[],o.update(),b=!0,K(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const h=Ue(t.target);o.fragment&&o.fragment.l(h),h.forEach(oe)}else o.fragment&&o.fragment.c();t.intro&&et(e.$$.fragment),tt(e,t.target,t.anchor,t.customElement),We()}H(_)}class st{$destroy(){lt(this,1),this.$destroy=ie}$on(t,l){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(l),()=>{const s=r.indexOf(l);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(e){let t,l,r,s=e[0][0].question+"",f,p,v,_,o,b,h,g,m,k=e[0][0].answerA+"",N,R,$=e[0][0].votesA+"",C,W,ke,S,z,Be,E,P,D=e[0][0].answerB+"",re,$e,J=e[0][0].votesB+"",ae,Ee,Pe,V,Q,ue,F,A,fe,U=e[0][1].question+"",ce,Oe,j,qe,de,Le,Me,O,q,X=e[0][1].answerA+"",pe,Ne,Y=e[0][1].votesA+"",ve,Ce,Se,T,Z,Ve,L,M,x=e[0][1].answerB+"",_e,je,ee=e[0][1].votesB+"",he,Te,Ie,I,te,ge,Fe;return{c(){t=d("div"),l=d("div"),r=d("h4"),f=a(s),p=y(),v=d("div"),_=a("Total votes: ("),o=a(e[2]),b=a(")"),h=y(),g=d("div"),m=d("div"),N=a(k),R=a(" ("),C=a($),W=a(")"),ke=y(),S=d("div"),Be=y(),E=d("div"),P=d("div"),re=a(D),$e=a(" ("),ae=a(J),Ee=a(")"),Pe=y(),V=d("div"),ue=y(),F=d("div"),A=d("div"),fe=d("h4"),ce=a(U),Oe=y(),j=d("div"),qe=a("Total votes: ("),de=a(e[1]),Le=a(")"),Me=y(),O=d("div"),q=d("div"),pe=a(X),Ne=a(" ("),ve=a(Y),Ce=a(")"),Se=y(),T=d("div"),Ve=y(),L=d("div"),M=d("div"),_e=a(x),je=a(" ("),he=a(ee),Te=a(")"),Ie=y(),I=d("div"),c(v,"class","pole-total-text"),c(m,"class","pole-bar-text"),c(S,"class",z="pole-progress "+(e[6]>e[5]?"winning":"losing")),B(S,"width",e[6]+"%"),c(g,"class","pole-bar"),c(P,"class","pole-bar-text"),c(V,"class",Q="pole-progress "+(e[5]>e[6]?"winning":"losing")),B(V,"width",e[5]+"%"),c(E,"class","pole-bar"),c(l,"class","card"),c(t,"class","_6-col"),c(j,"class","pole-total-text"),c(q,"class","pole-bar-text"),c(T,"class",Z="pole-progress "+(e[4]>e[3]?"winning":"losing")),B(T,"width",e[4]+"%"),c(O,"class","pole-bar"),c(M,"class","pole-bar-text"),c(I,"class",te="pole-progress "+(e[3]>e[4]?"winning":"losing")),B(I,"width",e[3]+"%"),c(L,"class","pole-bar"),c(A,"class","card"),c(F,"class","_6-col _6-col-last")},m(i,u){me(i,t,u),n(t,l),n(l,r),n(r,f),n(l,p),n(l,v),n(v,_),n(v,o),n(v,b),n(l,h),n(l,g),n(g,m),n(m,N),n(m,R),n(m,C),n(m,W),n(g,ke),n(g,S),n(l,Be),n(l,E),n(E,P),n(P,re),n(P,$e),n(P,ae),n(P,Ee),n(E,Pe),n(E,V),me(i,ue,u),me(i,F,u),n(F,A),n(A,fe),n(fe,ce),n(A,Oe),n(A,j),n(j,qe),n(j,de),n(j,Le),n(A,Me),n(A,O),n(O,q),n(q,pe),n(q,Ne),n(q,ve),n(q,Ce),n(O,Se),n(O,T),n(A,Ve),n(A,L),n(L,M),n(M,_e),n(M,je),n(M,he),n(M,Te),n(L,Ie),n(L,I),ge||(Fe=[le(g,"click",e[8]),le(E,"click",e[9]),le(O,"click",e[10]),le(L,"click",e[11])],ge=!0)},p(i,[u]){u&1&&s!==(s=i[0][0].question+"")&&w(f,s),u&4&&w(o,i[2]),u&1&&k!==(k=i[0][0].answerA+"")&&w(N,k),u&1&&$!==($=i[0][0].votesA+"")&&w(C,$),u&96&&z!==(z="pole-progress "+(i[6]>i[5]?"winning":"losing"))&&c(S,"class",z),u&64&&B(S,"width",i[6]+"%"),u&1&&D!==(D=i[0][0].answerB+"")&&w(re,D),u&1&&J!==(J=i[0][0].votesB+"")&&w(ae,J),u&96&&Q!==(Q="pole-progress "+(i[5]>i[6]?"winning":"losing"))&&c(V,"class",Q),u&32&&B(V,"width",i[5]+"%"),u&1&&U!==(U=i[0][1].question+"")&&w(ce,U),u&2&&w(de,i[1]),u&1&&X!==(X=i[0][1].answerA+"")&&w(pe,X),u&1&&Y!==(Y=i[0][1].votesA+"")&&w(ve,Y),u&24&&Z!==(Z="pole-progress "+(i[4]>i[3]?"winning":"losing"))&&c(T,"class",Z),u&16&&B(T,"width",i[4]+"%"),u&1&&x!==(x=i[0][1].answerB+"")&&w(_e,x),u&1&&ee!==(ee=i[0][1].votesB+"")&&w(he,ee),u&24&&te!==(te="pole-progress "+(i[3]>i[4]?"winning":"losing"))&&c(I,"class",te),u&8&&B(I,"width",i[3]+"%")},i:ie,o:ie,d(i){i&&oe(t),i&&oe(ue),i&&oe(F),ge=!1,K(Fe)}}}function rt(e,t,l){let r,s,f,p,v,_,o=[{id:1,question:"How do you spend your weekends?",answerA:"Catching up on sleep",answerB:"Going on adventures",votesA:12,votesB:8},{id:2,question:"Who will win the Open",answerA:"Rory Mcllroy",answerB:"Cam Smith",votesA:5,votesB:9}];const b=(N,R)=>{let $=[...o],C=$.find(W=>W.id===R);N==="a"&&C.votesA++,N==="b"&&C.votesB++,l(0,o=$)},h=()=>b("a",o[0].id),g=()=>b("b",o[0].id),m=()=>b("a",o[1].id),k=()=>b("b",o[1].id);return e.$$.update=()=>{e.$$.dirty&1&&l(2,r=o[0].votesA+o[0].votesB),e.$$.dirty&1&&l(1,s=o[1].votesA+o[1].votesB),e.$$.dirty&5&&l(6,f=Math.floor(100/r*o[0].votesA)),e.$$.dirty&5&&l(5,p=Math.floor(100/r*o[0].votesB)),e.$$.dirty&3&&l(4,v=Math.floor(100/s*o[1].votesA)),e.$$.dirty&3&&l(3,_=Math.floor(100/s*o[1].votesB))},[o,s,r,_,v,p,f,b,h,g,m,k]}class at extends st{constructor(t){super(),ot(this,t,rt,it,Je,{})}}new at({target:document.getElementById("svelte-app")});
})();