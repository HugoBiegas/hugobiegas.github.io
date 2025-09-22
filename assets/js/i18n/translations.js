/**
 * Système d'internationalisation (i18n) pour le portfolio
 * Support français et anglais avec stockage des préférences
 */

class I18n {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || this.detectBrowserLanguage() || 'fr';
        this.translations = {};
        this.callbacks = [];
        
        // Charger les traductions de manière synchrone
        this.loadTranslationsSync();
    }

    /**
     * Détecte la langue du navigateur
     */
    detectBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        return lang.startsWith('en') ? 'en' : 'fr';
    }

    /**
     * Récupère la langue stockée
     */
    getStoredLanguage() {
        return localStorage.getItem('portfolio-language');
    }

    /**
     * Stocke la langue sélectionnée
     */
    setStoredLanguage(lang) {
        localStorage.setItem('portfolio-language', lang);
    }

    /**
     * Charge les traductions de manière synchrone
     */
    loadTranslationsSync() {
        // Les traductions seront chargées par des scripts séparés
        // qui définiront window.translations_fr et window.translations_en
        const checkTranslations = () => {
            if (window.translations_fr && window.translations_en) {
                this.translations = {
                    fr: window.translations_fr,
                    en: window.translations_en
                };
                this.applyTranslations();
            } else {
                // Réessayer après 100ms
                setTimeout(checkTranslations, 100);
            }
        };
        
        // Vérifier immédiatement et en boucle si nécessaire
        checkTranslations();
    }

    /**
     * Obtient une traduction pour une clé donnée
     */
    t(key, params = {}) {
        let translation = this.translations[this.currentLanguage]?.[key] || key;
        
        // Remplacer les paramètres dans la traduction
        Object.keys(params).forEach(param => {
            translation = translation.replace(`{{${param}}}`, params[param]);
        });
        
        return translation;
    }

    /**
     * Change la langue courante
     */
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.setStoredLanguage(lang);
            this.applyTranslations();
            this.notifyCallbacks();
            this.updateLanguageSelector();
            
            // Déclencher un événement personnalisé pour informer les autres composants
            const event = new CustomEvent('languageChanged', { 
                detail: { language: lang } 
            });
            window.dispatchEvent(event);
        }
    }

    /**
     * Obtient la langue courante
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    /**
     * Applique les traductions à tous les éléments avec data-i18n
     */
    applyTranslations() {
        // Ajouter une classe temporaire pour l'animation
        document.body.classList.add('language-switching');
        
        // Traductions pour les éléments avec data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const varsAttr = element.getAttribute('data-i18n-vars');
            
            let vars = {};
            if (varsAttr) {
                try {
                    vars = JSON.parse(varsAttr);
                } catch (e) {
                    console.warn('Erreur de parsing des variables i18n:', varsAttr, e);
                }
            }
            
            const translation = this.t(key, vars);
            
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email')) {
                element.placeholder = translation;
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Traductions pour les attributs avec data-i18n-attr
        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const attrData = element.getAttribute('data-i18n-attr');
            const [attr, key] = attrData.split(':');
            const translation = this.t(key);
            element.setAttribute(attr, translation);
        });
        
        // Mettre à jour les tooltips du sélecteur de langue
        const frTooltip = document.querySelector('[data-lang="fr"] .language-tooltip');
        const enTooltip = document.querySelector('[data-lang="en"] .language-tooltip');
        
        if (frTooltip) {
            frTooltip.textContent = this.currentLanguage === 'fr' ? 'Français (actuel)' : 'Français';
        }
        if (enTooltip) {
            enTooltip.textContent = this.currentLanguage === 'en' ? 'English (current)' : 'English';
        }

        // Mettre à jour l'attribut lang du document
        document.documentElement.lang = this.currentLanguage;
        
        // Mettre à jour le titre de la page si défini
        const titleKey = document.querySelector('meta[name="i18n-title"]')?.content;
        if (titleKey) {
            document.title = this.t(titleKey);
        }
        
        // Retirer la classe d'animation après un délai
        setTimeout(() => {
            document.body.classList.remove('language-switching');
        }, 300);
    }

    /**
     * Ajoute un callback pour les changements de langue
     */
    onLanguageChange(callback) {
        this.callbacks.push(callback);
    }

    /**
     * Notifie tous les callbacks du changement de langue
     */
    notifyCallbacks() {
        this.callbacks.forEach(callback => callback(this.currentLanguage));
    }

    /**
     * Initialise le sélecteur de langue
     */
    initLanguageSelector() {
        // Gérer le sélecteur fixe (version ancienne)
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            this.initSelectorEvents(languageSelector);
        }

        // Gérer le sélecteur dans le header (nouvelle version)
        const headerSelector = document.querySelector('.language-selector-header');
        if (headerSelector) {
            this.initSelectorEvents(headerSelector);
        }

        // Mettre à jour l'état initial
        this.updateLanguageSelector();
    }

    /**
     * Initialise les événements pour un sélecteur donné
     */
    initSelectorEvents(selector) {
        selector.addEventListener('click', (e) => {
            const langBtn = e.target.closest('[data-lang]');
            if (langBtn) {
                const selectedLang = langBtn.getAttribute('data-lang');
                this.setLanguage(selectedLang);
            }
        });
    }

    /**
     * Met à jour l'apparence du sélecteur de langue
     */
    updateLanguageSelector() {
        // Mettre à jour le sélecteur fixe
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            this.updateSelectorButtons(languageSelector);
        }

        // Mettre à jour le sélecteur dans le header
        const headerSelector = document.querySelector('.language-selector-header');
        if (headerSelector) {
            this.updateSelectorButtons(headerSelector);
        }
    }

    /**
     * Met à jour les boutons d'un sélecteur donné
     */
    updateSelectorButtons(selector) {
        selector.querySelectorAll('[data-lang]').forEach(btn => {
            const lang = btn.getAttribute('data-lang');
            btn.classList.toggle('active', lang === this.currentLanguage);
        });
    }
}

// Instance globale
const i18n = new I18n();

// Fonctions globales pour compatibilité
window.t = (key, params) => i18n.t(key, params);
window.setLanguage = (lang) => i18n.setLanguage(lang);
window.getCurrentLanguage = () => i18n.getCurrentLanguage();

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    i18n.initLanguageSelector();
    
    // Re-appliquer les traductions après le chargement complet
    setTimeout(() => i18n.applyTranslations(), 200);
});