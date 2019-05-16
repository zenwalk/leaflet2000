// var map = L.map("map", {
//   //   crs: L.CRS.EPSG4490,
//   //   center: [119.125, 32.9583333335]
// });

// var basemap = L.TileLayer(
//   "http://192.168.90.110:8099/L201904291035165921/{z}/{x}/{y}/tile.png"
// );

// map.addLayer(basemap);
var map = L.map("map", {
  crs: L.CRS.EPSG4490,
  zoom: 9,
  center: [32.047367, 118.745996],
  zoomControl: !1,
  attributionControl: !1,
  minZoom: 1,
  maxZoom: 20
});


// L.tileLayer(
//   "http://218.2.231.246/mapservice/wmts/vector?tilematrix={z}&tilerow={y}&tilecol={x}"
// ).addTo(map);

L.tileLayer(
    "http://192.168.90.110:8099/L201904291035165921/{z}/{x}/{y}/tile.png"
).addTo(map);



// var l = L.mars.layer
//   .createLayer({
//     type: "www_tdt",
//     crs: "EPSG4490",
//     layer: "vec",
//     key: [
//       "313cd4b28ed520472e8b43de00b2de56",
//       "83b36ded6b43b9bc81fbf617c40b83b5",
//       "0ebd57f93a114d146a954da4ecae1e67",
//       "6c99c7793f41fccc4bd595b03711913e",
//       "56b81006f361f6406d0e940d2f89a39c"
//     ]
//   })
//   .addTo(t);
