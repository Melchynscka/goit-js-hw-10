import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".form");t&&t.addEventListener("submit",n=>{n.preventDefault();const s=new FormData(t),o=parseInt(s.get("delay"),10),r=s.get("state");new Promise((e,a)=>{setTimeout(()=>{r==="fulfilled"?e(o):a(o)},o)}).then(e=>{i.success({title:"✅ Успіх",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"❌ Відмова",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})})});
//# sourceMappingURL=commonHelpers2.js.map
