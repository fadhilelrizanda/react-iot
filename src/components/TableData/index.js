import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

export default class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: props.dataTable,
    };
  }
  render() {
    return (
      <div>
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
            {this.state.dataTable.map((data) => {
              return (
                <tr key={Math.random()}>
                  <td>{moment(data.postDate).endOf("day").fromNow()}</td>
                  <td>{data.name}</td>
                  <td>{data.current}</td>
                  <td>{data.voltage}</td>
                  <td>{data.moist}</td>
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
