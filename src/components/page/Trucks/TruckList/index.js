import React, { Component } from 'react';
import TruckItem from '../TruckItem';
import { Table } from 'reactstrap';
import { connect } from 'react-redux'
class TruckList extends Component {
  
  constructor(props) {

    super(props);

  }
  render() {
    console.log("Trucks List");
    console.log(this.props.truckData.trucks);
    // console.log(trucksData.length);
    return (
      <div className="row">
      {!this.props.truckData.fetching &&
        <div className="col-md-12">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>{'TRUCK_PLATE'}</th>
                <th>{'CARGO_TYPE'}</th>
                <th>{'DRIVER'}</th>
                <th>{'TRUCK_TYPE'}</th>
                <th>{'PRICE'}</th>
                <th>{'DIMESSION'}</th>
                <th>{'PARKING_ADDRESS'}</th>
                <th>{'PRODUCTION_YEAR'}</th>
                <th>{'STATUS'}</th>
                <th>{'DESCRIPTION'}</th>
                <th>{'ACTION'}</th>
              </tr>
            </thead>
            <tbody>
              {this.props.truckData.trucks.map((truck, index) =>
                (<TruckItem      
                  key={truck.truck_plate}
                  no={index}
                  truck={truck}  
                />)
                
                )
                }
            </tbody>
          </Table>
        </div>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    truckData: state.truckData
  }
}
export default connect(
  mapStateToProps
)(TruckList)
