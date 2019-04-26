import C from '../../utils/constants'
import Truck from '../../Model/Truck';

var componentState = {
    initial: 0,
    loading: 1,
    loaded: 2,
    error: 3
}

const initialState = {
    trucks: [{ truck_plate: '30A-32145', cargo_type: 'computer', driver: 'Nguyen Van A', truck_type: '10 tan', price: '1000', dimession: '12.02.2012', parking_address: 'Ha Noi', production_year: '1991', status: 'ide', description: 'ok' },
    { truck_plate: '16A-3122', cargo_type: 'computer', driver: 'Nguyen Van B', truck_type: '10 tan', price: '1000', dimession: '12.02.2012', parking_address: 'Hai Phong', production_year: '1991', status: 'ide', description: 'ok' }
    ],
    truck: new Truck(),
    total: 0,
    limit: 2,
    searchTerm: undefined,
    openAddModal: false,
    openUpdateModal: false,
    openDeleteModal: false,
    state: componentState.initial,
    errors: {},
}

const truckReducer = (state = initialState, action) => {
    switch (action.type) {
        case C.GET_TRUCKS:
            return {
                ...state,
                // trucks: action.payload,
                state: componentState.loaded,
            }
        case C.SEARCH_TRUCKS:
            return {
                ...state,
                trucks: state.trucks.map(
                    truck => truck.truck_plate.includes(action.payload)
                ),
            }
        case C.ADD_TRUCK:
            return {
                ...state,
                trucks: [...state.trucks, action.payload]
            }
        case C.MODAL_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        case C.UPDATE_TRUCK:
            return {
                ...state,
                trucks: state.trucks.map(
                    truck => (truck.truck_plate !== action.payload.truck_plate) ? truck : action.payload
                ),
                openUpdateModal:false
            }
        case C.DELETE_TRUCK:
            return {
                ...state,
                trucks: state.trucks.filter(truck => truck.truck_plate !== state.truck.truck_plate),
                openDeleteModal:false
            }
        case C.GET_TRUCKS_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true
            }
        case C.OPEN_ADD_MODAL:
            return {
                ...state,
                openAddModal: true
            }
        case C.CLOSE_ADD_MODAL:
            return {
                ...state,
                openAddModal: false
            }
        case C.OPEN_UPDATE_MODAL:
            return {
                ...state,
                openUpdateModal: true,
                truck: action.payload
            }
        case C.CLOSE_UPDATE_MODAL:
            return {
                ...state,
                openUpdateModal: false
            }
        case C.OPEN_DELETE_MODAL:
            return {
                ...state,
                openDeleteModal: true,
                truck: action.payload
            }
        case C.CLOSE_DELETE_MODAL:
            return {
                ...state,
                openDeleteModal: false
            }
        case C.SEARCH_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true
            }
        default:
            return state
    }
}
export default truckReducer