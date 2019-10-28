import React from "react";
import "./style.css";

const UserInput = ({ value, onChange }) => {
  const _onChange = ({ target: { value } }) => onChange(value);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={_onChange}
        className="user-input"
        placeholder="Search user"
      />
    </div>
  );
};

export default UserInput;
