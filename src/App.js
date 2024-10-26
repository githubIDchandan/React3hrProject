import React, { useState } from "react"
import ReactDOM from "react-dom/client";
import Userdata from "./components/Userdata";
import Showuserdata from "./components/Showuserdata";
import Header from "./components/Header";



const AppLayout=()=>{
 
    const [arrData,setArrData]=useState([]);
    const [filter,setfilter]=useState([]);
    const [edit,setEdit]=useState(null);
    const userDatahandler=(data)=>{
    for(let i=0;i<arrData.length;i++){
        
    
        if(arrData[i].userSeat===data.userSeat){
            // console.log("same")
            return alert("ALREADY BOOKED")
        }
    }
    setArrData([data,...arrData]);
    setfilter([data,...arrData])
    // console.log("hiijs")
    
    }
//    console.log("app-render")

     const filterHandler=(value)=>{
        
        setfilter(value)
        // setArrData(value)
     }
    
     const editHandler=(value)=>{
           setEdit(value)
     }
  
   

    return(
        <div>
            <Header filter={filter} filterHandler={filterHandler} data={arrData}/>
            <Userdata userDatahandler={userDatahandler} filterHandler={filterHandler} edit={edit} setEdit={setEdit}/>
            <Showuserdata filter={filter} setfilter={setfilter} setArrData={setArrData} editHandler={editHandler}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);