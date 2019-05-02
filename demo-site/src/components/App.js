import React, {Component} from 'react';
import '../css/App.css';
import AppLogo from './materials/logo.png';
import EmojiBox from './containers/EmojiBox';
import EmotionalDashboard from './containers/EmotionalDashboard';
import InOutCounterBox from './containers/InOutCounterBox';
import PeopleTrackingBox from './containers/PeopleTrackingBox';
import Home from './views/Home';
import {Switch, Route, DefaultRoute} from 'react-router-dom'

class App extends Component {
      render() {
            return (<section>
                  <Switch>
                        <Route exact path= "/" component={Home} />
                  </Switch>
            </section>)
      }
}

export default App;
