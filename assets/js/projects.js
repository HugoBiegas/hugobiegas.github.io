document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsContainer = document.getElementById('projects-container');
    
    // Fonction pour afficher les détails d'un projet
    function toggleProjectDetails(projectCard) {
        const projectDescription = projectCard.querySelector('.project-description');
        const isExpanded = projectCard.classList.contains('expanded');
        
        if (isExpanded) {
            projectCard.classList.remove('expanded');
            projectDescription.style.maxHeight = '0';
        } else {
            // Réduire tous les autres projets
            document.querySelectorAll('.project-card.expanded').forEach(card => {
                card.classList.remove('expanded');
                card.querySelector('.project-description').style.maxHeight = '0';
            });
            
            // Développer le projet actuel
            projectCard.classList.add('expanded');
            projectDescription.style.maxHeight = projectDescription.scrollHeight + 'px';
        }
    }
    
    // Fonction pour filtrer les projets
    function filterProjects(filter) {
        projectCards.forEach(card => {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                card.style.display = '';
                
                // Animation pour révéler le projet
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                // Animation pour masquer le projet
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Ajout des gestionnaires d'événements pour les boutons de filtre
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Mise à jour des classes actives
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Filtrer les projets
            filterProjects(filter);
        });
    });
    
    // Ajout des gestionnaires d'événements pour les détails des projets
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Ignorer si on clique sur un lien
            if (e.target.closest('.project-links a')) {
                return;
            }
            
            toggleProjectDetails(card);
        });
        
        // Initialisation de l'état des descriptions
        const description = card.querySelector('.project-description');
        if (description) {
            description.style.maxHeight = '0';
            description.style.overflow = 'hidden';
            description.style.transition = 'max-height 0.3s ease';
        }
    });
    
    // Si un ID de projet est spécifié dans l'URL, ouvrir ce projet
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetProject = document.getElementById(targetId);
        
        if (targetProject) {
            // Défiler vers le projet
            setTimeout(() => {
                targetProject.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Ouvrir les détails du projet
                setTimeout(() => {
                    toggleProjectDetails(targetProject);
                }, 500);
            }, 500);
        }
    }
    
    // Fonction pour réorganiser les projets de manière aléatoire
    function shuffleProjects() {
        const projectsArray = Array.from(projectCards);
        
        // Mélanger le tableau des projets
        for (let i = projectsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [projectsArray[i], projectsArray[j]] = [projectsArray[j], projectsArray[i]];
        }
        
        // Vider et reconstruire le conteneur de projets
        if (projectsContainer) {
            projectsArray.forEach(project => {
                projectsContainer.appendChild(project);
            });
        }
    }
    
    // Fonction pour la recherche de projets
    function createSearchFunction() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Rechercher un projet...';
        searchInput.className = 'search-input';
        
        searchContainer.appendChild(searchInput);
        
        // Insérer le champ de recherche avant les boutons de filtre
        const filterContainer = document.querySelector('.filter-container');
        if (filterContainer) {
            filterContainer.appendChild(searchContainer);
        }
        
        // Ajouter la fonctionnalité de recherche
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            
            projectCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.project-tags span'))
                    .map(tag => tag.textContent.toLowerCase());
                
                // Vérifier si le projet correspond à la recherche
                const matchesSearch = title.includes(searchTerm) || 
                                     description.includes(searchTerm) || 
                                     tags.some(tag => tag.includes(searchTerm));
                
                if (matchesSearch) {
                    card.style.display = '';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Réinitialiser les boutons de filtre
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('[data-filter="all"]').classList.add('active');
        });
    }
    
    // Initialiser la recherche si on est sur la page des projets
    if (filterButtons.length > 0) {
        createSearchFunction();
    }
});

// Ajouter des styles CSS dynamiques pour les projets
(function addProjectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Styles supplémentaires pour les projets */
        .project-card {
            cursor: pointer;
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        
        .project-card .project-description {
            margin-top: 15px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            padding-top: 15px;
        }
        
        .project-card .project-description ul {
            list-style: disc;
            padding-left: 20px;
            margin-top: 10px;
        }
        
        .project-card .project-description ul li {
            margin-bottom: 5px;
        }
        
        .project-card.expanded {
            box-shadow: var(--shadow-lg);
        }
        
        /* Styles pour la barre de recherche */
        .search-container {
            margin-top: 15px;
            width: 100%;
        }
        
        .search-input {
            width: 100%;
            padding: 10px 15px;
            border: 1px solid var(--gray-2);
            border-radius: var(--border-radius-md);
            font-size: 1rem;
            transition: var(--transition);
        }
        
        .search-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 2px rgba(74, 108, 247, 0.2);
        }
        
        /* Styles pour les boutons de filtre */
        .filter-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }
        
        .filter-btn {
            padding: 8px 15px;
            background-color: var(--light);
            border: none;
            border-radius: var(--border-radius-md);
            cursor: pointer;
            font-size: 0.9rem;
            transition: var(--transition);
        }
        
        .filter-btn.active {
            background-color: var(--primary-color);
            color: var(--white);
        }
        
        .filter-btn:hover:not(.active) {
            background-color: var(--gray-2);
        }
        
        /* Mode sombre pour les nouveaux éléments */
        .dark-mode .project-card .project-description {
            border-top-color: rgba(255, 255, 255, 0.1);
        }
        
        .dark-mode .filter-btn {
            background-color: var(--light);
            color: var(--dark);
        }
        
        .dark-mode .filter-btn:hover:not(.active) {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .dark-mode .search-input {
            background-color: var(--light);
            color: var(--dark);
            border-color: rgba(255, 255, 255, 0.1);
        }
    `;
    
    document.head.appendChild(style);
})();