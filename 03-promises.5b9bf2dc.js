!function(){function e(e,n){return new Promise((function(t,o){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]'),c=parseInt(t.value),u=parseInt(o.value),r=parseInt(a.value),i=0;i<r;i++){e(i+1,c).then((function(e){console.log("Promise ".concat(e.position," fulfilled after ").concat(e.delay," ms"))})).catch((function(e){console.log("Promise ".concat(e.position," rejected after ").concat(e.delay," ms"))})),c+=u}}))}();
//# sourceMappingURL=03-promises.5b9bf2dc.js.map
