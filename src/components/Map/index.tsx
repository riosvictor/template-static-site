import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const MapElement = () => {
  return (
    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189}}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(MapElement));

const Map: React.FC = () => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,frawing,places`}
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '100%' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}
      />
    </div>
  );
}

export default Map;