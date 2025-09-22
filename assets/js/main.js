document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const typingText = document.getElementById('typing-text');
    const statCounts = document.querySelectorAll('.stat-count');
    
    // Fonction pour activer/désactiver le menu mobile
    function toggleNav() {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    // Gestionnaire d'événement pour le burger menu
    if (burger) {
        burger.addEventListener('click', toggleNav);
    }
    
    // Fermer le menu lorsqu'un lien est cliqué
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleNav();
                }
            });
        });
    }
    
    // Changer le style de l'en-tête au défilement
    let lastScrollPosition = 0;
    
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        
        // Ajoute la classe 'scrolled' à l'en-tête
        if (currentScrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Masque/affiche l'en-tête lors du défilement
        if (currentScrollPosition > 300) {
            if (currentScrollPosition > lastScrollPosition) {
                // Défilement vers le bas
                header.classList.add('scrolled-hidden');
                header.classList.remove('scrolled-visible');
            } else {
                // Défilement vers le haut
                header.classList.remove('scrolled-hidden');
                header.classList.add('scrolled-visible');
            }
        }
        
        lastScrollPosition = currentScrollPosition;
    });
    
    // Animation de texte d'écriture
    if (typingText) {
        const rolesData = {
            fr: ['Full Stack', 'Web', 'Mobile', 'Cybersécurité'],
            en: ['Full Stack', 'Web', 'Mobile', 'Cybersecurity'] // Animation similaire en anglais
        };
        
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;
        let animationActive = false;
        
        function getCurrentLanguage() {
            return window.getCurrentLanguage ? window.getCurrentLanguage() : 'fr';
        }
        
        function startTypingAnimation(roles) {
            if (roles.length === 0) {
                // Pas d'animation, masquer le texte
                typingText.style.display = 'none';
                return;
            }
            
            typingText.style.display = 'inline';
            animationActive = true;
            roleIndex = 0;
            charIndex = 0;
            isDeleting = false;
            
            function typeText() {
                if (!animationActive) return;
                
                const currentRole = roles[roleIndex];
                
                if (isDeleting) {
                    // Suppression de caractères
                    typingText.textContent = currentRole.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 80;
                } else {
                    // Ajout de caractères
                    typingText.textContent = currentRole.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 150;
                }
                
                // Gérer la fin de l'ajout ou de la suppression
                if (!isDeleting && charIndex === currentRole.length) {
                    // Pause à la fin de l'écriture
                    isDeleting = true;
                    typingSpeed = 1500; // Pause avant de commencer à supprimer
                } else if (isDeleting && charIndex === 0) {
                    // Passer au prochain rôle
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    typingSpeed = 500; // Pause avant de commencer le prochain mot
                }
                
                // Ajouter le curseur clignotant
                if (typingText.nextElementSibling?.classList.contains('typing-cursor')) {
                    // Le curseur existe déjà
                } else {
                    const cursor = document.createElement('span');
                    cursor.classList.add('typing-cursor');
                    typingText.parentNode.insertBefore(cursor, typingText.nextSibling);
                }
                
                setTimeout(typeText, typingSpeed);
            }
            
            // Démarrer l'animation après un délai
            setTimeout(typeText, 1000);
        }
        
        function updateTypingBasedOnLanguage() {
            const currentLang = getCurrentLanguage();
            const roles = rolesData[currentLang] || rolesData.fr;
            
            // Arrêter l'animation actuelle
            animationActive = false;
            
            // Nettoyer le curseur existant
            const existingCursor = typingText.nextElementSibling;
            if (existingCursor?.classList.contains('typing-cursor')) {
                existingCursor.remove();
            }
            
            // Démarrer la nouvelle animation
            setTimeout(() => startTypingAnimation(roles), 500);
        }
        
        // Initialiser l'animation
        updateTypingBasedOnLanguage();
        
        // Écouter les changements de langue
        window.addEventListener('languageChanged', updateTypingBasedOnLanguage);
    }
    
    // Animation des éléments au défilement
    function animateOnScroll() {
        const elementsToAnimate = document.querySelectorAll('.fade-in');
        
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
        
        // Animation des statistiques
        statCounts.forEach(stat => {
            const statTop = stat.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (statTop < windowHeight - 50 && !stat.classList.contains('animate')) {
                stat.classList.add('animate');
                
                const finalValue = parseInt(stat.textContent.replace(/\+/g, ''));
                let startValue = 0;
                const duration = 2000;
                const increment = Math.ceil(finalValue / (duration / 50));
                
                function updateCount() {
                    startValue += increment;
                    if (startValue >= finalValue) {
                        stat.textContent = finalValue + '+';
                    } else {
                        stat.textContent = startValue + '+';
                        setTimeout(updateCount, 50);
                    }
                }
                
                updateCount();
            }
        });
    }
    
    // Ajouter la classe fade-in aux éléments à animer
    function setupAnimations() {
        // Ajouter des classes d'animation à divers éléments
        const sectionsHeaders = document.querySelectorAll('.section-header');
        sectionsHeaders.forEach(header => {
            header.classList.add('fade-in');
        });
        
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('fade-in');
            if (index % 3 === 1) card.classList.add('fade-in-delay-1');
            if (index % 3 === 2) card.classList.add('fade-in-delay-2');
        });
        
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach((category, index) => {
            category.classList.add('fade-in');
            if (index % 4 === 1) category.classList.add('fade-in-delay-1');
            if (index % 4 === 2) category.classList.add('fade-in-delay-2');
            if (index % 4 === 3) category.classList.add('fade-in-delay-3');
        });
        
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            aboutContent.classList.add('fade-in');
        }
    }
    
    // Initialiser les animations
    setupAnimations();
    
    // Exécuter l'animation au chargement initial et au défilement
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});