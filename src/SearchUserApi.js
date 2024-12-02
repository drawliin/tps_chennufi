import React, {useState, useEffect} from 'react'

function SearchUserApi(){

    const [users, setUsers] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));

        return () => {
            return false;
        }

    } ,[])

    useEffect(() => {
        setFilteredData(users)
    } ,[users])

    useEffect(() => {

        const filter = users.filter(user => user.name.toLowerCase().includes(value));
        setFilteredData(filter);

    } ,[value]);


    return(
        <div>
            <h1>SearchUserApi</h1>
            <input type='text' placeholder='Search...' onChange={(e) => setValue(e.target.value.toLowerCase())}/>
            {filteredData.map(user => {
                return(
                    <h3 key={user.id}>
                        {user.name}
                    </h3>
                );
            })}
        </div>
    );
}

export default SearchUserApi;