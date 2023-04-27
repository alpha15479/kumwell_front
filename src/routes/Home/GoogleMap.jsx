import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '90vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapGoogle() {
  const [user, setUsers] = useState();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "KEYAPI",
  })
  
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const fetchUserData = () => {
    fetch("https://www.melivecode.com/api/attractions")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
 console.log(user)

  useEffect(() => {
    fetchUserData();
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {
        <Marker position={center} />
      }
      <></>
    </GoogleMap>
  ) : <></>
}
export default React.memo(MapGoogle)