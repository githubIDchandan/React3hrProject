import { useState } from "react";

const Userdata=(props)=>{

    const [name,setName]=useState('');
    const [seatNumber,setSeatNumber]=useState('');
    const {userDatahandler}=props;
    let {edit,setEdit}=props;
    
    const addUserDetailHandler=(e)=>{
        e.preventDefault();
        const userData={
            userName:name,
            userSeat:seatNumber
        }
  
       userDatahandler(userData)
       
        setName('');
        setSeatNumber('')
    }

  
    return(
        
        <div className="Userdata">
            <form onSubmit={addUserDetailHandler}>
           <div>
           <label className="userlabel">User Name: </label>
           <input className="userinp"  value={name} onChange={(e)=>{
                setName(e.target.value);
           }}></input>
           <label className="userlabel"> Seat Number: </label>
           <input  className="userinp" type="number"  value={seatNumber} onChange={(e)=>{
            setSeatNumber(e.target.value)
           }}></input>
           <button className="userbtn" onClick={()=>{
      
           
           
           }}>{"Add"}</button>
        </div>
        </form>
      
        </div>

    )
}

export default Userdata;