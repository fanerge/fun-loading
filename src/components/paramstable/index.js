/**
 * Created by Administrator on 2018/7/15.
 */
import React from 'react';
import PropTypes from 'prop-types';

 function ParamsTable (props){
   const itmes = props.items.map((itme, index) => {
     return (
       <tr key={index}>
         <td>{itme.paramName || '-'}</td>
         <td>{itme.paramDes || '-'}</td>
         <td>{itme.paramRequire || '-'}</td>
         <td>{itme.paramDef || '-'}</td>
       </tr>
     )
   })

  return (
    <table>
      <thead>
        <tr>
          <th style={{width: '10%'}}>参数</th>
          <th style={{width: '40%'}}>说明</th>
          <th style={{width: '10%'}}>必填</th>
          <th style={{width: '40%'}}>默认值</th>
        </tr>
      </thead>
      <tbody>
      {itmes}
      </tbody>
    </table>
  )
}

ParamsTable.propTypes = {
  items : PropTypes.array.isRequired
}

export default ParamsTable;
