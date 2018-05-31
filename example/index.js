import React from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import CanvasMarkersLayer from '../src/CanvasMarkersLayer';
import L from 'leaflet';
import markerIcon from './img/marker-icon.png';

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize:    [24, 41],
  iconAnchor:  [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
})
class MapExample extends React.Component {
  onMarkerClick(e, marker) {
    this.props.onMarkerClick && this.props.onMarkerClick(e, marker);
  }
  renderMarkers(){
    const dataLength = 10000;
    const data = Array(...Array(dataLength)).map((_,i)=>(
      {pos:[22.5774626732038 + Math.random() - 0.5, 114.04924392700197+ Math.random() - 0.5],num:i}
    ));
    return data.map((item) => {
      return (<Marker key={item.num} position={item.pos} icon={defaultIcon} properties={item}>
        <Popup>
          <div><strong>num：</strong><span>{item.num}</span></div>
        </Popup>
      </Marker>);
    });
  }
  render() {
    return (
      <div>
        <Map center={[22.5774626732038, 114.04924392700197]} zoom={11}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <CanvasMarkersLayer onMarkerClick={(e, marker) => this.onMarkerClick(e, marker)} dataKey='properties'>
            {this.renderMarkers()}
          </CanvasMarkersLayer>
        </Map>
      </div>
    );
  }

}

render(<MapExample />, document.getElementById('app'));
