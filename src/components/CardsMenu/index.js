import React, { Component } from "react";
import "./index.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class CardsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardState: 1,
    };
  }

  handleCardState = (newState) => {
    this.setState(
      {
        cardState: newState,
      },
      () => {
        this.props.handleCurrentGraph(this.state.cardState);
        console.log("cardstate:", this.state.cardState);
      }
    );
  };

  render() {
    let selected1;
    let selected2;
    let selected3;
    let selected4;
    if (this.state.cardState === 1) {
      selected1 = "selected";
    } else if (this.state.cardState === 2) {
      selected2 = "selected";
    } else if (this.state.cardState === 3) {
      selected3 = "selected";
    } else if (this.state.cardState === 4) {
      selected4 = "selected";
    } else {
      selected1 = "";
      selected2 = "";
      selected3 = "";
      selected4 = "";
    }
    return (
      <div>
        <Row>
          <Col md={3}>
            <div
              className={"cardsMenu " + selected1}
              onClick={() => {
                this.handleCardState(1);
              }}
            >
              <h4>Data Sensor</h4>
              <h3> Voltage</h3>
            </div>
          </Col>
          <Col md={3}>
            <div
              className={"cardsMenu " + selected2}
              onClick={() => {
                this.handleCardState(2);
              }}
            >
              <h4>Data Sensor</h4>
              <h3> Current</h3>
            </div>
          </Col>
          <Col md={3}>
            <div
              className={"cardsMenu " + selected3}
              onClick={() => {
                this.handleCardState(3);
              }}
            >
              <h4>Data Sensor</h4>
              <h3> Moisture</h3>
            </div>
          </Col>
          <Col md={3}>
            <div
              className={"cardsMenu " + selected4}
              onClick={() => {
                this.handleCardState(4);
              }}
            >
              <h4>Data Sensor</h4>
              <h3>Relay</h3>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
