import React, { Component } from "react";
import { connect } from "react-redux";
import { Loading, UserList } from "./components";
import { isUsersLoaded, isUseresHasError } from "./selectors";
import { getUserAction } from "./actions";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const {
      props: { getUsers }
    } = this;
    getUsers();
  }
  render() {
    const {
      props: { isUsersLoaded, isError }
    } = this;

    if (isError) {
      return (
        <h2 className="warning">
          Sorry, something went wrong try again later :(
        </h2>
      );
    }

    if (!isUsersLoaded) {
      return <Loading />;
    }

    return (
      <div className="App">
        <UserList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUsersLoaded: isUsersLoaded(state),
  isError: isUseresHasError(state)
});

const mapDispatchToProps = dispatch => ({
  getUsers: getUserAction(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
