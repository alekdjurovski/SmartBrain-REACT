import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-5" options={{ max : 55 }} style={{ height: 110, width: 110 }} >
	 			<div className="Tilt-inner"> 
	 				<img style={{paddingTop: '7px'}} alt='logo' height="100" width="100" src={brain}/> 
	 			</div>
			</Tilt>
		</div>
	);
}

export default Logo;