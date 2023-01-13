import {combineReducers} from 'redux';
import { employeearrReducer } from './EmployeeReducer';

const reducers=combineReducers(
    {
        allEmployees:employeearrReducer,  
        //employee:selectedEmployee
    }
)

export default reducers