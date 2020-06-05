import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognitionImage from './components/FaceRecognitionImage/FaceRecognitionImage';
import Rank from './components/Rank/Rank';
import Login from './components/Login/Login';
import 'tachyons';
import './App.css';
import Particles from 'react-particles-js';
import {books} from './books2';
//const Clarifai = require('flarifai')   OLD WAY
//import Clarifai from 'clarifai'        MEW WAY


const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: false,
      input:'',
      searchParameters: '',
      books: [],
      bookCount: 0,
      route: 'login'
    }
  }

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({isLoading: true})
    this.setState({searchParameters: this.state.input});
  
    //get sample book data from file
    this.setState({books: books.items, bookCount: books.totalItems, isLoading: false});
   
  //  fetch('https://www.googleapis.com/books/v1/volumes?q='+this.state.input)
  //   .then(response => response.json())
  //   .then(data => {this.setState({books: data.items, bookCount: data.totalItems, isLoading: false })})
  //   .catch(err => {
  //     console.log('err getting books: ',err);
  //     this.setState({isLoading: false})
  //   })
      
      
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
              params={{particlesOptions}}
        />
        <Navigation />
        { this.state.route === 'login' 
          ?  <Login /> 
          :  <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognitionImage searchParameters={this.state.searchParameters} books={this.state.books} bookCount={this.state.bookCount}/> 
            </div>
        }
      </div>
    );
  }
}

export default App;
