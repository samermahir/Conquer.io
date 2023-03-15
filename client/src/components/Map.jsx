import { latLngBounds } from "leaflet";
import React from "react";
import { MapContainer, Marker, TileLayer, useMap, Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';

const Map = ({ markers }) => {

  const position = [33.6846, -117.8265];
   

  return (
    <div>
      <h1>Map</h1>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />;
        <MapInner markers={markers} />
      </MapContainer>
    </div>
  );
};

function MapInner({ markers }) {
  const map = useMap();
  //when markers change, update the map
  React.useEffect(() => {
    const bounds = latLngBounds([])
    if (markers.length > 0) {
      markers.forEach(m => {
        bounds.extend([m.Latitude, m.Longitude])
      })
      map.fitBounds(bounds, {animate:true, easeLinearity:10, duration:10000})
    }
  }, [markers]);
  return (
    <MarkerClusterGroup
    chunkedLoading>
      {markers.map((m) => (
        <Marker position={[m.Latitude, m.Longitude]}>
          <Popup> {m.Name} <br /> {m.StageName}
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
}

export default Map;
