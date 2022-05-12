import {
   Button,
   Card,
   CardBody,
   CardSubtitle,
   CardText,
   CardTitle,
} from "reactstrap";
import "./task.css";
const ViewTask = (props) => {
   const taskComplete = () => {
      props.onCompleteTask(props.title, props.description, props.assignedTo);
   };
   return (
      <div className="mt-5">
         <h1>View Tasks</h1>
         <div>
            <Card>
               <CardBody>
                  <CardTitle>
                     <span className="title-font">Title: {props.title}</span>
                  </CardTitle>
                  <CardSubtitle>Assigned To: {props.assignedTo}</CardSubtitle>
                  <CardText>
                     Description: {props.description} <br />
                    
                     <div className={props.complete ? "complete" : "incomplete"}> IsCompleted? {props.complete.toString()}</div>
                  </CardText>
                  <Button onClick={taskComplete}>Complete Task</Button>
               </CardBody>
            </Card>
            {/* <ul>
                    <li>ID: {props.id}</li>
                    <li>Title: {props.title}</li>
                    <li>Description: {props.description}</li>
                    <li>AssignedTo: {props.assignedTo}</li>
                    <li>IsCompleted?: {props.complete.toString()}</li>
                </ul>
                <button onClick={taskComplete}>Complete Task</button> */}
         </div>
      </div>
   );
};

export default ViewTask;
