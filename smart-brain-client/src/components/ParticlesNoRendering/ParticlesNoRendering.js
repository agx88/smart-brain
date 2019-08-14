import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig.js';

class ParticlesNoRerendering extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
    render() {
      return (
        <Particles className='particles'
          params={particlesConfig}
        />
      )
    }
}

export default ParticlesNoRerendering;