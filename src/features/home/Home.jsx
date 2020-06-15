import React from "react";
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Image,
} from "semantic-ui-react";

const Home = (props) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/peeps_logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          After-Events
        </Header>
        <Button
          onClick={() => props.history.push("/events")}
          size="huge"
          inverted
        >
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default Home;
