import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognitionImage from './components/FaceRecognitionImage/FaceRecognitionImage';
import Rank from './components/Rank/Rank';
import 'tachyons';
import './App.css';

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
