/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const RotateLoading = ({show, size}) => {

  return (
    <div className={styles.container}
         style={{'display': show ? 'block' : 'none' }}>
      <div className={styles.content} style={{fontSize: size}}>
          <div className={styles.loader}></div>
      </div>
    </div>
  );
};

RotateLoading.propTypes = {
  size: PropTypes.string,
  show: PropTypes.bool.isRequired
};

RotateLoading.defaultProps = {
  size: '16px'
};

export default RotateLoading;
