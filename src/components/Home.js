import styles from "./Home.module.css";
import eat from "../assets/images/eat.gif";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Home = () => {
  return (
    <div>
      {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
    <div className={styles.eatgif}>
      <img src={eat} alt="van eat" />
    </div>
    </div>
  );
};

export default Home;
