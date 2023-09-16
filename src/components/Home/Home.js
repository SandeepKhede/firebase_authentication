import React from "react";
import styles from "./Home.module.css";
import Timer from "../Timer/Timer";

const Home = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_container}>
          {/* conditionally rendering name according  to login */}
          <h1>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h1>
          <div>
            <Timer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
