
const Header=({arrData,setFilterData})=>{
   
    const filterHandler=(val)=>{
        console.log(val)
        const filter=arrData.filter((item)=>{
            return item.userSeat===val;
        })
            setFilterData(filter);
       
    }

    return(
        <div className="parentheader">
            <h1 className="movie_heading">Movie Booking</h1>
            <span className="movie_number">Total Booked: <button className="totalbookbtn">{arrData.length}</button></span>
            <div className="movie_findslot">
            <label className="findslot">Find Slot:</label>
            <input type="number" className="findslotInp" onChange={(e)=>{
            
              if(e.target.value){
                filterHandler(e.target.value);
              }
              else{
                setFilterData(arrData)
              }

            }}></input>
            </div>
            
        </div>
    )
}

export default Header;