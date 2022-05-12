import logo from './logo.svg';
import './App.css';
import Landing from './Landing.jsx';
import Header from './header/Header';
import Branding from './branding/Branding';
import AddTask from './TODO/AddTask';
import Counter from './header/Counter';

function App() {
  const name = "Ankita";
  return (
    <div className="App">
      
     {/*  <Landing />
      <Header />
      <Branding/> */}
      {/* <Counter></Counter> */}
      <AddTask ></AddTask>
    </div>
  )
}
//component - function, function name and filename should be same and name should start from a capital letter.

export default App;
