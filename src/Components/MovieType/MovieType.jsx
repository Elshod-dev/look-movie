
import styles from "./MovieType.module.css";
function MovieType({ types }) {
  return (
    <li className={`${styles.li} bannerLi`}>
      {types.map((type) => (
        <span
          key={type.type}
          className={styles.span}
        >
          <span>{type.type}</span>
        </span>
      ))}
    </li>
  );
}

export default MovieType;
