const MailUser = prompt("inserisci la tua mail ");
const lista =[ "gabriele@gmail.com", "js@gmail.com", "pipposempre@gmail.com", ];

let NomeNellaLista = false;
for (let i=0; i< lista.length; i++) {
    if (MailUser === lista[i]) {
        NomeNellaLista = true;
    }
}
if (NomeNellaLista === true){
    document.getElementById('risposta').innerHTML="email  trovata";
   

} else {
    document.getElementById('risposta').innerHTML="email non trovata";
    
}