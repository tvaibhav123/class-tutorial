import React from 'react';

const HOC = (WrappedComponent) => {
    const className = "text-center"
    return ()=>{
        return (
            <div className={className}>
                <WrappedComponent />
            </div>
        );
    }
}

export default HOC;
