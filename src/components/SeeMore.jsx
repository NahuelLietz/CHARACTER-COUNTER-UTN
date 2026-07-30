import { useState } from "react";
import githubIcon from '../assets/github_icon.jpg';
import linkedinIcon from '../assets/linkedin_icon.jpg';
import emailIcon from '../assets/gmail_icon.jpg';
import '../styles/body.css'
function SeeMore({ conteoLetras, totalTextoLimpio }) {
  const [seeMoreButton, setSeeMoreButton] = useState(false);

  
  const tieneMasDeCinco = conteoLetras.length > 5;
  const letrasRestantes = conteoLetras.slice(5);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="letter-density">
      {tieneMasDeCinco && (
        <button
          className="see-more-button"
          onClick={() => setSeeMoreButton(!seeMoreButton)}
          style={{ width: 'auto', padding: '5px 10px', border: 'none', cursor: 'pointer', margin: '10px 0' }}
        >
          {seeMoreButton ? 'See less 🠉' : 'See more 🠋'}
        </button>
      )}

      
      {seeMoreButton && (
        <div className="letter-density" style={{ width: '100%' }}>
          {letrasRestantes.map((item) => {
            const porcentaje = ((item.contador / totalTextoLimpio) * 100).toFixed(2);
            return (
              <div key={item.letra} className="flex-progress-bar">
                <p>{item.letra.toUpperCase()}</p>
                <div className="progress-bar">
                  <div className="barra-1" style={{ width: `${porcentaje}%` }}></div>
                </div>
                <p>{item.contador} ({porcentaje}%)</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { SeeMore };