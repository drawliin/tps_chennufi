import React from 'react';
function General_info(props){
    return(
        <div>
            {props.data.map((element) => {
                <div>
                    <p>nom: {element.name}</p>
                </div>
            })}
        </div>
    );
}
export default General_info;