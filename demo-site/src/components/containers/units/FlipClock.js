import React, {Component} from 'react';
import axios from 'axios'

class AnimatedCard extends React.Component {
      render() {
            const {position, digit, animation} = this.props;
            return (<div className={`flipCard ${position} ${animation}`}>
                  <span>{digit}</span>
            </div>);
      }
}

class StaticCard extends React.Component {
      render() {
            const {position, digit} = this.props;
            return (<div className={position}>
                  <span>{digit}</span>
            </div>);
      }
}

class FlipUnitContainer extends React.Component {
      constructor(props) {
            super(props);
      }

      render() {
            const {before, digit, shuffle, unit} = this.props;

            let now = digit;
            let shuffleVal = shuffle;

            // shuffle digits
            const digit1 = shuffleVal
                  ? before
                  : now;
            const digit2 = !shuffleVal
                  ? before
                  : now;

            // shuffle animations
            const animation1 = shuffleVal
                  ? 'fold'
                  : 'unfold';
            const animation2 = !shuffleVal
                  ? 'fold'
                  : 'unfold';

            return (<div className={'flipUnitContainer'}>
                  <StaticCard position={'upperCard'} digit={now}/>
                  <StaticCard position={'lowerCard'} digit={before}/>
                  <AnimatedCard position={'first'} digit={digit1} animation={animation1}/>
                  <AnimatedCard position={'second'} digit={digit2} animation={animation2}/>
            </div>);
      }
}

class FlipClock extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  before: 0,
                  seconds: 0,
                  secondsShuffle: false
            }
      }

      componentDidMount() {
            this.timerID = setInterval(() => this.updateTime(), 1000);
      }

      componentWillUnmount() {
            clearInterval(this.timerID)
            this.updateTime()
      }

      updateTime() {
            let prevData = this.state.seconds
            let prevFlipState = this.state.secondsShuffle
            let newData = 0

            // axios.get('http://localhost:2000/inoutcounter').then((response) => {
            //       // console.log(response)
            //       if (response.data.data !== prevData) {
            //             this.setState({
            //                   before: prevData, seconds: response.data.data,
            //                   secondsShuffle: true
            //             })
            //       } else {
            //             this.setState({secondsShuffle: false});
            //       }
            // }).catch(function(error) {
            //       console.log(error)
            // })
            axios.post('http://192.168.1.40/fms/web/?r=emotion/total-human').then((response) => {
                  console.log(response)
                  if (response.data.data !== prevData) {
                        this.setState({
                              before: prevData, seconds: response,
                              secondsShuffle: true
                        })
                  } else {
                        this.setState({secondsShuffle: false});
                  }
            }).catch(function(error) {
                  console.log(error)
            })


            // axios.get('http://localhost:2000/dashboard').then((response) => {
            //       console.log(response)
            //
            // }).catch(function(error) {
            //       console.log(error)
            // })

      }

      render() {
            const {seconds, secondsShuffle, before} = this.state;
            return (<div className={'flipClock'}>
                  <FlipUnitContainer before={before} unit={'seconds'} digit={seconds} shuffle={secondsShuffle}/>
            </div>);
      }
}

export default FlipClock
