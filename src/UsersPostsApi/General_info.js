import React, {useState} from 'react';
import Post_Info from './Post_info';

function General_info(props){

    const [activeId, setActiveId] = useState({});

    

    function handlePostPreview(id) {
        setActiveId((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
}

    




    return(
        <div>
            {props.data.map((element) => {
                return(
                    <div key={element.id} className='userInfo'>
                        <p><b>Nom:</b> {element.name}</p>
                        <p><b>Email</b>: {element.email}</p>
                        <p><b>Ville</b>: {element.address.city}</p>
                        <button onClick={() => handlePostPreview(element.id)}>detail posts</button>
                        {activeId[element.id] && <Post_Info userId={element.id} />}
                    </div>
                )
            })}
        </div>
    );
}
export default General_info;