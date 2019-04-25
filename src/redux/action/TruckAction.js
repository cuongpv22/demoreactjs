import C from '../../utils/constants'
import { trucks } from '../../utils/data'
// sync action
export function getTrucks() {
	return {
		type: C.GET_TRUCKS,
		// payload: trucks
	}
}
export function searchTrucks(searchTerm) {
	return {
		type: C.SEARCH_TRUCKS,
		payload: searchTerm
	}
}
export function addTruck(truck) {
	return {
		type: C.ADD_TRUCK,
		payload: truck
	}
}
export function modalError(err) {

	return {
		type: C.MODAL_ERROR,
		payload: err
	}
}
export function deleteTruck(id) {
	return {
		type: C.DELETE_TRUCK,
		payload: id
	}
}
export function updateTruck( truck_plate,truck) {
	return {
		type: C.UPDATE_TRUCK,
		truck_plate:truck_plate,
		payload: truck
	}
}
export function openAddModal() {
	return {
		type: C.OPEN_ADD_MODAL
	}
}
export function closeAddModal() {
	return {
		type: C.CLOSE_ADD_MODAL
	}
}
export function openUpdateModal(truck) {
	return {
		type: C.OPEN_UPDATE_MODAL,
		payload:truck
	}
}
export function closeUpdateModal() {
	return {
		type: C.CLOSE_UPDATE_MODAL
	}
}
export function openDeleteModal(truck) {
	return {
		type: C.OPEN_DELETE_MODAL,
		payload:truck
	}
}
export function closeDeleteModal() {
	return {
		type: C.CLOSE_DELETE_MODAL
	}
}