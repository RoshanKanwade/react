import React from 'react';
import {PersonCircle,Trash,PenFill} from "react-bootstrap-icons";
import { useDispatch } from 'react-redux';
import {deleteemployeearr} from '../redux/actions/EmployeeActions';

 const EmployeeCard=(props)=> {
  const dispatch=useDispatch();
const deleteemeployee=(empid)=>{
    console.log("in delete employee card")
    //props.deleteEmployee(empid);
    dispatch(deleteemployeearr(empid))

} 
  
  return (
  <div className="container border-bottom">
    <div className="row">
      <div className="col-sm-12 col-md-1">
         <PersonCircle/>
      </div>
      <div className="col-md-7 text-left">
        <span>{props.employee.empid}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{props.employee.ename}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{props.employee.mobile}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className="col-md-2">
         <PenFill/>
      </div>
      <div className="col-md-2" onClick={()=>deleteemeployee(props.employee.empid)}>
         <Trash/>
      </div>

    </div>
</div>);
}

export default EmployeeCard;
