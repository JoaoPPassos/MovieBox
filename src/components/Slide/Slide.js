import React, { useEffect, useState, useRef, useContext } from "react";
import Icon from "../Icon/Icon";

import styles from "./styles.module.scss";

const SlideContext = React.createContext();

const Slide = (props) => {
  const { children } = props;
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

  subComponents = [
    <Slide.Item
      item={{
        title: "",
        imdb_score: "",
        sinopse: "",
        image_src:
          "https://i.pinimg.com/564x/11/1a/03/111a03133d14214539c96e0f657dff1a.jpg",
      }}
      position={0}
    />,
    <Slide.Item
      item={{
        title: "",
        imdb_score: "",
        sinopse: "",
        image_src:
          "https://i.pinimg.com/564x/11/1a/03/111a03133d14214539c96e0f657dff1a.jpg",
      }}
      position={1}
    />,
  ];

  return (
    <section className={styles.Slide}>
      <SlideContext.Provider value={{ current: slide, last: lastSlide }}>
        <div className={styles.SlideItems}>
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
          {subComponents.map((component) => component)}
        </div>
      </SlideContext.Provider>
    </section>
  );
};

Slide.Item = (props) => {
  const {
    position,
    item = { title: "", imdb_score: "", sinopse: "", image_src: "" },
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
    handleChangeCurrentPosition(value.current);
  }, [value]);

  return (
    <div
      className={styles.SlideItem}
      key={position}
      style={{ transform: `translate(${currentPosition * 100}%,0%)` }}
    >
      <div className={styles.BoxShadow} />
      <img src={item.image_src} />
    </div>
  );
};

export default Slide;
