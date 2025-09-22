/**
 * Script de gestion des projets avec timeline interactive
 * Intègre la génération dynamique, la recherche, le système de survol et la timeline
 */
document.addEventListener('DOMContentLoaded', function() {
    // Générer les projets dynamiquement
    generateProjects();
    
    // Ajouter les ancres de ligne après génération
    addLineAnchors();
    
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
        projectCard.dataset.projectId = project.id;
        projectCard.id = project.id;
        
        // Obtenir la langue actuelle
        const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'fr';
        
        // Utiliser les traductions appropriées
        const title = project.title[currentLang] || project.title.fr;
        const shortDescription = project.shortDescription[currentLang] || project.shortDescription.fr;
        const detailedDescription = project.detailedDescription[currentLang] || project.detailedDescription.fr;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${title}</h3>
                <p>${shortDescription}</p>
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
                    ${detailedDescription}
                </div>
                <div class="project-hover-indicator">
                    <i class="fas fa-chevron-down"></i>
                    <span data-i18n="projects.hover_indicator">Survolez pour en savoir plus</span>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
    
    // Initialiser les comportements des cartes
    initProjectCards();
    
    // Appliquer les traductions après génération du contenu
    if (typeof applyTranslations === 'function') {
        applyTranslations();
    }
}

/**
 * NOUVELLE FONCTION - Ajoute des ancres invisibles en haut de chaque ligne
 */
function addLineAnchors() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    const allCards = Array.from(document.querySelectorAll('.project-card:not([style*="display: none"])'));
    const columnsCount = getColumnsCount();
    const rowCount = Math.ceil(allCards.length / columnsCount);
    
    // Créer un conteneur wrapper si nécessaire
    if (!projectsGrid.querySelector('.anchor-wrapper')) {
        // Pour chaque ligne, créer une ancre
        for (let row = 0; row < rowCount; row++) {
            const anchor = document.createElement('div');
            anchor.className = 'line-anchor';
            anchor.id = `line-anchor-${row}`;
            anchor.dataset.row = row;
            anchor.style.cssText = `
                position: absolute;
                top: ${row * 400}px; /* Ajuster selon la hauteur de vos cartes */
                left: 0;
                width: 1px;
                height: 1px;
                visibility: hidden;
                pointer-events: none;
            `;
            
            // Insérer l'ancre avant le premier élément de la ligne
            const firstCardInRow = allCards[row * columnsCount];
            if (firstCardInRow) {
                projectsGrid.insertBefore(anchor, firstCardInRow);
            }
        }
    }
    
    // Mettre à jour les positions des ancres après chaque filtrage
    updateAnchorPositions();
}

/**
 * Met à jour les positions des ancres après filtrage ou réorganisation
 */
function updateAnchorPositions() {
    const allCards = Array.from(document.querySelectorAll('.project-card:not([style*="display: none"])'));
    const columnsCount = getColumnsCount();
    
    // Retirer les anciennes ancres
    document.querySelectorAll('.line-anchor').forEach(a => a.remove());
    
    // Recréer les ancres pour les cartes visibles
    const projectsGrid = document.querySelector('.projects-grid');
    const rowCount = Math.ceil(allCards.length / columnsCount);
    
    for (let row = 0; row < rowCount; row++) {
        const firstCardInRow = allCards[row * columnsCount];
        if (firstCardInRow) {
            const anchor = document.createElement('div');
            anchor.className = 'line-anchor';
            anchor.id = `line-anchor-${row}`;
            anchor.dataset.row = row;
            anchor.style.cssText = `
                position: absolute;
                visibility: hidden;
                pointer-events: none;
                width: 1px;
                height: 1px;
            `;
            
            // Positionner l'ancre juste avant la première carte de la ligne
            firstCardInRow.parentNode.insertBefore(anchor, firstCardInRow);
            
            // Ajuster la position de l'ancre
            const cardRect = firstCardInRow.getBoundingClientRect();
            const gridRect = projectsGrid.getBoundingClientRect();
            anchor.style.top = `${firstCardInRow.offsetTop - 20}px`;
        }
    }
}

/**
 * Fonction pour obtenir le nombre de colonnes
 */
function getColumnsCount() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return 1;
    
    const gridStyle = window.getComputedStyle(projectsGrid);
    const columns = gridStyle.getPropertyValue('grid-template-columns').split(' ').length;
    return columns || 1;
}

/**
 * Fonction pour obtenir l'index de ligne d'une carte
 */
function getCardRowIndex(card) {
    const allCards = Array.from(document.querySelectorAll('.project-card:not([style*="display: none"])'));
    const cardIndex = allCards.indexOf(card);
    const columnsCount = getColumnsCount();
    return Math.floor(cardIndex / columnsCount);
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
 * NOUVELLE FONCTION - Initialise les effets de ligne au survol avec ancres
 */
function initRowHoverEffects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    let currentHoveredRow = null;
    let hideTimeout = null;
    let isTransitioning = false;
    let activeAnchor = null;
    
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
    
    // Fonction pour activer une ancre de ligne
    function activateRowAnchor(rowIndex) {
        const anchor = document.getElementById(`line-anchor-${rowIndex}`);
        if (anchor && anchor !== activeAnchor) {
            // Désactiver l'ancienne ancre
            if (activeAnchor) {
                activeAnchor.classList.remove('active-anchor');
            }
            
            // Activer la nouvelle ancre
            activeAnchor = anchor;
            activeAnchor.classList.add('active-anchor');
            
            // Optionnel: Scroll vers l'ancre si nécessaire
            // Mais uniquement si elle n'est pas déjà visible
            const anchorRect = anchor.getBoundingClientRect();
            if (anchorRect.top < 100) { // Si l'ancre est trop haute
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        }
    }
    
    // Fonction pour afficher les descriptions d'une ligne
    function showRowDescriptions(rowCards, hoveredCard) {
        // Annuler le timeout de masquage si il existe
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        
        // Ne rien faire si on survole une carte déjà dépliée
        if (hoveredCard.classList.contains('expanded')) {
            return;
        }
        
        isTransitioning = true;
        
        const rowIndex = getCardRowIndex(hoveredCard);
        activateRowAnchor(rowIndex);
        
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
            
            // Désactiver l'ancre après masquage
            if (activeAnchor) {
                activeAnchor.classList.remove('active-anchor');
                activeAnchor = null;
            }
        }, 2000);
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
        
        // Ajouter l'événement de clic pour toggle
        card.addEventListener('click', function(e) {
            // Éviter le déclenchement sur les liens
            if (e.target.closest('a')) return;
            
            // Toggle avec système d'ancres
            toggleProjectDetailsWithAnchors(this);
        });
    });
}

/**
 * Toggle des détails avec utilisation des ancres
 * @param {HTMLElement} projectCard - La carte projet à toggle
 */
function toggleProjectDetailsWithAnchors(projectCard) {
    const projectDescription = projectCard.querySelector('.project-description');
    const hoverIndicator = projectCard.querySelector('.project-hover-indicator');
    const isExpanded = projectCard.classList.contains('expanded');
    
    // Obtenir l'index de ligne de la carte cliquée
    const clickedRowIndex = getCardRowIndex(projectCard);
    const rowAnchor = document.getElementById(`line-anchor-${clickedRowIndex}`);
    
    // Trouver et fermer la carte actuellement ouverte
    const currentlyExpandedCard = document.querySelector('.project-card.expanded');
    
    if (isExpanded) {
        // FERMER la carte actuelle avec animation fluide
        projectCard.classList.remove('expanded');
        projectCard.classList.add('collapsing');
        
        // Animation de fermeture progressive
        projectDescription.style.transition = 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)';
        projectDescription.style.maxHeight = '0';
        projectDescription.style.opacity = '0';
        projectDescription.style.paddingTop = '0';
        
        // Réafficher l'indicateur de survol avec fade-in
        if (hoverIndicator) {
            hoverIndicator.style.transition = 'opacity 0.3s ease-in-out 0.1s';
            hoverIndicator.style.opacity = '0.7';
        }
        
        setTimeout(() => {
            projectCard.classList.remove('collapsing');
            document.body.classList.remove('has-expanded-card');
        }, 400);
        
    } else {
        // OUVRIR la carte avec transitions élégantes
        
        // Si une autre carte est ouverte, la fermer d'abord
        if (currentlyExpandedCard && currentlyExpandedCard !== projectCard) {
            currentlyExpandedCard.classList.add('collapsing');
            const oldDesc = currentlyExpandedCard.querySelector('.project-description');
            const oldInd = currentlyExpandedCard.querySelector('.project-hover-indicator');
            
            if (oldDesc) {
                oldDesc.style.transition = 'all 0.3s cubic-bezier(0.4, 0.0, 0.6, 1)';
                oldDesc.style.maxHeight = '0';
                oldDesc.style.opacity = '0';
                oldDesc.style.paddingTop = '0';
            }
            if (oldInd) {
                oldInd.style.opacity = '0.7';
            }
            
            // Attendre la fermeture avant de continuer
            setTimeout(() => {
                currentlyExpandedCard.classList.remove('expanded', 'collapsing');
                scrollToAnchorAndOpen();
            }, 300);
        } else {
            scrollToAnchorAndOpen();
        }
        
        function scrollToAnchorAndOpen() {
            if (rowAnchor) {
                const headerOffset = 100;
                const anchorPosition = rowAnchor.offsetTop - headerOffset;
                const currentScroll = window.scrollY;
                const scrollDistance = Math.abs(anchorPosition - currentScroll);
                
                // Calculer la durée du scroll basée sur la distance
                const scrollDuration = Math.min(600, Math.max(300, scrollDistance * 0.5));
                
                // Vérifier si on a besoin de scroller
                if (scrollDistance > 50) {
                    // Ajouter une classe pour l'animation de préparation
                    projectCard.classList.add('preparing-to-open');
                    
                    // Scroll fluide avec easing personnalisé
                    smoothScrollTo(anchorPosition, scrollDuration, () => {
                        projectCard.classList.remove('preparing-to-open');
                        openCardWithSmoothAnimation(projectCard, projectDescription, hoverIndicator);
                    });
                } else {
                    // Si on est déjà proche, ouvrir directement
                    openCardWithSmoothAnimation(projectCard, projectDescription, hoverIndicator);
                }
            } else {
                openCardWithSmoothAnimation(projectCard, projectDescription, hoverIndicator);
            }
        }
    }
}

/**
 * Fonction de scroll fluide avec easing personnalisé
 */
function smoothScrollTo(targetPosition, duration, callback) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    
    function easeInOutCubic(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    function scrollAnimation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * easeProgress);
        
        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        } else if (callback) {
            callback();
        }
    }
    
    requestAnimationFrame(scrollAnimation);
}

/**
 * Fonction pour ouvrir une carte avec animation fluide
 */
function openCardWithSmoothAnimation(projectCard, projectDescription, hoverIndicator) {
    // Préparer l'animation
    projectCard.classList.add('expanding');
    projectCard.classList.add('expanded');
    document.body.classList.add('has-expanded-card');
    
    // Calculer la hauteur cible
    projectDescription.style.maxHeight = 'none';
    const targetHeight = projectDescription.scrollHeight;
    projectDescription.style.maxHeight = '0';
    
    // Forcer le reflow
    void projectDescription.offsetHeight;
    
    // Configurer la transition fluide
    projectDescription.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // Déclencher l'animation d'ouverture avec un léger délai pour la fluidité
    requestAnimationFrame(() => {
        projectDescription.style.maxHeight = targetHeight + 'px';
        projectDescription.style.opacity = '1';
        projectDescription.style.paddingTop = '15px';
        
        // Masquer l'indicateur avec fade-out
        if (hoverIndicator) {
            hoverIndicator.style.transition = 'opacity 0.2s ease-out';
            hoverIndicator.style.opacity = '0';
        }
    });
    
    // Nettoyer après l'animation
    setTimeout(() => {
        projectCard.classList.remove('expanding');
        projectDescription.style.maxHeight = 'none'; // Permettre le redimensionnement dynamique
    }, 500);
}

// Fonction openCardWithAnchor supprimée - remplacée par openCardWithSmoothAnimation

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
            
            // Mettre à jour les ancres après filtrage
            setTimeout(updateAnchorPositions, 100);
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
        
        // Mettre à jour les ancres après recherche
        setTimeout(updateAnchorPositions, 100);
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
                    toggleProjectDetailsWithAnchors(targetProject);
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
    
    // Recréer les ancres après réorganisation
    updateAnchorPositions();
}