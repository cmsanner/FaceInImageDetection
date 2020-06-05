import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
       <div>
           {/* f3 - font 3 */}
           <p className='f3'>
               {'This Magic Brain will detect faces in your pictures. Give it a try'}
           </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    {/*f4: font 4, pa2: padding 2, w-70: width 70%, center */}
                    <input  className='f4 pa2 w-70 center' type='text' onChange={onInputChange}></input>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Find</button>
                </div>
            </div>
       </div> 
    )
}

export default ImageLinkForm