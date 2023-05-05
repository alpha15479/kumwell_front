import React, { useEffect, useState } from 'react'
import {  Marker } from '@react-google-maps/api';
import Red from './../../image/Red-Cloud.png'
import Orange from './../../image/Orange-Cloud.png'
import Yellow from './../../image/Yellow-Cloud.png'
function MarkerAPI({ id, onDelete, imgMarker }) {
    const [time, setTime] = useState(0);
    const [items, setItems] = useState([]);
    const [loaded, setLoad] = useState(null)
    const fetchData = () => {
        const url = `https://www.melivecode.com/api/attractions`;
        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(result => setItems(result))}

    useEffect(() => {
        fetchData();
        setLoad(true);
        let intervalId = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    
    if (time >= 0) { imgMarker = Red }
    if (time >= 10) { imgMarker = Orange }
    if (time >= 20) { imgMarker = Yellow }
    if (time >= 30) { onDelete(id); }

    return (
        <>
            {items.map((AllMarker) => (
                <div key={AllMarker.id}>
                    {loaded ? <>
                        <Marker 
                        position={{lat: AllMarker.latitude, lng: AllMarker.longitude}}
                        icon={{
                                url: imgMarker,
                                scaledSize: new window.google.maps.Size(40, 40),
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(20, 40)
                            }}/>
                    </> : 
                    <>
                    </>}
                </div>
            ))}
        </>
    );
}
export default MarkerAPI;