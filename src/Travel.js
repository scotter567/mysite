import { useState, useEffect } from 'react';
import geoIcon from './icons/geo.svg'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

export default function Travel() {
	function getTimeLocal(){
		return new Date()
	}
	
	function getTimeJP(){
		return new Date(new Date().toLocaleString('en-US', {timeZone:'Asia/Tokyo'}))
	}

	function getSun(d){
		const	now = new Date(d)
		return now.getDay() === 0 ? now : new Date(new Date(now).setDate(now.getDate()  - now.getDay()))
	}

	function SuntoSat(d){
		return Array.from({length: 7}, (_, i) => new Date(new Date(d).setDate(d.getDate()  + i)).getDate())
	}
	const startTime = new Date()
	const [JPTime, setJP] = useState('Time in Japan Right now ' + JPTimeString());
	const [LocalTime, setLocal] = useState('Local Time Right now ' + LocalTimeString());
	const [navStart, setStart] = useState([SuntoSat(getSun(startTime)), getSun(startTime)])

	function JPTimeString(){
		return (getTimeJP().getHours() % 12 === 0 ? 12 : getTimeJP().getHours() % 12) + ":" + (getTimeJP().getMinutes() < 10 ? "0" + getTimeJP().getMinutes() : getTimeJP().getMinutes()) + ":" + (getTimeJP().getSeconds() < 10 ? "0" + getTimeJP().getSeconds() : getTimeJP().getSeconds()) +" " + (getTimeJP().getHours() < 12 ? "AM" : "PM\n")
	}

	function LocalTimeString(){
		return (getTimeLocal().getHours() % 12 === 0 ? 12 : getTimeLocal().getHours() % 12) + ":" + (getTimeLocal().getMinutes() < 10 ? "0" + getTimeLocal().getMinutes() : getTimeLocal().getMinutes()) + ":" + (getTimeLocal().getSeconds() < 10 ? "0" + getTimeLocal().getSeconds() : getTimeLocal().getSeconds())+ " " + (getTimeLocal().getHours() < 12 ? "AM" : "PM")
	}

	function timeupdate(){
		setInterval(function(){
			setJP('Time in Japan Right now ' + JPTimeString())
			setLocal('Local Time Right now ' + LocalTimeString())
		}, 500)
	}

	function DateStuff(e){
		if (e.target.tagName !== 'BUTTON') return
		let flip = e.target.classList.contains('nav-left') ? -1 : 1
		navStart[1].setDate(navStart[1].getDate() + (7*flip))
		setStart([SuntoSat(getSun(navStart[1])), navStart[1]])
	}
	const day2Str = {0:'Sun', 1:'Mon', 2:'Tue', 3:'Wed', 4:'Thu', 5:'Fri', 6:'Sat'}
	const month2Str = {0:'January', 1:'Febuary', 2:'March', 3:'April', 4:'May', 5:'June', 6:'July', 7:'August', 8:'September', 9:'October', 10:'November', 11:'December'}
	function Day({ day, date }) {
			return (
			  <div className='dayCont'>
			  	<div className='day'>
			    	{day2Str[day]}
			  	</div>
			  	<div className='date'>
			  		{date}
			  	</div>
			  </div>
			);
		}

		function Week({ navStart }) {
		return (
		  <div className='weekCont'>
		  	<div className='weekHeader'>
		  		{month2Str[navStart[1].getMonth()] + " " +  navStart[1].getFullYear()}
		  	</div>
		    <div className='week'>
			    {navStart[0].map((d, index) => (
			      <Day key={index} day={index} date={d.toString()} /> // Convert each date to a string
			    ))}
			  </div>
		  </div>
		);
	}

	timeupdate()
  const locations = [
    { lat: 36.2048, lng: 138.2529, name: "Japan Central" },
    { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
    { lat: 35.0116, lng: 135.7681, name: "Kyoto" },
    { lat: 34.6937, lng: 135.5023, name: "Osaka" },
    { lat: 35.65941111111111, lng: 139.69624444444446, name: "Bar Bounce Shibuya"}
  ];

  function wrapDate(d){
    return new Date(d)
	}
	function getTimeLocal(){
		return new Date()
	}

  const now = getTimeLocal()
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [curCenter, setCenter] = useState(locations[4]);
  const [userSun, setSun] = useState(wrapDate(now.setDate(now.getDate() - now.getDay())))


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
	  lat: locations[4].lat,
	  lng: locations[4].lng
	};

  // const onMarkerClick = (location) => {
  //   setSelectedLocation(location); // Set the selected marker details
  // 	setCenter(location)
  // 	//console.log(selectedLocation)
  // };
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
    		<div className = 'navControls' 
    		onClick = {DateStuff}>
    			<button className='nav-button nav-left'>{"<-"}</button>
		    		<div className = 'nav-days'>
		    			<Week navStart={navStart} />		
		    		</div>
	    		<button className='nav-button nav-right'>{"->"}</button>
  			</div>
  		</div>
			{
			  <APIProvider apiKey={process.env.REACT_APP_MAPS_API}>
			    <Map
			      style={{width: '100vw', height: '100vh'}}
			      defaultCenter={markerPosition}
			      defaultZoom={3}
			      gestureHandling={'greedy'}
			      disableDefaultUI={true}
			    >
			    	<Marker position={markerPosition} />
			    </Map>
			  </APIProvider>
			/*    	{isLoaded && (
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
		  )}*/}
    </div>
  );
}