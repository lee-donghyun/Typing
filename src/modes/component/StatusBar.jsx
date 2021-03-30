import React, { useContext } from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';
import {TypingContext} from '../../Typing';

const BarBox = styled.div`
display:inline-block;
width:33%;
padding:10px;
`;
const BarName=styled.span`
display: block;
margin: 0 auto;
width: 80%;
text-align: start;
`;
const ProgressBar = ({ progress }) => {
    return (
    <BarBox>
        <BarName>진행도</BarName>
        <Progress percent={progress} style={{ display: 'inline-block', width: '80%',}} />
    </BarBox>
    );
}
const WrongBar = ({ wrong }) => {
    return (
    <BarBox>
        <BarName>오타율</BarName>
        <Progress percent={wrong} strokeColor='#f63b56' style={{ display: 'inline-block', width: '80%',}} />
    </BarBox>
    );
}
const AccurancyBar = ({ accurancy }) => {
    return (
    <BarBox>
        <BarName>정확도</BarName>
        <Progress percent={accurancy} strokeColor='#5ec738' style={{ display: 'inline-block', width: '80%',}} />
    </BarBox>
    );
}


const StatusBar = ({info}) => {
    return (
        <div>
            <ProgressBar progress={info.progress} />
            <WrongBar wrong={info.wrongPercent} />
            <AccurancyBar accurancy={info.accurancyPercent} />
        </div>
    );
}

export default StatusBar;