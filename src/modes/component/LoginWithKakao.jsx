import React from 'react';

const boom = () => {
    alert('bang!');
}

export const LoginButton = () => {
    return (
        <div onClick={boom}>
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"
            />
        </div>
    );
}