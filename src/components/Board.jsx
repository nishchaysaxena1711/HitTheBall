import React, { Component } from 'react';
import styled from 'styled-components';
import ScoreCard from "../components/ScoreCard.jsx";

const Container = styled.div`
    align-items: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    margin: 15px;

    .active {
        background-color: blue;
    }

    .default {
        background-color: #bbb;
    }
`;

const Circle = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
`;

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCircle: Math.floor((Math.random() * (this.props.gridSize * this.props.gridSize)) + 1),
            score: 0
        }
    }

    getCircleGrid = () => {
        const { gridSize, gameState } = this.props;
        const { activeCircle, score } = this.state;
        const array = Array.from(Array(parseInt(gridSize)).keys());
        let i = 0;
        return (<div>
            {
                array.map((x) => {
                    return (
                        <div className="row" key={x}>
                            {
                                array.map((y) => {
                                    return <Circle
                                            key={y}
                                            id={++i}
                                            className={
                                                (gameState !== "" && gameState !== "stop")
                                                    ? ( activeCircle === i ? "active" : "default")
                                                    : "default"
                                            }
                                            onClick={(e) => {
                                                if((gameState !== "" && gameState !== "stop")) {
                                                    if(parseInt(e.target.id) === activeCircle) {
                                                        this.setState({
                                                            activeCircle: Math.floor((Math.random() * (gridSize * gridSize)) + 1),
                                                            score: score + 1
                                                        })
                                                    } else {
                                                        this.setState({
                                                            score: score - 1
                                                        })
                                                    }
                                                }
                                            }}
                                        />
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )}

    render() {
        return (
            <div>
                <ScoreCard score={this.state.score} />
                <Container>
                    {
                        this.getCircleGrid()
                    }
                </Container>
            </div>
         );
    }
}

export default Board;