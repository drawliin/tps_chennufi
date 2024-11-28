import React from 'react';
import EfmApi from './UsersPostsApi/EfmApi';
import IMC from './IMC';
import Connexion from './Connexion'
//import Inscription from './Inscription'


function App() {

  const accounts = [{user: 'houssam', password: '123456'}, {user:'user2', password: 'pass2'}];

  return(
    <>
      <EfmApi/>
      <br></br><hr></hr>

      <IMC/>
      <br/><hr/>

      <Connexion accounts = {accounts}/>
      <br/><hr/>

      

      
    </>
  );
}

export default App;
