import React, { Component } from "react";
import Chart from "chart.js/auto";

export default class MyChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      type: props.type,
    };
  }

  chartRef = React.createRef();

  componentDidMount() {
    Chart.defaults.backgroundColor = "#09FBD3";
    Chart.defaults.borderColor = "rgba(255, 255, 255, 0.33)";
    Chart.defaults.color = "rgba(255, 255, 255, 0.7)";
    const ctx = this.chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: this.state.type,
      data: this.state.data,
      options: {
        layout: {
          padding: 20,
        },
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 18,
              },
            },
          },
        },
      },
    });
  }
  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
