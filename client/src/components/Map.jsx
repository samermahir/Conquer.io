import { latLngBounds } from "leaflet";
import React from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  Popup,
  ZoomControl,
} from "react-leaflet";

// import { markerColor } from "../utils/marker"

const Map = ({ markers, filters }) => {
  const position = [33.6846, -117.8265];

  return (
    <>
      <div>
        <MapContainer
          style={{ height: "64vh", width: "100%" }}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapInner
            markers={markers.filter((a) => {
              if (filters) {
                return Object.keys(filters).reduce((all, next) => {
                  if (a[next] === filters[next]) {
                    return true;
                  } else {
                    return false;
                  }
                }, true);
              }
              return true;
            })}
          />
          <p>Legend</p>
        </MapContainer>
      </div>
    </>
  );
};

function MapInner({ markers }) {
  const map = useMap();
  //when markers change, update the map
  React.useEffect(() => {
    const bounds = latLngBounds([]);
    if (markers.length > 0) {
      markers.forEach((m) => {
        bounds.extend([m.Latitude, m.Longitude]);
      });
      map.fitBounds(bounds, {
        animate: true,
        easeLinearity: 10,
        duration: 10000,
      });
    }
    console.log("MARKERS", markers);
  }, [markers]);
  console.log(markers);

  return (
    <>
      {/* <MarkerClusterGroup chunkedLoading> */}
      {markers.map((m) => {
        return (
          <Marker icon={m.icon} position={[m.Latitude, m.Longitude]}>
            <Popup>
              {" "}
              {m.Name} <br /> {m.StageName}
            </Popup>
          </Marker>
        );
      })}
      {/* </MarkerClusterGroup> */}
    </>
  );
}

export default Map;
