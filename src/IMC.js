import React, {useState, useEffect} from 'react'
import './styles/IMC.css'

function IMC(){

    const [poids, setPoids] = useState(0);
    const [taille, setTaille] = useState(0);
    const [imc, setImc] = useState(null);
    const [stat, setStat] = useState('');
    const [style, setStyle] = useState('');

    useEffect(()=>{

        if (imc === null) return;

        setStat(() => {
            if (imc < 18.5){
                return 'Sous poids'
            }else if (imc > 24.5){
                return 'Surpoids'
            }
            return 'Normale'
        });

        setStyle(() => {
            if (imc < 18.5){
                return 'red'
            }
            else if (imc > 24.5){
                return 'orange'
            }
            return 'green';
        })

    }, [imc]);

    function onHandleSubmit(e){
        e.preventDefault();

        if (poids > 0 && taille > 0) {
            setImc((poids / (taille * taille)).toFixed(2));
          }
    }

    return(
        <form className='IMCform' onSubmit={onHandleSubmit}>
            <h2>Indice de masse corporelle</h2>
            <div>
                <label>Poids en Kg</label>
                <input type='number' placeholder='Poids: ' onChange={(e) => setPoids(parseFloat(e.target.value))}/>
            </div>

            <div>
                <label>Taille en mètre</label>
                <input type='number' step='0.01' placeholder='taille: ' onChange={(e) => setTaille(parseFloat(e.target.value))}/>
            </div>

            <button>Calculer</button>

            <span>{imc}</span>
            <span style={{color: style}}>{stat}</span>

        </form>
    )

}

export default IMC;