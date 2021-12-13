import React, { Component } from "react";
import Chart from "./components/Chart";
import axios from "axios";
import moment from "moment";
import randomColor from "randomcolor";
import Table from "react-bootstrap/table";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133],
            label: "Total",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "Accepted",
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            fill: false,
          },
          {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "Pending",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            fill: false,
          },
          {
            data: [6, 3, 2, 2, 7, 0, 16],
            label: "Rejected",
            borderColor: "#c45850",
            backgroundColor: "#d78f89",
            fill: false,
          },
        ],
      },
      dataFromApi: {
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
      });

      this.setState({
        dataTest: dataApi,
        dataFromApi: {
          labels: labelsData,
          datasets: [
            {
              data: currentData,
              label: "Current",
              borderColor: randomColor(),
              backgroundColor: randomColor(),
            },
            {
              data: voltageData,
              label: "Voltage",
              borderColor: randomColor(),
              backgroundColor: randomColor(),
              fill: false,
            },
            {
              data: moistData,
              label: "Moisture",
              borderColor: randomColor(),
              backgroundColor: randomColor(),
              fill: false,
            },
            {
              data: relayData,
              label: "Relay",
              borderColor: randomColor(),
              backgroundColor: randomColor(),
              fill: false,
            },
          ],
        },
      });
      console.log(this.state.dataFromApi);
    });
  }
  render() {
    return (
      <div>
        <Chart
          key={Math.random()}
          data={this.state.dataFromApi}
          type="line"
          redraw={true}
        />
        {/* <Chart data={this.state.data} type="line" /> */}
        {/* <ul>
          {this.state.dataTest.map((person) => (
            <li>{person.current}</li>
          ))}
          
        </ul> */}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr key={Math.random()}>
              <th>Time</th>
              <th>Device Name</th>
              <th>Current</th>
              <th>Voltage</th>
              <th>Moisture</th>
              <th>Relay</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataTest.map((data) => {
              return (
                <tr key={Math.random()}>
                  <td>{moment(data.postDate).endOf("day").fromNow()}</td>
                  <td>{data.name}</td>
                  <td>{data.current}</td>
                  <td>{data.voltage}</td>
                  <td>{data.moisture}</td>
                  <td>{data.relay}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
