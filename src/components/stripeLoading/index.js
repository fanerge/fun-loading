/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const StripeLoading = (props) => {
  // 矩形颜色
  const bgColor = props.color;
  // 矩形数量
  const number = props.number;
  // 动画周期
  const durationTime = 1.2 * number / 5;
  // 动画是否显示执行
  const isShow = props.show || true;

  const childs = Array(number).fill(1).map((item, index) => {
      let classIndex = `rect${index+1}`
      return <div className={styles[classIndex]} style={{background: bgColor, 'animationDuration': `${durationTime}s` }} key={index}></div>
    })

  return (
    <div className={styles.container}
         style={{'display': isShow ? 'block' : 'none' }}>
      <div className={styles.content}>
        {childs}
      </div>
    </div>
  );
};

StripeLoading.propTypes = {
  color: PropTypes.string,
  number: PropTypes.oneOf([3, 4, 5, 6, 7, 8, 9, 10]),
  show: PropTypes.bool.isRequired
};

StripeLoading.defaultProps = {
  color: 'rgba(16, 142, 233, 1)',
  nuber: 6
}

export default StripeLoading;
