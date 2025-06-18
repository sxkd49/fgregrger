// CONTENU POUR : admin.js
// CE SCRIPT DOIT ÊTRE UTILISÉ UNIQUEMENT PAR admin.html

document.addEventListener('DOMContentLoaded', () => {
    // Étape 1 : Sécurité simulée - Vérifier si un admin est connecté
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const ADMIN_EMAIL = 'admin@sly2.com';

    if (!loggedInUser || loggedInUser.email !== ADMIN_EMAIL) {
        alert('Accès refusé. Veuillez vous connecter en tant qu\'administrateur.');
        window.location.href = 'login.html';
        return; 
    }

    // Étape 2 : Afficher le message de bienvenue et gérer la déconnexion
    document.getElementById('admin-welcome').textContent = `Welcome, ${loggedInUser.username}.`;
    document.getElementById('admin-logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('loggedInUser');
        alert('You have been logged out.');
        window.location.href = 'login.html';
    });

    // Étape 3 : Charger et afficher les tickets de support
    const tickets = JSON.parse(localStorage.getItem('support_tickets')) || [];
    const ticketsTableBody = document.getElementById('tickets-tbody');
    const noTicketsMessage = document.getElementById('no-tickets-message');

    if (tickets.length === 0) {
        noTicketsMessage.style.display = 'block';
    } else {
        tickets.forEach(ticket => {
            const row = document.createElement('tr');
            const ticketDate = new Date(ticket.date).toLocaleString('fr-FR');
            row.innerHTML = `
                <td>${ticketDate}</td>
                <td>${ticket.email}</td>
                <td>${ticket.subject}</td>
                <td>${ticket.message}</td>
            `;
            ticketsTableBody.appendChild(row);
        });
    }
});