import React, { useState } from 'react';
import NewModal from '../NewModal';
import Child from './Child';
import ReactDOM from 'react-dom';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [isWarning, setIsWarning] = useState(true);
    const [renderCount, setRenderCount] = useState(false);
    const closeWarning = () => {
        setIsWarning(false)
        setRenderCount(false)
    }
    const handleCountRender = () => {
        setRenderCount(true)
        throw new Error("Here is the BOMB")
    }
    return (
        <div>
            Hello from Parent
            {/* {ReactDOM.createPortal(<Child count={count}>
                <h1>CHILD COMPONENT</h1>
            </Child>, document.getElementById("child"))} */}
            
            {
                isWarning ? 
                    <NewModal heading={"Warning"} toggle={closeWarning}>
                        <div> please Accept All Cookies Before Going Ahead</div>
                    </NewModal>
                :
                ""
            }
            <button onClick={handleCountRender}>Render Count</button>
            {
                renderCount ? 
                    <NewModal heading={"SCORE"} toggle={closeWarning}>
                        <div>Count {count}</div>
                    </NewModal>
                :
                ""
            }
        </div>
    );
}

export default Parent;
