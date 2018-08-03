/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const CircleLoading = (props) => {
  const isShow = props.show;
  const time = `${props.time}s`;
  const delay = `-${(props.time/2).toFixed(2)}s`;
  const color = props.color;

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <div className={styles.circle}>
          <div className={styles['circle-bounce1']} style={{animationDuration: time, backgroundColor: color}}></div>
          <div className={styles['circle-bounce2']} style={{animationDuration: time, backgroundColor: color, animationDelay: delay}}></div>
        </div>
      </div>
    </div>
  );
};

CircleLoading.propTypes = {
  time: PropTypes.number,
  color: PropTypes.string,
  show: PropTypes.bool.isRequired
};

CircleLoading.defaultProps = {
  time: 2,
  color: 'rgba(16, 142, 233, 1)'
};

export default CircleLoading;
