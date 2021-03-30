import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const Avatar = ({ size }) => {
    return (
        <div style={{
            display:'inline-block',
            width:size+'px',
            height:size+'px',
            borderRadius:size+'px',
            background:'#CCCCCC',
            marginBottom:'10px'
            }}>
            <UserOutlined style={{fontSize:size*0.65,position:'relative',top:'18%',color:'white'}} />
        </div>
    );
}

export default Avatar;