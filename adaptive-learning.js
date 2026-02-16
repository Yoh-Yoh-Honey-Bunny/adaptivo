// ============================================
// EXPERTENMODELL - Wissensbasis über Eukaryoten
// ============================================

const expertenmodell = {
    leicht: [
        {
            frage: "Was ist der Zellkern?",
            antworten: [
                "Die Steuerzentrale der Zelle",
                "Die Hülle der Zelle",
                "Das Kraftwerk der Zelle",
                "Der Speicher für Wasser"
            ],
            richtig: 0,
            hinweis: "Der Zellkern enthält die DNA und steuert alle Vorgänge in der Zelle.",
            erklaerung: "Der Zellkern ist wie das Gehirn der Zelle. Er enthält die DNA und gibt Befehle!"
        },
        {
            frage: "Was macht die Zellmembran?",
            antworten: [
                "Sie produziert Energie",
                "Sie schützt die Zelle und kontrolliert was rein und raus geht",
                "Sie speichert Nährstoffe",
                "Sie bewegt die Zelle"
            ],
            richtig: 1,
            hinweis: "Die Zellmembran ist wie eine Mauer mit Türen - sie entscheidet, was rein und raus darf.",
            erklaerung: "Die Zellmembran ist die Schutzhülle der Zelle und kontrolliert den Stoffaustausch!"
        },
        {
            frage: "Was ist Cytoplasma?",
            antworten: [
                "Eine gelartige Flüssigkeit in der Zelle",
                "Die äußere Hülle",
                "Ein Organ im Körper",
                "Die DNA der Zelle"
            ],
            richtig: 0,
            hinweis: "Das Cytoplasma füllt den Raum zwischen Zellkern und Zellmembran aus.",
            erklaerung: "Das Cytoplasma ist wie eine Gel-Füllung, in der alle Zellorganellen schwimmen!"
        }
    ],
    mittel: [
        {
            frage: "Was machen die Mitochondrien?",
            antworten: [
                "Sie speichern Wasser",
                "Sie produzieren Energie (ATP)",
                "Sie bauen Proteine",
                "Sie transportieren Stoffe"
            ],
            richtig: 1,
            hinweis: "Mitochondrien werden oft als 'Kraftwerke der Zelle' bezeichnet.",
            erklaerung: "Mitochondrien produzieren ATP - die Energie-Währung der Zelle. Deshalb heißen sie Kraftwerke!"
        },
        {
            frage: "Welche Aussage über Eukaryoten ist richtig?",
            antworten: [
                "Sie haben keinen Zellkern",
                "Sie haben einen echten Zellkern mit Membran",
                "Sie sind immer Einzeller",
                "Sie können keine Energie produzieren"
            ],
            richtig: 1,
            hinweis: "Das Wort 'Eu-karyot' kommt aus dem Griechischen und bedeutet 'echter Kern'.",
            erklaerung: "Eukaryoten haben einen echten Zellkern mit Kernmembran - im Gegensatz zu Prokaryoten!"
        },
        {
            frage: "Was ist der Unterschied zwischen Tier- und Pflanzenzellen?",
            antworten: [
                "Tierzellen haben einen Zellkern, Pflanzenzellen nicht",
                "Pflanzenzellen haben eine Zellwand und Chloroplasten",
                "Pflanzenzellen haben keine Mitochondrien",
                "Es gibt keinen Unterschied"
            ],
            richtig: 1,
            hinweis: "Pflanzenzellen haben zusätzliche Strukturen, die sie grün machen und stabilisieren.",
            erklaerung: "Pflanzenzellen haben eine feste Zellwand und Chloroplasten für Photosynthese!"
        }
    ],
    schwer: [
        {
            frage: "Was ist die Funktion des Endoplasmatischen Retikulums (ER)?",
            antworten: [
                "Transport und Verarbeitung von Proteinen und Lipiden",
                "Speicherung von DNA",
                "Produktion von ATP",
                "Abbau von Abfallstoffen"
            ],
            richtig: 0,
            hinweis: "Das ER ist ein Netzwerk von Kanälen und hilft beim Transport von Stoffen.",
            erklaerung: "Das ER ist wie ein Transportsystem und eine Fabrik für Proteine und Fette!"
        },
        {
            frage: "Welche Organelle ist für die Verdauung in der Zelle zuständig?",
            antworten: [
                "Mitochondrien",
                "Ribosomen",
                "Lysosomen",
                "Golgi-Apparat"
            ],
            richtig: 2,
            hinweis: "Diese Organelle enthält Enzyme, die Stoffe abbauen können.",
            erklaerung: "Lysosomen sind die 'Recycling-Zentren' der Zelle - sie bauen alte Teile ab!"
        },
        {
            frage: "Was macht der Golgi-Apparat?",
            antworten: [
                "Er produziert DNA",
                "Er verpackt und modifiziert Proteine für den Export",
                "Er produziert Energie",
                "Er kontrolliert die Zellteilung"
            ],
            richtig: 1,
            hinweis: "Der Golgi-Apparat ist wie eine Poststelle - er verpackt Stoffe für den Versand.",
            erklaerung: "Der Golgi-Apparat verpackt Proteine wie Geschenke und schickt sie dahin, wo sie gebraucht werden!"
        }
    ]
};

// ============================================
// LERNENDENMODELL - Tracking des Schülerwissens
// ============================================

let lernendenmodell = {
    gesamtPunkte: 0,
    level: 1,
    schwierigkeitsgrad: 'leicht',
    richtigeAntworten: 0,
    falscheAntworten: 0,
    absolvierteQuizze: 0,
    aktuellerDurchgang: {
        richtig: 0,
        falsch: 0,
        fragen: []
    }
};

// Fachspezifischer Speicherschlüssel (kann später für andere Fächer angepasst werden)
let currentSubject = 'biologie';

// Laden des gespeicherten Fortschritts
function ladeFortschritt() {
    const gespeichert = localStorage.getItem('lernendenmodell_' + currentSubject);
    if (gespeichert) {
        lernendenmodell = JSON.parse(gespeichert);
    }
}

// Speichern des Fortschritts
function speichereFortschritt() {
    localStorage.setItem('lernendenmodell_' + currentSubject, JSON.stringify(lernendenmodell));
}

// ============================================
// TUTORIELLES MODELL - Adaptiver Lernpfad
// ============================================

let aktuelleFrageIndex = 0;
let aktuelleFragenliste = [];
let hatFehlerGemacht = false;
let versuche = 0;

// Initialisierung des Lernsystems
function initializeLearning() {
    ladeFortschritt();
    aktualisiereFortschrittsanzeige();
    starteNeuesQuiz();
}

// Outer Loop: Wähle passende Fragen basierend auf Schwierigkeit
function starteNeuesQuiz() {
    // Reset für neuen Durchgang
    lernendenmodell.aktuellerDurchgang = {
        richtig: 0,
        falsch: 0,
        fragen: []
    };
    
    aktuelleFrageIndex = 0;
    hatFehlerGemacht = false;
    versuche = 0;
    
    // Wähle Fragen basierend auf aktuellem Schwierigkeitsgrad
    aktuelleFragenliste = [...expertenmodell[lernendenmodell.schwierigkeitsgrad]];
    
    // Mische Fragen
    aktuelleFragenliste = aktuelleFragenliste.sort(() => Math.random() - 0.5);
    
    // Zeige Quiz-Container
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('resultScreen').style.display = 'none';
    
    zeigeFrage();
}

// Zeige aktuelle Frage
function zeigeFrage() {
    if (aktuelleFrageIndex >= aktuelleFragenliste.length) {
        zeigeErgebnis();
        return;
    }
    
    const frage = aktuelleFragenliste[aktuelleFrageIndex];
    hatFehlerGemacht = false;
    versuche = 0;
    
    // Aktualisiere Fragenummer
    document.getElementById('questionNumber').textContent = aktuelleFrageIndex + 1;
    document.getElementById('questionText').textContent = frage.frage;
    
    // Verstecke Feedback und Hinweis
    document.getElementById('hintBox').style.display = 'none';
    document.getElementById('feedbackBox').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
    
    // Erstelle Antwort-Buttons
    const container = document.getElementById('answersContainer');
    container.innerHTML = '';
    
    frage.antworten.forEach((antwort, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = antwort;
        button.onclick = () => pruefeAntwort(index);
        container.appendChild(button);
    });
}

// Inner Loop: Prüfe Antwort und gebe Hinweise
function pruefeAntwort(gewaehlt) {
    const frage = aktuelleFragenliste[aktuelleFrageIndex];
    const buttons = document.querySelectorAll('.answer-button');
    versuche++;
    
    // Deaktiviere alle Buttons
    buttons.forEach(btn => btn.disabled = true);
    
    if (gewaehlt === frage.richtig) {
        // RICHTIGE ANTWORT
        buttons[gewaehlt].classList.add('correct');
        
        // Punkte berechnen (weniger Punkte bei mehreren Versuchen)
        let punkte = 10;
        if (hatFehlerGemacht) {
            punkte = 5; // Halbe Punkte nach Hinweis
        }
        
        lernendenmodell.gesamtPunkte += punkte;
        lernendenmodell.richtigeAntworten++;
        lernendenmodell.aktuellerDurchgang.richtig++;
        
        // Zeige Feedback
        document.getElementById('feedbackBox').style.display = 'block';
        document.getElementById('feedbackText').innerHTML = `
            <div style="color: #22c55e; font-size: 20px; margin-bottom: 8px;">✓ Richtig!</div>
            <div style="font-size: 14px;">${frage.erklaerung}</div>
            <div style="margin-top: 8px; color: #667eea; font-weight: 600;">+${punkte} Punkte</div>
        `;
        
        // Level-Up prüfen
        if (lernendenmodell.gesamtPunkte >= lernendenmodell.level * 30) {
            lernendenmodell.level++;
        }
        
        speichereFortschritt();
        aktualisiereFortschrittsanzeige();
        
        // Zeige "Nächste Frage" Button
        document.getElementById('nextButton').style.display = 'block';
        
    } else {
        // FALSCHE ANTWORT
        buttons[gewaehlt].classList.add('wrong');
        hatFehlerGemacht = true;
        lernendenmodell.falscheAntworten++;
        lernendenmodell.aktuellerDurchgang.falsch++;
        
        // Inner Loop: Zeige Hinweis beim ersten Fehler
        if (versuche === 1) {
            document.getElementById('hintBox').style.display = 'block';
            document.getElementById('hintText').textContent = frage.hinweis;
            
            // Re-aktiviere Buttons für zweiten Versuch
            setTimeout(() => {
                buttons.forEach((btn, idx) => {
                    if (idx !== gewaehlt) {
                        btn.disabled = false;
                        btn.classList.remove('wrong');
                    }
                });
            }, 1500);
        } else {
            // Zweiter Fehler: Zeige richtige Antwort
            buttons[frage.richtig].classList.add('correct');
            
            document.getElementById('feedbackBox').style.display = 'block';
            document.getElementById('feedbackText').innerHTML = `
                <div style="color: #ef4444; font-size: 20px; margin-bottom: 8px;">✗ Leider falsch</div>
                <div style="font-size: 14px;">Die richtige Antwort ist: <strong>${frage.antworten[frage.richtig]}</strong></div>
                <div style="margin-top: 8px; font-size: 14px;">${frage.erklaerung}</div>
            `;
            
            speichereFortschritt();
            document.getElementById('nextButton').style.display = 'block';
        }
    }
}

// Nächste Frage
function nextQuestion() {
    aktuelleFrageIndex++;
    zeigeFrage();
}

// Zeige Ergebnis und passe Schwierigkeit an (Outer Loop)
function zeigeErgebnis() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    const richtig = lernendenmodell.aktuellerDurchgang.richtig;
    const gesamt = aktuelleFragenliste.length;
    const prozent = (richtig / gesamt) * 100;
    
    // Erhöhe Quiz-Zähler
    lernendenmodell.absolvierteQuizze = (lernendenmodell.absolvierteQuizze || 0) + 1;
    
    // Outer Loop: Schwierigkeit anpassen
    let neuerSchwierigkeitsgrad = lernendenmodell.schwierigkeitsgrad;
    let nachricht = '';
    
    if (prozent >= 80 && lernendenmodell.schwierigkeitsgrad === 'leicht') {
        neuerSchwierigkeitsgrad = 'mittel';
        nachricht = '🎯 Super! Du bist jetzt bereit für mittelschwere Fragen!';
    } else if (prozent >= 80 && lernendenmodell.schwierigkeitsgrad === 'mittel') {
        neuerSchwierigkeitsgrad = 'schwer';
        nachricht = '🌟 Wow! Du schaffst jetzt schwere Fragen!';
    } else if (prozent < 50 && lernendenmodell.schwierigkeitsgrad === 'schwer') {
        neuerSchwierigkeitsgrad = 'mittel';
        nachricht = '📚 Kein Problem! Lass uns nochmal mittelschwere Fragen üben.';
    } else if (prozent < 50 && lernendenmodell.schwierigkeitsgrad === 'mittel') {
        neuerSchwierigkeitsgrad = 'leicht';
        nachricht = '💪 Lass uns nochmal die Basics festigen!';
    } else if (prozent >= 60) {
        nachricht = '👍 Gut gemacht! Weiter so!';
    } else {
        nachricht = '🔄 Übung macht den Meister! Versuch es nochmal!';
    }
    
    lernendenmodell.schwierigkeitsgrad = neuerSchwierigkeitsgrad;
    speichereFortschritt();
    aktualisiereFortschrittsanzeige();
    
    // Zeige Ergebnis
    document.getElementById('resultCorrect').textContent = richtig + ' / ' + gesamt;
    document.getElementById('resultPoints').textContent = lernendenmodell.aktuellerDurchgang.richtig * 10;
    document.getElementById('resultMessage').innerHTML = nachricht;
    
    if (prozent === 100) {
        document.getElementById('resultTitle').textContent = '🏆 Perfekt!';
    } else if (prozent >= 66) {
        document.getElementById('resultTitle').textContent = '🎉 Super gemacht!';
    } else {
        document.getElementById('resultTitle').textContent = '💪 Weiter üben!';
    }
}

// Quiz neu starten
function restartQuiz() {
    starteNeuesQuiz();
}

// Aktualisiere Fortschrittsanzeige
function aktualisiereFortschrittsanzeige() {
    document.getElementById('totalPoints').textContent = lernendenmodell.gesamtPunkte;
    document.getElementById('currentLevel').textContent = lernendenmodell.level;
    document.getElementById('correctAnswers').textContent = lernendenmodell.richtigeAntworten;
    
    const schwierigkeitTexte = {
        'leicht': 'Leicht',
        'mittel': 'Mittel',
        'schwer': 'Schwer'
    };
    document.getElementById('currentDifficulty').textContent = schwierigkeitTexte[lernendenmodell.schwierigkeitsgrad];
}
