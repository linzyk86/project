import React, {useState} from 'react';
import axios from 'axios';

export default function Home(){
    const [login, setLogin]= useState({
        username:'',
        password:''
    })

    const handleChange=(e)=>{
        setLogin({...login, [e.target.name]: e.target.value});
        
    }

    const onSubmit=(e)=>{
        e.preventDefault();
            console.log("form submitted");
            axios.post('https://reqres.in/api/users', login)
                .then(response=>console.log(response))
                .catch(err=>console.log(err));
    }

    return(
        <div className='contianer'>
            <h1>
                Login!
            </h1>
            <form onSubmit={onSubmit}>
                
            <label>
                Username: 
            <input 
            type ='text'
            name = 'username'
            value={login.username}
            onChange={handleChange}
            />
            </label>
            <label>
                Password: 
            <input 
            type ='password'
            name = 'password'
            value={login.password}
            onChange={handleChange}
            />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
    )
}