import React, { Component } from "react";
import Chart from "chart.js/auto";

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      type: props.type,
    };
  }

  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: this.state.type,
      data: this.state.data,
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
