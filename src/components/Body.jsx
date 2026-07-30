import { useState } from 'react'
import icono from '../assets/icono.png'
import icono_tema from '../assets/icono_de_tema.png'
import '../styles/body.css'
import { BotonDeTema } from './BotonDeTema.jsx'
import {SeeMore} from './SeeMore.jsx'
import {Header} from './Header.jsx'

function Body(){
    const inicio = performance.now()
    let fin 
    const [textArea,setTextArea] = useState('')
  
    /*Excluir espacios*/
    const [excluirEspacios,setExcluirEspacios] = useState(false)

   

    /*Card cantidad de letras*/
    const cantidadDeLetras = excluirEspacios 
    ? textArea.replace(/\s+/g, "") 
    : textArea;

    /*Cantidad De Palabras*/
    const cantidadDePalabras = textArea.trim() === ''
    ?0: textArea.trim().split(/\s+/).length;

    /*Cantidad De Oraciones*/
    const cantidadDeOraciones = textArea.trim() === ''?
    0 : textArea.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

    /*Estadisticas letras*/
    
    const conteoLetras = [];
    const textoLimpio = textArea ? textArea.toLowerCase().replace(/[^a-záéíóúñ]/g, "") : "";

    for (let i = 0; i < textoLimpio.length; i++) {
        const caracter = textoLimpio[i];
        const elementoExistente = conteoLetras.find(item => item.letra === caracter);
        
        if (elementoExistente) {
            elementoExistente.contador += 1;
        } else {
            conteoLetras.push({ letra: caracter, contador: 1 });
        }
    }
    /*ordeno el array por contador*/
    conteoLetras.sort((a, b) => b.contador - a.contador);
    const top5Letras = conteoLetras.slice(0, 5);
    
    return(
        <>
        

            <div className = "main-card-flex">
                <Header></Header>
                 <textarea
                    className='textarea'
                    rows="5"
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                    placeholder="Escribe algo aquí..."
                    spellCheck={false} /* desabillita el autocorrector de la web */
                />
            
                        
                <div className = "checkbox">
                    
                    <div className = "checkbox-pointer">

                        <label 
                        htmlFor="exclude spaces" 
                        style={{ cursor: 'pointer' }}
                        >
                            <input type="checkbox" 
                            name="exclude spaces" 
                            id="exclude spaces"
                            checked = {excluirEspacios}
                            onChange={(e) => setExcluirEspacios(e.target.checked)}
                            />
                            Exclude spaces
                        </label>
                    </div>
                    {!textArea?(<p></p>):(<p>Approx. reading time: {(performance.now()-inicio).toFixed(2)} ms</p>)}
        
                </div>
            

            <div className="counter-flexbox">
                <div className="card characters-card" style={{flexGrow: 1}}>
                    <div className="card-num">
                        <p >
                        {cantidadDeLetras.length}</p>

                    </div>

                    <div className="card-text">
                        <p>Total Characters</p>

                    </div>
                </div>

                <div className="card word-card" style={{flexGrow: 1}}>
                    <div className="card-num">
                        <p>{cantidadDePalabras}</p>

                    </div>

                    <div className="card-text">
                        <p>Word Count</p>

                    </div>
                </div>

                <div className="card sentence-card"  style={{flexGrow: 1}} >
                    <div className="card-num">
                        <p>{cantidadDeOraciones}</p>

                    </div>

                    <div className="card-text">
                        <p>Sentence Count</p>

                    </div>
                </div>
                
            </div>

           <div className="letter-density">
            {conteoLetras.length === 0 ? (<p>No characters found</p>) :(top5Letras.map(  
                (item) => 
                    {
                    const porcentaje = ((item.contador / textoLimpio.length) * 100).toFixed(2);
                    return (
                            <div key={item.letra} className="flex-progress-bar">
                            <p>{item.letra.toUpperCase()}</p>

                            <div className="progress-bar">
                                <div 
                                className="barra-1" 
                                style={{ width: `${porcentaje}%` }}
                                ></div>
                            </div>

                                <p>{item.contador}({porcentaje}%)</p>
                            </div>
                            )
                    }
                )
                )
                    
            }
            <SeeMore
            conteoLetras={conteoLetras} 
            totalTextoLimpio={textoLimpio.length}/>
            </div>      
            </div> 
            
            
            

        
    
        </>
    )
}
export default Body