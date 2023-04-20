import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Button } from "react-bootstrap";
import "../../assets/css/mapStyle.css";

const containerStyle = {
  width: '40vh',
  height: '50vh'
};

const center = {
  lat: 40.89744,
  lng: -74.70528
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
};

export default function Map() {
  const [map, setMap] = useState(null);
  const [search, setSearch] = useState('');

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: search }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  return (
    <>
      <div className="map-card">
        {/* <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}> */}
        <LoadScript googleMapsApiKey="AIzaSyA27s-N83UCA21lplvWegheVkKZ0HGBAdM">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onMapLoad}
            options={options}
          >
            <Marker position={center} />
          </GoogleMap>
          <form onSubmit={onSearchSubmit} className="mapForm">
            <input type="text" className="mapInput" value={search} onChange={(event) => setSearch(event.target.value)} />
            <Button type="submit">Search</Button>
          </form>
        </LoadScript>
      </div>
    </>
  );
};