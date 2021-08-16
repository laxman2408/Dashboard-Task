

// import React, { useState, useEffect } from "react";
// import { Doughnut } from "react-chartjs-2";
// import axios from "axios";
// import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
// import { DownOutlined, UserOutlined } from '@ant-design/icons';

// const PieChart = () => {
  
//     function handleButtonClick(e) {
//         message.info('Click on left button.');
//         console.log('click left button', e);
//       }
      
//       function handleMenuClick(e) {
//         message.info('Click on menu item.');
//         console.log('click', e);
//       }
      
//       const menu = (
//         <Menu onClick={handleMenuClick}>
//           <Menu.Item key="1" icon={<UserOutlined />}>
//             1st menu item
//           </Menu.Item>
//           <Menu.Item key="2" icon={<UserOutlined />}>
//             2nd menu item
//           </Menu.Item>
//           <Menu.Item key="3" icon={<UserOutlined />}>
//             3rd menu item
//           </Menu.Item>
//         </Menu>
//       );
  





//   const [chartData, setChartData] = useState({});
//   const [employeeSalary, setEmployeeSalary] = useState([]);
//   const [employeeAge, setEmployeeAge] = useState([]);

//   const chart = () => {
//     let empSal = [];
//     let empAge = [];
//     axios
//       .get("http://dummy.restapiexample.com/api/v1/employees")
//       .then(res => {
//         console.log(res);
//         for (const dataObj of res.data.data) {
//           empSal.push(parseInt(dataObj.employee_salary));
//           empAge.push(parseInt(dataObj.employee_age));
//         }
//         setChartData({
//           labels: empAge,
//           datasets: [
//             {
//               label: "level of thickness",
//               data: empSal,
              
//                 backgroundColor: ['rgba(255, 99, 132, 0.2)',
//                 '#ffc929',
//                 '#ec5463',
//                 '#9dd367',
//                 '#4d7cff',
//                 '#AC92ED'],
//             //     borderColor: [
//             //       'rgba(255, 99, 132, 9)',
//             //       'rgba(54, 162, 235, 9)',
//             //       'rgba(255, 206, 86, 9)',
//             //       'rgba(75, 192, 192, 9)',
//             //       'rgba(153, 102, 255, 1)',
//             //       'rgba(255, 159, 64, 1)'
//             //   ],
//             //   borderWidth: 1
              
//             }
//           ]
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     console.log(empSal, empAge);
//   };

//   useEffect(() => {
//     chart();
//   }, []);
//   return (
//     <div className="App">
//       <span style={{display: "flex" , justifyContent:"space-between"}}> <h3 style={{ float:"left", }}>Search Activity</h3>  short by:<Dropdown style={{ float: "right" }} overlay={menu}>
//       <Button style={{background:"#33567F" ,color:"white" ,borderRadius:15}}>
//         categories <DownOutlined />
//       </Button>
     
//     </Dropdown></span>
//       <div>
//         <Doughnut
//           data={chartData}
//           options={{
//             responsive: true,
//             title: { text: "THICCNESS SCALE", display: true },
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true
//                   },
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ],
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ]
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };
// export default PieChart

import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const PieChart = () => {
  var data = [
    {
      type: 'Beauty',
      value: 27,
    },
    {
      type: 'Fashion',
      value: 25,
    },
    {
      type: 'Alcahol',
      value: 18,
    },
    {
      type: 'Food',
      value: 15,
    },
    {
      type: 'Movies',
      value: 10,
    },
    {
      type: 'Travel',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Pie style={{height:200, marginTop:0}} {...config} />;
};

export default PieChart;