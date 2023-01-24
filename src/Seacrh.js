const Seacrh = (props) => {
    const func = props.searchevent
    return (
        <input onChange = {e => func(e)} type = "search" className="search-box"/>
    )
}
export default Seacrh;