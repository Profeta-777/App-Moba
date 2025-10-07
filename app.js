const saudacao = document.getElementById('saudacao');
const frase = document.getElementById('frase');
const icone = document.getElementById('icone');

const fraseManha = [
     "Aquele que demora a levantar, mais demora a construir seu futuro.",
     "A preguiça é sua maior inimiga, e ela é a unica que pode condena-lo ao fracasso!",
     "O melhor modo de amanhecer, que agradeçendo a Deus por mais um dia com vida.",
     "Enquanto uns dormem pela manhã, outros estão correndo atrás de seus objetivos",
     "O quão antes você realizar suas tarefas, cedo será seu descanso!"
];
const fraseTarde = [
     "Não deixe para fazer depois, o que se pode fazer agora... Ou pode ser tarde de mais...",
     "Uma das coisas mais valiosas que possuimos, é o tempo. Então, aproveite-o enquanto ainda há tempo!",
     "Nunca é Tarde para aceitar Jesus. Ele estará aguardando-o.... Até que ele retorne.",
     "A tarde é um dos momentos mais prazerosos para se aproveitar durante o dia.",
     "Quem tarde dorme, cedo madruga."
];
const fraseNoite = [
     "Deus fez o dia para que o homem trabalhasse, e criou a noite para que o homem descansasse.",
     "Só damos valor a nossa cama, quando temos que lavantar ao amanhecer...",
     "Para manter um ciclo constante de dias com uma excelente produtividade, é necessario um bom descanso para repor as energias",
     "Até mesmo as maquinas necessitam de descanso às vezes. Então por que você não precisaria?",
     "Assim como as maquinas quebram se trabalharem excessivamente, o ser humano adoece se não descansar..."
];

function atualizaSaudacao() {
     const hoje = new Date();
     const hora = hoje.getHours();
     let msgSaudacao, imgFundo, imgIcone, frasesDoMomento;
     if (hora >= 5 && hora <11) {
          msgSaudacao = 'Bom Dia!';
          imgFundo = "url(sunbackground.jpg)";
          imgIcone = "sol.png";
          frasesDoMomento = fraseManha
     }
     else if (hora >=12 && hora <18) {
          msgSaudacao = 'Boa Tarde!!';
          imgFundo = "url(tardebackground.jpg)";
          imgIcone = "nuvem.png";
          frasesDoMomento = fraseTarde
     }
     else {
          msgSaudacao = 'Boa Noite!!!';
          imgFundo = "url(nigthbackground.jpg)";
          imgIcone = "lua-e-estrelas.png";
          frasesDoMomento = fraseNoite
     }
     saudacao.textContent = msgSaudacao;
     document.body.style.backgroundImage = imgFundo;
     icone.src = imgIcone;
     const randomIndex = Math.floor(Math.random()*frasesDoMomento.length);
     frase.textContent = frasesDoMomento[randomIndex];
 }
 atualizaSaudacao();
 setInterval(atualizaSaudacao,20000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Erro no Service Worker:", err));
}