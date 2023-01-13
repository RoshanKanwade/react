import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from 'react';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import {setemployeearr} from "./redux/actions/EmployeeActions";

function App() {
  const emparr=useSelector((state)=>state.allEmployees.emparr);
  ////this will create a dispatch object to send action to reducer
  const dispatch=useDispatch();
 const fetchData=async ()=>{
     ///code for getting data from webservice
     console.log("in fetchdata");
     dispatch(setemployeearr([
      {empid:10,ename:"Kishori",mobile:4444},
      {empid:20,ename:"Ashwini",mobile:1111},
      {empid:30,ename:"Deepali",mobile:2222},
      {empid:40,ename:"Sangeeta",mobile:3333},
      {empid:41,ename:"Revati",mobile:3333}
      
    ]))

 }
  useEffect(()=>{
     console.log("initialize emparr");
     fetchData();
  },[])
  return (
    <div className="App">
     <Header/>
     <EmployeeList emparray={emparr}/>
    </div>
  );
}

export default App;
