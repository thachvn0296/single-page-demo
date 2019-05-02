import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  chartData: props.chartData
            }
      }

      static defaultProps = {
            displayTitle: true,
            displayLegend: true,
            legendPosition: 'right',
            title: ''
      }

      render() {
            console.log('Inside Chart Data:')
            console.log(this.state.chartData)
            return (<div className="chart">
                  <Bar data={this.state.chartData} options={{
                              title: {
                                    display: false,
                                    text: '' + this.props.title,
                                    fontSize: 25
                              },
                              legend: {
                                    display: this.props.displayLegend,
                                    position: this.props.legendPosition
                              },
                              scales: {
                                    yAxes: [
                                          {
                                                stacked: true,
                                                gridLines: {
                                                      display: true,
                                                      color: "#200A46"
                                                },
                                                ticks: {
                                                      fontColor: '#FFFFFF',
                                                      stepSize: Math.floor(Math.max(...this.state.chartData.datasets[0].data)/3),
                                                      min: 0,
                                                      max: Math.max(...this.state.chartData.datasets[0].data) + Math.floor(Math.max(...this.state.chartData.datasets[0].data)/3)
                                                }
                                          }
                                    ],
                                    xAxes: [
                                          {
                                                gridLines: {
                                                      display: false
                                                },
                                                ticks: {
                                                      fontColor: '#FFFFFF'
                                                },
                                                barPercentage: 0.5
                                          }
                                    ]
                              }
                        }}/>
            </div>)
      }
}

export default Chart;
