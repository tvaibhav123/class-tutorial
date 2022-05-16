import { Card, CardBody, CardTitle } from "reactstrap";

const ViewUser = (props) => {
    return (
        <div className="pt-2">
            <Card>
                <CardBody>
                    <CardTitle>{props.user.username} ({props.user.age} Years Old)</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default ViewUser;
