import React, { useContext } from 'react';
import { TypingContext } from '../../Typing';
import './kakao';

const getInfo = (dispatch) => {
    Kakao.API.request({
        url: '/v2/user/me',
        success: (response) => {
            console.log(response.properties);
            dispatch({ type: 'CHANGE_NAME', name: response.properties.nickname });
            if ('goal' in response.properties) {
                console.log('goal is in prperties : ' + ('goal' in response.properties));
                dispatch({ type: 'SET_GOAL', goal: JSON.parse(response.properties.goal) });
                dispatch({ type: 'SET_RECORD', record: JSON.parse(response.properties.record) });
            }
        },
        fail: (error) => {
            console.log(error);
        }
    });
}

export const LoginButton = () => {

    const { dispatch } = useContext(TypingContext);

    const login = () => {
        Kakao.Auth.login({
            success: function (authObj) {
                console.log(authObj);
                Kakao.Auth.setAccessToken(authObj.access_token);
                getInfo(dispatch);
            },
            fail: function (err) {
                alert(JSON.stringify(err))
            },
        });
    }


    const loginWithKakao = () => {
        if (!Kakao.Auth.getAccessToken()) {
            login();
        }
        else alert('이미 로그인 되어있습니다.');
    }

    return (
        <div onClick={loginWithKakao}>
            <img
                src='/src/modes/Kakao/kakao_login_medium_narrow.png'
                width="222"
            />
        </div>
    );
}

export const KaKaoInit = (dispatch) => {
    Kakao.init('9a5dd4d7c94148051b91db5962f08388');
    console.log('kakao is initialized : ' + Kakao.isInitialized());
    if (Kakao.Auth.getAccessToken()) {
        console.log('logged in already so i will get info');
        getInfo(dispatch);
    }
}

export const setInfo = (goal, record) => {
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
            url: '/v1/user/update_profile',
            data: {
                properties: {
                    goal: goal,
                    record: record,
                },
            },
        });
        Kakao.API.request({
            url: '/v2/user/me',
            success: (response) => {
                console.log('show info');
                console.log(response.properties);
            },
            fail: (error) => {
                console.log(error);
            }
        });
    }
}