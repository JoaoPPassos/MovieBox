import React from "react";

const Icon = (props) => {
  const { name } = props;
  return (
    <span className="material-icons" {...props}>
      {name}
    </span>
  );
};

export default Icon;
