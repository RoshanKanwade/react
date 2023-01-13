import EmployeeCard from "./EmployeeCard";
const EmployeeList=(props)=>{
    const deleteData=(empid)=>{
        console.log("in emloyeelist delete function");
        props.removeData(empid)

    }
    
    console.log(props);
    const renderEmployee=props.emparray.map((emp,index)=>
         (<EmployeeCard  key={emp.empid} employee={emp}  deleteEmployee={deleteData}></EmployeeCard>)
    )
    return(
        <div>
           {renderEmployee}
        </div>
    )
}

export default EmployeeList;