import React from 'react';
import styled, { css } from 'styled-components';
const Span = css`
vertical-align:middle;
display:inline-block;
text-align:center;
padding:0;
margin:0;
`;
const S1 = styled.span`
${Span};
font-size:120px;
width:400px;
`;
const S2 = styled.span`
${Span};
font-size:70px;
width:240px;
`;
const S3 = styled.span`
${Span};
font-size:30px;
width:110px;
`;
const ShowWords = ({ letters }) => {
    return (
        <div style={{ display: 'block', textAlign: 'center', }}>
            <S3>{letters[0]}</S3>
            <S2>{letters[1]}</S2>
            <S1>{letters[2]}</S1>
            <S2>{letters[3]}</S2>
            <S3>{letters[4]}</S3>
        </div>
    );
}

export default ShowWords;