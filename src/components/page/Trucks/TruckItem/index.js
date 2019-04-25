import React, { Component } from 'react';
import DeleteModal from '../../../../components/common/DeleteModal';
import UpdateModal from '../Modals/UpdateModal';
import {openDeleteModal,openUpdateModal} from '../../../../redux/action/TruckAction'
import { connect } from 'react-redux'
class TruckItem extends Component {
  constructor(props) {
    super(props);
    this.onUpdateItem = this.onUpdateItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }
 onUpdateItem(){
  this.props.openUpdateModal(this.props.truck);
 }
 onDeleteItem(){
  this.props.openDeleteModal(this.props.truck);
 }
  render() {
    return (
      <tr>
        <td>{this.props.no}</td>
        <td>
          <div classname="badge badge-large blue-background">{this.props.truck.truck_plate}</div>
        </td>
        <td>{this.props.truck.cargo_type}</td>
        <td>{this.props.truck.driver}</td>
        <td>{this.props.truck.truck_type}</td>
        <td>{this.props.truck.price}</td>
        <td>{this.props.truck.dimession}</td>
        <td>{this.props.truck.parking_address}</td>
        <td>{this.props.truck.production_year}</td>
        <td>{this.props.truck.status}</td>
        <td>{this.props.truck.description}</td>
        <td className="action-column">
          <button
            type="button"
            className="btn btn-primary btn-xs mr-2"
            onClick={this.onUpdateItem}
            
          >
            <i className="fas fa-pencil-alt" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="btn btn-danger btn-xs"
            onClick={this.onDeleteItem}
            truck={this.props.truck}
          >
            <i className="fas fa-minus" aria-hidden="true" />
          </button>
        </td>
        {
          this.props.truckData.openDeleteModal && <DeleteModal/>
        }
        {
          this.props.truckData.openUpdateModal && <UpdateModal/>
        }
      </tr>
    );
  }
}
function mapStateToProps(state) {
  return {
    truckData: state.truckData
  }
}
function mapDispatchToProps(dispatch) {
  return {
    openUpdateModal: (truck) => dispatch(openUpdateModal(truck)),
    openDeleteModal: (truck) => dispatch(openDeleteModal(truck))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TruckItem)
