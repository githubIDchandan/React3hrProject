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
        
        <div >
            <form onSubmit={addUserDetailHandler}>
           <div>
           <label>User Name:</label>
           <input value={name} onChange={(e)=>{
                setName(e.target.value);
           }}></input>
           <label>Seat Number:</label>
           <input type="number" value={seatNumber} onChange={(e)=>{
            setSeatNumber(e.target.value)
           }}></input>
           <button onClick={()=>{
      
           
           
           }}>ADD</button>
        </div>
        </form>
      
        </div>

    )
}

export default Userdata;