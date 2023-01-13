import { ActionTypes } from "../constants/action-types"
const initialState={
    emparr:[]
}
export const employeearrReducer=(state=initialState,{type,payload})=>{
    console.log("in employeereducer")
    switch(type){
        case ActionTypes.SET_EMPARR:
            return({...state,emparr:payload});
        case ActionTypes.DELETE_EMPARR:
            return({...state,emparr:state.emparr.filter(x=>x.empid!==payload.empid)});
        case ActionTypes.ADD_EMPARR:
            return({...state,emparr:[...state.emparr,{...payload.emp}]});
        default:
            return state;
    }
}

