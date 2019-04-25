import React from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader, Input, FormGroup, Label } from 'reactstrap';
import TruckModel from '../../../../../Model/Truck';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { connect } from 'react-redux'
import { closeUpdateModal, updateTruck, modalError } from '../../../../../redux/action/TruckAction'
var componentState = {
  initial: 0,
  loading: 1,
  loaded: 2,
  error: 3
}
class UpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.truck = new TruckModel();
    this.handleChange = this.handleChange.bind(this);
    this.validateFormData = this.validateFormData.bind(this);
    this.updateTruck = this.updateTruck.bind(this);
  }
  componentWillMount() {
    this.truck = Object.assign({}, this.props.truckData.truck);
  }
  handleChange(e) {
    this.truck[e.target.name] = e.target.value;
  }
  updateTruck(e) {
    e.preventDefault();
    // const formErrors = this.validateFormData();
    const truckUpdate = new TruckModel();
    const formErrors = truckUpdate.setData(this.truck).validate();
    if (!Object.keys(formErrors).length) {
      this.props.updateTruck(truckUpdate);


    } else {
      this.props.modalError(formErrors);
    }
  }
  validateFormData(truck) {
    const tmpTruck = new TruckModel();
    return tmpTruck.setData(this.truck).validate();
  }
  render() {
    return (
      <Modal
        isOpen={this.props.truckData.openUpdateModal}
        toggle={() => this.props.closeUpdateModal()}
        size="lg"
      >
        <form onSubmit={this.updateTruck}>
          <ModalHeader>
            <span>{'UPDATE_TRUCK'}</span>
            <button
              className="btn icon-button close-icon-button no-background"
              onClick={this.props.closeUpdateModal}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </ModalHeader>
          <ModalBody className="invite-user-body">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="row">
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="truck_plate">{'TRUCK_PLATE'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
                            {this.props.truckData.errors.truck_plate &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.truck_plate}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          disabled
                          name="truck_plate"
                          id="truck_plate"
                          placeholder={'TRUCK_PLATE'}
                          onChange={this.handleChange}
                          defaultValue={this.props.truckData.truck.truck_plate}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="cargo_type">{'CARGO_TYPE'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
                            {this.props.truckData.errors.cargo_type &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.cargo_type}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="cargo_type"
                          id="cargo_type"
                          placeholder={'CARGO_TYPE'}
                          onChange={this.handleChange}
                          defaultValue={this.props.truckData.truck.cargo_type}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="driver">{'DRIVER'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
                            {this.props.truckData.errors.driver &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.driver}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="driver"
                          id="driver"
                          placeholder={'DRIVER'}
                          onChange={this.handleChange}
                          defaultValue={this.props.truckData.truck.driver}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="truck_type">{'TRUCK_TYPE'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
                            {this.props.truckData.errors.truck_type &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.truck_type}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="truck_type"
                          id="truck_type"
                          placeholder={'TRUCK_TYPE'}
                          onChange={this.handleChange}
                          defaultValue={this.truck.truck_type}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="price">{'PRICE'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
                            {this.props.truckData.errors.price &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.price}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="price"
                          id="price"
                          placeholder={'PRICE'}
                          onChange={this.handleChange}
                          defaultValue={this.truck.price}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="dimession">{'DIMESSION'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
                            {this.props.truckData.errors.dimession &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.dimession}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="dimession"
                          id="dimession"
                          placeholder={'DIMESSION'}
                          onChange={this.handleChange}
                          defaultValue={this.props.truckData.truck.dimession}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-6">
                            <Label for="parking_address">{'PARKING_ADDRESS'} (*)</Label>
                          </div>
                          <div className="col-sm-6">
                            {this.props.truckData.errors.parking_address &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.parking_address}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="parking_address"
                          id="parking_address"
                          placeholder={'PARKING_ADDRESS'}
                          onChange={this.handleChange}
                          defaultValue={this.props.truckData.truck.parking_address}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-6">
                            <Label for="production_year">{'PRODUCTION_YEAR'}</Label>
                          </div>
                          <div className="col-sm-8">
                            {this.props.truckData.errors.production_year &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.production_year}
                              </div>}
                          </div>
                        </div>
                        <Datetime
                          onChange={this.handleProductionYearChange}
                          // defaultValue={TimeService.displayDate(this.state.truck.production_year)}
                          inputProps={{ placeholder: 'PRODUCTION_YEAR' }}
                          // dateFormat={dateConfig.timeDisplayFormat}
                          timeFormat={false}
                          closeOnSelect
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="status">{'STATUS'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
                            {this.props.truckData.errors.status &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.status}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="status"
                          id="status"
                          placeholder={'STATUS'}
                          onChange={this.handleChange}
                          defaultValue={this.props.truckData.truck.status}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="description">{'DESCRIPTION'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
                            {this.props.truckData.errors.description &&
                              <div className="warning-text float-right">
                                {this.props.truckData.errors.description}
                              </div>}
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="description"
                          id="description"
                          placeholder={'DESCRIPTION'}
                          onChange={this.handleChange}
                          defaultValue={this.props.truckData.truck.description}
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-dark invite-button" onClick={this.props.closeUpdateModal}>{'CANCEL'}</button>
            <button type="submit" className=" btn btn-primary pull-right invite-button" color="primary" disabled={this.props.truckData.state == componentState.loading}>{this.props.truckData.state == componentState.loaded ? 'SAVE' : 'SAVING'}</button>
          </ModalFooter>
        </form>
      </Modal>
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
    closeUpdateModal: () => dispatch(closeUpdateModal()),
    updateTruck: (truck) => dispatch(updateTruck(truck)),
    modalError: (error) => dispatch(modalError(error))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateModal)
