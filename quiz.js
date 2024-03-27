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


// function that asks for a username and check it's not blank or all spaces
function askUsername(){
    // variable to store the name of the user
    let name = ''
    // !name means if the variable name is not null\empty.
    // we use trim to remove extra spaces before and after the string.
    // as a bonus, if a string is only composed by spaces, trim remove them and we have a null\empty string
    while(!name.trim()){
        name = prompt("Insert your username")
        // same check as before. if the name is not valid, we say so.
        if (!name.trim()){
            alert("Username not valid. Insert a new one!")
        }
        else{
            // otherwise we greet the user
            alert(`Nice to see you, ${name}!`)
        }
    }    
}

// function to ask a single question (stored in the array of questions). q is a single object of type question
function askQuestion(q){
    alert(q.question)
    // we will use this variable to store the prompt. We start by adding to it the starting phrase
    let promptMessage = 'Choose the right answer (input the corresponding number)!\n'
    // then we cycle thorough the options of the question
    for (let i of q.options){
        // for each option, we create a string with the id and text of the option
        let stringaDaConcatenare = `${i.id}. ${i.text}\n`
        // then we add it to the end of the initial string
        promptMessage += stringaDaConcatenare
    }
    // finally, we use the string thus created as an input for the prompt
    let risposta = prompt(promptMessage)

    if(risposta === q.answer){
        alert("Risposta esatta")
    }
    else{
        alert("Risposta Sbagliata")
    }

}

// calling the first function to ask for a username
askUsername()

// cycling through the questions array and calling the askQuestion function
for (let i of questions){
    askQuestion(i)
}