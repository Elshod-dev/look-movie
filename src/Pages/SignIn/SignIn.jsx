import { Link, useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
import Logo from "../../Assets/logo.png";
import { Icon } from "../../Components/AppStyles.jsx";
import { useEffect, useRef, useState } from "react";
import app from "../../Firebase/Config.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { GlobalContext } from "../../Components/Context/GlobalState.jsx";
export function SignIn() {
  const { login } = useContext(GlobalContext);
  const [isShow, setIsShow] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isAllow, setIsAllow] = useState(true);
  const email = useRef();
  const password = useRef();
  const inputHandler = () => {
    if (password.current.value !== "") {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  };
  const inputHandler1 = () => {
    if (email.current.value !== "" && password.current.value !== "") {
      setIsAllow(false);
    } else if (email.current.value === "" || password.current.value === "") {
      setIsAllow(true);
    }
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.current.value !== "" && password.current.value !== "") {
      signInWithEmailAndPassword(
        getAuth(),
        email.current.value,
        password.current.value
      )
        .then(() => {
          login(true);
          navigate("/");
        })
        .catch(() => {
          console.log("Something Error");
        });
    }
  };
  return (
    <section className={styles.signIn}>
      <Link to="/" className={styles.signIn_logo}>
        <img src={Logo} alt="Logo" />
        <span>Look Movie</span>
      </Link>
      <div className={styles.signIn_box}>
        <h1>Login to get started</h1>
        <form>
          <input
            className={styles.signIn_email}
            type="text"
            ref={email}
            placeholder="Please enter Email address"
            onChange={() => {
              inputHandler1();
            }}
          />
          <div className={styles.signIn_password}>
            <input
              onChange={() => {
                inputHandler();
                inputHandler1();
              }}
              type={`${isShow ? "text" : "password"}`}
              placeholder="Password"
              ref={password}
            />
            {isShow && isReady && (
              <div
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                <Icon.Show></Icon.Show>
              </div>
            )}

            {!isShow && isReady && (
              <div
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                <Icon.Hide></Icon.Hide>
              </div>
            )}
          </div>
          <div className={styles.links_box}>
            <Link to="/signUp">Sign Up</Link>
            <button
              onClick={submitHandler}
              className={
                isAllow ? `${styles.signIn_btn}` : `${styles.signIn_btn_open}`
              }
            >
              Sign In
            </button>
          </div>
        </form>
        <div className={styles.signIn_forgot}>Forgot password?</div>
      </div>
      <Link to="/" className={styles.back}>
        Back to website
      </Link>
    </section>
  );
}
