import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getUsersFiltersName } from "../../selectors";
import { updateUserFilterName } from "../../actions";
import { UserInput } from "../UserComponents/UserInput";
import { Users } from "../UserComponents/Users";
import "./style.css";

class UserList extends Component {
  state = {
    open: false
  };

  getFiltersUsers = () => {
    const {
      props: { users, userName }
    } = this;
    return users.filter(({ name }) =>
      name.toLowerCase().includes(userName.toLowerCase())
    );
  };

  selectUser = name => () => {
    const {
      props: { updateUserName }
    } = this;
    this.setState(() => ({ open: false }));
    updateUserName(name);
  };

  handleUpdateUserName = name => {
    const {
      props: { updateUserName },
      state: { open }
    } = this;
    if (!open) this.setState(() => ({ open: true }));
    updateUserName(name);
  };

  render() {
    const {
      props: { userName },
      state: { open },
      getFiltersUsers,
      selectUser,
      handleUpdateUserName
    } = this;
    const filtredUsers = getFiltersUsers();

    return (
      <div className="user-list">
        <UserInput value={userName} onChange={handleUpdateUserName} />
        {userName.length !== 0 && open && (
          <Users selectUser={selectUser} users={filtredUsers} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
  userName: getUsersFiltersName(state)
});

const mapDispatchToProps = dispatch => ({
  updateUserName: updateUserFilterName(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
