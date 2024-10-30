
import { useState } from "react"

const Showuserdata=({arrData,setArrData,filterData,setFilterData})=>{

   const [editbtn,setEditbtn]=useState({
    id:111,
    check:false,
   });
  const [name,setName]=useState("")
   console.log("after claen", filterData)
    if(filterData.length===0){
        return<h1>Nothing Present</h1>
    }

    const deleteHandler=(item)=>{
      
        const filter=filterData.filter((arrItem)=>{
            return arrItem.userSeat!=item.userSeat;
        })
    
        setFilterData(filter);
        setArrData(filter)
    }

    const editHandler=(item)=>{
           filterData.map((arrItem)=>{
                if(arrItem.userSeat==item.userSeat){
                     arrItem.userName=name;
                     return filterData;
                }

                
           })
           setFilterData(filterData)
    }

   
   
   return(
    <div>
       
        {
            filterData.map((item,index)=>{
                return(
                    <div key={index} className="showdataparent">
                        
                        <div className="showItem">
                        
                        {console.log(index)}
                        {editbtn.check===true&&editbtn.id===item.userSeat?<input className="editInp" value={name}
                             onChange={(e)=>{
                                 setName(e.target.value)
                             }}
                        ></input>:<h1>{item.userName}</h1>}
                        <h1 className="userseat">{""}{item.userSeat}</h1>
                        </div>
                        <div className="showbtn">
                        <button className="dbtn"
                             onClick={()=>{
                                deleteHandler(item)
                             }}
                        >Delete</button>
                        <button className="ebtn" 
                           onClick={()=>{
                            
                            let ch=!editbtn.check;
                       
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