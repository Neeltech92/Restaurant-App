(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const o=[{name:"Pizza",ingredients:["pepperoni","mushrom","mozarella"],id:0,price:14,emoji:"🍕",qnty:0},{name:"Hamburger",ingredients:["beef","cheese","lettuce"],price:12,emoji:"🍔",id:1,qnty:0},{name:"Beer",ingredients:["grain, hops, yeast, water"],price:12,emoji:"🍺",id:2,qnty:0}],d=document.getElementById("menu-section"),a=document.getElementById("bill-section");let l=0;document.addEventListener("click",function(e){e.preventDefault,e.target.dataset.id?(u(Number(e.target.dataset.id)),document.querySelector(".bill-header").style.display="flex"):e.target.id&&document.getElementById(e.target.id).parentElement.classList.add("remove")});function u(e){l+=o[e].price,o[e].qnty++,m(o[e])}function m(e){let r="";o.forEach(function(i){i.qnty>0&&(r+=`
        <div class="order-list">
            <h2>${i.qnty}</h2>
            <h2>${i.name}</h2>
            <button id=${i.id} class='remove-btn'>Remove</button>
        
            
            <h2>$ ${i.qnty*i.price}</h2>
        </div>`)}),a.innerHTML=r}for(let e of o)d.innerHTML+=`
    <div class='container'>
        <div class='item-info'>
            <div class='item-graphic'>${e.emoji}</div>
            <div class='item-desc'>
                <h2>${e.name}</h2>
                <p>${e.ingredients}</p>
                <h3>$ ${e.price}</h3>
            </div>
        </div>
        <button class='increment-btn' id='increment-btn' data-id='${e.id}'>+</button>
    </div>
    `;
