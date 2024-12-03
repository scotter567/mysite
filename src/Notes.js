import React, { useEffect } from 'react';

export default function Travel() {
	
	function point(e){
		let lmao = document.getElementById('lmao')
		//console.log(e)
		console.log('here - X:' + e.clientX + 'Y: ' + e.clientY)
		const ctx = lmao.getContext("2d");
		ctx.fillStyle = "green";
		ctx.fillRect(e.clientX, e.clientY, 10,10);
	}

	function resize(){
		let lmao = document.getElementById('lmao')
		lmao.width = window.innerWidth 
		lmao.height = window.innerHeight
	}

	useEffect(() => {
		resize()
		document.onpointermove = point
		window.addEventListener("resize", resize);
	}, [])
	return (
		<canvas 
			id='lmao'>
			LOL
		</canvas>
	);
}