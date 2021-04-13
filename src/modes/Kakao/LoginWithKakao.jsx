import React, { useContext } from 'react';
import { TypingContext } from '../../Typing';
import './kakao';







export const LoginButton = () => {

    const {dispatch} = useContext(TypingContext);

    const login = () => {
        Kakao.Auth.login({
            success: function (authObj) {
                console.log(authObj);
                Kakao.Auth.setAccessToken(authObj.access_token);
                getInfo();
            },
            fail: function (err) {
                alert(JSON.stringify(err))
            },
        });
    }
    const getInfo = () => {
        Kakao.API.request({
            url: '/v2/user/me',
            success: (response) => {
                console.log(response.properties);
                console.log('goal' in response.properties);
                dispatch({ type: 'CHANGE_NAME', name: response.properties.nickname});
            },
            fail: (error) => {
                console.log(error);
            }
        });
    }
    
    const loginWithKakao = () => {
        login();
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

export const KaKaoInit = () => {
    Kakao.init('9a5dd4d7c94148051b91db5962f08388');
    console.log('kakao is initialized : ' + Kakao.isInitialized());
}

export const setInfo = (goal, record) => {
    Kakao.API.request({
        url: '/v1/user/update_profile',
        data: {
            properties: {
                goal:goal,
                record:record,
            },
        },
    });
}