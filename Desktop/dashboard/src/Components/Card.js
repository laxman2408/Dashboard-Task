import React, { useState } from "react";
import { Col, Row, Card } from "antd";
import { Switch } from "antd";
import "./Content.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import Lists from "./List";
import Wavechart from "./Wavechart";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
function Cards() {
  const [darkMode, setDarkMode] = useState(false);

  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
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

  return (
    <div style={{ background: "#000E1E" }}>

      <h2 style={{float:"left" ,color: "white"}}>Dashboard</h2>
      <span style={{ color: "white" }}>
        {/* Night mode */}
        <div
          className="switch-checkbox"
          style={{
            float: "right",
            display: "flex",
          }}
        >
          <h3 style={{ color: "white" }}
            style={{
              paddingTop:10,
              paddingRight: "10px",
              color: darkMode ? "white" : "white",
            }}
          >
            {darkMode ? "Night" : "Light"} Mode
          </h3>
          <label className="switch"><Switch style={{marginTop:10,}} onChange={() => setDarkMode(!darkMode)}/>
            
            <span className="slider round"></span>
          </label>
        </div>
      </span>
      <br></br>
      <br></br>
      <Row
        style={{ display: "flex", justifyContent: "Space-evenly" }}
        style={{}}
        className={darkMode ? "dark-mode" : "light-mode"}
      >
        {/* <Col span={8} style={{border:2, borderColor:"black" }}></Col> */}
        <Col  xs={24} xxl={8} sm={18} md={12} lg={14} xl={10}>
          <Card
            className={darkMode ? "dark-mode" : "light-mode"} 
            style={{
              borderRadius: 15,
              borderColor: "#000E1E",
              marginLeft: 35,
              marginTop: 10,
              width: 450,
              height: 270,
              // background: "#041528",
              boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
          >
            {" "}
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <h3 style={{ float: "left", color: "white" }}>
                Search Activity
              </h3>{" "}
              short by:
              <Dropdown style={{ float: "right" }} overlay={menu}>
                <Button
                  style={{
                    background: "#33567F",
                    borderColor: "#000E1E",
                    color: "white",
                    borderRadius: 15,
                  }}
                >
                  categories <DownOutlined />
                </Button>
              </Dropdown>
            </span>
            <BarChart />
          </Card>
        </Col>
        <Col xs={24} xl={6} lg={6} xxl={5}>
          <Card
            className={darkMode ? "dark-mode" : "light-mode"}
            style={{
              borderRadius: 15,
              borderColor: "#000E1E",
              marginLeft: 35,
              marginTop: 10,
              width: 250,
              height: 270,
              boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              // background: "#041528",
            }}
          >
            <LineChart />
          </Card>
        </Col>

        <Col xl={2} xxl={4} xs={24}>
          <Card
            className={darkMode ? "dark-mode" : "light-mode"}
            style={{
              borderRadius: 15,
              color: "white",
              borderColor: "#000E1E",
              marginLeft: 35,
              marginTop: 10,
              width: 300,
              height: 270,
              boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              // background: "#041528",
            }}
          >
            Top search <Lists />
          </Card>
        </Col>
        {/* <Col span={8} ></Col>
  <Col span={8} >clmn3</Col> */}
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "Space-evenly",
          marginTop: 0,
        }}
        className={darkMode ? "dark-mode" : "light-mode"}
      >
        <Col xl={12} lg={23} md={22} xxl={8}>
          <Card
            className={darkMode ? "dark-mode" : "light-mode"}
            style={{
              borderRadius: 15,
              borderColor: "#000E1E",
              marginLeft: 15,
              marginTop: 15,
              marginBottom: 60,
              width: 520,
              height: 270,
              boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              // background: "#041528",
            }}
          >
            <Button
              style={{
                background: "#33567F",
                borderColor: "#000E1E",
                color: "white",
                borderRadius: 15,
              }}
            >
              Day
              <DownOutlined />
            </Button>
            <LineChart />
          </Card>
        </Col>

        <Col xl={12} lg={24} md={24} xxl={44}>
          <Card
            className={darkMode ? "dark-mode" : "light-mode"}
            style={{
              borderRadius: 15,
              borderColor: "#000E1E",
              marginLeft: 35,
              marginTop: 15,
              width: 520,
              height: 270,
              color: "white",
              boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
              // background: "#041528",
            }}
          >
            <Button
              style={{
                background: "#33567F",
                borderColor: "#000E1E",
                color: "white",
                borderRadius: 15,
              }}
            >
              Default size card <DownOutlined />
            </Button>

            <PieChart />
          </Card>
        </Col>

        {/* 
  <Col span={8} ><Wavechart/></Col>
  <Col span={8} ></Col> */}
      </Row>
    </div>
  );
}

export default Cards;
