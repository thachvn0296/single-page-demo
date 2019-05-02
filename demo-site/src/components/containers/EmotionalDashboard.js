import React, {Component} from 'react';
import Chart from './units/Chart';
import axios from 'axios'

class EmotionalDashboard extends Component {
      constructor() {
            super();
            this.state = {
                  chartData: {}
            }

            this.getChartData = this.getChartData.bind(this)
      }
      componentWillMount() {
            this.getChartData();
      }

      getChartData() {
            // Ajax calls here
            // axios.get('http://localhost:2000/dashboard').then((response) => {
            //       console.log('ajax')
            //       console.log(response.data)
            //       this.setState({chartData: response.data})
            // }).catch(function(error) {
            //       console.log(error)
            // })

            // Mocking up data
            this.setState({
                  chartData: {
                        labels: [
                              'Happy', 'Normal', 'Unhappy', 'Angry'
                        ],
                        datasets: [
                              {
                                    label: 'People',
                                    data: [
                                          6, 5, 3, 2
                                    ],
                                    backgroundColor: ['rgba(68, 231, 191, 1.0)', 'rgba(30, 167, 243, 1.0)', 'rgba(251, 229, 118, 1.0)', 'rgba(244, 128, 121, 1.0)']
                              }
                        ]
                  }
            })
      }

      render() {
            return (<div className='align-self-center emoji-dashboard-box containers transparent-bg'>
                  <div className='center-center chart-containers'>
                        <Chart chartData={this.state.chartData} title="" legendPosition=""/>
                  </div>

            </div>)
      }
}

export default EmotionalDashboard
