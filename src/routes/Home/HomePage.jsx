import '../Routers.css';
import React from 'react'
import Menubar from '../../components/Menubar';

import MapGoogle from './GoogleMap';
function HomePage() {

    return (
        <>
            <Menubar title="หน้าหลัก" />
            <div className="container-route">

                <MapGoogle   onLoad={map => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  }}
  onUnmount={map => {
    // do your stuff before map is unmounted
  }}/>
            </div>
        </>
    );
}
export default HomePage;