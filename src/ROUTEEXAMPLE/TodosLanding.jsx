import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import TodosDetails from './TodosDetails';

const TodosLanding = () => {

    const name= "Vaibhav"
    

    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const json = await response.json()
            console.log("JSON ", json)
            setTodos(json)
        }
        fetchData();
        return(()=>{

        })
    },[name])
    /* //componentdidmount() {

    }
    //componentdidupdate(){

    }
    //componentdidunmount */

    const openDetails = (id) => {
        navigate(`/todos/details/${id}`)
    }

    return (
        <div>
            <h1 className='text-primary text-center pt-4'>TODOS</h1>
            {todos.map(task => {
                return (
                    <Card className='mt-3'>
                    <CardBody>
                      <CardTitle>User : {task.userId}</CardTitle>
                      <CardSubtitle>Completed : {task.completed.toString()}</CardSubtitle>
                      <CardText>{task.title}</CardText>
                      <Button onClick={(e) => openDetails(task.id)}>view Details</Button>
                    </CardBody>
                  </Card> 
                )
            })}
        </div>
    );
}

export default TodosLanding;
