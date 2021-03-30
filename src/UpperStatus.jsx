import React, { useCallback, useContext, useMemo } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import {TypingContext} from './Typing';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const { Header } = Layout;

const Text = styled.span`
    color: white;
    font-size: 28px;
    font-weight: 100;
    padding-left: 20;
`;
const SettingButton = styled.button`
    background: #001529;
    border: none;
    outline: none;
    display: inline-block;
    position: absolute;
    right: 14px;
    top: 17px;
`;

const UpperStatus = () => {
    const {dispatch, mode}=useContext(TypingContext);
    const history = useHistory();
    const onClickSetting= useCallback((e)=>{
        e.preventDefault();
        dispatch({type:'CHANGE_MODE',mode:'설정'});
        history.push('/Settings');
    });
    return (
        <Header style={{ padding: '0',display:'inline-block' }}>
            <Text>{mode}</Text>
            <SettingButton onClick={onClickSetting}><SettingOutlined style={{fontSize:'25px',color:'white'}}/></SettingButton>
        </Header>
    );
}


export default UpperStatus;