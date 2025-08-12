/**
 * SKILLS.JS - Système d'évaluation des compétences
 * Version simplifiée - uniquement les badges et interactions
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
    `;
    
    document.head.appendChild(additionalStyles);
    
    console.log('✅ Système de compétences initialisé avec succès!');
});