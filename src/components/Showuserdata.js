// import Userlist from "./Userlist"

import { useState } from "react"

const Showuserdata=(props)=>{
    // console.log(props.data)
    const [list,setList]=useState({props})
    console.log(list)
    console.log(props)
    if(props.data.length===0){
        return<h1>Nothing Present</h1>
    }
 
    return(
        <div>
            {props.data.map((item,index)=>{
                return (
                    <div className="parentuser">
                    <div className="user">
                      <h2 className="userinfo">{item.userName}{" "}{item.userSeat}</h2>
                    </div>
                    <div>
                    <button className="dbtn" onClick={(e)=>{
                        // let filteredList=list.data.filter((item)=>{
                        //     return item!=e.target.value;
                        // })
                        // setList(filteredList)
                    }}>Delete</button>
                    <button className="ebtn">Edit✎</button>
                    </div>
                 </div>
                )
            })}
        </div>
    )
}

export default Showuserdata;