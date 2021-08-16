import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const BarChart = () => {
  var data = [
    {
      type: 'jan',
      sales: 38,
    },
    {
      type: 'feb',
      sales: 52,
    },
    {
      type: 'mar',
      sales: 61,
    },
    {
      type: 'apr',
      sales: 145,
    },
    {
      type: 'may',
      sales: 48,
    },
    {
      type: 'june',
      sales: 38,
    },
    {
      type: 'july',
      sales: 38,
    },
    {
      type: 'aug',
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
  };
  return <Column style={{height:170,width:400}} {...config} />;
};

export default BarChart;