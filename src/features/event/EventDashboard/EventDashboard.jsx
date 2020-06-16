import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import uuid from "react-uuid";

const mapStateToProps = (state) => ({
  events: state.events,
});

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null,
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = uuid();
    newEvent.hostPhotoURL = "./assets/user.png";
    this.setState({
      events: [...this.state.events, newEvent],
      isOpen: false,
      selectedEvent: null,
    });
  };

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true,
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState(({ events }) => ({
      events: events.map((event) => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null,
    }));
  };

  handleDeleteEvent = (id) => {
    this.setState(({ events }) => ({
      events: events.filter((e) => e.id !== id),
    }));
  };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null,
    });
  };

  handleCreateFormCancel = () => {
    this.setState({
      isOpen: false,
    });
  };
  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Create New Event"
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              selectedEvent={selectedEvent}
              updateEvent={this.handleUpdateEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleCreateFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(EventDashboard);
