import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState.jsx";
import styles from "./Banner.module.css";
import { BannerBackground, Icon } from "../AppStyles.jsx";
import MovieType from "./../MovieType/MovieType";
import ContentLoader from "react-content-loader";
function Banner() {
  const { state, isLoading } = useContext(GlobalContext);
  const { newMovies, randomBannerMath, movies, bannerIndex, loadingDone } =
    state;
  let isReady = false;
  if (newMovies) {
    if (newMovies.length !== 0) {
      isReady = true;
    }
  }
  let rdBanner = isReady ? bannerIndex : randomBannerMath;
  let readyMovies = isReady ? newMovies : movies;

  const [youtube, setYoutube] = useState(false);

  const allColors = [
    {
      backgroundImage: `linear-gradient(80deg, hsla(${state.randomColor}, 50%, 40%, 1) 10%, hsla(${state.randomColor}, 50%, 40%, 0) 20%)`,
    },
    {
      backgroundImage: `linear-gradient(245deg, hsla(${state.randomColor}, 50%, 40%, 0) 35%, hsla(${state.randomColor}, 50%, 40%, 1) 70%)`,
    },
    {
      opacity: "0.7",
      backgroundImage: `radial-gradient(ellipse at left top, hsla(${state.randomColor}, 100%, 60%, 1) 5%, hsla(${state.randomColor}, 100%, 60%, 0) 70%)`,
    },
    {
      opacity: "0.35",
      backgroundImage: ` linear-gradient(5deg, #000 0%, transparent 50%), radial-gradient(ellipse at top right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20%)`,
    },
    { boxShadow: `1px 1px 14px 4px hsla(${state.randomColor}, 100%, 60%, 1) ` },
  ];
  return (
    <div className={styles.banner}>
      {readyMovies && rdBanner + 1 && (
        <div className={styles.banner_box}>
          {youtube && (
            <div className={styles.youtube}>
              <div style={allColors[4]} className={styles.iframeBox}>
                <iframe
                  src={readyMovies[rdBanner].iframeTrailer}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen="allowfullscreen"
                ></iframe>
              </div>
              <div
                style={allColors[4]}
                className={styles.xBtn}
                onClick={() => {
                  setYoutube(false);
                }}
              >
                <Icon.Close />
              </div>
            </div>
          )}
          <div className={styles.banner_boxImg}>
            {!loadingDone && (
              <ContentLoader
                speed={4}
                width={0}
                height={0}
                backgroundColor="#000"
                foregroundColor="#0E0D16"
              >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
              </ContentLoader>
            )}
            <BannerBackground
              style={allColors[0]}
              className={styles.bannerBackground1}
            />
            <div className={styles.bannerImg}>
              <img
                onLoad={() => {
                  isLoading(true);
                }}
                loading="lazy"
                src={readyMovies[rdBanner].movieImg}
                alt={readyMovies[rdBanner].movieName}
              />
            </div>
            <BannerBackground style={allColors[1]} />
            <BannerBackground style={allColors[2]} />
            <BannerBackground style={allColors[3]} />
          </div>
          <li className={`${styles.banner_boxTexts} container`}>
            <div className={styles.banner_texts}>
              <h1>{readyMovies[rdBanner].movieName}</h1>
              <p>
                Barry Allen must coax a very different Batman out of retirement
              </p>
              <div className={styles.spanBox}>
                <span>Staring: {readyMovies[rdBanner].starring}</span>
                <span>Director: {readyMovies[rdBanner].director}</span>
              </div>
              <ul className={`${styles.categoriesBox} banner`}>
                <li className={styles.firstChild}>
                  <span>{readyMovies[rdBanner].rated}</span>
                </li>
                <>
                  <MovieType
                    types={readyMovies[rdBanner].movieTypes}
                    class={"bannerLi"}
                  />
                </>
                <li>
                  <span>{readyMovies[rdBanner].category}</span>
                </li>
                <li>
                  <span>{readyMovies[rdBanner].releasedDate}</span>
                </li>
              </ul>
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    setYoutube(true);
                  }}
                >
                  <Icon.Play /> Watch Trailer
                </button>
                <button>More details</button>
              </div>
            </div>
          </li>
        </div>
      )}
    </div>
  );
}

export default Banner;
