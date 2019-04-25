import { combineReducers } from 'redux'
import truckReducer from './TruckReducer'

const ReducerFactory = combineReducers({
    truckData: truckReducer
})

export default ReducerFactory