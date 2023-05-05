import '../Routers.css';
import React from 'react'
import Menubar from '../../components/Menubar';
import './HomePage.css';
import MapGoogle from './GoogleMap';

function HomePage() {
    return (
        <>
            <Menubar title="หน้าหลัก" />
            <div className="container-route">
                <MapGoogle onLoad={map => {
                    const bounds = new window.google.maps.LatLngBounds();
                    map.fitBounds(bounds);
                }}
                    onUnmount={map => {
                        // do your stuff before map is unmounted
                    }} />

                {/* <div className='status-zone'>
                    <h3>Zone</h3>
                </div>
                <div className='status-stroke'>
                    <h3>Historical Stroke</h3>
                </div> */}
            </div>
        </>
    );
}
export default HomePage;