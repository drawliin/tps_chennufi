import React, {useState} from 'react'
import './styles/inscription.css'
function Inscription(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');
    const [ville, setVille] = useState('Casablanca');
    const [genre, setGenre] = useState('');
    const [loisirs, setLoisirs] = useState([]);
    


    function onHandleLoisirs(e){
        
        setLoisirs((prevL) => 
            e.target.checked
            ? [...prevL, e.target.value]
            : prevL.filter(loisir => loisir !== e.target.value)
        )
    }
    function onHandleSubmit(e){
        const arr = [...loisirs];

        e.preventDefault();

        alert(`Je suis ${username}, un ${genre.toLowerCase()} né le ${date} à ${ville} et mes loisirs sont : ${arr.join(' ')}`);

        setLoisirs([]);

    }

    return(
        <form className='Inscription_form' onSubmit={onHandleSubmit}>
            <div className='username'>
                <label>Username</label>
                <input type="text" placeholder="Enter username: "  onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className='password'>
                <label>Password</label>
                <input type="password" placeholder="Enter password: " onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className='birth'>
                <label>Birth Date</label>
                <input type="date" onChange={(e) => setDate(e.target.value)}/>
            </div>

            <div className='select'>
                <label>Ville</label>
                <select value={ville} onChange={(e) => setVille(e.target.value)}>
                    <option value='Casablanca'>Casablanca</option>
                    <option value='Rabat'>Rabat</option>
                    <option value='Oujda'>Oujda</option>
                </select>
            </div>

            <div className='radio'>
                <span>Genre</span>
                <label><input type='radio' name='genre' value='Homme' onChange={(e) => setGenre(e.target.value)}/> Homme</label> 
                <label><input type='radio' name='genre' value='Femme' onChange={(e) => setGenre(e.target.value)}/> Femme</label> 
            </div>

            <div className='checkbox'>
                <span>Loisirs</span>
                <label><input type='checkbox' value='Sport' onChange={onHandleLoisirs}/> Sport</label> 
                <label><input type='checkbox' value='Lecture' onChange={onHandleLoisirs}/> Lecture</label> 
                <label><input type='checkbox' value='Musique' onChange={onHandleLoisirs}/> Musique</label> 
            </div>

            <button>Inscrire</button>

            
        </form>
    );
}
export default Inscription;