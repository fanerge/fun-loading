/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const LineLoading = ({show, number, time}) => {
  const duration = `${time}s`;
  const childs = Array(number).fill(1).map((item, index) => {
    return (<div className={styles['loader-line-wrap']}
    style={{animationDuration: duration}} key={index}>
      <div className={styles['loader-line']}></div>
    </div>);
  })

  return (
    <div className={styles.container}
         style={{'display': show ? 'block' : 'none' }}>
      <div className={styles.content}>
        {childs}
        </div>
    </div>
  );
};

LineLoading.propTypes = {
  number: PropTypes.oneOf([1, 2, 3, 4, 5]),
  time: PropTypes.number,
  show: PropTypes.bool.isRequired
};

LineLoading.defaultProps = {
  number: 5,
  time: 2
};

export default LineLoading;
