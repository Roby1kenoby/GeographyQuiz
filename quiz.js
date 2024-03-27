/*
Traccia: un quiz di geografia per niente scontato.
Il quiz è composto da un array di 4 domande, ciascuna con 4 opzioni di risposta.

Lo script chiede innanzitutto di inserire uno username, se l'username e' valido, inizia il quiz.

Pone prima la domanda con un alert, poi mostra le 4 opzioni di risposta con un prompt, chiedendo di inserire il numero della risposta corretta.

Se la risposta è corretta, mostra un alert di conferma, altrimenti un alert di errore.

Quando l'utente risponde a tutte le domande, mostra un alert con il punteggio ottenuto e inserisce username e punteggio in un array classifica.

Alla fine del quiz, mostra un alert con il punteggio ottenuto e la classifica generale.

Se l'utente vuole, può fare un'altra partita con un altro username, altrimenti il gioco finisce con un messaggio di ringraziamento.
Milestone 1:
creare una funzione che chiede all'utente di inserire uno username e restituisce lo username inserito, se lo username inserito è vuoto o composto solo da spazi, chiedere di inserire uno username valido
creare una funzione che dato un oggetto domanda, mostra un alert con il testo della domanda e un prompt con le 4 opzioni di risposta, chiedendo di inserire il numero della risposta corretta

Milestone 2:
nella funzione che chiede all'utente di rispondere alla domanda, se la risposta è corretta, restituire true, altrimenti restituire false
creare un ciclo che per ogni domanda, chiede all'utente di rispondere e aggiorna il punteggio in base alla risposta corretta
alla fine del ciclo, mostrare un alert con il punteggio ottenuto e inserire username e punteggio in un array classifica
mostrare la classifica in un alert
 Milestone 3 (bonus):
 
Alla fine del quiz, se l'utente vuole, può fare un'altra partita con un altro username
Se l'utente decide di fare un'altra partita, ricominciare il gioco con un nuovo username, che verrà inserito in classifica una volta terminato il quiz
Se l'utente decide di non fare un'altra partita, mostrare un alert di ringraziamento
*/

const questions = [
    {
      question: "What is the capital of France?",
      options: [
        {
          id: 1,
          text: "Paris",
        },
        {
          id: 2,
          text: "London",
        },
        {
          id: 3,
          text: "Rome",
        },
        {
          id: 4,
          text: "Madrid",
        },
      ],
      answer: 1,
    },
    {
      question: "What is the capital of Italy?",
      options: [
        {
          id: 1,
          text: "Paris",
        },
        {
          id: 2,
          text: "London",
        },
        {
          id: 3,
          text: "Rome",
        },
        {
          id: 4,
          text: "Madrid",
        },
      ],
      answer: 3,
    },
    {
      question: "What is the capital of Spain?",
      options: [
        {
          id: 1,
          text: "Paris",
        },
        {
          id: 2,
          text: "London",
        },
        {
          id: 3,
          text: "Rome",
        },
        {
          id: 4,
          text: "Madrid",
        },
      ],
      answer: 4,
    },
    {
      question: "What is the capital of England?",
      options: [
        {
          id: 1,
          text: "Paris",
        },
        {
          id: 2,
          text: "London",
        },
        {
          id: 3,
          text: "Rome",
        },
        {
          id: 4,
          text: "Madrid",
        },
      ],
      answer: 2,
    },
  ];



function askUsername(){
    let name = ''
    while(!name.trim()){
        name = prompt("Insert your username")
        if (!name.trim()){
            alert("You have to insert your username!")
        }
        else{
            alert(`Hello ${name}!`)
        }
    }    
}

function askQuestion(q){
    alert(q.question)
    let promptMessage = 'Choose the righe answer (input the corresponding number)!\n'
    for (let i of q.options){
        console.log('sono dentro al ciclo for delle opzioni, stampo l\'opzione i')
        console.log(i)
        let stringaDaConcatenare = `${i.id}. ${i.text}\n`
        promptMessage += stringaDaConcatenare
    }
    let risposta = prompt(promptMessage)
    if(risposta === q.answer){
        alert("Risposta esatta")
    }
    else{
        alert("Risposta Sbagliata")
    }

}

askUsername()

for (let i of questions){
    askQuestion(i)
}