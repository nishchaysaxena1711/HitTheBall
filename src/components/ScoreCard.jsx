import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
	flex-direction: row-reverse;
    display: flex;
    padding: 5px 20px 5px;
	
	span {
		margin-right: 5px;
	}
`;

const ScoreCard = props => {
    return (
        <Board>
            <div>{props.score}</div>
            <span>Score</span>
        </Board>
    )
}

export default ScoreCard;