import React from 'react';
const initialState = {
        users: [],
        onSetUsers : ()=>{}
}
const UserContext = React.createContext(initialState)

export default UserContext;