
import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form,FormGroup,Label,Input,Button, Badge } from "reactstrap";
import UserContext from "../Context/UserContext";
import NewModal from "../NewModal";
import { userActions } from "../Store";
import ViewUser from "./ViewUser";

const AddUser = () => {

    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    /* const ctx = useContext(UserContext); */
    const reduxUsers = useSelector(state => state.user)
    console.log("USERS FROM REDUX", reduxUsers)
    //console.log("CONTEXT from ADD USER ====", ctx)
    const [username,setUsername] = useState("");
    const [name,setName] = useState("")
    const [age, setAge] = useState(0);
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const usernameRef = useRef();
    const ageRef = useRef();
    console.log("AgeRef", ageRef)
    const [todos, setTodos] = useState([]);

    // if dependency array is blank, then it will execute only once at the time of component load.
    useEffect(()=>{
        usernameRef.current.focus()
        console.log("Inside Use Effect");
        const savedUsers = localStorage.getItem("users")
        if(savedUsers){
            console.log("SAVED USERS",JSON.parse(savedUsers))
            setUsers(JSON.parse(savedUsers))
            dispatch(userActions.addBulkUsers(JSON.parse(savedUsers)))
            //ctx.onSetUsers(JSON.parse(savedUsers))
        }
        /* fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setUsers(json)
        }) */
        return ()=> {
            console.log("Unmounting...")
            //ctx.onSetUsers([]);
        }
    },[])
    useEffect(()=> {
        if(username === "Ankita"){
            console.log("hello Ankita")
        }else {
            console.log("hello World")    
        }
       
    },[username,age])


    const setIsErrortofalse = () => {
        setIsError(false)
     }

     const nameChangeHandler = () => {
         setName("hello ")
     }
     
   
    // Field Change Handlers
    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        if(username.length>2 && age>0 && age<126){
            setError(null)
            const user = {
                username: username,
                age: age
            }
            localStorage.setItem("users", JSON.stringify([...users, user]))
            /* ctx.onSetUsers([...users, user]) */
            dispatch(userActions.adduser(user))
            setUsers([...users, user]);
            setTimeout(()=>{
                navigate('/task')   
            },1000)
        }else {
            if(username.length<=0 && age==0){
                setIsError(true)
                setError("Please enter the username and Age Values")
            } else if(username.length<3){
                setIsError(true)
                setError("Username cannot be less than 3 characters")
            } else if(age<0 || age>125) {
                setIsError(true)
                setError("Age cannot be less than 1 and greater than 125")
            }
        }
    }
   return (
       
      <React.Fragment>
          {/* {random()} */}
        <h1 className="text-center">Add User Form</h1>
         <Form onSubmit={submitHandler}>
            <FormGroup>
               <Label for="Username">Username</Label>
               <Input
                  type="text"
                  name="Username"
                  id="Username"
                  placeholder="Username"
                  onChange={usernameChangeHandler}
                  innerRef={usernameRef}
               />
            </FormGroup>
            <FormGroup>
               <Label for="Age">Age</Label>
               <Input
                  type="number"
                  name="Age"
                  id="Age"
                  placeholder="Age"
                  onChange={ageChangeHandler}
                  innerRef={ageRef}
               />
            </FormGroup>
            <Button type="submit" color="primary">Add User</Button>
         </Form>
         {/* {error ? <div className="pt-2"><Badge color="danger">{error}</Badge></div> : ""} */}
         {isError ? <NewModal heading={"Error"} toggle = {setIsErrortofalse}><div>{error}</div></NewModal> : ""}
         <h1 className="text-center pt-5">Added Users</h1>
         {reduxUsers.users.map(user => {
             return <ViewUser user={user} key={user.username}/>
         })}
         <Button onClick={nameChangeHandler}>changeName</Button>
         <ViewUser name={name}/>
      </React.Fragment>
   );
};

export default AddUser;
