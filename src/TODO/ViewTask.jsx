
const ViewTask = (props) => {
    return (
        <div>
            <h1>View Tasks</h1>
            <div>
                <ul>
                    <li>Title: {props.title}</li>
                    <li>Description: {props.description}</li>
                    <li>AssignedTo: {props.assignedTo}</li>
                </ul>
            </div>
        </div>
    );
}

export default ViewTask;
