# React leaflet canvas markers

React wrapper of [Leaflet.Canvas-Markers](
https://github.com/eJuke/Leaflet.Canvas-Markers)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet)


# Description

Leaflet plugin for displaying markers on canvas instead of DOM. Working with Leaflet 1.0.0 and above.

> **Note: Before getting started, please see these useful guides:**
> - [Leaflet Quick Start Guide](http://leafletjs.com/examples/quick-start/).
> - [react-leaflet Installation](https://react-leaflet.js.org/docs/en/installation.html).


# Getting started

**Just download CanvasMarkersLayer.js and leaflet.canvas-markers.js from the src folder and attach it to your component.**
```javascript
import CanvasMarkersLayer from '../src/CanvasMarkersLayer';
```
The `leaflet.canvas-markers.js` in the src folder comes from [Leaflet.Canvas-Markers](
                                                               https://github.com/eJuke/Leaflet.Canvas-Markers),
and it has be modified.

(You can import the source)
```bash
yarn add leaflet-canvas-marker # yarn 
```
in `CanvasMarkersLayer.js`
```javascript
require('../node_modules/leaflet-canvas-marker/src/leaflet.canvas-markers');
```

**Write some simple `react-leaflet` Map:** 
```javascript
<Map center={[22.5774626732038, 114.04924392700197]} zoom={11}>
  <TileLayer
    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />
  <CanvasMarkersLayer>
    <Marker position={[22.5774626732038, 114.04924392700197]} icon={defaultIcon}>
        <Popup>
          <div>hello !</div>
        </Popup>
    </Marker>
  </CanvasMarkersLayer>
</Map>
```

# How to run demo app
**1.** Clone our repo:
```bash
git clone https://github.com/lycheelin/react-leaflet-canvas-markers.git
```

**2.** Install all dependencies:
```bash
yarn install --no-lockfile # yarn
npm install # npm
```

**3.** Start the server:
```bash
yarn example
```

**4.** After starting the server, webpack should automatically open the following address:
```
http://localhost:3000/
```

# License
MIT License