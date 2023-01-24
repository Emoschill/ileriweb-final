import Card from "./Card"
const Cardlist = (props) => {
    const cartupdate = props.dizi.map((element, numara)=>{
        return(
            <Card 
            key = {numara}
            element = {element}>
            </Card>
        )
    })

    return(
        <div className="kart-liste">
            {cartupdate}
        </div>
    )
}
export default Cardlist