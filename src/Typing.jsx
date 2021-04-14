import React, { createContext, useEffect, useReducer } from 'react';
import { Layout } from 'antd';
import UpperStatus from './UpperStatus';
import Matcher from './Matcher';
import Nav from './Nav';
import { BrowserRouter, Switch } from 'react-router-dom';
import { KaKaoInit, setInfo } from './modes/Kakao/LoginWithKakao';

const generateLetters = (mode) => {
    switch (mode) {
        case '자리 연습':
            return '    ㅇㄴㅎㅅㅇㅇㄷㅎㅇㄴㄷㅈㅂㅌㄷㄹㄴㄷ   ';
        case '낱말 연습':
            return ['', '', '안녕', '인사', '예의', '최고', '긍정적', '리액트', '최적화', '타자', '분당', '강남', '프론트', '모던', '반응형', '서비스', '', ''];

    }
}

const initialState = {
    score: 0,
    name: 'guest',
    mode: '자리 연습',
    goal: [300, 90],
    record: [0, 0],
    start: 0,
    end: 0,
    typed: 0,
    wrong: 0,
    letters: '',
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return {
                ...state,
                mode: action.mode,
            }
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name,
            }
        case 'SET_GOAL':
            return {
                ...state,
                goal: action.goal,
            }
        case 'SET_RECORD':
            return {
                ...state,
                record: action.record,
            }
        case 'SET_START':
            return {
                ...state,
                start: action.start,
            }
        case 'INIT':
            return {
                ...state,
                typed: 0,
                wrong: 0,
                letters: generateLetters(state.mode),
            };
        case 'FIN':
            return {
                ...state,
                typed: action.typed,
                wrong: action.wrong,
                end: action.end,
            }
    }
}

export const TypingContext = createContext({ dispatch: () => { }, mode: '' });
let firstRender = true;

const Typing = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { mode, name, goal, record, start, end, typed, wrong, letters } = state;
    const value = { dispatch, mode, name, goal, record, start, end, typed, wrong, letters };

    useEffect(() => {
        KaKaoInit(dispatch);
    }, []);

    useEffect(() => {
        if(!firstRender){
            setInfo(JSON.stringify(goal), JSON.stringify(record));
        }
        else{
            firstRender=false;
        }
    }, [goal, record]);

    return (
        <BrowserRouter>
            <TypingContext.Provider value={value}>
                <Layout>
                    <Nav />
                    <Layout>
                        <UpperStatus />
                        <Matcher />
                    </Layout>
                </Layout>
            </TypingContext.Provider>
        </BrowserRouter>
    );
}

export default Typing;