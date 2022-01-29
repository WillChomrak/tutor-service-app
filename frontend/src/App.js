import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import BookLesson from './components/BookLesson';

class App extends Component {
  render = () => {
    return (
      <Router>

      <div className="App">
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booklesson" element={<BookLesson />} />
        </Routes>
      </div>
      </Router>
    );
  }
}
  

export default App;
