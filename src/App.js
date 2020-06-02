import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognitionImage from './components/FaceRecognitionImage/FaceRecognitionImage';
import Rank from './components/Rank/Rank';
import 'tachyons';
import './App.css';
import Particles from 'react-particles-js';




class App extends Component {
  constructor(){
    super()
    this.state = {
      input:''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('Click');
  }

  render(){
    return (
      <div className="App">
        <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                
              }}
            />
        <Navigation />
        <Logo />
        <Rank></Rank>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognitionImage /> 
        
      </div>
    );
  }
}

export default App;
