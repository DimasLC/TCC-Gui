const map = L.map('mapid').setView([000 ,000], 2);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var rj = L.marker([-22.951754, -43.210751]).addTo(map)     
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var ny = L.marker([40.689248, -74.04453]).addTo(map) 
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var cn = L.marker([37.48576, 103.456128]).addTo(map) 
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var ind = L.marker([27.172774, 78.041655]).addTo(map)
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var pr = L.marker([-13.163141, -72.544963]).addTo(map)
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var itl = L.marker([41.89021, 12.492231]).addTo(map)
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var aut = L.marker([-33.85712, 151.215153]).addTo(map)
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var fra = L.marker([48.85837, 2.294481]).addTo(map)
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var egi = L.marker([29.976480, 31.131302]).addTo(map)
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 

var gre = L.marker([37.971532, 23.725749]).addTo(map)
.bindPopup("<h1>Marker</h1> <p> lorem </p> <img  width='190' height='190' src='./img-trip/imagem-italia.jpg' />")
.addTo(map)
.openPopup(); 






