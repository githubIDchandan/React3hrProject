// import Userlist from "./Userlist"

import { useState } from "react"

const Showuserdata=({arrData,setArrData})=>{

   const [editbtn,setEditbtn]=useState({
    id:111,
    check:false,
   });
  const [name,setName]=useState("")
   console.log(editbtn)
    if(arrData.length===0){
        return<h1>Nothing Present</h1>
    }

    const deleteHandler=(item)=>{
        // console.log(item)
        const filter=arrData.filter((arrItem)=>{
            return arrItem.userSeat!=item.userSeat;
        })
        // console.log("jjjj",filter)
        setArrData(filter);
    }

    const editHandler=(item)=>{
           arrData.map((arrItem)=>{
                if(arrItem.userSeat==item.userSeat){
                     arrItem.userName=name;
                     return arrData;
                }

                
           })
           setArrData(arrData)
    }
   
   return(
    <div>
        {
            arrData.map((item,index)=>{
                return(
                    <div key={index} className="showdataparent">
                        
                        <div className="showItem">
                        
                        {console.log(index)}
                        {editbtn.check===true&&editbtn.id===item.userSeat?<input className="editInp" value={name}
                             onChange={(e)=>{
                                 setName(e.target.value)
                             }}
                        ></input>:<h1>{item.userName}</h1>}
                        <h1>{item.userSeat}</h1>
                        </div>
                        <div className="showbtn">
                        <button className="dbtn"
                             onClick={()=>{
                                deleteHandler(item)
                             }}
                        >Delete</button>
                        <button className="ebtn" 
                           onClick={()=>{
                            // console.log(editbtn.check)
                            let ch=!editbtn.check;
                            // console.log(ch)
                            if(editbtn.check){
                                ch=false;
                            }
                            else{
                                ch=true;
                            }
                        
                            setEditbtn({...editbtn,id:item.userSeat,check:ch})

                            if(editbtn.check&&editbtn.id===item.userSeat){
                                editHandler(item)
                                setName("")
                            }
                            else{
                                setName(item.userName)
                            }
                            
                           }}
                        >{(editbtn.check===true&&editbtn.id===item.userSeat)?"📂Save":"✎Edit"}</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
   )
}

export default Showuserdata;