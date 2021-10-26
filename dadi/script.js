const DadoGiocatore = Math.floor(Math.random() * 6) + 1;
const Dadopc =Math.floor(Math.random() * 6) + 1;

if (DadoGiocatore > Dadopc ) {
    document.getElementById("lancia").innerHTML = `Hey, hai  vinto, il tuo risultato é   ${DadoGiocatore} contro ${Dadopc} del pc` ;
}

else if (DadoGiocatore < Dadopc) {
    document.getElementById("lancia").innerHTML = `Ritenta, hai  perso, il tuo risultato é   ${DadoGiocatore} contro ${Dadopc} del pc `;
} 

else if(DadoGiocatore === Dadopc) {
    document.getElementById("lancia").innerHTML = `Parità,  il tuo risultato (${DadoGiocatore}) e quello del pc (${Dadopc}) sono uguali `;
}
