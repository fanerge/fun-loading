/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const SpinnerLoading = (props) => {
  const isShow = props.show;
  const time = `${props.time}s`;
  const delayTime = (props.time / 12).toFixed(2);
  const color = props.color;
  const size = props.size;
  const minSize = `${(parseInt(size) * 0.3).toFixed(2)}px`;

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <div className={styles.spinner}>
          <div className={`${styles['spinner-container']} ${styles.container1}`}
              style={{width: size, height: size}}>
            <div className={styles.circle1} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay: 0}}></div>
            <div className={styles.circle2} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${9 * delayTime}s`}}></div>
            <div className={styles.circle3} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${6 * delayTime}s`}}></div>
            <div className={styles.circle4} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${3 * delayTime}s`}}></div>
          </div>
          <div className={`${styles['spinner-container']} ${styles.container2}`}
               style={{width: size, height: size}}>
            <div className={styles.circle1} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay: `-${11 * delayTime}s`}}></div>
            <div className={styles.circle2} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${8 * delayTime}s`}}></div>
            <div className={styles.circle3} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${5 * delayTime}s`}}></div>
            <div className={styles.circle4} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${2 * delayTime}s`}}></div>
          </div>
          <div className={`${styles['spinner-container']} ${styles.container3}`}
               style={{width: size, height: size}}>
            <div className={styles.circle1} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${10 * delayTime}s`}}></div>
            <div className={styles.circle2} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${7 * delayTime}s`}}></div>
            <div className={styles.circle3} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${4 * delayTime}s`}}></div>
            <div className={styles.circle4} style={{width: minSize, height: minSize, backgroundColor: color,
            animationDuration: time, animationDelay:  `-${1 * delayTime}s`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

SpinnerLoading.propTypes = {
  time: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  show: PropTypes.bool.isRequired
};

SpinnerLoading.defaultProps = {
  time: 1.5,
  color: 'rgba(16, 142, 233, 1)'
};

export default SpinnerLoading;
