var resultado = document.querySelector('div.resultado')
var mostrarcarne = document.getElementById('qntcarne')
var mostrarcarnepp = document.getElementById('carnepp')
var mostrarcerveja = document.getElementById('qntcerveja')
var mostrarcervejapp = document.getElementById('cervejapp')
var mostrarbebida = document.getElementById('qntbebida')
var mostrarbebidapp = document.getElementById('bebidapp')
var botao = document.getElementById('botao')
botao.addEventListener("click", calcChurras)

function calcChurras(){
    botao.innerHTML = '<img src="firebutton.png">Recalcular'
    let adultos = Number(document.getElementById('adultos').value)
    let criancas = Number(document.getElementById('criancas').value)
    let duracao = Number(document.getElementById('duracao').value)
    let carnepp = duracao>6?this.value=650:this.value=400
    let cervejapp = duracao>6?this.value=2000:this.value=1200
    let bebidaspp = duracao>6?this.value=1500:this.value=1000
    /* 
    Variaveis definidas, vamos entrar nos cálculos agora!
    lembrando que crianças valem por 0.5!
    */
   let totalpessoas = ((criancas/2)+adultos)
   let qntcarne = totalpessoas*carnepp/1000
   let qntcerveja = Math.ceil((adultos*cervejapp)/350)
   let qntbebidas = Math.ceil(totalpessoas*bebidaspp/2000)
    /* Cálculos feitos, vamos mostrar na tela o resultado! */
   resultado.style.visibility = "visible"
   if ((adultos <= 0 && criancas <= 0) || adultos < 0 || criancas < 0){
    alert('Ninguem vai para seu churrasco? Que triste :(')
    resultado.style.visibility = "hidden"
    }
   if (duracao <= 0){
       alert('Que festa rápida, hein? Informe quantas horas seu churrasco vai durar!')
       resultado.style.visibility = "hidden"
   }
   mostrarcarne.innerText = qntcarne
   mostrarcarnepp.innerText = carnepp
   mostrarcerveja.innerText = qntcerveja
   mostrarcervejapp.innerText = cervejapp
   mostrarbebida.innerText = qntbebidas
   mostrarbebidapp.innerText = bebidaspp
}

