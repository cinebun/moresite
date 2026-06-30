document.addEventListener('DOMContentLoaded', function () {

  fetch('data/products.md')
    .then(response => response.text())
    .then(text => {
      const products = parseMarkdownProducts(text);
      renderCatalog(products);
    })
    .catch(() => {
      renderCatalog([]);
    });

  function parseMarkdownProducts(text) {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const products = [];
    let current = {};

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('## ')) {
        if (Object.keys(current).length > 0) {
          products.push(current);
        }
        current = {};
        const nameMatch = line.match(/## (.+)/);
        if (nameMatch) current.name = nameMatch[1];
      } else if (line.includes(':')) {
        const [key, value] = line.split(':').map(s => s.trim());
        current[key] = value;
      }
    }
    if (Object.keys(current).length > 0) {
      products.push(current);
    }
    return products;
  }

  function renderCatalog(products) {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => {
      const weightDisplay = product.weight ? `${product.weight} ${product.weight_unit || 'г'}` : '';
      const priceDisplay = product.price ? `${product.price} ${product.price_type || '₽/кг'}` : '';
      const shopLabel = product.shopLabel || product.shop || 'Магазин';
      const linkClass = `link-${product.shop}`;
      const linkContent = `<img src="../images/icons/${product.shop}.png" alt="${shopLabel}" /> ${shopLabel}`;

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

    applyFilter();
    initScrollAnimations();
  }

  function applyFilter() {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (!activeBtn) return;
    const filter = activeBtn.dataset.filter;
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.shop === filter) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', function () {
        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        applyFilter();
      });
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
  initFilters();

});