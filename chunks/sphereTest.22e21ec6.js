import{L as C,l as b,O as E,R as M,u as P,e as v,D as y}from"./stats.module.023fcc8e.js";import{S,P as L,T as G,C as I,av as T,a7 as x}from"./vendor.4a9eae3d.js";import{m as D}from"./makeCommonGUI.3b50ebcc.js";const j=[],k=v.Dirlight,e=new C;e.renderWhenOffFocus=!1;e.envMapIntensity=1;e.bounces=3;document.body.appendChild(e.domElement);const c=!0;let m=!1;const{initStats:z,initGUI:R,initCameraDebugInfo:F}=D();e.loadingCallback={onProgress:n=>{console.log(n)},onComplete:n=>{m||R(c,e),m=!0,console.log(n)}};const s=z(c),d=F(c);let p=null,i=null;const a=new S;b(j,a);async function O(){const n="/images/alpha.png",o=await new Promise(f=>{new G().load(n,f)}),r=new y({color:new I(1,1,1),roughness:.5,metalness:0,ior:1.5,map:o}),g=new T(15,128,64),w=new x(g,r);a.add(w)}const t=new L(45,window.innerWidth/window.innerHeight,.001,1e3),l=new E(t,e.domElement);l.screenSpacePanning=!0;async function U(){{const n=new M,o=await new Promise(r=>{n.load(k,r)});a.environment=o}await O(),P(t,l,a),t.position.y=0,t.position.z=45,e.buildScene(a,t).then(()=>{h()})}function u(){if(e.domElement.parentElement){const n=e.domElement.parentElement.clientWidth,o=e.domElement.parentElement.clientHeight;e.setSize(n,o),t.aspect=n/o,t.updateProjectionMatrix()}}window.addEventListener("resize",u);u();function h(n){l.update(),s&&s.begin(),e.render(a,t),s&&s.end(),d&&(i=e.getTotalSamples(),p!=i&&(d.innerText=`Samples: ${i}`,p=i)),requestAnimationFrame(h)}U();