import React from 'react';

const Child = (props) => {
    console.log(props)
    return (
        <div>
            {props.children}
            Count is: {props.count}
        </div>
    );
}

export default Child;
