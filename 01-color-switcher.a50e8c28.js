!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body,n=null;t.addEventListener("click",(function(){n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));a.style.backgroundColor=t}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.a50e8c28.js.map
