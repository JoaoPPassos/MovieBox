import React, { useEffect, useState, useContext } from "react";
import Icon from "../Icon/Icon";
import IMDB from "../../Assets/Images/imdb.png";

import styles from "./styles.module.scss";

const SlideContext = React.createContext();

const Slide = (props) => {
  const { children, intervalSeconds = 0 } = props;

  let subComponentList = Object.keys(Slide);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child?.type?.name === key ? child : null
    );
  });

  const [slide, setSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(null);

  const handleChangeSlide = (value) => {
    if (slide + value >= 0 && slide + value < subComponents?.[0]?.length) {
      setLastSlide(slide);
      setSlide(slide + value);
    }
  };

  useEffect(() => {
    if (intervalSeconds > 0) {
      setTimeout(() => {
        if (slide + 1 < subComponents[0].length) {
          handleChangeSlide(1);
        } else {
          setSlide(0);
          setLastSlide(0);
        }
      }, intervalSeconds * 1000);
    }
  }, [slide]);

  const counterSlider = () => {
    return (
      <div className={styles.Counter}>
        {subComponents[0].map((comp, index) => (
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
          {subComponents?.[0]?.map((component) => component)}
        </div>
      </SlideContext.Provider>
    </section>
  );
};

const Item = (props) => {
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
      {...props}
      style={{
        transform: `translate(${currentPosition * 100}%,0%)`,
      }}
    >
      <div
        className={styles.BoxShadow}
        style={{ backgroundImage: `url(${item.image_src})` }}
      />

      <div className={styles.Infos}>
        <div className={styles.Title}>{item.title}</div>
        <div className={styles.Score}>
          {item.imdb_score}
          <img src={IMDB} />
        </div>
        <div className={styles.Synopsis}>{item.synopsis}</div>
      </div>
      <div className={styles.Poster}>
        <img src={item.image_src} />
      </div>
    </div>
  );
};

Slide.Item = Item;

export default Slide;
