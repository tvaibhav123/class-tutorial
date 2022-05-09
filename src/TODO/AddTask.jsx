import React, { useState } from 'react';
import ViewTask from './ViewTask';

const AddTask = () => {
    
    const [tasks, setTasks] = useState([]);
    const submitHandler = (event) => {
        event.preventDefault();
       
        const task = {
            title : event.target[0].value,
            description: event.target[1].value,
            assignedTo: event.target[2].value
        }
        setTasks([...tasks, task])
        //setTasks([[],{title:"asdfa",description:"asdf",assignedTo:"asdf"}])
        //console.log("Form", "title:",title," Description:",description, " AssignedTo:",assignedTo)
    }
    
    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" />
                </div>
                <div>
                    <label htmlFor="assignedTo">Assigned To</label>
                    <input type="text" name="assignedTo" id="assignedTo" />
                </div>
                <div>
                    <button type="submit">Add Task</button>
                </div>
            </form>
            {/* <div>   
                {task.title} -  {task.description} - {task.assignedTo}
            </div> */}
            
            {
                tasks.map((task) => {
                    return (
                        <ViewTask title={task.title} description={task.description} assignedTo={task.assignedTo}/>
                    )
                })
            }
            
        </div>
    );
}

//title   <inout element>
//task Description <input element>
//assignedTo 
export default AddTask;
