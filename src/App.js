import React, { Component, Fragment } from "react";

import "./App.css";
import EventDashboard from "./features/event/EventDashboard/EventDashboard";
import Navbar from "./features/nav/Navbar/Navbar";
import { Container } from "semantic-ui-react";
import Home from "./features/home/Home";
import { EventDetailedPage } from "./features/event/EventDetailed/EventDetailedPage";
import UserDetailedPage from "./features/user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "./features/user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "./features/user/Settings/SettingsDashboardPage";
import EventForm from "./features/event/EventForm/EventForm";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Navbar />
              <Container className="main">
                <Route exact path="/events" component={EventDashboard} />
                <Route exact path="/events/:id" component={EventDetailedPage} />
                <Route exact path="/people" component={PeopleDashboard} />
                <Route exact path="/profile/:id" component={UserDetailedPage} />
                <Route exact path="/settings" component={SettingsDashboard} />
                <Route path="/settings/:name" component={SettingsDashboard} />

                <Route exact path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
