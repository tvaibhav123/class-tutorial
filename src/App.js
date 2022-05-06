import logo from './logo.svg';
import './App.css';
import Landing from './Landing.jsx';
import Header from './header/Header';
import Branding from './branding/Branding';

function App() {
  const name = "Ankita";
  return (
    <div className="App">
      Hello {name}. good morning
      <Landing />
      <Header />
      <Branding/>
    </div>
  )
}
//component - function, function name and filename should be same and name should start from a capital letter.

export default App;
