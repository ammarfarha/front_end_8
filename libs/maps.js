let cords = [33.498870564933725, 36.30044008530778];
var map = L.map('mymap').setView(cords, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([33.49879781244036, 36.299647303098]).addTo(map);
var marker2 = L.marker([33.49897494883912, 36.30080423407399]).addTo(map);

var circle = L.circle([33.498579554593455, 36.30001524508052], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 20
}).addTo(map);

var polygon = L.polygon([
    [33.49906668004602, 36.300371807414116],
    [33.498804138746564, 36.30017835338206],
    [33.498630165157685, 36.30044008530778],
    [33.498781996672854, 36.300694230800865]
],{
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.2
}).addTo(map);

marker.bindPopup("<b>مشفى!</b><br>شيخ الارض.");
circle.bindPopup("مصرف التسليف الشعبي");
polygon.bindPopup("ساحة باب مصلى");