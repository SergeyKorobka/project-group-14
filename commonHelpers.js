(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll("section"),r=document.querySelectorAll("nav ul a");function s(){var n=window.scrollY+90;o.forEach(function(e){e.offsetTop<=n&&e.offsetTop+e.offsetHeight>n&&r.forEach(function(t){t.classList.remove("nav-active"),e.id===t.getAttribute("href").substring(1)&&t.classList.add("nav-active")})})}window.addEventListener("scroll",s)});const a=document.querySelector(".navbar");let l=0;window.addEventListener("scroll",()=>{var o=window.scrollY||window.pageYOffset;o>l&&o>732?a.classList.remove("visible"):(o<l||o<=732)&&a.classList.add("visible"),l=o<=0?0:o},{passive:!0});(()=>{const o=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=()=>{const e=o.querySelectorAll('a[href*="#"]'),t=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const i=t?"enableBodyScroll":"disableBodyScroll";if(bodyScrollLock[i](document.body),e.length!==0){if(!t){e.forEach(c=>{c.addEventListener("click",n)});return}e.forEach(c=>{c.removeEventListener("click",n)})}};r.addEventListener("click",n),s.addEventListener("click",n),window.matchMedia("(min-width: 375px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".reviews-swiper",{slidesPerView:1,loop:!0,spaceBetween:16,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:3}}});
//# sourceMappingURL=commonHelpers.js.map
