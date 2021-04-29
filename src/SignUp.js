import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp(){
    const [signup, setSignup]= useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        setSignup({...signup, [e.target.name]: e.target.value});
        
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(signup.firstName, signup.lastName, signup.email, signup.password)
            console.log("form submitted");
            axios.post('https://reqres.in/api/users', signup)
                .then(response=>console.log(response))
                .catch(err=>console.log(err));
    }
    return(
        <div class='container'>
        <h1>
            Sign up!
            </h1>
        <form onSubmit={onSubmit}>
            
            <label>
                First Name: 
            <input 
            type ='text'
            name = 'firstName'
            value={signup.firstName}
            onChange={handleChange}
            />
            </label>
            <label>
                Last Name: 
            <input 
            type ='text'
            name = 'lastName'
            value={signup.lastName}
            onChange={handleChange}
            />
            </label>
            <label>
                Email: 
            <input 
            type ='email'
            name = 'email'
            value={signup.email}
            onChange={handleChange}
            />
            </label>
            <label>
                Password: 
            <input 
            type ='password'
            name = 'password'
            value={signup.password}
            onChange={handleChange}
            />
            </label>
            <button type='submit'>Submit</button>
        </form>
        </div>
    );
}
