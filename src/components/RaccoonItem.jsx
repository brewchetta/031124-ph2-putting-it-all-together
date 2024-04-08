function RaccoonItem({ raccoon }) {

    return (
        <li>{ raccoon.name } 
            <img style={ {width: "200px"} } src={raccoon.img_url} alt={raccoon.name} /> 
        </li>
    )

}

export default RaccoonItem