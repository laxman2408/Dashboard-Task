

import React from 'react'
import { List, Avatar } from 'antd';
import "./Content.css"
function Lists() {
    const data = [
        {
          title: 'Ant Design Title 1',
          content:"Ant Design, a design language for background applications, is refined by Ant UED Team"
        },
        {
          title: 'Ant Design Title 2',
          content:"Ant Design, a design language for background applications, is refined by Ant UED Team"
        }
        
      ];
      
    return (
        <div>
              <List 
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item style={{color:" rgb(130, 135, 139)"}}>
        <List.Item.Meta 
        //   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        //   title={<a style={{color:"white"}} href="https://ant.design">{item.title}</a>}
        //   description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          
        />
        <div>{item.content}</div>
      </List.Item>
    )}
  />,
        </div>
    )
}

export default Lists
