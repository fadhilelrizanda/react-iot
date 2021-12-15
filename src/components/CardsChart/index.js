import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import LineChart from "../MyChart";
import "./index.css";

export default class CardsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGraph: props.currentGraph,
      dataCurrents: props.dataCurrents,
      dataVoltages: props.dataVoltages,
      dataMoisture: props.dataMoisture,
      dataRelays: props.dataRelays,
    };
  }

  render() {
    let dataSent;
    if (this.state.currentGraph === 1) {
      dataSent = this.state.dataVoltages;
    }
    if (this.state.currentGraph === 2) {
      dataSent = this.state.dataCurrents;
    }
    if (this.state.currentGraph === 3) {
      dataSent = this.state.dataMoisture;
    }
    if (this.state.currentGraph === 4) {
      dataSent = this.state.dataRelays;
    }
    return (
      <div>
        <div className="cardChart">
          <Row className="justify-content-center">
            <Col md={12}>
              <LineChart
                key={Math.random()}
                data={dataSent}
                type="line"
                redraw={true}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
