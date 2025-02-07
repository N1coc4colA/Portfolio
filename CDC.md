# Cahier Des Charges

## **1. Contexte et Objectifs**

### **1.1 Contexte**

Ce projet consiste à créer un site web personnel servant de portfolio. Il présentera les compétences, les projets, et les réalisations, afin de toucher un public composé de essentiellement des recruteurs et professionnels du domaine informatique.

### **1.2 Objectifs**

- **Démontrer vos compétences** : Mettre en avant les connaissances en C++, C, JavaScript, HTML, et CSS.
- **Attirer des opportunités professionnelles** : Montrer les réalisations pour convaincre des recruteurs ou clients potentiels.
- **Promouvoir votre passion pour les langages de programmation** : Montrer son intérêt et son expertise technique.

## **2. Public Cible**

- **Recruteurs** cherchant des candidats compétents en programmation et développement web.
- **Professionnels** du secteur technologique pour des collaborations ou des échanges.

## **3. Fonctionnalités**

### **3.1 Design Responsive**

- Le site doit être entièrement adapté à tous les appareils (mobile, tablette, bureau).

### **3.2 Full Static**

- Le site sera entièrement statique pour garantir des performances optimales, et combler le manque de compétences.

### **3.3 Pages et Contenus**

- **Accueil** : Une présentation succincte avec une photo professionnelle et une phrase d’accroche.
- **Compétences** : Une section détaillant vos langages et technologies maîtrisés (C++, C, JavaScript, HTML, CSS).
- **Projets** : Une galerie ou liste de projets avec des descriptions et des liens vers le code source (ex. GitHub).
- **Contact** : Un formulaire de contact simple pour que les utilisateurs puissent vous envoyer un message.

### **3.4 Interactivité**

- Hover effects sur les boutons & cartes de projets.
- Animation légère pour les transitions entre pages.

### **3.5 RGPD et Mentions Légales**
- Formulaire de contact avec une case à cocher pour le consentement à la collecte des données.
- Une page contenant les mentions légales et la politique de confidentialité.

### **3.6 SEO (Optimisation pour les moteurs de recherche)**

- Utilisation des balises meta pour améliorer le référencement.
- Performance technique pour un chargement rapide.
- Titres et descriptions optimisés pour chaque page.

## **4. Exigences Techniques**

### **4.1 Technologie Frontend**

- Uniquement HTML5+, CSS3, et JavaScript.

### **4.2 Performances**

- Temps de chargement des pages inférieur à 3 secondes.
- Compatible avec les navigateurs modernes (Chrome, Firefox, Safari, Edge).

### **4.3 Accessibilité**

- **Contraste des couleurs** : S’assurer que le texte est lisible sur le fond, notamment pour les utilisateurs malvoyants.
- **Balises Alt pour les images** : Utilisation de balises `alt` pour toutes les images afin de les rendre accessibles et améliorer le SEO.

### **4.4 Sécurité**

- **HTTPS** : Le site doit être accessible via HTTPS pour garantir la sécurité des données échangées.
-
#### **4.5 Versionnement**

- Utilisation d’un système de contrôle de version (Git).
- Dépôt privé ou public sur une plateforme comme GitHub ou GitLab.

### **4.6 Hébergement**

- Service d’hébergement statique (ex. GitHub Pages, Amen).

## **5. Charte Graphique**

### **5.1 Couleurs**

#### **Général**

 
| Nom | Couleur |
|--|--|
| Clay Yellow | FFE797 |
| Clay Cyan | B4F3E7 |
| Clay Pink | F3A1DB |
| Clay Sky | ADE0FF |

#### **Clair**

| Nom | Couleur |
|--|--|
| Background | #FFFFFF |
| Foreground | #FDFDFD |
| Text | #262626 |
| Border | #D9D9D9 |

#### **Sombre**

| Nom | Couleur |
|--|--|
| Background | #383835 |
| Foreground | #454545 |
| Text | #F6F6F6 |
| Border | #5E5E5E |

### **5.2 Typographie**

| Police | Désignation | Usage |
|--|--|--|
| Roboto | General | Police à usage général. Par exemple mentions légales. |
| Fira Code, Regular | Enum Entry | Police pour les énumérations. |
| Source Code Pro, Bold | Enum Title | Police pour les titres des zones d'énumération. |
| Source Code Pro | Atypique | Pour avoir un effet "atypique", surprennant sur certaines pages. Surtout pour des titres. |
| Fira Sans | Project Title | Police à utiliser pour le nom des projets. |
| Instrument Sans | Text Lines | Pour faire des lignes de texte en fond. |


### **5.3 Style Visuel**

- Utilisation d’éléments plats (flat design).
- Légères ombres et coins arrondis pour les cartes & boutons.

## **6. Régulations et Conformité**

- **RGPD** :
-- Consentement clair avant la collecte de données, s'il y a lieu.
-- Option de suppression des données pour l’utilisateur, s'il y a lieu.
- **Mentions légales** : Fournir une page dédiée avec les informations légales nécessaires.

### **7. Livrables**

1. Code source du site web (fichiers HTML, CSS, JS).
2. Documentation technique pour déployer et maintenir le site.
3. Assets graphiques (icônes, polices, images).

### **8. Délais**

- Durée estimée de réalisation : 1 semaine.

### **10. User Stories**

Les **user stories** permettront de mieux cerner les attentes des utilisateurs finaux et de s'assurer que le site répond aux besoins identifiés. Voici quelques user stories basées sur les objectifs du site :

#### **10.1 En tant qu'utilisateur, je veux...**

- **Voir des réalisations** afin de pouvoir évaluer les compétences et savoir si elles correspondent à mes besoins.
- *Critères d'acceptation* : L'utilisateur peut consulter la section "Projets", avec des descriptions détaillées et des liens vers les codes sources.
- **En savoir plus sur les compétences** afin de comprendre quelles technologies sont maîtrisées et comment elles peuvent répondre à aux besoins.
- *Critères d'acceptation* : L'utilisateur peut accéder à une page listant les compétences techniques (C++, JavaScript, etc.), accompagnées de descriptions et exemples.
- **Me contacter facilement** afin de poser des questions ou de demander une collaboration professionnelle.
- *Critères d'acceptation* : Le site doit inclure un formulaire de contact avec des champs pour le nom, l'adresse e-mail, et un message, ainsi qu'une case à cocher pour accepter la politique de confidentialité. Des liens vers mes réseaux (LinkedIn, Github, X, Instagram, Mail...) sont disponibles en bas des pages.
- **Naviguer sur le site sur mon téléphone, tablette, ordinateur** afin de consulter les informations à tout moment et depuis n'importe quel appareil.
- *Critères d'acceptation* : Le site doit être entièrement responsive et offrir une expérience utilisateur optimale sur tous les appareils.
- **Éviter que mes données soient collectées sans mon consentement**.
- *Critères d'acceptation* : Avant d'envoyer un message via le formulaire de contact, l'utilisateur doit être informé de la collecte de ses données personnelles et avoir la possibilité de donner son consentement (quitte à ce que le refus engendre une impossibilité d'envoi du dit formulaire).
