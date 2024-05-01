
import { useState } from "react"


import "./index.css";



const users = ["Rahul", "Arjun", "Sneha", "Farlin", "Nagarjuna", "Thomas","Ravi","Arun","Radha"]

const TaskSelectionUser = (props)=> {
    const {eachTask,onStatusChnage,id} = props
    const {title,status} = eachTask
 
    const [selectedUser, setSelectedUser] = useState('');
    


    const onClickStart= ()=> {
        onStatusChnage("Started",id)

    }

    const onClickEnd=()=> {
        onStatusChnage("End",id)
    }
    const onClickCompletd = ()=> {
        onStatusChnage("Completed",id)
    }
    console.log(status)

   


    const start = status==="Started"? "started" :""
    const End = status ==="End" ?"End" :"" 
    const completed = status ==="Completed" ? "completed" :"" 
    const pending = status ==="pending" ? "pending" :""
  
    const onChnageOption = (event)=> {
        setSelectedUser(event.target.value)
    }


  

  
    return (
        <>
        <li className="list-style">
            <p className="taskdetails">Task: {title}</p>
           <div>
            <label htmlFor ="selectUser">Select User</label>
            <select id = "selectUser" onChange = {onChnageOption}  defaultValue="Rahul"> 
                {users.map((user,index)=> (
                  <option key ={index} value ={user} >{user}</option>
                ))}
            </select>
            </div>
            <div className="buttons-container">
            {status !== "Completed" && (
              <>
                <button className="buttonStart" onClick= {onClickStart}>
                  Start
                </button>
                <button className="buttonEnd" onClick= {onClickEnd}>
                  End
                </button>
              </>
            )}
            <button className="completedButton" onClick={onClickCompletd}>Completed</button>
            </div>
            <div className="status-container">
            <label>Status</label>
            
           
            <p className={`statusCheck ${start} ${End} ${completed} ${pending} `}>{status}</p>
            </div>
            
        </li>

          {status!=="" ? 
          
          <>
          <p>Task  <b> {title} </b>assigned to <i> {selectedUser}</i> and its status is ,<span className={` ${start} ${End} ${completed} ${pending}`}> {status}</span></p>
         
          </>
          
          
          : ""}
          

        <hr/>
        </>
    )

}



export default TaskSelectionUser