import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input, Label } from 'reactstrap';
import TruckModel from '../../../../../Model/Truck';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { connect } from 'react-redux'
import { closeAddModal, addTruck, modalError } from '../../../../../redux/action/TruckAction'
var componentState = {
  initial: 0,
  loading: 1,
  loaded: 2,
  error: 3
}
class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.truck = new TruckModel();
    this.createTruck = this.createTruck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
  }
  handleChange(e) {
    this.truck[e.target.name] = e.target.value;
  }
  createTruck(e) {
    e.preventDefault();
    const formErrors = this.validateFormData();
    if (!Object.keys(formErrors).length) {
      this.props.addTruck(this.truck.toJSON());
      this.props.closeAddModal();

    } else {
      this.props.modalError(formErrors);
    }
  }
  validateFormData() {
    return this.truck.setData(this.truck).validate();
  }
  render() {
    return (
      <Modal isOpen={this.props.truckData.openAddModal} toggle={this.props.closeAddModal} size="lg">
        <div className="animated fadeIn">
          <form onSubmit={this.createTruck}>
            <ModalHeader>
              <span>{'CREATE_NEW_TRUCK'}</span>
              <button
                className="btn icon-button close-icon-button no-background"
                onClick={this.props.closeModal}
              >
                <i className="fa fa-times" aria-hidden="true" />
              </button>
            </ModalHeader>
            <ModalBody className="invite-user-body">
              <div className="card">
                <div className="card-body">
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
                          name="truck_plate"
                          id="truck_plate"
                          placeholder={'TRUCK_PLATE'}
                          onChange={this.handleChange}
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
                        // value={this.props.truckData.truck.truck_type}
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
                        // value={this.props.truckData.truck.price}
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
                        // value={this.props.truckData.truck.dimession}
                        />
                      </FormGroup>
                    </div>
                    <div className="col-md-6">
                      <FormGroup>
                        <div className="row">
                          <div className="col-sm-5">
                            <Label for="parking_address">{'PARKING_ADDRESS'} (*)</Label>
                          </div>
                          <div className="col-sm-7">
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
                        // value={this.props.truckData.truck.parking_address}
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
                          // value={TimeService.displayDate(this.state.truck.production_year)}
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
                        // value={this.props.truckData.truck.status}
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
                        // value={this.props.truckData.truck.description}
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>

              </div>
            </ModalBody>
            <ModalFooter>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-dark invite-button" onClick={this.props.closeAddModal}>{'CANCEL'}</button>
                  <button type="submit" className="btn btn-primary pull-right invite-button" color="primary" disabled={this.props.truckData.state == componentState.loading}>{this.props.truckData.state == componentState.loaded ? 'SAVE' : 'SAVING'}</button>
                </div>
              </div>
            </ModalFooter>
          </form>
        </div>
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
    addTruckError: (err) => dispatch(addTruckError(err)),
    closeAddModal: () => dispatch(closeAddModal()),
    addTruck: (truck) => dispatch(addTruck(truck)),
    modalError: (error) => dispatch(modalError(error))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateModal)
