import {Component} from "react"

import {v4 as uuidv4} from "uuid"

import TaskSelectionUser  from "../TaskSelectionUser"

import "./index.css";



class Task extends Component {

    state = {
        tasks: [], 
       
       
        
        
      
      }

   onChangeInput = (event)=> {
    this.setState({newTask:event.target.value,showError:false})
    
}
  onClcikButton = ()=> {
    const {newTask,tasks} = this.state 
    if (newTask.trim()!=="") {
    const addedTask = {
        id : uuidv4(), 
        title : newTask, 
        status:""
       
     
    }

    const updatedTask = [...tasks,addedTask]
    this.setState({tasks:updatedTask, newTask:""})
    }
    else {
        alert("Enter a proper input")
    }
    }

 onStatusChnage = (statusText,id)=> {
    const {tasks} = this.state
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
          // Update the status of the task
          return {
              ...task,
              status: statusText
          };
      }
      return task;
  })
  this.setState({tasks:updatedTasks})
}

    
  getTasks = ()=> {
    const {tasks,status} = this.state
   

    return (
        <ul className="task-list-container">
   
        {tasks.map((eachTask)=> (
            <TaskSelectionUser eachTask={eachTask} id = {eachTask.id }key = {eachTask.id} onStatusChnage = {this.onStatusChnage} status={status} />
           
        ))}
        </ul>
    )
    
  }
  
    

  render() {
    const { tasks, newTask, showError } = this.state;
    

   
    return (
      <div className="main-contaier">
        <h1>Task List</h1>

        <input type = "text" onChange={this.onChangeInput} value ={newTask}  placeholder="Enter the task"/>
        {showError ? <p>Enter valid input</p> : null}
        <br/>
        <button className="addTaskButton" onClick={this.onClcikButton}>Add Task</button>
        
       {tasks.length >0 ? (this.getTasks()) : null }
      
        
      </div>
    )
  }


    
}




export default Task