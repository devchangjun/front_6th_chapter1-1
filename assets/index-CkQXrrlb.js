(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=`/front_6th_chapter1-1`,a=(e=window.location.pathname)=>e.startsWith(i)?e.slice(21)||`/`:e,o=e=>i+e;function s(e){return e.replace(/^\/+/g,``).replace(/\/+$/g,``).split(`/`).filter(Boolean)}function c(e){return e&&e[0]===`:`}function l(e,t,n={}){for(let r of t){let t=s(r.path);if(t.length>e.length)continue;let i=!0,a={...n};for(let n=0;n<t.length;n++){let r=t[n];if(c(r)){let t=r.slice(1);a[t]=e[n]}else if(r!==e[n]){i=!1;break}}if(!i)continue;let o=e.slice(t.length);if(o.length===0)return{node:r,params:a};if(r.children&&r.children.length>0){let e=l(o,r.children,a);if(e)return e}}return null}function u(){let e=[],t=new Set,n=null,r=!1,i=(t,n,r=null,i=null)=>{e.push({path:t,component:n,loader:r,children:i})},c=e=>{if(!Array.isArray(e))return;let t=e=>{let{path:t,component:n,loader:r=null,children:i=null}=e;return{path:t,component:n||e.view,loader:r,children:i}};e.forEach(e=>{if(!e||!e.path)return;let n=t(e);i(n.path,n.component,n.loader,n.children)})},u=t=>{let n=s(a(t)),r=l(n,e);return r},d=()=>{t.forEach(e=>{try{e(n)}catch(e){console.error(`[Router] listener error`,e)}})},f=async()=>{if(r)return;let t=window.location.pathname,i=u(t);if(i){let{node:e,params:r}=i,o=null;if(typeof e.loader==`function`)try{o=await e.loader(r)}catch(e){return console.error(`[Router] loader error`,e),p(`/404`,{replace:!0})}n={route:e,params:r,pathname:a(t),data:o}}else{let r=e.find(e=>e.path===`/404`)||{path:`/404`,component:null};n={route:r,params:{},pathname:a(t),data:null}}d()},p=(e,{replace:t=!1}={})=>{if(r){console.warn(`Router is destroyed. Cannot navigate.`);return}let n=o(e);t?window.history.replaceState({},``,n):window.history.pushState({},``,n),f()},m=()=>{r||f()};window.addEventListener(`popstate`,m);let h=e=>r?()=>{}:(t.add(e),()=>t.delete(e)),g=()=>f(),_=()=>{r=!0,v._isDestroyed=!0,window.removeEventListener(`popstate`,m),t.clear(),e.length=0,n=null},v={addRoute:i,addRoutes:c,navigate:p,subscribe:h,init:g,destroy:_,_isDestroyed:!1};return v}function d(e=[]){let t=u();return e.length>0&&t.addRoutes(e),t}let f=null;function p(e){f&&f.destroy(),f=e,window.navigateTo||(window.navigateTo=(e,t)=>{f&&!f._isDestroyed&&f.navigate(e,t)})}const m=()=>{let e=new URLSearchParams(window.location.search),t={};for(let[n,r]of e.entries())t[n]=decodeURIComponent(r);return t},h=(e,{replace:t=!1}={})=>{let n=new URLSearchParams;Object.entries(e).forEach(([e,t])=>{t!==``&&t!=null&&n.set(e,t)});let r=`${window.location.pathname}${n.toString()?`?${n.toString()}`:``}`;t?window.history.replaceState({},``,r):window.history.pushState({},``,r)};function g({searchValue:e=``,categories:t=[],selectedCategory1:n=``,selectedCategory2:r=``,selectedSort:i=`price_asc`,selectedLimit:a=`20`,isLoading:o=!1}){let s=()=>{let e=`
      <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
    `;return n&&(e+=`
        <span class="text-xs text-gray-500">&gt;</span>
        <button
          data-breadcrumb="category1"
          data-category1="${n}"
          class="text-xs hover:text-blue-800 hover:underline"
        >
          ${n}
        </button>
      `),r&&(e+=`
        <span class="text-xs text-gray-500">&gt;</span>
        <span class="text-xs text-gray-600 cursor-default">${r}</span>
      `),e},c=()=>{if(o)return`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`;if(n){let e=t[n]?Object.keys(t[n]):[];return e.map(e=>`
            <button
              data-category1="${n}"
              data-category2="${e}"
              class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                ${r===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}"
            >
              ${e}
            </button>
          `).join(``)}else{let e=Array.isArray(t)?t:Object.keys(t||{});return e.map(e=>`
            <button
              data-category1="${e}"
              class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                ${n===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}"
            >
              ${e}
            </button>
          `).join(``)}},l=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}],u=[{value:`10`,label:`10개`},{value:`20`,label:`20개`},{value:`50`,label:`50개`},{value:`100`,label:`100개`}];return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색 입력 -->
      <div class="mb-4">
        <div class="relative">
          <input
            type="text"
            id="search-input"
            placeholder="상품명을 검색해보세요..."
            value="${e}"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            ${s()}
          </div>
          <div class="flex flex-wrap gap-2">${c()}</div>
        </div>

        <!-- 정렬 및 개수 필터 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 개수 필터 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select
              id="limit-select"
              class="text-sm border border-gray-300 rounded px-2 py-1 
                     focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              ${u.map(e=>`
                  <option value="${e.value}" ${a===e.value?`selected`:``}>
                    ${e.label}
                  </option>
                `).join(``)}
            </select>
          </div>

          <!-- 정렬 필터 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select
              id="sort-select"
              class="text-sm border border-gray-300 rounded px-2 py-1
                     focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              ${l.map(e=>`
                  <option value="${e.value}" ${i===e.value?`selected`:``}>
                    ${e.label}
                  </option>
                `).join(``)}
            </select>
          </div>
        </div>
      </div>
    </div>
  `}function _({product:e}){let{productId:t,image:n,title:r,lprice:i,mallName:a=``,brand:o=``}=e;return`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${t}"
    >
      <!-- 상품 이미지 -->
      <div
        class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image"
        data-product-link="${t}"
      >
        <img
          src="${n}"
          alt="${r}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3" data-product-link="${t}">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${r}</h3>
          <p class="text-xs text-gray-500 mb-2">${o||a}</p>
          <p class="text-lg font-bold text-gray-900">${parseInt(i).toLocaleString()}원</p>
        </div>
        <!-- 장바구니 버튼 -->
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
               hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${t}"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  `}function v({count:e=4}){let t=Array.from({length:e},()=>`
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-3">
          <div class="h-4 bg-gray-200 rounded mb-2"></div>
          <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    `).join(``);return` <div class="grid grid-cols-2 gap-4 mb-6">${t}</div> `}function ee({message:e=`상품을 불러오는 중...`}){return`
    <div class="text-center py-4">
      <div class="inline-flex items-center">
        <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-sm text-gray-600">${e}</span>
      </div>
    </div>
  `}function te({products:e=[],totalCount:t=0,isLoading:n=!1,hasMore:r=!0}){let i=()=>n&&e.length===0?v({count:4}):e.length===0?`
        <div class="col-span-2 text-center py-8 text-gray-500">
          상품이 없습니다.
        </div>
      `:`
      <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
        ${e.map(e=>_({product:e})).join(``)}
      </div>
    `,a=()=>n&&e.length>0?ee({message:`상품을 불러오는 중...`}):!r&&e.length>0?`
        <div class="text-center py-4 text-sm text-gray-500">
          모든 상품을 확인했습니다
        </div>
      `:``;return`
    <div class="mb-6">
      <div>
        ${t>0?`
          <div class="mb-4 text-sm text-gray-600">
            총 <span class="font-medium text-gray-900">${t}개</span>의 상품
          </div>
        `:``}
        
        ${i()}
        ${a()}
      </div>
    </div>
  `}function ne({cartCount:e=0,showBackButton:t=!1,title:n=`쇼핑몰`}){let r=t?`
        <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      `:``,i=e>0?`
          <span
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
          >
            ${e}
          </span>
        `:``;return`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            ${r}
            <h1 class="text-xl font-bold text-gray-900">
              <a href="/" data-link="">${n}</a>
            </h1>
          </div>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              ${i}
            </button>
          </div>
        </div>
      </div>
    </header>
  `}function re(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}function y({children:e,cartCount:t=0,showBackButton:n=!1,title:r=`상품 상세`}){return`
    <div class="min-h-screen bg-gray-50">
      ${ne({cartCount:t,showBackButton:n,title:r})}
      
      <main class="max-w-md mx-auto px-4 py-4">
        ${e}
      </main>
      
      ${re()}
    </div>
  `}function ie(){return`
    <div class="flex-1 flex items-center justify-center p-8">
      <div class="text-center">
        <div class="text-gray-400 mb-4">
          <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
        <p class="text-gray-600">원하는 상품을 담아보세요!</p>
      </div>
    </div>
  `}function ae({product:e,quantity:t=1,isSelected:n=!1}){let{productId:r,image:i,title:a,lprice:o}=e,s=parseInt(o)*t;return`
    <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${r}">
      <!-- 선택 체크박스 -->
      <label class="flex items-center mr-3">
        <input type="checkbox" 
               ${n?`checked`:``} 
               class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
                      focus:ring-blue-500" 
               data-product-id="${r}">
      </label>
      
      <!-- 상품 이미지 -->
      <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
        <img src="${i}" 
             alt="${a}" 
             class="w-full h-full object-cover cursor-pointer cart-item-image" 
             data-product-id="${r}">
      </div>
      
      <!-- 상품 정보 -->
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" 
            data-product-id="${r}">
          ${a}
        </h4>
        <p class="text-sm text-gray-600 mt-1">
          ${o}원
        </p>
        
        <!-- 수량 조절 -->
        <div class="flex items-center mt-2">
          <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center 
                         border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" 
                  data-product-id="${r}">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <input type="number" 
                 value="${t}" 
                 min="1" 
                 class="quantity-input w-12 h-7 text-center text-sm border-t border-b 
                        border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" 
                 disabled 
                 data-product-id="${r}">
          <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center 
                         border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" 
                  data-product-id="${r}">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 가격 및 삭제 -->
      <div class="text-right ml-3">
        <p class="text-sm font-medium text-gray-900">
          ${s.toLocaleString()}원
        </p>
        <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" 
                data-product-id="${r}">
          삭제
        </button>
      </div>
    </div>
  `}function oe({cartItems:e=[],selectedItems:t=[],totalPrice:n=0,selectedPrice:r=0}){let i=e.length,a=t.length,o=i>0&&a===i,s=()=>i===0?ie():`
      <!-- 전체 선택 섹션 -->
      <div class="p-4 border-b border-gray-200 bg-gray-50">
        <label class="flex items-center text-sm text-gray-700">
          <input type="checkbox" 
                 id="cart-modal-select-all-checkbox" 
                 ${o?`checked`:``}
                 class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
          전체선택 (${i}개)
        </label>
      </div>    
      
      <!-- 아이템 목록 -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-4 space-y-4">
          ${e.map(e=>ae({product:e.product,quantity:e.quantity,isSelected:t.includes(e.product.productId)})).join(``)}
        </div>
      </div>
    `,c=()=>i===0?``:`
      <!-- 하단 액션 -->
      <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        ${a>0?`
          <div class="flex justify-between items-center mb-3 text-sm">
            <span class="text-gray-600">선택한 상품 (${a}개)</span>
            <span class="font-medium">${r.toLocaleString()}원</span>
          </div>
        `:``}
        
        <!-- 총 금액 -->
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-bold text-gray-900">총 금액</span>
          <span class="text-xl font-bold text-blue-600">${n.toLocaleString()}원</span>
        </div>
        
        <!-- 액션 버튼들 -->
        <div class="space-y-2">
          ${a>0?`
            <button id="cart-modal-remove-selected-btn" 
                    class="w-full bg-red-600 text-white py-2 px-4 rounded-md 
                           hover:bg-red-700 transition-colors text-sm">
              선택한 상품 삭제 (${a}개)
            </button>
          `:``}
          
          <div class="flex gap-2">
            <button id="cart-modal-clear-cart-btn" 
                    class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md 
                           hover:bg-gray-700 transition-colors text-sm">
              전체 비우기
            </button>
            <button id="cart-modal-checkout-btn" 
                    class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md 
                           hover:bg-blue-700 transition-colors text-sm">
              구매하기
            </button>
          </div>
        </div>
      </div>
    `;return`
    <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
      <div class="cart-modal relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
        <!-- 헤더 -->
        <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            장바구니
            ${i>0?`<span class="text-sm font-normal text-gray-600 ml-1">(${i})</span>`:``}
          </h2>
          
          <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- 컨텐츠 -->
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          ${s()}
        </div>
        
        ${c()}
      </div>
    </div>
  `}async function b(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function x(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function se(){let e=await fetch(`/api/categories`);return await e.json()}function ce({type:e=`success`,message:t=``,showCloseButton:n=!0}){let r=()=>{switch(e){case`success`:return`bg-green-600 text-white`;case`info`:return`bg-blue-600 text-white`;case`error`:return`bg-red-600 text-white`;default:return`bg-green-600 text-white`}},i=()=>{switch(e){case`success`:return`
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        `;case`info`:return`
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
         </svg>
        `;case`error`:return`
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        `;default:return``}},a=n?`
    <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  `:``;return`
    <div class="${r()} px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        ${i()}
      </div>
      <p class="text-sm font-medium">${t}</p>
      ${a}
    </div>
  `}const S=`shopping_cart`;let C=[];function w(){localStorage.setItem(S,JSON.stringify(C))}function le(){try{let e=localStorage.getItem(S);e&&(C=JSON.parse(e))}catch{C=[]}}le();function T(){return A(),C.length}function E(){return C.filter(e=>e.selected).map(e=>e.product.productId)}function ue(){return C.reduce((e,t)=>e+parseInt(t.product.lprice)*t.quantity,0)}function de(){return C.reduce((e,t)=>e+(t.selected?parseInt(t.product.lprice)*t.quantity:0),0)}async function D(e,t=1){A(),j(`장바구니에 추가되었습니다`);let n=C.find(t=>t.product.productId===e);if(n){n.quantity+=t,w(),I(),M();return}try{let n=await x(e);O(n,t),M()}catch(e){console.error(`[Cart] Failed to fetch product info`,e)}}function O(e,t=1){A();let n=C.find(t=>t.product.productId===e.productId);n?n.quantity+=t:C.push({product:e,quantity:t,selected:!1}),w(),I(),j(`장바구니에 추가되었습니다`),M()}function k(e,t){A();let n=C.find(t=>t.product.productId===e);n&&(n.quantity=t<1?1:t,w())}function fe(e){A(),C=C.filter(t=>t.product.productId!==e),w(),I()}async function pe(){A(),C=[],w(),await I(),j(`장바구니가 비워졌습니다`,`info`)}function me(e){A();let t=C.find(t=>t.product.productId===e);t&&(t.selected=!t.selected,w(),I())}async function he(e){A(),C.forEach(t=>{t.selected=e}),w(),await I()}function A(){try{let e=localStorage.getItem(S);C=e?JSON.parse(e):[]}catch{C=[]}}function j(e,t=`success`){let n=document.querySelector(`.toast-message`);n&&n.remove();let r=document.createElement(`div`);r.className=`toast-message fixed top-4 left-1/2 -translate-x-1/2 z-50`,r.innerHTML=ce({type:t,message:e,showCloseButton:!1}),document.body.appendChild(r),setTimeout(()=>{r.remove()},3e3)}function M(){let e=document.querySelector(`#cart-icon-btn`);if(!e)return;let t=e.querySelector(`span`),n=T();n>0?(t||(t=document.createElement(`span`),t.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,e.appendChild(t)),t.textContent=n.toString()):t&&t.remove()}let N=null;function P(e){e.key===`Escape`&&R()}function F(e){if(e.stopPropagation(),e.target.closest(`#cart-modal-close-btn`)){R();return}let t=e.target.closest(`.quantity-increase-btn`);if(t){let e=t.getAttribute(`data-product-id`),n=C.find(t=>t.product.productId===e);if(n){let r=n.quantity+1;k(e,r);let i=t.parentNode.querySelector(`.quantity-input`);i&&(i.value=r.toString()),M(),I()}return}let n=e.target.closest(`.quantity-decrease-btn`);if(n){let e=n.getAttribute(`data-product-id`),t=C.find(t=>t.product.productId===e);if(t&&t.quantity>1){let r=t.quantity-1;k(e,r);let i=n.parentNode.querySelector(`.quantity-input`);i&&(i.value=r.toString()),M(),I()}return}let r=e.target.closest(`.cart-item-remove-btn`);if(r){let e=r.getAttribute(`data-product-id`);fe(e),M();return}let i=e.target.closest(`.cart-item-checkbox`);if(i){let e=i.getAttribute(`data-product-id`);me(e);return}if(e.target.closest(`#cart-modal-select-all-checkbox`)){let t=e.target.checked;document.querySelectorAll(`.cart-item-checkbox`).forEach(e=>{e.checked=t}),setTimeout(()=>{he(t).then(()=>{M()}).catch(e=>{console.error(`Failed to select all items:`,e)})},0);return}if(e.target.closest(`#cart-modal-remove-selected-btn`)){let e=E();e.length>0&&(A(),C=C.filter(t=>!e.includes(t.product.productId)),w(),j(`선택한 상품들이 삭제되었습니다`,`info`),I().then(()=>{M()}).catch(e=>{console.error(`Failed to render modal content:`,e),M()}));return}if(e.target.closest(`#cart-modal-clear-cart-btn`)){pe().then(()=>{M()}).catch(e=>{console.error(`Failed to clear cart:`,e)});return}}function I(){if(!N)return Promise.resolve();let e=oe({cartItems:C,selectedItems:E(),totalPrice:ue(),selectedPrice:de()});return new Promise(t=>{N.innerHTML=e,requestAnimationFrame(()=>{requestAnimationFrame(()=>{t()})})})}function ge(){if(N&&!document.contains(N)&&(N.removeEventListener(`click`,F),N=null),N)return;N=document.createElement(`div`),N.className=`cart-modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`,N.style.display=`none`,N.addEventListener(`click`,e=>{e.target===N&&R()}),N.addEventListener(`click`,F);let e=document.querySelector(`#root`);(e||document.body).appendChild(N)}function L(){ge(),I(),N.style.display=`flex`,document.removeEventListener(`keydown`,P),document.addEventListener(`keydown`,P)}function R(){N&&(N.remove(),N=null,document.removeEventListener(`keydown`,P))}M();const _e=e=>{let t={...e},n=new Set,r=e=>(n.add(e),()=>n.delete(e)),i=e=>{t={...t,...e},n.forEach(e=>e())},a=()=>t;return{subscribe:r,setState:i,getState:a}};var z=_e;const ve=e=>{let t={};return e.searchValue&&(t.search=e.searchValue),e.selectedCategory1&&(t.category1=e.selectedCategory1),e.selectedCategory2&&(t.category2=e.selectedCategory2),e.selectedSort&&e.selectedSort!==`price_asc`&&(t.sort=e.selectedSort),e.selectedLimit&&e.selectedLimit!==`20`&&(t.limit=e.selectedLimit),e.selectedLimit&&(t.limit=e.selectedLimit),e.currentPage&&e.currentPage!==1&&(t.current=e.currentPage),t},B=e=>({searchValue:e.search||``,selectedCategory1:e.category1||``,selectedCategory2:e.category2||``,selectedSort:e.sort||`price_asc`,selectedLimit:e.limit||`20`,currentPage:parseInt(e.current||e.page)||1}),V={products:[],categories:[],total:0,loading:!1,categoriesLoading:!1,searchValue:``,selectedCategory1:``,selectedCategory2:``,selectedSort:`price_asc`,selectedLimit:`20`,currentPage:1,hasMore:!0};let H=null,U={...V};function ye({cartCount:e=0}){return H||(H=z(V),H.subscribe(()=>{let t=H.getState();xe(t,U)&&(G(t),Ce()),a()===`/`&&W(t,e),U={...t}}),window.addEventListener(`popstate`,K),Se()),{html:W(H.getState(),e),cleanup:()=>{be()}}}function be(){H&&(window.removeEventListener(`popstate`,K),H=null,U={...V},q.onScroll&&(window.removeEventListener(`scroll`,q.onScroll),q.onScroll=null))}function W(e,t){t=T();let n=document.getElementById(`root`);if(!n)return``;n.innerHTML=y({children:`
      ${g({searchValue:e.searchValue,categories:e.categories,selectedCategory1:e.selectedCategory1,selectedCategory2:e.selectedCategory2,selectedSort:e.selectedSort,selectedLimit:e.selectedLimit,isLoading:e.categoriesLoading})}
      ${te({products:e.products,totalCount:e.total,isLoading:e.loading,hasMore:e.hasMore})}
    `,cartCount:t,showBackButton:!1,title:`쇼핑몰`}),M(),q()}function xe(e,t){return(e.searchValue!==t.searchValue||e.selectedCategory1!==t.selectedCategory1||e.selectedCategory2!==t.selectedCategory2||e.selectedSort!==t.selectedSort||e.selectedLimit!==t.selectedLimit)&&!e.loading}function G(e){if(a()!==`/`)return;let t=ve(e);h(t,{replace:!0})}async function Se(){let e=B(m());H.setState({...e,loading:!0,categoriesLoading:!0});try{let[t,n]=await Promise.all([b({page:e.currentPage,limit:parseInt(e.selectedLimit),search:e.searchValue,category1:e.selectedCategory1,category2:e.selectedCategory2,sort:e.selectedSort}),se()]),r=e.currentPage*parseInt(e.selectedLimit)<t.pagination.total;H.setState({products:t.products,categories:n,total:t.pagination.total,loading:!1,categoriesLoading:!1,hasMore:r})}catch(e){console.error(`홈 데이터 로딩 실패:`,e),H.setState({loading:!1,categoriesLoading:!1})}}async function Ce(){let e=H.getState(),t=H;t.setState({loading:!0});try{let n=await b({page:e.currentPage,limit:parseInt(e.selectedLimit),search:e.searchValue,category1:e.selectedCategory1,category2:e.selectedCategory2,sort:e.selectedSort}),r=e.currentPage*parseInt(e.selectedLimit)<n.pagination.total;t.setState({products:n.products,total:n.pagination.total,loading:!1,hasMore:r}),G(t.getState())}catch(e){console.error(`상품 데이터 로딩 실패:`,e),H===t&&t.setState({loading:!1})}}function K(){if(a()===`/`){let e=B(m());H.setState({...e,loading:!1});let t=document.querySelector(`#search-input`);t&&(t.value=e.searchValue)}}async function we(){let e=H.getState(),t=H;if(e.loading||!e.hasMore)return;let n=e.currentPage+1;t.setState({loading:!0});try{let r=await b({page:n,limit:parseInt(e.selectedLimit),search:e.searchValue,category1:e.selectedCategory1,category2:e.selectedCategory2,sort:e.selectedSort}),i=[...e.products,...r.products],a=n*parseInt(e.selectedLimit)<r.pagination.total;t.setState({products:i,total:r.pagination.total,currentPage:n,loading:!1,hasMore:a}),G(t.getState())}catch(e){console.error(`추가 상품 로딩 실패:`,e),H===t&&t.setState({loading:!1})}}function q(){let e=document.querySelector(`#search-input`);e&&(e.value=H.getState().searchValue,e.onkeydown=e=>{e.key===`Enter`&&(e.preventDefault(),H.setState({searchValue:e.target.value,currentPage:1}))},e.onkeyup=e=>{e.key===`Enter`&&(e.preventDefault(),H.setState({searchValue:e.target.value,currentPage:1}))},e.onchange=e=>{H.setState({searchValue:e.target.value,currentPage:1})});let t=document.querySelector(`#limit-select`);t&&(t.onchange=e=>{H.setState({selectedLimit:e.target.value,currentPage:1})});let n=document.querySelector(`#sort-select`);n&&(n.onchange=e=>{H.setState({selectedSort:e.target.value,currentPage:1})}),document.querySelectorAll(`[data-category1]:not([data-category2])`).forEach(e=>{e.onclick=e=>{H.setState({selectedCategory1:e.target.getAttribute(`data-category1`),selectedCategory2:``,currentPage:1})}}),document.querySelectorAll(`[data-category2]`).forEach(e=>{e.onclick=e=>{H.setState({selectedCategory1:e.target.getAttribute(`data-category1`),selectedCategory2:e.target.getAttribute(`data-category2`),currentPage:1})}});let r=document.querySelector(`[data-breadcrumb='reset']`);r&&(r.onclick=()=>{window.navigateTo(`/`),H.setState({selectedCategory1:``,selectedCategory2:``,searchValue:``,currentPage:1}),e&&(e.value=``)});let i=document.querySelector(`[data-breadcrumb='category1']`);i&&(i.onclick=e=>{console.log(`bcCategory1Btn.onclick`,e.target.getAttribute(`data-category1`)),H.setState({selectedCategory1:e.target.getAttribute(`data-category1`),selectedCategory2:``,currentPage:1})}),document.querySelectorAll(`[data-product-link]`).forEach(e=>{e.onclick=e=>{let t=e.currentTarget.getAttribute(`data-product-link`);window.navigateTo(`/product/${t}`)}});let a=()=>{let{loading:e,hasMore:t}=H.getState();if(e||!t)return;let n=150,r=window.innerHeight+window.scrollY,i=document.body.offsetHeight;i-r<=n&&we()};window.addEventListener(`scroll`,a),q.onScroll=a}function Te({products:e=[]}){return console.log(`[RelatedProducts] render`,e.length),e.length===0?``:`
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${e.map(e=>`
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" 
                 data-product-id="${e.productId}">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img src="${e.image}" 
                     alt="${e.title}" 
                     class="w-full h-full object-cover" 
                     loading="lazy">
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
              <p class="text-sm font-bold text-blue-600">${parseInt(e.lprice).toLocaleString()}원</p>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}const Ee={product:null,relatedProducts:[],relatedLoaded:!1,quantity:1,loading:!1,error:null};let J=null;function De({product:e,cartCount:t=0}){let n=()=>{J&&Y(),J=z(Ee),J.subscribe(()=>{let e=J.getState();a().startsWith(`/product/`)&&X(e,t)}),e&&Oe(e)};return n(),{html:X(J.getState(),t),cleanup:()=>{Y()}}}function Y(){J&&=null}async function Oe(e){let t=J;t.setState({product:e,loading:!0});try{let n=await ke(e);setTimeout(()=>{J===t&&t.setState({relatedProducts:n,relatedLoaded:!0,loading:!1})},0)}catch(e){console.error(`관련 상품 로딩 실패:`,e),J===t&&t.setState({error:e.message,loading:!1})}}async function ke(e){try{let t=await b({category1:e.category1,category2:e.category2,limit:20});return t.products.filter(t=>t.productId!==e.productId)}catch(e){return console.error(`관련 상품 로딩 실패:`,e),[]}}function X(e,t){t=T();let n=document.getElementById(`root`),r=``;return r=e.product?y({children:Ae({product:e.product,relatedProducts:e.relatedProducts,quantity:e.quantity}),cartCount:t,showBackButton:!0,title:`상품 상세`}):y({children:`<div class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>`,cartCount:t,showBackButton:!0,title:`상품 상세`}),n&&(n.innerHTML=r),M(),e.product&&je(),r}function Ae({product:e,relatedProducts:t=[],quantity:n=1}){let{productId:r,image:i,title:a,lprice:o,mallName:s=``,rating:c=4,reviewCount:l=749,stock:u=107,description:d=``}=e,f=e=>{let t=Math.floor(e),n=5-Math.ceil(e),r=``;for(let e=0;e<t;e++)r+=`
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      `;for(let e=0;e<n;e++)r+=`
        <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      `;return r},p=`${a}에 대한 상세 설명입니다. ${s?`${s}의`:``} 우수한 품질을 자랑하는 상품으로, 고객 만족도가 높은 제품입니다.`;return`
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <!-- 상품 이미지 -->
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src="${i}" alt="${a}" class="w-full h-full object-cover product-detail-image" />
        </div>

        <!-- 상품 정보 -->
        <div>
          ${s?`<p class="text-sm text-gray-600 mb-1">${s}</p>`:``}
          <h1 class="text-xl font-bold text-gray-900 mb-3">${a}</h1>

          <!-- 평점 및 리뷰 -->
          <div class="flex items-center mb-3">
            <div class="flex items-center">${f(c)}</div>
            <span class="ml-2 text-sm text-gray-600">${c} (${l}개 리뷰)</span>
          </div>

          <!-- 가격 -->
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${parseInt(o).toLocaleString()}원</span>
          </div>

          <!-- 재고 -->
          <div class="text-sm text-gray-600 mb-4">재고 ${u}개</div>

          <!-- 설명 -->
          <div class="text-sm text-gray-700 leading-relaxed mb-6">${d||p}</div>
        </div>
      </div>

      <!-- 수량 선택 및 액션 -->
      <div class="border-t border-gray-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-900">수량</span>
          <div class="flex items-center">
            <button
              id="quantity-decrease"
              class="w-8 h-8 flex items-center justify-center border border-gray-300 
                           rounded-l-md bg-gray-50 hover:bg-gray-100"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input
              type="number"
              id="quantity-input"
              value="${n}"
              min="1"
              max="${u}"
              class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                          focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              id="quantity-increase"
              class="w-8 h-8 flex items-center justify-center border border-gray-300 
                           rounded-r-md bg-gray-50 hover:bg-gray-100"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- 액션 버튼 -->
        <button
          id="add-to-cart-btn"
          data-product-id="${r}"
          class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                       hover:bg-blue-700 transition-colors font-medium"
        >
          장바구니 담기
        </button>

        <!-- 메시지 표시 영역 -->
        <div id="cart-message" class="mt-3 text-center text-sm" style="display: none;"></div>
      </div>
    </div>
    ${Te({products:t})}
  `}function je(){document._delegatedProductDetail||(document._delegatedProductDetail=!0,document.addEventListener(`click`,e=>{let t=e.target.closest(`#quantity-decrease`);if(t){let e=document.querySelector(`#quantity-input`);if(!e)return;let t=parseInt(e.value);if(t>1){let n=t-1;J.setState({quantity:n}),e.value=n}return}let n=e.target.closest(`#quantity-increase`);if(n){let e=document.querySelector(`#quantity-input`);if(!e)return;let t=parseInt(e.value),n=parseInt(e.getAttribute(`max`));if(t<n){let n=t+1;J.setState({quantity:n}),e.value=n}return}let r=e.target.closest(`#add-to-cart-btn`);if(r){let e=r.getAttribute(`data-product-id`),{quantity:t}=J.getState();console.log(`[ProductDetail] Add to cart clicked – pid:${e} qty:${t}`)}}),document.addEventListener(`input`,e=>{if(e.target.id===`quantity-input`){let t=parseInt(e.target.value),n=parseInt(e.target.getAttribute(`max`));t>=1&&t<=n&&J.setState({quantity:t})}}));let e=document.querySelectorAll(`.related-product-card`);e.forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-product-id`);t&&window.navigateTo(`/product/${t}`)})})}function Me(){let e=`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
            </filter>
          </defs>

          <!-- 404 Numbers -->
          <text
            x="160"
            y="85"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="48"
            font-weight="600"
            fill="url(#blueGradient)"
            text-anchor="middle"
          >
            404
          </text>

          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />

          <!-- Message -->
          <text
            x="160"
            y="110"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="14"
            font-weight="400"
            fill="#5f6368"
            text-anchor="middle"
          >
            페이지를 찾을 수 없습니다
          </text>

          <!-- Subtle bottom accent -->
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3" />
        </svg>

        <a
          href="/"
          data-link
          class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >홈으로</a
        >
      </div>
    </main>
  `;return{html:e,cleanup(){}}}const Ne=e=>{let t=e.target.closest(`.add-to-cart-btn`),n=t?t.getAttribute(`data-product-id`):null;return{addBtn:t,pid:n}},Pe=e=>{if(!e)return null;let t=e.querySelector(`h3`)?.textContent.trim()||``,n=e.querySelector(`p.text-lg`)?.textContent.trim()||`0`,r=n.replace(/[^0-9]/g,``),i=e.querySelector(`img`)?.getAttribute(`src`)||``;return{productId:e.querySelector(`.add-to-cart-btn`)?.getAttribute(`data-product-id`)||``,title:t,lprice:r,image:i,mallName:``,brand:``}},Fe=e=>{let t=e.target.closest(`#add-to-cart-btn`),n=t?t.getAttribute(`data-product-id`):null;return{detailBtn:t,pid:n}},Ie=()=>{let e=document.querySelector(`#quantity-input`);return e&&parseInt(e.value,10)||1},Le=e=>{e.preventDefault();let{addBtn:t,pid:n}=Ne(e);if(!t||!n)return;let r=t.closest(`.product-card`),i=Pe(r);r?O(i,1):D(n,1),M()},Z=e=>{let{detailBtn:t,pid:n}=Fe(e);if(!t||(e.preventDefault(),!n))return;let r=Ie();D(n,r),M()},Q=e=>{let t=e.target.closest(`#cart-icon-btn`);if(t){e.preventDefault(),L();return}if(e.target.closest(`.add-to-cart-btn`)){Le(e);return}if(e.target.closest(`#add-to-cart-btn`)){Z(e);return}let n=e.target.closest(`a`);if(n){let t=n.getAttribute(`href`);t&&t.startsWith(`/`)&&(e.preventDefault(),window.navigateTo(t))}};function Re(){let e=null;async function t(t){if(!t||!t.route||!t.route.component)return;let{route:r,params:i,data:a}=t;try{n();let t=r.component({...i,...a}),o=document.getElementById(`root`);if(!o)return;t&&typeof t==`object`&&t.html&&(o.innerHTML=t.html,M(),e=t.cleanup)}catch(e){console.error(`Component render error:`,e)}}function n(){e?.(),e=null}function r(){n()}return{render:t,destroy:r}}function ze(){let e=null,t=null,n=null;function r(){document.addEventListener(`click`,Q)}function i(){document.removeEventListener(`click`,Q)}function a(){let r=[{path:`/`,component:()=>ye({cartCount:0})},{path:`/product/:id`,component:({product:e})=>De({product:e,cartCount:0}),loader:async({id:e})=>{try{let t=await x(e);return{product:t}}catch(e){throw console.error(`Failed to load product detail:`,e),e}}},{path:`/404`,component:Me}];e=d(),e.addRoutes(r),p(e),n=e.subscribe(async e=>{await t.render(e)})}async function o(){try{t=Re(),r(),a(),await e.init(),console.log(`App initialized successfully`)}catch(e){console.error(`App initialization failed:`,e)}}function s(){i(),n&&(n(),n=null),t&&(t.destroy(),t=null),e=null}return{init:o,destroy:s}}let $=null;function Be(){return $||($=ze(),$.init()),$}const Ve=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-DvH8zzVn.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));async function He(){Be()}Ve().then(He);