import React from 'react';
import styled, { css } from 'styled-components';
const Span = css`
vertical-align:middle;
display:inline-block;
`;
const S1 = styled.span`
${Span};
font-size:145px;
width:150px;
`;
const S2 = styled.span`
${Span};
font-size:90px;
width:95px;
`;
const S3 = styled.span`
${Span};
font-size:60px;
width:65px;
`;
const S4 = styled.span`
${Span};
font-size:45px;
width:50px;
`;
const S5 = styled.span`
${Span};
font-size:35px;
width:40px;
`;
const ShowLetters = ({ letters }) => {
    return (
        <div style={{ display: 'block', textAlign: 'center', }}>
            <S5>{letters[0]}</S5>
            <S4>{letters[1]}</S4>
            <S3>{letters[2]}</S3>
            <S2>{letters[3]}</S2>
            <S1>{letters[4]}</S1>
            <S2>{letters[5]}</S2>
            <S3>{letters[6]}</S3>
            <S4>{letters[7]}</S4>
            <S5>{letters[8]}</S5>
        </div>
    );
}

export default ShowLetters;