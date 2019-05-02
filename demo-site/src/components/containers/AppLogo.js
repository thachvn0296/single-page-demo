import React, { Component } from 'react';
import Logo from '../materials/logo.png';

class AppLogo extends Component {
      render() {
            return (
                  <div className='app-logo-box align-self-center containers transparent-bg'>
                        <img src={Logo} />
                  </div>
            )
      }
}

export default AppLogo
