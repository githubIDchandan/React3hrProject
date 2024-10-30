import React, { useState } from "react"
import ReactDOM from "react-dom/client";
import Userdata from "./components/Userdata";
import Showuserdata from "./components/Showuserdata";
import Header from "./components/Header";



const AppLayout=()=>{
 
    const [arrData,setArrData]=useState([]);
    const [filterData,setFilterData]=useState([]);

    const userDatahandler=(data)=>{

    for(let i=0;i<arrData.length;i++){

        if(arrData[i].userSeat===data.userSeat){
            return alert("ALREADY BOOKED")
        }
    }
    setArrData([data,...arrData]);
    setFilterData([data,...arrData]);
    
    }
console.log("kkk")

    return(
        <div>
            <Header arrData={arrData} setFilterData={setFilterData}/>
            <Userdata userDatahandler={userDatahandler} />
            <Showuserdata arrData={arrData} setArrData={setArrData} filterData={filterData} setFilterData={setFilterData}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);