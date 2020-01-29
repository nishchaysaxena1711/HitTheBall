import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreCard from "../components/ScoreCard.jsx";
import Board from "../components/Board.jsx";
import { connect } from 'react-redux';

const ActionButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        padding: 3px 10px;
        border: 1px solid #000000;
        border-radius: 3px;
        margin: 0 10px;
    }
`;

class PlayBoard extends Component {
    render() {
        return (
            <div>
                <ScoreCard score={this.props.score} />
                <Board gridSize={this.props.complexity}/>
                <ActionButton>
                    <button id="play" onClick={(e) => console.log(e.target.id)}>Play</button>
                    <button id="stop" onClick={(e) => console.log(e.target.id)}>Stop</button>
                </ActionButton>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        complexity: state.complexity,
        score: state.score
    }
}

export default connect(mapStateToProps)(PlayBoard);