

const Header=(props)=>{
    console.log(props.data.length)
    return(
        <div className="parentheader">
            <h1 className="movie_heading">Movie Booking</h1>
            <span className="movie_number">Total Booked:{props.data.length}</span>
            <div className="movie_findslot">
            <label>Find Slot:</label>
            <input></input>
            </div>
        </div>
    )
}

export default Header;