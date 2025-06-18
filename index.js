// --- Dictionnaire de traductions (inchangé) ---
const translations = {
    en: {
        title: "Celestia Flux",
        description: "Embark on a thrilling space exploration odyssey in Celestia Flux ! Pilot advanced spacecraft through uncharted galaxies, uncover cosmic secrets, and face interstellar challenges. Whether you choose to venture solo, mastering the art of stealth and strategy, or team up with friends in dynamic multiplayer mode, you'll navigate treacherous nebulae, discover ancient alien artifacts, and engage in epic space battles. With a rich narrative blending humor, drama, and high-stakes heists across the cosmos, Celestia Flux offers an immersive experience that combines exploration, teamwork, and cunning tactics in a vast, visually stunning universe.",
        cta: "Join Beta Test",
        "about-title": "About the Game",
        "about-text": "Celestia Flux is an immersive space exploration game blending solo and multiplayer experiences. Navigate vast galaxies, pilot advanced spacecraft, and uncover cosmic mysteries in a thrilling adventure across the stars.",
        "features-title": "Why Play Celestia Flux?",
        "feature1-title": "Space Exploration",
        "feature1-text": "Discover uncharted planets and navigate treacherous nebulae using advanced spacecraft and navigation tools.",
        "feature2-title": "Multiplayer & Solo Modes",
        "feature2-text": "Team up with friends for cooperative missions or embark on a solo journey to conquer the cosmos.",
        "feature3-title": "Cinematic Story",
        "feature3-text": "Immerse yourself in a narrative packed with humor, drama, and epic interstellar adventures.",
        "gameplay-title": "Gameplay Modes",
        "solo-title": "Solo Campaign",
        "solo-text": "Embark on a personal journey through the galaxy, mastering stealth, strategy, and exploration. Complete challenging missions, unlock new spacecraft, and unravel the secrets of the cosmos at your own pace.",
        "multi-title": "Cooperative Multiplayer",
        "multi-text": "Join forces with up to four players for cooperative missions. Work together to tackle complex heists, engage in space combat, and explore vast star systems, with seamless communication and teamwork tools.",
        "req-title": "System Requirements",
        "min-title": "Minimum Requirements",
        "rec-title": "Recommended Requirements",
        "gallery-title": "Game Gallery",
        "beta-title": "Join the PC Beta Test",
        "beta-text": "Be among the first to play Celestia Flux on PC. Sign up now to test the game and help shape its future!",
        submit: "Sign Up",
        "download-title": "Download the PC Beta",
        "download-text": "Ready to steal the show? Download the Celestia Flux beta for PC and start your heist!",
        "download-btn": "Download Now",
        "footer-text": "© 2025 Celestia Flux. All rights reserved."
    },
    fr: {
        title: "Celestia Flux : Les Voleurs",
        description: "Embarkez pour une odyssée palpitante d'exploration spatiale dans Celestia Flux : Les Voleurs ! Pilotez des vaisseaux spatiaux avancés à travers des galaxies inexplorées, découvrez des secrets cosmiques et affrontez des défis interstellaires. Que vous choisissiez de partir en solo, en maîtrisant l'art de la furtivité et de la stratégie, ou de vous associer à des amis en mode multijoueur dynamique, vous naviguerez à travers des nébuleuses traîtres, découvrirez d'anciens artefacts aliens et participerez à des batailles spatiales épiques. Avec un récit riche mêlant humour, drame et cambriolages à haut risque à travers le cosmos, Celestia Flux offre une expérience immersive combinant exploration, travail d'équipe et tactiques astucieuses dans un univers vaste et visuellement stupéfiant.",
        cta: "Rejoindre le Test Bêta",
        "about-title": "À propos du Jeu",
        "about-text": "Celestia Flux : Les Voleurs est un jeu d'exploration spatiale immersif qui mêle expériences solo et multijoueur. Naviguez à travers de vastes galaxies, pilotez des vaisseaux spatiaux avancés et découvrez des mystères cosmiques dans une aventure palpitante à travers les étoiles.",
        "features-title": "Pourquoi Jouer à Celestia Flux ?",
        "feature1-title": "Exploration Spatiale",
        "feature1-text": "Découvrez des planètes inconnues et naviguez à travers des nébuleuses traîtresses grâce à des vaisseaux spatiaux avancés et des outils de navigation.",
        "feature2-title": "Modes Multijoueur & Solo",
        "feature2-text": "Faites équipe avec des amis pour des missions coopératives ou embarquez dans un voyage solo pour conquérir le cosmos.",
        "feature3-title": "Histoire Cinématographique",
        "feature3-text": "Plongez dans un récit rempli d'humour, de drame et d'aventures interstellaires épiques.",
        "gameplay-title": "Modes de Jeu",
        "solo-title": "Campagne Solo",
        "solo-text": "Embarkez pour un voyage personnel à travers la galaxie, maîtrisant la furtivité, la stratégie et l'exploration. Terminez des missions difficiles, débloquez de nouveaux vaisseaux spatiaux et dévoilez les secrets du cosmos à votre rythme.",
        "multi-title": "Multijoueur Coopératif",
        "multi-text": "Rejoignez jusqu'à quatre joueurs pour des missions coopératives. Travaillez ensemble pour relever des cambriolages complexes, engagez-vous dans des combats spatiaux et explorez de vastes systèmes stellaires avec des outils de communication et de travail d'équipe fluides.",
        "req-title": "Configuration Requise",
        "min-title": "Configuration Minimale",
        "rec-title": "Configuration Recommandée",
        "gallery-title": "Galerie du Jeu",
        "beta-title": "Rejoignez le Test Bêta PC",
        "beta-text": "Soyez parmi les premiers à jouer à Celestia Flux : Les Voleurs sur PC. Inscrivez-vous maintenant pour tester le jeu et contribuer à son avenir !",
        submit: "S'inscrire",
        "download-title": "Télécharger la Bêta PC",
        "download-text": "Prêt à voler la vedette ? Téléchargez la bêta de Celestia Flux pour PC et commencez votre cambriolage !",
        "download-btn": "Télécharger Maintenant",
        "footer-text": "© 2025 Celestia Flux : Les Voleurs. Tous droits réservés."
    }
};

function switchLanguage(lang) {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', lang);
    window.location.href = currentUrl.href;
}

function translatePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';
    document.documentElement.lang = lang;

    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.value = lang;
    }

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// === NOUVELLE FONCTION POUR GÉRER L'AFFICHAGE UTILISATEUR ===
function updateUserDisplay() {
    const userActionsContainer = document.querySelector('.user-actions');
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        // Si l'utilisateur est connecté
        userActionsContainer.innerHTML = `
            <span class="welcome-message">Welcome, ${loggedInUser.username}</span>
            <a href="#" id="logout-btn" class="action-link">Logout</a>
        `;

        document.getElementById('logout-btn').addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('loggedInUser'); // On supprime la session
            alert('You have been logged out.');
            window.location.reload(); // On recharge la page
        });

    } else {
        // Si l'utilisateur n'est pas connecté
        userActionsContainer.innerHTML = `
            <a href="login.html" class="action-link">Login</a>
            <a href="support.html" class="action-link">Support</a>
        `;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    translatePage();
    updateUserDisplay(); // On appelle la nouvelle fonction

    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    let lastScrollY = window.scrollY;
    if(navbar) {
        window.addEventListener('scroll', () => {
            if (lastScrollY < window.scrollY && window.scrollY > 100) {
                navbar.classList.add('scrolled'); // Disparaît en descendant
            } else {
                navbar.classList.remove('scrolled'); // Apparaît en remontant
            }
            lastScrollY = window.scrollY;
        });
    }

    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            if(lightbox) {
                lightboxImg.src = item.querySelector('.gallery-img').src;
                lightbox.style.display = 'flex';
            }
        });
    });

    if(lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    const betaForm = document.getElementById('beta-form');
    if (betaForm) {
        betaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for signing up!');
        });
    }
});