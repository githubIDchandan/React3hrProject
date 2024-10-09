import React, { useState } from "react"
import ReactDOM from "react-dom/client";
import Userdata from "./components/UserData";
import Showuserdata from "./components/Showuserdata";
import Header from "./components/Header";



const AppLayout=()=>{
    // this solution will not work
    // let arrayOfData=[];
    const [arrData,setArrData]=useState([]);

    const userDatahandler=(data)=>{
    //    console.log(arrData)
    //    arrayOfData.push(data)
    // console.log(data.userSeat)
    // console.log(arrData[0].userSeat);
    for(let i=0;i<arrData.length;i++){
        
    
        if(arrData[i].userSeat===data.userSeat){
            // console.log("same")
            return alert("ALREADY BOOKED")
        }
    }
    setArrData([data,...arrData])
    }
   console.log("render")
    return(
        <div>
            <Header data={arrData}/>
            <Userdata onSaveUserData={userDatahandler}/>
            <Showuserdata data={arrData}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);