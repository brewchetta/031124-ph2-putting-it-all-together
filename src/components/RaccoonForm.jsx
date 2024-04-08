import { useState } from 'react'

function RaccoonForm({ createRaccoon }) {

    // id --> generated automatically
    // name
    // img_url

    const [name, setName] = useState()
    const [img_url, setImgURL] = useState()

    // const [formState, setFormState] = useState({
    //     name: "",
    //     img_url: ""
    // })
    // onChange={event => setFormState({...formState, name: event.target.value})}

    function handleSubmit(event) {
        event.preventDefault()
        createRaccoon(name, img_url)
    }
    
    return (
        <form onSubmit={handleSubmit}>

            <input 
            onChange={event => setName(event.target.value)}
            value={name}
            placeholder="name" />

            <input 
            onChange={event => setImgURL(event.target.value)}
            value={img_url}
            placeholder="image url" />

            <input type="submit" value="Create New Raccoon" />
        </form>
    )

}

export default RaccoonForm