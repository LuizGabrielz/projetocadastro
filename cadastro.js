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
        var tabelaatividade = [];

        const usuario = form.querySelector('#usuario');
        const atividade = form.querySelector('#atividade');
        const tipoatividade = form.querySelector('#tipoatividade');
      
        
        tabelaatividade.push({
            usuario: usuario.value,
            atividade: atividade.value,
            tipoatividade: tipoatividade.value

        }); 

        var row = tbody.insertRow(0);
                row.innerHTML = `
                <tr>
                <td>${usuario.value}</td> 
                <td>${atividade.value}</td>  
                <td>${tipoatividade.value}</td>  
                </tr> `    
    });  
})
 
