import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Viewpost = () => {
  const navigate = useNavigate();
  const [record,setRecord] = useState(JSON.parse(localStorage.getItem('post')) || [])

   //checkuserlogin
        useEffect(()=>{
              let login = JSON.parse(localStorage.getItem('userLogin'));
              if(!login){
                  navigate('/');
              }
        },[])

  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                      record.map((val,index)=>{
                          return (
                              <tr>
                                <td>{val.postid}</td>
                                <td>{val.title}</td>
                                <td>{val.description}</td>
                                <td>
                                  <img src={val.image} width="100"/>
                                </td>
                                <td>
                                  <button className='btn btn-primary' onClick={ () => navigate(`/editpost`,{state:val}) }>
                                      Edit
                                  </button>
                                </td>
                              </tr> 
                          )
                      })
                  }
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewpost
