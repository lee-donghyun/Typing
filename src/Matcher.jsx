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
                <Route path='/Typing/Fingers' component={Fingers} />
                <Route path='/Typing/Word' component={Word} />
                <Route path='/Typing/ShortPhrase' component={ShortPhrase} />
                <Route path='/Typing/LongPhrase' component={LongPhrase} />
                <Route path='/Typing/Settings' component={Settings} />
                <Route path='/Typing/End' component={EndPage}/>
                <Route path='/' component={StartPage} />
            </Switch>
        </Content>
    );
}

export default Matcher;