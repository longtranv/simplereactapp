import axios from 'axios';
import React from 'react';

const client = axios.create({
    baseURL:"https://mysimple-api.herokuapp.com/api"
})
export default function App(){
    const [post, setPost]=React.useState(null);

    React.useEffect(()=>{
        async function getPost(){
            const respone = await client.get("/get");

        }
    })
}
