import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxExample = () => {
    const mapContainerRef = useRef();
    const mapRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZmFiaWFuaGVsbG8iLCJhIjoiY203YmwxbTdhMGY3ZTJsb3NjcTB6aDB4aiJ9.wZdikO-UfEWpRCngV5ttpw';

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [-80.4001,25.6077], // starting position [lng, lat]
            zoom: 12 // starting zoom
        });
    });

    return (
        <div
            style={{ height: '100%' }}
            ref={mapContainerRef}
            className="map-container"
        />
    );
};

export default MapboxExample;