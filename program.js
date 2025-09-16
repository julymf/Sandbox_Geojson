var map = L.map('map');
map.setView([4.628010767310762, -74.06580627094172], 15);

var urlMap = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

var config = {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Línea agregada
};

var layer = L.tileLayer(urlMap, config); // Corregido: L.titleLayer -> L.tileLayer
layer.addTo(map);

async function leerGeoJSON(url) {
    var response = await fetch(url); // Corregido: añadir await
    return response.json();
}

leerGeoJSON('map.geojson').then(data => { // Corregido: manejo de promesas
    const geoLayer = L.geoJSON(data); // Corregido: L.leerGeoJSON -> L.geoJSON
    geoLayer.addTo(map);
});