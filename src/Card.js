const Card = (props) => {
   const {id,firstName, lastName , email , address} = props.element;
    return(
        <div className="kart">
            <h1> {firstName} </h1>
            <h1> {lastName} </h1>
            <h1> {email} </h1>
            <h1> {address.city} </h1>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${firstName}`} />
        </div>
    )
}

export default Card