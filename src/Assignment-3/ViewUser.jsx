import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import { userActions } from "../Store";

const ViewUser = (props) => {
    const dispatch = useDispatch();
    const deleteUserHandler = () => {
        dispatch(userActions.deleteuser(props.user.username))
        const localStorageusers = JSON.parse(localStorage.getItem("users"))
        const filteredUsers = localStorageusers.filter(user => user.username !== props.user.username)
        localStorage.setItem("users", JSON.stringify(filteredUsers))
    }
    return (
        <React.Fragment>
            <Card>
                <CardBody >
                    <CardTitle className="d-flex"> <div className="flex-fill">{props.user.username} ({props.user.age} Years Old)</div>
                    <Button color="danger" className="d-flex justify-content-end" onClick={deleteUserHandler}>Delete User</Button>
                    </CardTitle>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default ViewUser;
