import logo from './logo.svg';
import './App.css';
import react , { Component } from 'react' ;
import Header from './compenent/header';
import Demo from './compenent/demo';
import Fetch from './compenent/fetc';
import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom';
import Bigger from './compenent/Bigger';
import Chase from './compenent/chase';
import FormUsers from './compenent/formUser';
import Forme from './compenent/form';
import Form2 from './compenent/Form2';
import Count from './compenent/count';


class App extends Component {
  render() {
  return (
    <Router>
  <div>
    
  <Header/>
  <Routes>    
         <Route path="/"  element={<Fetch />} />
         <Route path="/fetch"  element={<Fetch />} />
         <Route path="/demo"  element={<Demo />} />
         <Route path="/chase"  element={<Chase />} />
         <Route path="/Bigger"  element={<Bigger />} />
         <Route path="/Formuser"  element={<FormUsers />} />
         <Route path="/Form"  element={<Forme />} />
         <Route path="/Form2"  element={<Form2 />} />
         <Route path="/count"  element={<Count />} />



  </Routes>
  </div>
  </Router>
  );
  }
  }

export default App;
