import styles from "./Profile.module.css";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { GlobalContext } from "../../Components/Context/GlobalState.jsx";
import { useNavigate } from "react-router-dom";
import { Icon } from "../../Components/AppStyles.jsx";
function Profile() {
  const navigate = useNavigate();
  const { login } = useContext(GlobalContext);
  let email = getAuth().currentUser.email;

  const logOut = () => {
    signOut(getAuth()).then(() => {
      login(false);
      navigate("/");
    });
  };
  return (
    <section className={styles.profile_container}>
      <div className={styles.icon_box}>
        <Icon.UserCircle />
        <h1>Profile</h1>
      </div>
      <span>{email}</span>
      <div className={styles.btn}></div>
      <button onClick={logOut}>
        <Icon.LogoutCircle /> Log Out
      </button>
    </section>
  );
}

export default Profile;
