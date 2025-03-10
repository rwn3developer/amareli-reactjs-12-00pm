import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import Header from '../component/Header'

const Register = () => {

  const [users, setUser] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  useEffect(()=>{
    let login = JSON.parse(localStorage.getItem('userLogin'));
    if(login){
      navigate('/addpost');
    }
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
      let  login = users.find(val => val.email == email && val.password == password);
      if(login){
        localStorage.setItem('userLogin',JSON.stringify(login))
        toast.success("Login Successfully");
        setTimeout(()=>{
          navigate('/addpost')
        },2000);
      }else{
        toast.error('Invalid email or password')
      }
      
    
  }

  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <h2>User Login</h2>
        <div className="row mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='form-control' />

                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>


              </div>
            </div>

          </div>
        </div>


        <Link to={`/register`}>Register</Link>
      </div>
      <ToastContainer
        autoClose={1000}
        position="top-center"
      />
    </div>
  )
}


export default Register