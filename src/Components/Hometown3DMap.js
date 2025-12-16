import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxExample = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZmFiaWFuaGVsbG8iLCJhIjoiY203YmwxbTdhMGY3ZTJsb3NjcTB6aDB4aiJ9.wZdikO-UfEWpRCngV5ttpw';

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-80.4001, 25.6077],
        zoom: 12,
        pitch: 0, 
      });
  }, []); 

  return <div ref={mapContainerRef} className="map-container" />;
};

export default MapboxExample;
