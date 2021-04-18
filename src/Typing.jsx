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
        case '짧은 글 연습':
            return [
                '너 자신을 알라.',
                '자신을 화나게 했던 행동을 다른 이에게 행하지 말라.',
                '유일한 선은 앎이요, 유일한 악은 무지이다.',
                '살기 위해서 먹어야지 먹기 위해서 살아서는 안 된다.',
                '무지를 아는 것이 곧 앎의 시작이다.',
                '가장 적은 것으로도 만족하는 사람이 가장 부유한 사람이다.',
                '인간사에는 안정된 것이 하나도 없음을 기억하라.',
                '그러므로 성공에 들뜨거나 역경에 지나치게 의기소침 하지 마라.',
                '친구와 적은 있어야 한다.',
                '친구는 충고를, 적은 경고를 해준다.'
            ];

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
    kakao: {
        login: false,
        profile_img: undefined,
    }
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
        case 'KAKAO':
            return {
                ...state,
                kakao: action.kakao,
            }
    }
}

export const TypingContext = createContext({ dispatch: () => { }, mode: '' });
let firstRender = true;

const Typing = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { mode, name, goal, record, start, end, typed, wrong, letters, kakao } = state;
    const value = { dispatch, mode, name, goal, record, start, end, typed, wrong, letters, kakao };

    useEffect(() => {
        KaKaoInit(dispatch);
    }, []);

    useEffect(() => {
        if (!firstRender) {
            setInfo(JSON.stringify(goal), JSON.stringify(record));
        }
        else {
            firstRender = false;
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