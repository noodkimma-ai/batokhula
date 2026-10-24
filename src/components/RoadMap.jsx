
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  { name: "Kathmandu", position: [27.7172, 85.324] },
  { name: "Pokhara", position: [28.2096, 83.9856] },
  { name: "Itahari", position: [26.6637, 87.274] },
  { name: "Biratnagar", position: [26.4525, 87.2718] },
];

export default function RoadMap() {
  return (
    <MapContainer
      center={[27.7, 85.3]}
      zoom={7}
      scrollWheelZoom
      className="h-full min-h-[480px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />

      {locations.map((location) => (
        <Marker
          key={location.name}
          position={location.position}
          icon={markerIcon}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
