import { useState } from 'react';

export default function Travel() {
	const [JPTime, setJP] = useState('');
	const [LocalTime, setLocal] = useState('');
  function getTimeJP(){
		return new Date(new Date().toLocaleString('en-US', {timeZone:'Asia/Tokyo'}))
	}

	function getTimeLocal(){
		return new Date()
	}
	function timeupdate(){
		setInterval(function(){
			setJP('Time in Japan Right now ' + (getTimeJP().getHours() % 12 == 0 ? 1 : getTimeJP().getHours() % 12) + ":" + (getTimeJP().getMinutes() < 10 ? "0" + getTimeJP().getMinutes() : getTimeJP().getMinutes()) + ":" + (getTimeJP().getSeconds() < 10 ? "0" + getTimeJP().getSeconds() : getTimeJP().getSeconds()) +" " + (getTimeJP().getHours()<12 ? "AM" : "PM\n"))
			setLocal('Local Time Right now ' + (getTimeLocal().getHours() % 12 == 0 ? 1 : getTimeLocal().getHours() % 12) + ":" + (getTimeLocal().getMinutes() < 10 ? "0" + getTimeLocal().getMinutes() : getTimeLocal().getMinutes()) + ":" + (getTimeLocal().getSeconds() < 10 ? "0" + getTimeLocal().getSeconds() : getTimeLocal().getSeconds())+ " " + (getTimeLocal().getHours()<12 ? "AM" : "PM"))
		}, 500)

	}
	timeupdate()
  return (
    <div id='main'>
    	<div id='times'>
    		{JPTime}
    		<br></br>
    		{LocalTime}
    	</div>
    	<div id='week'>
    		<h1> Put Week here </h1>
    	</div>
    	<div id='map'>
	    	<h1> 
	    		Put Map Here 
	    	</h1>
	    </div>
    </div>
  );
}