// Mover la función fuera del DOMContentLoaded para hacerla global
function closeSurveyBox() {
    const surveyBox = document.getElementById('floatingSurvey');
    surveyBox.classList.add('hiding');
    setTimeout(() => {
        surveyBox.style.display = 'none';
        surveyBox.classList.remove('hiding');
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    // Asegurar que la página empiece desde arriba
    window.scrollTo(0, 0);
    
    // Crear efecto de escáner
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    document.querySelector('.splash-screen').appendChild(scanLine);

    // Crear efecto de glitch en el fondo
    const glitchBg = document.createElement('div');
    glitchBg.className = 'glitch-bg';
    document.querySelector('.splash-screen').appendChild(glitchBg);

    // Mostrar splash screen
    const splashScreen = document.getElementById('splash-screen');
    
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            handleScrollAnimations();
        }, 500);
    }, 3000);

    // Optimización de carga de imágenes
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.loading = 'lazy';
        });
    } else {
        // Fallback para navegadores que no soportan lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
        document.body.appendChild(lazyLoadScript);
        
        lazyLoadScript.onload = function() {
            const observer = lozad('.lazy');
            observer.observe();
        }
    }

    // Optimización de rendimiento
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                scrollTimeout = null;
                requestAnimationFrame(handleScrollAnimations);
            }, 20);
        }
    });

    // Mejora de accesibilidad
    const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        if (!element.getAttribute('aria-label') && !element.innerText) {
            element.setAttribute('aria-label', element.title || 'Botón interactivo');
        }
    });

    const translations = {
        en: {
            'nav-home': 'Home',
            'nav-about': 'About Us', 
            'nav-services': 'Services',
            'nav-projects': 'Projects',
            'nav-contact': 'Contact',
            'hero-title': 'Code Mach',
            'hero-subtitle': 'Security/Software',
            'hero-description': 'We provide custom software solutions 💻, computer security 🔒, process automation ⚙️ and technical support 🛠️ to take your business to the next level 🚀.',
            'about-title': 'About the company',
            'about-subtitle': 'Extraordinary Web Developer!',
            'about-description': 'I am a frontend developer dedicated to creating visually attractive and easy-to-use websites. My experience includes HTML, CSS and JavaScript, and I am passionate about staying up to date on the latest trends in web development.',
            'services-title': 'Our Services',
            'service1-title': 'Web Development',
            'service1-description': 'I offer high-quality web development services, creating responsive and interactive websites tailored to client needs.',
            'service2-title': 'Graphic Design',
            'service2-description': 'With a creative touch, I provide graphic design services to enhance the visual appeal of websites and digital content.',
            'service3-title': 'Digital Marketing',
            'service3-description': 'I offer digital marketing solutions to help businesses increase their online presence and reach a wider audience.',
            'name-placeholder': 'Name',
            'lastname-placeholder': 'Last Name',
            'email-placeholder': 'Email',
            'phone-placeholder': 'Phone',
            'subject-placeholder': 'Subject',
            'message-placeholder': 'Message',
            'send-button': 'Send Message',
            'footer-copyright': '© 2024 Code Mach Enterprise. All rights reserved.',
            'privacy-policy': 'Privacy Policy',
            'terms-conditions': 'Terms and Conditions',
            'read-more': 'Read More',
            'view-more': 'View More'
        },
        es: {
            'nav-home': 'Inicio',
            'nav-about': 'Sobre Nosotros',
            'nav-services': 'Servicios', 
            'nav-projects': 'Proyectos',
            'nav-contact': 'Contacto',
            'hero-title': 'Code Mach',
            'hero-subtitle': 'Seguridad/Software',
            'hero-description': 'Brindamos soluciones de software a medida 💻, seguridad informática 🔒, automatización de procesos ⚙️ y soporte técnico 🛠️ para llevar tu negocio al siguiente nivel 🚀.',
            'about-title': 'Sobre la empresa',
            'about-subtitle': '¡Desarrolladora Web Extraordinaria!',
            'about-description': 'Soy una desarrolladora frontend dedicada a crear sitios web visualmente atractivos y fáciles de usar. Mi experiencia incluye HTML, CSS y JavaScript, y me apasiona mantenerme actualizada sobre las últimas tendencias en desarrollo web.',
            'services-title': 'Nuestros Servicios',
            'service1-title': 'Desarrollo Web',
            'service1-description': 'Ofrezco servicios de desarrollo web de alta calidad, creando sitios web responsivos e interactivos adaptados a las necesidades del cliente.',
            'service2-title': 'Diseño Gráfico',
            'service2-description': 'Con un toque creativo, proporciono servicios de diseño gráfico para mejorar el atractivo visual de sitios web y contenido digital.',
            'service3-title': 'Marketing Digital',
            'service3-description': 'Ofrezco soluciones de marketing digital para ayudar a las empresas a aumentar su presencia en línea y alcanzar una audiencia más amplia.',
            'name-placeholder': 'Nombre',
            'lastname-placeholder': 'Apellido',
            'email-placeholder': 'Correo Electrónico',
            'phone-placeholder': 'Teléfono',
            'subject-placeholder': 'Asunto',
            'message-placeholder': 'Mensaje',
            'send-button': 'Enviar Mensaje',
            'footer-copyright': '© 2024 Code Mach Enterprise. Todos los derechos reservados.',
            'privacy-policy': 'Políticas de Privacidad',
            'terms-conditions': 'Términos y Condiciones',
            'read-more': 'Leer Más',
            'view-more': 'Ver Más'
        }
    };

    // Agregar data-translate-key a los elementos HTML
    function initializeTranslateKeys() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            updateElementText(element, key, getCurrentLanguage());
        });
    }

    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'es';
    }

    function updateElementText(element, key, lang) {
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    }

    function updatePlaceholders(lang) {
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
    }

    function changeLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        
        // Actualizar textos
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            updateElementText(element, key, lang);
        });

        // Actualizar placeholders
        updatePlaceholders(lang);

        // Actualizar clase active en las banderas
        document.querySelectorAll('.flag-icon').forEach(flag => {
            flag.classList.toggle('active', flag.dataset.lang === lang);
        });
    }

    // Event listeners para las banderas
    document.querySelectorAll('.flag-icon').forEach(flag => {
        flag.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Inicializar con el idioma guardado o por defecto
    const savedLanguage = getCurrentLanguage();
    changeLanguage(savedLanguage);
    initializeTranslateKeys();

    // Manejo del menú hamburguesa
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    let isMenuOpen = false; // Variable para rastrear el estado del menú
    
    // Toggle del menú
    navbarToggler.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        isMenuOpen = !isMenuOpen;
        
        if (!isMenuOpen) {
            navbarCollapse.classList.remove('show');
            // Esperar a que termine la transición antes de ocultar
            setTimeout(() => {
                if (!isMenuOpen) { // Verificar de nuevo por si cambió durante la transición
                    navbarCollapse.style.display = 'none';
                }
            }, 300); // Mismo tiempo que la transición CSS
            navbarToggler.setAttribute('aria-expanded', 'false');
        } else {
            navbarCollapse.style.display = 'block';
            // Forzar un reflow antes de agregar la clase show
            navbarCollapse.offsetHeight;
            navbarCollapse.classList.add('show');
            navbarToggler.setAttribute('aria-expanded', 'true');
        }
    });

    // Cerrar el menú al hacer clic en los enlaces
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                navbarCollapse.style.display = 'none';
                isMenuOpen = false; // Actualizar el estado
                navbarToggler.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!navbarToggler.contains(event.target) && 
            !navbarCollapse.contains(event.target) && 
            navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarCollapse.style.display = 'none';
            isMenuOpen = false; // Actualizar el estado
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });

    // Función para manejar las animaciones al hacer scroll
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Si el elemento es visible
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    // Cuando el elemento sale del viewport, removemos la clase
                    entry.target.classList.remove('animate');
                }
            });
        }, { 
            threshold: 0.15,
            rootMargin: '-50px 0px'
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Inicializar las animaciones
    handleScrollAnimations();

    // Scroll suave para los enlaces del menú
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if(targetSection) {
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Video Modal Handler
    const verMasBtn = document.getElementById('verMasBtn');
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    if (verMasBtn && videoModal) {
        const modal = new bootstrap.Modal(videoModal);

        verMasBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.show();
            videoPlayer.play();
        });

        videoModal.addEventListener('hidden.bs.modal', function () {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        });
    }

    // Optimización de modales
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function() {
            document.body.style.overflow = 'hidden';
        });
        
        modal.addEventListener('hidden.bs.modal', function() {
            document.body.style.overflow = '';
        });
    });

    // Actualizar los enlaces de "Ver más" en las cards de servicios
    document.querySelectorAll('.service-card .btn-primary').forEach(btn => {
        const serviceTitle = btn.closest('.service-card').querySelector('.service-title').textContent.trim();
        
        if (btn.textContent.trim() !== 'Próximamente') {
            btn.setAttribute('data-bs-toggle', 'modal');
            
            switch(serviceTitle) {
                case 'Desarrollo Web Estático':
                    btn.setAttribute('data-bs-target', '#servicioWeb');
                    break;
                case 'Auditorías de Seguridad':
                    btn.setAttribute('data-bs-target', '#servicioAuditoria');
                    break;
                case 'Consultoría Empresarial':
                    btn.setAttribute('data-bs-target', '#servicioConsultoria');
                    break;
                case 'Automatización de Procesos':
                    btn.setAttribute('data-bs-target', '#servicioAutomatizacion');
                    break;
            }
        } else {
            // Para servicios próximamente, deshabilitamos el botón
            btn.classList.add('disabled');
            btn.style.opacity = '0.7';
        }
    });

    // Optimización para dispositivos móviles
    function adjustMobileLayout() {
        const isMobile = window.innerWidth <= 768;
        
        // Ajustar altura de splash screen en móviles
        if (isMobile) {
            const splashScreen = document.querySelector('.splash-screen');
            if (splashScreen) {
                splashScreen.style.height = `${window.innerHeight}px`;
            }
        }

        // Ajustar espaciado de modales en móviles
        const modalDialogs = document.querySelectorAll('.modal-dialog');
        modalDialogs.forEach(dialog => {
            if (isMobile) {
                dialog.style.margin = '10px';
            } else {
                dialog.style.margin = '1.75rem auto';
            }
        });

        // Ajustar navegación en móviles
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (isMobile && navbarCollapse) {
            navbarCollapse.style.maxHeight = `${window.innerHeight - 60}px`;
            navbarCollapse.style.overflowY = 'auto';
        }
    }

    // Ejecutar ajustes al cargar y al cambiar el tamaño de la ventana
    adjustMobileLayout();
    window.addEventListener('resize', adjustMobileLayout);

    // Actualizar rutas en precargas de imágenes
    const imagesToPreload = [
        'assets/images/logo-circular.png',
        'assets/images/logo1.png',
        'assets/images/logo2.png',
        'assets/images/services/paginaweb.jpg',
        'assets/images/services/seguridad.jpg',
        'assets/images/services/consultoria.jpg',
        'assets/images/services/automatizacion.jpg'
    ];

    // Precarga de imágenes
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Actualizar el manejo del formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                nombre: document.querySelector('input[name="nombre"]').value,
                apellido: document.querySelector('input[name="apellido"]').value,
                email: document.querySelector('input[name="email"]').value,
                telefono: document.querySelector('input[name="telefono"]').value,
                asunto: document.querySelector('input[name="asunto"]').value,
                mensaje: document.querySelector('textarea[name="mensaje"]').value
            };

            try {
                const response = await fetch('https://magicloops.dev/api/loop/efa105e9-4e79-40de-8147-ee1f0f495539/run', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    // Crear y mostrar la alerta
                    const alert = document.createElement('div');
                    alert.className = 'success-alert';
                    alert.innerHTML = `
                        <i class="bi bi-check-circle-fill success-icon"></i>
                        <h3>¡Mensaje Enviado!</h3>
                        <p>Nos pondremos en contacto contigo pronto</p>
                    `;
                    document.body.appendChild(alert);
                    
                    // Limpiar el formulario
                    contactForm.reset();
                    
                    // Remover la alerta después de 3 segundos
                    setTimeout(() => {
                        alert.style.opacity = '0';
                        alert.style.transform = 'translate(-50%, -40%)';
                        setTimeout(() => {
                            document.body.removeChild(alert);
                        }, 300);
                    }, 3000);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    // Función para enviar eventos a Google Analytics
    function sendGAEvent(category, action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }

    // Ejemplo de uso en el formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            // ... código existente del submit ...
            
            // Agregar evento de Analytics
            sendGAEvent('Contact', 'Form Submit', 'Contact Form');
            
            // ... resto del código ...
        });
    }

    // Rastrear clics en enlaces de servicios
    document.querySelectorAll('.service-card .btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            const serviceTitle = this.closest('.service-card').querySelector('.service-title').textContent;
            sendGAEvent('Services', 'View Service', serviceTitle);
        });
    });

    // Agregar el event listener al botón de cierre
    const closeButton = document.querySelector('.survey-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeSurveyBox);
    }

    // Mostrar el cuadro después de 2 segundos
    setTimeout(() => {
        const surveyBox = document.getElementById('floatingSurvey');
        if (surveyBox) {
            surveyBox.style.display = 'block';
        }
    }, 2000);

    // Ajustar el diseño para dispositivos móviles
    function adjustMobileLayout() {
        const isMobile = window.innerWidth <= 768;
        const surveyBox = document.getElementById('floatingSurvey');
        if (isMobile) {
            surveyBox.style.width = '90%';
            surveyBox.style.left = '50%';
            surveyBox.style.transform = 'translateX(-50%)';
        } else {
            surveyBox.style.width = '320px';
            surveyBox.style.left = '30px';
            surveyBox.style.transform = 'none';
        }
    }

    // Ejecutar ajustes al cargar y al cambiar el tamaño de la ventana
    adjustMobileLayout();
    window.addEventListener('resize', adjustMobileLayout);
});

// Mejora del rendimiento del scroll
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleScrollAnimations();
            ticking = false;
        });
        ticking = true;
    }
});

// También asegurar que al recargar la página vuelva arriba
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};
