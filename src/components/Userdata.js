import { useState } from "react";

const Userdata=(props)=>{

    const [name,setName]=useState('');
    const [seatNumber,setSeatNumber]=useState('');

    const addUserDetailHandler=(e)=>{
        e.preventDefault();
        const userData={
            userName:name,
            userSeat:seatNumber
        }
    //    console.log(props)
       props.onSaveUserData(userData)
        // console.log(userData)
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
            // console.log("hii") 
           
           
           }}>ADD</button>
        </div>
        </form>
        {/* {console.log(userData)} */}
        {/* <Showuserdata data={userData}/> */}
        </div>

    )
}

export default Userdata;