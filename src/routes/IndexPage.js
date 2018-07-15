import { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Row, Col, Tabs, Icon, Select, Radio } from 'antd';
import {
  StripeLoading,
  EllipsisLoading
} from '../components/loading';
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
    },
    ellipsisObj: {
      fontSize : '40px',
      color: 'red',
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

  ellipsisFontSizeChange = (val) => {
    this.setState({
      ellipsisObj: {
        ...this.state.ellipsisObj,
        fontSize: val
      }
    })
  }

  ellipsisColorChange = (val) => {
    this.setState({
      ellipsisObj: {
        ...this.state.ellipsisObj,
        color: val
      }
    })
  }

  render (){
    const links = linkList.map((item, index) => {
      return <a href={item.href} title={item.text} key={index}>{item.text}</a>
    })
    const stripeObj = this.state.stripeObj;
    const ellipsisObj = this.state.ellipsisObj;

    return (<Layout>
      <Header className={styles.header}>fun-loading</Header>
      <Content className={styles.content}>
        <Row style={{padding: '4px'}}>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
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
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <EllipsisLoading fontSize={ellipsisObj.fontSize} show={ellipsisObj.show} color={ellipsisObj.color}>loading</EllipsisLoading>
                </div>
                <Row style={{marginTop: '30px'}}>
                  <Col span="6">
                    字体大小：
                  </Col>
                  <Col>
                    <Select defaultValue="40px" style={{ width: 120 }} onChange={this.ellipsisFontSizeChange}>
                      <Option value="12px">12px</Option>
                      <Option value="20px">20px</Option>
                      <Option value="40px">40px</Option>
                      <Option value="60px">60px</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    字体颜色：
                  </Col>
                  <Col>
                    <Select defaultValue="#333" style={{ width: 120 }} onChange={this.ellipsisColorChange}>
                      <Option value="red">red</Option>
                      <Option value="green">green</Option>
                      <Option value="blue">blue</Option>
                      <Option value="#333">#333</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;EllipsisLoading fontSize={ellipsisObj.fontSize} show={ellipsisObj.show} &gt; loading &lt;/EllipsisLoading &gt;</pre>
                <ParamsTable items = {paramsConfig.ellipsis} />
              </TabPane>
            </Tabs>
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
