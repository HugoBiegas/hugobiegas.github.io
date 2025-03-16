document.addEventListener('DOMContentLoaded', function() {
    // Animation des barres de progression
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = '0%';
            
            // Vérifier si la barre est visible
            const isVisible = function(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            };
            
            const animateIfVisible = function() {
                if (isVisible(bar)) {
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, 200);
                    window.removeEventListener('scroll', animateIfVisible);
                }
            };
            
            // Animer si visible au chargement ou au défilement
            animateIfVisible();
            window.addEventListener('scroll', animateIfVisible);
        });
    }
    
    // Initialiser l'animation des barres de compétences
    animateSkillBars();
});
