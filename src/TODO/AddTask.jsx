
import React, { useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import ViewTask from "./ViewTask";
import '../App.css';
import NewModal from "../NewModal";

const AddTask = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [assignedTo, setAssignedTo] = useState("");
   const [tasks, setTasks] = useState([]);
   const [isError, setIsError] = useState(false);
   const [error, setError] = useState("");
   const titleChangeHandler = (event) => {
      setTitle(event.target.value);
   };

   const descriptionChangehandler = (event) => {
      setDescription(event.target.value);
   };

   const assignedToChnageHandler = (event) => {
      setAssignedTo(event.target.value);
   };

   const setIsErrortofalse = () => {
      setIsError(false)
   }

   const submitHandler = (event) => {
      event.preventDefault();
      /* setError("Age cannot be less than 1")
      setIsError(true); */
      const task = {
         title: title,
         description: description,
         assignedTo: assignedTo,
         complete: false,
         id: Math.random()
      };

      setTasks([...tasks, task]);
      setTitle("");
      setDescription("");
      setAssignedTo("");
   };

   const taskCompleteHandler = (taskTitle, taskDescription, taskAssignedTo) => {
      console.log(tasks, taskTitle)
       const taskWithCompletedInformation = tasks.filter(task => {
           return taskTitle !== task.title
       })
       console.log(taskWithCompletedInformation)
       setTasks(taskWithCompletedInformation);
   };
   
   return (
      <div>
         <h1>Add Task</h1>
         <Form onSubmit={submitHandler}>
            <div>
               <Label htmlFor="title">Title</Label>
               <Input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={titleChangeHandler}
               />
            </div>
            <div>
               <Label htmlFor="description">Description</Label>
               <Input
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  onChange={descriptionChangehandler}
               />
            </div>
            <div>
               <Label htmlFor="assignedTo">Assigned To</Label>
               <Input
                  type="text"
                  name="assignedTo"
                  id="assignedTo"
                  value={assignedTo}
                  onChange={assignedToChnageHandler}
               />
            </div>
            <div className="mt-4">
               <Button color="danger" className="button-color" type="submit">Add Task</Button>
            </div>
         </Form>
         {tasks.map((task) => {
            return (
               <ViewTask
                  key={task.id}
                  id={task.id}
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

// Two Way Binding
// contorlled Components
// clear the form
// child to parent data

export default AddTask;
