import React from "react";
import { Menu, Button } from "semantic-ui-react";
const SignedOutMenu = ({ signin }) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" onClick={signin} />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
