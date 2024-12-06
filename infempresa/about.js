document.addEventListener('DOMContentLoaded', function() {
    // Asegurar que la página empiece desde arriba
    window.scrollTo(0, 0);
    
    // Mostrar splash screen
    const splashScreen = document.getElementById('splash-screen');
    const splashText = document.querySelector('.splash-text');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Array de mensajes para mostrar mientras carga
    const loadingMessages = [
        "Inicializando sistemas...",
        "Cargando historia empresarial...",
        "Preparando información del equipo...", 
        "Accediendo a valores corporativos...",
        "CARGANDO INFORMACIÓN CORPORATIVA"
    ];
    
    let currentMessage = 0;
    let progress = 0;
    
    // Función para actualizar la barra de progreso
    function updateProgress() {
        progress += 1;
        if (loadingProgress) {
            loadingProgress.style.width = `${progress}%`;
        }
    }

    // Cambiar mensajes cada cierto tiempo
    const messageInterval = setInterval(() => {
        splashText.style.opacity = '0';
        setTimeout(() => {
            splashText.textContent = loadingMessages[currentMessage];
            splashText.style.opacity = '1';
            currentMessage = (currentMessage + 1) % loadingMessages.length;
            updateProgress();
        }, 500);
    }, 1200);

    // Ocultar splash después de 6 segundos
    setTimeout(() => {
        clearInterval(messageInterval);
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            handleScrollAnimations();
        }, 500);
    }, 6000);

    // Optimización de carga de imágenes
    const imagesToPreload = [
        '../logo circular.png',
        '../fotos,videos/logo1.png'
    ];

    // Función para precargar imágenes (una sola vez)
    function preloadImages() {
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Inicializar precargas
    preloadImages();

    // Función para manejar las animaciones al hacer scroll
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '-50px 0px'
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Optimización de carga de video
    const video = document.querySelector('.feature-video');
    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.1 });

        videoObserver.observe(video);
    }
});

// También asegurar que al recargar la página vuelva arriba
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}; 

// Agregar schema.org para SEO
const schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization", 
    "name": "Code Mach Enterprise",
    "url": "https://codemachenterprise.com",
    "logo": "https://codemachenterprise.com/logo circular.png",
    "founder": {
        "@type": "Person",
        "name": "Maximiliano Ferreria"
    },
    "description": "Empresa líder en soluciones de seguridad informática y desarrollo de software",
    "foundingDate": "2022",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "Argentina"
    }
});
document.head.appendChild(schemaScript);