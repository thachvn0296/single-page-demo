import React, {Component} from 'react';
import FlipClock from './FlipClock';

class Header extends React.Component {
      render() {
            return (<header className='counter-header'>
                  <h1>
                        Passing By</h1>
            </header>);
      }
}

class Counter extends React.Component {
      render() {
            return (<div>
                  <Header/>
                  <FlipClock/>
            </div>);
      }
}

export default Counter
