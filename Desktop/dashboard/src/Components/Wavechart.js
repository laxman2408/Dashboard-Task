import React from 'react'
import  { useState, useEffect } from "react";
import { Bar  } from "react-chartjs-2";
import axios from "axios";

import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

function Wavechart() {

    function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
      }
      
      function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
      
      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      );
  
  
  
    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);
  
    const chart = () => {
      let empSal = [];
      let empAge = [];
      axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => {
          console.log(res);
          for (const dataObj of res.data.data) {
            empSal.push(parseInt(dataObj.employee_salary));
            empAge.push(parseInt(dataObj.employee_age));
          }
          setChartData({
            labels: empAge,
            datasets: [
              {
                label: "level of thickness",
                data: empSal,
                backgroundColor: ["#4C7BFD"],
                borderWidth: 4
              }
            ]
          });
        })
        .catch(err => {
          console.log(err);
        });
      console.log(empSal, empAge);
    };
  
    useEffect(() => {
      chart();
    }, []);
    
    return (
        <div>
            <div className="App">
     <span style={{display: "flex" , justifyContent:"space-between"}}> <h3 style={{ float:"left", }}>Search Activity</h3>  short by:<Dropdown style={{ float: "right" }} overlay={menu}>
      <Button style={{background:"#33567F" ,color:"white",borderRadius:15}}>
        Day <DownOutlined />
      </Button>
     
    </Dropdown></span>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
        </div>
    )
}

export default Wavechart
