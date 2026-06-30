document.addEventListener('DOMContentLoaded', function () {

  let allProducts = [];

  fetch('/data/products.json')
    .then(response => response.json())
    .then(data => {
      allProducts = data.products || [];
      const initialProducts = getProductsOfDay();
      renderProducts(initialProducts);
    })
    .catch(() => {
      const grid = document.getElementById('productsGrid');
      if (grid) {
        grid.innerHTML = '<p style="text-align:center;padding:40px;">Не удалось загрузить товары. Пожалуйста, обновите страницу.</p>';
      }
    });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getProductsOfDay() {
    const vkusvillProducts = allProducts.filter(p => p.shop === 'vkusvill');
    const lavkaProducts = allProducts.filter(p => p.shop === 'lavka');

    const shuffledVkusvill = shuffleArray([...vkusvillProducts]);
    const shuffledLavka = shuffleArray([...lavkaProducts]);

    const selectedVkusvill = shuffledVkusvill.slice(0, 2);
    const selectedLavka = shuffledLavka.slice(0, 2);

    return shuffleArray([...selectedVkusvill, ...selectedLavka]);
  }

  function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => {
      let weightDisplay = '';
      if (product.weight) {
        weightDisplay = `${product.weight} ${product.weight_unit || 'г'}`;
      }

      let priceDisplay = '';
      if (product.price) {
        priceDisplay = `${product.price} ${product.price_type || '₽/кг'}`;
      }

      const isPlaceholder = !product.link || product.link === '#';
      const linkClass = isPlaceholder ? 'link-placeholder' : `link-${product.shop}`;
      const shopLabel = product.shopLabel || product.shop || 'Магазин';
      const linkContent = isPlaceholder
        ? '⏳ Скоро появится'
        : `<img src="images/icons/${product.shop}.png" alt="${shopLabel}" /> ${shopLabel}`;

      return `
        <div class="product-card" data-shop="${product.shop || 'vkusvill'}">
          <img class="product-image" src="${product.image || 'https://placehold.co/300x200/eee/ccc?text=Нет+фото'}" alt="${product.name}" loading="lazy" />
          <h3 class="product-name">${product.name || 'Без названия'}</h3>
          <span class="product-weight">${weightDisplay}</span>
          <div class="product-price">${priceDisplay}</div>
          <div class="partner-links">
            <a href="${product.link || '#'}" target="_blank" class="${linkClass}">${linkContent}</a>
          </div>
        </div>
      `;
    }).join('');

    initScrollAnimations();
  }

  function initProductOfDay() {
    const btn = document.querySelector('.filter-btn[data-filter="day"]');
    if (!btn) return;

    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const productsOfDay = getProductsOfDay();
      renderProducts(productsOfDay);
    });
  }

  function initScrollAnimations() {
    const cards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }

  function injectAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  injectAnimationStyles();
  initProductOfDay();

});