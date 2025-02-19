import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';

import Header from '../component/Header'

const Register = () => {

  const [users,setUser] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) =>{
    event.preventDefault();
      let data = {
          userid : Math.floor(Math.random()*100000),
          name : name,
          email : email,
          password : password
      }
      let newrecord = [...users,data];
      setUser(newrecord)
      localStorage.setItem('users',JSON.stringify(newrecord));
      toast.success("User Added Successfully");
      setName("");
      setEmail("");
      setPassword("");
  }

  return (
    <div>
       <Header/>
        <div className='container mt-5'>
        <h2>User Register</h2>
        <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" onChange={ (e) => setName(e.target.value) } value={name} className="form-control"/>
                                       
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                        <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}  className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password}  className='form-control'/>
                                       
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>


                            </div>
                        </div>

                    </div>
        </div>


        <Link to={`/`}>Login</Link>
        </div>
        <ToastContainer 
                        autoClose={1000} 
                        position="top-center"
          />
    </div>
  )
}


export default Register