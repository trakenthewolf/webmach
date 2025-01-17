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

    // Rastrear clic en el botón de comenzar
    const startButton = document.querySelector('.floating-survey .btn');
    if (startButton) {
        startButton.addEventListener('click', function() {
            sendGAEvent('Survey', 'Start Form', 'User started the form');
        });
    }

    // Mostrar el modal de cursos después del splash screen
    setTimeout(() => {
        showCursosRecomendados();
    }, 3500); // 3.5 segundos después de cargar (después del splash screen)
});

function showCursosRecomendados() {
    const modalHTML = `
        <div class="modal fade" id="cursosRecomendadosModal">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content cyber-modal">
                    <div class="modal-header">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-mortarboard-fill fs-3 me-2 text-neon"></i>
                            <h5 class="modal-title mb-0">¡Los Mejores Cursos de Ciberseguridad!</h5>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="cursos-grid">
                            <!-- Hack4u -->
                            <div class="curso-card">
                                <img src="fotos,videos/savitar.jpg" alt="Hack4u" class="curso-imagen">
                                <div class="curso-content">
                                    <h3>Hack4u Academy</h3>
                                    <p>La academia #1 de hacking en español. Laboratorios prácticos y contenido actualizado.</p>
                                    <a href="https://hack4u.io/" class="btn-curso" target="_blank">
                                        Explorar Academia
                                    </a>
                                </div>
                            </div>

                            <!-- Contando Bits -->
                            <div class="curso-card">
                                <img src="fotos,videos/bitacademia.jpg" alt="Contando Bits" class="curso-imagen">
                                <div class="curso-content">
                                    <h3>Contando Bits</h3>
                                    <p>Cursos especializados en hacking ético y ciberseguridad desde cero.</p>
                                    <a href="https://www.contandobits.com/cursos/" class="btn-curso" target="_blank">
                                        Ver Cursos
                                    </a>
                                </div>
                            </div>

                            <!-- Securiters -->
                            <div class="curso-card">
                                <img src="fotos,videos/securite.jpg" alt="Securiters" class="curso-imagen">
                                <div class="curso-content">
                                    <h3>Securiters</h3>
                                    <p>Formación práctica en auditoría web y ciberseguridad ofensiva.</p>
                                    <a href="https://securiters.com/" class="btn-curso" target="_blank">
                                        Descubrir Más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = new bootstrap.Modal(document.getElementById('cursosRecomendadosModal'));
    modal.show();
}

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
// Configuración de animaciones al hacer scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
}

// Optimizar el evento scroll
let isScrolling;
window.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        handleScrollAnimations();
    }, 50); // Retardo para mejorar el rendimiento
});

// Inicializar animaciones al cargar la página
window.addEventListener('DOMContentLoaded', handleScrollAnimations);

// Agregar después de las funciones existentes
function startDiagnostic(type) {
    // Ocultar el modal de selección
    const selectModal = document.getElementById('diagnosticoModal');
    const bsSelectModal = bootstrap.Modal.getInstance(selectModal);
    bsSelectModal.hide();

    // Mostrar el modal de preguntas
    setTimeout(() => {
        showQuestionModal(type);
    }, 500);
}

function showQuestionModal(type) {
    const modalHTML = `
    <div class="modal fade" id="questionModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content cyber-modal">
                <div class="modal-header">
                    <h5 class="modal-title">${type === 'user' ? 'Diagnóstico Personal' : 'Diagnóstico Empresarial'}</h5>
                    <div class="progress-bar-container">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 0%"></div>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div id="question-container">
                        <!-- Las preguntas se insertarán aquí -->
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    // Agregar el modal al DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Inicializar y mostrar el modal
    const questionModal = new bootstrap.Modal(document.getElementById('questionModal'));
    questionModal.show();

    // Iniciar el diagnóstico
    startQuestions(type);
}

function startQuestions(type) {
    const questions = type === 'user' ? userQuestions : businessQuestions;
    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        const questionContainer = document.getElementById('question-container');
        const question = questions[currentQuestion];
        
        questionContainer.innerHTML = `
            <h4 class="mb-4">${question.question}</h4>
            <div class="options-grid">
                ${question.options.map((option, index) => `
                    <div class="option-card" onclick="selectAnswer(${index}, ${option.score})">
                        <div class="option-content">
                            <p>${option.text}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Actualizar barra de progreso
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.width = `${(currentQuestion + 1) * 100 / questions.length}%`;
    }

    window.selectAnswer = function(index, optionScore) {
        score += optionScore;
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResults(score, questions.length * 10);
        }
    };

    showQuestion();
}

function showResults(score, maxScore) {
    const percentage = (score / maxScore) * 100;
    const resultLevel = getResultLevel(percentage);
    
    // Determinar el color según el porcentaje
    let scoreColor;
    if (percentage >= 70) {
        scoreColor = '#39FF14'; // Verde neón para buenos resultados
    } else if (percentage >= 50) {
        scoreColor = '#FFA500'; // Naranja para resultados medios
    } else {
        scoreColor = '#FF0000'; // Rojo para resultados bajos
    }
    
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="results-container text-center">
            <h3 class="mb-4">Resultados del Diagnóstico</h3>
            <div class="score-circle mb-4" style="border-color: ${scoreColor}; box-shadow: 0 0 20px ${scoreColor}40;">
                <span class="score-number" style="color: ${scoreColor};">${Math.round(percentage)}%</span>
            </div>
            <h4 class="mb-3" style="color: ${scoreColor};">${resultLevel.title}</h4>
            <p class="mb-4">${resultLevel.description}</p>
            <div class="button-group">
                <button class="btn btn-primary me-2" onclick="downloadResults(${percentage}, '${resultLevel.title}', '${resultLevel.description}')">
                    <i class="bi bi-download me-2"></i>Descargar Resultados
                </button>
                <button class="btn btn-secondary" onclick="closeQuestionModal()">
                    <i class="bi bi-x-circle me-2"></i>Cerrar
                </button>
            </div>
        </div>
    `;

    // Actualizar la animación del glow según el color
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glow-${Math.round(percentage)} {
            from {
                box-shadow: 0 0 10px ${scoreColor}40;
            }
            to {
                box-shadow: 0 0 20px ${scoreColor}80;
            }
        }
    `;
    document.head.appendChild(style);
    
    const scoreCircle = questionContainer.querySelector('.score-circle');
    scoreCircle.style.animation = `glow-${Math.round(percentage)} 2s infinite alternate`;
}

function getResultLevel(percentage) {
    if (percentage >= 90) {
        return {
            title: "Nivel Excelente",
            description: "¡Felicitaciones! Tu nivel de seguridad es excepcional. Continúa manteniendo estas buenas prácticas."
        };
    } else if (percentage >= 70) {
        return {
            title: "Nivel Bueno",
            description: "Tienes buenas prácticas de seguridad, pero hay espacio para mejorar algunos aspectos."
        };
    } else if (percentage >= 50) {
        return {
            title: "Nivel Medio",
            description: "Tu seguridad necesita atención. Considera implementar medidas adicionales para mejorar tu protección."
        };
    } else {
        return {
            title: "Nivel Crítico",
            description: "¡Atención! Tu nivel de seguridad es muy bajo y requiere atención inmediata. Te recomendamos tomar medidas urgentes."
        };
    }
}

// Variables globales para el diagnóstico
let currentQuestion = 0;
let userAnswers = [];
let questions = [];
let diagnosticType = '';

// Preguntas para usuarios individuales
const userQuestions = [
    {
        question: "¿Qué tipo de contraseñas utilizas habitualmente?",
        options: [
            { text: "Contraseñas únicas, largas y complejas para cada servicio", score: 10 },
            { text: "Contraseñas diferentes pero simples", score: 6 },
            { text: "La misma contraseña para varios servicios", score: 3 },
            { text: "Contraseñas muy básicas (123456, fecha nacimiento)", score: 0 }
        ]
    },
    {
        question: "¿Cómo proteges tus dispositivos móviles?",
        options: [
            { text: "Biometría + PIN complejo + cifrado de datos", score: 10 },
            { text: "PIN o patrón complejo", score: 7 },
            { text: "PIN simple o patrón básico", score: 4 },
            { text: "Sin protección", score: 0 }
        ]
    },
    {
        question: "¿Qué medidas de seguridad usas en tus redes WiFi?",
        options: [
            { text: "WPA3 + contraseña fuerte + red de invitados separada", score: 10 },
            { text: "WPA2 + contraseña moderada", score: 7 },
            { text: "Configuración básica del router", score: 4 },
            { text: "Configuración predeterminada o red abierta", score: 0 }
        ]
    },
    {
        question: "¿Cómo manejas las copias de seguridad?",
        options: [
            { text: "Backups automáticos cifrados en múltiples ubicaciones", score: 10 },
            { text: "Backups regulares en disco externo", score: 7 },
            { text: "Backups ocasionales", score: 4 },
            { text: "No realizo copias de seguridad", score: 0 }
        ]
    },
    {
        question: "¿Qué medidas tomas para la navegación web?",
        options: [
            { text: "VPN + navegación privada + bloqueador de anuncios", score: 10 },
            { text: "Navegación privada y antivirus", score: 7 },
            { text: "Solo antivirus básico", score: 4 },
            { text: "Ninguna medida especial", score: 0 }
        ]
    },
    {
        question: "¿Cómo verificas la autenticidad de los correos?",
        options: [
            { text: "Verifico remitentes, enlaces y nunca abro adjuntos sospechosos", score: 10 },
            { text: "Reviso el remitente y evito enlaces sospechosos", score: 7 },
            { text: "Solo abro correos de conocidos", score: 4 },
            { text: "Abro todos los correos sin verificar", score: 0 }
        ]
    },
    {
        question: "¿Cómo proteges tus redes sociales?",
        options: [
            { text: "2FA + contraseñas únicas + revisión periódica de privacidad", score: 10 },
            { text: "2FA y contraseñas seguras", score: 7 },
            { text: "Solo contraseñas básicas", score: 4 },
            { text: "Sin medidas especiales", score: 0 }
        ]
    },
    {
        question: "¿Qué medidas tomas con tus dispositivos IoT?",
        options: [
            { text: "Red separada + actualizaciones automáticas + contraseñas únicas", score: 10 },
            { text: "Actualizaciones regulares y contraseñas personalizadas", score: 7 },
            { text: "Configuración básica", score: 4 },
            { text: "Configuración predeterminada", score: 0 }
        ]
    },
    {
        question: "¿Cómo manejas tus documentos sensibles?",
        options: [
            { text: "Cifrado + almacenamiento seguro + destrucción segura", score: 10 },
            { text: "Almacenamiento protegido con contraseña", score: 7 },
            { text: "Carpetas privadas básicas", score: 4 },
            { text: "Sin protección especial", score: 0 }
        ]
    }
];

// Preguntas para empresas
const businessQuestions = [
    {
        question: "¿Qué políticas de seguridad implementa su empresa?",
        options: [
            { text: "Políticas completas documentadas, actualizadas y auditadas", score: 10 },
            { text: "Políticas básicas documentadas", score: 7 },
            { text: "Políticas informales no documentadas", score: 4 },
            { text: "Sin políticas establecidas", score: 0 }
        ]
    },
    {
        question: "¿Cómo gestiona los accesos de usuarios?",
        options: [
            { text: "2FA + roles definidos + revisión periódica de accesos", score: 10 },
            { text: "Usuarios únicos y contraseñas fuertes", score: 7 },
            { text: "Usuarios compartidos con contraseñas", score: 3 },
            { text: "Sin control de accesos", score: 0 }
        ]
    },
    {
        question: "¿Qué medidas de seguridad física implementa?",
        options: [
            { text: "Control biométrico + CCTV + registro de accesos", score: 10 },
            { text: "Control de acceso con tarjetas y CCTV", score: 7 },
            { text: "Cerraduras básicas y algunas cámaras", score: 4 },
            { text: "Seguridad física mínima", score: 0 }
        ]
    },
    {
        question: "¿Cómo maneja la seguridad de la red empresarial?",
        options: [
            { text: "Firewall + IDS/IPS + Segmentación + Monitoreo 24/7", score: 10 },
            { text: "Firewall y antivirus empresarial", score: 7 },
            { text: "Protección básica de red", score: 4 },
            { text: "Sin protecciones especiales", score: 0 }
        ]
    },
    {
        question: "¿Qué protocolo sigue para copias de seguridad?",
        options: [
            { text: "Backup automático cifrado 3-2-1 con pruebas de recuperación", score: 10 },
            { text: "Backups diarios en diferentes ubicaciones", score: 7 },
            { text: "Backups ocasionales locales", score: 4 },
            { text: "Sin política de backups", score: 0 }
        ]
    },
    {
        question: "¿Cómo maneja la capacitación en seguridad?",
        options: [
            { text: "Programa continuo + simulacros + evaluaciones", score: 10 },
            { text: "Capacitaciones periódicas básicas", score: 7 },
            { text: "Capacitaciones ocasionales", score: 4 },
            { text: "Sin capacitación en seguridad", score: 0 }
        ]
    },
    {
        question: "¿Cómo gestiona la seguridad en el desarrollo de software?",
        options: [
            { text: "DevSecOps + pruebas automáticas + auditorías regulares", score: 10 },
            { text: "Revisiones de código y pruebas básicas", score: 7 },
            { text: "Pruebas ocasionales", score: 4 },
            { text: "Sin proceso formal", score: 0 }
        ]
    },
    {
        question: "¿Qué plan de continuidad de negocio tiene implementado?",
        options: [
            { text: "Plan completo + pruebas regulares + actualizaciones", score: 10 },
            { text: "Plan básico documentado", score: 7 },
            { text: "Procedimientos informales", score: 4 },
            { text: "Sin plan establecido", score: 0 }
        ]
    },
    {
        question: "¿Cómo maneja la seguridad con proveedores externos?",
        options: [
            { text: "Evaluación rigurosa + monitoreo continuo + contratos detallados", score: 10 },
            { text: "Evaluación básica y contratos estándar", score: 7 },
            { text: "Revisión informal", score: 4 },
            { text: "Sin evaluación de seguridad", score: 0 }
        ]
    }
];

// Función para iniciar el diagnóstico
function startDetailedDiagnostic(type) {
    diagnosticType = type;
    currentQuestion = 0;
    userAnswers = [];
    questions = type === 'user' ? userQuestions : businessQuestions;
    
    const diagnosticModal = bootstrap.Modal.getInstance(document.getElementById('diagnosticoModal'));
    if (diagnosticModal) {
        diagnosticModal.hide();
    }
    
    showDiagnosticQuestion();
}

// Función para mostrar la pregunta actual
function showDiagnosticQuestion() {
    const modalContent = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content cyber-modal">
                <div class="modal-header">
                    <h5 class="modal-title">Pregunta ${currentQuestion + 1} de ${questions.length}</h5>
                    <div class="progress w-100 mt-2">
                        <div class="progress-bar" style="width: ${(currentQuestion + 1) * 100 / questions.length}%"></div>
                    </div>
                </div>
                <div class="modal-body">
                    <h6 class="question-text mb-4">${questions[currentQuestion].question}</h6>
                    <div class="options-grid">
                        ${questions[currentQuestion].options.map((option, index) => `
                            <div class="option-card" onclick="selectAnswer(${index})">
                                <div class="option-content">
                                    ${option.text}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // ... resto del código para mostrar el modal ...
}

// Agregar función para descargar resultados
function downloadResults(percentage, title, description) {
    const date = new Date().toLocaleDateString();
    const content = `
Diagnóstico de Seguridad - Code Mach Enterprise
Fecha: ${date}

Resultado: ${Math.round(percentage)}%
Nivel: ${title}

Evaluación:
${description}

Recomendaciones:
- Mantener actualizadas todas las medidas de seguridad
- Realizar evaluaciones periódicas
- Implementar las mejoras sugeridas
- Contactar con profesionales para áreas críticas

Para más información y asesoramiento profesional:
Contacte con Code Mach Enterprise
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diagnostico-seguridad-${date}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Agregar función para cerrar el modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
            bsModal.hide();
        }
        // Limpiar el backdrop y restaurar el scroll
        setTimeout(() => {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }, 300);
    });
}

// Agregar nueva función para cerrar específicamente el modal de preguntas
function closeQuestionModal() {
    const questionModal = document.getElementById('questionModal');
    if (questionModal) {
        const bsModal = bootstrap.Modal.getInstance(questionModal);
        if (bsModal) {
            bsModal.hide();
        }
        // Limpiar el modal y el backdrop después de cerrarlo
        setTimeout(() => {
            questionModal.remove();
            // Remover el backdrop manualmente
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            // Restaurar el scroll del body
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }, 300);
    }
}
