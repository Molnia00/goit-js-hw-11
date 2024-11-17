import{i as u,S as f}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m="47125427-ad9e927b7d4f8d8b2ea4266bf";function v(i){return console.log("queryUser",i),fetch(`https://pixabay.com/api/?key=${m}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`)}const c=document.querySelector(".list");function h(i){c.insertAdjacentHTML("beforeend",g(i.hits))}function p(){c.innerHTML=""}function g(i){return i.map(({previewURL:t,tags:s,likes:n,views:e,downloads:o,comments:r,largeImageURL:d})=>`<li>
            <a href="${d}"><img src = "${t}" alt = "${s}" width = "300px"></a>      
             <div class = "bottomLine">

                <div class = "col">
                    <div class = "name">Likes</div>
                    <div class = "value">${n}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Views</div>
                    <div class = "value">${e}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Comments</div>
                    <div class = "value">${r}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Downloads</div>
                    <div class = "value">${o}</div>
                </div>

            </div>
        </li>`).join("")}const a=document.querySelector(".inputSearch"),y=document.querySelector(".btnSearch"),l=document.querySelector(".loading-text");y.addEventListener("click",L);function L(){const i=a.value;console.log(i),w(),p(),b(),v(i).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(S(),t.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t),new f(".list a",{captionDelay:250,captionData:"alt",nav:!0})}).catch(t=>{console.log("error",t)})}function b(){l.innerHTML="Loading images, please wait..."}function S(){l.innerHTML=""}function w(){a.value=""}
//# sourceMappingURL=index.js.map
