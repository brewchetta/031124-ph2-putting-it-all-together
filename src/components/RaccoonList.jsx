import { useEffect, useState } from 'react'
import RaccoonItem from './RaccoonItem'
import RaccoonForm from './RaccoonForm'

function RaccoonList() {

    const [raccoons, setRaccoons] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/raccoons')
        .then( res => res.json() )
        .then( raccoonsArray => setRaccoons( raccoonsArray ) )
    }, [])

    const mappedRaccoons = raccoons.map( raccoon => {
        return <RaccoonItem key={raccoon.id} raccoon={raccoon} /> 
    })

    function createRaccoon(name, img_url) {
        fetch('http://localhost:3000/raccoons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name, img_url })
        })
        .then( res => res.json() )
        .then( newRaccoon => setRaccoons( [...raccoons, newRaccoon] ) )
    }

    return (
        <ul>

            <RaccoonForm createRaccoon={createRaccoon} />

            { mappedRaccoons }

        </ul>
    )

}

export default RaccoonList