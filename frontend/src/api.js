function obtenerArticulos() {
    return fetch('http://3.12.111.144:3000/api/articulos')
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

function GetArticulosByGenero(genero) {
    return fetch(`http://3.12.111.144:3000/api/articulos?gender=${genero}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

export { obtenerArticulos, GetArticulosByGenero };