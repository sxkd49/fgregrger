// CONTENU POUR : auth.js
// CE SCRIPT DOIT ÊTRE UTILISÉ PAR login.html ET support.html

document.addEventListener('DOMContentLoaded', () => {

    // --- Logique pour la page login.html ---
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        });
    }

    // Gérer la soumission du formulaire d'inscription
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            const users = JSON.parse(localStorage.getItem('game_users')) || [];
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert('Erreur : Cet email est déjà utilisé pour un compte.');
            } else {
                users.push({ username, email, password });
                localStorage.setItem('game_users', JSON.stringify(users));
                alert('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
                registerForm.reset();
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            }
        });
    }

    // Gérer la soumission du formulaire de connexion
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const ADMIN_EMAIL = 'admin@sly2.com'; // Email de l'admin

            const users = JSON.parse(localStorage.getItem('game_users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                if (user.email === ADMIN_EMAIL) {
                    alert(`Connexion Admin réussie ! Bienvenue, ${user.username}.`);
                    window.location.href = 'admin.html'; // REDIRECTION VERS LE PANEL ADMIN
                } else {
                    alert(`Connexion réussie ! Bienvenue, ${user.username}.`);
                    window.location.href = 'index.html'; // Redirection normale
                }
            } else {
                alert('Email ou mot de passe incorrect.');
            }
        });
    }

    // --- Logique pour la page support.html ---
    const supportForm = document.getElementById('support-form');

    if (supportForm) {
        supportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('support-email').value;
            const subject = document.getElementById('support-subject').value;
            const message = document.getElementById('support-message').value;

            const tickets = JSON.parse(localStorage.getItem('support_tickets')) || [];
            tickets.push({ email, subject, message, date: new Date().toISOString() });
            localStorage.setItem('support_tickets', JSON.stringify(tickets));
            
            alert('Votre message a été envoyé (et sauvegardé localement dans votre navigateur).');
            supportForm.reset();
        });
    }
});