import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import CreateATutor from './components/CreateATutor';
import Tutors from './components/Tutors';
import StudentSignUp from './components/StudentSignUp';
import BookLesson from './components/BookLesson';

import canola from './img/canola.jpg';

class App extends Component {
  render = () => {
    return (
      <Router>

      <div className="App" > 
      {/* style={{backgroundImage: "url(" + canola + ")"}} */}
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/createatutor" element={<CreateATutor />} />
        <Route path="/studentsignup" element={<StudentSignUp />} />
        <Route path="/booklesson" element={<BookLesson />} />
        </Routes>
      </div>
      </Router>
    );
  }
}
  

export default App;
