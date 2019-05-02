import React, {Component} from 'react';
import Tracking from '../materials/4k.jpg';

class PeopleTrackingBox extends Component {
      render() {
            return (<section className='double-tracking-screen-container'>
                  <div className='transparent-bg double-tracking-screen'>
                        <img src={Tracking} className='tracking-screen'/>
                  </div>
                  <div className='transparent-bg double-tracking-screen'>
                        <img src={Tracking} className='tracking-screen'/>
                  </div>
            </section>)
      }
}

export default PeopleTrackingBox
