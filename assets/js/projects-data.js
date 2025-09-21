/**
 * Base de données des projets avec support i18n
 * Structure de données contenant tous les projets du portfolio en français et anglais
 */
const projectsData = [
    // sncf : Projets SNCF
    {
        id: "sncf-app",
        title: {
            fr: "Migration d'Applications SNCF",
            en: "SNCF Applications Migration"
        },
        image: "assets/img/projects/sncf.jpg",
        shortDescription: {
            fr: "Refactorisation et modernisation des applications métier du Technicentre Sud-Est Européen.",
            en: "Refactoring and modernization of business applications for the South-East European Technical Center."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>As part of my apprenticeship at SNCF, I actively participated in the complete modernization of the business applications of the South-East European Technical Center (TSEE).</p>
                <p>This large-scale project included:</p>
                <ul>
                    <li>Migration of PHP code to version 8 to benefit from performance and security improvements</li>
                    <li>Complete refactoring of the existing code by rigorously applying SOLID principles</li>
                    <li>Implementation of a modern front-end architecture with Angular 20</li>
                    <li>Development of a robust back-end with Spring Boot</li>
                    <li>Optimization of application performance and security</li>
                    <li>Implementation of automated testing and continuous integration</li>
                </ul>
                <p>This project significantly improved the maintainability, performance and security of business applications essential to the operation of the Technical Center.</p>
            `
        },
        tags: ["Angular 20", "Spring Boot", "PHP 8"],
        category: "sncf",
        github: ""
    },
    // sncf : docker gitlab
    {
        id: "gitlab-docker",
        title: {
            fr: "Déploiement GitLab Dockerisé",
            en: "Dockerized GitLab Deployment"
        },
        image: "assets/img/projects/sncf.jpg",
        shortDescription: {
            fr: "Mise en place d'une infrastructure GitLab containerisée pour la gestion de versions et l'intégration continue.",
            en: "Implementation of a containerized GitLab infrastructure for version management and continuous integration."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>In collaboration with another apprentice, I designed and deployed a fully dockerized GitLab instance for SNCF's South-East European Technical Center.</p>
                <p>Key achievements include:</p>
                <ul>
                    <li>Configuration of Docker containers for GitLab, PostgreSQL, Redis and other associated services</li>
                    <li>Implementation of persistent volumes for critical data</li>
                    <li>Configuration of a reverse proxy to secure access</li>
                    <li>Configuration of CI/CD pipelines for automated testing and deployments</li>
                    <li>Implementation of automated data backup</li>
                    <li>Complete documentation of deployment and maintenance processes</li>
                </ul>
                <p>This project significantly improved version management and collaboration within development teams by providing a stable and secure environment for continuous integration.</p>
            `
        },
        tags: ["Docker", "GitLab", "CI/CD"],
        category: "sncf",
        github: ""
    },
    // Ajout du projet Reconstruction Architecture Serveur
    {
        id: "server-architecture",
        title: {
            fr: "Reconstruction Architecture Serveur",
            en: "Server Architecture Reconstruction"
        },
        image: "assets/img/projects/sncf.jpg",
        shortDescription: {
            fr: "Refonte complète de l'architecture serveur selon les normes SNCF avec mise en place d'un reverse proxy.",
            en: "Complete overhaul of server architecture according to SNCF standards with reverse proxy implementation."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>To meet SNCF's security and performance standards, I participated in the complete reconstruction of the server architecture for the South-East European Technical Center's business applications.</p>
                <p>The project included:</p>
                <ul>
                    <li>Analysis of existing architecture and identification of improvement points</li>
                    <li>Design of a new architecture compliant with SNCF standards</li>
                    <li>Implementation of an Nginx reverse proxy for request filtering and redirection</li>
                    <li>Configuration of network security and SSL certificates</li>
                    <li>Performance and scalability optimization</li>
                    <li>Implementation of monitoring and alerts</li>
                </ul>
                <p>This overhaul increased the security, reliability and performance of applications while facilitating their maintenance and scalability.</p>
            `
        },
        tags: ["Docker", "Nginx", "Sécurité"],
        category: "sncf",
        github: ""
    },
    
    // Ajout du projet Application Java pour la DGEFP
    {
        id: "dgefp-website",
        title: {
            fr: "Supervision et structuration d'un site web d'urgence pour la DGEFP",
            en: "Emergency Website Supervision and Structuring for DGEFP"
        },
        image: "assets/img/projects/dgefp.jpg",
        shortDescription: {
            fr: "Management d'équipe et structuration complète d'un site web en urgence pour une démarche administrative critique.",
            en: "Team management and complete structuring of an emergency website for critical administrative procedures."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>As team leader at the General Delegation for Employment and Vocational Training (DGEFP), I supervised a team of developers to create a WordPress-like website skeleton coded in Java for an administrative emergency situation.</p>
                <p>My responsibilities and achievements:</p>
                <ul>
                    <li>Management and coordination of a development team</li>
                    <li>Complete website structuring according to business requirements</li>
                    <li>Implementation of architecture and content organization</li>
                    <li>Agile project management with tight time constraints</li>
                    <li>Interface with stakeholders to define functional needs</li>
                    <li>Supervision of integration and testing before production deployment</li>
                </ul>
                <p>This project required an intensive collaborative approach and rigorous priority management to deliver an operational solution within the given timeframe, effectively meeting the urgent needs of the administration.</p>
            `
        },
        tags: ["Management", "Java", "Gestion de projet", "Administration"],
        category: "dgefp",
        github: ""
    },

    // Formation et automatisation Excel
    {
        id: "dgefp-excel-automation",
        title: {
            fr: "Formation Excel et automatisation par macros pour la DGEFP",
            en: "Excel Training and Macro Automation for DGEFP"
        },
        image: "assets/img/projects/dgefp.jpg",
        shortDescription: {
            fr: "Conception et animation d'une formation Excel avec développement de macros pour automatiser le traitement des données entreprises.",
            en: "Design and delivery of Excel training with macro development to automate business data processing."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>At DGEFP, I designed and delivered comprehensive training on Excel and VBA macros to optimize the team's administrative data processing.</p>
                <p>Context and achievements:</p>
                <ul>
                    <li>Needs analysis: time-consuming manual processing of Excel files received from companies</li>
                    <li>Design of structured Excel templates for data entry by companies</li>
                    <li>Development of VBA macros for data processing automation</li>
                    <li>Training of the team (15 people) in advanced Excel features</li>
                    <li>Implementation of an automation system for information retrieval and consolidation</li>
                    <li>Technical documentation and user guides for maintenance</li>
                </ul>
                <p>This initiative reduced company file processing time by 80%, while significantly decreasing the risk of manual entry errors. The team is now autonomous with these automation tools.</p>
            `
        },
        tags: ["Excel", "VBA", "Formation", "Automatisation", "Administration"],
        category: "dgefp",
        github: ""
    },    
    // Ajout du projet Outil de Facturation
    {
        id: "invoice-tool",
        title: {
            fr: "Outil de Facturation",
            en: "Invoicing Tool"
        },
        image: "assets/img/projects/gesta-partners.jpg",
        shortDescription: {
            fr: "Conception d'un outil de facturation pour le service comptabilité de Gesta Partners avec interface CLI et WinForm.",
            en: "Design of an invoicing tool for Gesta Partners accounting department with CLI and WinForm interface."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>During my internship at Gesta Partners, I developed a comprehensive invoicing tool to optimize the accounting department's processes.</p>
                <p>The project included:</p>
                <ul>
                    <li>Analysis of specific accounting department needs</li>
                    <li>Design of a command-line interface (CLI) for automated operations</li>
                    <li>Development of a WinForm graphical interface for user-friendly operation</li>
                    <li>Implementation of security measures against SQL injection and XSS vulnerabilities</li>
                    <li>Integration with the existing accounting system</li>
                    <li>Complete documentation and user training</li>
                </ul>
                <p>This tool significantly reduced invoice processing time and improved accounting data accuracy while ensuring a high level of security.</p>
            `
        },
        tags: ["C#", "WinForm", "SQL"],
        category: "gesta",
        github: ""
    },
    
    // Ajout du projet Boutique E-commerce
    {
        id: "ecommerce",
        title: {
            fr: "Boutique E-commerce",
            en: "E-commerce Store"
        },
        image: "assets/img/projects/nivo-web.jpg",
        shortDescription: {
            fr: "Mise en place d'une boutique en ligne complète avec WooCommerce pour un client de nivo-web.",
            en: "Implementation of a complete online store with WooCommerce for a nivo-web client."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>During my experience at nivo-web, I participated in the complete creation of an e-commerce store using WordPress and WooCommerce.</p>
                <p>The project included:</p>
                <ul>
                    <li>Configuration and customization of WordPress according to client needs</li>
                    <li>Installation and setup of WooCommerce for product and order management</li>
                    <li>Theme and user interface customization</li>
                    <li>Integration of secure payment gateways</li>
                    <li>Performance and SEO optimization</li>
                    <li>Client training on platform usage</li>
                </ul>
                <p>This online store allowed the client to diversify their sales channels and significantly increase their revenue through a professional and functional online presence.</p>
            `
        },
        tags: ["WordPress", "WooCommerce", "HTML/CSS"],
        category: "nivo",
        github: ""
    },
    
    // Ajout du projet Sécurisation Applications Web
    {
        id: "web-security",
        title: {
            fr: "Sécurisation Applications Web",
            en: "Web Application Security"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Audit et implémentation de mesures de sécurité pour des applications web contre les vulnérabilités OWASP Top 10.",
            en: "Audit and implementation of security measures for web applications against OWASP Top 10 vulnerabilities."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>Personal research project applying web application security best practices, based on OWASP Top 10 recommendations.</p>
                <p>Key aspects include:</p>
                <ul>
                    <li>Audit of common vulnerabilities (XSS, CSRF, SQL injection, etc.)</li>
                    <li>Implementation of protection mechanisms against injection attacks</li>
                    <li>Implementation of secure authentication and session management</li>
                    <li>Configuration of Content Security Policy (CSP) headers</li>
                    <li>User input validation and filtering</li>
                    <li>Development of a reusable secure function library</li>
                </ul>
                <p>This project allowed me to deepen my cybersecurity knowledge and develop a rigorous methodology for web application security, which I now systematically apply in all my development projects.</p>
            `
        },
        tags: ["Cybersécurité", "OWASP", "PHP"],
        category: "security",
        github: ""
    },
    
    // Ajout du projet Portfolio Professionnel
    {
        id: "portfolio",
        title: {
            fr: "Portfolio Professionnel",
            en: "Professional Portfolio"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Conception et développement de ce portfolio personnel avec HTML, CSS et JavaScript en appliquant les meilleures pratiques de développement web.",
            en: "Design and development of this personal portfolio with HTML, CSS and JavaScript applying web development best practices."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>Development of my personal professional portfolio using modern web technologies without depending on external frameworks.</p>
                <p>Technical features:</p>
                <ul>
                    <li>Semantic HTML5 architecture for better accessibility and SEO</li>
                    <li>Advanced use of CSS3 (Flexbox, Grid, CSS variables, animations)</li>
                    <li>Vanilla JavaScript for interactions and animations</li>
                    <li>Responsive design adapting to all device types</li>
                    <li>Dark/light mode with user preference persistence</li>
                    <li>Performance optimization (lazy loading, minification)</li>
                    <li>Implementation of web accessibility best practices</li>
                </ul>
                <p>This project allowed me to put my front-end development skills into practice while creating a professional showcase to present my journey and achievements.</p>
            `
        },
        tags: ["HTML5", "CSS3", "JavaScript"],
        category: "web",
        github: "https://github.com/HugoBiegas/hugobiegas.github.io"
    },
    
    // Autres projets existants
    {
        id: "clients-factures",
        title: {
            fr: "Clients et Factures",
            en: "Clients and Invoices"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Système de gestion de clients et factures développé en Java.",
            en: "Client and invoice management system developed in Java."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>This project implements a basic management system for creating clients, associating invoices with them, and tracking payment status.</p>
                <p>Main features:</p>
                <ul>
                    <li>Creation, modification and deletion of clients</li>
                    <li>Invoice creation with validated amounts</li>
                    <li>Payment status tracking (paid/unpaid)</li>
                    <li>Automatic invoice creation date</li>
                    <li>Ability to duplicate existing invoices</li>
                    <li>Total invoice amount calculation per client</li>
                    <li>Invoice filtering by payment status</li>
                </ul>
                <p>The architecture follows an object-oriented model with bidirectional relationship between clients and invoices for easy navigation.</p>
            `
        },
        tags: ["Java", "OOP", "Gestion"],
        category: "web",
        github: "https://github.com/HugoBiegas/ClientsEtFactures"
    },
    {
        id: "auto-clicker",
        title: {
            fr: "Auto Clicker",
            en: "Auto Clicker"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application Windows qui permet d'automatiser les clics de souris à des positions spécifiques de l'écran.",
            en: "Windows application that automates mouse clicks at specific screen positions."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>Auto Clicker is a Windows application developed in C# that automates mouse click sequences.</p>
                <p>Main features:</p>
                <ul>
                    <li>Real-time cursor position monitoring</li>
                    <li>Adding click positions to a queue</li>
                    <li>Click type configuration (left or right) for each position</li>
                    <li>Wait time adjustment between each click</li>
                    <li>Sequence repetition count configuration</li>
                    <li>Keyboard shortcuts for main functions</li>
                </ul>
                <p>The application uses multi-threading to keep the user interface responsive during click sequence execution.</p>
            `
        },
        tags: ["C#", "Windows Forms", "Automation"],
        category: "web",
        github: "https://github.com/HugoBiegas/AutoClicker"
    },
    {
        id: "laravel-festival",
        title: {
            fr: "Laravel Festival",
            en: "Laravel Festival"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application web Laravel pour la gestion d'un festival et l'hébergement des équipes participantes.",
            en: "Laravel web application for festival management and participant team accommodation."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>Web application developed with Laravel for festival management, including organization of participating teams and their accommodation in different establishments.</p>
                <p>Main features:</p>
                <ul>
                    <li>Participating team management (creation, consultation, modification)</li>
                    <li>Accommodation establishment management</li>
                    <li>Association between teams and establishments</li>
                    <li>Dedicated view for assignment management</li>
                </ul>
                <p>The application follows Laravel's MVC architecture with well-defined relationships between models and uses migrations, factories and seeders for data initialization.</p>
            `
        },
        tags: ["Laravel", "PHP", "MVC", "MySQL"],
        category: "web",
        github: "https://github.com/HugoBiegas/Laravel-Festival"
    },
    {
        id: "application-nfc",
        title: {
            fr: "Application NFC",
            en: "NFC Application"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application Android pour la validation d'identité via NFC et code de sécurité.",
            en: "Android application for identity validation via NFC and security code."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>This Android project is designed to work with a web application. Its purpose is to verify a person's identity by validating a code generated by the web application, then scanning an NFC tag.</p>
                <p>Main features:</p>
                <ul>
                    <li>Code validation generated by web application via API</li>
                    <li>NFC data reading after code validation</li>
                    <li>Identity verification with NFC tag confirmation</li>
                    <li>Popup display indicating if NFC scan is accepted or rejected</li>
                    <li>Secure API communication with token validation</li>
                </ul>
                <p>The application uses Android's NFC API and a modern authentication system to ensure the security of the validation process.</p>
            `
        },
        tags: ["Android", "NFC", "Java", "API"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/nfc-mobile-code-hackaton"
    },
    {
        id: "secu-scan-pro",
        title: {
            fr: "SecuScanPro",
            en: "SecuScanPro"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Analyseur de sécurité web avancé développé en Go pour identifier les vulnérabilités.",
            en: "Advanced web security analyzer developed in Go to identify vulnerabilities."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>SecuScanPro is an advanced web security analysis tool developed in Go, designed to automatically identify vulnerabilities in web applications.</p>
                <p>Main features:</p>
                <ul>
                    <li>Automatic analysis of web structures and detection of sensitive entry points</li>
                    <li>SQL injection testing for MySQL, PostgreSQL, MSSQL and Oracle</li>
                    <li>Automatic verification of CSRF protections in forms</li>
                    <li>Modern graphical interface developed with Fyne</li>
                    <li>Detailed reporting system with persistent storage</li>
                    <li>Real-time analysis progress tracking</li>
                </ul>
                <p>This tool focuses on SQL injection detection and CSRF protection verification, while offering an intuitive interface.</p>
            `
        },
        tags: ["Go", "Sécurité", "SQL Injection", "CSRF"],
        category: "security",
        github: "https://github.com/HugoBiegas/SecuScanPro"
    },
    {
        id: "quizz-app",
        title: {
            fr: "Application de Quiz",
            en: "Quiz Application"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application complète de quiz avec frontend Android et backend Spring Boot.",
            en: "Complete quiz application with Android frontend and Spring Boot backend."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>This quiz application consists of two complementary parts:</p>
                <ul>
                    <li>An Android application (frontend) for the user interface</li>
                    <li>A REST API (backend) developed with Spring Boot</li>
                </ul>
                <p>Main features:</p>
                <ul>
                    <li>Secure authentication with role management (administrator/teacher, student)</li>
                    <li>Creation and management of multiple-choice questionnaires</li>
                    <li>Quiz taking with answer validation</li>
                    <li>Results history and statistics</li>
                    <li>Administrator interface to manage users and content</li>
                </ul>
                <p>The project uses a modern architecture with a Java Spring Boot backend and a native Android application for the frontend.</p>
            `
        },
        tags: ["Android", "Spring Boot", "Java", "MySQL"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/QuizzFront"
    },
    {
        id: "cobol-base",
        title: {
            fr: "Environnement COBOL",
            en: "COBOL Environment"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Environnement de développement COBOL avec Docker pour Windows.",
            en: "COBOL development environment with Docker for Windows."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>This project provides a set of batch scripts to facilitate COBOL development on Windows using Docker, without needing to install a COBOL compiler directly on your system.</p>
                <p>Available scripts:</p>
                <ul>
                    <li><strong>cobol-verify-env.bat</strong>: Verifies Docker environment for COBOL</li>
                    <li><strong>cobol-compile.bat</strong>: Compiles a COBOL program</li>
                    <li><strong>cobol-execute.bat</strong>: Executes an already compiled COBOL program</li>
                    <li><strong>cobol-run.bat</strong>: Combines compilation and execution</li>
                    <li><strong>cobol-shell.bat</strong>: Launches an interactive shell in the Docker container</li>
                </ul>
                <p>This environment allows easy COBOL development without complex installation, using Docker as an abstraction layer.</p>
            `
        },
        tags: ["COBOL", "Docker", "Batch", "Legacy"],
        category: "web",
        github: "https://github.com/HugoBiegas/Cobol_Base"
    },
    {
        id: "gestion-bourse",
        title: {
            fr: "Gestion Bourse",
            en: "Stock Portfolio Management"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application multi-plateforme de gestion de portefeuille boursier avec .NET MAUI.",
            en: "Cross-platform stock portfolio management application with .NET MAUI."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>GestionBourse is an application that allows users to manage stock portfolios for different traders, developed with .NET MAUI for cross-platform compatibility.</p>
                <p>Main features:</p>
                <ul>
                    <li>Trader management and portfolio visualization</li>
                    <li>Tracking of available stocks on the market</li>
                    <li>Purchase of new stocks for a trader</li>
                    <li>Sale of stocks held by a trader</li>
                    <li>Detailed transaction visualization</li>
                </ul>
                <p>The application uses SQLite as a local database with the Repository pattern for data management, and runs on Android, iOS, macOS and Windows.</p>
            `
        },
        tags: [".NET MAUI", "C#", "SQLite", "Cross-platform"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/GestionBourse"
    },
    {
        id: "gestion-supermarche",
        title: {
            fr: "Gestion Supermarché",
            en: "Supermarket Management"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application .NET MAUI pour gérer les heures travaillées des employés dans un supermarché.",
            en: ".NET MAUI application to manage employee working hours in a supermarket."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>Mobile and desktop application developed with .NET MAUI to manage employee working hours in different departments of a supermarket.</p>
                <p>Main features:</p>
                <ul>
                    <li>Management of employees, departments and sectors</li>
                    <li>Entry of hours worked by employee and department</li>
                    <li>Data validation (no double employment)</li>
                    <li>Visualization of working time by employee</li>
                    <li>Advanced statistics and graphical visualizations</li>
                    <li>Custom converters for user interface</li>
                    <li>Background music integration on all pages</li>
                </ul>
                <p>The project uses NuGet packages like OxyPlot for charts and Plugin.Maui.Audio for cross-platform audio playback.</p>
            `
        },
        tags: [".NET MAUI", "C#", "SQLite", "OxyPlot"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/GestionSupermarche"
    },
    {
        id: "instant-like",
        title: {
            fr: "InstantLike",
            en: "InstantLike"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application Android de partage de photos inspirée des réseaux sociaux modernes.",
            en: "Android photo sharing application inspired by modern social networks."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>InstantLike is an Android photo sharing application allowing users to create a profile, publish photos, interact with posts and communicate via private messages.</p>
                <p>Main features:</p>
                <ul>
                    <li>Secure authentication with Firebase</li>
                    <li>Photo capture and sharing with title and description</li>
                    <li>Social interactions: likes, comments, sharing</li>
                    <li>Real-time private messaging between users</li>
                    <li>User profile with statistics and gallery</li>
                </ul>
                <p>The application uses Firebase for authentication, image storage and real-time messaging, as well as Firestore for structured data.</p>
            `
        },
        tags: ["Android", "Firebase", "Java", "Social Media"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/instanLinkeV.2"
    },
    {
        id: "projet-capchat",
        title: {
            fr: "Projet CapChat",
            en: "CapChat Project"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Plateforme innovante de CAPTCHA visuel basée sur la reconnaissance d'images singulières.",
            en: "Innovative visual CAPTCHA platform based on singular image recognition."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>CapChat is a human verification solution (CAPTCHA) that uses artistic images rather than distorted text. The user must identify a "singular" image among a set of "neutral" images based on a textual clue.</p>
                <p>Main features:</p>
                <ul>
                    <li>Visual and intuitive CAPTCHA interface</li>
                    <li>Dynamic time thermometer with reduction on failure</li>
                    <li>Registration and login system for artists</li>
                    <li>Creation and management of custom CapChats</li>
                    <li>Image upload via ZIP archives</li>
                    <li>Usage statistics for CapChats</li>
                    <li>Platform administration and moderation</li>
                </ul>
                <p>The project includes a complete REST API and user interface for artists and administrators.</p>
            `
        },
        tags: ["Node.js", "Express", "MySQL", "JWT", "EJS"],
        category: "web",
        github: "https://github.com/HugoBiegas/Projet_CapChat"
    },
    {
        id: "communes-france-api",
        title: {
            fr: "API Communes de France",
            en: "French Municipalities API"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "API pour les informations sur les communes de France et services associés.",
            en: "API for French municipalities information and associated services."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>This API, developed for the Ministry of Interior, provides information about French municipalities and delivers additional tools for individuals or businesses.</p>
                <p>Main features:</p>
                <ul>
                    <li>Filterable and sortable list of French municipalities with geolocation</li>
                    <li>Detailed information about municipalities</li>
                    <li>Filterable and sortable list of departments</li>
                    <li>CRUD management of municipalities</li>
                    <li>Property tax estimation service</li>
                    <li>Household waste collection tax estimation service</li>
                    <li>User authentication with rights management</li>
                </ul>
                <p>The project uses Symfony and API Platform for efficient and secure implementation.</p>
            `
        },
        tags: ["Symfony", "API Platform", "PHP", "Docker"],
        category: "api",
        github: "https://github.com/HugoBiegas/Biegas_Hugo_exam_api"
    },
    {
        id: "echecs-multi-app",
        title: {
            fr: "Échecs Multijoueur",
            en: "Multiplayer Chess"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application mobile Android d'échecs multijoueur en ligne avec Firebase.",
            en: "Android mobile application for online multiplayer chess with Firebase."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>EchecMultiApp is an Android mobile application hosting an online multiplayer chess game. Developed in Java, the application uses Firebase to manage user accounts, game rooms and ongoing matches.</p>
                <p>Main features:</p>
                <ul>
                    <li>Secure authentication with Firebase</li>
                    <li>Creation and management of private game rooms</li>
                    <li>Intuitive game interface with colorful board and pieces</li>
                    <li>Complete implementation of chess rules</li>
                    <li>Management of special situations (check, mate, promotion, castling)</li>
                    <li>User profile with statistics</li>
                </ul>
                <p>The application uses Firebase Realtime Database for online turn-by-turn gameplay, and Firestore for structured user data.</p>
            `
        },
        tags: ["Android", "Firebase", "Java", "Jeu"],
        category: "mobile",
        github: "https://github.com/HugoBiegas/EchecMultiApp"
    },
    {
        id: "bookstore-ecommerce",
        title: {
            fr: "BookStore E-Commerce",
            en: "BookStore E-Commerce"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application e-commerce sophistiquée de librairie en ligne développée avec ASP.NET Core MVC 8.0 en équipe à l'ESTIAM.",
            en: "Sophisticated online bookstore e-commerce application developed with ASP.NET Core MVC 8.0 as team project at ESTIAM."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>BookStore is a complete e-commerce web application developed as a team project for the "Retail (e-commerce)" course at ESTIAM under the supervision of Prof. Marcel Stefan Wagner, PhD.</p>
                <p>As a Full-Stack developer within a 3-person team, I contributed to the design and development of a modern platform rigorously following SOLID principles.</p>
                <p>Main features developed:</p>
                <ul>
                    <li>ASP.NET Core MVC 8.0 architecture with strict adherence to SOLID principles</li>
                    <li>Multi-level authentication system (User → Librarian → Admin)</li>
                    <li>Development of 7 custom Tag Helpers for user interface</li>
                    <li>Virtual credit system with secure transactions and automatic rollback</li>
                    <li>Complete CRUD for books, authors and users management</li>
                    <li>Real-time analytics dashboard with KPI metrics</li>
                    <li>Complete e-commerce workflow from catalog to checkout</li>
                    <li>Responsive interface with Bootstrap 5 and JavaScript ES6+</li>
                    <li>Advanced security: password hashing, CSRF protection, multi-level validation</li>
                </ul>
                <p>This large-scale academic project allowed me to put into practice my skills in modern web development, software architecture and teamwork, while delivering a functional and secure e-commerce application.</p>
            `
        },
        tags: ["ASP.NET Core", "C#", "MVC", "Bootstrap", "JavaScript", "E-commerce"],
        category: "web",
        github: "https://github.com/HugoBiegas/ECommerceApp"
    },
    {
        id: "quantum-mastermind",
        title: {
            fr: "Quantum Mastermind",
            en: "Quantum Mastermind"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Implémentation innovante du jeu Mastermind intégrant des algorithmes quantiques avec Qiskit pour la génération de solutions et l'analyse probabiliste.",
            en: "Innovative Mastermind game implementation integrating quantum algorithms with Qiskit for solution generation and probabilistic analysis."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>Quantum Mastermind is a revolutionary implementation of the classic Mastermind game that uses quantum computing to enhance traditional gameplay with advanced algorithms.</p>
                <p>Complete technical architecture:</p>
                <ul>
                    <li><strong>Quantum backend:</strong> FastAPI with Qiskit integration and IBM's AerSimulator</li>
                    <li><strong>Modern frontend:</strong> Responsive user interface with real-time visualization</li>
                    <li><strong>Quantum algorithms:</strong> Solution generation via superposition and quantum entanglement</li>
                    <li><strong>Probabilistic analysis:</strong> Position hint calculation with quantum probabilities</li>
                    <li><strong>Advanced caching system:</strong> Quantum circuit optimization (340% performance improvement)</li>
                    <li><strong>Robust architecture:</strong> SQLAlchemy 2.0 async, PostgreSQL, Redis for caching</li>
                    <li><strong>Modern deployment:</strong> Docker containerization with high availability (99.96%)</li>
                </ul>
                <p>Major technical innovations:</p>
                <ul>
                    <li>Use of quantum circuits to generate combinations via superposition</li>
                    <li>Entanglement algorithm between adjacent qubits for attempt analysis</li>
                    <li>Intelligent fallback system simulating quantum behavior</li>
                    <li>Two-level cache (base and transpiled circuits) for optimization</li>
                    <li>Automatic adaptation of measurement count based on complexity</li>
                </ul>
                <p>This project demonstrates advanced expertise in applied quantum computing, modern API development, and complex software architecture, with optimized performance (average execution time of 47ms).</p>
            `
        },
        tags: ["Qiskit", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "Docker", "Informatique Quantique"],
        category: "api",
        github: "https://github.com/HugoBiegas/Mastermind_backend"
    },
    {
        id: "mosaique-capital",
        title: {
            fr: "Mosaïque Capital",
            en: "Mosaïque Capital"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Plateforme complète de gestion patrimoniale moderne avec intégration bancaire multi-providers et authentification MFA avancée.",
            en: "Complete modern wealth management platform with multi-provider banking integration and advanced MFA authentication."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>Mosaïque Capital is a sophisticated wealth management platform developed with Spring Boot 3.4.5, allowing users to centralize, track and optimize their entire financial portfolio.</p>
                <p>Advanced technical architecture:</p>
                <ul>
                    <li><strong>Enhanced security:</strong> JWT authentication with MFA TOTP (Google Authenticator compatible), rotating tokens and Redis blacklist</li>
                    <li><strong>Multi-provider banking integration:</strong> Budget Insight (Powens), Bridge API, Linxo Connect, and Tink (free - 100 connections/month)</li>
                    <li><strong>Advanced resilience:</strong> Circuit Breaker, Retry with exponential backoff, Rate Limiting via Resilience4j</li>
                    <li><strong>Automatic synchronization:</strong> Banking sync every 6h with secure webhook management</li>
                    <li><strong>Modern architecture:</strong> Spring Boot 3.4.5, MySQL 8.0, Redis 7.2, Docker Compose</li>
                </ul>
                <p>Complete wealth management features:</p>
                <ul>
                    <li>Multi-type asset management: real estate, financial investments, cryptocurrencies, cash</li>
                    <li>Historical valuations with automatic capital gains calculation</li>
                    <li>Secure selling system preventing accidental asset deletion</li>
                    <li>Automatic transaction categorization with machine learning</li>
                    <li>Analytics dashboard with real-time wealth metrics</li>
                    <li>REST API documented with Swagger/OpenAPI for third-party integrations</li>
                </ul>
                <p>Implemented patterns and principles:</p>
                <ul>
                    <li>Rigorous adherence to SOLID principles with layered architecture</li>
                    <li>Repository Pattern, Service Layer, DTO Pattern with MapStruct</li>
                    <li>Strategy Pattern for multi-provider banking management</li>
                    <li>Observer Pattern for notifications and events</li>
                </ul>
                <p>This project demonstrates advanced expertise in financial architecture, complex banking API integration (PSD2 compliance), and secure development with rigorous industrial standards.</p>
            `
        },
        tags: ["Spring Boot", "Spring Security", "JWT", "MFA", "MySQL", "Redis", "APIs Bancaires", "Docker"],
        category: "api",
        github: "https://github.com/HugoBiegas/mosaique_capital_spring_boot"
    },
    {
        id: "piscines-paris-tracker",
        title: {
            fr: "Piscines Paris Tracker",
            en: "Paris Pools Tracker"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "Application web interactive pour localiser instantanément les piscines municipales les plus proches à Paris avec géolocalisation temps réel.",
            en: "Interactive web application to instantly locate the nearest municipal pools in Paris with real-time geolocation."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>Paris Pools Tracker is a modern web application developed in vanilla JavaScript that allows Parisians to quickly find the nearest municipal pool to their location.</p>
                <p>Advanced mapping features:</p>
                <ul>
                    <li><strong>Dynamic interactive map:</strong> Leaflet.js integration with OpenStreetMap tiles for smooth navigation</li>
                    <li><strong>Real-time geolocation:</strong> HTML5 Geolocation API for automatic user location</li>
                    <li><strong>Intelligent distance calculation:</strong> Proximity calculation algorithm with walking and cycling time estimates</li>
                    <li><strong>Geocoded search:</strong> Nominatim API (OpenStreetMap) integration with address autocompletion</li>
                    <li><strong>Proximity filtering:</strong> Configurable search options (< 1km, 2km, 5km)</li>
                    <li><strong>Integrated routes:</strong> Google Maps redirection for GPS navigation</li>
                </ul>
                <p>Modern technical architecture:</p>
                <ul>
                    <li>Vanilla JavaScript ES6+ for optimal performance without framework</li>
                    <li>Responsive design with Tailwind CSS and custom CSS animations</li>
                    <li>Local database of 43 municipal pools with verified GPS coordinates</li>
                    <li>Accessible interface with keyboard navigation support</li>
                    <li>Dynamic markers with visual proximity indicators</li>
                    <li>Real-time notifications for immediate user feedback</li>
                </ul>
                <p>Practical and civic aspects:</p>
                <ul>
                    <li>Official data synchronized from paris.fr (schedules, prices, equipment)</li>
                    <li>Free and open source application for the Parisian community</li>
                    <li>GitHub Pages deployment for maximum accessibility</li>
                    <li>Mobile-optimized interface for nomadic use</li>
                </ul>
                <p>This project demonstrates mastery of geographical APIs, modern frontend development and user experience, while providing real practical value to Parisian citizens.</p>
            `
        },
        tags: ["JavaScript", "Leaflet.js", "Tailwind CSS", "Géolocalisation", "APIs", "OpenStreetMap"],
        category: "web",
        github: "https://github.com/HugoBiegas/PiscinesParisTracker"
    },
    {
        id: "teams-dev-vote",
        title: {
            fr: "VoteChain - TeamsDevVote",
            en: "VoteChain - TeamsDevVote"
        },
        image: "assets/img/projects/default.jpg",
        shortDescription: {
            fr: "App de vote blockchain sécurisée développée en équipe avec Solidity et Hardhat, architecture Docker multi-stage et protection anti-fraude.",
            en: "Secure blockchain voting App developed in team with Solidity and Hardhat, multi-stage Docker architecture and anti-fraud protection."
        },
        detailedDescription: {
            fr: `
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
            en: `
                <p>VoteChain is a decentralized voting application (DApp) developed by a team of 7 specialized developers, combining blockchain security with modern DevOps architecture.</p>
                <p>DevOps Lead Role - Technical Contributions:</p>
                <ul>
                    <li><strong>Multi-stage Docker architecture:</strong> Orchestration of 5 containerized services with docker-compose</li>
                    <li><strong>Blockchain infrastructure:</strong> Local EVM network configuration with inter-container isolation</li>
                    <li><strong>Development pipeline:</strong> Reproducible environment with 20 pre-configured accounts (10,000 ETH each)</li>
                    <li><strong>Monitoring and diagnostics:</strong> Real-time verification tools and detailed logs</li>
                    <li><strong>Automated deployment:</strong> Deployment scripts and private network configuration</li>
                </ul>
                <p>Blockchain technical architecture:</p>
                <ul>
                    <li><strong>Solidity 0.8.19 Smart Contract:</strong> Anti-double vote protection with security modifiers</li>
                    <li><strong>Hardhat Framework:</strong> 9 custom tasks for deployment, voting and simulation</li>
                    <li><strong>Complete testing:</strong> Mocha + Chai suite with integrated code coverage</li>
                    <li><strong>Enhanced security:</strong> hasVoted mapping, index validation, audit events</li>
                    <li><strong>Advanced CLI interface:</strong> Interactive commands with styled display and real-time statistics</li>
                </ul>
                <p>Advanced democratic features:</p>
                <ul>
                    <li>Blockchain protection ensuring "one voter = one vote"</li>
                    <li>Automatic simulation system up to 50 votes with customizable candidates</li>
                    <li>Real-time results with ASCII graphics and detailed percentages</li>
                    <li>Diagnostic interface for voter status verification</li>
                    <li>Complete audit trail with traceable blockchain events</li>
                </ul>
                <p>Collaborative work with 7 specialists: Lead Smart Contract (Naier), Hardhat Architect (Yanis), QA Lead (Yann), Documentation (Frank & Alexandre), Console UX (Antoine).</p>
                <p>This project demonstrates deep mastery of blockchain, modern DevOps and team collaboration on emerging technologies with critical security issues.</p>
            `
        },
        tags: ["Solidity", "Hardhat", "Docker", "Blockchain", "DApp", "DevOps", "Smart Contracts"],
        category: "web",
        github: "https://github.com/HugoBiegas/TeamsDevVote"
    }
];