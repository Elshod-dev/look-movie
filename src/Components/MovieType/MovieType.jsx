import { useContext } from "react";
import styles from "./MovieType.module.css";
import { GlobalContext } from "../Context/GlobalState.jsx";
function MovieType({ types }) {
  const { detectTypes } = useContext(GlobalContext);
  return (
    <li className={`${styles.li} bannerLi`}>
      {types.map((type) => (
        <span
          key={type.type}
          className={styles.span}
          onClick={() => {
            detectTypes(type.type);
          }}
        >
          <span>{type.type}</span>
        </span>
      ))}
    </li>
  );
}

export default MovieType;
