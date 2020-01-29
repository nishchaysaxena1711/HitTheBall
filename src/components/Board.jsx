import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	align-items: center;
	padding: 10px;
	display: flex;
	flex-direction: column;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    margin: 15px;
`;

const Board = props => {
    return (
       <Container>Hello{props.gridSize}</Container>
    )
}

export default Board;