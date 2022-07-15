import styles from "./Home.module.css";
import eat from "../assets/images/eat.gif";

const Home = () => {
  return (
    <div>
    <div className={styles.eatgif}>
      <img src={eat} alt="van eat" />
    </div>
    </div>
  );
};

export default Home;
