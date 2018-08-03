import { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Row, Col, Tabs, Icon, Select, Radio, BackTop  } from 'antd';
import {
  StripeLoading,
  EllipsisLoading,
  TransformLoading,
  FlippingLoading,
  CircleLoading,
  RollLoading,
  PointLoading,
  SpinnerLoading,
  LineLoading,
  RotateLoading,
  EncircleLoading
} from '../components/loading';
import CommonHeader from '../components/commonHeader';
import ParamsTable from '../components/paramstable';
import paramsConfig from '../params'

const { Footer, Content } = Layout;
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const itemLayout = {
  xs: {
    span: 24
  },
  sm: {
    span: 24
  },
  md: {
    span: 12
  },
  lg: {
    span: 8
  },
  xl: {
    span: 6
  },
  className: styles.item
}
const linkList = [{
  text: '使用 CSS3 实现超炫的 Loading（加载）动画效果',
  href: 'https://www.cnblogs.com/lhb25/p/loading-spinners-animated-with-css3.html'
},{
  text: 'HTML5+CSS3 最酷的 loading 效果收集',
  href: 'http://www.runoob.com/w3cnote/free-html5-css3-loaders-preloaders.html'
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
    },
    pointObj : {
      time: 1.5,
      color: 'rgba(16, 142, 233, 1)',
      show: true
    },
    spinnerObj : {
      time: 1.2,
      color: 'rgba(16, 142, 233, 1)',
      size: '20px',
      show: true
    },
    lineObj: {
      number: 5,
      time: 2,
      show: true
    },
    rotateObj: {
      size: '16px',
      show: true
    },
    encircleObj: {
      color: 'rgba(16, 142, 233, 1)',
      time: 2,
      size: 0.75,
      show: true
    },
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

  tranformTimeChange = (val) => {
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

  pointTimeChange = (val) => {
    this.setState({
      pointObj: {
        ...this.state.pointObj,
        time: val
      }
    })
  }

  pointColorChange = (val) => {
    this.setState({
      pointObj: {
        ...this.state.pointObj,
        color: val
      }
    })
  }

  spinnerColorChange = (val) => {
    this.setState({
      spinnerObj: {
        ...this.state.spinnerObj,
        color: val
      }
    })
  }

  spinnerSizeChange = (val) => {
    this.setState({
      spinnerObj: {
        ...this.state.spinnerObj,
        size: val
      }
    })
  }

  spinnerTimeChange = (val) => {
    this.setState({
      spinnerObj: {
        ...this.state.spinnerObj,
        time: val
      }
    })
  }

  lineNumberChange = (val) => {
    this.setState({
      lineObj: {
        ...this.state.lineObj,
        number: val
      }
    })
  }

  lineTimeChange = (val) => {
    this.setState({
      lineObj: {
        ...this.state.lineObj,
        time: val
      }
    })
  }

  rotateSizeChange = (val) => {
    this.setState({
      rotateObj: {
        ...this.state.rotateObj,
        size: val
      }
    })
  }

  encircleSizeChange = (val) => {
    debugger;
    this.setState({
      encircleObj: {
        ...this.state.encircleObj,
        size: val
      }
    })
  }

  encircleColorChange = (val) => {
    this.setState({
      encircleObj: {
        ...this.state.encircleObj,
        color: val
      }
    })
  }

  encircleTimeChange = (val) => {
    this.setState({
      encircleObj: {
        ...this.state.encircleObj,
        time: val
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
    const pointObj = this.state.pointObj;
    const spinnerObj = this.state.spinnerObj;
    const lineObj = this.state.lineObj;
    const rotateObj = this.state.rotateObj;
    const encircleObj = this.state.encircleObj;

    return (<Layout>
      <CommonHeader index="1"/>
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
                  <Select defaultValue={1} style={{ width: 120 }} onChange={this.tranformTimeChange}>
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
                    <Select defaultValue={2} style={{ width: 120 }} onChange={this.circleTimeChange}>
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
                    <Select defaultValue="rgba(16, 142, 233, 1);" style={{ width: 120 }} onChange={this.circleColorChange}>
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
                    <Select defaultValue="rgba(16, 142, 233, 1);" style={{ width: 120 }} onChange={this.rollColorChange}>
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
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <PointLoading show={pointObj.show} time={pointObj.time} color={pointObj.color} />
                </div>
                <Row style={{marginTop: '60px'}}>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue={1.5} style={{ width: 120 }} onChange={this.pointTimeChange}>
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
                    <Select defaultValue="rgba(16, 142, 233, 1);" style={{ width: 120 }} onChange={this.pointColorChange}>
                      <Option value="rgba(16, 142, 233, 1)">rgba(16, 142, 233, 1)</Option>
                      <Option value="yellowgreen">yellowgreen</Option>
                      <Option value="#65f8ce">#65f8ce</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;PointLoading show="true" time={pointObj.time} color={pointObj.color} /&gt;</pre>
                <ParamsTable items = {paramsConfig.point} />
              </TabPane>
            </Tabs>
          </Col>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <SpinnerLoading show={spinnerObj.show} time={spinnerObj.time} color={spinnerObj.color} size={spinnerObj.size}/>
                </div>
                <Row style={{marginTop: '60px'}}>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue="20px" style={{ width: 120 }} onChange={this.spinnerSizeChange}>
                      <Option value="20px">20px</Option>
                      <Option value="40px">40px</Option>
                      <Option value="60px">60px</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    动画颜色：
                  </Col>
                  <Col>
                    <Select defaultValue="rgba(16, 142, 233, 1);" style={{ width: 120 }} onChange={this.spinnerColorChange}>
                      <Option value="rgba(16, 142, 233, 1)">rgba(16, 142, 233, 1)</Option>
                      <Option value="yellowgreen">yellowgreen</Option>
                      <Option value="#65f8ce">#65f8ce</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue={1.5} style={{ width: 120 }} onChange={this.spinnerTimeChange}>
                      <Option value={1.5}>1.5s</Option>
                      <Option value={2}>2s</Option>
                      <Option value={2.5}>2.5s</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;SpinnerLoading show="true" time={spinnerObj.time} color={spinnerObj.color} size={spinnerObj.size} /&gt;</pre>
                <ParamsTable items = {paramsConfig.spinner} />
              </TabPane>
            </Tabs>
          </Col>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <LineLoading show={lineObj.show} number={lineObj.number} time={lineObj.time}/>
                </div>
                <Row>
                  <Col span="6">
                    线条数量：
                  </Col>
                  <Col>
                    <Select defaultValue={5} style={{ width: 120 }} onChange={this.lineNumberChange}>
                      <Option value={5}>5</Option>
                      <Option value={4}>4</Option>
                      <Option value={3}>3</Option>
                      <Option value={2}>2</Option>
                      <Option value={1}>1</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue={1.5} style={{ width: 120 }} onChange={this.lineTimeChange}>
                      <Option value={1.5}>1.5s</Option>
                      <Option value={2}>2s</Option>
                      <Option value={2.5}>2.5s</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;LineLoading show="true" number={lineObj.number} time={lineObj.time} /&gt;</pre>
                <ParamsTable items = {paramsConfig.line} />
              </TabPane>
            </Tabs>
          </Col>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <RotateLoading show={rotateObj.show} size={rotateObj.size}/>
                </div>
                <Row>
                  <Col span="6">
                    动画大小：
                  </Col>
                  <Col>
                    <Select defaultValue="16px" style={{ width: 120 }} onChange={this.rotateSizeChange}>
                      <Option value="12px">12px</Option>
                      <Option value="16px">16px</Option>
                      <Option value="20px">20px</Option>
                      <Option value="30px">30px</Option>
                      <Option value="40px">40px</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;RotateLoading show="true" size={rotateObj.size} /&gt;</pre>
                <ParamsTable items = {paramsConfig.rotate} />
              </TabPane>
            </Tabs>
          </Col>
          <Col {...itemLayout}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={<span><Icon type="area-chart" />演示</span>} key="1">
                <div>
                  <EncircleLoading show={encircleObj.show} size={encircleObj.size} color={encircleObj.color} time={encircleObj.time}/>
                </div>
                <Row>
                  <Col span="6">
                    动画大小：
                  </Col>
                  <Col>
                    <Select defaultValue={0.75} style={{ width: 120 }} onChange={this.encircleSizeChange}>
                      <Option value={0.5}>0.5</Option>
                      <Option value={0.75}>0.75</Option>
                      <Option value={1}>1</Option>
                      <Option value={1.1}>1.1</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    动画颜色：
                  </Col>
                  <Col>
                    <Select defaultValue="rgba(16, 142, 233, 1);" style={{ width: 120 }} onChange={this.encircleColorChange}>
                      <Option value="rgba(16, 142, 233, 1)">rgba(16, 142, 233, 1)</Option>
                      <Option value="yellowgreen">yellowgreen</Option>
                      <Option value="#65f8ce">#65f8ce</Option>
                    </Select>
                  </Col>
                </Row>
                <Row>
                  <Col span="6">
                    动画周期：
                  </Col>
                  <Col>
                    <Select defaultValue={1} style={{ width: 120 }} onChange={this.encircleTimeChange}>
                      <Option value={0.5}>0.5s</Option>
                      <Option value={1}>1s</Option>
                      <Option value={2}>2s</Option>
                    </Select>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="setting" />说明</span>} key="2">
                <h3>组件使用方法</h3>
                <pre>&lt;EncircleLoading show="true" size={encircleObj.size} color={encircleObj.color} time={encircleObj.time}} /&gt;</pre>
                <ParamsTable items = {paramsConfig.encircle} />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <BackTop />
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
