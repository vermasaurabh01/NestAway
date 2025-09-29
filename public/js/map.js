const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/bright',
    center: window.listing.geometry.coordinates,
    zoom: 10,
});

console.log(window.listing.geometry.coordinates);

const marker = new maplibregl.Marker({ color: "red" })
    .setLngLat(window.listing.geometry.coordinates)
    .setPopup(new maplibregl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))
    .addTo(map);