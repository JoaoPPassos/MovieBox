import React from "react";

const Icon = (props) => {
  const { name, args } = props;
  return (
    <span className="material-icons" {...args}>
      {name}
    </span>
  );
};

export default Icon;
