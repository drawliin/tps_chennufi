import React, {useState, useEffect} from 'react'
import General_info from './General_info';
import './style.css'

function EfmApi(){

    const [data, setData] = useState(null);
    const [numOfUsers, setNumOfUsers] = useState(0);
   

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(response => {
            setData(response);
            setNumOfUsers(response.length);
        })
    }, []);

    return(
        <div className='container'>
            <h1>Number of Users: {numOfUsers}</h1>
            {data && <General_info data={data}/>}

        </div>
    )
}

export default EfmApi;