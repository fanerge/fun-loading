/**
 * Created by Administrator on 2018/7/15.
 */
  const show = {
  paramName: 'show',
  paramDes: '是否显示',
  paramRequire: 'true',
  paramDef: '-'
}

const stripe = [
  show,
{
  paramName: 'color',
  paramDes: '条状颜色',
  paramRequire: 'false',
  paramDef: 'rgba(16, 142, 233, 1)'
},
{
  paramName: 'number',
  paramDes: '条状数量',
  paramRequire: 'false',
  paramDef: '6'
}];

const ellipsis = [
  show,
  {
    paramName: 'color',
    paramDes: '字体颜色',
    paramRequire: 'false',
    paramDef: '#333'
  },
  {
    paramName: 'fontSize',
    paramDes: '字体大小',
    paramRequire: 'true',
    paramDef: '16px'
  }];

const transform = [
  show,
  {
    paramName: 'time',
    paramDes: '动画周期',
    paramRequire: 'false',
    paramDef: 1
  }]

const flipping = [
  show,
  {
    paramName: 'time',
    paramDes: '动画周期',
    paramRequire: 'false',
    paramDef: 1
  },
  {
    paramName: 'color',
    paramDes: '动画颜色',
    paramRequire: 'false',
    paramDef: 'rgba(16, 142, 233, 1)'
  }
]

const circle = [
  show,
  {
    paramName: 'time',
    paramDes: '动画周期',
    paramRequire: 'false',
    paramDef: 2
  },
  {
    paramName: 'color',
    paramDes: '动画颜色',
    paramRequire: 'false',
    paramDef: 'rgba(16, 142, 233, 1)'
  }
]

const roll = [
  show,
  {
    paramName: 'time',
    paramDes: '动画周期',
    paramRequire: 'false',
    paramDef: 2
  },
  {
    paramName: 'color',
    paramDes: '动画颜色',
    paramRequire: 'false',
    paramDef: 'rgba(16, 142, 233, 1)'
  }
]













export default {
  stripe,
  ellipsis,
  transform,
  flipping,
  circle,
  roll
}


