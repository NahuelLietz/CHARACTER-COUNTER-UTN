import '../styles/header.css'

import icono from '../assets/icono.png'
import { BotonDeTema } from './BotonDeTema.jsx'
function Header(){
    
    return(
        <>
            <div className = "header-flex">
                    <div className = "header-card">   
                    <img 
                    src = {icono} 
                    alt = "icono de la aplicacion" 
                    id='icono-de-la-aplicacion'/>  
                    <h2>Character Counter</h2> 

                    </div>
                    <BotonDeTema/>
            </div>
            <div className = "tittle-card">
                <h1><span>Analyze your text in real-time.</span></h1>

             </div> 
            
            
        </>)


}
export {Header}