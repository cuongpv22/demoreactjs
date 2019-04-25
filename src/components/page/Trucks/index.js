import React, { Component } from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import LoadingBackground from '../../common/Loading/LoadingBackground';
import MainPagination from '../../common/MainPagination/MainPagination'
import SearchBar from '../../common/SearchBar/SearchBar';
import CreateModal from './Modals/CreateModal';
import TruckList from './TruckList';
import { connect } from 'react-redux';
import {searchTrucks,getTrucks,openAddModal} from '../../../redux/action/TruckAction'

class Trucks extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getTrucks();
  }
  componentDidMount() {
  }
  render() {
    return (
      <Card>
        <CardBody className="card-body invite-form">
          <div className="animated fadeIn">
            <div className="row mb-3">
              <div className="col-md-4 mb-2">
                <SearchBar search={this.props.searchTrucks} />
              </div>
              <div className="col-md-8">
                <Button className="pull-right ml-2" color="primary" onClick={this.props.openAddModal}>
                  <i className="fa fa-plus-circle" aria-hidden="true" />
                  <span>{'ADD_NEW_TRUCK'}</span>
                </Button>
              </div>
            </div>
            {this.props.truckData.trucks && this.props.truckData.trucks.length > 0 &&
              <TruckList/>
            }
            {
              this.props.truckData.total > 0 &&
              <MainPagination />
            }
            {
              this.props.truckData.openAddModal &&
              <CreateModal
              />
            }
          </div>
        </CardBody>
      </Card>
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
    searchTrucks: (searchTerm) => dispatch(searchTrucks(searchTerm)),
    getTrucks: () => dispatch(getTrucks()),
    openAddModal: () => dispatch(openAddModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trucks)

