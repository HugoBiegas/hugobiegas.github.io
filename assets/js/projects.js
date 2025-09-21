/**
 * Script de gestion des projets avec timeline interactive
 * Intègre la génération dynamique, la recherche, le système de survol et la timeline
 */
document.addEventListener('DOMContentLoaded', function() {
    // Générer les projets dynamiquement
    generateProjects();
    
    // Initialiser les filtres
    initFilters();
    
    // Initialiser la recherche
    createSearchFunction();
    
    // Initialiser la timeline
    initTimeline();
    
    // Initialiser les effets de ligne au survol
    initRowHoverEffects();
    
    // Gérer les ancres d'URL
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
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.dataset.category = project.category;
        projectCard.dataset.index = index;
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
                <div class="project-hover-indicator">
                    <i class="fas fa-chevron-down"></i>
                    <span>Survolez pour en savoir plus</span>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
    
    // Initialiser les comportements des cartes
    initProjectCards();
}

/**
 * NOUVELLE FONCTION - Initialise la timeline interactive
 */
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        // Effet de clic pour filtrer
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Récupérer le filtre associé
            const filter = this.dataset.filter;
            
            // Activer le filtre correspondant
            const filterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if (filterBtn) {
                filterBtn.click();
            }
            
            // Ajouter animation de clic
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);
            
            // Scroll jusqu'à la section des projets
            const projectsSection = document.querySelector('.projects-grid-section');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        
        // Effet de survol amélioré
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * NOUVELLE FONCTION - Initialise les effets de ligne au survol
 */
function initRowHoverEffects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    let currentHoveredRow = null;
    let hideTimeout = null;
    let isTransitioning = false;
    
    // Fonction pour obtenir le nombre de colonnes
    function getColumnsCount() {
        const gridStyle = window.getComputedStyle(projectsGrid);
        const columns = gridStyle.getPropertyValue('grid-template-columns').split(' ').length;
        return columns;
    }
    
    // Fonction pour obtenir toutes les cartes de la même ligne
    function getRowCards(card) {
        const allCards = Array.from(document.querySelectorAll('.project-card:not([style*="display: none"])'));
        const cardIndex = allCards.indexOf(card);
        const columnsCount = getColumnsCount();
        const rowIndex = Math.floor(cardIndex / columnsCount);
        
        const rowCards = [];
        for (let i = rowIndex * columnsCount; i < (rowIndex + 1) * columnsCount && i < allCards.length; i++) {
            rowCards.push(allCards[i]);
        }
        
        return { cards: rowCards, rowIndex: rowIndex };
    }
    
    // Fonction pour afficher les descriptions d'une ligne
    function showRowDescriptions(rowCards, hoveredCard) {
        // Annuler le timeout de masquage si il existe
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        
        isTransitioning = true;
        
        rowCards.forEach((card, index) => {
            // Appliquer les classes appropriées
            if (card === hoveredCard) {
                card.classList.add('row-hover');
                card.classList.remove('row-hover-secondary');
            } else {
                card.classList.add('row-hover-secondary');
                card.classList.remove('row-hover');
            }
            
            // Afficher la description immédiatement
            const desc = card.querySelector('.project-description');
            const indicator = card.querySelector('.project-hover-indicator');
            
            if (desc && !card.classList.contains('expanded')) {
                desc.style.maxHeight = '500px';
                desc.style.opacity = card === hoveredCard ? '1' : '0.9';
                desc.style.paddingTop = '15px';
            }
            
            if (indicator) {
                indicator.style.opacity = '0';
            }
            
            card.classList.add('hovered');
        });
        
        setTimeout(() => {
            isTransitioning = false;
        }, 100);
    }
    
    // Fonction pour masquer les descriptions d'une ligne
    function hideRowDescriptions(rowCards) {
        if (isTransitioning) return;
        
        hideTimeout = setTimeout(() => {
            rowCards.forEach(card => {
                card.classList.remove('row-hover', 'row-hover-secondary', 'hovered');
                
                if (!card.classList.contains('expanded')) {
                    const desc = card.querySelector('.project-description');
                    const indicator = card.querySelector('.project-hover-indicator');
                    
                    if (desc) {
                        desc.style.maxHeight = '0';
                        desc.style.opacity = '0';
                        desc.style.paddingTop = '0';
                    }
                    
                    if (indicator) {
                        indicator.style.opacity = '0.7';
                    }
                }
            });
            currentHoveredRow = null;
        }, 2000); // Délai de 2 secondes avant de masquer
    }
    
    // Délégation d'événements pour une meilleure performance
    projectsGrid.addEventListener('mouseenter', function(e) {
        const card = e.target.closest('.project-card');
        if (!card) return;
        
        const rowData = getRowCards(card);
        const rowCards = rowData.cards;
        const rowIndex = rowData.rowIndex;
        
        // Si c'est une nouvelle ligne ou la même ligne
        if (currentHoveredRow !== rowIndex) {
            // Masquer immédiatement l'ancienne ligne
            if (currentHoveredRow !== null) {
                const oldCards = document.querySelectorAll('.row-hover, .row-hover-secondary');
                oldCards.forEach(c => {
                    c.classList.remove('row-hover', 'row-hover-secondary', 'hovered');
                    if (!c.classList.contains('expanded')) {
                        const desc = c.querySelector('.project-description');
                        const indicator = c.querySelector('.project-hover-indicator');
                        
                        if (desc) {
                            desc.style.maxHeight = '0';
                            desc.style.opacity = '0';
                            desc.style.paddingTop = '0';
                        }
                        
                        if (indicator) {
                            indicator.style.opacity = '0.7';
                        }
                    }
                });
            }
            
            currentHoveredRow = rowIndex;
        }
        
        showRowDescriptions(rowCards, card);
    }, true);
    
    // Écouter quand on quitte complètement la grille
    projectsGrid.addEventListener('mouseleave', function(e) {
        // Vérifier qu'on quitte vraiment la grille
        if (!e.relatedTarget || !projectsGrid.contains(e.relatedTarget)) {
            const hoveredCards = document.querySelectorAll('.row-hover, .row-hover-secondary');
            if (hoveredCards.length > 0) {
                hideRowDescriptions(Array.from(hoveredCards));
            }
        }
    });
}

/**
 * Initialise les comportements des cartes de projet
 */
function initProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        // Initialiser la description
        const description = card.querySelector('.project-description');
        
        if (description) {
            // État initial déjà défini dans le CSS
            description.dataset.initialized = 'true';
        }
        
        // Événement de clic supprimé - les cartes ne sont plus cliquables
        // pour éviter l'expansion manuelle
    });
}

/**
 * Affiche la description au survol
 */
function showProjectDescription(projectCard) {
    const projectDescription = projectCard.querySelector('.project-description');
    const hoverIndicator = projectCard.querySelector('.project-hover-indicator');
    
    if (projectDescription && !projectCard.classList.contains('expanded')) {
        // Utilisation directe sans recalcul
        projectDescription.style.maxHeight = '500px';
        projectDescription.style.opacity = '1';
        projectDescription.style.paddingTop = '15px';
        
        // Masquer l'indicateur
        if (hoverIndicator) {
            hoverIndicator.style.opacity = '0';
        }
        
        // Ajouter une classe pour le styling
        projectCard.classList.add('hovered');
    }
}

/**
 * Masque la description quand on quitte le survol
 */
function hideProjectDescription(projectCard) {
    const projectDescription = projectCard.querySelector('.project-description');
    const hoverIndicator = projectCard.querySelector('.project-hover-indicator');
    
    if (projectDescription && !projectCard.classList.contains('expanded')) {
        projectDescription.style.maxHeight = '0';
        projectDescription.style.opacity = '0';
        projectDescription.style.paddingTop = '0';
        
        // Réafficher l'indicateur
        if (hoverIndicator) {
            hoverIndicator.style.opacity = '0.7';
        }
        
        // Retirer la classe de styling
        projectCard.classList.remove('hovered');
    }
}

/**
 * Affiche ou masque les détails d'un projet
 */
function toggleProjectDetails(projectCard) {
    const projectDescription = projectCard.querySelector('.project-description');
    const hoverIndicator = projectCard.querySelector('.project-hover-indicator');
    const isExpanded = projectCard.classList.contains('expanded');
    
    if (isExpanded) {
        projectCard.classList.remove('expanded');
        projectDescription.style.maxHeight = '0';
        projectDescription.style.opacity = '0';
        projectDescription.style.paddingTop = '0';
        
        // Réafficher l'indicateur de survol
        if (hoverIndicator) {
            hoverIndicator.style.opacity = '0.7';
        }
    } else {
        // Réduire tous les autres projets
        document.querySelectorAll('.project-card.expanded').forEach(card => {
            card.classList.remove('expanded');
            const desc = card.querySelector('.project-description');
            const indicator = card.querySelector('.project-hover-indicator');
            desc.style.maxHeight = '0';
            desc.style.opacity = '0';
            desc.style.paddingTop = '0';
            if (indicator) indicator.style.opacity = '0.7';
        });
        
        // Développer le projet actuel
        projectCard.classList.add('expanded');
        projectDescription.style.maxHeight = '500px';
        projectDescription.style.opacity = '1';
        projectDescription.style.paddingTop = '15px';
        
        // Masquer l'indicateur quand c'est développé en permanence
        if (hoverIndicator) {
            hoverIndicator.style.opacity = '0';
        }
    }
}

/**
 * Initialise les filtres de projets avec animation
 */
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    
    // Ajouter les événements aux boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Mise à jour des classes actives
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Filtrer les projets avec animation
            filterProjectsWithAnimation(filter);
            
            // Réinitialiser la recherche
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.value = '';
            }
        });
    });
    
    // Ajouter le conteneur pour message "aucun résultat"
    if (!document.getElementById('no-results-message')) {
        const messageWrapper = document.createElement('div');
        messageWrapper.className = 'no-results-wrapper';
        
        const noResultsMessage = document.createElement('div');
        noResultsMessage.id = 'no-results-message';
        noResultsMessage.innerHTML = `
            <p>Aucun projet ne correspond à ce critère. <a href="#" id="reset-filter">Réinitialiser les filtres</a></p>
        `;
        
        messageWrapper.appendChild(noResultsMessage);
        
        const projectsSection = document.querySelector('.projects-grid-section .container');
        if (projectsSection) {
            projectsSection.appendChild(messageWrapper);
            
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
 * Filtre les projets avec animation fluide
 */
function filterProjectsWithAnimation(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    let visibleCount = 0;
    
    projectCards.forEach((card, index) => {
        const category = card.dataset.category;
        
        // Nettoyer toutes les classes d'animation précédentes
        card.classList.remove('filtering-out', 'filtering-in');
        card.style.animationDelay = '';
        
        if (filter === 'all' || category === filter) {
            // Afficher la carte immédiatement
            card.style.display = '';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            visibleCount++;
        } else {
            // Masquer la carte immédiatement
            card.style.display = 'none';
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
 */
function formatCategoryName(category) {
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
    if (document.querySelector('.search-container')) return;
    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Rechercher un projet...';
    searchInput.className = 'search-input';
    
    searchContainer.appendChild(searchInput);
    
    const filterContainer = document.querySelector('.filter-container');
    if (filterContainer) {
        filterContainer.appendChild(searchContainer);
    }
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const projectCards = document.querySelectorAll('.project-card');
        
        let visibleCount = 0;
        
        projectCards.forEach((card, index) => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.project-tags span'))
                .map(tag => tag.textContent.toLowerCase());
            
            const matchesSearch = title.includes(searchTerm) || 
                                 description.includes(searchTerm) || 
                                 tags.some(tag => tag.includes(searchTerm));
            
            if (matchesSearch) {
                visibleCount++;
                card.style.display = '';
                card.classList.add('filtering-in');
                card.style.animationDelay = `${visibleCount * 0.05}s`;
                
                setTimeout(() => {
                    card.classList.remove('filtering-in');
                }, 500);
            } else {
                card.classList.add('filtering-out');
                setTimeout(() => {
                    card.style.display = 'none';
                    card.classList.remove('filtering-out');
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
            setTimeout(() => {
                targetProject.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    toggleProjectDetails(targetProject);
                }, 500);
            }, 500);
        }
    }
}

/**
 * Fonction pour réorganiser les projets de manière aléatoire
 */
function shuffleProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    
    for (let i = projectCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [projectCards[i], projectCards[j]] = [projectCards[j], projectCards[i]];
    }
    
    projectCards.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.05}s`;
        projectsContainer.appendChild(project);
    });
}