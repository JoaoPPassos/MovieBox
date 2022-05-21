import React from "react";

import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  title: "Coringa",
  genre: "Drama",
  imdb_score: "8.2/10",
  release_date: "2020",
  country: "USA",
  image_src:
    "https://1.bp.blogspot.com/-tt2O7kP0WS0/Xh562IVHanI/AAAAAAAAPCg/OGWXeeSarSQCb6WsdSqJa4KRI412qXyPQCLcBGAsYHQ/s1600/aaa2.jpg",
  type: "Movie",
};

Secondary.args = {
  title: "Keanu Reeves",
  image_src:
    "https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg",
  type: "Actor",
};
