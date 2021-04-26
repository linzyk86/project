import React, { useState } from 'react';

export default function SignUp(){
    const [signup, setSignup]= useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        cfPassword:'',
        phoneNum:''
    })
    return(
        <div class='container'>
        <h1>
            Sign up!
            </h1>
        <form>
            
            <label>
                First Name: 
            <input 
            type ='text'
            name = 'firstName'
            value={signup.firstName}
            // onChange={handleChange}
            />
            </label>
        </form>
        </div>
    );
}
