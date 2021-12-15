import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsChart from "./components/CardsChart";
import TableData from "./components/TableData";
import Navbars from "./components/Layout/Navbar";
import "./App.css";
import CardsMenu from "./components/CardsMenu";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGraph: 1,
      dataFromApi: {
        labels: [],
        datasets: [
          {
            data: [1, 2, 3],
            label: "Total",
          },
        ],
      },
      dataCurrents: {
        labels: [],
        datasets: [
          {
            data: [1, 2, 3],
            label: "Total",
          },
        ],
      },
      dataVoltages: {
        labels: [],
        datasets: [
          {
            data: [1, 2, 3],
            label: "Total",
          },
        ],
      },
      dataMoisture: {
        labels: [],
        datasets: [
          {
            data: [1, 2, 3],
            label: "Total",
          },
        ],
      },
      dataRelays: {
        labels: [],
        datasets: [
          {
            data: [1, 2, 3],
            label: "Total",
          },
        ],
      },

      dataTest: [],
    };
  }

  setCurrentGraph = (val) => {
    this.setState({
      currentGraph: val,
    });
  };
  componentDidMount() {
    axios.get("https://testexpressjsiot.herokuapp.com").then((res) => {
      const dataApi = res.data;
      let labelsData = [];
      let currentData = [];
      let voltageData = [];
      let moistData = [];
      let relayData = [];

      dataApi.map((data) => {
        labelsData.push(moment(data.postDate).endOf("day").fromNow());
        currentData.push(data.current);
        voltageData.push(data.voltage);
        moistData.push(data.moist);
        relayData.push(data.relay);
        return true;
      });

      this.setState({
        dataTest: dataApi,
        dataCurrents: {
          labels: labelsData,
          datasets: [
            {
              data: currentData,
              label: "Current",
            },
          ],
        },
        dataVoltages: {
          labels: labelsData,
          datasets: [
            {
              data: voltageData,
              label: "Voltage",
              tension: 0.5,
            },
          ],
        },
        dataMoisture: {
          labels: labelsData,
          datasets: [
            {
              data: moistData,
              label: "Moisture",
            },
          ],
        },
        dataRelays: {
          labels: labelsData,
          datasets: [
            {
              data: relayData,
              label: "Relay",
            },
          ],
        },
      });
    });
  }
  render() {
    return (
      <>
        <div className="appWrapper">
          <Navbars />
          <Container>
            <br />
            <br />
            <br />
            <br />
            <h3 className="neonText">Monitoring Hidroponik</h3>
            <CardsMenu
              handleCurrentGraph={(val) => {
                this.setCurrentGraph(val);
              }}
            />
            <div className="wrapper-content">
              <h4 className="title-content">Graphic Representasion</h4>
              <CardsChart
                key={Math.random()}
                dataCurrents={this.state.dataCurrents}
                dataVoltages={this.state.dataVoltages}
                dataMoisture={this.state.dataMoisture}
                dataRelays={this.state.dataRelays}
                currentGraph={this.state.currentGraph}
              />
              <h4 className="title-content">Table Representasion</h4>
              <TableData key={Math.random()} dataTable={this.state.dataTest} />
            </div>
          </Container>
        </div>
      </>
    );
  }
}
