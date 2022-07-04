import React, { useCallback, useEffect, useState } from "react";
import { Slide, Header, Input, MultiCarrousel, Card } from "../../components";
import Logo from "../../Assets/Images/Logo.png";

import styles from "./styles.module.scss";
import { api, key } from "../../Services/api";

const Home = () => {
  const [search, setSearch] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  var timeoutId = null;

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    if (!!timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      searchMovies();
    }, 2000);
    console.log("executou");
  }, [search]);

  const searchMovies = async () => {
    try {
      const { data } = await api.get(`Search/${key}/${search}`);
      let content = data.items.slice(0, 5);
      getPopularMoviesPosters(content);
    } catch (error) {}
  };
  useEffect(() => {
    // if (popularMovies.length > 0) getPopularMoviesPosters();
  }, [popularMovies]);
  const getPopularMovies = async () => {
    try {
      const { data } = await api.get(`MostPopularMovies/${key}`);
      let content = data.items.slice(0, 5);
      getPopularMoviesPosters(content);
    } catch (error) {}
  };

  const getPopularMoviesPosters = async (content) => {
    try {
      let infos = [...content];

      for (var movie of infos) {
        const { data } = await api.get(`Posters/${key}/${movie.id}`);
        movie.poster = data.posters.find((post) => post.width > 1280);
      }

      setPopularMovies(infos);
    } catch (error) {}
  };

  return (
    <main className={styles.Home}>
      <Header>
        <img src={Logo} className={styles.Logo} />
        <Input value={search} setter={setSearch} />
      </Header>
      <Slide intervalSeconds={5}>
        {popularMovies.length > 0 &&
          popularMovies.map((item, index) => (
            <Slide.Item
              key={index}
              item={{
                title: item.title,
                imdb_score: Number(item.imDbRating),
                synopsis: item.crew,
                image_src: item.poster?.link,
              }}
              position={index}
            />
          ))}
      </Slide>
      <section className={styles.Content}>
        <MultiCarrousel title="Featured Movie">
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
        <MultiCarrousel title="New Arrival">
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
        </MultiCarrousel>
        <MultiCarrousel title="Featured Casts">
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
        </MultiCarrousel>
      </section>
    </main>
  );
};

export default Home;
