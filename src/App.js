import logo from './logo.svg';
import './App.css';
import Landing from './Landing.jsx';
import Header from './header/Header';
import Branding from './branding/Branding';
import AddTask from './TODO/AddTask';
import Counter from './header/Counter';
import AddUser from './Assignment-3/AddUser';
import Parent from './PropsChildren/Parent';
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import UserContext from './Context/UserContext';
import { Provider } from 'react-redux';
import store from './Store';


function App() {
  const name = "Ankita";
  const [showTask, setShowTask] = useState(false);
 
  const toggleComponent = () => {
    setShowTask(!showTask);
  }

  return (
    <Provider store={store}>
      <div className="App">
        
      {/*  <Landing />
        <Header />
        <Branding/> */}
        {/* <Counter></Counter> */}
        <Button size="lg" color="primary" onClick={toggleComponent}>Toggle Components (AddTask and AddUser)</Button>
        {showTask && <AddTask ></AddTask> } 
        {!showTask &&  <AddUser></AddUser>}
        {/* <Parent/> */}
      </div>
    </Provider>
  )
}
//component - function, function name and filename should be same and name should start from a capital letter.

export default App;
