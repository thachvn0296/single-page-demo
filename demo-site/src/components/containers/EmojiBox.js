import React, { Component } from 'react';

import Happy from '../materials/happy.png';
import Sad from '../materials/sad.png';
import Angry from '../materials/angry.png';
import Normal from '../materials/normal.png';

class EmojiBox extends Component {
      render() {
            return (
                  <div className='align-self-center emoji-box containers emoji-box'>
                        <img src={Happy} />
                  </div>
            )
      }
}

export default EmojiBox
