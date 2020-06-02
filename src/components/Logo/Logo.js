import React from 'react';
import Tilt from 'react-tilt';
import head from './head.png';
import './Logo.css';

const Logo = () => {
    return (
      <div className='ma4 mt0'>
          {/* br2 - boarder radius 2, shadow-2 2 pixle shadow,  */}
        <Tilt className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 180, width: 150 }} >
        <div className="Tilt-inner"><img style={{paddingTop: '10px'}} src={head} alt='logo'></img></div>
        </Tilt>
      </div>  
    )
}

export default Logo;