import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
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
            
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
         
        {/* 
        <FaceRecognition /> */ }
      </div>
    );
  }
}

export default App;
