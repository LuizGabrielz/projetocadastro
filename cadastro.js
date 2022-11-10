"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 50;
var cron; 

function start() {
    cron =setInterval(() => {timer(); }, tempo);
}

function pause() {
    clearInterval(cron);

} 

function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer() { 
    ss++;

    if(ss == 60) {
        ss = 0;
        mm++;

        if (mm == 60) { 
            mm = 0;
            hh++;
        } 
    }  

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    document.getElementById('counter').innerText = format; 
}
   
$(function(){

    var copia = document.querySelector("#tabela tbody").outerHTML;

    $(".form button").on("click", function(){
     const form = document.querySelector('.form');
        var atividade = [];

        const nomeusuario = form.querySelector('.nomeusuario');
        const nomeatividade = form.querySelector('.nomeatividade');
        const tipoatividade = form.querySelector('.tipoatividade');

        atividade.push({
            nomeusuario: nomeusuario.value,
            nomeatividade: nomeatividade.value,
            tipoatividade: tipoatividade.value

        }); 

        var row = tbody.insertRow(0);
                row.innerHTML = `
                <tr>
                <td>${nomeusuario.value}</td> 
                <td>${nomeatividade.value}</td>  
                <td>${tipoatividade.value}</td>  
                </tr> `    
    });  
})