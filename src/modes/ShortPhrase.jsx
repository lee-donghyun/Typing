import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Div } from '../Matcher';
import { TypingContext } from '../Typing';
import ShowShortPhrases from './component/ShowShortPhrases';
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
padding:5px 0 30px;
margin:0;
width:100%;
`;
const Phrases = styled.div`
text-align:left;
padding:50px 30px;
`;

const checkScore = (answer, entered) => {
    let score = 0;
    for(let i=0;i<entered.length;i++){
        if(entered[i]===answer[i])score+=1;
    }
    return score;
}

const ShortPhrase = () => {

    const inputRef=useRef(null);
    const [index, setIndex]=useState(0);
    const [wrong, setWrong] = useState(0);
    const [typed, setTyped] = useState(0);
    const [start,setStart] = useState(false);

    const {letters, dispatch} = useContext(TypingContext);

    const history=useHistory();

    const onClickDiv= () => {
        console.log('getfocus');
        inputRef.current.focus();
    }
    const onKeyPressInput = (e) => {
        if(!start){
            setStart(true);
            const now = Date.now();
            dispatch({ type: 'SET_START', start: now });
            console.log('set start~~');
        }
        if (e.code === 'Enter') {
            console.log('ENTER pressed');

            if(index===letters.length-1){
                console.log('fin');
                const now = Date.now();
                console.log(now);
                dispatch({ type: 'FIN', typed: typed, wrong: wrong, end: now });
                history.push('/Typing/End');
            }
            else{
                setIndex((prev)=>prev+1);
                e.target.value='';
            }
        }
    }
    const onChangeInput = (e) => {
        console.log('changed!', e.target.value);
        // console.log(checkScore(letters[index],e.target.value));

        setTyped(e.target.value.length);
        setWrong(e.target.value.length-checkScore(letters[index],e.target.value));
    }
    const statusInfo = () => {
        console.log('ststus');
        const progress = Math.floor(100*(index/letters.length));
        const wrongPercent = Math.floor(100 * (wrong) / typed);
        const accurancyPercent =Math.floor(100*(typed-wrong)/(typed));

        return { progress: progress, wrongPercent: wrongPercent, accurancyPercent: accurancyPercent };
    }

    useEffect(()=>{
        onClickDiv();
    });

    return (
        <Div onClick={onClickDiv} style={{ textAlign: 'center' }}>
            <StatusBar info={statusInfo()} />
            <Phrases>
                <Answer>{letters[index]}</Answer>
                <Input ref={inputRef} onKeyPress={onKeyPressInput} onChange={onChangeInput}/>
                <ShowShortPhrases letters = {letters.slice(index+1,index+6)} />
            </Phrases>

        </Div>
    );
}

export default ShortPhrase;