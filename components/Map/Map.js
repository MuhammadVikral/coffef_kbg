import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import style from "./Map.module.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";

export default function Map() {
  const position = [-6.216507516726577, 106.76857088133973];

  return (
    <MapContainer
      className={"h-48 w-full"}
      center={position}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          KBG. <br /> Office.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
