import React, { useState } from "react";
import ViewTask from "./ViewTask";

const AddTask = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [assignedTo, setAssignedTo] = useState("");

   const [tasks, setTasks] = useState([]);

   const titleChangeHandler = (event) => {
      setTitle(event.target.value);
      //console.log(title)
   };

   const descriptionChangehandler = (event) => {
      setDescription(event.target.value);
   };

   const assignedToChnageHandler = (event) => {
      setAssignedTo(event.target.value);
   };

   const submitHandler = (event) => {
      event.preventDefault();
      const task = {
         title: title,
         description: description,
         assignedTo: assignedTo,
         complete: false
      };

      setTasks([...tasks, task]);
      setTitle("");
      setDescription("");
      setAssignedTo("");
   };

   const taskCompleteHandler = (taskTitle, taskDescription, taskAssignedTo) => {
       const taskWithCompletedInformation = tasks.map(task => {
           if(task.title === taskTitle){
               task.complete = true;
           }
           return task;
       })
       setTasks(taskWithCompletedInformation);
   };
   return (
      <div>
         <h1>Add Task</h1>
         <form onSubmit={submitHandler}>
            <div>
               <label htmlFor="title">Title</label>
               <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={titleChangeHandler}
               />
            </div>
            <div>
               <label htmlFor="description">Description</label>
               <input
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  onChange={descriptionChangehandler}
               />
            </div>
            <div>
               <label htmlFor="assignedTo">Assigned To</label>
               <input
                  type="text"
                  name="assignedTo"
                  id="assignedTo"
                  value={assignedTo}
                  onChange={assignedToChnageHandler}
               />
            </div>
            <div>
               <button type="submit">Add Task</button>
            </div>
         </form>
         {tasks.map((task) => {
            return (
               <ViewTask
                  title={task.title}
                  description={task.description}
                  assignedTo={task.assignedTo}
                  complete = {task.complete}
                  onCompleteTask={taskCompleteHandler}
               />
            );
         })}
      </div>
   );
};

//TwoWay Binding
// contorlled Components
// clear the form
// child to parent data

export default AddTask;
