📘 Manuale d'uso di Easy GencaTTS @Fondazio📍 Nota: OpenAI offre un credito iniziale gratuito al momento della registrazione, ma una volta esaurito, sarà necessario pagare in base all'utilizzo.
________________________________________
🔒 PRIVACY E SICUREZZA
Easy GencaTTS è progettato con la massima attenzione alla privacy dell'utente:

🛡️ **Privacy Notice Completa:**
Fondazione ASPHI Onlus, che ospita questa pagina, non riceve né memorizza mai alcun dato dell'utente. Tutti i dati rimangono nel tuo browser e vengono inviati direttamente solo ai servizi AI che configuri (OpenAI/ChatGPT per l'elaborazione del testo ed ElevenLabs per la sintesi vocale) quando effettui richieste. Il riconoscimento vocale viene elaborato localmente nel tuo browser.

🔐 **Sicurezza delle API Key:**
• **Archiviazione Locale**: Le tue chiavi API sono salvate esclusivamente nel localStorage del tuo browser
• **Nessuna Trasmissione Esterna**: ASPHI non ha accesso alle tue chiavi API - rimangono solo sul tuo dispositivo
• **Comunicazione Diretta**: Quando usi l'app, i dati vengono inviati direttamente dal tuo browser ai server di OpenAI/ElevenLabs
• **Controllo Completo**: Puoi cancellare le chiavi in qualsiasi momento eliminando i dati del browser

🏠 **Elaborazione Locale:**
• Il riconoscimento vocale utilizza le API native del browser (Web Speech API)
• Nessun audio viene inviato a server esterni per il riconoscimento
• L'audio generato può essere memorizzato nella cache locale per risparmiare token

⚠️ **Raccomandazioni di Sicurezza:**
• **Usa dispositivi personali** per inserire le API key: su dispositivi condivisi o pubblici, altri utenti potrebbero accedere alle tue chiavi salvate nel browser e utilizzare i tuoi crediti API
• Non condividere le tue chiavi API con altri
• Monitora regolarmente l'utilizzo nei dashboard di OpenAI ed ElevenLabs
• Considera di usare chiavi API con limiti di spesa configurati
________________________________________ ASPHI Onlus

Easy GencaTTS è un semplice comunicatore che permette di supportare nella comunicazione le persone con disabilità. Si può scrivere con la tastiera fisica o le tastiere virtuali (anche con puntatore oculare) in un campo di testo.  
Si basa su un codice HTML con JavaScript per un'interfaccia di sintesi vocale e correzione del testo, sviluppata dalla Fondazione ASPHI Onlus. L'app usa le API di ElevenLabs per la conversione testo-voce (TTS) e di OpenAI per correggere errori grammaticali e di punteggiatura.
Questo semplice comunicatore può girare su pc, tablet o su smartphone connessi a internet e si apre con qualsiasi Browser Web (consigliato Google Chrome)

• Inserimento del testo: L'utente può scrivere o incollare del testo.
• Correzione automatica: Il bottone "GPT" invia il testo all'API di OpenAI per correggerlo (ortografia, errori di battitura, omissioni di lettere e spazi, ecc.). Dall’interfaccia settings il prompt può essere modificato o cambiato del tutto.
• Sintesi vocale: Il bottone "Parla" usa ElevenLabs per generare un audio con sintesi vocale del testo. In ElevenLabs si trovano voci molto naturali e con i piani a pagamento si possono anche creare sintesi vocali clonate a partire dalla voce naturale di una persona.
• Impostazioni personalizzabili: Permette di inserire chiavi API, ID voce e parametri di qualità vocale e cambiare le istruzioni per il correttore GPT (ad esempio facendo traduzioni ad altre lingue o altre elaborazioni creative del testo).
• Clic automatico: Attiva automaticamente i pulsanti dopo un certo tempo al passaggio del mouse (da utilizzare per chi usa emulatori di mouse o non riesce a cliccare)
• Funzione Conversazione: attiva il microfono per accedere a quel che viene detto intorno al dispositivo. Propone automaticamente 6 frasi plausibili e contestuali generate da GPT. 


________________________________________
🔧 1. Requisiti iniziali
Per utilizzare l'applicazione, servono due chiavi API (non comprese nel comunicatore):
•	Chiave API di ElevenLabs per la conversione testo-voce (TTS).
•	Chiave API di OpenAI (GPT) per la correzione del testo.
📍 Nota Importante:
Le chiavi API vengono salvate in locale sul browser del PC o dello smartphone utilizzato. Non vengono inviate a server esterni o salvate su cloud, ma restano memorizzate sul dispositivo per comodità dell’utente. Se cancelli la cronologia o svuoti la cache del browser, dovrai reinserirle.
________________________________________
🔑 2. Come ottenere le API e i relativi costi
✅ A. Ottenere la chiave API di ElevenLabs
1.	Vai su ElevenLabs.
2.	Clicca su "Sign Up" per creare un account o accedi con il tuo profilo.
3.	Accedi alla sezione "API" dal menu personale.
4.	Crea e copia la tua chiave API.
💰 Costi di ElevenLabs:
•	Piano gratuito: Include fino a 10.000 caratteri al mese (circa 1.500 parole).
•	Piani a pagamento:
o	A partire da 5 $ al mese per circa 30.000 caratteri.
o	Piani superiori offrono più caratteri, qualità vocale avanzata e la possibilità di clonare la propria voce in modalità professionale.
________________________________________
✅ B. Ottenere la chiave API di OpenAI (GPT)
1.	Vai su OpenAI.
2.	Crea un account o accedi con le tue credenziali.
3.	Nella sezione "API Keys", clicca su "Create new secret key" e copia la chiave.
💰 Costi di OpenAI:
•	GPT-3.5-Turbo:
o	Circa 0,0015 $ per 1.000 token (equivalente a circa 750 parole).
•	GPT-4 :
o	Circa 0,03 $ per 1.000 token per l'elaborazione.
📍 Nota: OpenAI offre un credito iniziale gratuito al momento della registrazione, ma una volta esaurito, sarà necessario pagare in base all’utilizzo.
________________________________________
⚙️ 3. Come configurare l'applicazione
1.	Avvia l’applicazione HTML in un browser (Google Chrome è consigliato).
2.	Clicca su ⚙️ Settings per aprire il pannello delle impostazioni.
3.	Inserisci le tue chiavi API:
o	ElevenLabs API Key: Incolla la chiave di ElevenLabs.
o	GPT API Key: Incolla la chiave di OpenAI.
4.	Imposta i parametri:
o	ID Voce: Inserisci l’ID della voce desiderata (puoi trovarlo su ElevenLabs).
o	Modello TTS: Il valore predefinito è eleven_flash_v2_5 che è un buon compromesso tra qualità e costo in crediti.
o	Stability e Similarity Boost: Imposta valori da 0 a 1 per regolare la qualità della voce.
5.	Modifica il Prompt GPT se vuoi personalizzare il tipo di elaborazione e/o correzione del testo.
Il prompt di default, pensato per aiutare una persona con difficoltà nella fluidità di digitazione, è il seguente: 
“Correggi errori di battitura, punteggiatura e grammatica nel testo. Non modificare il significato della frase. Correggi solo la frase. Non interagire con l'utente.” 

 Esempi alternativi:
o	"Riformula il testo in modo più semplice e diretto."
o	"Adatta il testo per un pubblico giovane."
o	“Correggi e traduci in…”
6.	Clicca su Salva Impostazioni per confermare.
________________________________________
🖋️ 4. Come usare le funzioni principali
1.	Scrivi o incolla il testo nell’area con il segnaposto "Scrivi qui...".
2.	Premi i pulsanti:
o	🧠 GPT: Corregge errori di battitura, grammatica e punteggiatura.
o	🔊 Parla: Converte il testo in voce utilizzando ElevenLabs.
o	❌ Cancella: Pulisce il campo di testo.
o	⚙️ Settings: Apre le impostazioni.
o	🔲 Schermo Intero: Attiva/disattiva la modalità a schermo intero.
o	🎤 Conversazione: Attiva il microfono per ascoltare quello che viene detto e proporre frasi di risposta o replica contestuale tra cui scegliere.


________________________________________
🏁 5. Funzioni avanzate
🖱️ Clic automatico
1.	Attiva l’opzione "Abilita clic automatico".
2.	Imposta il tempo di attivazione automatica in secondi.
3.	Passa il mouse sopra un pulsante per attivarlo automaticamente al termine del conto alla rovescia.
🛠️ Modificare il prompt GPT
Nel campo "Prompt GPT" puoi scrivere istruzioni personalizzate. Ecco alcuni esempi:
•	"Correggi gli errori e rendi il testo più formale."
•	"Riscrivi il testo in uno stile semplice e comprensibile."
•	"Adatta il testo per lettori con difficoltà di comprensione."
________________________________________
🚩 6. Risoluzione dei problemi
Problema	Soluzione
Errore nella generazione audio	Verifica la chiave API di ElevenLabs e controlla il saldo di caratteri disponibili.
Errore nella correzione del testo	Controlla la chiave API di OpenAI e il modello selezionato.
Il clic automatico non funziona	Controlla se l'opzione è attivata e se la durata è impostata correttamente.
________________________________________
📩 7. Consigli utili
•	Le chiavi API sono salvate solo in locale sul tuo dispositivo: non vengono trasmesse o archiviate esternamente.
•	Salva sempre le impostazioni dopo aver inserito le chiavi API.
•	Verifica i limiti di utilizzo gratuiti per evitare costi extra.
•	Personalizza il prompt GPT in base alle tue esigenze di correzione o semplificazione del testo.

---

# 📘 Easy GencaTTS User Manual @Fondazione ASPHI Onlus

Easy GencaTTS is a simple communicator that helps support communication for people with disabilities. You can type using a physical keyboard or virtual keyboards (including eye-tracking pointers) in a text field.  
It's based on HTML code with JavaScript for a text-to-speech and text correction interface, developed by Fondazione ASPHI Onlus. The app uses ElevenLabs APIs for text-to-speech (TTS) conversion and OpenAI for correcting grammatical and punctuation errors.
This simple communicator can run on PCs, tablets, or smartphones connected to the internet and opens with any web browser (Google Chrome recommended).

• Text input: Users can write or paste text.
• Automatic correction: The "GPT" button sends text to OpenAI's API for correction (spelling, typing errors, missing letters and spaces, etc.). The prompt can be modified or completely changed through the settings interface.
• Speech synthesis: The "Speak" button uses ElevenLabs to generate audio with text-to-speech synthesis. ElevenLabs offers very natural voices, and with paid plans, you can also create cloned speech synthesis from a person's natural voice.
• Customizable settings: Allows you to enter API keys, voice IDs, and voice quality parameters, and change instructions for the GPT corrector (for example, making translations to other languages or other creative text processing).
• Auto-click: Automatically activates buttons after a certain time when hovering the mouse (to be used by those who use mouse emulators or cannot click).
• Conversation function: Activates the microphone to access what is being said around the device. Automatically suggests 6 plausible and contextual sentences generated by GPT.

________________________________________
🔧 1. Initial Requirements
To use the application, you need two API keys (not included with the communicator):
•	ElevenLabs API key for text-to-speech (TTS) conversion.
•	OpenAI (GPT) API key for text correction.
📍 Important Note:
API keys are saved locally in the browser of the PC or smartphone used. They are not sent to external servers or saved to the cloud, but remain stored on the device for user convenience. If you clear your browser history or empty the cache, you will need to re-enter them.
________________________________________
🔑 2. How to obtain APIs and related costs
✅ A. Getting the ElevenLabs API key
1.	Go to ElevenLabs.
2.	Click "Sign Up" to create an account or log in with your profile.
3.	Access the "API" section from the personal menu.
4.	Create and copy your API key.
💰 ElevenLabs Costs:
•	Free plan: Includes up to 10,000 characters per month (about 1,500 words).
•	Paid plans:
o	Starting from $5 per month for about 30,000 characters.
o	Higher plans offer more characters, advanced voice quality, and the ability to clone your own voice professionally.
________________________________________
✅ B. Getting the OpenAI (GPT) API key
1.	Go to OpenAI.
2.	Create an account or log in with your credentials.
3.	In the "API Keys" section, click "Create new secret key" and copy the key.
💰 OpenAI Costs:
•	GPT-3.5-Turbo:
o	About $0.0015 per 1,000 tokens (equivalent to about 750 words).
•	GPT-4:
o	About $0.03 per 1,000 tokens for processing.
📍 Note: OpenAI offers a free initial credit upon registration, but once exhausted, you'll need to pay based on usage.
________________________________________
🔒 PRIVACY AND SECURITY
Easy GencaTTS is designed with maximum attention to user privacy:

🛡️ **Complete Privacy Notice:**
Fondazione ASPHI Onlus, who hosts this page, never receives or stores any user data. All data remains in your browser and is only sent directly to the AI services you configure (OpenAI/ChatGPT for text processing and ElevenLabs for voice synthesis) when you make requests. Speech recognition is processed locally in your browser.

🔐 **API Key Security:**
• **Local Storage**: Your API keys are saved exclusively in your browser's localStorage
• **No External Transmission**: ASPHI has no access to your API keys - they remain only on your device
• **Direct Communication**: When you use the app, data is sent directly from your browser to OpenAI/ElevenLabs servers
• **Complete Control**: You can delete the keys anytime by clearing your browser data

🏠 **Local Processing:**
• Speech recognition uses native browser APIs (Web Speech API)
• No audio is sent to external servers for recognition
• Generated audio can be cached locally to save tokens

⚠️ **Security Recommendations:**
• **Use personal devices** to enter API keys: on shared or public devices, other users could access your keys saved in the browser and use your API credits
• Do not share your API keys with others
• Regularly monitor usage in OpenAI and ElevenLabs dashboards
• Consider using API keys with configured spending limits
________________________________________
⚙️ 3. How to configure the application
1.	Launch the HTML application in a browser (Google Chrome is recommended).
2.	Click ⚙️ Settings to open the settings panel.
3.	Enter your API keys:
o	ElevenLabs API Key: Paste the ElevenLabs key.
o	GPT API Key: Paste the OpenAI key.
4.	Set the parameters:
o	Voice ID: Enter the desired voice ID (you can find it on ElevenLabs).
o	TTS Model: The default value is eleven_flash_v2_5 which is a good compromise between quality and credit cost.
o	Stability and Similarity Boost: Set values from 0 to 1 to adjust voice quality.
5.	Modify the GPT Prompt if you want to customize the type of text processing and/or correction.
The default prompt, designed to help a person with typing fluency difficulties, is: 
"Correct typing, punctuation and grammar errors in the text. Do not change the meaning of the sentence. Only correct the sentence. Do not interact with the user." 

Alternative examples:
o	"Rephrase the text in a simpler and more direct way."
o	"Adapt the text for a young audience."
o	"Correct and translate to..."
6.	Click Save Settings to confirm.
________________________________________
🖋️ 4. How to use the main functions
1.	Write or paste text in the area with the placeholder "Write here...".
2.	Press the buttons:
o	🧠 GPT: Corrects typing, grammar, and punctuation errors.
o	🔊 Speak: Converts text to speech using ElevenLabs.
o	❌ Clear: Clears the text field.
o	⚙️ Settings: Opens the settings.
o	🔲 Full Screen: Activates/deactivates full screen mode.
o	🎤 Conversation: Activates the microphone to listen to what is being said and suggest contextual response or reply sentences to choose from.

________________________________________
🏁 5. Advanced features
🖱️ Auto-click
1.	Enable the "Enable auto-click" option.
2.	Set the automatic activation time in seconds.
3.	Hover the mouse over a button to activate it automatically at the end of the countdown.
🛠️ Modifying the GPT prompt
In the "GPT Prompt" field you can write custom instructions. Here are some examples:
•	"Correct errors and make the text more formal."
•	"Rewrite the text in a simple and understandable style."
•	"Adapt the text for readers with comprehension difficulties."
________________________________________
🚩 6. Troubleshooting
Problem	Solution
Audio generation error	Check the ElevenLabs API key and verify available character balance.
Text correction error	Check the OpenAI API key and selected model.
Auto-click doesn't work	Check if the option is enabled and if the duration is set correctly.
________________________________________
📩 7. Useful tips
•	API keys are saved only locally on your device: they are not transmitted or stored externally.
•	Always save settings after entering API keys.
•	Check free usage limits to avoid extra costs.
•	Customize the GPT prompt based on your text correction or simplification needs.

