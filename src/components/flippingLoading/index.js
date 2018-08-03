/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const FlippingLoading = (props) => {
  const isShow = props.show;
  const time = `${props.time}s`;
  const color = props.color;

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <p className={styles.filpping} style={{animationDuration: time, backgroundColor: color}}></p>
      </div>
    </div>
  );
};

FlippingLoading.propTypes = {
  time: PropTypes.number,
  color: PropTypes.string,
  show: PropTypes.bool.isRequired
};

FlippingLoading.defaultProps = {
  time: 1,
  color:  'rgba(16, 142, 233, 1)'
};

export default FlippingLoading;
