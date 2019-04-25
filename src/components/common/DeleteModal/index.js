import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import {closeDeleteModal,deleteTruck} from '../../../redux/action/TruckAction';
import { connect } from 'react-redux';

const DeleteModal = (props) => {
  return (
    <Modal isOpen={props.truckData.openDeleteModal} toggle={props.closeDeleteModal} size="60%">
      <ModalHeader>{'CONFIRM_DELETE'}</ModalHeader>
      <ModalBody>
        {'CONFIRM_DELETE_NOTIFICATION'}
      </ModalBody>
      <ModalFooter>
        <Button
          className="pull-right ml-2"
          type="button"
          color="default"
          onClick={props.closeDeleteModal}
        >{'NO'}
        </Button>
        <Button
          className="pull-right"
          type="button"
          color="primary"
          onClick={props.deleteTruck}
          disabled={props.loading}
          truck={props.truckData.truck}
        >{'YES'}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

function mapStateToProps(state) {
  return {
    truckData: state.truckData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeDeleteModal: () => dispatch(closeDeleteModal()),
    deleteTruck:(truck)=> dispatch(deleteTruck(truck)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal)
