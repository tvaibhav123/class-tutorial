import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const ViewUser = (props) => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle>{props.user.username} ({props.user.age} Years Old)</CardTitle>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default ViewUser;
