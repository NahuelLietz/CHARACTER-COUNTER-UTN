import { useState } from 'react'
function Body(){
    
    return(
        <>
        <div className = "main-flex">

            <div className = "main-card-flex">

                <div className = "header-flex">
                    <div className = "header-card">   
                    <img src = "img\icono.png" alt = "icono de la aplicacion"/>
                    <h2>Character Counter</h2>   

                </div>

                <img src = "img\icono_de_tema.png" alt = "boton de tema"/>

            </div>


            <div className = "tittle-card">
                <h1><span>Analyze your text in real-time.</span></h1>
            </div>  

            <textarea name = "textarea" className = "textarea" rows = "5" >Design is the silent ambassor of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great design transforms complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly.</textarea>
            
            <div className = "checkbox">
                <div className = "checkbox-pointer">
                    <label for = "exclude spaces" style = "cursor: pointer;">
                        <input type = "checkbox" name = "exclude spaces" id = "exclude spaces"/>

                    Exclude spaces
                    </label>
            
                    <input type = "checkbox" name = "set character limit" id = "set character limit"/>
                    <label for = "set character limit" style = "cursor: pointer;">Set character limit</label>

                </div>   
                <p>Approx. reading time: 1minute </p>

            </div>

            <div className="counter-flexbox">
                <div className="card characters-card"flex-grow="1">
                    <div className="card-num">
                        <p>278</p>

                    </div>

                    <div className="card-text">
                        <p>Total Characters</p>

                    </div>
                </div>

                <div className="card word-card"flex-grow="1">
                    <div className="card-num">
                        <p>39</p>

                    </div>

                    <div className="card-text">
                        <p>Word Count</p>

                    </div>
                </div>

                <div className="card sentence-card"flex-grow="1" >
                    <div className="card-num">
                        <p>04</p>

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
                        <p>E</p>

                        <div className="progress-bar">
                            <div className="fillA"></div>

                    </div>
                    <p>40(16.06%)</p>

                    </div>

                <div className="flex-progress-bar">
                        <p>I</p>

                        <div className="progress-bar">
                            <div className="fillE"></div>

                    </div>
                    <p>29(11.65%)</p>

                    </div>

                    <div className="flex-progress-bar">
                        <p>T</p>
                        <div className="progress-bar">
                            <div className="fillI"></div>
                    </div>

                    <p>28(11.24%)</p>

                    </div>

                <div className="flex-progress-bar">

                        <p>O</p>

                        <div className="progress-bar">
                            <div className="fillO"></div>

                        </div>
                        <p>22(08.84%)</p>
                    
                    </div>
                    <div className="flex-progress-bar">
                        <p>N</p>

                        <div className="progress-bar">
                            <div className="fillU">
                            </div>
                        
                        </div>
                        <p>21(08.43%)</p>
                    
                    </div>          
                </div>
            <p>See more ˅</p>
            
            </div>

        </div>
    
        </>
    )
}
export default Body