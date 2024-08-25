window.addEventListener('message', function(event) {
    const data = event.data;

    if (data.action === 'updateSpeedo') {
        const velocidadElemento = document.querySelector('.valor-velocidad');
        velocidadElemento.textContent = data.speed;

        const gasolinaLleno = document.querySelector('.gasolina-lleno');
        const rpmLleno = document.querySelector('.rpm-lleno');
        const iconoGasolina = document.querySelector('.barra-gasolina i');

        const maxRpm = 10000;

        gasolinaLleno.style.strokeDashoffset = `${100 - data.fuel}`;
        rpmLleno.style.strokeDashoffset = `${100 - (data.rpm / maxRpm) * 100}`;

        if (data.fuel < 25) {
            iconoGasolina.style.color = '#ff0000';
            iconoGasolina.classList.add('animacion-gasolina-baja');
        } else {
            iconoGasolina.style.color = '#ffffff';
            iconoGasolina.classList.remove('animacion-gasolina-baja');
        }
    }

    if (data.action === 'toggleSpeedo') {
        const contenedorVelocimetro = document.querySelector('.contenedor-velocimetro');
        if (data.show) {
            contenedorVelocimetro.style.display = 'flex';
            contenedorVelocimetro.classList.remove('oculto');
            contenedorVelocimetro.classList.add('visible');
        } else {
            contenedorVelocimetro.classList.remove('visible');
            contenedorVelocimetro.classList.add('oculto');
            setTimeout(() => {
                contenedorVelocimetro.style.display = 'none';
            }, 750);
        }
    }
});
