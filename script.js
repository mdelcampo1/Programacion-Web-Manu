window.addEventListener("load", function(){
	document.getElementById("viewAlerta").addEventListener("click", function(){
	  var emailInput = document.getElementById("exampleFormControlInput1");
	  var email = emailInput.value;
	  
	  if (email === "") {
		alert("Por favor, ingresa tu correo electrónico.");
		return;
	  }
	  
	  // Verificar si el email tiene un formato válido
	  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  if (!emailPattern.test(email)) {
		alert("Por favor, ingresa un correo electrónico válido.");
		return;
	  }
	  
	  // Si pasa todas las validaciones, mostrar el mensaje de solicitud enviada
	  alert("Solicitud enviada! Dentro de poco tendrás novedades en tu casilla de correo.");
	})  
  })

/* cuenta regresiva */

var fechaObjetivo = new Date("2023-07-27T12:00:00");

function actualizarContador() {
  var fechaActual = new Date();

  var diferencia = fechaObjetivo - fechaActual;

  var segundos = Math.floor(diferencia / 1000) % 60;
  var minutos = Math.floor(diferencia / (1000 * 60)) % 60;
  var horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  var contadorTexto = dias + " días, <br>" + horas + " horas, <br>" + minutos + " minutos, <br>" + segundos + " segundos";
  document.getElementById("contador").innerHTML = contadorTexto;
}

setInterval(actualizarContador, 1000);
