import React, { useCallback, useContext } from 'react';
import { Div } from '../Matcher';
import { Radio, Input, InputNumber } from 'antd';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import { TypingContext } from '../Typing';

const Element = styled.div`
    // background:grey;
    padding-bottom:40;
    width:40%;
`;
const Span = styled.span`
    display:block;
    font-size: large;
    font-weight:300;
    padding-bottom:20;
`;

const Settings = () => {

    const { dispatch, name, goal } = useContext(TypingContext);

    const onChangeName = useCallback((e) => {
        dispatch({ type: 'CHANGE_NAME', name: e.target.value });
    });
    const onChangeSpeed = useCallback((e) => {
        dispatch({ type: 'SET_GOAL', goal: [e, goal[1]] });
    });
    const onChangeaccuracy = useCallback((e) => {
        dispatch({ type: 'SET_GOAL', goal: [goal[0], e] });
    });


    return (
        <Div>
            <Element>
                <Span>이름</Span>
                <Input size="large" placeholder={name} prefix={<UserOutlined />} onChange={onChangeName} />
            </Element>
            <Element>
                <Span>언어</Span>
                <Radio.Group defaultValue="a" size='large'>
                    <Radio.Button value="a">한글</Radio.Button>
                    <Radio.Button value="b">English</Radio.Button>
                </Radio.Group>
            </Element>
            <Element>
                <Span>목표 타수</Span>
                <InputNumber min={1} max={2000} defaultValue={300} onChange={onChangeSpeed} />
            </Element>
            <Element>
                <Span>목표 정확도 (%)</Span>
                <InputNumber min={1} max={100} defaultValue={90} onChange={onChangeaccuracy} />
            </Element>
        </Div>
    );
}

export default Settings;