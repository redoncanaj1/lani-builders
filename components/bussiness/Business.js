
import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '220px'
};

const center ={
    lat:52.3883285 , // Replace with your business address latitude
    lng:-1.9827698 , // Replace with your business address longitude
  };

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC-Y8ZP2riclJQkT3SLUxsr2QKfYIU4vnQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const businessAddress = {
    lat:52.3883285 , // Replace with your business address latitude
    lng:-1.9827698 , // Replace with your business address longitude
  };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={businessAddress} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)