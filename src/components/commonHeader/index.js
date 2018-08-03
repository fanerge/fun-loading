/**
 * Created by Administrator on 2018/7/20.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import styles from './index.css';
const Header = Layout.Header;

function CommonHeader({index}) {
  return (
    <Header className={styles.header}>
      <h1 className = {styles.title}>fun-loading</h1>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[index]}
        style={{ float: 'left',lineHeight: '64px' }}
      >
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2">API 文档</Menu.Item>
      </Menu>
    </Header>
  );
}

CommonHeader.propTypes = {
  index: PropTypes.string.isRequired
};

export default CommonHeader;
