// import Userlist from "./Userlist"

import { useState } from "react"

const Showuserdata=({filter,setfilter,setArrData,editHandler})=>{

 
    if(filter.length===0){
        return<h1>Nothing Present</h1>
    }
    const removeHandler=(id)=>{
        
       const filterData=   filter.filter((item)=>{
            return item.userSeat!=id;
          })
      
          setfilter(filterData)
        setArrData(filterData)
    }
    return(
        <div>
            {filter.map((item,index)=>{
                return (
                    <div key={index} className="parentuser">
                    <div className="user">
                      <h2 className="userinfo">{item.userName}{" "}{item.userSeat}</h2>
                    </div>
                    <div>
                    <button className="dbtn" onClick={()=>{
                        removeHandler(item.userSeat)
                    }}>Delete</button>
                    <button className="ebtn" onClick={()=>{
                        removeHandler(item.userSeat)
                        editHandler(
                            {
                            userName:item.userName,
                            userSeat:item.userSeat
                        })
                    }}>Edit✎</button>
                    </div>
                 </div>
                )
            })}
        </div>
    )
}

export default Showuserdata;