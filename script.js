// ======================== TRADUCCIONES (DEFINIDAS PRIMERO) ========================
const translations = {
    es: {
        "nav.inicio": "Inicio",
        "nav.proyectos": "Proyectos",
        "nav.servicios": "Servicios",
        "nav.proceso": "Proceso",
        "nav.sobre": "Sobre mí",
        "nav.contacto": "Contacto",
        "hero.subtitle": "Desarrollo Web",
        "hero.cta": "Ver proyectos",
        "proyectos.titulo": "Proyectos",
        "proyectos.ayg.desc": "Tienda online de accesorios con catálogo, carrito de compras y diseño responsive.",
        "proyectos.dgd.desc": "Web de especialista en diseño y comunicación digital con sus trabajos y contacto.",
        "proyectos.ver": "Ver sitio",
        "servicios.titulo": "Servicios",
        "servicios.dev.titulo": "Desarrollo Web",
        "servicios.dev.desc": "Sitios modernos, rápidos y adaptados a cualquier dispositivo.",
        "servicios.responsive.titulo": "Diseño Responsive",
        "servicios.responsive.desc": "Tu página se verá perfecta en celular, tablet y computadora.",
        "servicios.optimizacion.titulo": "Optimización",
        "servicios.optimizacion.desc": "Carga rápida y código limpio para mejor rendimiento.",
        "servicios.tiendas.titulo": "Tiendas Online",
        "servicios.tiendas.desc": "Integración de catálogo y carrito de compras.",
        "servicios.mantenimiento.titulo": "Mantenimiento Mensual",
        "servicios.mantenimiento.desc": "Actualizaciones, copias de seguridad y soporte continuo para tu sitio.",
        "proceso.titulo": "Proceso de trabajo",
        "proceso.consulta.titulo": "Consulta",
        "proceso.consulta.desc": "Hablamos de tu proyecto, necesidades y objetivos.",
        "proceso.diseno.titulo": "Diseño",
        "proceso.diseno.desc": "Creo un mockup o prototipo que refleje tu marca.",
        "proceso.desarrollo.titulo": "Desarrollo",
        "proceso.desarrollo.desc": "Programo el sitio con código limpio y optimizado.",
        "proceso.entrega.titulo": "Entrega",
        "proceso.entrega.desc": "Subo tu web y te enseño a gestionarla.",
        "tecnologias.titulo": "Tecnologías",
        "stats.proyectos": "Proyectos entregados",
        "stats.clientes": "Clientes felices",
        "stats.experiencia": "Años de experiencia",
        "testimonios.titulo": "Lo que dicen mis clientes",
        "testimonios.ayg": "\"Excelente trabajo, muy profesional y cumplió con los plazos. Mi sitio web luce increíble.\"",
        "testimonios.dgd": "\"Muy atento a los detalles, resolvió todas mis dudas. Recomendado.\"",
        "sobre.titulo": "Sobre mí",
        "sobre.texto1": "Soy desarrollador web enfocado en crear páginas modernas, rápidas y optimizadas para negocios y emprendedores.",
        "sobre.texto2": "Trabajo con HTML, CSS y JavaScript para construir sitios profesionales que ayuden a las marcas a tener presencia online.",
        "contacto.titulo": "Contacto",
        "contacto.pregunta": "¿Querés una página web para tu negocio?",
        "contacto.whatsapp": "Contactar por WhatsApp",
        "contacto.instagram": "📷 Seguime en Instagram",
        "contacto.form.mensaje": "O dejame tu mensaje y te respondo a la brevedad:",
        "contacto.form.nombre": "Tu nombre",
        "contacto.form.email": "Tu email",
        "contacto.form.asunto": "Asunto (ej: Tienda online)",
        "contacto.form.mensaje": "Contame de tu proyecto...",
        "contacto.form.enviar": "Enviar mensaje",
        "contacto.form.respuesta": "Te responderé por WhatsApp o email."
    },
    en: {
        "nav.inicio": "Home",
        "nav.proyectos": "Projects",
        "nav.servicios": "Services",
        "nav.proceso": "Process",
        "nav.sobre": "About",
        "nav.contacto": "Contact",
        "hero.subtitle": "Web Development",
        "hero.cta": "View projects",
        "proyectos.titulo": "Projects",
        "proyectos.ayg.desc": "Online accessories store with catalog, shopping cart and responsive design.",
        "proyectos.dgd.desc": "Website for a design and digital communication specialist with portfolio and contact.",
        "proyectos.ver": "View site",
        "servicios.titulo": "Services",
        "servicios.dev.titulo": "Web Development",
        "servicios.dev.desc": "Modern, fast sites adapted to any device.",
        "servicios.responsive.titulo": "Responsive Design",
        "servicios.responsive.desc": "Your page will look perfect on mobile, tablet and desktop.",
        "servicios.optimizacion.titulo": "Optimization",
        "servicios.optimizacion.desc": "Fast loading and clean code for better performance.",
        "servicios.tiendas.titulo": "Online Stores",
        "servicios.tiendas.desc": "Catalog and shopping cart integration.",
        "servicios.mantenimiento.titulo": "Monthly Maintenance",
        "servicios.mantenimiento.desc": "Updates, backups and ongoing support for your site.",
        "proceso.titulo": "Work Process",
        "proceso.consulta.titulo": "Consultation",
        "proceso.consulta.desc": "We discuss your project, needs and goals.",
        "proceso.diseno.titulo": "Design",
        "proceso.diseno.desc": "I create a mockup or prototype that reflects your brand.",
        "proceso.desarrollo.titulo": "Development",
        "proceso.desarrollo.desc": "I code the site with clean and optimized code.",
        "proceso.entrega.titulo": "Delivery",
        "proceso.entrega.desc": "I upload your website and teach you how to manage it.",
        "tecnologias.titulo": "Technologies",
        "stats.proyectos": "Projects delivered",
        "stats.clientes": "Happy clients",
        "stats.experiencia": "Years of experience",
        "testimonios.titulo": "What my clients say",
        "testimonios.ayg": "\"Excellent work, very professional and met deadlines. My website looks amazing.\"",
        "testimonios.dgd": "\"Very attentive to details, answered all my questions. Highly recommended.\"",
        "sobre.titulo": "About me",
        "sobre.texto1": "I am a web developer focused on creating modern, fast and optimized pages for businesses and entrepreneurs.",
        "sobre.texto2": "I work with HTML, CSS and JavaScript to build professional sites that help brands have an online presence.",
        "contacto.titulo": "Contact",
        "contacto.pregunta": "Do you want a website for your business?",
        "contacto.whatsapp": "Contact via WhatsApp",
        "contacto.instagram": "📷 Follow me on Instagram",
        "contacto.form.mensaje": "Or leave me your message and I'll get back to you soon:",
        "contacto.form.nombre": "Your name",
        "contacto.form.email": "Your email",
        "contacto.form.asunto": "Subject (e.g.: Online store)",
        "contacto.form.mensaje": "Tell me about your project...",
        "contacto.form.enviar": "Send message",
        "contacto.form.respuesta": "I will reply via WhatsApp or email."
    }
};

let currentLang = 'es';

// ======================== PRELOADER ========================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 500);
    }
});

// ======================== MENÚ HAMBURGUESA ANIMADO ========================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ======================== SCROLL REVEAL ========================
const cards = document.querySelectorAll('.card');
const servicios = document.querySelectorAll('.servicio-card');
const testimonios = document.querySelectorAll('.testimonio');
const procesoPasos = document.querySelectorAll('.proceso-paso');

const revealElements = [...cards, ...servicios, ...testimonios, ...procesoPasos];

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => {
    observer.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('visible');
    }
});

// ======================== BOTÓN VOLVER ARRIBA ========================
const btnUp = document.getElementById('btn-up');
window.addEventListener('scroll', () => {
    btnUp.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
btnUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ======================== HEADER COMPACTO ========================
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '8px 10%';
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.padding = '15px 10%';
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// ======================== CONTADOR ANIMADO ========================
const counters = document.querySelectorAll('.stat-number');
let started = false;
function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
            started = true;
            animateCounters();
            statsObserver.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
}

// ======================== TOASTS PERSONALIZADOS ========================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

// ======================== FORMULARIO DE CONTACTO ========================
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = form.querySelector('input[placeholder*="nombre"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const asunto = form.querySelector('input[placeholder*="Asunto"]').value.trim();
        const mensaje = form.querySelector('textarea').value.trim();
        
        if (!nombre || !email || !asunto || !mensaje) {
            showToast('⚠️ Por favor, completá todos los campos.', 'error');
            return;
        }
        
        const textoWhatsApp = `Hola NACHOX12, te escribo desde tu web:%0A%0A` +
                              `*Nombre:* ${nombre}%0A` +
                              `*Email:* ${email}%0A` +
                              `*Asunto:* ${asunto}%0A` +
                              `*Mensaje:* ${mensaje}%0A%0A` +
                              `¡Espero tu respuesta!`;
        
        window.open(`https://wa.me/5493364278256?text=${textoWhatsApp}`, '_blank');
        showToast('✅ Mensaje enviado. Te contactaré pronto.', 'success');
        form.reset();
    });
}

// ======================== SCROLL PADDING ========================
document.documentElement.style.scrollPaddingTop = '90px';

// ======================== PARTÍCULAS ========================
(function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 12 + 10) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        if (Math.random() > 0.7) particle.style.background = '#4fd1ff';
        container.appendChild(particle);
    }
})();

// ======================== TYPEWRITER (AHORA FUNCIONA) ========================
(function typewriterEffect() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    let i = 0;
    let text = translations[currentLang]["hero.subtitle"];

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100 + Math.random() * 60);
        } else {
            setTimeout(() => { el.style.borderRight = 'none'; }, 2000);
        }
    }

    function restart(newText) {
        text = newText;
        el.textContent = '';
        el.style.borderRight = '3px solid var(--primary)';
        i = 0;
        type();
    }

    type();
    setInterval(() => restart(text), 8000);

    window.restartTypewriter = restart;
})();

// ======================== LÍNEA DE TÍTULOS ========================
(function observeTitles() {
    const titles = document.querySelectorAll('.section h2');
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible-line');
        });
    }, { threshold: 0.6 });
    titles.forEach(title => titleObserver.observe(title));
})();

// ======================== EFECTO 3D OPTIMIZADO ========================
(function cards3DEffect() {
    const allCards = document.querySelectorAll('.card');
    let ticking = false;
    allCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / centerY * -5;
                    const rotateY = (x - centerX) / centerX * 5;
                    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();

// ======================== SLIDER CON SWIPE (AHORA FUNCIONA) ========================
(function() {
    const images = document.querySelectorAll('.slider-img');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderContainer = document.getElementById('sliderContainer');
    let currentIndex = 0;
    let interval;
    let touchStartX = 0;
    let touchEndX = 0;

    function showImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        images.forEach((img, i) => img.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
        currentIndex = index;
    }

    function nextImage() {
        showImage(currentIndex + 1);
        resetInterval();
    }

    function prevImage() {
        showImage(currentIndex - 1);
        resetInterval();
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextImage, 5000);
    }

    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextImage();
            else prevImage();
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            showImage(idx);
            resetInterval();
        });
    });

    resetInterval();
})();

// ======================== CAMBIO DE IDIOMA ========================
const langButtons = document.querySelectorAll('.lang-btn');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');
const placeholdersToTranslate = document.querySelectorAll('[data-i18n-placeholder]');

function setLanguage(lang) {
    currentLang = lang;
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    elementsToTranslate.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    placeholdersToTranslate.forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    if (window.restartTypewriter) {
        window.restartTypewriter(translations[lang]["hero.subtitle"]);
    }
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

// Inicializar idioma
setLanguage('es');

// ======================== SERVICE WORKER (PWA) ========================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}