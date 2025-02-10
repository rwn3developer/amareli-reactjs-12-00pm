import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [errors,setErrors] = useState({});


  const [record,setRecord] = useState([]);
  const [editid,setEditid] = useState("");

  const formValidation = () => {
    let demo = {};
      if(!name){
        demo.name = "Name is Required";
      }
      if(!email){
        demo.email = "Email is Required"
      }
      if(!password){
        demo.password = "Password is Required"
      }  
      setErrors(demo);
      return Object.keys(demo).length == 0;

  }

  
  const handleSubmit = (event) => {
      event.preventDefault();

      console.log(formValidation());
      

      if(formValidation()){
        // let dup = record.filter((val)=>{
      //       return val.task == task
      // })

          
      // if(dup.length == 1){
      //   alert("User already exist")
      //   return false;
      // }

      let obj = {
        userid : Math.floor(Math.random()*1000000),
        name : name,
        email : email,
        password : password
      }

      if(editid){
        let up = record.map((val)=>{
          if(val.taskid == editid){
              val.task = task
          }
          return val;
        })
        setRecord(up);
        alert("record edit")
        setEditid("")
        setTask("")
        
      }else{
        setRecord([...record,obj]); //state update thai gyo kem ke 0 upar pehla readinng hatu readinng to rehshe tena pachhi 1 number par writting aavi jashe
        alert("User add");
        setName("");
        setEmail("");
        setPassword("");
      } 
      }

      

     
  }
  const deleteRecord = (id) => {
    let ddata = record.filter(val => val.userid != id)
    alert("record delete")
    setRecord(ddata);
  }

  const editRecord = (id) => {
    setEditid(id)
    let single = record.filter(val => val.userid==id);
    setName(single[0]?.name);
    setEmail(single[0]?.email);
    setPassword(single[0]?.password);

  }

 
 
  return (
      <div className='container bg-dark' align="center">
         <h2>Add User</h2>
         <form onSubmit={handleSubmit}>
          <table border={1}>
            <tr>
              <td>Name :- </td>
              <input type="text" onChange={ (e) => setName(e.target.value) } value={name}/>
              {errors?.name ? (<p>{errors?.name}</p>) : ''}
            </tr>
            <tr>
              <td>Email :- </td>
              <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
            </tr>
            {errors?.email ? (<p>{errors?.email}</p>) : ''}
            <tr>
              <td>Password :- </td>
              <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}/>
              {errors?.password ? (<p>{errors?.password}</p>) : ''}
            </tr>
            <tr>
              <td></td>
              <td>
                    {
                      editid ? (
                        <button type="submit">Edit</button>
                      ) : (
                        <input type="submit" value="Add" />
                      )
                    }
                      
                  
                </td>
            </tr>
          </table>
         </form>

          <h2>View User</h2>
         <table border={1}>
              <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
              </thead>
              <tbody>
                  {
                      record.map((val,index)=>{
                        return (
                          <tr>
                              <td>{val?.userid}</td>
                              <td>{val?.name}</td>
                              <td>{val?.email}</td>
                              <td>{val?.password}</td>
                              <td>
                                <button onClick={ () => deleteRecord(val?.userid) }>Delete</button> || 
                                <button onClick={ () => editRecord(val?.userid) }>Edit</button>

                  
                              </td>
                          </tr>
                        )
                      })
                  }
              </tbody>
         </table>
      </div>
  )
}

export default App
