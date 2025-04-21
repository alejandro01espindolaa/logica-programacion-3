function calcularFactorial() {
    const input = document.getElementById("numero");
    const resultado = document.getElementById("resultado");
    const valor = input.value.trim();
  
    // Validación
    if (valor === "" || isNaN(valor) || !Number.isInteger(Number(valor)) || Number(valor) < 0) {
      resultado.textContent = "❌ Por favor, ingresa un número entero positivo válido.";
      resultado.style.color = "red";
      return;
    }
  
    const numero = Number(valor);
    let factorial = 1;
  
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    resultado.textContent = `✅ El factorial de ${numero} es ${factorial}.`;
    resultado.style.color = "green";
  }
  