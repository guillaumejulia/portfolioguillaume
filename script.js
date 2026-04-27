/* =========================================
   1. TRANSLATION DATA
   ========================================= */
const translations = {
    en: {
        "nav-home": "Home", "nav-about": "Profile", "nav-work": "Work", "nav-skills": "Skills", "nav-contact": "Contact",
        "hero-title": "CRAFTING<br>IMMERSION", "hero-subtitle": "I build", "hero-btn": "View My Work",
        "about-title": "HELLO WORLD.",
        "about-text": "Welcome to my portfolio! I am <span class='highlight'>Guillaume Julia</span>, a student at <strong>ISART Digital School</strong>. I created this space to showcase my journey as a <strong>Game Programmer & Designer</strong>.<br><br>Beyond gaming, I leverage my coding skills to build <strong>Custom Automation Scripts</strong> and software solutions that solve real-world problems.",
        "section-projects": "Featured Case Studies", "btn-case": "View Case Study",
        "section-skills": "Technical Expertise",
        "skill-game-title": "Game Engine Architecture", "skill-game-desc": "Unity (C#), Godot (GDScript). Expertise in custom physics, gameplay programming, and HLSL Shaders.",
        "skill-auto-title": "Python Automation", "skill-auto-desc": "Advanced Scripting, Web Scraping (Selenium, BS4), Discord/Slack Bots, Data Processing pipelines.",
        "skill-data-title": "Data & Backend", "skill-data-desc": "SQL Databases, JSON/XML Parsing, API Integration, Save Systems and Cloud Data sync.",
        "skill-ux-title": "UX & Interactive Design", "skill-ux-desc": "Reactive UI Systems, Accessibility-first design (Serious Games), Process Gamification.",
        "contact-title": "Ready to Collaborate?", "contact-desc": "Let's build something amazing together. Reach out via your preferred channel.",
        "typing": ['PHYSICS ENGINES.', 'PYTHON AUTOMATION.', 'SERIOUS GAMES.', 'DATA SOLUTIONS.']
    },
    fr: {
        "nav-home": "Accueil", "nav-about": "Profil", "nav-work": "Projets", "nav-skills": "Compétences", "nav-contact": "Contact",
        "hero-title": "CONCEVOIR<br>L'IMMERSION", "hero-subtitle": "Je développe", "hero-btn": "Voir mes projets",
        "about-title": "BIENVENUE.",
        "about-text": "Bienvenue sur mon portfolio ! Je suis <span class='highlight'>Guillaume Julia</span>, étudiant à <strong>ISART Digital</strong>. J'ai créé cet espace pour partager mon parcours de <strong>Game Programmer & Designer</strong>.<br><br>Au-delà du jeu vidéo, j'utilise mes compétences pour créer des <strong>Scripts d'Automatisation</strong> et des solutions logicielles qui résolvent des problèmes concrets.",
        "section-projects": "Études de Cas", "btn-case": "Voir le dossier",
        "section-skills": "Expertise Technique",
        "skill-game-title": "Moteurs de Jeu & Archi", "skill-game-desc": "Unity (C#), Godot (GDScript). Expertise en physique custom, programmation gameplay et Shaders HLSL.",
        "skill-auto-title": "Automatisation Python", "skill-auto-desc": "Scripting avancé, Web Scraping (Selenium, BS4), Bots Discord/Slack, Traitement de données.",
        "skill-data-title": "Data & Backend", "skill-data-desc": "Bases SQL, Parsing JSON/XML, Intégration d'API, Systèmes de sauvegarde et synchro Cloud.",
        "skill-ux-title": "UX & Design Interactif", "skill-ux-desc": "Systèmes d'UI réactifs, Accessibilité (Serious Games), Gamification de processus.",
        "contact-title": "Prêt à collaborer ?", "contact-desc": "Créons quelque chose d'exceptionnel. Contactez-moi via votre canal préféré.",
        "typing": ['MOTEURS PHYSIQUES.', 'AUTOMATISATION PYTHON.', 'SERIOUS GAMES.', 'SOLUTIONS DATA.']
    }
};

const projectsDetails = {
    "1": {
        en: {
            title: "THE RUSH: PHYSICS SANDBOX",
            date: "Nov - Dec 2025",
            features: [
                { title: "CUSTOM PHYSICS ENGINE", desc: "Instead of relying on Unity's built-in physics, I manually coded the entire collision and movement logic. By calculating vectors from scratch, I achieved deterministic precision and snappy responsiveness that standard engines couldn't offer." },
                { title: "MODULAR ARCHITECTURE", desc: "I engineered a robust Object-Oriented system. Using inheritance for core brick properties and composition for unique behaviors allows for infinite scalability." },
                { title: "ADVANCED LOGIC BLOCKS", desc: "Implemented complex logic gates within gameplay elements: cyclical direction changers, instant teleportation portals, and kinetic stop zones." },
                { title: "TECHNICAL ART & SHADERS", desc: "Developed custom HLSL shaders to achieve the 'Cyber-Neon' aesthetic. The shaders handle dynamic edge glowing and collision reactivity efficiently." },
                { title: "LEVEL DESIGN AS TESTING", desc: "Designed comprehensive demonstration levels that act as visual unit tests. Each room validates a specific physics mechanic, ensuring the custom engine is bug-free." }
            ]
        },
        fr: {
            title: "THE RUSH: PHYSICS SANDBOX",
            date: "Nov - Déc 2025",
            features: [
                { title: "MOTEUR PHYSIQUE CUSTOM", desc: "Au lieu d'utiliser la physique native d'Unity, j'ai codé manuellement toute la logique de collision et de mouvement. En calculant les vecteurs à la main, j'ai obtenu une précision déterministe impossible avec les outils standards." },
                { title: "ARCHITECTURE MODULAIRE", desc: "Conception d'un système robuste orienté objet. J'utilise l'héritage pour les propriétés de base et la composition pour les comportements uniques, permettant une évolutivité infinie." },
                { title: "BRIQUES LOGIQUES AVANCÉES", desc: "Implémentation de portes logiques dans le gameplay : inverseurs de direction cycliques, portails de téléportation instantanée et zones d'arrêt cinétique." },
                { title: "TECHNICAL ART & SHADERS", desc: "Développement de shaders HLSL personnalisés pour l'esthétique 'Cyber-Neon'. Les shaders gèrent la lueur dynamique et la réactivité aux collisions." },
                { title: "LEVEL DESIGN DE VALIDATION", desc: "Conception de niveaux qui servent de tests unitaires visuels. Chaque salle valide une mécanique physique spécifique, assurant la stabilité du moteur." }
            ]
        }
    },
    "2": {
        en: {
            title: "WORDS SUPPORT: SERIOUS GAME",
            date: "Apr - May 2025",
            features: [
                { title: "MOBILE-FIRST ACCESSIBILITY", desc: "Designed specifically for touchscreens with a 'One-Button' philosophy. The challenge was to create a deep educational experience that remains accessible to children with motor or cognitive difficulties." },
                { title: "PROGRESSIVE VISUAL CUES", desc: "Implemented a dynamic feedback system where the target image grows progressively. This non-verbal cue acts as a cognitive anchor, helping users identify the word before spelling it." },
                { title: "JSON DATA PIPELINE", desc: "The entire game content is automated via external JSON files. My script parses the database, shuffles letters using custom algorithms, and instantiates level assets at runtime." },
                { title: "GAMIFIED LEARNING LOGIC", desc: "Adapted pedagogical concepts into game mechanics. I translated 'Errorless Learning' principles into code to create a rewarding loop where failure is minimized." }
            ]
        },
        fr: {
            title: "WORDS SUPPORT: SERIOUS GAME",
            date: "Avr - Mai 2025",
            features: [
                { title: "ACCESSIBILITÉ MOBILE-FIRST", desc: "Conçu spécifiquement pour le tactile avec une philosophie 'One-Button'. Le défi était de créer une expérience éducative profonde mais accessible aux enfants ayant des troubles moteurs ou cognitifs." },
                { title: "INDICES VISUELS PROGRESSIFS", desc: "Implémentation d'un feedback dynamique où l'image cible grandit progressivement. Cet indice non-verbal sert d'ancrage cognitif pour aider à identifier le mot." },
                { title: "PIPELINE DE DONNÉES JSON", desc: "Tout le contenu est automatisé via des fichiers JSON externes. Mon script parse la base de données, mélange les lettres via des algorithmes custom et génère les niveaux à la volée." },
                { title: "LOGIQUE D'APPRENTISSAGE", desc: "Adaptation de concepts pédagogiques en mécaniques de jeu. J'ai traduit les principes d'apprentissage sans erreur en code pour créer une boucle gratifiante." }
            ]
        }
    },
    "3": {
        en: {
            title: "SOKOBAN SOCIAL PUZZLE",
            date: "Feb - Apr 2025",
            features: [
                { title: "BACKEND & DATA PERSISTENCE", desc: "I was in charge of the entire data layer: User Account creation, Progress saving, and Statistics tracking. I built a robust local serialization system." },
                { title: "ARCHITECTURAL LEADERSHIP", desc: "Led the technical brainstorming sessions to define the project structure. I established the coding standards ensuring seamless collaboration on Git." },
                { title: "COLLABORATIVE WORKFLOW", desc: "Managed technical tasks and code reviews. This project solidified my ability to work in a team and integrate features from other developers." },
                { title: "POLISH & GAME FEEL", desc: "Implemented 'Juice' effects (screen shake, particles, shaders) to modernize the classic Sokoban feel and enhance user retention." }
            ]
        },
        fr: {
            title: "SOKOBAN SOCIAL PUZZLE",
            date: "Fév - Avr 2025",
            features: [
                { title: "BACKEND & PERSISTANCE", desc: "Responsable de toute la couche de données : création de comptes, sauvegarde de la progression et suivi des statistiques. J'ai bâti un système de sérialisation robuste." },
                { title: "LEADERSHIP ARCHITECTURAL", desc: "J'ai dirigé les sessions de brainstorming technique pour définir la structure du projet. J'ai établi les normes de code assurant une collaboration fluide sur Git." },
                { title: "FLUX DE TRAVAIL COLLABORATIF", desc: "Gestion des tâches techniques et revues de code. Ce projet a consolidé ma capacité à travailler en équipe et à intégrer des fonctionnalités tierces." },
                { title: "POLISH & GAME FEEL", desc: "Implémentation d'effets de 'Juice' (secousses, particules, shaders) pour moderniser le feeling classique du Sokoban et améliorer la rétention." }
            ]
        }
    },



    "4": {
        en: {
            title: "SELVA: MULTIPLAYER PLATFORMER",
            date: "Jan - Feb 2026",
            features: [
                { title: "SMART CAMERA SYSTEM", desc: "I built a fully custom camera that maintains a 70/30 ratio in the player's movement direction, giving more visual space ahead. On top of that, I placed attraction points directly in the engine — the camera smoothly blends toward them to guide the player's eye toward key areas of the level." },
                { title: "PENDULUM PLATFORM SYSTEM", desc: "Designed and coded a physics-based pendulum system for moving platforms. Each platform swings with configurable arc, speed and pivot, creating dynamic obstacles that interact naturally with the player's momentum." },
                { title: "PLAYER MOVEMENT & FSM", desc: "Implemented the full player locomotion: custom velocity, acceleration and deceleration curves for a snappy but weighty feel. Organized all player states (idle, run, jump, fall...) into a clean Finite State Machine for maintainability." },
                { title: "LEVEL DESIGN — LEVEL 2", desc: "Handled the level design of the second level end to end: layout, platform placement, pendulum choreography and pacing. Designed to progressively teach the game mechanics while maintaining a fun challenge." },
                { title: "JUICINESS & CREDITS WALL", desc: "Added juice effects throughout the game to make every action feel satisfying. Created a special credits screen where players can tag the walls like graffiti — a playful way to sign off the experience." }
            ]
        },
        fr: {
            title: "SELVA: PLATFORMER MULTIJOUEUR",
            date: "Jan - Fév 2026",
            features: [
                { title: "SYSTÈME DE CAMÉRA INTELLIGENTE", desc: "J'ai développé une caméra entièrement custom qui maintient un ratio 70/30 dans la direction du joueur, offrant plus de visibilité vers l'avant. Des points d'attraction placés dans le moteur permettent à la caméra de se diriger progressivement vers eux pour guider le regard vers les zones clés." },
                { title: "SYSTÈME DE PENDULE", desc: "Conception et développement d'un système de plateformes en pendule basé sur la physique. Chaque plateforme oscille avec un arc, une vitesse et un pivot configurables, créant des obstacles dynamiques qui interagissent naturellement avec la vélocité du joueur." },
                { title: "DÉPLACEMENTS & MACHINE À ÉTATS", desc: "Implémentation complète des déplacements : vélocité, accélération et décélération custom pour un feeling à la fois nerveux et lourd. Tous les états du joueur (idle, run, jump, fall...) sont organisés dans une Finite State Machine propre et maintenable." },
                { title: "LEVEL DESIGN — NIVEAU 2", desc: "Responsable du level design du deuxième niveau de bout en bout : layout, placement des plateformes, chorégraphie des pendules et rythme. Conçu pour enseigner progressivement les mécaniques tout en maintenant un défi plaisant." },
                { title: "JUICINESS & MUR DE CRÉDITS", desc: "Ajout d'effets de jus sur l'ensemble du jeu pour rendre chaque action satisfaisante. Création d'un écran de crédits où les joueurs peuvent taguer les murs comme des graffitis — une façon ludique de clore l'expérience." }
            ]
        }
    }
};

const commonProjectData = {
    "4": {
        videoId: "CEehQYAydOs",
        tags: ["C#", "Unity", "Multiplayer", "Mobile", "Custom Physics"],
        imgs: [
            "ClosingGeneral/Screenshots/Platformer/Platformer2.png",
            "ClosingGeneral/Screenshots/Platformer/Platformer3.png",
            "ClosingGeneral/Screenshots/Platformer/Platformer4.png",
            "ClosingGeneral/Screenshots/Platformer/Platformer5.png",
            "ClosingGeneral/Screenshots/Platformer/Platformer6.png"
        ]
    },
    "1": { 
        videoId: "CMVbx05H4lI", 
        tags: ["C#", "Unity", "Custom Physics", "Vector Math"], 
        imgs: ["ClosingGeneral/Screenshots/Rush/Rush2.png", "ClosingGeneral/Screenshots/Rush/Rush7.png", "ClosingGeneral/Screenshots/Rush/Rush3.png", "ClosingGeneral/Screenshots/Rush/Rush4.png", "ClosingGeneral/Screenshots/Rush/Rush5.png"] 
    },
    "2": { 
        videoId: "fVqiZQ8P-oU", 
        tags: ["Godot", "Mobile UX", "Accessibility", "JSON"], 
        imgs: ["ClosingGeneral/Screenshots/OneButton/OneButtonGame2.png", "ClosingGeneral/Screenshots/OneButton/OneButtonGame3.png", "ClosingGeneral/Screenshots/OneButton/OneButtonGame4.png", "ClosingGeneral/Screenshots/OneButton/OneButtonGame5.png"] 
    },
    "3": { 
        videoId: "D2Z7TCOf8iU", 
        tags: ["Group Project", "Godot", "Backend Logic", "Git"], 
        imgs: ["ClosingGeneral/Screenshots/Sokoban/Sokoban2.png", "ClosingGeneral/Screenshots/Sokoban/Sokoban3.png", "ClosingGeneral/Screenshots/Sokoban/Sokoban5.png", "ClosingGeneral/Screenshots/Sokoban/Sokoban4.png"] 
    }
};

/* =========================================
   2. LOGIC & INITIALIZATION
   ========================================= */

window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTotal / heightTotal) * 100;
    const progressBar = document.getElementById('scroll-progress');
    if(progressBar) progressBar.style.width = scrollPercent + "%";
});

// CURSOR INIT SAFELY
document.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (dot && outline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            dot.style.left = `${posX}px`;
            dot.style.top = `${posY}px`;
            outline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
        });
    }
});

let currentLang = localStorage.getItem('site-lang') || 'en';

function updateContent() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key]) el.innerHTML = t[key];
    });

    const toggle = document.getElementById('lang-toggle');
    if(toggle) toggle.innerText = currentLang === 'en' ? '[ EN ]' : '[ FR ]';

    startTypewriter();

    if(window.location.pathname.includes('projet.html')) {
        loadProjectDetails();
    }
}

function loadProjectDetails() {
    const id = new URLSearchParams(window.location.search).get('id');
    const common = commonProjectData[id];
    const details = projectsDetails[id] ? projectsDetails[id][currentLang] : null;

    if (common && details) {
        document.getElementById('project-title').innerText = details.title;
        const dateContainer = document.getElementById('project-date');
        if(dateContainer) dateContainer.innerText = details.date;
        
        const tagsContainer = document.getElementById('tags');
        tagsContainer.innerHTML = '';
        common.tags.forEach(tag => {
            const s = document.createElement('span'); s.innerText = tag; tagsContainer.appendChild(s);
        });

        // YOUTUBE INJECTOR
        const vidContainer = document.getElementById('video-container');
        if(vidContainer.innerHTML === "") {
            vidContainer.innerHTML = `
                <div class="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/${common.videoId}?autoplay=1&mute=1&loop=1&playlist=${common.videoId}&controls=1&rel=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>`;
        }

        const container = document.getElementById('features-container');
        container.innerHTML = ''; 
        
        details.features.forEach((f, index) => {
            const block = document.createElement('div');
            block.className = 'feature-block';
            const imgPath = common.imgs[index] || common.imgs[0];
            
            block.innerHTML = `
                <div class="feature-text"><h3>${f.title}</h3><p>${f.desc}</p></div>
                <div class="feature-image"><img src="${imgPath}"></div>
            `;
            container.appendChild(block);
        });

        setTimeout(() => { 
            if (window.obs) document.querySelectorAll('.feature-block').forEach(el => window.obs.observe(el)); 
        }, 100);
    }
}

const langSwitch = document.getElementById('lang-toggle');
if(langSwitch) {
    langSwitch.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        localStorage.setItem('site-lang', currentLang);
        updateContent();
    });
}

let typeInterval;
function startTypewriter() {
    const typingText = document.getElementById('typing-text');
    if(!typingText) return;

    clearInterval(typeInterval);
    const words = translations[currentLang].typing;
    let wIdx = 0; let cIdx = 0; let isDel = false;

    function type() {
        const cur = words[wIdx];
        typingText.textContent = isDel ? cur.substring(0, cIdx--) : cur.substring(0, cIdx++);
        let speed = isDel ? 50 : 150;
        if(!isDel && cIdx > cur.length) { isDel = true; speed = 2000; }
        else if(isDel && cIdx === 0) { isDel = false; wIdx = (wIdx+1)%words.length; speed = 500; }
        typeInterval = setTimeout(type, speed);
    }
    type();
}

const tiltBox = document.getElementById('tilt-box');
if(tiltBox) {
    tiltBox.addEventListener('mousemove', (e) => {
        const rect = tiltBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2; const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        tiltBox.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    tiltBox.addEventListener('mouseleave', () => {
        tiltBox.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
}

window.obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.1 });
document.querySelectorAll('.card, .skill-card, .about-box, .contact-card').forEach(el => window.obs.observe(el));

updateContent();