document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Vérification des champs
            if (!name || !email || !subject || !message) {
                showFormMessage('Veuillez remplir tous les champs du formulaire.', false);
                return;
            }
            
            // Affichage du message de chargement
            formMessage.textContent = 'Envoi en cours...';
            formMessage.className = 'form-message';
            formMessage.style.display = 'block';
            formMessage.style.backgroundColor = '#cfe2ff';
            formMessage.style.color = '#084298';
            formMessage.style.borderColor = '#b6d4fe';
            
            try {
                // Appel de la fonction exposée par le module Firebase
                const result = await window.saveContactForm({
                    name,
                    email,
                    subject,
                    message
                });
                
                if (result.success) {
                    showFormMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.', true);
                    contactForm.reset();
                } else {
                    throw new Error(result.error || "Erreur lors de l'envoi du message");
                }
            } catch (error) {
                console.error("Erreur lors de l'envoi du message:", error);
                showFormMessage("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.", false);
            }
        });
    }
    
    // Fonction pour afficher les messages du formulaire
    function showFormMessage(message, isSuccess) {
        formMessage.textContent = message;
        formMessage.className = isSuccess ? 'form-message success' : 'form-message error';
        formMessage.style.display = 'block';
        
        // Faire défiler jusqu'au message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Masquer le message après un certain temps
        if (isSuccess) {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
    
    // Animation des éléments au défilement
    function animateOnScroll() {
        const elementsToAnimate = [
            ...document.querySelectorAll('.contact-method'),
            ...document.querySelectorAll('.social-section'),
            document.querySelector('.contact-form')
        ];
        
        elementsToAnimate.forEach((element, index) => {
            if (!element) return;
            
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.transitionDelay = (index * 0.1) + 's';
            
            const isVisible = function(el) {
                const rect = el.getBoundingClientRect();
                return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8;
            };
            
            const showElement = function() {
                if (isVisible(element)) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    window.removeEventListener('scroll', showElement);
                }
            };
            
            showElement();
            window.addEventListener('scroll', showElement);
        });
    }
    
    // Initialiser les animations
    animateOnScroll();
});
