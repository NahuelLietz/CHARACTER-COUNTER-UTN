import {useState} from 'react'
import '../styles/CounterCharacter.css'
function CounterCharacter(textChanger){
    const [texto,setTexto] = useState('')
    const handleChange = (e) =>{
        const nuevoTexto = e.target.value;
        setTexto(nuevoTexto)
     if(textChanger){
        textChanger(nuevoTexto.length)
    }
}

    return(
        <textarea
            className='textarea'
            rows="5"
            value={texto}
            onChange={handleChange}
            placeholder="Escribe algo aquí..."
        />            
    )
}
export {CounterCharacter}