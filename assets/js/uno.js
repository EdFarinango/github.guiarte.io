const pi = 3.1416;
function calcularPerimetroTriangulo() {
  let ladoa = parseInt(document.getElementById("inputTriangulo1").value);
  let ladob = parseInt(document.getElementById("inputTriangulo2").value);
  let base = parseInt(document.getElementById("inputBase").value);
  let perimetro = ladoa+ladob+base;
  var resultado = window.confirm('El perimetro es ' + perimetro);
  console.log(perimetro);
}

function calcularAreaTriangulo() {
  let altura = parseInt(document.getElementById("inputAltura").value);
  let base = parseInt(document.getElementById("inputBase").value);
  let area = (base*altura)/2
  var resultado = window.confirm('El area es es ' + area);
  console.log(area);
}

function calcularPerimetroCuadrado() {
  let lado = parseInt(document.getElementById("inputCuadrado").value);
  let perimetro = (lado*4)
  var resultadoP = window.confirm('El perimetro es ' + perimetro);
  console.log(perimetro);
}

function calcularAreaCuadrado() {
  let lado = parseInt(document.getElementById("inputCuadrado").value);
  let area = (lado*lado)
  var resultadoA = window.confirm('El Area es ' + area);
  console.log(area);
}

function calcularPerimetroRectangulo() {
  let ladoa = parseInt(document.getElementById("inputRectangulo1").value);
  let ladob = parseInt(document.getElementById("inputRectangulo2").value);
  let perimetro = 2*(ladoa+ladob)
  var resultadoT = window.confirm('El perimetro es ' + perimetro);
  console.log(perimetro);
}

function calcularAreaRectangulo() {
  let ladoa = parseInt(document.getElementById("inputRectangulo1").value);
  let ladob = parseInt(document.getElementById("inputRectangulo2").value);
  let area = (ladoa*ladob)
  var resultadoT = window.confirm('El Area es ' + area);
  console.log(area);
}

function calcularPerimetroCirculo() {
  let radio = parseInt(document.getElementById("inputCirculo").value);

  let perimetro = 2*pi*radio
  var resultadoT = window.confirm('El perimetro es ' + perimetro);
  console.log(perimetro);
}
function calcularAreaCirculo() {
  let radio = parseInt(document.getElementById("inputCirculo").value);
  let perimetro = radio*radio*pi
  var resultadoC = window.confirm('El área es ' + perimetro);
  console.log(perimetro);
}

function calcularDiametroCirculo() {
  let radio = parseInt(document.getElementById("inputCirculo").value);
  let diametro = radio+radio
  var resultadoT = window.confirm('El diametro es ' + diametro);
  console.log(area);
}
