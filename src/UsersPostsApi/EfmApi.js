import React, {useState, useEffect} from 'react'
import General_info from './General_info';

function EfmApi(){

    const [numOfUsers, setNumOfUsers] = useState(0);
    let data = null;

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(response => {
            data = response;
            setNumOfUsers(data.length);
        })
    });

    return(
        <div>
            <h1>Number of Users: {numOfUsers}</h1>
            <General_info data={data}/>

        </div>
    )
}

export default EfmApi;