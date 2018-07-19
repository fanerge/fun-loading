/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const PointLoading = (props) => {
  const isShow = props.show;
  const time = `${props.time}s`;
  const color = props.color;

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <div className={styles.spinner}>
          <div className={styles.circle1} style={{
            backgroundColor: color,
            animationDuration: time,
            animationDelay: `-${(0.2 * props.time).toFixed(2)}s`
          }}></div>
          <div className={styles.circle2} style={{
            backgroundColor: color,
            animationDuration: time,
            animationDelay: `-${(0.1 * props.time).toFixed(2)}s`
          }}></div>
          <div className={styles.circle3} style={{
            backgroundColor: color,
            animationDuration: time
          }}></div>
        </div>
      </div>
    </div>
  );
};

PointLoading.propTypes = {
  time: PropTypes.number,
  color: PropTypes.string,
  show: PropTypes.bool.isRequired
};

PointLoading.defaultProps = {
  time: 1.5,
  color: 'rgba(16, 142, 233, 1)'
};

export default PointLoading;
