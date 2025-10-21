/* empty css                      */import{a as d,S as m,i as l}from"./assets/vendor-D3hl6BCG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="52353296-7e1352dd89e2156c2e1f9fbb2",g="https://pixabay.com/api/";async function y(r){return(await d.get(g,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const a=document.querySelector(".gallery"),x=document.querySelector(".loader"),L=new m(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250,captionPosition:"bottom"});function w(r){const s=r.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t=0,views:o=0,comments:p=0,downloads:f=0})=>`<li class="gallery-item">
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
      <p class="description-text">${p}</p>
    </li>
    <li class="description-item">
      <h3 class="description-title">Downloads</h3>
      <p class="description-text">${f}</p>
    </li>
  </ul>
</li>`).join("");a.innerHTML=s,L.refresh()}function T(){a.innerHTML=""}function c(){x.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",b);c();function b(r){r.preventDefault(),T();const s=r.target.elements["search-text"].value.trim();if(s===""){l.error($());return}y(s).then(i=>{if(i.length===0){l.info(q());return}w(i)}).catch(i=>{l.error(S(i))}).finally(()=>{c(),u.reset()})}function S(r){return{title:"Error",message:`Oops.. something goes wrong, error : ${r.status} !`,position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white",titleColor:"white"}}function q(){return{message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}function $(){return{message:"Sorry, you need to fill searсh query",position:"topRight",timeout:5e3,progressBar:!1,close:!1,icon:"",messageColor:"white"}}
//# sourceMappingURL=index.js.map
