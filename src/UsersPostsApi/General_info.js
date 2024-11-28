import React, {useState} from 'react';
import './style.css'
function General_info(props){
    return(
        <div>
            {props.data.map((element) => {
                return(
                    <div key={element.id} className='userInfo'>
                        <p>Nom: {element.name}</p>
                        <p>Email: {element.email}</p>
                        <p>Ville: {element.address.city}</p>
                        <button>detail posts</button>
                    </div>
                )
            })}
        </div>
    );
}
export default General_info;