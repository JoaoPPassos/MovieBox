import React, { useEffect, useState, useContext } from "react";
import Icon from "../Icon/Icon";

import styles from "./styles.module.scss";

const SlideContext = React.createContext();

const Slide = (props) => {
  const { children, intervalSeconds = 0 } = props;

  let subComponentList = Object.keys(Slide);
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    );
  });

  const [slide, setSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(null);

  const handleChangeSlide = (value) => {
    if (slide + value >= 0 && slide + value < subComponents.length) {
      setLastSlide(slide);
      setSlide(slide + value);
    }
  };

  useEffect(() => {
    if (intervalSeconds > 0) {
      setTimeout(() => {
        if (slide + 1 < subComponents.length) {
          handleChangeSlide(1);
        } else {
          setSlide(0);
          setLastSlide(0);
        }
      }, intervalSeconds * 1000);
    }
  }, [slide]);

  subComponents = [
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
    />,
    <Slide.Item
      item={{
        title: "Titulo 2",
        imdb_score: "93",
        synopsis:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc lorem, posuere eu sagittis in, vulputate sed eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rutrum felis rutrum nibh fermentum viverra. Sed efficitur felis ut eros sollicitudin, ac pellentesque sapien semper.",
        image_src: "https://images2.alphacoders.com/564/564835.jpg",
      }}
      position={1}
    />,
    <Slide.Item
      item={{
        title: "Titulo 3",
        imdb_score: "64",
        synopsis:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc lorem, posuere eu sagittis in, vulputate sed eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rutrum felis rutrum nibh fermentum viverra. Sed efficitur felis ut eros sollicitudin, ac pellentesque sapien semper.",
        image_src: "https://images3.alphacoders.com/595/thumb-1920-595064.jpg",
      }}
      position={2}
    />,
    <Slide.Item
      item={{
        title: "Titulo 4",
        imdb_score: "64",
        synopsis:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc lorem, posuere eu sagittis in, vulputate sed eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rutrum felis rutrum nibh fermentum viverra. Sed efficitur felis ut eros sollicitudin, ac pellentesque sapien semper.",
        image_src: "https://images3.alphacoders.com/595/thumb-1920-595064.jpg",
      }}
      position={3}
    />,
    <Slide.Item
      item={{
        title: "Titulo 5",
        imdb_score: "64",
        synopsis:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc lorem, posuere eu sagittis in, vulputate sed eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rutrum felis rutrum nibh fermentum viverra. Sed efficitur felis ut eros sollicitudin, ac pellentesque sapien semper.",
        image_src: "https://images3.alphacoders.com/595/thumb-1920-595064.jpg",
      }}
      position={4}
    />,
  ];

  const counterSlider = () => {
    return (
      <div className={styles.Counter}>
        {subComponents.map((comp, index) => (
          <div>
            <div className={index === slide ? styles.Selected : ""} />
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.Slide}>
      <SlideContext.Provider value={{ current: slide, last: lastSlide }}>
        <div className={styles.SlideItems}>
          {intervalSeconds === 0 && (
            <>
              <div
                className={styles.ArrowBefore}
                onClick={() => handleChangeSlide(-1)}
              >
                <Icon name="arrow_forward_ios" />
              </div>
              <div
                className={styles.ArrowNext}
                onClick={() => handleChangeSlide(1)}
              >
                <Icon name="arrow_forward_ios" />
              </div>
            </>
          )}

          {counterSlider()}
          {subComponents.map((component) => component)}
        </div>
      </SlideContext.Provider>
    </section>
  );
};

Slide.Item = (props) => {
  const {
    position,
    item = { title: "", imdb_score: "", synopsis: "", image_src: "" },
  } = props;
  const [currentPosition, setCurrentPosition] = useState(position);
  const value = useContext(SlideContext);
  const handleChangeCurrentPosition = (val) => {
    let calc =
      value.last < val
        ? currentPosition - 1
        : value.last > val
        ? currentPosition + 1
        : currentPosition;

    setCurrentPosition(calc);
  };

  useEffect(() => {
    if (value.current === 0) {
      setCurrentPosition(position);
    } else {
      handleChangeCurrentPosition(value.current);
    }
  }, [value]);

  return (
    <div
      className={styles.SlideItem}
      key={position}
      style={{ transform: `translate(${currentPosition * 100}%,0%)` }}
    >
      <div className={styles.BoxShadow} />
      <img src={item.image_src} />
      <div className={styles.Infos}>
        <div className={styles.Title}>{item.title}</div>
        <div className={styles.Score}>{item.imdb_score}</div>
        <div className={styles.Synopsis}>{item.synopsis}</div>
      </div>
    </div>
  );
};

export default Slide;
