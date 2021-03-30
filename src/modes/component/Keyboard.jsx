import React, { useCallback, useMemo } from 'react';
import { Typography } from 'antd';
const { Text } = Typography;

const Keyboard = ({ k }) => {
    return (
        <div style={{ paddingBottom: '10px', display: 'inline-block' }}>
            <Text keyboard style={{ fontSize: 'xxx-large', color: 'black', }}>{k}</Text>
        </div>
    );
}
const BlueKeyboard = ({ k }) => {
    return (
        <div style={{ paddingBottom: '10px', display: 'inline-block' }}>
            <Text keyboard style={{ fontSize: 'xxx-large', color: '#319cee', }}>{k}</Text>
        </div>
    );
}

export const KoreanKeyboard = ({target}) => {
    return (
        <div style={{ textAlign: 'center' }}>
            {["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ"].map((v) => v===target?<BlueKeyboard k={v}/>:<Keyboard k={v} />)}
            <br />
            {["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅏ", "ㅣ"].map((v) => v===target?<BlueKeyboard k={v}/>:<Keyboard k={v} />)}
            <br />
            {["Shift", "ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ", "Shift"].map((v) => v===target?<BlueKeyboard k={v}/>:<Keyboard k={v} />)}
        </div>
    );
}