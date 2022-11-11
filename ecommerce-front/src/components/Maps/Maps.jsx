import React from 'react';
import GoogleMaps from 'simple-react-google-maps';


function Maps() {
  return (
    <div>
        <GoogleMaps
        apiKey={'AIzaSyC3krpSUcW5LC-fv-aSYMho5-ZmDS_POYk'}
        style={{ height: '500px', width:'370px' }}
        zoom={15}
        center={{
            lat: -27.475045,
            lng:  -58.855619
        }}
        markers={[{lat: -27.475045, lng:  -58.855619}]}
        />
    </div>
  )
}

export default Maps