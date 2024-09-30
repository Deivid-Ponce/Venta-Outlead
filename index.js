const btnAceptar = document.getElementById("Aceptar");
const btnAgendar = document.getElementById("btnAgendar");
let contador = 0;

btnAceptar.addEventListener("click", () => {
    let name = document.getElementById("name");
    let numFolio = document.getElementById("folio");
    let informacion = document.getElementById("information");
    let horario = document.getElementById("time");
    const valor = name.value.trim();
    const horas = document.getElementById("horarios");


    if (valor === "") {
        console.error("Introduza primero su nombre");
        alert("Introduzca primero su nombre");
    } else if (horas.options.length === 0) {
        Swal.fire({
            title: "Horario no disponible",
            icon: "error"
        })
    }
    else {
        numFolio.innerHTML = `${name.value = name.value.toUpperCase()} Su numero de folio es #${++contador}`;
        informacion.innerHTML = `Dirección: NA, 67250 Cdad. Benito Juárez, N.L.`
        horario.innerHTML = `Horario   **08:00 - 16:00 Sabado 19 de Octubre**`
    }
    btnAgendar.addEventListener("click", () => {
        let name = document.getElementById("name");
        const horas = document.getElementById("horarios");
        const valor = name.value.trim();


        if (valor === "") {
            console.error("Introduza primero su nombre");
        } else if (horas.options.length === 0) {
            Swal.fire({
                title: "Horario no disponible",
                icon: "error"
            });
        }
        else {


            Swal.fire({
                title: "Orden Agendada!",
                text: `Numero de folio #${contador} a nombre de ${name.value} en el horario ${horas.value}`,
                icon: "success",
                imageUrl: "https://grupolamosa.com/default/img/logo-lamosa.png"
            });
            name.value = "";
            numFolio.innerHTML = "";
            informacion.innerHTML = "";
            horario.innerHTML = "";
            localStorage.setItem(`Comprador ${valor}`, `Hora ${horas.value}`);
            horas.remove(horas.selectedIndex);
        }
    })

})

const select = document.getElementById('horarios');


function generarHorarios() {
    const inicio = 8;
    const fin = 16;

    for (let hora = inicio; hora <= fin; hora++) {
        for (let minutos = 0; minutos < 60; minutos += 30) {
            const option = document.createElement('option');
            const formatoHora = hora < 10 ? `0${hora}` : hora;
            const formatoMinuto = minutos < 10 ? `0${minutos}` : minutos;
            const horaTexto = `${formatoHora}:${formatoMinuto}`;
            option.value = horaTexto;
            option.text = horaTexto;
            select.appendChild(option);
        }
    }
}
generarHorarios();