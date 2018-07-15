/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const EllipsisLoading = (props) => {
  const isShow = props.show;
  const fontSize = props.fontSize || '16px';
  const color = props.color || '#333';
  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        <p className={styles.ellipsis} style={{fontSize: fontSize, color: color}}>{props.children}</p>
      </div>
    </div>
  );
};

EllipsisLoading.propTypes = {
  fontSize: PropTypes.string,
  show: PropTypes.bool.isRequired
};

export default EllipsisLoading;
