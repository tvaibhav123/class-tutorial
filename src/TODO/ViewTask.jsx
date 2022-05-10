
const ViewTask = (props) => {
    const taskComplete = () => {
        props.onCompleteTask(props.title, props.description, props.assignedTo)
    }
    return (
        <div>
            <h1>View Tasks</h1>
            <div>
                <ul>
                    <li>Title: {props.title}</li>
                    <li>Description: {props.description}</li>
                    <li>AssignedTo: {props.assignedTo}</li>
                    <li>IsCompleted?: {props.complete.toString()}</li>
                </ul>
                <button onClick={taskComplete}>Complete Task</button>
            </div>
        </div>
    );
}

export default ViewTask;
