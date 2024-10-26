


const Header=(props)=>{
   const {filter,filterHandler,data}=props;

    return(
        <div className="parentheader">
            <h1 className="movie_heading">Movie Booking</h1>
            <span className="movie_number">Total Booked:{filter.length}</span>
            <div className="movie_findslot">
            <label>Find Slot:</label>
            <input onChange={(e)=>{
                const EnterValue=e.target.value;
                // console.log("enteredValue",EnterValue)
                // console.log("filterdHeader",filter);
               const updatedValue= filter.filter((item)=>{
                     return item.userSeat===EnterValue;
                });
                console.log("filterdHeaderafter",filter);
                // console.log(updatedValue)
                if(EnterValue){
                    filterHandler(updatedValue);
                }
                else{
                    filterHandler(data)
                }
                // console.log("up",updatedValue)
                
            }}></input>
            </div>
            
        </div>
    )
}

export default Header;