// Einstellungen laden
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('appSettings')) || {
        displayName: sessionStorage.getItem('userName') || 'Schüler',
        questionsPerQuiz: 3,
        showHints: true,
        showExplanations: true,
        dailyReminder: false,
        achievementNotifications: true,
        colorScheme: 'default',
        animations: true
    };
    
    // Lade Werte in Formular
    document.getElementById('displayName').value = settings.displayName;
    document.getElementById('questionsPerQuiz').value = settings.questionsPerQuiz;
    document.getElementById('showHints').checked = settings.showHints;
    document.getElementById('showExplanations').checked = settings.showExplanations;
    document.getElementById('dailyReminder').checked = settings.dailyReminder;
    document.getElementById('achievementNotifications').checked = settings.achievementNotifications;
    document.getElementById('colorScheme').value = settings.colorScheme;
    document.getElementById('animations').checked = settings.animations;
    
    // Wende Einstellungen sofort an
    applySettings(settings);
}

// Einstellungen anwenden
function applySettings(settings) {
    // Farbschema anwenden
    applyColorScheme(settings.colorScheme);
    
    // Animationen anwenden
    if (!settings.animations) {
        document.body.style.setProperty('--animation-duration', '0s');
    } else {
        document.body.style.setProperty('--animation-duration', '0.2s');
    }
}

// Farbschema anwenden
function applyColorScheme(scheme) {
    const root = document.documentElement;
    
    // Entferne alte Theme-Klassen
    document.body.classList.remove('theme-default', 'theme-blue', 'theme-green', 'theme-dark');
    
    switch(scheme) {
        case 'blue':
            root.style.setProperty('--primary-color', '#3b82f6');
            root.style.setProperty('--primary-dark', '#2563eb');
            root.style.setProperty('--gradient-start', '#3b82f6');
            root.style.setProperty('--gradient-end', '#1d4ed8');
            document.body.classList.add('theme-blue');
            break;
        case 'green':
            root.style.setProperty('--primary-color', '#10b981');
            root.style.setProperty('--primary-dark', '#059669');
            root.style.setProperty('--gradient-start', '#10b981');
            root.style.setProperty('--gradient-end', '#047857');
            document.body.classList.add('theme-green');
            break;
        case 'dark':
            root.style.setProperty('--primary-color', '#8b5cf6');
            root.style.setProperty('--primary-dark', '#7c3aed');
            root.style.setProperty('--gradient-start', '#8b5cf6');
            root.style.setProperty('--gradient-end', '#6d28d9');
            root.style.setProperty('--bg-color', '#1f2937');
            root.style.setProperty('--card-bg', '#374151');
            root.style.setProperty('--text-color', '#f3f4f6');
            root.style.setProperty('--text-secondary', '#d1d5db');
            document.body.classList.add('theme-dark');
            document.body.style.background = 'linear-gradient(135deg, #1f2937 0%, #111827 100%)';
            break;
        default: // 'default'
            root.style.setProperty('--primary-color', '#667eea');
            root.style.setProperty('--primary-dark', '#764ba2');
            root.style.setProperty('--gradient-start', '#667eea');
            root.style.setProperty('--gradient-end', '#764ba2');
            root.style.setProperty('--bg-color', '#ffffff');
            root.style.setProperty('--card-bg', '#ffffff');
            root.style.setProperty('--text-color', '#333333');
            root.style.setProperty('--text-secondary', '#666666');
            document.body.classList.add('theme-default');
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
}

// Einstellungen speichern
function saveSettings() {
    const settings = {
        displayName: document.getElementById('displayName').value || 'Schüler',
        questionsPerQuiz: parseInt(document.getElementById('questionsPerQuiz').value),
        showHints: document.getElementById('showHints').checked,
        showExplanations: document.getElementById('showExplanations').checked,
        dailyReminder: document.getElementById('dailyReminder').checked,
        achievementNotifications: document.getElementById('achievementNotifications').checked,
        colorScheme: document.getElementById('colorScheme').value,
        animations: document.getElementById('animations').checked
    };
    
    // Speichere in localStorage
    localStorage.setItem('appSettings', JSON.stringify(settings));
    
    // Update Anzeigename in Session
    sessionStorage.setItem('userName', settings.displayName);
    
    // Wende Einstellungen an
    applySettings(settings);
    
    // Feedback anzeigen
    const button = document.querySelector('.save-button');
    const originalText = button.textContent;
    button.style.background = '#22c55e';
    button.textContent = '✓ Gespeichert!';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
}

// Fortschritt zurücksetzen
function resetProgress() {
    const confirm = window.confirm(
        '⚠️ ACHTUNG!\n\n' +
        'Möchtest du wirklich alle Daten löschen?\n\n' +
        '• Alle Punkte gehen verloren\n' +
        '• Alle Level werden zurückgesetzt\n' +
        '• Alle Statistiken werden gelöscht\n\n' +
        'Dies kann NICHT rückgängig gemacht werden!'
    );
    
    if (confirm) {
        const doubleConfirm = window.confirm(
            'Bist du dir absolut sicher?\n\n' +
            'Klicke OK um ALLE DATEN ENDGÜLTIG zu löschen.'
        );
        
        if (doubleConfirm) {
            // Lösche alle Lern-Daten (aber behalte Einstellungen)
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith('lernendenmodell_') || 
                    key === 'dailyStats' || 
                    key === 'letzterTag' || 
                    key === 'streak') {
                    localStorage.removeItem(key);
                }
            });
            
            alert('✓ Alle Lerndaten wurden gelöscht.\n\nDu wirst zum Dashboard weitergeleitet.');
            window.location.href = 'schueler-dashboard.html';
        }
    }
}

// Lade Einstellungen beim Start der App (für andere Seiten)
function getAppSettings() {
    const settings = JSON.parse(localStorage.getItem('appSettings')) || {
        displayName: 'Schüler',
        questionsPerQuiz: 3,
        showHints: true,
        showExplanations: true,
        dailyReminder: false,
        achievementNotifications: true,
        colorScheme: 'default',
        animations: true
    };
    
    // Wende Einstellungen an
    applySettings(settings);
    
    return settings;
}

// Initialisiere Einstellungen auf allen Seiten
if (typeof checkLogin === 'function') {
    // Warte bis DOM geladen ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            getAppSettings();
        });
    } else {
        getAppSettings();
    }
}
