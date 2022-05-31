import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TodosDetails = () => {
    const params = useParams();
    console.log("Params", params.id)
    const [task, setTask] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
            const json = await response.json()
            console.log("JSON ", json)
            setTask(json)
        }
        fetchData();
       
    }, []);
    return (
        <div>
            <h1>Deatils : {task.id}</h1>
            <div>User ID : {task.userId}</div>
            <div>Title : {task.title}</div>
            {Object.keys(task).length>0 && <div>Is Completed? {task.completed.toString()}</div>}
        </div>
    );
}

export default TodosDetails;
