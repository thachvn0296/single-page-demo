import React, {Component} from 'react';
import AppLogo from '../containers/AppLogo';
import MTTLogo from '../containers/MTTLogo';
import EmojiBox from '../containers/EmojiBox';
import EmotionalDashboard from '../containers/EmotionalDashboard';
import InOutCounterBox from '../containers/InOutCounterBox';
import InOutCounterDashboard from '../containers/InOutCounterDashboard';
import PeopleTrackingBox from '../containers/PeopleTrackingBox';

const bgimg = require('../materials/bg_body.png');

const divStyle = {
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover'
};

class App extends Component {
      render() {
            return (<div className="inpage-containers" style={divStyle}>


                  <div className="container">
                        <div className='box-container'>
                              <div className="d-flex align-items-stretch top-box justify-content-around col-sm-12 dark-transparent-bg double-tracking-screen-top-box ">
                                    <AppLogo/>
                                    <InOutCounterBox/>
                                    <InOutCounterDashboard/>
                                    <EmojiBox/>
                                    <EmotionalDashboard/>
                                    <MTTLogo/>
                              </div>
                              <div className="d-flex align-items-stretch bottom-box justify-content-around col-sm-12 dark-transparent-bg">
                                    <PeopleTrackingBox/>
                              </div>
                        </div>
                  </div>

            </div>)

      }
}

export default App;
