// ─── SCROLL REVEAL
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => observer.observe(el));

// ─── MOBILE NAV
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');
toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

// Close nav on link click
nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.textContent = '☰';
    });
});

// ─── HEADER SCROLL OPACITY
const header = document.querySelector('.header-wrap');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.style.background = 'rgba(7,8,15,0.98)';
    } else {
        header.style.background = '';
    }
}, { passive: true });

// ─── ACTIVE NAV HIGHLIGHT
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.style.color = '';
        link.style.background = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--text)';
            link.style.background = 'rgba(255,255,255,0.07)';
        }
    });
}, { passive: true });

// ─── BUTTON ADD TO CART FEEDBACK
document.querySelectorAll('.product-card button').forEach(btn => {
    btn.addEventListener('click', function () {
        const original = this.textContent;
        this.textContent = '✓ Adicionado!';
        this.style.background = 'rgba(52,211,153,0.15)';
        this.style.borderColor = 'rgba(52,211,153,0.3)';
        this.style.color = '#34d399';
        setTimeout(() => {
            this.textContent = original;
            this.style.background = '';
            this.style.borderColor = '';
            this.style.color = '';
        }, 2000);
    });
});

// ─── FORM SUBMIT
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('.form-submit');
    btn.textContent = '✓ Mensagem enviada!';
    btn.style.background = '#16a34a';
    btn.style.boxShadow = '0 8px 32px rgba(22,163,74,0.35)';
    setTimeout(() => {
        btn.textContent = 'Enviar mensagem →';
        btn.style.background = '';
        btn.style.boxShadow = '';
        this.reset();
    }, 3000);
});