import React from 'react'
import './HomePage.CSS';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
function MapGoogle() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCzt4u_ij0E4KCRglfCfYxBs7axYsPchJU"
    });

    if (!isLoaded) return <div>loading...</div>;
    return <Map />;
}
function Map() {
    return (
        <GoogleMap
            zoom={10}
            center={{ lat: 44, lng: -80 }}
            mapContainerClassName='map-container'>
        </GoogleMap>
    )
}
export default MapGoogle;