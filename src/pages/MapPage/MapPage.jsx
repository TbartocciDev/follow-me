import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
const center = {lat: 44, lng: -80}

export default function MapPage() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.MAPS_API_KEY,
      libraries: ['places']
    });
    if (!isLoaded) {
        return <h2>Loading...</h2>
    }

    const locations = [
        {
          title: 'First',
          location: {lat: 46.5653, lng: -66.4619},
          index: 0
        },
        {
          title: 'Second',
          location: {lat: 40.5684, lng: -74.5385},
          index: 1
        },
        {
          title: 'Third',
          location: {lat: 40.5940, lng: -74.6049},
          index: 2
        },
      ]

    return (
        <main>
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName='map-container'
                id='map'
            >
                {locations.map((location) => (
                <MarkerF position={location.location} key={location.index} title={location.title}/>
                ))}
            </GoogleMap>
        </main>
    )
}