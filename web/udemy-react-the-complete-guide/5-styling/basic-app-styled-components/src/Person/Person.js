import React from 'react';
import styled from 'styled-components';

// styled.div is a function, and we can call it with `` instead of () - it's vanilla JS
// It's not inline style, styled-component put it in the head of the file.
const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = props => {
    return (
        <StyleDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyleDiv>
    );
};

export default person;
