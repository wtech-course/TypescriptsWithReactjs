import { Component } from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "../src/component/add-classrom";
import Tutorial from "../src/component/classroom";
import TutorialsList from "../src/component/classroom-list";
import AddLesson from "./component/add-lesson";
import Lesson from './component/lesson'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          {/* <Link to={"/classroom"} className="navbar-brand">
            bezKoder
          </Link> */}
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link to={"/classroom"} className="nav-link">
                Tutorials
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link to={"/add"} className="nav-link">
                Add
              </Link> */}
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <BrowserRouter>
            <Switch>
              <Route exact path={["/", "/classroom"]} component={TutorialsList} />
              <Route exact path="/add" component={AddTutorial} />
              <Route exact path="/add-lesson/:id" component={AddLesson} />
              <Route path="/classroom/:id" component={Tutorial} />
              <Route path="/lesson/:id" component={Lesson} />
            </Switch>

          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;