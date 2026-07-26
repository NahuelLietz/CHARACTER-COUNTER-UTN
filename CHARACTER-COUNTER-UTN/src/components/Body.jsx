import { useState } from 'react'
import icono from '../assets/icono.png'
import icono_tema from '../assets/icono_de_tema.png'
import '../styles/body.css'
import { BotonDeTema } from './BotonDeTema.jsx'

function Body(){
    /*TextArea*/
    const [textArea,setTextArea] = useState('')
    
    const [excluirEspacios,setExcluirEspacios] = useState(false)
    
    const cantidadDeLetras = excluirEspacios 
    ? textArea.replace(/\s+/g, "") 
    : textArea;

    const cantidadDePalabras = textArea.trim() === ''
    ?0: textArea.trim().split(/\s+/).length;
    
    const cantidadDeOraciones = textArea.trim() === ''?
    0 : textArea.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const textAreaCompleto = textArea.trim().split(/\s+/)
    let primeraLetra, segundaLetra, terceraLetra, cuartaLetra, quintaLetra;
    
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

    conteoLetras.sort((a, b) => b.contador - a.contador);
    const top5Letras = conteoLetras.slice(0, 5);
    
    return(
        <>
        

            <div className = "main-card-flex">

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
                <p>Approx. reading time: 1minute </p>

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

            <div className = "titulo-letter-density">
                <h2>Letter Density</h2>

            </div>

            <div className = "letter-density">
                    <div className = "flex-progress-bar">
                        <p>{top5Letras[0]}</p>

                        <div className="progress-bar">
                            <div className="barra-1"></div>

                    </div>
                    <p>40(16.06%)</p>

                    </div>

                <div className="flex-progress-bar">
                        <p>I</p>

                        <div className="progress-bar">
                            <div className="barra-2"></div>

                    </div>
                    <p>29(11.65%)</p>

                    </div>

                    <div className="flex-progress-bar">
                        <p>T</p>
                        <div className="progress-bar">
                            <div className="barra-3"></div>
                    </div>

                    <p>28(11.24%)</p>

                    </div>

                <div className="flex-progress-bar">

                        <p>O</p>

                        <div className="progress-bar">
                            <div className="barra-4"></div>

                        </div>
                        <p>22(08.84%)</p>
                    
                    </div>
                    <div className="flex-progress-bar">
                        <p>N</p>

                        <div className="progress-bar">
                            <div className="barra-5">
                            </div>
                        
                        </div>
                        <p>21(08.43%)</p>
                    
                    </div>          
                </div>
            <p>See more ˅</p>
            
            </div>

        
    
        </>
    )
}
export default Body