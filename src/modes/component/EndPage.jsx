import React, { useContext, useEffect } from 'react';
import { Div } from '../../Matcher';
import styled from 'styled-components';
import Avatar from './Avatar';
import { Table, Button } from 'antd';
import { TypingContext } from '../../Typing';
import { Link } from 'react-router-dom';
import { modeLink } from './StartPage';

const Header = styled.div`
margin-top:3%;
display:block;
text-align:center;
`;
const Name = styled.span`
display:block;
text-align:center;
font-size:30px;
`;
const Body = styled.div`
width:56%;
margin: 3% auto 4% auto;
`;

const EndPage = () => {

    const { name, mode, typed, wrong, start, end, dispatch } = useContext(TypingContext);

    const typePerSecond = Math.floor(typed/(end-start)*1000*60);
    const accurancy = Math.floor(100 * (typed - wrong) / typed);
    const time = Math.floor((end - start)/100)/10;

    useEffect(()=>{
        dispatch({type:'SET_RECORD',record:[typePerSecond,accurancy]});
    },[]);

    const columns = [
        {
            title: '총 타수',
            dataIndex: 'typePerSecond',
            key: 'typePerSecond',
        },
        {
            title: '오타수',
            dataIndex: 'wrong',
            key: 'wrong',
        },
        {
            title: '정확도',
            dataIndex: 'accurancy',
            key: 'accurancy',
            render:(a)=><>{a}%</>
        },
        {
            title: '연습 시간',
            key: 'time',
            dataIndex: 'time',
            render:(t)=><>{t}초</>
        },
    ];
    const data = [
        {
            key: '1',
            typePerSecond: typePerSecond,
            wrong: wrong,
            accurancy: accurancy,
            time: time,
        },
    ];

    return (
        <Div>
            <Header><Avatar size={200} /></Header>
            <Name>
                {name}님의 연습 결과
            </Name>
            <Body>
                <Table
                    columns={columns}
                    pagination={{ position: ['none', 'none'] }}
                    dataSource={data}
                />
            </Body>
            <Name>
                <Button size='large' style={{ margin: '0 10px 2%' }}><Link to={modeLink(mode)}>다시하기</Link></Button>
                <Button size='large' style={{ margin: '0 10px 2%' }}><Link to='/Typing/'>그만하기</Link></Button>
            </Name>
        </Div>
    );
}
export default EndPage;