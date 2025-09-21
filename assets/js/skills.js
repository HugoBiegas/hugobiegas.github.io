/**
 * SKILLS.JS - Système d'évaluation des compétences
 * Version complète avec navigation Hard Skills / Soft Skills
 * et bouton retour en haut
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initialisation du système de compétences...');
    
    // Configuration des niveaux
    const skillLevels = {
        expert: { description: 'Maîtrise complète avec 3+ années d\'expérience', color: '#27ae60' },
        advanced: { description: 'Bonne maîtrise avec projets professionnels', color: '#3498db' },
        intermediate: { description: 'Compétences solides en développement', color: '#f39c12' },
        beginner: { description: 'Bases acquises avec premiers projets', color: '#e74c3c' },
        learning: { description: 'En cours d\'apprentissage', color: '#9b59b6' }
    };

    // Initialisation du système
    initializeSkillSystem();
    animateSkillItems();
    addInteractions();
    initializeNavigation();
    initializeBackToTop();

    /**
     * Initialise le système de compétences
     */
    function initializeSkillSystem() {
        const skillItems = document.querySelectorAll('.skill-item');
        console.log(`📊 ${skillItems.length} compétences détectées`);
        
        // Ajouter des data attributes pour l'animation
        skillItems.forEach((item, index) => {
            item.style.setProperty('--animation-order', index);
        });
    }

    /**
     * Anime l'apparition des items de compétences
     */
    function animateSkillItems() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            // État initial pour l'animation
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `all 0.6s ease ${index * 0.1}s`;
            
            observer.observe(item);
        });
    }

    /**
     * Ajoute les interactions utilisateur
     */
    function addInteractions() {
        // Interactions sur les badges
        const badges = document.querySelectorAll('.skill-level-badge');
        badges.forEach(badge => {
            // Ajouter tooltip
            if (skillLevels[badge.textContent.toLowerCase().trim()]) {
                badge.title = skillLevels[badge.textContent.toLowerCase().trim()].description;
            }
            
            // Effet de clic
            badge.addEventListener('click', function(e) {
                e.preventDefault();
                animateBadgeClick(this);
                showSkillHighlight(this.closest('.skill-item'));
            });
        });

        // Interactions sur les skill-items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });

            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        console.log('✅ Interactions configurées');
    }

    /**
     * Animation de clic sur un badge
     */
    function animateBadgeClick(badge) {
        badge.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            badge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                badge.style.transform = 'scale(1)';
            }, 150);
        }, 100);
    }

    /**
     * Met en surbrillance une compétence
     */
    function showSkillHighlight(skillItem) {
        // Supprimer les highlights existants
        document.querySelectorAll('.skill-item.highlighted').forEach(item => {
            item.classList.remove('highlighted');
        });
        
        // Ajouter le highlight
        skillItem.classList.add('highlighted');
        
        // Retirer après 2 secondes
        setTimeout(() => {
            skillItem.classList.remove('highlighted');
        }, 2000);
    }

    /**
     * NOUVELLE FONCTION - Initialise la navigation Hard Skills / Soft Skills
     */
    function initializeNavigation() {
        console.log('🧭 Initialisation de la navigation des compétences...');
        
        const hardSkillsBtn = document.getElementById('hard-skills-btn');
        const softSkillsBtn = document.getElementById('soft-skills-btn');
        
        // Vérifier que les boutons existent
        if (!hardSkillsBtn || !softSkillsBtn) {
            console.warn('⚠️ Boutons de navigation non trouvés');
            return;
        }

        // Fonction pour mettre à jour les boutons actifs
        function updateActiveButton() {
            const hardSkillsSection = document.getElementById('hard-skills');
            const softSkillsSection = document.getElementById('soft-skills');
            
            if (!hardSkillsSection || !softSkillsSection) return;
            
            const hardSkillsRect = hardSkillsSection.getBoundingClientRect();
            const softSkillsRect = softSkillsSection.getBoundingClientRect();
            
            // Détermine quelle section est la plus visible
            const viewportHeight = window.innerHeight;
            const hardSkillsVisible = hardSkillsRect.top < viewportHeight * 0.5 && hardSkillsRect.bottom > viewportHeight * 0.3;
            const softSkillsVisible = softSkillsRect.top < viewportHeight * 0.5 && softSkillsRect.bottom > viewportHeight * 0.3;
            
            if (hardSkillsVisible && !softSkillsVisible) {
                hardSkillsBtn.classList.add('active');
                softSkillsBtn.classList.remove('active');
            } else if (softSkillsVisible && !hardSkillsVisible) {
                softSkillsBtn.classList.add('active');
                hardSkillsBtn.classList.remove('active');
            } else if (hardSkillsRect.top < softSkillsRect.top) {
                hardSkillsBtn.classList.add('active');
                softSkillsBtn.classList.remove('active');
            } else {
                softSkillsBtn.classList.add('active');
                hardSkillsBtn.classList.remove('active');
            }
        }
        
        // Écouter le scroll pour mettre à jour les boutons actifs
        window.addEventListener('scroll', updateActiveButton);
        
        // Écouter les clics sur les boutons de navigation
        hardSkillsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.getElementById('hard-skills');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        softSkillsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.getElementById('soft-skills');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Initialiser l'état actif
        updateActiveButton();
        
        console.log('✅ Navigation des compétences initialisée');
    }

    /**
     * NOUVELLE FONCTION - Initialise le bouton retour en haut
     */
    function initializeBackToTop() {
        console.log('⬆️ Initialisation du bouton retour en haut...');
        
        const backToTopBtn = document.getElementById('back-to-top-btn');
        const backToTopContainer = document.querySelector('.back-to-top');
        
        // Vérifier que les éléments existent
        if (!backToTopBtn || !backToTopContainer) {
            console.warn('⚠️ Bouton back-to-top non trouvé');
            return;
        }

        // Fonction pour gérer l'affichage du bouton back-to-top
        function toggleBackToTop() {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            // Afficher le bouton après avoir scrollé d'au moins 80% d'une hauteur d'écran
            if (scrollPosition > windowHeight * 0.8) {
                backToTopContainer.classList.add('visible');
            } else {
                backToTopContainer.classList.remove('visible');
            }
        }
        
        // Écouter le scroll pour le back-to-top
        window.addEventListener('scroll', toggleBackToTop);
        
        // Écouter le clic sur le bouton back-to-top
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Effet visuel de clic
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Initialiser l'état du bouton
        toggleBackToTop();
        
        console.log('✅ Bouton retour en haut initialisé');
    }

    /**
     * Gestion du mode sombre (intégration avec votre système existant)
     */
    function handleDarkModeChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDarkMode = document.body.classList.contains('dark-mode');
                    console.log(`🌙 Mode sombre: ${isDarkMode ? 'activé' : 'désactivé'}`);
                    
                    // Pas besoin de faire grand chose, le CSS s'en charge
                    // On pourrait ajouter des effets spéciaux ici si nécessaire
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });
    }

    // Activer l'observation du mode sombre
    handleDarkModeChanges();

    // Ajout des styles CSS pour les effets
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
        /* Effet de highlight */
        .skill-item.highlighted {
            border-color: var(--primary-color) !important;
            box-shadow: 0 0 20px rgba(74, 108, 247, 0.4) !important;
            transform: translateY(-5px) scale(1.02) !important;
        }
        
        /* Transitions fluides */
        .skill-item {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Amélioration de l'accessibilité */
        .skill-level-badge:focus-visible {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
        
        /* Focus pour la navigation */
        .skills-nav-btn:focus-visible {
            outline: 2px solid rgba(255, 255, 255, 0.8);
            outline-offset: 2px;
        }
        
        /* Focus pour back-to-top */
        #back-to-top-btn:focus-visible {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
    `;
    
    document.head.appendChild(additionalStyles);
    
    console.log('✅ Système de compétences complet initialisé avec succès!');
    console.log('🎯 Fonctionnalités actives: badges interactifs, navigation, retour en haut');
});