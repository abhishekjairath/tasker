import React from "react";
import { List, Avatar } from 'antd';

import { Task } from "../../models/task";

export const TaskComponent = React.memo((props: Task) => {
    return (
        <List.Item
            key={props.title}
            style={{
                borderBottom: '#efefef 3px',
                backgroundColor: 'white',
                margin: '4px 0px',
            }}
        >
            <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">#{props.id}</a>}
                description={props.title}
            />
        </List.Item>
    );
});
