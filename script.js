// Case modal
(function () {
    const modal = document.getElementById('caseModal');
    const overlay = modal.querySelector('.case-modal__overlay');
    const closeBtn = modal.querySelector('.case-modal__close-outer');

    const caseContent = {
        1: `
            <div class="cm-block cm-block--hero">
                <div class="cm-hero__text">
                    <h2 class="cm-hero__title">Дизайн Интернет-магазина <br> для цветочного салона</h2>
                    <p class="cm-hero__task"><span>Задача:</span> сделать дизайн, который выделит премиальные авторские букеты на&nbsp;фоне обычных цветочных.</p>
                </div>
                <div class="cm-hero__img">
                    <img src="img/цветы 1.png" alt="">
                </div>
            </div>
            <p class="cm-col__text cm-hero-desc-mobile">Ушли от стандартного белого сайта. Темный фон сразу задаёт нишевость и&nbsp;смещает акцент с&nbsp;интерфейса на&nbsp;букеты.</p>
            <div class="cm-block cm-block--two-col">
                <div class="cm-two-col__grid">
                    <h3 class="cm-col__title cm-grid__left-title">Главная</h3>
                    <img src="img/главная 1.png" alt="" class="cm-col__img cm-grid__left-img">
                    <p class="cm-col__text cm-grid__right-text-top">Ушли от стандартного белого сайта. Темный фон сразу задаёт нишевость и&nbsp;смещает акцент с&nbsp;интерфейса на&nbsp;букеты.</p>
                    <p class="cm-col__text cm-grid__left-text-bot">Фирменный цвет салона (оранжевый) — добавили в кнопки, заголовки, линии. Это визуально направляет посетителя на нужные действия: оформить заказ, перейти в&nbsp;каталог.</p>
                    <img src="img/главная 2.png" alt="" class="cm-col__img cm-grid__right-img">
                    <p class="cm-col__text cm-grid__right-text-bot">Тёмную тему поддержали изящным шрифтом с&nbsp;засечками (Cinzel) для заголовков, чтобы сайт не выглядел траурно и&nbsp;тяжело. Основной текст сделали нейтральный Inter, для удобства чтения.</p>
                </div>
            </div>
            <div class="cm-block cm-block--imgs">
                <h3 class="cm-col__title">Страница товаров</h3>
                <div class="cm-imgs-wrap-mobile">
                    <img src="img/товар 1.png" alt="" class="cm-col__img cm-imgs__left" style="width:431px;height:928px;object-fit:cover;">
                    <img src="img/товар 2.png" alt="" class="cm-col__img cm-imgs__right" style="width:231px;height:859px;object-fit:cover;">
                </div>
            </div>
            <p class="cm-col__text cm-product-desc-mobile">Тёмную тему поддержали изящным шрифтом с&nbsp;засечками (Cinzel) для заголовков, чтобы сайт не выглядел траурно и&nbsp;тяжело. Основной текст сделали нейтральный Inter, для удобства чтения.</p>

            <div class="cm-block cm-block--imgs cm-block--catalog">
                <h3 class="cm-col__title">Каталог</h3>
                <img src="img/каталог 1.png" alt="" class="cm-col__img cm-imgs__left" style="width:231px;height:1191px;object-fit:cover;">
                <img src="img/каталог 2.png" alt="" class="cm-col__img cm-imgs__right" style="width:433px;height:1191px;object-fit:cover;">
                <p class="cm-col__text cm-catalog__desc">Логика UX — мы спроектировали страницу товара, каталог, корзину и&nbsp;оформление заказа. Клиент не путается, быстро находит нужное и&nbsp;оформляет заказ.</p>
            </div>
            <p class="cm-col__text cm-catalog-analysis-mobile">В ходе анализа конкурентов выяснили, что у&nbsp;большинства цветочных фото букетов мелкие и&nbsp;невыразительные. Поэтому сделали ставку на&nbsp;крупные изображения — это выигрышное решение для премиального восприятия.</p>
            <div class="cm-block cm-block--basket">
                <h3 class="cm-col__title cm-basket__title">Корзина</h3>
                <div class="cm-basket__wrap">
                    <img src="img/корзина 1.png" alt="" class="cm-basket__img1">
                    <img src="img/корзина 2.png" alt="" class="cm-basket__img2">
                </div>
            </div>
            <div class="cm-block cm-block--order">
                <h3 class="cm-col__title">Оформление заказа</h3>
                <img src="img/заказ 1.png" alt="" class="cm-order__main">
                <p class="cm-col__text cm-order-ux-mobile">Логика UX — мы спроектировали страницу товара, каталог, корзину и&nbsp;оформление заказа. Клиент не путается, быстро находит нужное и&nbsp;оформляет заказ.</p>
                <div class="cm-order__row">
                    <img src="img/заказ 2.png" alt="" class="cm-order__small">
                    <img src="img/заказ 3.png" alt="" class="cm-order__small">
                    <img src="img/заказ 4.png" alt="" class="cm-order__small">
                </div>
            </div>
            <div class="cm-block cm-block--lookbook">
                <div class="cm-lookbook__left">
                    <h3 class="cm-col__title">Лукбук</h3>
                    <img src="img/лукбук 1.png" alt="" class="cm-lookbook__img1 cm-lookbook__img1--desktop">
                    <img src="img/лукбук 12.png" alt="" class="cm-lookbook__img1 cm-lookbook__img1--mobile">
                    <p class="cm-col__text">Результат: Дизайн работает на узнаваемость, отличает от&nbsp;масс-маркета, а удобный интерфейс подчёркивает высокий сервис&nbsp;бренда.</p>
                    <a href="#contact" class="btn btn--light" onclick="document.getElementById('caseModal').classList.remove('open');document.body.style.overflow='';">Рассчитать стоимость проекта</a>
                </div>
                <div class="cm-lookbook__right">
                    <p class="cm-col__text">В ходе анализа конкурентов выяснили, что у&nbsp;большинства цветочных фото букетов мелкие и&nbsp;невыразительные. Поэтому сделали ставку на&nbsp;крупные изображения — это выигрышное решение для премиального восприятия.</p>
                    <img src="img/лукбук 2.png" alt="" class="cm-lookbook__img2">
                    <div class="cm-lookbook__row">
                        <img src="img/лукбук 3.png" alt="" class="cm-lookbook__img3">
                        <img src="img/лукбук 4.png" alt="" class="cm-lookbook__img4">
                    </div>
                </div>
            </div>
        `,
        2: `
            <div class="cm-block cm-block--hero">
                <div class="cm-hero__text">
                    <h2 class="cm-hero__title">Интернет-магазин <br> для бренда Футболок</h2>
                    <p class="cm-hero__task"><span>Задача:</span> сделать интернет-магазин,<br>с нуля. Были Только футболочки<br>из&nbsp;шёлка и&nbsp;желание сделать бренд,<br>который чувствуют.</p>
                </div>
                <div class="cm-hero__img">
                    <img src="img/футболки 1.png" alt="">
                </div>
            </div>
            <p class="cm-col__text cm-center__text">Мы продумали путь покупателя от «хочу спать в&nbsp;комфорте» до оплаты. Передали главную ценность бренда — заботу о&nbsp;себе.</p>

            <div class="cm-block cm-block--shirts">
                <div class="cm-shirts__left">
                    <img src="img/ф-1.png" alt="" class="cm-shirts__img1">
                    <p class="cm-col__text">Через историю создания первой футболки раскрыли идею бренда, а с помощью дизайна — его нежность и&nbsp;лёгкость.</p>
                    <p class="cm-col__text">Наполнили каталог фотографиями, описаниями, характеристиками, подключили сервисы оплаты и&nbsp;доставки.</p>
                </div>
                <div class="cm-shirts__right">
                    <img src="img/ф-2.png" alt="" class="cm-shirts__img2">
                </div>
            </div>

            <div class="cm-block cm-block--shirts2">
                <div class="cm-shirts2__left">
                    <img src="img/ф-3.png" alt="" class="cm-shirts2__img1">
                </div>
                <div class="cm-shirts2__right">
                    <img src="img/ф-4.png" alt="" class="cm-shirts2__img2">
                    <p class="cm-col__text cm-shirts2__text">Результат: Автоматизировали продажи. Бренд заимел лицо — отдельную страницу, где пользователь погружается в&nbsp;историю, визуал и&nbsp;ценности.</p>
                    <a href="#contact" class="btn btn--light" onclick="document.getElementById('caseModal').classList.remove('open');document.body.style.overflow='';">Рассчитать стоимость проекта</a>
                </div>
            </div>

            <div class="cm-shirts-mobile">
                <img src="img/ф-1.png" alt="" class="cm-shirts-mobile__img1">
                <p class="cm-col__text cm-shirts-mobile__text1">Через историю создания первой футболки раскрыли идею бренда, а с помощью дизайна — его нежность и&nbsp;лёгкость.</p>
                <div class="cm-shirts-mobile__pair">
                    <img src="img/ф-2.png" alt="" class="cm-shirts-mobile__img2">
                    <img src="img/ф-3.png" alt="" class="cm-shirts-mobile__img3">
                </div>
                <p class="cm-col__text cm-shirts-mobile__text2">Наполнили каталог фотографиями, описаниями, характеристиками, подключили сервисы оплаты и&nbsp;доставки.</p>
                <img src="img/ф-4.png" alt="" class="cm-shirts-mobile__img4">
                <p class="cm-col__text cm-shirts-mobile__text3">Результат: Автоматизировали продажи. Бренд заимел лицо — отдельную страницу, где пользователь погружается в&nbsp;историю, визуал и&nbsp;ценности.</p>
                <a href="#contact" class="btn btn--light" onclick="document.getElementById('caseModal').classList.remove('open');document.body.style.overflow='';">Рассчитать стоимость проекта</a>
            </div>
        `
    };

    document.querySelectorAll('.case-card[data-case]').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.case;
            document.getElementById('caseModalContent').innerHTML = caseContent[id] || '';
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // Prevent page scroll when modal is open (even outside modal box)
    modal.addEventListener('wheel', e => { e.stopPropagation(); }, { passive: true });
    overlay.addEventListener('wheel', e => { e.preventDefault(); }, { passive: false });
    overlay.addEventListener('touchmove', e => { e.preventDefault(); }, { passive: false });
})();

// Team member popup
const memberPopup = document.getElementById('memberPopup');

document.querySelectorAll('.member-info-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();

        const isAlreadyOpen = memberPopup.classList.contains('visible')
            && memberPopup.dataset.activeBtn === btn.dataset.name;

        memberPopup.classList.remove('visible');

        if (isAlreadyOpen) return;

        memberPopup.querySelector('.member-popup__name').textContent = btn.dataset.name;
        memberPopup.querySelector('.member-popup__role').textContent = btn.dataset.role;
        memberPopup.querySelector('.member-popup__desc').textContent = btn.dataset.desc;
        memberPopup.dataset.activeBtn = btn.dataset.name;

        const rect = btn.getBoundingClientRect();
        const memberRect = (btn.closest('.team-member') || btn.closest('.team__mobile-photo-wrap')).getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        const popupW = 280;
        const isTopRow = btn.dataset.row === 'top';

        let left = memberRect.left + scrollX;
        if (left + popupW > scrollX + window.innerWidth - 8) {
            left = scrollX + window.innerWidth - 8 - popupW;
        }
        if (left < scrollX + 8) left = scrollX + 8;

        memberPopup.style.left = left + 'px';
        memberPopup.style.visibility = 'hidden';
        memberPopup.classList.add('visible');

        requestAnimationFrame(() => {
            const popupH = memberPopup.offsetHeight;
            const top = isTopRow
                ? rect.bottom + scrollY + 8
                : rect.top + scrollY - popupH - 8;
            memberPopup.style.top = top + 'px';
            memberPopup.style.visibility = 'visible';
        });
    });
});

document.querySelectorAll('.team__mobile-name, .team-member__name').forEach(name => {
    name.addEventListener('click', e => {
        if (e.target.classList.contains('member-info-btn')) return;
        e.stopPropagation();
        const btn = name.querySelector('.member-info-btn');
        if (!btn) return;

        const isAlreadyOpen = memberPopup.classList.contains('visible')
            && memberPopup.dataset.activeBtn === btn.dataset.name;
        memberPopup.classList.remove('visible');
        if (isAlreadyOpen) return;

        memberPopup.querySelector('.member-popup__name').textContent = btn.dataset.name;
        memberPopup.querySelector('.member-popup__role').textContent = btn.dataset.role;
        memberPopup.querySelector('.member-popup__desc').textContent = btn.dataset.desc;
        memberPopup.dataset.activeBtn = btn.dataset.name;

        const rect = name.getBoundingClientRect();
        const memberRect = (name.closest('.team-member') || name.closest('.team__mobile-photo-wrap')).getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        const popupW = 280;
        const isTopRow = btn.dataset.row === 'top';

        let left = memberRect.left + scrollX;
        if (left + popupW > scrollX + window.innerWidth - 8) left = scrollX + window.innerWidth - 8 - popupW;
        if (left < scrollX + 8) left = scrollX + 8;

        memberPopup.style.left = left + 'px';
        memberPopup.style.visibility = 'hidden';
        memberPopup.classList.add('visible');

        requestAnimationFrame(() => {
            const popupH = memberPopup.offsetHeight;
            const top = isTopRow
                ? rect.bottom + scrollY + 8
                : rect.top + scrollY - popupH - 8;
            memberPopup.style.top = top + 'px';
            memberPopup.style.visibility = 'visible';
        });
    });
});

document.addEventListener('click', () => memberPopup.classList.remove('visible'));
memberPopup.addEventListener('click', e => e.stopPropagation());

// Process slider
(function () {
    const wrap = document.querySelector('.slider-track-wrap');
    const track = document.querySelector('.slider-track');
    const cards = Array.from(track ? track.querySelectorAll('.process-card') : []);
    const prevBtn = document.querySelector('.slider-arrow--prev');
    const nextBtn = document.querySelector('.slider-arrow--next');

    if (!wrap || !cards.length) return;

    const visible = 3;
    const gap = 16;
    let current = 0;
    const max = cards.length - visible;

    function cardW() {
        return (wrap.offsetWidth - gap * (visible - 1)) / visible;
    }

    function isMobile() { return window.innerWidth <= 430; }

    function setWidths() {
        if (isMobile()) {
            cards.forEach(c => { c.style.width = '305px'; c.style.height = 'auto'; });
        } else {
            const w = cardW();
            cards.forEach(c => { c.style.width = w + 'px'; });
        }
    }

    function move() {
        if (isMobile()) return;
        track.style.transform = `translateX(-${current * (cardW() + gap)}px)`;
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current >= max;
    }

    prevBtn.addEventListener('click', () => { if (current > 0) { current--; move(); } });
    nextBtn.addEventListener('click', () => { if (current < max) { current++; move(); } });

    setWidths();
    move();
    window.addEventListener('resize', () => { setWidths(); move(); });
})();

// Scroll animations
(function () {
    const els = document.querySelectorAll('section:not(.services), footer');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    els.forEach(el => io.observe(el));

    // Only add fade-up to elements not yet visible (below the fold)
    requestAnimationFrame(() => {
        els.forEach(el => {
            if (!el.classList.contains('visible')) {
                el.classList.add('fade-up');
            }
        });
    });
})();

// Services scroll capture
(function () {
    const wrapper = document.querySelector('.services-wrapper');
    const stack   = document.querySelector('.services-stack');

    if (!wrapper || !stack) return;

    function isMobile() { return window.innerWidth <= 430; }

    function init() {
        if (isMobile()) {
            wrapper.style.height = '';
            stack.scrollTop = 0;
            return;
        }
        const maxInner = stack.scrollHeight - stack.clientHeight;
        wrapper.style.height = (window.innerHeight - 64 + maxInner) + 'px';
    }

    function onScroll() {
        if (isMobile()) return;
        const stickAt  = wrapper.offsetTop - 64;
        const scrolled = window.scrollY - stickAt;
        stack.scrollTop = scrolled > 0
            ? Math.min(scrolled, stack.scrollHeight - stack.clientHeight)
            : 0;
    }

    stack.addEventListener('wheel', e => {
        if (isMobile()) return;
        e.preventDefault();
        window.scrollBy({ top: e.deltaY, behavior: 'instant' });
    }, { passive: false });
    stack.addEventListener('touchmove', e => {
        if (isMobile()) return;
        e.preventDefault();
    }, { passive: false });

    init();
    document.addEventListener('DOMContentLoaded', () => { init(); onScroll(); });
    window.addEventListener('load', () => { init(); onScroll(); });
    setTimeout(() => { init(); onScroll(); }, 300);
    window.addEventListener('resize', () => { init(); onScroll(); });
    window.addEventListener('scroll', onScroll, { passive: true });
})();

// Mobile services stack effect
(function () {
    function isMobile() { return window.innerWidth <= 430; }

    const wraps = document.querySelectorAll('.service-card-wrap');
    if (!wraps.length) return;

    function update() {
        if (!isMobile()) {
            wraps.forEach(w => { w.style.transform = ''; });
            return;
        }
        wraps.forEach((wrap, i) => {
            const rect = wrap.getBoundingClientRect();
            const next = wraps[i + 1];
            if (!next) return;
            const nextRect = next.getBoundingClientRect();
            const overlap = rect.bottom - nextRect.top;
            if (overlap > 0) {
                wrap.style.zIndex = wraps.length - i;
            }
        });
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();

// FAQ accordion — each item toggles independently
document.querySelectorAll('.faq-item__btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.faq-item').classList.toggle('open');
    });
});

// Contact form — Formspree AJAX
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправляем...';

    try {
        const res = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
            form.reset();
            successMsg.classList.add('visible');
            submitBtn.textContent = 'Отправлено ✓';
        } else {
            throw new Error('server error');
        }
    } catch {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        alert('Ошибка при отправке. Попробуйте ещё раз или напишите нам напрямую.');
    }
});

// Burger menu
(function () {
    const burger = document.querySelector('.burger');
    const menu = document.getElementById('burgerMenu');
    const links = menu.querySelectorAll('.burger-menu__link');

    burger.addEventListener('click', () => {
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
})();

