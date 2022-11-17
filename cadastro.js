function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const finalizar = document.querySelector('.finalizar');
var tabelaatividade = []; 
let segundos = 0;
let timer; 

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000) 
    
}
 
iniciar.addEventListener('click', function(event) { 
    relogio.classList.remove('pausado'); 
    clearInterval(timer);
    iniciaRelogio(); 
});   
 
pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

finalizar.addEventListener('click', function(event) {
 
    
});     


$(function(){

    const tbody = document.querySelector(".teste");

    $(".finalizar").on("click", function(){
     const form = document.querySelector('.form'); 

        const usuario = form.querySelector('#usuario');
        const atividade = form.querySelector('#atividade');
        const tipoatividade = form.querySelector('#tipoatividade');
        
    
        tabelaatividade.push({
            usuario: usuario.value,
            atividade: atividade.value,
            tipoatividade: tipoatividade.value, 
            relogio: relogio.innerHTML
            
        
        });

        var row = tbody.insertRow(0); 
                row.innerHTML = `
                <tr>
                <td>${usuario.value}</td> 
                <td>${atividade.value}</td>  
                <td>${tipoatividade.value}</td>   
                <td>${relogio.innerHTML}</td>   
                </tr> `    
    });  
}) 


// funcao ordenar

function Ordernar() {
  var arrayOrdenado = array.sort()
  
  const tbody = document.querySelector(".teste");

  for  (var i = 0; i < arrayOrdenado.length; i++)  {

  };
    


  var row = tbody.insertRow(0); 
    row.innerHTML = `
    <tr>
    <td>${usuario}</td> 
    <td>${atividade}</td>  
    <td>${tipoatividade}</td>   
    <td>${relogio}</td>   
    </tr> `    
  }









