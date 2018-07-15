/**
 * Created by Administrator on 2018/7/15.
 */
const stripe = [{
  paramName: 'show',
  paramDes: '是否显示',
  paramRequire: 'true',
  paramDef: '-'
},
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

const ellipsis = [{
  paramName: 'show',
  paramDes: '是否显示',
  paramRequire: 'true',
  paramDef: '-'
},
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

export default {
  stripe,
  ellipsis
}


