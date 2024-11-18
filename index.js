import{i as s,S as f}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const m="47125427-ad9e927b7d4f8d8b2ea4266bf";function h(r){return console.log("queryUser",r),fetch(`https://pixabay.com/api/?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)}const l=document.querySelector(".list");function p(r){l.insertAdjacentHTML("beforeend",v(r.hits))}function g(){l.innerHTML=""}function v(r){return r.map(({previewURL:i,tags:n,likes:t,views:e,downloads:o,comments:a,largeImageURL:u})=>`<li>
            <a href="${u}"><img src = "${i}" alt = "${n}" width = "300px"></a>      
             <div class = "bottomLine">

                <div class = "col">
                    <div class = "name">Likes</div>
                    <div class = "value">${t}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Views</div>
                    <div class = "value">${e}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Comments</div>
                    <div class = "value">${a}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Downloads</div>
                    <div class = "value">${o}</div>
                </div>

            </div>
        </li>`).join("")}const y=document.querySelector(".inputSearch");document.querySelector(".btnSearch");const d=document.querySelector(".loading-text"),L=document.querySelector(".search-form");L.addEventListener("submit",S);function S(r){r.preventDefault();const n=new FormData(r.target).get("inputSearch").trim();if(!n){s.warning({title:"Caution",message:"You forgot to write search. Please try again!",position:"topRight"});return}console.log(n),w(),g(),b(),h(n).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(c(),t.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t),new f(".list a",{captionDelay:250,captionData:"alt",nav:!0})}).catch(t=>{c(),console.log("error",t),s.error({title:"Error",message:"Something go wrong. Please try again!",position:"topRight"})})}function b(){d.innerHTML="Loading images, please wait..."}function c(){d.innerHTML=""}function w(){y.value=""}
//# sourceMappingURL=index.js.map
