import React, { useCallback, useContext } from 'react';
import { Layout, Menu, Divider, Progress } from 'antd';
import '../node_modules/antd/dist/antd.css';
const { Sider } = Layout;
import styled from 'styled-components';
import { TypingContext } from './Typing';
import { Link } from 'react-router-dom';
import Avatar from './modes/component/Avatar';
import { UserOutlined } from '@ant-design/icons';

const UserInfo = styled.div`
    padding:50px 0 0 0;
    // position:relative;
    // display:block;
    text-align:center;
    
`;
const ProgressBox=styled.div`
    display:inline-block;
    width:40%;
    margin-top:40;
`;
const Title = styled.span`
    padding:10px 0 0 0;
    font-weight:500;
    font:large;
    display:block;
`;


const Nav = () => {
    const { dispatch, name, goal, record } = useContext(TypingContext);

    const onClickMenu = useCallback(({ item, key }) => {
        dispatch({ type: 'CHANGE_MODE', mode: key });
    });

    return (
        <Sider style={{background:'white'}}>
            <UserInfo>
                <Avatar size={100}/>
                <Title>{<UserOutlined />}{name}</Title>
                <ProgressBox>
                    <Progress type="circle" percent={Math.floor(record[0]/goal[0]*100)} width={50}/>
                    <Title>목표 타수</Title>
                </ProgressBox>
                <ProgressBox>
                    <Progress type="circle" percent={Math.floor(record[1]/goal[1]*100)} width={50}/>
                    <Title>목표 정확도</Title>
                </ProgressBox>
            </UserInfo>
            <Divider />
            <Menu mode='inline' onClick={onClickMenu} defaultSelectedKeys={['자리 연습']} >
                <Menu.Item key='자리 연습' ><Link to='/'>자리 연습</Link></Menu.Item>
                <Menu.Item key='낱말 연습'><Link to='/'>낱말 연습</Link></Menu.Item>
                <Menu.Item key='짧은 글 연습'><Link to='/'>짧은 글 연습</Link></Menu.Item>
                <Menu.Item key='긴 글 연습'><Link to='/'>긴 글 연습</Link></Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Nav;