import React, { useState } from "react"
import ReactDOM from "react-dom/client";
import Userdata from "./components/Userdata";
import Showuserdata from "./components/Showuserdata";
import Header from "./components/Header";



const AppLayout=()=>{
 
    const [arrData,setArrData]=useState([]);

    const userDatahandler=(data)=>{

    for(let i=0;i<arrData.length;i++){

        if(arrData[i].userSeat===data.userSeat){
            return alert("ALREADY BOOKED")
        }
    }
    setArrData([data,...arrData]);
    
    }
console.log("kkk")

    return(
        <div>
            <Header data={arrData}/>
            <Userdata userDatahandler={userDatahandler} />
            <Showuserdata arrData={arrData} setArrData={setArrData}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);