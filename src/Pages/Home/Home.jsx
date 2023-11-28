import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import BackgroundHome from "../../Assets/backgroundHome.png";
export function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.home}>
        {true && (
          <>
            <div className={`${styles.home_texts} container`}>
              <h1>Let’s Make Your Own Cinema</h1>
              <p>
                Is a guide to creating a personalized movie theater experience.
                You'll need a projector, screen, and speakers. Decorate your
                space, choose your films, and stock up on snacks for the full
                experience.
              </p>
              <Link to="/signIn">Get Started</Link>
            </div>
            <div className={styles.home_img}>
              <img src={BackgroundHome} />
            </div>
          </>
        )}
      </div>
      <div className={styles.home_trends}></div>
    </section>
  );
}
