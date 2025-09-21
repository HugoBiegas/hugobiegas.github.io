/**
 * Système de traduction pour les projets générés dynamiquement
 * Gère la traduction des projets définis dans projects-data.js
 */

class ProjectsI18n {
    constructor() {
        this.currentLanguage = 'fr';
        this.init();
    }

    init() {
        // Écouter les changements de langue du système principal
        window.addEventListener('languageChanged', (e) => {
            this.currentLanguage = e.detail.language;
            this.updateProjectsLanguage();
        });

        // Initialiser avec la langue actuelle
        if (window.getCurrentLanguage) {
            this.currentLanguage = window.getCurrentLanguage();
        }
    }

    /**
     * Met à jour la langue de tous les projets affichés
     */
    updateProjectsLanguage() {
        // Mettre à jour immédiatement
        this.updateProjectCards();
        this.updateProjectModals();
        
        // Aussi attendre un peu pour les éléments qui pourraient se charger tardivement
        setTimeout(() => {
            this.updateProjectCards();
            this.updateProjectModals();
        }, 50);
        
        // Et une dernière fois pour être sûr
        setTimeout(() => {
            this.updateProjectCards();
            this.updateProjectModals();
        }, 200);
    }

    /**
     * Met à jour les cartes de projets
     */
    updateProjectCards() {
        document.querySelectorAll('.project-card').forEach(card => {
            const projectId = card.getAttribute('data-project-id');
            if (!projectId) return;

            const project = projectsData.find(p => p.id === projectId);
            if (!project) return;

            // Mettre à jour le titre
            const titleElement = card.querySelector('h3');
            if (titleElement && project.title) {
                titleElement.textContent = project.title[this.currentLanguage] || project.title.fr;
            }

            // Mettre à jour la description courte (le premier <p> dans .project-content)
            const shortDescElement = card.querySelector('.project-content > p');
            if (shortDescElement && project.shortDescription) {
                shortDescElement.textContent = project.shortDescription[this.currentLanguage] || project.shortDescription.fr;
            }

            // Mettre à jour la description détaillée si elle est affichée
            const detailedDescElement = card.querySelector('.project-description');
            if (detailedDescElement && project.detailedDescription) {
                detailedDescElement.innerHTML = project.detailedDescription[this.currentLanguage] || project.detailedDescription.fr;
            }
        });
    }

    /**
     * Met à jour les modales de projets
     */
    updateProjectModals() {
        document.querySelectorAll('.project-modal').forEach(modal => {
            const projectId = modal.getAttribute('data-project-id');
            if (!projectId) return;

            const project = projectsData.find(p => p.id === projectId);
            if (!project) return;

            // Mettre à jour le titre de la modale
            const titleElement = modal.querySelector('.modal-title');
            if (titleElement && project.title) {
                titleElement.textContent = project.title[this.currentLanguage] || project.title.fr;
            }

            // Mettre à jour la description détaillée
            const detailElement = modal.querySelector('.modal-description');
            if (detailElement && project.detailedDescription) {
                detailElement.innerHTML = project.detailedDescription[this.currentLanguage] || project.detailedDescription.fr;
            }
        });
    }

    /**
     * Met à jour un projet spécifique après son rendu
     */
    updateProject(projectElement, projectData) {
        if (!projectData || !projectElement) return;

        // Mettre à jour le titre
        const titleElement = projectElement.querySelector('h3, .project-title, .modal-title');
        if (titleElement && projectData.title) {
            titleElement.textContent = projectData.title[this.currentLanguage] || projectData.title.fr;
        }

        // Mettre à jour la description courte
        const shortDescElement = projectElement.querySelector('p, .project-description');
        if (shortDescElement && projectData.shortDescription) {
            shortDescElement.textContent = projectData.shortDescription[this.currentLanguage] || projectData.shortDescription.fr;
        }

        // Mettre à jour la description détaillée
        const detailDescElement = projectElement.querySelector('.modal-description, .detailed-description');
        if (detailDescElement && projectData.detailedDescription) {
            detailDescElement.innerHTML = projectData.detailedDescription[this.currentLanguage] || projectData.detailedDescription.fr;
        }
    }
}

// Instance globale
let projectsI18n;

// Initialisation une fois que le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    projectsI18n = new ProjectsI18n();
});

// Fonction utilitaire pour mettre à jour les projets après leur génération
window.updateProjectLanguage = (projectElement, projectData) => {
    if (projectsI18n) {
        projectsI18n.updateProject(projectElement, projectData);
    }
};