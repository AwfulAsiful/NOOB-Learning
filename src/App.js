import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';

import Course from './Components/Course/Course'
import CourseDetails from './Components/CourseDetails/CourseDetails';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';

function App() {

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/course">
              <Course></Course>
            </Route>
            <Route path="/courseDetails/:id">
              <CourseDetails></CourseDetails>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
