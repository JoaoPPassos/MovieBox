import { object } from "prop-types";
import React from "react";

import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    autocomplete: {
      control: "boolean",
    },
    value: {
      type: "string",
    },
    loading: {
      control: "boolean",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});

// Primary.args = {
//   options: object("filmes",),
// };
