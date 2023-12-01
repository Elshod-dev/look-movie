import styles from "./Profile.module.css";
import app from "../../Firebase/Config.js";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { GlobalContext } from "../../Components/Context/GlobalState.jsx";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const { login } = useContext(GlobalContext);
  const logOut = () => {
    signOut(getAuth()).then(() => {
      login(false);
      navigate("/");
    });
  };
  return (
    <section className={styles.profile_container}>
      <button onClick={logOut}>Log Out</button>
    </section>
  );
}

export default Profile;
