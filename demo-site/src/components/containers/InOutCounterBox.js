import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Counter from './units/Counter';

class InOutCounterBox extends Component {
      render() {
            return (<div className='in-out-counter-box align-self-center containers text-white'>
                  <Counter />
            </div>)
      }
}

export default InOutCounterBox
