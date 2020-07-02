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
// import {books} from './books2';
import Register from './components/Register/Register';
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

const initialState = {
  isLoading: false,
  input:'',
  searchParameters: '',
  books: [],
  bookCount: 0,
  route: 'login',
  isSignedIn: false,
  user:{
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined:''
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
    }
 

  loadUser = (data) =>{
    this.setState( {user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({isLoading: true})
    this.setState({searchParameters: this.state.input});
  
    //get sample book data from file
    // this.setState({books: books.items, bookCount: books.totalItems, isLoading: false});

   
   fetch('https://www.googleapis.com/books/v1/volumes?q='+this.state.input)
    .then(response => response.json())
    .then(data => {
      this.setState({books: data.items, bookCount: data.totalItems, isLoading: false })
      fetch('http://localhost:3000/image',{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id
        })
      })
        .then(response => response.json())
        .then(count => {
          // this.setState({user:{
          //   entries: count
          // }})
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
        .catch(console.log);

    })
    .catch(err => {
      console.log('err getting books: ',err);
      this.setState({isLoading: false})
    })
  }

  onRouteChange = (route) => {
    console.log('current route: ',route);
    if (route === 'signout'){
      this.setState(initialState)
    }else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  //https://stackoverflow.com/questions/46592833/how-to-use-switch-statement-inside-a-react-component/46593006
  renderRouteSwitch(param){
    switch(this.state.route){
      case 'login':  
        return <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          
      case 'register' : 
          return <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
 
      case 'signout' : 
          return  <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
   
      default:  
          return <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries}/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/> 
            <FaceRecognitionImage searchParameters={this.state.searchParameters} books={this.state.books} bookCount={this.state.bookCount}/> 
          </div>
      
    }
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
              params={{particlesOptions}}
        />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.renderRouteSwitch(this.state.route)}
      </div>
    );
  }
}

export default App;
