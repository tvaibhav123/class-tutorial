import logo from './logo.svg';
import './App.css';
import Landing from './Landing.jsx';
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
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Header from './Header';
import TodosLanding from './ROUTEEXAMPLE/TodosLanding';
import TodosDetails from './ROUTEEXAMPLE/TodosDetails';

function App() {
  const name="Ankita";
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Parent/>}></Route>
            <Route path="/task" element={<AddTask/>}></Route>
            <Route path="/user" element={<AddUser/>}></Route>
            <Route path="todos" element={<TodosLanding/>}></Route>
            <Route path="todos/details/:id" element={<TodosDetails/>}></Route>
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  )
}
//component - function, function name and filename should be same and name should start from a capital letter.

export default App;
