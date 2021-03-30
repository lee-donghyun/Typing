import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import Fingers from './modes/Fingers';
import LongPhrase from './modes/LongPhrase';
import ShortPhrase from './modes/ShortPhrase';
import Word from './modes/Word';
import Settings from './modes/Settings';
import styled from 'styled-components';
import { Route, Switch } from 'react-router';
import EndPage from './modes/component/EndPage';
import StartPage from './modes/component/StartPage';


export const Div = styled.div`
    background:white;
    padding:24px;
    min-height:550px;
    min-width:1100px;
`;



const Matcher = () => {

    return (
        <Content style={{ padding: '20' }}>
            <Switch>
                <Route path='/Fingers' component={Fingers} />
                <Route path='/Word' component={Word} />
                <Route path='/ShortPhrase' component={ShortPhrase} />
                <Route path='/LongPhrase' component={LongPhrase} />
                <Route path='/Settings' component={Settings} />
                <Route path='/End' component={EndPage}/>
                <Route path='/' component={StartPage} />
            </Switch>
        </Content>
    );
}

export default Matcher;