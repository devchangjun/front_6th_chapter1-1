export default function FilterSection({
  searchValue = "",
  categories = [],
  selectedCategory1 = "",
  selectedCategory2 = "",
  selectedSort = "price_asc",
  selectedLimit = "20",
  isLoading = false,
}) {
  // 브레드크럼 렌더링
  const renderBreadcrumb = () => {
    let breadcrumb = `
      <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
    `;

    if (selectedCategory1) {
      breadcrumb += `
        <span class="text-xs text-gray-500">&gt;</span>
        <button
          data-breadcrumb="category1"
          data-category1="${selectedCategory1}"
          class="text-xs hover:text-blue-800 hover:underline"
        >
          ${selectedCategory1}
        </button>
      `;
    }

    if (selectedCategory2) {
      breadcrumb += `
        <span class="text-xs text-gray-500">&gt;</span>
        <span class="text-xs text-gray-600 cursor-default">${selectedCategory2}</span>
      `;
    }

    return breadcrumb;
  };

  // 카테고리 버튼 렌더링
  const renderCategoryButtons = () => {
    if (isLoading) {
      return `<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`;
    }

    if (!selectedCategory1) {
      // 1depth 카테고리 표시
      const categoryList = Array.isArray(categories) ? categories : Object.keys(categories || {});
      return categoryList
        .map(
          (category) => `
            <button
              data-category1="${category}"
              class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                ${
                  selectedCategory1 === category
                    ? "bg-blue-100 border-blue-300 text-blue-800"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }"
            >
              ${category}
            </button>
          `,
        )
        .join("");
    } else {
      // 2depth 카테고리 표시
      const subCategories = categories[selectedCategory1] ? Object.keys(categories[selectedCategory1]) : [];
      return subCategories
        .map(
          (category) => `
            <button
              data-category1="${selectedCategory1}"
              data-category2="${category}"
              class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                ${
                  selectedCategory2 === category
                    ? "bg-blue-100 border-blue-300 text-blue-800"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }"
            >
              ${category}
            </button>
          `,
        )
        .join("");
    }
  };

  // 정렬 옵션
  const sortOptions = [
    { value: "price_asc", label: "가격 낮은순" },
    { value: "price_desc", label: "가격 높은순" },
    { value: "name_asc", label: "이름순" },
    { value: "name_desc", label: "이름 역순" },
  ];

  // 개수 옵션
  const limitOptions = [
    { value: "10", label: "10개" },
    { value: "20", label: "20개" },
    { value: "50", label: "50개" },
    { value: "100", label: "100개" },
  ];

  return /* HTML */ `
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색 입력 -->
      <div class="mb-4">
        <div class="relative">
          <input
            type="text"
            id="search-input"
            placeholder="상품명을 검색해보세요..."
            value="${searchValue}"
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
            ${renderBreadcrumb()}
          </div>
          <div class="flex flex-wrap gap-2">${renderCategoryButtons()}</div>
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
              ${limitOptions
                .map(
                  (option) => `
                  <option value="${option.value}" ${selectedLimit === option.value ? "selected" : ""}>
                    ${option.label}
                  </option>
                `,
                )
                .join("")}
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
              ${sortOptions
                .map(
                  (option) => `
                  <option value="${option.value}" ${selectedSort === option.value ? "selected" : ""}>
                    ${option.label}
                  </option>
                `,
                )
                .join("")}
            </select>
          </div>
        </div>
      </div>
    </div>
  `;
}
