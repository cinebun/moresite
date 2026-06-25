/* ============================================
   СТРАНИЦА "КОНТАКТЫ" — форма обратной связи
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все поля.');
                return;
            }

            alert('Спасибо! Ваше сообщение отправлено.\nМы свяжемся с вами в ближайшее время.');
            form.reset();
        });
    }

});