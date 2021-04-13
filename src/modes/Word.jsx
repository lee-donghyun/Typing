import React, { useContext, useEffect, useCallback, useRef, useState, useMemo } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Div } from '../Matcher';
import { TypingContext } from '../Typing';
import ShowWords from './component/ShowWords';
import StatusBar from './component/StatusBar';

const Input = styled.input`
text-align:center;
font-size:120px;
width:100%;
outline:none;
border:none;
`;


const Word = () => {

    const inputRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [typed, setTyped] = useState(0);
    const [start,setStart] = useState(false);

    const { letters, dispatch } = useContext(TypingContext);

    const history = useHistory();


    const onclickDiv = useCallback(() => {
        inputRef.current.focus();
    }, [inputRef]);
    const onKeyPressInput = (e) => {
        if(!start){
            setStart(true);
            const now = Date.now();
            dispatch({ type: 'SET_START', start: now });
            console.log('set start~~');
        }
        if (e.code === 'Enter' || e.code === 'Space') {
            const length=e.target.value.length;
            e.preventDefault();
            setTyped((prev) => prev + length * 3);
            // setTyped(5);
            if (e.target.value !== letters[index + 2]) {
                console.log('틀림!'+ (e.target.value.length));
                setWrong((prev) => prev + length * 3);
            }
            //stop or go
            if (index === letters.length - 5) {
                console.log('finish!');
                const now = Date.now();
                console.log(now);
                dispatch({ type: 'FIN', typed: typed, wrong: wrong, end: now });
                history.push('/Typing/End');
            }
            else {
                setIndex((prev) => prev + 1);
                inputRef.current.value = '';
            }
        }

    }
    const statusInfo = () => {
        console.log('memeo - w:'+wrong+'t:'+typed);
        const progress = Math.floor(100 * (index) / (letters.length - 4));
        const wrongPercent = Math.floor(100 * (wrong) / (typed + 1));
        const accurancyPercent = Math.floor(100 * (typed - wrong) / (typed));
        return { progress: progress, wrongPercent: wrongPercent, accurancyPercent: accurancyPercent };
    }

    useEffect(() => {
        inputRef.current.focus();
        console.log('w:'+wrong+'t:'+typed);
    });

    return (
        <Div onClick={onclickDiv} style={{ textAlign: 'center' }}>
            <StatusBar info={statusInfo()} />
            <ShowWords letters={letters.slice(index)} />
            <Input ref={inputRef} onKeyPress={onKeyPressInput} />
        </Div>
    );
}

export default Word;