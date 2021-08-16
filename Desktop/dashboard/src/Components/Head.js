import React from "react";
import "antd/dist/antd.css";

import { Row, Col, Divider } from 'antd';
import { Input, Space } from "antd";
import { AudioOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
function Head() {
  // const ToggleSwitch = () => {
  //   const { toggleTheme } = useThemeContext()

  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
        margin: 0,
      }}
    />
  );

  const onSearch = (value) => console.log(value);

  return (
    <div style={{ display: "flex", width:'100%' ,textAlign:"baseline" , justifyContent:"space-between" , }}>
      <Space className="header">
        <h2
          style={{
            color: "white",
            
          
           

          }}
          md={12}
        >
          African Tunes
        </h2>

        <SearchOutlined />
  

        <input
          md={12}
          style={{ color: "white" , }}
          placeholder="Search...."
          onSearch={onSearch}
          style={{
            color: "black",
            width: 300,
            height: 30,
            backgroundColor: " transparent",
            border: "none",
           
          }}
        />
        {/* <Search  style={{ backgroundColor:"transparent"  }} /> */}
        <div>
          {/* <p style={{ color: "white",justifyContent:"space-between"}} >
            Adelle mitchell
        </p> */}
          <span className="avatar-item" style={{float:"right", textAlign:'right',marginLeft:"50",  paddingLeft:700}}>
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} style={{height:40, width:40 , borderRadius:'50%' , }} />
      </Badge>
    </span>
        </div>
      </Space>
    </div>
  );
}

export default Head;
