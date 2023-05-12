import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MarkerAPI from './Marker';
const containerStyle = {
  width: '100%',
  height: '90vh'
}
const center = {
  lat: 35.3606422,
  lng: 138.7186086
}

function MapGoogle() {
  const [items, setItems] = useState([]);
  const [map, setMap] = useState(null)
  const [isLoad, setIsLoad] = useState('');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA5V4tiC61LWYwNCAQ0GsiMXEOjMsgp2NI",
  })

  const fetchData = () => {
    const url = `https://www.melivecode.com/api/attractions`;
    fetch(url, { method: 'GET' })
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoad(true);
        })}
  
  const handleDelete = (id) => {
    setItems((prevData) => prevData.filter((item) => item.id !== id));
  };
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(() => {
    fetchData();
  }, []);
  return isLoaded ? 
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        // onLoad={onLoad}
        onUnmount={onUnmount}>

        {items.map((item) => (
          <div key={item.id}><MarkerAPI key={item.id} id={item.id} onDelete={handleDelete} /></div>
        ))}

        <></>

      </GoogleMap>
    </> : 
    <>
    </>
}
export default React.memo(MapGoogle)