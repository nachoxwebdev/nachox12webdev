// ======================== MENÚ HAMBURGUESA ========================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ======================== SCROLL REVEAL (cards y elementos) ========================
const cards = document.querySelectorAll('.card');
const servicios = document.querySelectorAll('.servicio-card');
const testimonios = document.querySelectorAll('.testimonio');

const revealElements = [...cards, ...servicios, ...testimonios];

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
    // Si ya está visible al cargar
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('visible');
    }
});

// Asegurar que las cards también tengan la clase (por si acaso)
cards.forEach(card => {
    observer.observe(card);
});

// ======================== BOTÓN VOLVER ARRIBA ========================
const btnUp = document.getElementById('btn-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnUp.style.display = 'flex';
    } else {
        btnUp.style.display = 'none';
    }
});

btnUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ======================== HEADER MÁS COMPACTO AL SCROLL ========================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '8px 10%';
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.padding = '15px 10%';
    }
    lastScroll = window.scrollY;
});

// Cerrar menú al redimensionar (evita bugs)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

// ======================== CONTADOR ANIMADO (estadísticas) ========================
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

// ======================== FORMULARIO DE CONTACTO (envío a WhatsApp) ========================
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const nombre = form.querySelector('input[placeholder="Tu nombre"]').value.trim();
        const email = form.querySelector('input[placeholder="Tu email"]').value.trim();
        const mensaje = form.querySelector('textarea').value.trim();
        
        // Validar que no estén vacíos
        if (!nombre || !email || !mensaje) {
            alert('⚠️ Por favor, completá todos los campos antes de enviar.');
            return;
        }
        
        // Armar el mensaje para WhatsApp (formato amigable)
        const textoWhatsApp = `Hola NACHOX12, te escribo desde tu web:%0A%0A` +
                              `*Nombre:* ${nombre}%0A` +
                              `*Email:* ${email}%0A` +
                              `*Mensaje:* ${mensaje}%0A%0A` +
                              `¡Espero tu respuesta!`;
        
        // Tu número de WhatsApp (el mismo que ya usás)
        const numero = '5493364278256';
        
        // Abrir WhatsApp (puede ser app o web)
        window.open(`https://wa.me/${numero}?text=${textoWhatsApp}`, '_blank');
        
        // Mensaje de éxito y limpiar formulario
        alert('✅ Mensaje enviado. Te contactaré por WhatsApp a la brevedad.');
        form.reset();
    });
}

// ======================== SCROLL PADDING (compatibilidad) ========================
document.documentElement.style.scrollPaddingTop = '90px';