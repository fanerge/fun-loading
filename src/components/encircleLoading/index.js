/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const EncircleLoading = (props) => {
  const isShow = props.show;
  const time = `${props.time}s`;
  const color = props.color;
  const size = props.size;
  const children = Array(9).fill(1).map( (item, index) => {
    return <li className={styles[`encircle${index}`]} style={{background: color, animationDuration: time}} key={index}></li>
  })

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content} style={{transform: `translate(-50%, -50%) scale(${size})`}}>
        <ul>
          {children}
        </ul>
      </div>
    </div>
  );
};

EncircleLoading.propTypes = {
  time: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  show: PropTypes.bool.isRequired
};

EncircleLoading.defaultProps = {
  time: 1.5,
  size: 0.75,
  color: 'rgba(16, 142, 233, 1)'
};

export default EncircleLoading;
