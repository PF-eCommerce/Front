import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  height: "500px",
  width: "370px",
};

const center = {
  lat: -27.475045,
  lng: -58.855619,
};

const markers = [
  {
    lat: -27.475045,
    lng: -58.855619,
  },
];

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });

  const [_map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        markers={markers}
      ></GoogleMap>
    </div>
  ) : null;
}

export default Maps;
