import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import Loader from "../../components/Loader/Loader";
import { statisticsApiUrl } from '../../util/apiCall'


const Home = () => {
  const [statistic, setStatistic] = useState({
    confirmed: 0,
    discharged: 0,
    death: 0,
  });
  const [currentDate, setCurrentDate] = useState({ date: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  let myDate = new Date().toDateString();

  useEffect(() => {
    // testing API
    axios.get(statisticsApiUrl).then((res) => {
      setIsLoading(false);
      setCurrentDate({ date: myDate });
      console.log(myDate);

      if (res.status === 200) {
        setStatistic({
          confirmed: res.data.infected,
          discharged: res.data.recovered,
          death: res.data.deceased,
        });
      } else {
        setError(true);
      }
    });
  }, []);

  return isLoading ? (
    <div className={styles.smallOverlay}>
      <Loader />
    </div>
  ) : (
    <div className={styles.homeWrapper}>
      <div className={styles.homeContainer}>
        <div className={styles.title}>NEW CASES CONFIRMED</div>
        <i id={styles.date}>{currentDate.date}</i>
        <div className={styles.statistic}>
          <div className={styles.item}>
            <div className={styles.confirmed}>CONFIRMED</div>
            <div className={styles.confirmedItem}>{statistic.confirmed}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.discharged}>DISCHARGED </div>
            <div className={styles.dischargedItem}>{statistic.discharged}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.death}>DEATH</div>
            <div className={styles.deathItem}>{statistic.death}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
