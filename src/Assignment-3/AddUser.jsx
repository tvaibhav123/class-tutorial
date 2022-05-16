
import { useState } from "react";
import { Form,FormGroup,Label,Input,Button, Badge } from "reactstrap";
import NewModal from "../NewModal";
import ViewUser from "./ViewUser";
const AddUser = () => {

    // 
    const [username,setUsername] = useState("");
    const [age, setAge] = useState(0);
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);

    const setIsErrortofalse = () => {
        setIsError(false)
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
            setUsers([...users, user]);
        }else {
            if(username.length<=0 && age==0){
                setIsError(true)
                setError("Please enter the username and Age Values")
                console.log("Please enter the username and Age Values")
            } else if(username.length<3){
                setIsError(true)
                setError("Username cannot be less than 3 characters")
                console.log("Username cannot be less than 3 characters")
            } else if(age<0 || age>125) {
                setIsError(true)
                setError("Age cannot be less than 1 and greater than 125")
                console.log("Age cannot be less than 1 and greater than 125");
            }
        }
    }
   return (
      <div>
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
               />
            </FormGroup>
            <Button type="submit" color="primary">Add User</Button>
         </Form>
         {/* {error ? <div className="pt-2"><Badge color="danger">{error}</Badge></div> : ""} */}
         {isError ? <NewModal  error={error} closeError = {setIsErrortofalse}/> : ""}
         <h1 className="text-center pt-5">Added Users</h1>
         {users.map(user => {
             return <ViewUser user={user}/>
         })}
      </div>
   );
};

export default AddUser;
