import React, { useState } from "react";
import { Slide, Header, Input, MultiCarrousel, Card } from "../../components";
import Logo from "../../Assets/Images/Logo.png";

import styles from "./styles.module.scss";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <main className={styles.Home}>
      <Header>
        <img src={Logo} className={styles.Logo} />
        <Input value={search} setter={setSearch} />
      </Header>
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
      <section className={styles.Content}>
        <MultiCarrousel title="Teste">
          <Card
            title="Nome autor"
            type="Actor"
            image_src="https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg"
          />
          <Card
            title="Nome autor"
            type="Actor"
            image_src="https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg"
          />
          <Card
            title="Nome autor"
            type="Actor"
            image_src="https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg"
          />
          <Card
            title="Nome autor"
            type="Actor"
            image_src="https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg"
          />
          <Card
            title="Nome autor"
            type="Actor"
            image_src="https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg"
          />
          <Card
            title="Nome autor"
            type="Actor"
            image_src="https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg"
          />
          <Card
            title="Nome autor"
            type="Actor"
            image_src="https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg"
          />
          <Card
            title="Nome autor"
            type="Actor"
            image_src="https://br.web.img2.acsta.net/c_310_420/pictures/17/02/06/17/01/343859.jpg"
          />
        </MultiCarrousel>{" "}
      </section>
    </main>
  );
};

export default Home;
