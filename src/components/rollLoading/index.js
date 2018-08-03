/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const RollLoading = (props) => {
  const isShow = props.show;
  const time = `${props.time}s`;
  const delay = `-${(props.time/2).toFixed(2)}s`;
  const color = props.color;

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <div className={styles.roll}>
          <div className={styles.cube1} style={{animationDuration: time, backgroundColor: color}}></div>
          <div className={styles.cube2} style={{animationDuration: time, backgroundColor: color, animationDelay: delay}}></div>
        </div>
      </div>
    </div>
  );
};

RollLoading.propTypes = {
  time: PropTypes.number,
  color: PropTypes.string,
  show: PropTypes.bool.isRequired
};

RollLoading.defatultProps = {
  time: 1,
  color: 'rgba(16, 142, 233, 1)'
};

export default RollLoading;
