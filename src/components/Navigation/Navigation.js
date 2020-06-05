import React from 'react';

// make onClick a function that calls onRouteChange, otherwise this becomes an endless loop!
const Navigation = ({onRouteChange}) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}> 
            {/* f3 font size, link, dim when you click on it, color black and underlined, p3 - padding of 3, pointer when you hover  */}
            <p onClick={() => onRouteChange('login')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation;