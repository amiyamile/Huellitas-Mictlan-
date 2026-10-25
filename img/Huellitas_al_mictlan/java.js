const contenedorPetalos = document.getElementById("petalos");

if (!contenedorPetalos) {
    throw new Error('No se encontró el contenedor de pétalos "#petalos".');
}

const cantidadPetalos = 24;

for (let i = 0; i < cantidadPetalos; i += 1) {
    const petalo = document.createElement("img");
    const tamano = Math.random() * 25 + 15;
    const duracion = Math.random() * 12 + 12;

    petalo.src = "img/petalos.png";
    petalo.className = "petalo";
    petalo.alt = "";
    petalo.style.left = `${Math.random() * 100}vw`;
    petalo.style.width = `${tamano}px`;
    petalo.style.animationDuration = `${duracion}s`;
    petalo.style.animationDelay = `${-Math.random() * duracion}s`;

    contenedorPetalos.appendChild(petalo);
}
