import { useState, useEffect } from 'react'
import icono_oscuro from '../assets/icono_de_tema.png'
import icono_claro from '../assets/icono_de_tema_claro.png'
import '../styles/BotonDeTema.css'
function BotonDeTema(){
    const [tema, setTema] = useState('dark-theme')
    useEffect(() => {
        if (tema === 'dark') {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    }, [tema])
    const cambiarTema = () => {
        setTema(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    return(
        <>
        <button 
            onClick={cambiarTema} 
            className="theme-btn" 
            type="button"
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
            }}
        >
            <img 
                src={tema === 'dark' ?  icono_oscuro:icono_claro} 
                alt={`Cambiar a modo ${tema === 'light' ? 'oscuro' : 'claro'}`}
                style={{ width: '32px', height: '32px' }} 
            />
        </button>
        
    </>
    )
}
export {BotonDeTema}