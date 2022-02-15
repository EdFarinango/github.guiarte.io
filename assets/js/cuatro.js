const valores = [];
const val= [];
const posicion = 1;
const valoresPre = [1200,3100,450,620,890,750,562];

function addListNumber(){
  let valor = parseInt(document.getElementById("addValue").value);
  if(valor>0){
  valores.unshift(valor);
  val.push(valor);
  console.log (val);

  var lista=document.getElementById("list-values")
  var contenido = document.createTextNode(valores[0]);
  var linew= document.createElement("li");

  lista.appendChild(linew);
  linew.appendChild(contenido);



  console.log(contenido)
  document.getElementById("addValue").value = " ";
}else {
  var info = window.confirm("Debe ingresar un valor");

}
}

function check(){
for (var i = 0; i < valoresPre.length; i++) {
  var lista=document.getElementById("list-values-default")
  var contenido = document.createTextNode(valoresPre[i]);
  var linew= document.createElement("li");

  lista.appendChild(linew);
  linew.appendChild(contenido);

}
}

function removeListNumber(){
  let valorDelet = (parseInt(document.getElementById("removeValue").value)-1) ;
  let aux = val[valorDelet];

  let pos = val.indexOf(aux);
  console.log(pos);
  console.log(aux);
  //eliminar un array
  function removeItemFromArr ( val, aux ) {
    var i = val.indexOf( aux );

    if ( i !== -1 ) {
        val.splice( i, 1 );
    }
  }

  removeItemFromArr( val, aux );
  console.info( val );
  var info = window.confirm('Se removera el valor numero ' + aux);
  var valor=document.getElementById("list-values").getElementsByTagName("li");
  console.log( valor[pos]);
  //elimina li segun la posición del elemto del array que eliminamos.
  document.getElementById('list-values').removeChild(valor[pos]);

}

function switchFormula(){
  let avg
  let valoresSelect = document.getElementById("formulaSelect").value;
  if (valoresSelect == 1) {
    let sum = val.reduce((previous, current) => current += previous);
    avg = sum / val.length;
    console.log(avg);
    var info = window.confirm('La media salaria es  ' + avg);
  }else if (valoresSelect == 2) {
    let perc = ((avg*10)/100)
    console.log(perc);
  }




}
