import { Icon } from "../AppStyles.jsx";
import styles from "./Pagintation.module.css";

function Pagination() {
  return (
    <div className={styles.pagination}>
      <div className={styles.arrowBtn}><Icon.ChevronLeft /></div>
      <button className={styles.active}>01</button>
      <button>02</button>
      <button>03</button>
      <div className={styles.dots}>...</div>
      <button>24</button>
      <div className={styles.arrowBtn}><Icon.ChevronRight /></div>
    </div>
  );
}

export default Pagination;
