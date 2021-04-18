import React from 'react';
import styled, { css } from 'styled-components';

const Answer = styled.span`
display:block;
font-size:20px;
padding:5px 0;
color:grey;
`;


const ShowShortPhrases = ({letters}) => {
    return (
        <>
            {letters.map((v,i)=><Answer>{v}</Answer>)}
        </>
    );


}


export default ShowShortPhrases;