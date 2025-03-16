/**
 * Script de gestion des projets
 * Intègre la génération dynamique et la recherche de projets
 */
document.addEventListener('DOMContentLoaded', function() {
    // Générer les projets dynamiquement
    generateProjects();
    
    // Initialiser les filtres
    initFilters();
    
    // Initialiser la recherche
    createSearchFunction();
    
    // Gérer les ancres d'URL (pour ouvrir directement un projet depuis une autre page)
    handleUrlHash();
});

/**
 * Génère tous les projets dans le conteneur
 */
function generateProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    // Vider le conteneur
    projectsContainer.innerHTML = '';
    
    // Générer chaque carte de projet
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.dataset.category = project.category;
        projectCard.id = project.id;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github && project.github !== "" ? `
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>` : ''}
                </div>
                <div class="project-description">
                    ${project.detailedDescription}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
    
    // Initialiser les comportements des cartes
    initProjectCards();
}

/**
 * Initialise les comportements des cartes de projet
 */
function initProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        // Initialiser la description
        const description = card.querySelector('.project-description');
        if (description) {
            description.style.maxHeight = '0';
            description.style.overflow = 'hidden';
            description.style.transition = 'max-height 0.3s ease';
        }
        
        // Ajouter l'événement de clic
        card.addEventListener('click', (e) => {
            // Ignorer si on clique sur un lien
            if (e.target.closest('.project-links a')) {
                return;
            }
            
            toggleProjectDetails(card);
        });
    });
}

/**
 * Affiche ou masque les détails d'un projet
 * @param {HTMLElement} projectCard - Élément de carte de projet
 */
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

/**
 * Initialise les filtres de projets
 */
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    
    // Extraire les catégories uniques des projets
    const categories = [...new Set(projectsData.map(project => project.category))];
    
    // Ajouter dynamiquement les boutons de filtre manquants
    const filterContainer = document.querySelector('.filter-buttons');
    if (filterContainer) {
        // Vérifier les catégories qui manquent dans les boutons existants
        const existingCategories = [...filterButtons].map(btn => btn.dataset.filter)
                                  .filter(filter => filter !== 'all');
        
        categories.forEach(category => {
            if (!existingCategories.includes(category)) {
                const button = document.createElement('button');
                button.className = 'filter-btn';
                button.dataset.filter = category;
                button.textContent = formatCategoryName(category);
                filterContainer.appendChild(button);
            }
        });
    }
    
    // Ajouter les événements aux boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Mise à jour des classes actives
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Filtrer les projets
            filterProjects(filter);
            
            // Réinitialiser la recherche
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.value = '';
            }
        });
    });
    
    // Ajouter le conteneur pour message "aucun résultat"
    if (!document.getElementById('no-results-message')) {
        // Créer un wrapper avec flexbox pour centrer le message
        const messageWrapper = document.createElement('div');
        messageWrapper.className = 'no-results-wrapper';
        
        const noResultsMessage = document.createElement('div');
        noResultsMessage.id = 'no-results-message';
        noResultsMessage.innerHTML = `
            <p>Aucun projet ne correspond à ce critère. <a href="#" id="reset-filter">Réinitialiser les filtres</a></p>
        `;
        
        messageWrapper.appendChild(noResultsMessage);
        
        // Ajouter le wrapper au conteneur de projets
        const projectsSection = document.querySelector('.projects-grid-section .container');
        if (projectsSection) {
            projectsSection.appendChild(messageWrapper);
            
            // Ajouter l'événement pour réinitialiser les filtres
            document.getElementById('reset-filter').addEventListener('click', function(e) {
                e.preventDefault();
                const allFilterBtn = document.querySelector('[data-filter="all"]');
                if (allFilterBtn) {
                    allFilterBtn.click();
                }
            });
        }
    }
}

/**
 * Filtre les projets selon la catégorie
 * @param {string} filter - Catégorie à filtrer
 */
function filterProjects(filter) {
    // Récupérer toutes les cartes de projet
    const projectCards = document.querySelectorAll('.project-card');
    
    // Compteur pour les éléments visibles
    let visibleCount = 0;
    
    // Filtrer les projets
    projectCards.forEach((card, index) => {
        const category = card.dataset.category;
        const delay = index * 50; // Délai progressif pour l'animation
        
        if (filter === 'all' || category === filter) {
            // Incrémenter le compteur d'éléments visibles
            visibleCount++;
            
            // Animation pour afficher avec délai
            setTimeout(() => {
                card.style.display = '';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, delay);
        } else {
            // Animation pour masquer
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Afficher un message si aucun projet ne correspond
    const noResultsWrapper = document.querySelector('.no-results-wrapper');
    if (noResultsWrapper) {
        if (visibleCount === 0) {
            noResultsWrapper.style.display = 'flex';
        } else {
            noResultsWrapper.style.display = 'none';
        }
    }
}

/**
 * Formate le nom d'une catégorie pour l'affichage
 * @param {string} category - Nom de la catégorie
 * @return {string} Nom formaté
 */
function formatCategoryName(category) {
    // Mapper les catégories avec leur nom d'affichage
    const categoryMap = {
        'web': 'Web',
        'mobile': 'Mobile',
        'security': 'Sécurité',
        'api': 'API',
        'sncf': 'SNCF',
        'dgefp': 'DGEFP',
        'gesta': 'GESTA PARTNERS',
        'nivo': 'NIVO WEB',
    };
    
    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * Crée et initialise la fonction de recherche de projets
 */
function createSearchFunction() {
    // Ne pas créer la recherche si elle existe déjà
    if (document.querySelector('.search-container')) return;
    
    // Créer le conteneur de recherche
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    
    // Créer le champ de recherche
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Rechercher un projet...';
    searchInput.className = 'search-input';
    
    // Ajouter le champ au conteneur
    searchContainer.appendChild(searchInput);
    
    // Insérer le champ de recherche avant les boutons de filtre
    const filterContainer = document.querySelector('.filter-container');
    if (filterContainer) {
        filterContainer.appendChild(searchContainer);
    }
    
    // Ajouter la fonctionnalité de recherche
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const projectCards = document.querySelectorAll('.project-card');
        
        // Compteur pour les éléments visibles
        let visibleCount = 0;
        
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
                visibleCount++;
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
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const allFilterBtn = document.querySelector('[data-filter="all"]');
        if (allFilterBtn) {
            allFilterBtn.classList.add('active');
        }
        
        // Afficher un message si aucun projet ne correspond
        const noResultsWrapper = document.querySelector('.no-results-wrapper');
        if (noResultsWrapper) {
            if (visibleCount === 0) {
                noResultsWrapper.style.display = 'flex';
            } else {
                noResultsWrapper.style.display = 'none';
            }
        }
    });
}

/**
 * Gère l'ouverture d'un projet spécifique si l'URL contient une ancre
 */
function handleUrlHash() {
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
}

/**
 * Fonction pour réorganiser les projets de manière aléatoire (fonctionnalité bonus)
 */
function shuffleProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    
    // Mélanger le tableau des projets
    for (let i = projectCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [projectCards[i], projectCards[j]] = [projectCards[j], projectCards[i]];
    }
    
    // Vider et reconstruire le conteneur de projets
    projectCards.forEach(project => {
        projectsContainer.appendChild(project);
    });
}

// Ajouter les styles CSS pour la recherche et le message de résultats vides
(function addStyles() {
    // Vérifier si les styles existent déjà
    if (document.querySelector('style#project-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'project-styles';
    style.textContent = `
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
        
        /* Styles pour le message "aucun résultat" */
        .no-results-wrapper {
            display: none;
            width: 100%;
            justify-content: center;
            padding: 30px 0;
        }
        
        #no-results-message {
            background-color: var(--light);
            border-radius: var(--border-radius-lg);
            padding: 25px;
            text-align: center;
            max-width: 500px;
            width: 80%;
            box-shadow: var(--shadow-sm);
        }
        
        #no-results-message p {
            margin: 0;
            color: var(--dark);
        }
        
        #no-results-message a {
            color: var(--primary-color);
            text-decoration: underline;
            font-weight: 500;
        }
        
        #no-results-message a:hover {
            color: var(--primary-dark);
        }
        
        /* Mode sombre */
        .dark-mode .search-input {
            background-color: var(--light);
            color: var(--dark);
            border-color: rgba(255, 255, 255, 0.1);
        }
        
        .dark-mode #no-results-message {
            background-color: var(--dark-light);
        }
        
        .dark-mode #no-results-message p {
            color: var(--light);
        }
    `;
    
    document.head.appendChild(style);
})();