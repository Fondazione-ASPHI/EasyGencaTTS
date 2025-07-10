var show_settings = false;

// Language translations
const translations = {
    en: {
        title: "Easy GencaTTS @Fondazione ASPHI Onlus",
        placeholder_text: "Write here...",
        gpt_button: "GPT",
        speak_button: "Speak",
        clear_button: "Clear",
        settings_button: "⚙️ Settings",
        fullscreen_button: "🔲 Full Screen",
        conversation_button: "🎤 Conversation",
        instructions_button: "📖 Read Instructions",
        loading_text: "Processing...",
        api_settings_title: "API Settings",
        elevenlabs_api_key: "ElevenLabs API Key:",
        voice_id: "Voice ID:",
        tts_model: "TTS Model:",
        stability: "Stability:",
        similarity_boost: "Similarity Boost:",
        gpt_settings_title: "GPT Settings",
        gpt_api_key: "GPT API Key:",
        gpt_model: "GPT Model:",
        gpt_prompt: "GPT Prompt:",
        save_settings: "Save Settings",
        enable_autoclick: "Enable auto-click",
        duration_seconds: "Duration (sec):",
        // Accessibility labels
        language_selector: "Language:",
        text_input_section: "Text Input",
        text_input_label: "Enter your text here:",
        text_input_help: "Type your text here. Press Enter to convert to speech, or use the buttons below for other actions.",
        action_buttons_section: "Actions",
        gpt_help: "Correct text using AI",
        speak_help: "Convert text to speech",
        clear_help: "Clear the text field",
        settings_help: "Open or close settings panel",
        fullscreen_help: "Toggle full screen mode",
        conversation_help: "Start voice conversation mode",
        instructions_help: "Open instructions in a new tab",
        status_section: "Status and Audio",
        elevenlabs_settings: "ElevenLabs Settings",
        apikey_help: "Enter your ElevenLabs API key for text-to-speech",
        voiceid_help: "Enter the voice ID from ElevenLabs",
        model_help: "Text-to-speech model to use",
        stability_help: "Voice stability from 0 to 1",
        similarity_help: "Voice similarity boost from 0 to 1",
        gptkey_help: "Enter your OpenAI API key for text correction",
        gptmodel_help: "GPT model to use for text correction",
        prompt_help: "Instructions for the AI text correction",
        autoclick_section: "Auto-click Settings",
        autoclick_legend: "Auto-click Configuration",
        autoclick_help: "Automatically activate buttons when hovering",
        duration_help: "Time in seconds before auto-activation",
        privacy_notice_title: "Privacy Notice",
        privacy_notice_strong: "Privacy Notice:",
        privacy_notice_text: "ASPHI Onlus, who hosts this page, never receives or stores any user data. All data remains in your browser and is only sent directly to the AI services you configure (OpenAI/ChatGPT for text processing and ElevenLabs for voice synthesis) when you make requests. Speech recognition is processed locally in your browser.",
        privacy_policies_text: "Please refer to the respective privacy policies of OpenAI and ElevenLabs for information on how they handle your data.",
        openai_link: "OpenAI",
        elevenlabs_link: "ElevenLabs",
        // Status messages
        listening: "Listening...",
        recognized: "Recognized: ",
        generating_suggestions: "Generating suggestions...",
        text_corrected: "Text corrected!",
        audio_generated: "Audio generated and saved in cache!",
        audio_from_cache: "Audio played from cache!",
        settings_saved: "Settings saved!",
        // Error messages
        speech_not_supported: "Speech recognition is not supported by this browser.",
        microphone_denied: "Microphone permission denied. Grant access to use speech recognition.",
        speech_error: "Speech recognition error: ",
        configure_gpt: "Configure GPT API in settings!",
        configure_elevenlabs: "Enter text and configure ElevenLabs API",
        text_correction_error: "Error in text correction",
        audio_generation_error: "Error in audio generation",
        fullscreen_error: "Error activating full screen: ",
        error: "Error: "
    },
    it: {
        title: "Easy GencaTTS @Fondazione ASPHI Onlus",
        placeholder_text: "Scrivi qui...",
        gpt_button: "GPT",
        speak_button: "Parla",
        clear_button: "Cancella",
        settings_button: "⚙️ Impostazioni",
        fullscreen_button: "🔲 Schermo Intero",
        conversation_button: "🎤 Conversazione",
        instructions_button: "📖 Leggi le Istruzioni",
        loading_text: "Elaborazione in corso...",
        api_settings_title: "Impostazioni API",
        elevenlabs_api_key: "ElevenLabs API Key:",
        voice_id: "ID Voce:",
        tts_model: "Modello TTS:",
        stability: "Stability:",
        similarity_boost: "Similarity Boost:",
        gpt_settings_title: "Impostazioni GPT",
        gpt_api_key: "GPT API Key:",
        gpt_model: "Modello GPT:",
        gpt_prompt: "Prompt GPT:",
        save_settings: "Salva Impostazioni",
        enable_autoclick: "Abilita clic automatico",
        duration_seconds: "Durata (sec):",
        // Accessibility labels
        language_selector: "Lingua:",
        text_input_section: "Inserimento Testo",
        text_input_label: "Inserisci qui il tuo testo:",
        text_input_help: "Digita il tuo testo qui. Premi Invio per convertire in voce, o usa i pulsanti sottostanti per altre azioni.",
        action_buttons_section: "Azioni",
        gpt_help: "Correggi il testo usando l'AI",
        speak_help: "Converti il testo in voce",
        clear_help: "Cancella il campo di testo",
        settings_help: "Apri o chiudi il pannello impostazioni",
        fullscreen_help: "Attiva/disattiva modalità schermo intero",
        conversation_help: "Avvia modalità conversazione vocale",
        instructions_help: "Apri le istruzioni in una nuova scheda",
        status_section: "Stato e Audio",
        elevenlabs_settings: "Impostazioni ElevenLabs",
        apikey_help: "Inserisci la tua chiave API ElevenLabs per la sintesi vocale",
        voiceid_help: "Inserisci l'ID voce da ElevenLabs",
        model_help: "Modello di sintesi vocale da utilizzare",
        stability_help: "Stabilità della voce da 0 a 1",
        similarity_help: "Potenziamento similarità voce da 0 a 1",
        gptkey_help: "Inserisci la tua chiave API OpenAI per la correzione testo",
        gptmodel_help: "Modello GPT da usare per la correzione testo",
        prompt_help: "Istruzioni per la correzione AI del testo",
        autoclick_section: "Impostazioni Clic Automatico",
        autoclick_legend: "Configurazione Clic Automatico",
        autoclick_help: "Attiva automaticamente i pulsanti al passaggio del mouse",
        duration_help: "Tempo in secondi prima dell'attivazione automatica",
        privacy_notice_title: "Informativa Privacy",
        privacy_notice_strong: "Informativa Privacy:",
        privacy_notice_text: "Fondazione ASPHI Onlus, che ospita questa pagina, non riceve né memorizza mai alcun dato dell'utente. Tutti i dati rimangono nel tuo browser e vengono inviati direttamente solo ai servizi AI che configuri (OpenAI/ChatGPT per l'elaborazione del testo ed ElevenLabs per la sintesi vocale) quando effettui richieste. Il riconoscimento vocale viene elaborato localmente nel tuo browser.",
        privacy_policies_text: "Consulta le rispettive informative sulla privacy di OpenAI ed ElevenLabs per informazioni su come gestiscono i tuoi dati.",
        openai_link: "OpenAI",
        elevenlabs_link: "ElevenLabs",
        // Status messages
        listening: "In ascolto...",
        recognized: "Riconosciuto: ",
        generating_suggestions: "Generazione suggerimenti in corso...",
        text_corrected: "Testo corretto!",
        audio_generated: "Audio generato e salvato in cache!",
        audio_from_cache: "Audio riprodotto dalla cache!",
        settings_saved: "Impostazioni salvate!",
        // Error messages
        speech_not_supported: "Il riconoscimento vocale non è supportato da questo browser.",
        microphone_denied: "Permesso per il microfono negato. Concedi l'accesso per usare il riconoscimento vocale.",
        speech_error: "Errore nel riconoscimento vocale: ",
        configure_gpt: "Configura l'API GPT nelle impostazioni!",
        configure_elevenlabs: "Inserisci un testo e configura l'API ElevenLabs",
        text_correction_error: "Errore nella correzione del testo",
        audio_generation_error: "Errore nella generazione audio",
        fullscreen_error: "Errore nell'attivazione dello schermo intero: ",
        error: "Errore: "
    }
};

let currentLanguage = 'en'; // Default language

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update the HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder text
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update default GPT prompt based on language
    const gptPrompt = document.getElementById('gptPrompt');
    if (lang === 'it') {
        gptPrompt.value = "Correggi errori di battitura, punteggiatura e grammatica nel testo. Non modificare il significato della frase. Correggi solo la frase. Non interagire con l'utente.";
    } else {
        gptPrompt.value = "Correct typing, punctuation and grammar errors in the text. Do not change the meaning of the sentence. Only correct the sentence. Do not interact with the user.";
    }
}

function getTranslation(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] ? translations[currentLanguage][key] : key;
}

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
            alert(`${getTranslation('fullscreen_error')}${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

function toggleSettings() {
    show_settings = !show_settings;
    let settingsDiv = document.getElementById("settings");
    let settingsButton = document.querySelector('[aria-controls="settings"]');
    
    if (show_settings) {
        settingsDiv.style.display = "block";
        settingsDiv.setAttribute("aria-hidden", "false");
        if (settingsButton) settingsButton.setAttribute("aria-expanded", "true");
        caricaSettings();
    } else {
        settingsDiv.style.display = "none";
        settingsDiv.setAttribute("aria-hidden", "true");
        if (settingsButton) settingsButton.setAttribute("aria-expanded", "false");
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
    alert(getTranslation('settings_saved'));
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
        document.getElementById("gptPrompt").value = settings.gptPrompt || getTranslation('gpt_prompt_default');
    }
}

// Attiva il riconoscimento vocale e gestisce l'autorizzazione
async function attivaAscolto() {
    if (!('webkitSpeechRecognition' in window)) {
        alert(getTranslation('speech_not_supported'));
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
            alert(getTranslation('microphone_denied'));
            return;
        }
    }

    // Avvia il riconoscimento vocale
    let recognition = new webkitSpeechRecognition();
    recognition.lang = currentLanguage === 'it' ? 'it-IT' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    document.getElementById("status").innerText = getTranslation('listening');

    recognition.onresult = async function (event) {
        let trascritto = event.results[0][0].transcript;
        document.getElementById("status").innerText = getTranslation('recognized') + trascritto;
        generaSuggerimenti(trascritto);
    };

    recognition.onerror = function (event) {
        document.getElementById("status").innerText = getTranslation('speech_error') + event.error;
    };
}

// Genera 6 suggerimenti plausibili usando GPT
async function generaSuggerimenti(testoRiconosciuto) {
    let settings = JSON.parse(localStorage.getItem("ttsSettings"));
    if (!settings.gptApiKey) return alert(getTranslation('configure_gpt'));

    document.getElementById("loading").style.display = "block";
    document.getElementById("status").innerText = getTranslation('generating_suggestions');

    try {
        const prompt = currentLanguage === 'it' ? 
            `A partire da questa frase: "${testoRiconosciuto}", genera 6 risposte plausibili nel contesto di una conversazione dove tu sei la persona a cui è rivolta la frase riconosciuta. Non numerare le frasi.` :
            `Based on this sentence: "${testoRiconosciuto}", generate 6 plausible responses in the context of a conversation where you are the person to whom the recognized sentence is addressed. Do not number the sentences.`;

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

        if (!response.ok) throw new Error(getTranslation('error'));

        const result = await response.json();
        let suggerimenti = result.choices[0].message.content.split("\n").filter(f => f.trim() !== "");

        mostraSuggerimenti(suggerimenti.slice(0, 6)); // Mostra le prime 6 risposte
    } catch (error) {
        document.getElementById("status").innerText = getTranslation('error') + error.message;
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

// Mostra le 6 frasi come bottoni cliccabili senza numerazione
function mostraSuggerimenti(suggerimenti) {
    let suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "<h3>" + (currentLanguage === 'it' ? 'Suggerimenti:' : 'Suggestions:') + "</h3>";

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
    if (!text || !settings.gptApiKey) return alert(getTranslation('configure_gpt'));

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

        if (!response.ok) throw new Error(getTranslation('text_correction_error'));

        const result = await response.json();
        document.getElementById("textInput").value = result.choices[0].message.content;
        document.getElementById("status").innerText = getTranslation('text_corrected');
    } catch (error) {
        document.getElementById("status").innerText = getTranslation('error') + error.message;
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

async function convertiVoce() {
    let text = document.getElementById("textInput").value.trim();
    let settings = JSON.parse(localStorage.getItem("ttsSettings"));
    if (!text || !settings.apiKey) return alert(getTranslation('configure_elevenlabs'));

    // Create a unique cache key based on text and voice settings
    const cacheKey = `tts_${settings.voiceId}_${settings.modelTTS}_${btoa(text)}`;
    
    // Check if we have cached audio for this exact text and settings
    const cachedAudio = localStorage.getItem(cacheKey);
    if (cachedAudio) {
        // Use cached audio
        try {
            const audioBlob = dataURItoBlob(cachedAudio);
            document.getElementById("audioPlayer").src = URL.createObjectURL(audioBlob);
            document.getElementById("audioPlayer").play();
            document.getElementById("status").innerText = getTranslation('audio_from_cache');
            return;
        } catch (error) {
            // If cached audio is corrupted, remove it and generate new one
            localStorage.removeItem(cacheKey);
        }
    }

    document.getElementById("loading").style.display = "block";
    document.getElementById("status").innerText = "";

    try {
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${settings.voiceId}`, {
            method: "POST",
            headers: { "xi-api-key": settings.apiKey, "Content-Type": "application/json" },
            body: JSON.stringify({ text: text, model_id: settings.modelTTS })
        });

        if (!response.ok) throw new Error(getTranslation('audio_generation_error'));

        const audioBlob = await response.blob();
        
        // Cache the audio blob as data URI
        const reader = new FileReader();
        reader.onload = function() {
            try {
                // Store in cache, but manage storage size
                manageTTSCache();
                localStorage.setItem(cacheKey, reader.result);
            } catch (error) {
                console.warn("Could not cache audio due to storage limitations:", error);
            }
        };
        reader.readAsDataURL(audioBlob);
        
        document.getElementById("audioPlayer").src = URL.createObjectURL(audioBlob);
        document.getElementById("audioPlayer").play();
        document.getElementById("status").innerText = getTranslation('audio_generated');
    } catch (error) {
        document.getElementById("status").innerText = getTranslation('error') + error.message;
    } finally {
        document.getElementById("loading").style.display = "none";
    }
}

// Helper function to convert data URI to blob
function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: mimeString});
}

// Manage TTS cache to prevent localStorage overflow
function manageTTSCache() {
    const maxCacheEntries = 10; // Keep only last 10 audio files
    const ttsKeys = Object.keys(localStorage).filter(key => key.startsWith('tts_'));
    
    if (ttsKeys.length >= maxCacheEntries) {
        // Remove oldest entries (simple FIFO approach)
        const keysToRemove = ttsKeys.slice(0, ttsKeys.length - maxCacheEntries + 1);
        keysToRemove.forEach(key => localStorage.removeItem(key));
    }
}

// Auto-click functionality and initialization
document.addEventListener("DOMContentLoaded", function() {
    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    currentLanguage = savedLanguage;
    document.getElementById('languageSelect').value = savedLanguage;
    
    // Set up language selector event listener
    document.getElementById('languageSelect').addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    // Apply initial language
    changeLanguage(savedLanguage);
    
    // Load other settings
    caricaSettings();
    
    // Auto-click functionality
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
