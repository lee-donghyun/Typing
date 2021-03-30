import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Div } from '../Matcher';
import ShowLetters from './component/ShowLetters';
import { KoreanKeyboard } from './component/Keyboard';
import { useHistory } from 'react-router';
import StatusBar from './component/StatusBar';
import { TypingContext } from '../Typing';

const koLibrary = {
    E: "ㄸ",
    Q: "ㅃ",
    R: "ㄲ",
    W: "ㅉ",
    T: 'ㅆ',
    a: "ㅁ",
    b: "ㅠ",
    c: "ㅊ",
    d: "ㅇ",
    e: "ㄷ",
    f: "ㄹ",
    g: "ㅎ",
    h: "ㅗ",
    i: "ㅑ",
    j: "ㅓ",
    k: "ㅏ",
    l: "ㅣ",
    m: "ㅡ",
    n: "ㅜ",
    o: "ㅐ",
    p: "ㅔ",
    q: "ㅂ",
    r: "ㄱ",
    s: "ㄴ",
    t: "ㅅ",
    u: "ㅕ",
    v: "ㅍ",
    w: "ㅈ",
    x: "ㅌ",
    y: "ㅛ",
    z: "ㅋ",
}

const Fingers = () => {
    
    const inputRef = useRef(null);
    const [range, setRange] = useState([0, 8]);
    const [wrong, setWrong] = useState(0);
    const [typed, setTyped] = useState(0);

    const history = useHistory();

    const { dispatch, letters } = useContext(TypingContext);



    const onclickDiv = useCallback(() => {
        inputRef.current.focus();
    });
    const onKeyPressInput = useCallback((e) => {
        if (range[0] === 0 && wrong === 0) {
            const now = Date.now();
            dispatch({ type: 'SET_START', start: now });
            console.log('set start~~');
        }
        //correct or wrong
        setTyped((prev) => prev + 1);
        if (koLibrary[e.key] === letters[(range[0] + range[1]) / 2]) {
            console.log('correct!');
        }
        else {
            setWrong((prev) => prev + 1);
            console.log('wrong!!' + wrong);
            return;
        }
        //stop or go
        if (range[1] === letters.length) {
            console.log('finish!');
            const now = Date.now();
            console.log(now);
            dispatch({ type: 'FIN', typed: typed, wrong: wrong, end: now });
            history.push('/End');
        }
        else {
            setRange((prev) => [prev[0] + 1, prev[1] + 1]);
        }
    });
    const onKeyDownInput = useCallback((e) => {
        if (e.key === "Process") alert('한/영 키를 누르세요');
    });
    const statusInfo = useMemo(() => {
        const progress = Math.floor(100 * (typed - wrong) / (letters.length - 7));
        const wrongPercent = Math.floor(100 * (wrong) / (typed + 1));
        const accurancyPercent = Math.floor(100 * (typed - wrong) / (typed));
        return { progress: progress, wrongPercent: wrongPercent, accurancyPercent: accurancyPercent };
    }, [typed, wrong]);


    useEffect(() => {
        inputRef.current.focus();
    });


    return (
        <Div onClick={onclickDiv} style={{ textAlign: 'center' }}>
            <StatusBar info={statusInfo}/>
            <ShowLetters letters={letters.slice(range[0], range[1])} />
            <input type="text" onKeyPress={onKeyPressInput} onKeyDown={onKeyDownInput} ref={inputRef} style={{ width: '0', height: '0', border: 'none', outline: 'none' }} />
            <KoreanKeyboard target={letters[(range[0] + range[1]) / 2]} />
        </Div>
    );
}

export default Fingers;


