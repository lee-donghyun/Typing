import React, { useContext } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { TypingContext } from '../../Typing';

const Avatar = ({ size }) => {

    const { kakao } = useContext(TypingContext);

    if (!kakao.login) {
        return (
            <div style={{
                display: 'inline-block',
                width: size + 'px',
                height: size + 'px',
                borderRadius: size + 'px',
                background: '#CCCCCC',
                marginBottom: '10px'
            }}>
                <UserOutlined style={{ fontSize: size * 0.65, position: 'relative', top: '18%', color: 'white' }} />
            </div>
        );
    }
    else if (!kakao.profile_img) {
        return (
            <div style={{
                display: 'inline-block',
                width: size + 'px',
                height: size + 'px',
                borderRadius: size + 'px',
                background: '#FEE500',
                marginBottom: '10px',
            }}>
                <UserOutlined style={{ fontSize: size * 0.65, position: 'relative', top: '18%', color: 'white' }} />
            </div>
        );
    }
    else {
        return (
            <img style={{
                display: 'inline-block',
                width: size + 'px',
                height: size + 'px',
                borderRadius: size + 'px',
                backgroundImage: 'url(' + kakao.profile_img + ')',
                backgroundSize: 'contain',
            }} />
        );
    }
}

export default Avatar;