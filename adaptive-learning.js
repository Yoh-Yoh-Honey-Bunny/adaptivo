// ============================================
// EXPERTENMODELL - Wissensbasis über Zelle und Stoffwechsel
// ============================================

const expertenmodell = {
    leicht: [
        {
            frage: "Was ist die kleinste lebende Einheit aller Organismen?",
            antworten: [
                "Das Organ",
                "Die Zelle",
                "Das Gewebe",
                "Der Organismus"
            ],
            richtig: 1,
            hinweis: "Alle Lebewesen bestehen aus diesen kleinsten Bausteinen.",
            erklaerung: "Die Zelle ist die kleinste lebende Einheit! Der menschliche Körper besteht aus etwa 100 Billionen Zellen."
        },
        {
            frage: "Was macht der Zellkern?",
            antworten: [
                "Er produziert Energie",
                "Er schützt die Zelle",
                "Er steuert alle Vorgänge und enthält die DNA",
                "Er transportiert Stoffe"
            ],
            richtig: 2,
            hinweis: "Der Zellkern wird auch 'Kommandozentrale' genannt.",
            erklaerung: "Der Zellkern ist die Kommandozentrale der Zelle. Er enthält die DNA und steuert alle wichtigen Vorgänge!"
        },
        {
            frage: "Was ist Cytoplasma?",
            antworten: [
                "Eine gelartige Flüssigkeit in der Zelle",
                "Die äußere Hülle der Zelle",
                "Die DNA der Zelle",
                "Ein Zellorganell"
            ],
            richtig: 0,
            hinweis: "Es füllt den Raum zwischen Zellkern und Zellmembran aus.",
            erklaerung: "Das Cytoplasma ist eine gelartige Flüssigkeit, in der alle Zellorganellen schwimmen!"
        },
        {
            frage: "Welche Zellen haben eine Zellwand?",
            antworten: [
                "Nur Tierzellen",
                "Nur Pflanzenzellen",
                "Alle Zellen",
                "Keine Zellen"
            ],
            richtig: 1,
            hinweis: "Diese Zellen brauchen zusätzliche Stabilität.",
            erklaerung: "Nur Pflanzenzellen haben eine feste Zellwand aus Cellulose, die ihnen Stabilität gibt!"
        },
        {
            frage: "Warum sind Pflanzen grün?",
            antworten: [
                "Wegen der Zellwand",
                "Wegen der Chloroplasten",
                "Wegen der Mitochondrien",
                "Wegen des Zellkerns"
            ],
            richtig: 1,
            hinweis: "In diesen Organellen findet die Photosynthese statt.",
            erklaerung: "Chloroplasten enthalten den grünen Farbstoff Chlorophyll und machen Pflanzen grün!"
        }
    ],
    mittel: [
        {
            frage: "Warum werden Mitochondrien als 'Kraftwerke der Zelle' bezeichnet?",
            antworten: [
                "Sie speichern Energie",
                "Sie produzieren ATP durch Zellatmung",
                "Sie transportieren Energie",
                "Sie bauen Energie ab"
            ],
            richtig: 1,
            hinweis: "Hier findet die Zellatmung statt.",
            erklaerung: "Mitochondrien produzieren ATP durch Zellatmung - die Energie-Währung der Zelle!"
        },
        {
            frage: "Was ist die Funktion der Zellmembran?",
            antworten: [
                "Sie speichert Nährstoffe",
                "Sie produziert Proteine",
                "Sie ist selektiv permeabel und kontrolliert den Stoffaustausch",
                "Sie enthält die DNA"
            ],
            richtig: 2,
            hinweis: "Sie wirkt wie ein intelligenter Türsteher.",
            erklaerung: "Die Zellmembran ist selektiv permeabel - sie kontrolliert genau, welche Stoffe durchdürfen!"
        },
        {
            frage: "Was ist Diffusion?",
            antworten: [
                "Der aktive Transport von Stoffen",
                "Die Bewegung von Teilchen von hoher zu niedriger Konzentration",
                "Die Teilung der Zelle",
                "Die Produktion von Energie"
            ],
            richtig: 1,
            hinweis: "Dies geschieht ohne Energieaufwand, ganz natürlich.",
            erklaerung: "Diffusion ist die Bewegung von Teilchen von Orten hoher zu niedriger Konzentration - ganz ohne Energie!"
        },
        {
            frage: "Welches Organell ist die 'Poststelle' der Zelle?",
            antworten: [
                "Mitochondrien",
                "Lysosomen",
                "Golgi-Apparat",
                "Endoplasmatisches Retikulum"
            ],
            richtig: 2,
            hinweis: "Dieses Organell verpackt und verschickt Proteine.",
            erklaerung: "Der Golgi-Apparat verpackt Proteine und transportiert sie dorthin, wo sie gebraucht werden!"
        },
        {
            frage: "Was ist Osmose?",
            antworten: [
                "Die Bewegung von Salzen durch eine Membran",
                "Die Bewegung von Wasser durch eine selektiv permeable Membran",
                "Die Teilung von Zellen",
                "Die Produktion von Proteinen"
            ],
            richtig: 1,
            hinweis: "Ein Spezialfall der Diffusion, aber nur für Wasser.",
            erklaerung: "Osmose ist die Bewegung von Wassermolekülen durch eine selektiv permeable Membran!"
        },
        {
            frage: "Wie viele Tochterzellen entstehen bei der Mitose?",
            antworten: [
                "Eine Zelle",
                "Zwei identische Zellen",
                "Vier Zellen",
                "Acht Zellen"
            ],
            richtig: 1,
            hinweis: "Die Mutterzelle teilt sich in zwei.",
            erklaerung: "Bei der Mitose entstehen zwei identische Tochterzellen mit dem gleichen Erbgut!"
        }
    ],
    schwer: [
        {
            frage: "Was unterscheidet das raue vom glatten Endoplasmatischen Retikulum?",
            antworten: [
                "Das raue ER hat Ribosomen und stellt Proteine her",
                "Das glatte ER enthält DNA",
                "Das raue ER produziert ATP",
                "Es gibt keinen Unterschied"
            ],
            richtig: 0,
            hinweis: "Die 'Rauheit' kommt von kleinen Strukturen auf der Oberfläche.",
            erklaerung: "Das raue ER ist mit Ribosomen besetzt und stellt Proteine her, das glatte ER produziert Lipide!"
        },
        {
            frage: "Welche Organelle enthält Verdauungsenzyme und baut alte Zellbestandteile ab?",
            antworten: [
                "Mitochondrien",
                "Golgi-Apparat",
                "Lysosomen",
                "Chloroplasten"
            ],
            richtig: 2,
            hinweis: "Diese Organelle ist das 'Recycling-Zentrum' der Zelle.",
            erklaerung: "Lysosomen enthalten Enzyme und bauen alte Teile ab - sie sind die Recycling-Zentren!"
        },
        {
            frage: "Was beschreibt die Formel: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie?",
            antworten: [
                "Photosynthese",
                "Zellatmung",
                "Osmose",
                "Diffusion"
            ],
            richtig: 1,
            hinweis: "Dieser Prozess findet in den Mitochondrien statt.",
            erklaerung: "Das ist die Zellatmung! Glucose wird mit Sauerstoff zu CO₂, Wasser und ATP abgebaut."
        },
        {
            frage: "In welcher Phase der Mitose ordnen sich die Chromosomen in der Äquatorialebene an?",
            antworten: [
                "Prophase",
                "Metaphase",
                "Anaphase",
                "Telophase"
            ],
            richtig: 1,
            hinweis: "Diese Phase liegt zwischen Prophase und Anaphase.",
            erklaerung: "In der Metaphase ordnen sich die Chromosomen in der Mitte der Zelle an!"
        },
        {
            frage: "Was ist Plasmolyse?",
            antworten: [
                "Das Wachstum von Pflanzenzellen",
                "Das Zurückziehen der Zellmembran von der Zellwand durch Wasserverlust",
                "Die Teilung von Pflanzenzellen",
                "Die Photosynthese in Pflanzen"
            ],
            richtig: 1,
            hinweis: "Dies passiert, wenn Pflanzenzellen in stark salzhaltige Lösungen kommen.",
            erklaerung: "Bei Plasmolyse verliert die Zelle durch Osmose Wasser und die Membran zieht sich zurück!"
        },
        {
            frage: "Was ist ATP und wofür braucht die Zelle es?",
            antworten: [
                "Ein Protein zur Zellteilung",
                "Die universelle Energiewährung der Zelle",
                "Ein Enzym für die Verdauung",
                "Ein Teil der DNA"
            ],
            richtig: 1,
            hinweis: "Die Abkürzung steht für Adenosintriphosphat.",
            erklaerung: "ATP speichert Energie in chemischen Bindungen - die Zelle nutzt es für alle ihre Aufgaben!"
        },
        {
            frage: "Welche drei Besonderheiten haben Pflanzenzellen zusätzlich zu Tierzellen?",
            antworten: [
                "Zellkern, Mitochondrien, Ribosomen",
                "Zellwand, Chloroplasten, Vakuole",
                "Lysosomen, Golgi-Apparat, ER",
                "DNA, RNA, Proteine"
            ],
            richtig: 1,
            hinweis: "Diese drei Strukturen fehlen Tierzellen komplett.",
            erklaerung: "Pflanzenzellen haben zusätzlich: Zellwand (Stabilität), Chloroplasten (Photosynthese), Vakuole (Speicher)!"
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

// Update tägliche Statistiken
function updateDailyStats(punkte, richtig, quiz) {
    const heute = new Date().toDateString();
    const gespeichertTag = localStorage.getItem('letzterTag');
    
    // Prüfe ob neuer Tag
    if (gespeichertTag !== heute) {
        localStorage.setItem('letzterTag', heute);
        localStorage.setItem('dailyStats', JSON.stringify({
            punkte: 0,
            richtig: 0,
            quizze: 0
        }));
    }
    
    // Lade aktuelle tägliche Stats
    let dailyStats = JSON.parse(localStorage.getItem('dailyStats')) || {
        punkte: 0,
        richtig: 0,
        quizze: 0
    };
    
    // Update
    dailyStats.punkte += punkte;
    dailyStats.richtig += richtig;
    dailyStats.quizze += quiz;
    
    // Speichere
    localStorage.setItem('dailyStats', JSON.stringify(dailyStats));
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
    // Lade Einstellungen
    const settings = getAppSettings();
    const fragenAnzahl = settings.questionsPerQuiz || 3;
    
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
    
    // Begrenze auf eingestellte Anzahl
    aktuelleFragenliste = aktuelleFragenliste.slice(0, fragenAnzahl);
    
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
        
        // Update tägliche Statistiken
        updateDailyStats(punkte, 1, 0);
        
        // Lade Einstellungen für Erklärungen
        const settings = getAppSettings();
        
        // Zeige Feedback
        let feedbackHTML = `
            <div style="color: #22c55e; font-size: 20px; margin-bottom: 8px;">✓ Richtig!</div>
        `;
        
        // Zeige Erklärung nur wenn aktiviert
        if (settings.showExplanations) {
            feedbackHTML += `<div style="font-size: 14px;">${frage.erklaerung}</div>`;
        }
        
        feedbackHTML += `<div style="margin-top: 8px; color: #667eea; font-weight: 600;">+${punkte} Punkte</div>`;
        
        document.getElementById('feedbackBox').style.display = 'block';
        document.getElementById('feedbackText').innerHTML = feedbackHTML;
        
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
        
        // Lade Einstellungen
        const settings = getAppSettings();
        
        // Inner Loop: Zeige Hinweis beim ersten Fehler (wenn aktiviert)
        if (versuche === 1 && settings.showHints) {
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
            // Zweiter Fehler oder Hinweise deaktiviert: Zeige richtige Antwort
            buttons[frage.richtig].classList.add('correct');
            
            let feedbackHTML = `
                <div style="color: #ef4444; font-size: 20px; margin-bottom: 8px;">✗ Leider falsch</div>
                <div style="font-size: 14px;">Die richtige Antwort ist: <strong>${frage.antworten[frage.richtig]}</strong></div>
            `;
            
            // Zeige Erklärung nur wenn aktiviert
            if (settings.showExplanations) {
                feedbackHTML += `<div style="margin-top: 8px; font-size: 14px;">${frage.erklaerung}</div>`;
            }
            
            document.getElementById('feedbackBox').style.display = 'block';
            document.getElementById('feedbackText').innerHTML = feedbackHTML;
            
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
    
    // Update tägliche Stats
    updateDailyStats(0, 0, 1);
    
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
