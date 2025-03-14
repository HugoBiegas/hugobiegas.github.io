document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    
    // Vérifier si un thème est déjà stocké
    const currentTheme = localStorage.getItem('theme');
    
    // Appliquer le thème stocké, ou le thème par défaut
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    }
    
    // Fonction pour mettre à jour l'icône du bouton
    function updateToggleIcon(isDark) {
        const moonIcon = themeToggleBtn.querySelector('.fa-moon');
        const sunIcon = themeToggleBtn.querySelector('.fa-sun');
        
        if (isDark) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }
    
    // Ajouter un gestionnaire d'événement pour le bouton de basculement
    themeToggleBtn.addEventListener('click', function() {
        // Basculer la classe dark-mode
        body.classList.toggle('dark-mode');
        
        // Mettre à jour l'icône
        const isDarkMode = body.classList.contains('dark-mode');
        updateToggleIcon(isDarkMode);
        
        // Stocker la préférence
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Animation du bouton
        themeToggleBtn.classList.add('rotating');
        setTimeout(() => {
            themeToggleBtn.classList.remove('rotating');
        }, 500);
    });
    
    // Fonctionnalité de détection du thème du système
    function detectSystemTheme() {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Appliquer le thème du système si aucune préférence n'est stockée
        if (!localStorage.getItem('theme')) {
            if (prefersDarkScheme.matches) {
                body.classList.add('dark-mode');
                updateToggleIcon(true);
            }
        }
        
        // Écouter les changements de thème du système
        prefersDarkScheme.addEventListener('change', (e) => {
            // Ne mettre à jour que si l'utilisateur n'a pas défini de préférence
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    body.classList.add('dark-mode');
                    updateToggleIcon(true);
                } else {
                    body.classList.remove('dark-mode');
                    updateToggleIcon(false);
                }
            }
        });
    }
    
    // Initialiser la détection du thème du système
    detectSystemTheme();
    
    // Ajouter des styles d'animation pour le bouton
    (function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            
            #theme-toggle-btn.rotating {
                animation: rotate 0.5s ease;
            }
        `;
        document.head.appendChild(style);
    })();
});