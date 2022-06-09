import React from "react";
import Slide from "../../components/Slide/Slide";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.Home}>
      <Slide intervalSeconds={5}>
        <Slide.Item
          item={{
            title: "Titulo 1",
            imdb_score: "89",
            synopsis:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc lorem, posuere eu sagittis in, vulputate sed eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rutrum felis rutrum nibh fermentum viverra. Sed efficitur felis ut eros sollicitudin, ac pellentesque sapien semper.",
            image_src:
              "https://i.pinimg.com/564x/11/1a/03/111a03133d14214539c96e0f657dff1a.jpg",
          }}
          position={0}
        />
        <Slide.Item
          item={{
            title: "Titulo 2",
            imdb_score: "89",
            synopsis:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc lorem, posuere eu sagittis in, vulputate sed eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rutrum felis rutrum nibh fermentum viverra. Sed efficitur felis ut eros sollicitudin, ac pellentesque sapien semper.",
            image_src:
              "https://i.pinimg.com/564x/11/1a/03/111a03133d14214539c96e0f657dff1a.jpg",
          }}
          position={1}
        />
      </Slide>
    </main>
  );
};

export default Home;
