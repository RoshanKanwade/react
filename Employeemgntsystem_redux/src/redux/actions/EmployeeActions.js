import { ActionTypes } from "../constants/action-types"

export const setemployeearr=(emparr)=>{
    return{
        type:ActionTypes.SET_EMPARR,
        payload:emparr
    }

}

export const addemployeearr=(emp)=>{
    return{
        type:ActionTypes.ADD_EMPARR,
        payload:emp
    }

}


export const deleteemployeearr=(id)=>{
    return{
        type:ActionTypes.DELETE_EMPARR,
        payload:{empid:id}
    }

}

export const updateemployeearr=(emp)=>{
    return{
        type:ActionTypes.UPDATE_EMPARR,
        payload:emp
    }

}

export const setEmployeeById=(emp)=>{
    return{
    type: ActionTypes.SET_BY_ID,
    payload:emp
}

}