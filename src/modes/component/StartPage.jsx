import React, { useContext, useEffect } from 'react';
import { Div } from '../../Matcher';
import { TypingContext } from '../../Typing';
import { Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Title = styled.span`
font-size: 82px;
display: block;
text-align: center;
margin-top: 74px;
font-weight: 500;
`;
const Text =styled.span`
font-size: 28px;
display: block;
text-align: center;
margin: 31px 0 50px 0;
color : #001529;
`;
const ButtonBox =styled.span`
    display: block;
    text-align: center;
`;


const getDescription = (mode) => {

    switch (mode) {
        
        case '자리 연습':
            return (<Text>글자판의 위치를 익히는 곳입니다.<br/>글자판에 익숙하지 않다면 제일 먼저 자리 연습을 합니다.</Text>);
        case '낱말 연습':
            return (<Text>자리 연습처럼 단계별로 연습할 수 있으며, 다음 누를 글쇠를 미리 보여줍니다.<br/>낱말입력을 완료하면 Enter 글쇠나 Space Bar 글쇠를 눌러 다음 낱말을 입력합니다.</Text>);
        case '짧은 글 연습':
            return (<Text>입력하는 빠르기에 따라 현재 타수와 최고 타수가 실시간으로 나타납니다.<br/>처음에는 속도보다 정확하게 글자를 입력할 수 있도록 합니다.</Text>);
        case '긴 글 연습':
            return (<Text>긴 글 연습은 시간 제한 없이 자유롭게 연습할 수 있으며,<br/>타자 검정은 5분동안 빠르기를 측정할 수 있습니다.</Text>);
    }
}
export const modeLink = (mode) =>{
    switch(mode){
        case '자리 연습':
            return '/Typing/Fingers';
        case '낱말 연습':
            return '/Typing/Word';
        case '짧은 글 연습':
            return '/Typing/ShortPhrase';
        case '긴 글 연습':
            return '/Typing/LongPhrase';
    }
}


const StartPage = () => {

    const { mode, dispatch } = useContext(TypingContext);

    const onClickButton = () => {
        console.log('init!');
        dispatch({type:`INIT`})
    }

    return (
        <Div>
            <Title>{mode}</Title>
            {getDescription(mode)}
            <ButtonBox>
            <Button type="primary" size='large' onClick={onClickButton}>
                <Link to={modeLink(mode)}>연습 시작!</Link>
            </Button>
            </ButtonBox>
        </Div>
    );
}

export default StartPage;