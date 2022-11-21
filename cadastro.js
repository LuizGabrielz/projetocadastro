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
  clearInterval(timer);
    relogio.classList.add('finaliza'); 
});     
    
 
 

var teste = 0;

function salvarDados(){
  var usuario  = document.getElementById("usuario").value;
  var atividade     = document.getElementById("atividade").value;
  var tipoatividade = document.getElementById("tipoatividade").value;
    
  

  if (!(usuario == '' || atividade == '' || tipoatividade == '' )) {  
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td"); 
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var btn = document.createElement("button");                 
    td1.innerHTML = usuario; 
    td2.innerHTML = atividade;
    td3.innerHTML = tipoatividade;
    td4.innerHTML = relogio.innerHTML
    btn.innerHTML = "deletar"; 
      
    btn.setAttribute('onclick', 'deletar(this)');

    tr.appendChild(td1); 
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);        
    tr.appendChild(btn);
    tr.id = 'linha' + teste; 
    teste++;
    document.getElementById("tabela").appendChild(tr);

    limparCampos();
  }else {
    alert('Todos os campos precisam estar preenchidos !!');
    }
}
function limparCampos(){
  var usuario     = document.getElementById("nome");
  var atividade      = document.getElementById("valor");
  var tipoatividade = document.getElementById("vencimento");
  relogio.innerHTML
  
  
  usuario.value       = '';
  atividade.value      = '';
  tipoatividade.value = '';
  relogio.innerHTML  = '';
}

function deletar(botao) {
  var tabela = document.getElementById('tabela');
  
 tabela.deleteRow(botao.parentNode.rowIndex); 

}
 


 












