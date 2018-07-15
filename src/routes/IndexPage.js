import { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Row, Col, Tabs, Icon, Select, Radio } from 'antd';
import { StripeLoading } from '../components/loading';
import ParamsTable from '../components/paramstable';
import paramsConfig from '../params'

const { Header, Footer, Content } = Layout;
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const itemLayout = {
  span: 6,
  className: styles.item
}
const linkList = [{
  text: '使用 CSS3 实现超炫的 Loading（加载）动画效果',
  href: 'https://www.cnblogs.com/lhb25/p/loading-spinners-animated-with-css3.html',
}]

class IndexPage extends PureComponent {
  state = {
    stripeObj : {
      number: 6,
      color: 'rgba(16, 142, 233, 1)',
      show: true
    }
  }

  stripeColorChange = (e) => {
    const color = e.target.value;
    this.setState({
      stripeObj: {
        ...this.state.stripeObj,
        color: color
      }
    })
  }

  stripeNumberChange = (e) => {
    const number = e.target.value;
    this.setState({
      stripeObj: {
        ...this.state.stripeObj,
        number: number
      }
    })
  }

  stripeShowChange = (e) => {
    const isShow = e.target.value;
    this.setState({
      stripeObj: {
        ...this.state.stripeObj,
        show: isShow
      }
    })
  }

  render (){
    const links = linkList.map((item, index) => {
      return <a href={item.href} title={item.text} key={index}>{item.text}</a>
    })
    const stripeObj = this.state.stripeObj;

    return (<Layout>
      <Header className={styles.header}>fun-loading</Header>
      <Content className={styles.content}>
        <Row style={{padding: '4px'}}>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div style={{height: '120px'}}>
                  <StripeLoading number={stripeObj.number} color={stripeObj.color} show={stripeObj.show} />
                </div>
                <Row>
                  <Col span="6">
                    切换颜色：
                  </Col>
                  <Col>
                    <RadioGroup defaultValue="rgba(16, 142, 233, 1)" onChange={this.stripeColorChange}>
                      <Radio value="rgba(16, 142, 233, 1)">rgba(16, 142, 233, 1)</Radio>
                      <Radio value="red">red</Radio>
                    </RadioGroup>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    条纹数量：
                  </Col>
                  <Col>
                    <RadioGroup defaultValue={6} onChange={this.stripeNumberChange}>
                      <Radio value={3}>3</Radio>
                      <Radio value={6}>6</Radio>
                      <Radio value={8}>8</Radio>
                      <Radio value={10}>10</Radio>
                    </RadioGroup>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    是否显示：
                  </Col>
                  <Col>
                    <RadioGroup defaultValue={true} onChange={this.stripeShowChange}>
                      <Radio value={true}>true</Radio>
                      <Radio value={false}>false</Radio>
                    </RadioGroup>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;StripeLoading number={6} color="rgba(16, 142, 233, 1)" show="true" /&gt;</pre>
                <ParamsTable items = {paramsConfig.stripe} />
              </TabPane>
            </Tabs>
          </Col>
          <Col {...itemLayout}>
          </Col>
        </Row>
      </Content>
      <Footer className={styles.footer}>
        <p>部分内容参考一列连接，在此感谢：</p>
        {links}
      </Footer>
    </Layout>);
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
