// ============================================
// ВСЕ ТОВАРЫ (с правильными shopLabel и путями)
// ============================================
const products = [
    {
        id: 1,
        name: 'Дорадо в оливковом масле с пряностями зам.',
        weight: '1 кг',
        price: '1 750 ₽/кг',
        shop: 'vkusvill',
        link: 'https://vkusvill.ru/goods/xmlid/29326',
        image: '../images/products/dorado.jpg',
        shopLabel: 'ВкусВилл'
    },
    {
        id: 2,
        name: 'Кальмар кольца зам.',
        weight: '400 г',
        price: '608 ₽/шт',
        shop: 'vkusvill',
        link: 'https://vkusvill.ru/goods/xmlid/17103',
        image: '../images/products/kalmar.jpg',
        shopLabel: 'ВкусВилл'
    },
    {
        id: 3,
        name: 'Креветки аргентинские без головы зам.',
        weight: '500 г',
        price: '1 147 ₽/шт',
        shop: 'vkusvill',
        link: 'https://vkusvill.ru/goods/xmlid/17661',
        image: '../images/products/krevetki.jpg',
        shopLabel: 'ВкусВилл'
    },
    {
        id: 4,
        name: 'Медальоны из форели зам.',
        weight: '200 г',
        price: '490 ₽/шт',
        shop: 'vkusvill',
        link: 'https://vkusvill.ru/goods/xmlid/37746',
        image: '../images/products/forel.jpg',
        shopLabel: 'ВкусВилл'
    },
    {
        id: 5,
        name: 'Мидии мясо вареные 200/300 зам.',
        weight: '500 г',
        price: '635 ₽/шт',
        shop: 'vkusvill',
        link: 'https://vkusvill.ru/goods/xmlid/1173',
        image: '../images/products/midii.jpg',
        shopLabel: 'ВкусВилл'
    },
    {
        id: 6,
        name: 'Морской коктейль зам.',
        weight: '400 г',
        price: '642 ₽/шт',
        shop: 'vkusvill',
        link: 'https://vkusvill.ru/goods/xmlid/20480',
        image: '../images/products/kokteyl.jpg',
        shopLabel: 'ВкусВилл'
    },
    {
        id: 7,
        name: 'Тунец филе-кусок без кожи зам.',
        weight: '600 г',
        price: '1 287 ₽/шт',
        shop: 'vkusvill',
        link: 'https://vkusvill.ru/goods/xmlid/68903',
        image: '../images/products/tunets.jpg',
        shopLabel: 'ВкусВилл'
    },
    {
        id: 8,
        name: 'Креветки варёно-мороженные',
        weight: '500 г',
        price: '454 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/krevetki-varyono-morozhenye-iz-lavki-severnye-nerazdelannye-500-gram',
        image: '../images/products/krevetki-lavka.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 9,
        name: 'Горбуша филе на коже в медово-горчичном соусе',
        weight: '350 г',
        price: '440 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/gorbusha-file-iz-lavki-na-kozhe-v-medovo-gorchichnom-souse-350-gram',
        image: '../images/products/gorbusa-medovaya.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 10,
        name: 'Треска филе порционное зам.',
        weight: '400 г',
        price: '405 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/treska-iz-lavki-file-porcionnoe-bez-kozhi-zamorozhennoe-400-gram',
        image: '../images/products/treska-file.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 11,
        name: 'Горбуша филе порционное без кожи',
        weight: '400 г',
        price: '454 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/gorbusha-iz-lavki-file-porcionnoe-bez-kozhi-400-gram',
        image: '../images/products/gorbusha-file.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 12,
        name: 'Минтай филе без кожи зам.',
        weight: '400 г',
        price: '300 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/mintaj-file-iz-lavki-bez-kozhi-zamorozhennyj-400-gram',
        image: '../images/products/mintay-file.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 13,
        name: 'Медальоны из радужной форели зам.',
        weight: '180 г',
        price: '335 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/medalony-iz-raduzhnoj-foreli-iz-lavki-zamorozhennye-180-gram',
        image: '../images/products/forel-medalony.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 14,
        name: 'Медальоны из горбуши с брокколи зам.',
        weight: '180 г',
        price: '230 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/medalony-iz-gorbushi-dalnevostochnoj-iz-lavki-s-brokkoli-zamorozhennye-180-gram',
        image: '../images/products/gorbusa-brokkoli.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 15,
        name: 'Треска спинка лойн без кожи зам.',
        weight: '400 г',
        price: '699 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/treska-iz-lavki-file-spinki-bez-kozhi-zamorozhennaya-400-gram',
        image: '../images/products/treska-loin.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 16,
        name: 'Кальмар командорской филе без кожи зам.',
        weight: '400 г',
        price: '384 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/kalmar-komandorskij-iz-lavki-tushka-ochishennyj-zamorozhennyj-400-gram',
        image: '../images/products/kalmar-file.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 17,
        name: 'Тунец желтопёрый филе без кожи',
        weight: '500 г',
        price: '559 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/file-tunca-zheltopyorogo-iz-lavki-bez-kozhi-500-gram',
        image: '../images/products/tunets-file.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 18,
        name: 'Форель радужная стейк зам.',
        weight: '500 г',
        price: '804 ₽/шт',
        shop: 'lavka',
        link: 'https://lavka.yandex.ru/supermarket/good/forel-raduzhnaya-iz-lavki-kusok-stejkovyj-zamorozhennyj-500-gram',
        image: '../images/products/forel-steak.jpg',
        shopLabel: 'Яндекс Лавка'
    },
    {
        id: 19,
        name: 'Филе хека, порционное, зам.',
        weight: '300 г',
        price: '339 ₽/шт',
        shop: 'samokat',
        link: 'https://samokat.ru/product/913eaf8f-45b3-11ee-b971-08c0eb32008b?pcs=true',
        image: '../images/products/hek.jpg',
        shopLabel: 'Самокат'
    },
    {
        id: 20,
        name: 'Медальоны из филе тунца и брокколи, зам.',
        weight: '300 г',
        price: '379 ₽/шт',
        shop: 'samokat',
        link: 'https://samokat.ru/product/ef45ea54-09bc-11ee-885e-08c0eb32014b?pcs=true',
        image: '../images/products/tunets-medalony.jpg',
        shopLabel: 'Самокат'
    }
];

// ============================================
// ОТРИСОВКА КАТАЛОГА
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    renderCatalog(products);
    initFilters();
    initScrollAnimations();
    injectAnimationStyles();
});

function renderCatalog(products) {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => {
        const isPlaceholder = !product.link || product.link === '#';
        const linkClass = isPlaceholder ? 'link-placeholder' : `link-${product.shop}`;
        const linkContent = isPlaceholder
            ? '⏳ Скоро появится'
            : `<img src="../images/icons/${product.shop}.png" alt="${product.shopLabel}" /> ${product.shopLabel}`;

        return `
            <div class="product-card" data-shop="${product.shop}">
                <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
                <h3 class="product-name">${product.name}</h3>
                <span class="product-weight">${product.weight}</span>
                <div class="product-price">${product.price}</div>
                <div class="partner-links">
                    <a href="${product.link}" target="_blank" class="${linkClass}">${linkContent}</a>
                </div>
            </div>
        `;
    }).join('');

    applyFilter();
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