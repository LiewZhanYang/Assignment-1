var map = new maptiler.Map("map", {
    center: [103.7578, 1.5476], // Longitude and latitude of Tebrau, Johore, Malaysia
    zoom: 13,
    key: '9tLUj0ZuQYqxTLAWYXWv'
});

var marker = new maptiler.Marker()
    .setLngLat([103.7578, 1.5476]) // Longitude and latitude of the marker
    .addTo(map);
