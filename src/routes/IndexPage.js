import { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Row, Col, Tabs, Icon, Select, Radio } from 'antd';
import {
  StripeLoading,
  EllipsisLoading,
  TransformLoading,
  FlippingLoading,
  CircleLoading,
  RollLoading
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
    },
    transformObj: {
      time: 1,
      show: true
    },
    flippingObj: {
      time: 1.2,
      show: true,
      color: 'rgba(16, 142, 233, 1)'
    },
    circleObj: {
      time: 2,
      show: true,
      color: 'rgba(16, 142, 233, 1)'
    },
    rollObj: {
      time: 2,
      show: true,
      color: 'rgba(16, 142, 233, 1)'
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

  tranformTimrChange = (val) => {
    this.setState({
      transformObj: {
        ...this.state.transformObj,
        time: val
      }
    })
  }

  flippingTimeChange = (val) => {
    this.setState({
      flippingObj: {
        ...this.state.flippingObj,
        time: val
      }
    })
  }

  flippingColorChange = (val) => {
    this.setState({
      flippingObj: {
        ...this.state.flippingObj,
        color: val
      }
    })
  }

  circleTimeChange = (val) => {
    this.setState({
      circleObj: {
        ...this.state.circleObj,
        time: val
      }
    })
  }

  circleColorChange = (val) => {
    this.setState({
      circleObj: {
        ...this.state.circleObj,
        color: val
      }
    })
  }

  rollTimeChange = (val) => {
    this.setState({
      rollObj: {
        ...this.state.rollObj,
        time: val
      }
    })
  }

  rollColorChange = (val) => {
    this.setState({
      rollObj: {
        ...this.state.rollObj,
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
    const transformObj = this.state.transformObj;
    const flippingObj = this.state.flippingObj;
    const circleObj = this.state.circleObj;
    const rollObj = this.state.rollObj;

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
          <Col {...itemLayout}>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
              <div>
                <TransformLoading show={transformObj.show} time={transformObj.time} />
              </div>
              <Row style={{marginTop: '60px'}}>
                <Col span="6">
                  动画周期：
                </Col>
                <Col>
                  <Select defaultValue={1} style={{ width: 120 }} onChange={this.tranformTimrChange}>
                    <Option value={0.5}>0.5s</Option>
                    <Option value={1}>1s</Option>
                    <Option value={2}>2s</Option>
                  </Select>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
              <h3>组件使用方法</h3>
              <pre>&lt;TransformLoading show="true" time={transformObj.time}&gt;loading&lt;/TransformLoading&gt;</pre>
              <ParamsTable items = {paramsConfig.transform} />
            </TabPane>
          </Tabs>
        </Col>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <FlippingLoading show={flippingObj.show} time={flippingObj.time} color={flippingObj.color} />
                </div>
                <Row style={{marginTop: '60px'}}>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue={1.2} style={{ width: 120 }} onChange={this.flippingTimeChange}>
                      <Option value={0.5}>0.5s</Option>
                      <Option value={1.2}>1.2s</Option>
                      <Option value={2}>2s</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue="rgba(16, 142, 233, 1);" style={{ width: 120 }} onChange={this.flippingColorChange}>
                      <Option value="rgba(16, 142, 233, 1)">rgba(16, 142, 233, 1)</Option>
                      <Option value="yellowgreen">yellowgreen</Option>
                      <Option value="#65f8ce">#65f8ce</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;FlippingLoading show="true" time={flippingObj.time} color={flippingObj.color} /&gt;</pre>
                <ParamsTable items = {paramsConfig.flipping} />
              </TabPane>
            </Tabs>
          </Col>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <CircleLoading show={circleObj.show} time={circleObj.time} color={circleObj.color} />
                </div>
                <Row style={{marginTop: '60px'}}>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue={2} style={{ width: 120 }} onChange={this. circleTimeChange}>
                      <Option value={1.5}>1.5s</Option>
                      <Option value={2}>2s</Option>
                      <Option value={2.5}>2.5s</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue="rgba(16, 142, 233, 1);" style={{ width: 120 }} onChange={this. circleColorChange}>
                      <Option value="rgba(16, 142, 233, 1)">rgba(16, 142, 233, 1)</Option>
                      <Option value="yellowgreen">yellowgreen</Option>
                      <Option value="#65f8ce">#65f8ce</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt; CircleLoading show="true" time={circleObj.time} color={circleObj.color} /&gt;</pre>
                <ParamsTable items = {paramsConfig.circle} />
              </TabPane>
            </Tabs>
          </Col>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <RollLoading show={rollObj.show} time={rollObj.time} color={rollObj.color} />
                </div>
                <Row style={{marginTop: '60px'}}>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue={2} style={{ width: 120 }} onChange={this.rollTimeChange}>
                      <Option value={1.5}>1.5s</Option>
                      <Option value={2}>2s</Option>
                      <Option value={2.5}>2.5s</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue="rgba(16, 142, 233, 1);" style={{ width: 120 }} onChange={this. rollColorChange}>
                      <Option value="rgba(16, 142, 233, 1)">rgba(16, 142, 233, 1)</Option>
                      <Option value="yellowgreen">yellowgreen</Option>
                      <Option value="#65f8ce">#65f8ce</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;RollLoading show="true" time={rollObj.time} color={rollObj.color} /&gt;</pre>
                <ParamsTable items = {paramsConfig.roll} />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
      <Footer className={styles.footer}>
        <p>部分内容参考下列连接，在此感谢：</p>
        {links}
      </Footer>
    </Layout>);
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
