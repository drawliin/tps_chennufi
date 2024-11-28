import React, {useState} from 'react';
import Post_Info from './Post_info';
import './style.css'
function General_info(props){

    const [postState, setPostState] = useState(false);


    return(
        <div>
            {props.data.map((element) => {
                return(
                    <div key={element.id} className='userInfo'>
                        <p>Nom: {element.name}</p>
                        <p>Email: {element.email}</p>
                        <p>Ville: {element.address.city}</p>
                        <button onClick={() => setPostState(ps => !ps)}>detail posts</button>
                        {postState && <Post_Info userId={element.id}/>}
                    </div>
                )
            })}
        </div>
    );
}
export default General_info;