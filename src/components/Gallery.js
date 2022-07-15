import styles from "./Gallery.module.css";
import hjan from "../assets/images/hjan.jpg";
import hfeb from "../assets/images/hfeb.jpg";
import hapr from "../assets/images/hmar.jpg";
import hmar from "../assets/images/hapr.jpg";

const Gallery = () => {
  return (
    <div>
      <div className={styles.hanafuda}>
        <img src={hjan} alt="hanafuda janurary" />
        <img src={hfeb} alt="hanafuda feburary" />
        <img src={hmar} alt="hanafuda march" />
        <img src={hapr} alt="hanafuda april" />
      </div>
    </div>
  );
};

export default Gallery;
