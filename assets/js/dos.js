function calcularPrecio(){
  let descuentoPro
  let precio = parseInt(document.getElementById("inputPrice").value);
  let desc = parseInt(document.getElementById("inputDiscount").value);
  let cupon = document.getElementById("inputCoupon").value;

  if (cupon == "Promo10"){
    descuentoPro =  10
    let sumd = (desc) +descuentoPro
    let resultado =precio-((precio*sumd)/100);
    var precioFinal = window.confirm('El precio final es ' + resultado);
    console.log(resultado);
  }else if (cupon =="Promo20") {
    descuentoPro = 20
    let sumd = (desc) +descuentoPro
    let resultado =precio-((precio*sumd)/100);
    var precioFinal = window.confirm('El precio final es ' + resultado);
    console.log(resultado);
  } else if (cupon == "Promo30") {
    descuentoPro = 30
    let sumd = (desc) +descuentoPro
    let resultado =precio-((precio*sumd)/100);
    var precioFinal = window.confirm('El precio final es ' + resultado);
    console.log(resultado);
  } else {
    var info = window.confirm("no existe ese descuento");
  }




}
