/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const TransformLoading = (props) => {
  const isShow = props.show;
  const time = `${props.time}s` || '1s';
  const color = props.color || 'rgba(16, 142, 233, 1)';

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <p className={styles.filpping} style={{animationDuration: time, backgroundColor: color}}></p>
      </div>
    </div>
  );
};

TransformLoading.propTypes = {
  time: PropTypes.number,
  show: PropTypes.bool.isRequired
};

export default TransformLoading;
