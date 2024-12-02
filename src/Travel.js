import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import geoIcon from './icons/geo.svg'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api'

export default function Travel() {
  const locations = [
    { lat: 36.2048, lng: 138.2529, name: "Japan Central" },
    { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
    { lat: 35.0116, lng: 135.7681, name: "Kyoto" },
    { lat: 34.6937, lng: 135.5023, name: "Osaka" }
  ];

  function wrapDate(d){
    return new Date(d)
	}
	function getTimeLocal(){
		return new Date()
	}

  const now = getTimeLocal()
	const [JPTime, setJP] = useState('');
	const [LocalTime, setLocal] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [curCenter, setCenter] = useState(locations[0]);
  const [userSun, setSun] = useState(wrapDate(now.setDate(now.getDate() - now.getDay())))

  function getTimeJP(){
		return new Date(new Date().toLocaleString('en-US', {timeZone:'Asia/Tokyo'}))
	}

	function timeupdate(){
		setInterval(function(){
			setJP('Time in Japan Right now ' + (getTimeJP().getHours() % 12 === 0 ? 1 : getTimeJP().getHours() % 12) + ":" + (getTimeJP().getMinutes() < 10 ? "0" + getTimeJP().getMinutes() : getTimeJP().getMinutes()) + ":" + (getTimeJP().getSeconds() < 10 ? "0" + getTimeJP().getSeconds() : getTimeJP().getSeconds()) +" " + (getTimeJP().getHours()<12 ? "AM" : "PM\n"))
			setLocal('Local Time Right now ' + (getTimeLocal().getHours() % 12 === 0 ? 1 : getTimeLocal().getHours() % 12) + ":" + (getTimeLocal().getMinutes() < 10 ? "0" + getTimeLocal().getMinutes() : getTimeLocal().getMinutes()) + ":" + (getTimeLocal().getSeconds() < 10 ? "0" + getTimeLocal().getSeconds() : getTimeLocal().getSeconds())+ " " + (getTimeLocal().getHours()<12 ? "AM" : "PM"))
		}, 500)
	}
	//timeupdate()
	// function InnerComponent(){
	// 	const map = useMap()
	// 	useEffect(() => {
  //     setMap(map); // Set the map reference only once
  //   }, [map]);
	// 	return null
	// }

	// var myIcon = L.icon({
	// 	iconUrl: geoIcon,
	// 	iconSize: [50,50]
	// })

	// function newLocation(){
	// 	TheMap.setView(locations[0])
	// }

	const containerStyle = {
	  width: '100vw',
	  height: '90vh',
	}

	const center = {
	  lat: 34.6937,
	  lng: 135.5023 // Default center of the map (Osaka)
	};

	const markerPosition = {
	  lat: 35.6762,
	  lng: 139.6503 // Example marker position (Tokyo)
	};
  const { isLoaded } = useJsApiLoader({
    id: 'goog-map',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API,
  })

  const onMarkerClick = (location) => {
    setSelectedLocation(location); // Set the selected marker details
  	setCenter(location)
  	//console.log(selectedLocation)
  };

  return (
    <div id='main'>
    	<button>up</button>
    	<button>down</button>
    	<div id='times'>
    		{JPTime}
    		<br></br>
    		{LocalTime}
    	</div>
    	<div id='week'>
    		<h1> Put Week here </h1>
    		<h2>1</h2>
    		<h2>2</h2>
    		<h2>3</h2>
    		<h2>4</h2>
    	</div>
    	{isLoaded && (
		    <GoogleMap
		      mapContainerStyle={containerStyle}
		      center={curCenter}
		      zoom={4}
		      //onLoad={onLoad}
		      //onUnmount={onUnmount}
		    >
          <MarkerF
          	key ={0}
			    	position={markerPosition}
			     	onClick={() => onMarkerClick(markerPosition)}
			    />
			    { selectedLocation && (
					    <InfoWindowF
	              position={selectedLocation}
	              onCloseClick={() => setSelectedLocation(null)} // Close popup
		          >
              <div>
                <h2>Tokyo ya know</h2>
                <p>This is a custom popup for Tokyo.</p>
              </div>
	            </InfoWindowF>
           )}
		    </GoogleMap>
		  )}
    </div>
  );
}