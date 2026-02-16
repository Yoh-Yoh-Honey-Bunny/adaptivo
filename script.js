// Demo-Zugangsdaten
const demoAccounts = {
    schueler: {
        email: 'schueler@test.de',
        password: 'schueler123',
        name: 'Max Musterschüler'
    },
    lehrer: {
        email: 'lehrer@test.de',
        password: 'lehrer123',
        name: 'Frau Schmidt'
    }
};

// Login-Formular Event Listener
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Verhindert das Standard-Formular-Absenden
    
    // Werte aus den Eingabefeldern holen
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    
    // Fehlermeldung zurücksetzen
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
    
    // Validierung: Benutzertyp gewählt?
    if (!userType) {
        errorMessage.textContent = 'Bitte wähle aus, ob du Schüler/in oder Lehrer/in bist.';
        return;
    }
    
    // Prüfen ob Zugangsdaten korrekt sind
    const account = demoAccounts[userType];
    
    if (email === account.email && password === account.password) {
        // Login erfolgreich!
        
        // Benutzerdaten im Browser speichern (für Dashboard)
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userType', userType);
        sessionStorage.setItem('userName', account.name);
        
        // Weiterleitung zum entsprechenden Dashboard
        if (userType === 'schueler') {
            window.location.href = 'schueler-dashboard.html';
        } else {
            window.location.href = 'lehrer-dashboard.html';
        }
    } else {
        // Login fehlgeschlagen
        errorMessage.textContent = 'E-Mail oder Passwort ist falsch. Bitte überprüfe deine Eingaben.';
    }
});

// Logout-Funktion (wird auf Dashboard-Seiten verwendet)
function logout() {
    sessionStorage.clear(); // Alle gespeicherten Daten löschen
    window.location.href = 'index.html'; // Zurück zur Login-Seite
}

// Prüfen ob Nutzer eingeloggt ist (für Dashboard-Seiten)
function checkLogin() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Nicht eingeloggt → zurück zur Login-Seite
        window.location.href = 'index.html';
    }
}

// Benutzernamen anzeigen (für Dashboard-Seiten)
function displayUserName() {
    const userName = sessionStorage.getItem('userName');
    const welcomeElement = document.getElementById('userName');
    if (welcomeElement && userName) {
        welcomeElement.textContent = userName;
    }
}
