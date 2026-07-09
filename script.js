// EVENTO: Escuchar el clic en el botón de calcular
document.getElementById('btn-calcular').addEventListener('click', function () {

    // 1. OBTENCIÓN DE ENTRADAS (INPUTS)
    const selectPelicula = document.getElementById('pelicula');
    const precioPelicula = parseFloat(selectPelicula.value);

    const inputCantidad = document.getElementById('cantidad');
    const cantidad = parseInt(inputCantidad.value);

    // Capturar el radio seleccionado
    const asientoSeleccionado = document.querySelector('input[name="asiento"]:checked');

    // 2. VALIDACIÓN INICIAL
    const mensajeAlerta = document.getElementById('mensaje-alerta');

    if (!precioPelicula || isNaN(cantidad) || cantidad <= 0) {
        mensajeAlerta.textContent = "Por favor, selecciona una película y una cantidad válida de boletos.";
        mensajeAlerta.classList.remove('oculto');
        return;
    } else {
        mensajeAlerta.classList.add('oculto');
    }

    // 3. LÓGICA DE CÁLCULO

    // Subtotal de boletos
    let subtotalBoletos = precioPelicula * cantidad;

    // Cargo por asiento
    let cargosAsiento = 0;

    if (asientoSeleccionado && asientoSeleccionado.value === "vip") {
        cargosAsiento = cantidad * 50;
    }

    // Combos
    let totalSnacks = 0;

    const comboPalomitas = document.getElementById('combo-palomitas');
    const comboHotdog = document.getElementById('combo-hotdog');
    const comboPareja = document.getElementById('combo-pareja');

    if (comboPalomitas.checked) {
        totalSnacks += parseFloat(comboPalomitas.value);
    }

    if (comboHotdog.checked) {
        totalSnacks += parseFloat(comboHotdog.value);
    }

    if (comboPareja.checked) {
        totalSnacks += parseFloat(comboPareja.value);
    }

    // Total final
    let totalFinal = subtotalBoletos + cargosAsiento + totalSnacks;

    // 4. Mostrar resultados
    document.getElementById('resumen-boletos').textContent =
        "$" + subtotalBoletos.toFixed(2) + " MXN";

    document.getElementById('resumen-asiento').textContent =
        "$" + cargosAsiento.toFixed(2) + " MXN";

    document.getElementById('resumen-snacks').textContent =
        "$" + totalSnacks.toFixed(2) + " MXN";

    document.getElementById('total-pagar').textContent =
        "$" + totalFinal.toFixed(2) + " MXN";
});
