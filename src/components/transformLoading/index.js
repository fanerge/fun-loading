/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const TransformLoading = ({show, time}) => {

  return (
    <div className={styles.container}
         style={{'display': show ? 'block' : 'none' }}>
      <div className={styles.content}>
        <p className={styles.transform} style={{animationDuration: `${time}s`}}></p>
      </div>
    </div>
  );
};

TransformLoading.propTypes = {
  time: PropTypes.number,
  show: PropTypes.bool.isRequired
};

export default TransformLoading;
