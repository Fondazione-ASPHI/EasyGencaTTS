📘 Manuale d'uso di Easy GencaTTS @Fondazione ASPHI Onlus

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

