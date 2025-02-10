import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [forminput,setFormInput] = useState([
    {id :  '',name : '',phone:''},
  ])

  const [records,setRecords] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const addField = () => {
    let newField = {
          id : Math.floor(Math.random()*10000000),
          name : '',
          phone : ''
    }
    setFormInput([...forminput,newField])
  }
  //delete field
  const removeField = (id) => {
    let deleterecord = forminput.filter(val => val.id != id);
    alert("delete Field");
    setFormInput(deleterecord)
  }

  const changeInput = (event,index) => {
    let data = [...forminput];

    // console.log(event.target.name,event.target.value);

    data[index][event.target.name] = event.target.value;
    setFormInput(data)
  }

  const handleSubmit = () => {
    
    let newRecord = [...records,...forminput]
    localStorage.setItem('users',JSON.stringify(newRecord))
    alert("record add");
    setFormInput([{name : '',phone : ''}]);
  }
 
  
  return (
    <>
        <div align="center">
        <h2>Dynamic form</h2>
        {
          forminput.map((val,index)=>{
            return (
              <tr>
                    <td>Name :- </td>
                    <td><input type="text" onChange={ (event) => changeInput(event,index) } name="name" value={val.name}/></td>
                    <td>Phone : </td>
                    <td><input type="number" onChange={ (event) => changeInput(event,index) }  name="phone" value={val.phone}/></td>
                    <td>
                      {
                          index == 0 ? (
                              ""
                          ) : (
                            <button onClick={ () => removeField(val?.id) }>X</button>
                          )
                      }
                    </td>
                  </tr>
            )
          })
        }  
          <button onClick={ () => addField() }>Add</button>
          <br></br>
          <button onClick={ () => handleSubmit() }>Submit</button>
        </div>
    </>
  )
}
export default App
