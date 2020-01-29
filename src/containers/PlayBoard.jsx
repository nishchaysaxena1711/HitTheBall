import React, { Component } from 'react';
import styled from 'styled-components';
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
    constructor() {
        super();
        this.state={
            gameState: ""
        }
    }


    render() {
        return (
            <div>
                <Board 
                    gridSize={this.props.complexity}
                    gameState={this.state.gameState}
                />
                <ActionButton>
                    <button 
                        id="play" 
                        onClick={(e) => {
                            this.setState({
                                gameState: e.target.id
                            })
                        }}
                    >
                        Play
                    </button>
                    <button 
                        id="stop" 
                        onClick={(e) => {
                            this.setState({
                                gameState: e.target.id
                            })
                        }}
                    >
                        Stop
                    </button>
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