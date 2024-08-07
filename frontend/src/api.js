function obtenerArticulos() {
    return fetch('http://18.191.177.3:3000/api/articulos')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

function GetArticulosByGenero(genero) {
    return fetch(`http://18.191.177.3:3000/api/articulos?gender=${genero}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

export { obtenerArticulos, GetArticulosByGenero };