import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing.jsx";
import Branding from "./branding/Branding";
import AddTask from "./TODO/AddTask";
import Counter from "./header/Counter";
import AddUser from "./Assignment-3/AddUser";
import Parent from "./PropsChildren/Parent";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import UserContext from "./Context/UserContext";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Header from "./Header";
import TodosLanding from "./ROUTEEXAMPLE/TodosLanding";
import TodosDetails from "./ROUTEEXAMPLE/TodosDetails";
import EnhancedParagraph from "./HOC/EnhancedParagraph";
import ErrorBoundary from "./ErrorBoundary";

function App() {
   const name = "Ankita";
   const loggedInUser = localStorage.getItem("loggedInUser");
   console.log("loggedInUser", loggedInUser);
   return (
      <ErrorBoundary>
         <BrowserRouter>
            <Provider store={store}>
               <div className="App">
                  <Header />
                  <Routes>
                     <Route path="/" element={<Parent />}></Route>
                     <Route path="/Login" element={<Parent />}></Route>
                     <Route path="/Register" element={<Parent />}></Route>
                     <Route path="/task" element={<AddTask />}></Route>
                     <Route
                        path="/paragraph"
                        element={<EnhancedParagraph />}
                     ></Route>

                     {<Route path="/user" element={<AddUser />}></Route>}
                     {loggedInUser && (
                        <Route path="todos" element={<TodosLanding />}></Route>
                     )}
                     {loggedInUser && (
                        <Route
                           path="todos/details/:id"
                           element={<TodosDetails />}
                        ></Route>
                     )}
                     {loggedInUser && (
                        <Route path="*" element={<PageNotFound />} />
                     )}
                  </Routes>
               </div>
            </Provider>
         </BrowserRouter>
      </ErrorBoundary>
   );
}
//component - function, function name and filename should be same and name should start from a capital letter.

export default App;
