document.addEventListener('DOMContentLoaded', function() {
    // Configuration de l'Intersection Observer pour une meilleure performance
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px 0px -10% 0px', // Déclenche quand l'élément est à 10% du bas de l'écran
        threshold: [0, 0.1, 0.3] // Déclenche à différents niveaux de visibilité
    };

    // Observer pour les éléments de chronologie
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                // Animation d'entrée
                animateTimelineItem(entry.target, index);
                // Arrêter d'observer cet élément une fois animé
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer pour les cartes de formation
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                // Animation d'entrée
                animateEducationCard(entry.target, index);
                // Arrêter d'observer cet élément une fois animé
                educationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Fonction pour animer les éléments de chronologie
    function animateTimelineItem(element, index) {
        // Délai progressif basé sur l'index
        const delay = index * 200; // 200ms entre chaque élément
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.classList.add('animated');
        }, delay);
    }

    // Fonction pour animer les cartes de formation
    function animateEducationCard(element, index) {
        const delay = index * 150; // 150ms entre chaque carte
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.classList.add('animated');
        }, delay);
    }

    // Initialiser les animations
    function initAnimations() {
        // Sélectionner tous les éléments de chronologie
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        // Préparer les éléments et les observer
        timelineItems.forEach((item, index) => {
            // État initial
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            // Commencer à observer
            timelineObserver.observe(item);
        });

        // Sélectionner toutes les cartes de formation
        const educationCards = document.querySelectorAll('.education-card');
        
        educationCards.forEach((card, index) => {
            // État initial
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            // Commencer à observer
            educationObserver.observe(card);
        });
    }

    // Fallback pour les navigateurs ne supportant pas Intersection Observer
    function fallbackAnimation() {
        console.warn('Intersection Observer non supporté, utilisation du scroll classique');
        
        function handleScroll() {
            const timelineItems = document.querySelectorAll('.timeline-item:not(.animated)');
            const educationCards = document.querySelectorAll('.education-card:not(.animated)');
            
            // Vérifier les éléments de chronologie
            timelineItems.forEach((item, index) => {
                if (isElementInViewport(item)) {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.classList.add('animated');
                    }, index * 200);
                }
            });
            
            // Vérifier les cartes de formation
            educationCards.forEach((card, index) => {
                if (isElementInViewport(card)) {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.classList.add('animated');
                    }, index * 150);
                }
            });
        }
        
        // Fonction améliorée de détection de visibilité
        function isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            return (
                rect.top >= 0 &&
                rect.top <= windowHeight * 0.8 && // L'élément apparaît quand il est à 80% de la hauteur de l'écran
                rect.bottom >= 0
            );
        }
        
        // Initialiser les styles
        const allItems = [...document.querySelectorAll('.timeline-item'), ...document.querySelectorAll('.education-card')];
        allItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Écouter le scroll
        window.addEventListener('scroll', handleScroll);
        // Vérifier au chargement
        handleScroll();
    }

    // Vérifier le support de Intersection Observer
    if ('IntersectionObserver' in window) {
        initAnimations();
    } else {
        fallbackAnimation();
    }

    // Animation d'entrée pour la bannière (visible immédiatement)
    const banner = document.querySelector('.experience-banner');
    if (banner) {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(-20px)';
        banner.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Animer après un court délai
        setTimeout(() => {
            banner.style.opacity = '1';
            banner.style.transform = 'translateY(0)';
        }, 100);
    }
});