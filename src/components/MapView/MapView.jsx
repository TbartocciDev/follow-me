import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import "./MapView.css"
const center = {lat: 44, lng: -80}

const mapContainerStyle = {
    width: '100%',
    height: '100%'
};
const mapLibraries = ['places'];

export default function MapView() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        mapLibraries
    });
    if (!isLoaded) {
        return <h2>Loading...</h2>
    }

  return (
      <div className='mapview-div'>
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerStyle={mapContainerStyle}
                id='map'
            >
                <MarkerF position={center}/>
            </GoogleMap>
      </div>
  )
}