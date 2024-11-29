import React, {useState, useEffect} from 'react'


function Post_Info(props){
    
    const [data, setData] = useState([]);
    const [numOfPosts, setNumOfPosts] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(response => {
            const filteredData = response.filter(element => element.userId === props.userId);
            setData(filteredData);
            setNumOfPosts(filteredData.length);
            setLoading(false);
        }    
                    
        )
    }, [props.userId]);

    return(
        <div>
            <h3>Nombres des posts: {numOfPosts}</h3>
            {loading && <p>Loading...</p>}
            {data.map(element => {
                return(
                    <div className='posts '>
                        <h3>{element.title}</h3>
                        <p>{element.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Post_Info;