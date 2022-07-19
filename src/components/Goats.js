import styles from './Goats.module.css'
import goat from "../assets/images/goat.gif";
import { Fragment } from 'react';



const Goats = () => {



    return (
        <Fragment>
            <h1>It's the placeholder goat!</h1>
        <div className={styles.goats}>
              <img src={goat} alt="goat thrust" />

        </div>
        </Fragment>
    )
}

export default Goats;