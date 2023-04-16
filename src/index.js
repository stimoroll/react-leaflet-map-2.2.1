import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer } from "react-leaflet";
import Control from "react-leaflet-control";

import "./styles.css";

function App() {
  return (
    <Map zoom={13} center={[53.8008, -1.5491]}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Control position="topright">
        <div className="so">Top Right Control</div>
      </Control>
    </Map>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
