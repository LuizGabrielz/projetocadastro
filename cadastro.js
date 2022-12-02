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
   
 
var teste = 0;

function salvarDados(){
  var usuario  = document.getElementById("input-usuario").value;
  var atividade     = document.getElementById("input-atividade").value;
  var tipoatividade = document.getElementById("input-tipoatividade").value;  
    
  

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


    relogio.innerHTML = criaHoraDosSegundos(0);
    clearInterval(timer);
    limparCampos(); 
    
  }else {
    alert('Todos os campos precisam estar preenchidos !!');
    } 
}

function limparCampos(){
  var usuario = document.getElementById("input-usuario");
  var atividade = document.getElementById("input-atividade");
  var tipoatividade = document.getElementById("input-tipoatividade");

  usuario.value = '';
  atividade.value = '';
  tipoatividade.value = '';
  
}   

function deletar(botao) {
  var tabela = document.getElementById('tabela');
  
 tabela.deleteRow(botao.parentNode.rowIndex); 

} 

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tabela"); 
  switching = true; 
 
  while (switching) {
    switching = false;
    rows = table.rows;
   
    for (i = 1; i < (rows.length - 1); i++) {
     
      shouldSwitch = false;
     
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
     
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
     
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}  