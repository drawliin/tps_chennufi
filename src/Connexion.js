import React, {useState} from 'react';
import './styles/connexionTp.css';

function Connexion(props) {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    user: '',
    password: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);



  function onHandleSubmit(e){
    e.preventDefault();

    if(user !== props.accounts[0].user){
      setErrorMessages({...errorMessages, user: 'username error', password: ''})
    }else if (password != props.accounts[0].password){
      setErrorMessages({...errorMessages, password: 'password error', user: ''})
    }else{
      setErrorMessages({user: '', password: ''});
      setIsSubmitted(true);
    }



  }


  return (
    <div className="App">
      {!isSubmitted && (
        <form onSubmit={onHandleSubmit}>
        <h1>Connexion</h1>
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" onChange={(e) => setUser(e.target.value)}/>
        {errorMessages.user ? <span>{errorMessages.user}</span> : null}
        <label>Password: </label>
        <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}/>
        {errorMessages.password ? <span>{errorMessages.password}</span> : null}
        <button>Connecter</button>
      </form>
      )}
      {isSubmitted && (<p>Welcome {user}</p>)}
    </div>
  );
}

export default Connexion;
