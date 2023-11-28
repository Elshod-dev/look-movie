import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import Logo from "../../Assets/logo.png";
import { Icon } from "../../Components/AppStyles.jsx";
export function SignUp() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirm = useRef();

  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isReady2, setIsReady2] = useState(false);
  const [isAllow, setIsAllow] = useState(true);

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      email.current.value !== "" &&
      password.current.value !== "" &&
      name.current.value !== "" &&
      confirm.current.value !== ""
    ) {
      navigate("/");
    }
  };

  const passwordHandler = () => {
    if (password.current.value !== "") {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  };
  const confirmHandler = () => {
    if (confirm.current.value !== "") {
      setIsReady2(true);
    } else {
      setIsReady2(false);
    }
  };

  const inputHandler = () => {
    if (password.current.value !== confirm.current.value) {
      setIsAllow(true);
      return;
    } else if (
      email.current.value !== "" &&
      password.current.value !== "" &&
      name.current.value !== "" &&
      confirm.current.value !== ""
    ) {
      setIsAllow(false);
    } else {
      setIsAllow(true);
    }
  };
  return (
    <section className={styles.signUp}>
      <Link to="/" className={styles.signUp_logo}>
        <img src={Logo} alt="Logo" />
        <span>Look Movie</span>
      </Link>
      <div className={styles.signUp_box}>
        <h1>Register to get started</h1>
        <form>
          <input
            className={styles.signUp_email}
            type="text"
            placeholder="Name"
            ref={name}
            onChange={inputHandler}
          />
          <input
            className={styles.signUp_email}
            type="text"
            ref={email}
            placeholder="Please enter Email address"
            onChange={inputHandler}
          />
          <div className={styles.signUp_password}>
            <input
              type={!isShow ? "password" : "text"}
              placeholder="Password"
              ref={password}
              onChange={() => {
                inputHandler();
                passwordHandler();
              }}
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
          <div className={styles.signUp_password}>
            <input
              type={!isShow2 ? "password" : "text"}
              placeholder="Confirm password"
              ref={confirm}
              onChange={() => {
                inputHandler();
                passwordHandler();
                confirmHandler();
              }}
            />
            {isShow2 && isReady2 && (
              <div
                onClick={() => {
                  setIsShow2(!isShow2);
                }}
              >
                <Icon.Show></Icon.Show>
              </div>
            )}

            {!isShow2 && isReady2 && (
              <div
                onClick={() => {
                  setIsShow2(!isShow2);
                }}
              >
                <Icon.Hide></Icon.Hide>
              </div>
            )}
          </div>
          <div className={styles.links_box}>
            <Link to="/signIn">Sign In</Link>
            <button
              disabled={isAllow}
              onClick={submitHandler}
              className={
                isAllow ? `${styles.signUp_btn}` : `${styles.signUp_btn_open}`
              }
            >
              Register
            </button>
          </div>
        </form>
        <div className={styles.signUp_forgot}>Forgot password?</div>
      </div>
      <Link to="/" className={styles.back}>
        Back to website
      </Link>
    </section>
  );
}
