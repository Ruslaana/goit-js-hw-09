function e(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),r=document.querySelector('input[name="amount"]'),a=parseInt(o.value),u=parseInt(n.value),l=parseInt(r.value);for(let t=0;t<l;t++){e(t+1,a).then((e=>{console.log(`Promise ${e.position} fulfilled after ${e.delay} ms`)})).catch((e=>{console.log(`Promise ${e.position} rejected after ${e.delay} ms`)})),a+=u}}));
//# sourceMappingURL=03-promises.0a12558b.js.map
