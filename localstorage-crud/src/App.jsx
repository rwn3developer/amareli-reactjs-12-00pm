import { useState } from "react";

function App() {

  let getTask = () => {
    let todolist = localStorage.getItem('todo');
    if (todolist) {
      return JSON.parse(todolist);
    }else{
      return [];
    }
  }

  const [record,setRecord] = useState(getTask());
  const [task,setTask] = useState("");
  const [editid,setEditId] = useState("")

  const addTask = (event) => {
    event.preventDefault();
    let obj = {
      taskid : Math.floor(Math.random()*1000000),
      taskname : task
    }

    if(editid){
      let up = record.map((val,index)=>{
        if(val.taskid == editid){
            val.taskname = task
        }
        return val
      })
      setRecord(up);
      localStorage.setItem('todo',JSON.stringify(up));
      alert("update task");
      setEditId("");
      setTask("")
    }else{
      let newdata = [...record,obj]
      setRecord(newdata);
      localStorage.setItem('todo',JSON.stringify(newdata));
      alert("record added");
      setTask("");
    }
  }
  const deleteTask = (id) => {
    let deleterecord = record.filter(val => val.taskid!=id);
    setRecord(deleterecord);
    alert("task delete");
  }
  const editTask = (id) => {
    setEditId(id)
    let single = record.find(val => val.taskid == id);
    setTask(single.taskname);
  }

  return (
      <div align="center">
          <h2>Add Task</h2>
          <form onSubmit={addTask}>
            <table border={1}>
              <tr>
                <td>Task :- </td>
                <td><input type="text" onChange={ (e) => setTask(e.target.value) } value={task} placeholder="Enter your task"/></td>
              </tr>
              <tr>
                <td>
                  {
                      editid ? (
                        <input type="submit" value="Edit"/>
                      ) : (
                        <input type="submit" value="Submit"/>
                      )
                  }
                  
                </td>
              </tr>
            </table>
          </form>
          <h2>View Task</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                record.map((val,index)=>{
                  return (
                    <tr>
                      <td>{val.taskid}</td>
                      <td>{val.taskname}</td>
                      <td>
                        <button onClick={ () => deleteTask(val.taskid) }>Delete</button> || 
                        <button onClick={ () => editTask(val.taskid) }>Edit</button>
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
