import React from "react";

import Slide from "./Slide";

export default {
  title: "Slide",
  component: Slide,
};

const Template = (args) => <Slide {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  intervalSeconds: 2,
};
