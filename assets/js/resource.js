// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
  // 设置搜索功能
  setupSearch();
});

// 设置搜索功能
function setupSearch() {
  const searchInput = document.getElementById('resource-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();

    // 搜索Links
    const linkCardWrappers = document.querySelectorAll('.link-card-wrapper');
    linkCardWrappers.forEach(wrapper => {
      const card = wrapper.querySelector('.link-card');
      const title = card.dataset.title;
      const description = wrapper.querySelector('.card-description')?.textContent.toLowerCase() || '';

      if (title.includes(searchTerm) || description.includes(searchTerm) || searchTerm === '') {
        wrapper.classList.remove('resource-hidden');
      } else {
        wrapper.classList.add('resource-hidden');
      }
    });

    // 搜索Datasets - 更新为列表结构的搜索
    const datasetItems = document.querySelectorAll('.dataset-item');
    datasetItems.forEach(item => {
      const link = item.querySelector('.dataset-link');
      const title = link.dataset.title;

      if (title.includes(searchTerm) || searchTerm === '') {
        item.classList.remove('resource-hidden');
      } else {
        item.classList.add('resource-hidden');
      }
    });
  });
}
