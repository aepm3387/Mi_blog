
    const pantalla = document.getElementById("pantalla");


    function agregar(valor) {
      if (pantalla.value == "0") {
        pantalla.value = valor; 
      } else {
        pantalla.value += valor; 
      }
    }

    function borrar() {
      pantalla.value = "0"; 
    }

    function calcular() {
      try {
        pantalla.value = eval(pantalla.value); 
      } catch (error) {
        pantalla.value = "Error"; 
      }
    }
