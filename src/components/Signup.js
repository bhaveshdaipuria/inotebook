import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [credentials, setCrendentials] = useState({name: "", email: "", password: ""});
    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch('http://localhost:9001/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token', json.authToken);
            navigate('/');
        }else{
        }
    }

    const onChange = (e)=>{
        setCrendentials({...credentials, [e.target.name]: e.target.value});
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>Name</label>
        <input type='text' className='form-control' id='name' name='name' onChange={onChange} aria-describedby='emailHelp'/>
      </div>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>Email</label>
        <input type='email' className='form-control' id='email' name='email' onChange={onChange} aria-describedby='emailHelp'/>
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input type='password' className='form-control' id='password' name='password' onChange={onChange}minLength={5} aria-describedby='emailHelp'/>
         <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
      </div>
      <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
    </div>
  )
}

export default Signup
