import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Div } from '../Matcher';
import { TypingContext } from '../Typing';
import StatusBar from './component/StatusBar';

const Answer = styled.span`
font-size:25px;
display:block;
padding:5px 0;
`;
const Input = styled.input`
font-size:25px;
outline:none;
border:none;
padding:0 0 15px;
margin:0;
width:100%;
`;
const Phrases = styled.div`
text-align:left;
padding:50px 30px;
`;

const checkScore = (answer, entered) => {
    let score = 0;
    for (let i = 0; i < entered.length; i++) {
        if (entered[i] === answer[i]) score += 1;
    }
    return score;
}


const LongPhrase = () => {

    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    const thirdInputRef = useRef(null);
    const fourthInputRef = useRef(null);
    const refs = [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef];
    const [line, setLine] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [typed, setTyped] = useState(0);
    const [start, setStart] = useState(false);

    const { letters, dispatch } = useContext(TypingContext);

    const history = useHistory();

    const statusInfo = () => {
        console.log('ststus');
        const progress = Math.floor(100*(typed/letters.length));
        const wrongPercent = Math.floor(100 * (wrong) / typed);
        const accurancyPercent =Math.floor(100*(typed-wrong)/(typed));

        return { progress: progress, wrongPercent: wrongPercent, accurancyPercent: accurancyPercent };
    }

    const onChangeInput = (e) => {
        console.log('changed!', e.target.value.length);
        if (!start) {
            setStart(true);
            const now = Date.now();
            dispatch({ type: 'SET_START', start: now });
            console.log('set start~~');
        }

        setTyped(e.target.value.length);
        setWrong(e.target.value.length - checkScore(letters.slice(0 + 56 * line, 56 + 56 * line), e.target.value));

        if (e.target.value.length >= 56) {
            if (line === 3) {
                console.log('fin');
                const now = Date.now();
                console.log(now);
                dispatch({ type: 'FIN', typed: typed, wrong: wrong, end: now });
                history.push('/Typing/End');
            }
            else setLine((prev) => prev + 1);
        }
    }

    useEffect(() => {
        refs[line].current.focus();
    })

    return (
        <Div style={{ textAlign: 'center' }}>
            <StatusBar info={statusInfo()} />
            <Phrases>
                <Answer>{letters.slice(0, 56)}</Answer>
                <Input ref={firstInputRef} onChange={onChangeInput} />
                <Answer>{letters.slice(56, 112)}</Answer>
                <Input ref={secondInputRef} onChange={onChangeInput} />
                <Answer>{letters.slice(112, 168)}</Answer>
                <Input ref={thirdInputRef} onChange={onChangeInput} />
                <Answer>{letters.slice(168, 224)}</Answer>
                <Input ref={fourthInputRef} onChange={onChangeInput} />
            </Phrases>
        </Div>
    );
}

export default LongPhrase;