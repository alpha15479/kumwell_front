import '../Routers.css';
import React from 'react'
import Menubar from '../../components/Menubar';

import MapGoogle from './GoogleMap';
function HomePage() {

    return (
        <>
            <Menubar title="หน้าหลัก" />
            <div className="container-route">
                <MapGoogle />
            </div>
        </>
    );
}
export default HomePage;