import React from "react";
import "./style.css";

const Users = ({ users, selectUser }) => {
  return (
    <ul className="user-list-group">
      {users.length !== 0 ? (
        users.map(({ name, id }) => (
          <li className="user-list-item" onClick={selectUser(name)} key={id}>
            {name}
          </li>
        ))
      ) : (
        <li className="user-list-item">Sorry, not user found :(</li>
      )}
    </ul>
  );
};

export default Users;
