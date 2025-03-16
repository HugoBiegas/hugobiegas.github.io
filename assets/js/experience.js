document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments de la chronologie avec délai plus long
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            item.style.transitionDelay = (index * 0.3) + 's'; // Délai plus long entre les animations
            
            // Vérifier si l'élément est visible
            const isVisible = function(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100
                );
            };
            
            const animateIfVisible = function() {
                if (isVisible(item)) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                    window.removeEventListener('scroll', animateIfVisible);
                }
            };
            
            // Animer si visible au chargement ou au défilement
            setTimeout(() => {
                animateIfVisible();
                window.addEventListener('scroll', animateIfVisible);
            }, 500); // Délai initial avant de commencer à vérifier
        });
    }
    
    // Animation des cartes de formation avec délai plus long
    function animateEducation() {
        const educationCards = document.querySelectorAll('.education-card');
        
        educationCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.transitionDelay = (index * 0.3) + 's';
            
            // Vérifier si la carte est visible
            const isVisible = function(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100
                );
            };
            
            const animateIfVisible = function() {
                if (isVisible(card)) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    window.removeEventListener('scroll', animateIfVisible);
                }
            };
            
            // Animer si visible au chargement ou au défilement
            setTimeout(() => {
                animateIfVisible();
                window.addEventListener('scroll', animateIfVisible);
            }, 500);
        });
    }
    
    // Initialiser les animations
    animateTimeline();
    animateEducation();
});
