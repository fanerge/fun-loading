/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const TransformLoading = (props) => {
  const isShow = props.show;
  const time = props.time || '1s';

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <p className={styles.transform} style={{animationDuration: time}}></p>
      </div>
    </div>
  );
};

TransformLoading.propTypes = {
  time: PropTypes.string,
  show: PropTypes.bool.isRequired
};

export default TransformLoading;
