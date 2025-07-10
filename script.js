var show_settings = false;

function apriIstruzioni() {
    window.open('https://genca79.github.io/EasyGencaTTS/README.md', '_blank');
}

function autoResize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

function checkEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        convertiVoce();
    }
}

function cancellaTesto() {
    document.getElementById("textInput").value = "";
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Errore nell'attivazione dello schermo intero: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

function toggleSettings() {
    show_settings = !show_settings;
    let settingsDiv = document.getElementById("settings");
    if (show_settings) {
        settingsDiv.style.display = "block";
        caricaSettings();
    } else {
        settingsDiv.style.display = "none";
    }
}

function salvaSettings() {
    let settings = {
        apiKey: document.getElementById("apiKey").value,
        voiceId: document.getElementById("voiceId").value,
        modelTTS: document.getElementById("modelTTS").value,
        stability: document.getElementById("stability").value,
        similarity: document.getElementById("similarity").value,
        gptApiKey: document.getElementById("gptApiKey").value,
        gptModel: document.getElementById("gptModel").value,
        gptPrompt: document.getElementById("gptPrompt").value
    };
    localStorage.setItem("ttsSettings", JSON.stringify(settings));
    alert("Impostazioni salvate!");
}

function caricaSettings() {
    let settings = JSON.parse(localStorage.getItem("ttsSettings"));
    if (settings) {
        document.getElementById("apiKey").value = settings.apiKey || "";
        document.getElementById("voiceId").value = settings.voiceId || "";
        document.getElementById("modelTTS").value = settings.modelTTS || "eleven_flash_v2_5";
        document.getElementById("stability").value = settings.stability || "0.5";
        document.getElementById("similarity").value = settings.similarity || "0.9";
        document.getElementById("gptApiKey").value = settings.gptApiKey || "";
        document.getElementById("gptModel").value = settings.gptModel || "gpt-3.5-turbo";
        document.getElementById("gptPrompt").value = settings.gptPrompt || "Correggi errori di battitura, punteggiatura e grammatica nel testo. Non modificare il significato della frase. Correggi solo la frase non interagire con altre parole.";
    }
}

// Attiva il riconoscimento vocale e gestisce l'autorizzazione
async function attivaAscolto() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Il riconoscimento vocale non è supportato da questo browser.');
        return;
    }

    // Verifica lo stato dell'autorizzazione
    let permissionGranted = localStorage.getItem("microphonePermission");

    if (permissionGranted !== "granted") {
        try {
            // Richiede l'autorizzazione al microfono
            await navigator.mediaDevices.getUserMedia({ audio: true });
            localStorage.setItem("microphonePermission", "granted");
        } catch (error) {
            alert("Permesso per il microfono negato. Concedi l'accesso per usare il riconoscimento vocale.");
            return;
        }
    }

    // Avvia il riconoscimento vocale
    let recognition = new webkitSpeechRecognition();
    recognition.lang = 'it-IT';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    document.getElementById("status").innerText = "In ascolto...";

    recognition.onresult = async function (event) {
        let trascritto = event.results[0][0].transcript;
        document.getElementById("status").innerText = "Riconosciuto: " + trascritto;
        generaSuggerimenti(trascritto);
    };

    recognition.onerror = function (event) {
        document.getElementById("status").innerText = "Errore nel riconoscimento vocale: " + event.error;
    };
}

// Genera 6 suggerimenti plausibili usando GPT
async function generaSuggerimenti(testoRiconosciuto) {
    let settings = JSON.parse(localStorage.getItem("ttsSettings"));
    if (!settings.gptApiKey) return alert("Configura l'API GPT nelle impostazioni!");

    document.getElementById("loading").style.display = "block";
    document.getElementById("status").innerText = "Generazione suggerimenti in corso...";

    try {
        const prompt = `A partire da questa frase: "${testoRiconosciuto}", genera 6 risposte plausibili nel contesto di una conversazione dove tu sei la persona a cui è rivolta la frase riconosciuta. Non numerare le frasi.`;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${settings.gptApiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: settings.gptModel,
                messages: [{ role: "system", content: prompt }]
            })
        });

        if (!response.ok) throw new Error("Errore nella generazione dei suggerimenti");

        const result = await response.json();
        let suggerimenti = result.choices[0].message.content.split("\n").filter(f => f.trim() !== "");

        mostraSuggerimenti(suggerimenti.slice(0, 6)); // Mostra le prime 6 risposte
    } catch (error) {
        document.getElementById("status").innerText = "Errore: " + error.message;
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

// Mostra le 6 frasi come bottoni cliccabili senza numerazione
function mostraSuggerimenti(suggerimenti) {
    let suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "<h3>Suggerimenti:</h3>";

    suggerimenti.forEach(frase => {
        let btn = document.createElement("button");
        btn.innerText = frase.trim();
        btn.style.margin = "5px";
        btn.onclick = async function () {
            document.getElementById("textInput").value = frase.trim();
            suggestionsDiv.innerHTML = ""; // Rimuove tutti i suggerimenti dopo la selezione
            await convertiVoce();

            const audioPlayer = document.getElementById("audioPlayer");
            audioPlayer.onended = function () {
                attivaAscolto(); // Riattiva l'ascolto quando l'audio finisce
            };

        };
        suggestionsDiv.appendChild(btn);
    });
}

async function correggiTesto() {
    let text = document.getElementById("textInput").value.trim();
    let settings = JSON.parse(localStorage.getItem("ttsSettings"));
    if (!text || !settings.gptApiKey) return alert("Inserisci un testo e configura l'API GPT");

    document.getElementById("loading").style.display = "block";
    document.getElementById("status").innerText = "";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${settings.gptApiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: settings.gptModel,
                messages: [{ role: "system", content: settings.gptPrompt },
                { role: "user", content: text }]
            })
        });

        if (!response.ok) throw new Error("Errore nella correzione del testo");

        const result = await response.json();
        document.getElementById("textInput").value = result.choices[0].message.content;
        document.getElementById("status").innerText = "Testo corretto!";
    } catch (error) {
        document.getElementById("status").innerText = "Errore: " + error.message;
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

async function convertiVoce() {
    let text = document.getElementById("textInput").value.trim();
    let settings = JSON.parse(localStorage.getItem("ttsSettings"));
    if (!text || !settings.apiKey) return alert("Inserisci un testo e configura l'API ElevenLabs");

    document.getElementById("loading").style.display = "block";
    document.getElementById("status").innerText = "";

    try {
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${settings.voiceId}`, {
            method: "POST",
            headers: { "xi-api-key": settings.apiKey, "Content-Type": "application/json" },
            body: JSON.stringify({ text: text, model_id: settings.modelTTS })
        });

        if (!response.ok) throw new Error("Errore nella generazione audio");

        const audioBlob = await response.blob();
        document.getElementById("audioPlayer").src = URL.createObjectURL(audioBlob);
        document.getElementById("audioPlayer").play();
        document.getElementById("status").innerText = "Audio generato!";
    } catch (error) {
        document.getElementById("status").innerText = "Errore: " + error.message;
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

// Auto-click functionality
document.addEventListener("DOMContentLoaded", function() {
    caricaSettings();
    
    // Trova l'interruttore e il campo per i secondi
    const toggleAutoclick = document.getElementById('toggleAutoclick');
    const durationInput = document.getElementById('autoclickDuration');
    let timers = new Map();

    // Avvia il timer per il clic automatico su un bottone
    function startAutoclick(button) {
        if (!toggleAutoclick.checked) return;
        let duration = parseFloat(durationInput.value) * 1000; // tempo in millisecondi
        let startTime = Date.now();

        // Memorizza il timer e cambia il colore del bottone
        timers.set(button, setInterval(() => {
            let elapsed = Date.now() - startTime;
            let progress = Math.min(elapsed / duration, 1);
            // Il bottone cambia colore da verde a rosso
            let red = Math.floor(255 * progress);
            let green = 255 - red;
            button.style.backgroundColor = 'rgb(' + red + ',' + green + ',0)';
            if (progress >= 1) {
                clearInterval(timers.get(button));
                timers.delete(button);
                button.click();
                button.style.backgroundColor = ''; // torna al colore normale
            }
        }, 50));
    }

    // Ferma il timer e riporta il bottone al colore normale
    function stopAutoclick(button) {
        if (timers.has(button)) {
            clearInterval(timers.get(button));
            timers.delete(button);
            button.style.backgroundColor = ''; // riporta il colore normale
        }
    }

    // Aggiunge gli eventi a tutti i bottoni della pagina
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            startAutoclick(button);
        });
        button.addEventListener('mouseout', () => {
            stopAutoclick(button);
        });
    });
});
