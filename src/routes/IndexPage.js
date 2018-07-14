import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Row, Col } from 'antd';
import { StripeLoading } from '../components/loading';

const { Header, Footer, Content } = Layout;
const itemLayout = {
  span: 6,
  className: styles.item
}
const linkList = [{
  text: '使用 CSS3 实现超炫的 Loading（加载）动画效果',
  href: 'https://www.cnblogs.com/lhb25/p/loading-spinners-animated-with-css3.html',
}]

function IndexPage() {
  let links = linkList.map((item, index) => {
    return <a href={item.href} title={item.text} key={index}>{item.text}</a>
  })

  return (
    <Layout>
      <Header className={styles.header}>fun-loading</Header>
      <Content className={styles.content}>
        <Row style={{padding: '4px'}}>
          <Col {...itemLayout}>
            <StripeLoading number={6} color="rgba(16, 142, 233, 1)" show={true} />
          </Col>
          <Col {...itemLayout}>
          </Col>
        </Row>


      </Content>
      <Footer className={styles.footer}>
        <p>部分内容参考一列连接，在此感谢：</p>
        {links}
      </Footer>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
