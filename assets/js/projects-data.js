/**
 * Base de données des projets
 * Structure de données contenant tous les projets du portfolio
 */
const projectsData = [
    // sncf : Projets SNCF
    {
        id: "sncf-app",
        title: "Migration d'Applications SNCF",
        image: "assets/img/projects/sncf.jpg",
        shortDescription: "Refactorisation et modernisation des applications métier du Technicentre Sud-Est Européen.",
        detailedDescription: `
            <p>Dans le cadre de mon alternance à la SNCF, j'ai activement participé à la modernisation complète des applications métier du Technicentre Sud-Est Européen (TSEE).</p>
            <p>Ce projet d'envergure comprenait :</p>
            <ul>
                <li>Migration du code PHP vers la version 8 pour bénéficier des améliorations de performances et de sécurité</li>
                <li>Refactorisation complète de l'existant en appliquant rigoureusement les principes SOLID</li>
                <li>Mise en place d'une architecture front-end moderne avec Angular 20</li>
                <li>Développement d'un back-end robuste avec Spring Boot</li>
                <li>Optimisation des performances et de la sécurité des applications</li>
                <li>Mise en place de tests automatisés et d'intégration continue</li>
            </ul>
            <p>Ce projet a permis d'améliorer significativement la maintenabilité, les performances et la sécurité des applications métier essentielles au fonctionnement du Technicentre.</p>
        `,
        tags: ["Angular 20", "Spring Boot", "PHP 8"],
        category: "sncf",
        github: ""
    },
    // sncf : docker gitlab
    {
        id: "gitlab-docker",
        title: "Déploiement GitLab Dockerisé",
        image: "assets/img/projects/sncf.jpg",
        shortDescription: "Mise en place d'une infrastructure GitLab containerisée pour la gestion de versions et l'intégration continue.",
        detailedDescription: `
            <p>En collaboration avec un autre alternant, j'ai conçu et déployé une instance GitLab entièrement dockerisée pour le Technicentre Sud-Est Européen de la SNCF.</p>
            <p>Les principales réalisations incluent :</p>
            <ul>
                <li>Configuration des conteneurs Docker pour GitLab, PostgreSQL, Redis et autres services associés</li>
                <li>Mise en place de volumes persistants pour les données critiques</li>
                <li>Configuration d'un reverse proxy pour sécuriser les accès</li>
                <li>Configuration des pipelines CI/CD pour l'automatisation des tests et déploiements</li>
                <li>Mise en place de la sauvegarde automatisée des données</li>
                <li>Documentation complète du processus de déploiement et de maintenance</li>
            </ul>
            <p>Ce projet a considérablement amélioré la gestion de versions et la collaboration au sein des équipes de développement en fournissant un environnement stable et sécurisé pour l'intégration continue.</p>
        `,
        tags: ["Docker", "GitLab", "CI/CD"],
        category: "sncf",
        github: ""
    },
    // Ajout du projet Reconstruction Architecture Serveur
    {
        id: "server-architecture",
        title: "Reconstruction Architecture Serveur",
        image: "assets/img/projects/sncf.jpg",
        shortDescription: "Refonte complète de l'architecture serveur selon les normes SNCF avec mise en place d'un reverse proxy.",
        detailedDescription: `
            <p>Pour répondre aux normes de sécurité et de performance de la SNCF, j'ai participé à la reconstruction complète de l'architecture serveur des applications métier du Technicentre Sud-Est Européen.</p>
            <p>Le projet comprenait :</p>
            <ul>
                <li>Analyse de l'architecture existante et identification des points d'amélioration</li>
                <li>Conception d'une nouvelle architecture conforme aux normes SNCF</li>
                <li>Mise en place d'un reverse proxy Nginx pour le filtrage et la redirection des requêtes</li>
                <li>Configuration de la sécurité réseau et des certificats SSL</li>
                <li>Optimisation des performances et de la scalabilité</li>
                <li>Mise en place de la surveillance et des alertes</li>
            </ul>
            <p>Cette refonte a permis d'augmenter la sécurité, la fiabilité et les performances des applications tout en facilitant leur maintenance et leur scalabilité.</p>
        `,
        tags: ["Docker", "Nginx", "Sécurité"],
        category: "sncf",
        github: ""
    },
    
    // Ajout du projet Application Java pour la DGEFP
    {
        id: "dgefp-website",
        title: "Supervision et structuration d'un site web d'urgence pour la DGEFP",
        image: "assets/img/projects/dgefp.jpg",
        shortDescription: "Management d'équipe et structuration complète d'un site web en urgence pour une démarche administrative critique.",
        detailedDescription: `
            <p>En tant que chef d'équipe à la Délégation Générale à l'Emploi et à la Formation Professionnelle (DGEFP), j'ai supervisé une équipe de développeurs pour la création d'un squelette (type WordPress) de site web coder pour l'occasion en Java dans le cadre d'une situation d'urgence administrative.</p>
            <p>Mes responsabilités et réalisations :</p>
            <ul>
                <li>Management et coordination d'une équipe de développeurs</li>
                <li>Structuration complète du site web selon les exigences métier</li>
                <li>Mise en place de l'architecture et de l'organisation du contenu</li>
                <li>Gestion de projet en mode agile avec contraintes temporelles serrées</li>
                <li>Interface avec les parties prenantes pour définir les besoins fonctionnels</li>
                <li>Supervision de l'intégration et des tests avant mise en production</li>
            </ul>
            <p>Ce projet a nécessité une approche collaborative intensive et une gestion rigoureuse des priorités pour livrer une solution opérationnelle dans les délais impartis, répondant efficacement aux besoins urgents de l'administration.</p>
        `,
        tags: ["Management", "Java", "Gestion de projet", "Administration"],
        category: "dgefp",
        github: ""
    },

    // Formation et automatisation Excel
    {
        id: "dgefp-excel-automation",
        title: "Formation Excel et automatisation par macros pour la DGEFP",
        image: "assets/img/projects/dgefp.jpg",
        shortDescription: "Conception et animation d'une formation Excel avec développement de macros pour automatiser le traitement des données entreprises.",
        detailedDescription: `
            <p>À la DGEFP, j'ai conçu et dispensé une formation complète sur Excel et les macros VBA pour optimiser le traitement des données administratives de l'équipe.</p>
            <p>Contexte et réalisations :</p>
            <ul>
                <li>Analyse des besoins : traitement manuel chronophage de fichiers Excel reçus des entreprises</li>
                <li>Conception de templates Excel structurés pour la saisie de données par les entreprises</li>
                <li>Développement de macros VBA pour l'automatisation du traitement des données</li>
                <li>Formation de l'équipe (15 personnes) aux fonctionnalités avancées d'Excel</li>
                <li>Mise en place d'un système d'automatisation pour la récupération et consolidation des informations</li>
                <li>Documentation technique et guides utilisateur pour la maintenance</li>
            </ul>
            <p>Cette initiative a permis de réduire de 80% le temps de traitement des dossiers entreprises, tout en diminuant significativement les risques d'erreurs de saisie manuelle. L'équipe est désormais autonome sur ces outils d'automatisation.</p>
        `,
        tags: ["Excel", "VBA", "Formation", "Automatisation", "Administration"],
        category: "dgefp",
        github: ""
    },    
    // Ajout du projet Outil de Facturation
    {
        id: "invoice-tool",
        title: "Outil de Facturation",
        image: "assets/img/projects/gesta-partners.jpg",
        shortDescription: "Conception d'un outil de facturation pour le service comptabilité de Gesta Partners avec interface CLI et WinForm.",
        detailedDescription: `
            <p>Dans le cadre de mon stage chez Gesta Partners, j'ai développé un outil complet de facturation pour optimiser les processus du service comptabilité.</p>
            <p>Le projet comprenait :</p>
            <ul>
                <li>Analyse des besoins spécifiques du service comptabilité</li>
                <li>Conception d'une interface en ligne de commande (CLI) pour les opérations automatisées</li>
                <li>Développement d'une interface graphique WinForm pour une utilisation conviviale</li>
                <li>Implémentation de mesures de sécurité contre les injections SQL et les vulnérabilités XSS</li>
                <li>Intégration avec le système comptable existant</li>
                <li>Documentation complète et formation des utilisateurs</li>
            </ul>
            <p>Cet outil a permis de réduire significativement le temps de traitement des factures et d'améliorer la précision des données comptables tout en garantissant un niveau élevé de sécurité.</p>
        `,
        tags: ["C#", "WinForm", "SQL"],
        category: "gesta",
        github: ""
    },
    
    // Ajout du projet Boutique E-commerce
    {
        id: "ecommerce",
        title: "Boutique E-commerce",
        image: "assets/img/projects/nivo-web.jpg",
        shortDescription: "Mise en place d'une boutique en ligne complète avec WooCommerce pour un client de nivo-web.",
        detailedDescription: `
            <p>Lors de mon expérience chez nivo-web, j'ai participé à la création complète d'une boutique e-commerce utilisant WordPress et WooCommerce.</p>
            <p>Le projet comprenait :</p>
            <ul>
                <li>Configuration et personnalisation de WordPress selon les besoins du client</li>
                <li>Installation et paramétrage de WooCommerce pour la gestion des produits et commandes</li>
                <li>Personnalisation du thème et de l'interface utilisateur</li>
                <li>Intégration des passerelles de paiement sécurisées</li>
                <li>Optimisation des performances et du référencement</li>
                <li>Formation du client à l'utilisation de la plateforme</li>
            </ul>
            <p>Cette boutique en ligne a permis au client de diversifier ses canaux de vente et d'accroître significativement son chiffre d'affaires grâce à une présence en ligne professionnelle et fonctionnelle.</p>
        `,
        tags: ["WordPress", "WooCommerce", "HTML/CSS"],
        category: "nivo",
        github: ""
    },
    
    // Ajout du projet Sécurisation Applications Web
    {
        id: "web-security",
        title: "Sécurisation Applications Web",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Audit et implémentation de mesures de sécurité pour des applications web contre les vulnérabilités OWASP Top 10.",
        detailedDescription: `
            <p>Projet personnel de recherche et d'application des meilleures pratiques de sécurité pour les applications web, en se basant sur les recommandations OWASP Top 10.</p>
            <p>Les aspects clés comprennent :</p>
            <ul>
                <li>Audit des vulnérabilités courantes (XSS, CSRF, injection SQL, etc.)</li>
                <li>Mise en place de mécanismes de protection contre les attaques par injection</li>
                <li>Implémentation d'une gestion sécurisée des authentifications et sessions</li>
                <li>Configuration de l'en-tête Content Security Policy (CSP)</li>
                <li>Validation et filtrage des entrées utilisateur</li>
                <li>Développement d'une bibliothèque de fonctions sécurisées réutilisables</li>
            </ul>
            <p>Ce projet m'a permis d'approfondir mes connaissances en cybersécurité et de développer une méthodologie rigoureuse pour la sécurisation des applications web, que j'applique désormais systématiquement dans tous mes projets de développement.</p>
        `,
        tags: ["Cybersécurité", "OWASP", "PHP"],
        category: "security",
        github: ""
    },
    
    // Ajout du projet Portfolio Professionnel
    {
        id: "portfolio",
        title: "Portfolio Professionnel",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Conception et développement de ce portfolio personnel avec HTML, CSS et JavaScript en appliquant les meilleures pratiques de développement web.",
        detailedDescription: `
            <p>Développement de mon portfolio professionnel personnel en utilisant des technologies web modernes sans dépendre de frameworks externes.</p>
            <p>Caractéristiques techniques :</p>
            <ul>
                <li>Architecture HTML5 sémantique pour une meilleure accessibilité et référencement</li>
                <li>Utilisation avancée de CSS3 (Flexbox, Grid, variables CSS, animations)</li>
                <li>JavaScript vanilla pour les interactions et animations</li>
                <li>Design responsive s'adaptant à tous les types d'appareils</li>
                <li>Mode sombre/clair avec persistance des préférences utilisateur</li>
                <li>Optimisation des performances (chargement différé, minification)</li>
                <li>Mise en œuvre des meilleures pratiques d'accessibilité web</li>
            </ul>
            <p>Ce projet m'a permis de mettre en pratique mes compétences en développement front-end tout en créant une vitrine professionnelle pour présenter mon parcours et mes réalisations.</p>
        `,
        tags: ["HTML5", "CSS3", "JavaScript"],
        category: "web",
        github: "https://github.com/HugoBiegas/hugobiegas.github.io"
    },
    
    // Autres projets existants
    {
        id: "clients-factures",
        title: "Clients et Factures",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Système de gestion de clients et factures développé en Java.",
        detailedDescription: `
            <p>Ce projet implémente un système de gestion basique permettant de créer des clients, de leur associer des factures et de suivre l'état des paiements.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Création, modification et suppression de clients</li>
                <li>Création de factures avec montants validés</li>
                <li>Suivi de l'état de règlement (payé/non payé)</li>
                <li>Date automatique de création des factures</li>
                <li>Possibilité de dupliquer des factures existantes</li>
                <li>Calcul du montant total des factures par client</li>
                <li>Filtrage des factures selon leur état de règlement</li>
            </ul>
            <p>L'architecture suit un modèle orienté objet avec une relation bidirectionnelle entre clients et factures pour une navigation aisée.</p>
        `,
        tags: ["Java", "OOP", "Gestion"],
        category: "web",
        github: "https://github.com/HugoBiegas/ClientsEtFactures"
    },
    {
        id: "auto-clicker",
        title: "Auto Clicker",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application Windows qui permet d'automatiser les clics de souris à des positions spécifiques de l'écran.",
        detailedDescription: `
            <p>Auto Clicker est une application Windows développée en C# qui permet d'automatiser des séquences de clics de souris.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Surveillance en temps réel de la position du curseur</li>
                <li>Ajout de positions de clic à une file d'attente</li>
                <li>Configuration du type de clic (gauche ou droit) pour chaque position</li>
                <li>Réglage du temps d'attente entre chaque clic</li>
                <li>Configuration du nombre de répétitions de la séquence</li>
                <li>Raccourcis clavier pour les fonctions principales</li>
            </ul>
            <p>L'application utilise le multi-threading pour maintenir l'interface utilisateur réactive pendant l'exécution des séquences de clics.</p>
        `,
        tags: ["C#", "Windows Forms", "Automation"],
        category: "web",
        github: "https://github.com/HugoBiegas/AutoClicker"
    },
    {
        id: "laravel-festival",
        title: "Laravel Festival",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application web Laravel pour la gestion d'un festival et l'hébergement des équipes participantes.",
        detailedDescription: `
            <p>Application web développée avec Laravel permettant la gestion d'un festival, notamment l'organisation des équipes participantes et leur hébergement dans différents établissements.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Gestion des équipes participantes (création, consultation, modification)</li>
                <li>Gestion des établissements d'hébergement</li>
                <li>Association entre équipes et établissements</li>
                <li>Vue dédiée pour la gestion des attributions</li>
            </ul>
            <p>L'application suit l'architecture MVC de Laravel avec des relations bien définies entre les modèles et utilise les migrations, factories et seeders pour l'initialisation des données.</p>
        `,
        tags: ["Laravel", "PHP", "MVC", "MySQL"],
        category: "web",
        github: "https://github.com/HugoBiegas/Laravel-Festival"
    },
    {
        id: "application-nfc",
        title: "Application NFC",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application Android pour la validation d'identité via NFC et code de sécurité.",
        detailedDescription: `
            <p>Ce projet Android est conçu pour fonctionner avec une application web. Son but est de vérifier l'identité d'une personne en validant un code généré par l'application web, puis en scannant un tag NFC.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Validation de code généré par l'application web via API</li>
                <li>Lecture des données NFC après validation du code</li>
                <li>Vérification d'identité avec confirmation du tag NFC</li>
                <li>Affichage d'une popup indiquant si le scan NFC est accepté ou refusé</li>
                <li>Communication API sécurisée avec validation de token</li>
            </ul>
            <p>L'application utilise l'API NFC d'Android et un système d'authentification moderne pour garantir la sécurité du processus de validation.</p>
        `,
        tags: ["Android", "NFC", "Java", "API"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/nfc-mobile-code-hackaton"
    },
    {
        id: "secu-scan-pro",
        title: "SecuScanPro",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Analyseur de sécurité web avancé développé en Go pour identifier les vulnérabilités.",
        detailedDescription: `
            <p>SecuScanPro est un outil d'analyse de sécurité web avancé développé en Go, conçu pour identifier automatiquement les vulnérabilités dans les applications web.</p>
            <p>Caractéristiques principales :</p>
            <ul>
                <li>Analyse automatique des structures web et détection des points d'entrée sensibles</li>
                <li>Tests d'injection SQL pour MySQL, PostgreSQL, MSSQL et Oracle</li>
                <li>Vérification automatique des protections CSRF dans les formulaires</li>
                <li>Interface graphique moderne développée avec Fyne</li>
                <li>Système de rapports détaillés avec stockage persistant</li>
                <li>Suivi en temps réel de la progression des analyses</li>
            </ul>
            <p>Cet outil met l'accent sur la détection des injections SQL et la vérification des protections CSRF, tout en offrant une interface intuitive.</p>
        `,
        tags: ["Go", "Sécurité", "SQL Injection", "CSRF"],
        category: "security",
        github: "https://github.com/HugoBiegas/SecuScanPro"
    },
    {
        id: "quizz-app",
        title: "Application de Quiz",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application complète de quiz avec frontend Android et backend Spring Boot.",
        detailedDescription: `
            <p>Cette application de quiz se compose de deux parties complémentaires :</p>
            <ul>
                <li>Une application Android (frontend) pour l'interface utilisateur</li>
                <li>Une API REST (backend) développée avec Spring Boot</li>
            </ul>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Authentification sécurisée avec gestion de rôles (administrateur/professeur, étudiant)</li>
                <li>Création et gestion de questionnaires à choix multiples</li>
                <li>Passage de quiz avec validation des réponses</li>
                <li>Historique des résultats et statistiques</li>
                <li>Interface administrateur pour gérer les utilisateurs et les contenus</li>
            </ul>
            <p>Le projet utilise une architecture moderne avec un backend Java Spring Boot et une application Android native pour le frontend.</p>
        `,
        tags: ["Android", "Spring Boot", "Java", "MySQL"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/QuizzFront"
    },
    {
        id: "cobol-base",
        title: "Environnement COBOL",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Environnement de développement COBOL avec Docker pour Windows.",
        detailedDescription: `
            <p>Ce projet fournit un ensemble de scripts batch pour faciliter le développement COBOL sous Windows en utilisant Docker, sans avoir besoin d'installer un compilateur COBOL directement sur votre système.</p>
            <p>Scripts disponibles :</p>
            <ul>
                <li><strong>cobol-verify-env.bat</strong>: Vérifie l'environnement Docker pour COBOL</li>
                <li><strong>cobol-compile.bat</strong>: Compile un programme COBOL</li>
                <li><strong>cobol-execute.bat</strong>: Exécute un programme COBOL déjà compilé</li>
                <li><strong>cobol-run.bat</strong>: Combine la compilation et l'exécution</li>
                <li><strong>cobol-shell.bat</strong>: Lance un shell interactif dans le conteneur Docker</li>
            </ul>
            <p>Cet environnement permet de développer facilement en COBOL sans installation complexe, en utilisant Docker comme couche d'abstraction.</p>
        `,
        tags: ["COBOL", "Docker", "Batch", "Legacy"],
        category: "web",
        github: "https://github.com/HugoBiegas/Cobol_Base"
    },
    {
        id: "gestion-bourse",
        title: "Gestion Bourse",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application multi-plateforme de gestion de portefeuille boursier avec .NET MAUI.",
        detailedDescription: `
            <p>GestionBourse est une application permettant aux utilisateurs de gérer des portefeuilles d'actions pour différents traders, développée avec .NET MAUI pour une compatibilité multi-plateforme.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Gestion des traders et visualisation des portefeuilles</li>
                <li>Suivi des actions disponibles sur le marché</li>
                <li>Achat de nouvelles actions pour un trader</li>
                <li>Vente d'actions détenues par un trader</li>
                <li>Visualisation détaillée des transactions</li>
            </ul>
            <p>L'application utilise SQLite comme base de données locale avec le pattern Repository pour la gestion des données, et fonctionne sur Android, iOS, macOS et Windows.</p>
        `,
        tags: [".NET MAUI", "C#", "SQLite", "Cross-platform"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/GestionBourse"
    },
    {
        id: "gestion-supermarche",
        title: "Gestion Supermarché",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application .NET MAUI pour gérer les heures travaillées des employés dans un supermarché.",
        detailedDescription: `
            <p>Application mobile et desktop développée avec .NET MAUI permettant de gérer les heures travaillées des employés dans différents rayons d'un supermarché.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Gestion des employés, rayons et secteurs</li>
                <li>Saisie des heures travaillées par employé et par rayon</li>
                <li>Validation des données (pas de double-emploi)</li>
                <li>Visualisation des temps de travail par employé</li>
                <li>Statistiques et visualisations graphiques avancées</li>
                <li>Converters personnalisés pour l'interface utilisateur</li>
                <li>Intégration d'une musique de fond sur toutes les pages</li>
            </ul>
            <p>Le projet utilise des packages NuGet comme OxyPlot pour les graphiques et Plugin.Maui.Audio pour la lecture audio cross-platform.</p>
        `,
        tags: [".NET MAUI", "C#", "SQLite", "OxyPlot"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/GestionSupermarche"
    },
    {
        id: "instant-like",
        title: "InstantLike",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application Android de partage de photos inspirée des réseaux sociaux modernes.",
        detailedDescription: `
            <p>InstantLike est une application Android de partage de photos permettant aux utilisateurs de créer un profil, publier des photos, interagir avec les publications et communiquer par messages privés.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Authentification sécurisée avec Firebase</li>
                <li>Prise et partage de photos avec titre et description</li>
                <li>Interactions sociales: likes, commentaires, partage</li>
                <li>Messagerie privée en temps réel entre utilisateurs</li>
                <li>Profil utilisateur avec statistiques et galerie</li>
            </ul>
            <p>L'application utilise Firebase pour l'authentification, le stockage des images et la messagerie en temps réel, ainsi que Firestore pour les données structurées.</p>
        `,
        tags: ["Android", "Firebase", "Java", "Social Media"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/instanLinkeV.2"
    },
    {
        id: "projet-capchat",
        title: "Projet CapChat",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Plateforme innovante de CAPTCHA visuel basée sur la reconnaissance d'images singulières.",
        detailedDescription: `
            <p>CapChat est une solution de vérification humaine (CAPTCHA) qui utilise des images artistiques plutôt que du texte déformé. L'utilisateur doit identifier une image "singulière" parmi un ensemble d'images "neutres" en se basant sur un indice textuel.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Interface CAPTCHA visuelle et intuitive</li>
                <li>Thermomètre de temps dynamique avec réduction en cas d'échec</li>
                <li>Système d'inscription et connexion pour les artistes</li>
                <li>Création et gestion de CapChats personnalisés</li>
                <li>Upload d'images via archives ZIP</li>
                <li>Statistiques d'utilisation des CapChats</li>
                <li>Administration et modération de la plateforme</li>
            </ul>
            <p>Le projet inclut une API REST complète et une interface utilisateur pour les artistes et administrateurs.</p>
        `,
        tags: ["Node.js", "Express", "MySQL", "JWT", "EJS"],
        category: "web",
        github: "https://github.com/HugoBiegas/Projet_CapChat"
    },
    {
        id: "communes-france-api",
        title: "API Communes de France",
        image: "assets/img/projects/default.jpg",
        shortDescription: "API pour les informations sur les communes de France et services associés.",
        detailedDescription: `
            <p>Cette API, développée pour le ministère de l'intérieur, permet de mettre à disposition des informations sur les communes de France et délivre des outils supplémentaires à destination des particuliers ou entreprises.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Liste filtrable et triable des communes de France avec géolocalisation</li>
                <li>Informations détaillées sur les communes</li>
                <li>Liste filtrable et triable des départements</li>
                <li>Gestion CRUD des communes</li>
                <li>Service d'estimation de la taxe foncière</li>
                <li>Service d'estimation de la taxe d'enlèvement des ordures ménagères</li>
                <li>Authentification des utilisateurs avec gestion des droits</li>
            </ul>
            <p>Le projet utilise Symfony et API Platform pour une mise en œuvre efficace et sécurisée.</p>
        `,
        tags: ["Symfony", "API Platform", "PHP", "Docker"],
        category: "api",
        github: "https://github.com/HugoBiegas/Biegas_Hugo_exam_api"
    },
    {
        id: "echecs-multi-app",
        title: "Échecs Multijoueur",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application mobile Android d'échecs multijoueur en ligne avec Firebase.",
        detailedDescription: `
            <p>EchecMultiApp est une application mobile Android hébergeant un jeu d'échecs multijoueur en ligne. Développée en Java, l'application utilise Firebase pour gérer les comptes utilisateurs, les salons de jeu et les parties en cours.</p>
            <p>Fonctionnalités principales :</p>
            <ul>
                <li>Authentification sécurisée avec Firebase</li>
                <li>Création et gestion de salons de jeu privés</li>
                <li>Interface de jeu intuitive avec plateau et pièces colorées</li>
                <li>Implémentation complète des règles d'échecs</li>
                <li>Gestion des situations spéciales (échec, mat, promotion, roque)</li>
                <li>Profil utilisateur avec statistiques</li>
            </ul>
            <p>L'application utilise Firebase Realtime Database pour le tour par tour en ligne, et Firestore pour les données structurées des utilisateurs.</p>
        `,
        tags: ["Android", "Firebase", "Java", "Jeu"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/EchecMultiApp"
    },
    {
        id: "bookstore-ecommerce",
        title: "BookStore E-Commerce",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application e-commerce sophistiquée de librairie en ligne développée avec ASP.NET Core MVC 8.0 en équipe à l'ESTIAM.",
        detailedDescription: `
            <p>BookStore est une application web e-commerce complète développée en équipe dans le cadre du cours "Retail (e-commerce)" à l'ESTIAM sous la supervision du Prof. Marcel Stefan Wagner, PhD.</p>
            <p>En tant que développeur Full-Stack au sein d'une équipe de 3 personnes, j'ai contribué à la conception et au développement d'une plateforme moderne respectant rigoureusement les principes SOLID.</p>
            <p>Fonctionnalités principales développées :</p>
            <ul>
                <li>Architecture ASP.NET Core MVC 8.0 avec respect strict des principes SOLID</li>
                <li>Système d'authentification multi-niveaux (User → Librarian → Admin)</li>
                <li>Développement de 7 Tag Helpers personnalisés pour l'interface utilisateur</li>
                <li>Système de crédits virtuels avec transactions sécurisées et rollback automatique</li>
                <li>CRUD complet pour la gestion des livres, auteurs et utilisateurs</li>
                <li>Dashboard analytics temps réel avec métriques KPI</li>
                <li>Workflow e-commerce complet du catalogue au checkout</li>
                <li>Interface responsive avec Bootstrap 5 et JavaScript ES6+</li>
                <li>Sécurité avancée : hashage des mots de passe, protection CSRF, validation multi-niveaux</li>
            </ul>
            <p>Ce projet académique d'envergure m'a permis de mettre en pratique mes compétences en développement web moderne, architecture logicielle et travail en équipe, tout en livrant une application e-commerce fonctionnelle et sécurisée.</p>
        `,
        tags: ["ASP.NET Core", "C#", "MVC", "Bootstrap", "JavaScript", "E-commerce"],
        category: "web",
        github: "https://github.com/HugoBiegas/ECommerceApp"
    },
    {
        id: "quantum-mastermind",
        title: "Quantum Mastermind",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Implémentation innovante du jeu Mastermind intégrant des algorithmes quantiques avec Qiskit pour la génération de solutions et l'analyse probabiliste.",
        detailedDescription: `
            <p>Quantum Mastermind est une implémentation révolutionnaire du jeu Mastermind classique qui utilise l'informatique quantique pour enrichir le gameplay traditionnel avec des algorithmes avancés.</p>
            <p>Architecture technique complète :</p>
            <ul>
                <li><strong>Backend quantique :</strong> API FastAPI avec intégration Qiskit et AerSimulator d'IBM</li>
                <li><strong>Frontend moderne :</strong> Interface utilisateur responsive avec visualisation en temps réel</li>
                <li><strong>Algorithmes quantiques :</strong> Génération de solutions via superposition et intrication quantique</li>
                <li><strong>Analyse probabiliste :</strong> Calcul des indices de position avec probabilités quantiques</li>
                <li><strong>Système de cache avancé :</strong> Optimisation des circuits quantiques (amélioration de 340% des performances)</li>
                <li><strong>Architecture robuste :</strong> SQLAlchemy 2.0 async, PostgreSQL, Redis pour le cache</li>
                <li><strong>Déploiement moderne :</strong> Containerisation Docker avec haute disponibilité (99.96%)</li>
            </ul>
            <p>Innovations techniques majeures :</p>
            <ul>
                <li>Utilisation de circuits quantiques pour générer des combinaisons via superposition</li>
                <li>Algorithme d'intrication entre qubits adjacents pour l'analyse des tentatives</li>
                <li>Système de fallback intelligent simulant le comportement quantique</li>
                <li>Cache à deux niveaux (circuits de base et transpilés) pour l'optimisation</li>
                <li>Adaptation automatique du nombre de mesures selon la complexité</li>
            </ul>
            <p>Ce projet démontre une expertise avancée en informatique quantique appliquée, développement d'API modernes et architecture logicielle complexe, avec des performances optimisées (temps d'exécution moyen de 47ms).</p>
        `,
        tags: ["Qiskit", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "Docker", "Informatique Quantique"],
        category: "api",
        github: "https://github.com/HugoBiegas/Mastermind_backend"
    },
    {
        id: "mosaique-capital",
        title: "Mosaïque Capital",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Plateforme complète de gestion patrimoniale moderne avec intégration bancaire multi-providers et authentification MFA avancée.",
        detailedDescription: `
            <p>Mosaïque Capital est une plateforme sophistiquée de gestion patrimoniale développée avec Spring Boot 3.4.5, permettant aux utilisateurs de centraliser, suivre et optimiser l'ensemble de leur patrimoine financier.</p>
            <p>Architecture technique avancée :</p>
            <ul>
                <li><strong>Sécurité renforcée :</strong> Authentification JWT avec MFA TOTP (compatible Google Authenticator), tokens rotatifs et blacklist Redis</li>
                <li><strong>Intégration bancaire multi-providers :</strong> Budget Insight (Powens), Bridge API, Linxo Connect, et Tink (gratuit - 100 connexions/mois)</li>
                <li><strong>Résilience avancée :</strong> Circuit Breaker, Retry avec backoff exponentiel, Rate Limiting via Resilience4j</li>
                <li><strong>Synchronisation automatique :</strong> Sync bancaire toutes les 6h avec gestion des webhooks sécurisés</li>
                <li><strong>Architecture moderne :</strong> Spring Boot 3.4.5, MySQL 8.0, Redis 7.2, Docker Compose</li>
            </ul>
            <p>Fonctionnalités patrimoniales complètes :</p>
            <ul>
                <li>Gestion multi-types d'actifs : immobilier, placements financiers, cryptomonnaies, liquidités</li>
                <li>Valorisations historiques avec calcul automatique des plus-values</li>
                <li>Système de vente sécurisé empêchant la suppression accidentelle d'actifs</li>
                <li>Catégorisation automatique des transactions avec machine learning</li>
                <li>Dashboard analytics avec métriques patrimoniales temps réel</li>
                <li>API REST documentée avec Swagger/OpenAPI pour intégrations tierces</li>
            </ul>
            <p>Patterns et principes implémentés :</p>
            <ul>
                <li>Respect rigoureux des principes SOLID avec architecture en couches</li>
                <li>Repository Pattern, Service Layer, DTO Pattern avec MapStruct</li>
                <li>Strategy Pattern pour la gestion multi-providers bancaires</li>
                <li>Observer Pattern pour les notifications et événements</li>
            </ul>
            <p>Ce projet démontre une expertise avancée en architecture financière, intégration d'APIs bancaires complexes (conformité PSD2), et développement sécurisé avec des standards industriels rigoureux.</p>
        `,
        tags: ["Spring Boot", "Spring Security", "JWT", "MFA", "MySQL", "Redis", "APIs Bancaires", "Docker"],
        category: "api",
        github: "https://github.com/HugoBiegas/mosaique_capital_spring_boot"
    },
    {
        id: "piscines-paris-tracker",
        title: "Piscines Paris Tracker",
        image: "assets/img/projects/default.jpg",
        shortDescription: "Application web interactive pour localiser instantanément les piscines municipales les plus proches à Paris avec géolocalisation temps réel.",
        detailedDescription: `
            <p>Piscines Paris Tracker est une application web moderne développée en JavaScript vanilla qui permet aux Parisiens de trouver rapidement la piscine municipale la plus proche de leur position.</p>
            <p>Fonctionnalités cartographiques avancées :</p>
            <ul>
                <li><strong>Carte interactive dynamique :</strong> Intégration Leaflet.js avec tiles OpenStreetMap pour une navigation fluide</li>
                <li><strong>Géolocalisation temps réel :</strong> API HTML5 Geolocation pour localisation automatique de l'utilisateur</li>
                <li><strong>Calcul intelligent des distances :</strong> Algorithme de calcul de proximité avec estimations temps à pied et vélo</li>
                <li><strong>Recherche géocodée :</strong> Intégration API Nominatim (OpenStreetMap) avec autocomplétion d'adresses</li>
                <li><strong>Filtrage par proximité :</strong> Options de recherche configurables (< 1km, 2km, 5km)</li>
                <li><strong>Itinéraires intégrés :</strong> Redirection Google Maps pour navigation GPS</li>
            </ul>
            <p>Architecture technique moderne :</p>
            <ul>
                <li>JavaScript vanilla ES6+ pour performances optimales sans framework</li>
                <li>Design responsive avec Tailwind CSS et animations CSS personnalisées</li>
                <li>Base de données locale de 43 piscines municipales avec coordonnées GPS vérifiées</li>
                <li>Interface accessible avec support navigation clavier</li>
                <li>Marqueurs dynamiques avec indicateurs visuels de proximité</li>
                <li>Notifications temps réel pour feedback utilisateur immédiat</li>
            </ul>
            <p>Aspects pratiques et citoyens :</p>
            <ul>
                <li>Données officielles synchronisées depuis paris.fr (horaires, tarifs, équipements)</li>
                <li>Application gratuite et open source pour la communauté parisienne</li>
                <li>Déploiement GitHub Pages pour accessibilité maximale</li>
                <li>Interface optimisée mobile pour utilisation nomade</li>
            </ul>
            <p>Ce projet démontre une maîtrise des APIs géographiques, du développement frontend moderne et de l'expérience utilisateur, tout en apportant une valeur pratique réelle aux citoyens parisiens.</p>
        `,
        tags: ["JavaScript", "Leaflet.js", "Tailwind CSS", "Géolocalisation", "APIs", "OpenStreetMap"],
        category: "web",
        github: "https://github.com/HugoBiegas/PiscinesParisTracker"
    },
    {
        id: "teams-dev-vote",
        title: "VoteChain - TeamsDevVote",
        image: "assets/img/projects/default.jpg",
        shortDescription: "DApp de vote blockchain sécurisée développée en équipe avec Solidity et Hardhat, architecture Docker multi-stage et protection anti-fraude.",
        detailedDescription: `
            <p>VoteChain est une application décentralisée (DApp) de vote développée en équipe de 7 développeurs spécialisés, combinant la sécurité de la blockchain avec une architecture DevOps moderne.</p>
            <p>Rôle de DevOps Lead - Contributions techniques :</p>
            <ul>
                <li><strong>Architecture Docker multi-stage :</strong> Orchestration de 5 services conteneurisés avec docker-compose</li>
                <li><strong>Infrastructure blockchain :</strong> Configuration réseau EVM local avec isolation inter-conteneurs</li>
                <li><strong>Pipeline de développement :</strong> Environnement reproductible avec 20 comptes pré-configurés (10,000 ETH chacun)</li>
                <li><strong>Monitoring et diagnostics :</strong> Outils de vérification en temps réel et logs détaillés</li>
                <li><strong>Déploiement automatisé :</strong> Scripts de déploiement et configuration réseau privé</li>
            </ul>
            <p>Architecture technique blockchain :</p>
            <ul>
                <li><strong>Smart Contract Solidity 0.8.19 :</strong> Protection anti-double vote avec modifiers de sécurité</li>
                <li><strong>Framework Hardhat :</strong> 9 tâches personnalisées pour déploiement, vote et simulation</li>
                <li><strong>Tests complets :</strong> Suite Mocha + Chai avec couverture de code intégrée</li>
                <li><strong>Sécurité renforcée :</strong> Mapping hasVoted, validation d'index, événements d'audit</li>
                <li><strong>Interface CLI avancée :</strong> Commandes interactives avec affichage stylisé et statistiques temps réel</li>
            </ul>
            <p>Fonctionnalités démocratiques avancées :</p>
            <ul>
                <li>Protection blockchain garantissant "un électeur = un vote"</li>
                <li>Système de simulation automatique jusqu'à 50 votes avec candidats personnalisables</li>
                <li>Résultats temps réel avec graphiques ASCII et pourcentages détaillés</li>
                <li>Interface de diagnostic pour vérification des statuts électeurs</li>
                <li>Audit trail complet avec événements blockchain traçables</li>
            </ul>
            <p>Travail collaboratif avec 7 spécialistes : Lead Smart Contract (Naier), Architecte Hardhat (Yanis), QA Lead (Yann), Documentation (Frank & Alexandre), UX Console (Antoine).</p>
            <p>Ce projet démontre une maîtrise approfondie de la blockchain, du DevOps moderne et de la collaboration en équipe sur des technologies émergentes avec des enjeux de sécurité critiques.</p>
        `,
        tags: ["Solidity", "Hardhat", "Docker", "Blockchain", "DApp", "DevOps", "Smart Contracts"],
        category: "web",
        github: "https://github.com/HugoBiegas/TeamsDevVote"
    }
];