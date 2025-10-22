/* empty css                      */import{a as m,S as h,i as a}from"./assets/vendor-D3hl6BCG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="52353296-7e1352dd89e2156c2e1f9fbb2",y="https://pixabay.com/api/";async function L(r){return(await m.get(y,{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),w=new h(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250,captionPosition:"bottom"});function b(r){const s=r.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t=0,views:o=0,comments:d=0,downloads:f=0})=>`<li class="gallery-item">
  <a href="${n}" class="link" target="_blank">
  <img src="${i}" alt="${e}" width="360" /></a>
  <ul class="description-list">
    <li class="description-item">
      <h3 class="description-title">Likes</h3>
      <p class="description-text">${t}</p>
    </li>
    <li class="description-item">
      <h3 class="description-title">Views</h3>
      <p class="description-text">${o}</p>
    </li>
    <li class="description-item">
      <h3 class="description-title">Comments</h3>
      <p class="description-text">${d}</p>
    </li>
    <li class="description-item">
      <h3 class="description-title">Downloads</h3>
      <p class="description-text">${f}</p>
    </li>
  </ul>
</li>`).join("");l.innerHTML=s,w.refresh()}function x(){l.innerHTML=""}function S(){c.classList.remove("is-hidden")}function u(){c.classList.add("is-hidden")}const p=document.querySelector(".form");p.addEventListener("submit",q);u();function q(r){r.preventDefault(),x();const s=r.target.elements["search-text"].value.trim();if(s===""){a.error(P());return}S(),L(s).then(i=>{if(i.length===0){a.info(O());return}b(i)}).catch(i=>{a.error($(i))}).finally(()=>{u(),p.reset()})}function $(r){return{title:"Error",message:`Oops.. something goes wrong, error : ${r.status} !`,position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white",titleColor:"white"}}function O(){return{message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function P(){return{message:"Sorry, you need to fill search query",position:"topRight",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}
//# sourceMappingURL=index.js.map
