import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedOutMenu from "../Menus/SignedOutMenu";
import { SignedInMenu } from "../Menus/SignedInMenu";
class Navbar extends Component {
  state = {
    authenticated: false,
  };

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <img src="assets/peeps_logo.png" alt="logo" width="200" />
            After-Events
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item>
            <Button
              as={NavLink}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu signout={this.handleSignOut} />
          ) : (
            <SignedOutMenu signin={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
