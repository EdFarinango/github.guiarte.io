const valores = [];
const val= [];
const posicion = 1;

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


  /*if (val.length == 0) {
    var lista=document.getElementById("list-values")
    var contenido = document.createTextNode("lista vacia");
    var linew= document.createElement("li");

    lista.appendChild(linew);
    linew.appendChild(contenido);

  }*/



}

function renderMediaAritmetica(){
  switchFormula();
}

function switchFormula(){
  let valoresSelect = document.getElementById("formulaSelect").value;
  if (valoresSelect == 1) {
    let sum = val.reduce((previous, current) => current += previous);
    let avg = sum / val.length;
    console.log(avg);
    var info = window.confirm('La media aritmetica es  ' + avg);
  }else if (valoresSelect == 2) {
    let temp = 1;

    for (var i = 0; i < val.length; i++) {
      temp = temp+(1/val[i]);
    }

    res = temp
    console.log(res)
    var info = window.confirm('La media armonica es ' + res);

  }else if (valoresSelect == 3) {
    let mult = val.reduce((p,c)=>p*c);
    console.log(mult)
    let mediaG = Math.pow(mult, 1 / val.length);
    console.log(mediaG);
    var info = window.confirm('La media geometrica es ' + mediaG);
  }else if (valoresSelect ==4) {
    const lista1Count = {};

  val.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
  );

  let valAux= Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
  );

  const moda = valAux[valAux.length - 1];
  console.log(moda);
  var info = window.confirm('La moda es ' + moda);

}else if (valoresSelect == 5) {

  let mitadLista1 = parseInt(val.length / 2);

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(val.length)) {
    let elemento1 = val[mitadLista1 - 1];
    let elemento2 = val[mitadLista1];

    let promedioElemento1y2 = (elemento1+elemento2)/2;

    mediana = promedioElemento1y2;
    console.log(mediana);
    var info = window.confirm('La mediana es ' + madiana);
  } else {
    mediana = val[mitadLista1];
    console.log(mediana);
    var info = window.confirm('La mediana es ' + madiana);
  }




}

    //case 2:
        /*let temp =1;
        for (var i = 0; i < val.length; i++) {
          temp = temp*val[i];
        }
        let temp2 = Math.pow(temp,(1/length(val)))
        res = temp2
        console.log(res)*/


}
