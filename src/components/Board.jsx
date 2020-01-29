import React, { Component } from 'react';
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

const Circle = styled.div`
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
`;

class Board extends Component {
    constructor(props) {
        super(props);
    }

    getCircleGrid = () => {
        const { gridSize } = this.props;
        const array = Array.from(Array(parseInt(gridSize)).keys());
        return (<div>
            {
                array.map((x) => {
                    return (
                        <div className="row">
                            {
                                array.map((y) => {
                                    return <Circle key={Math.random} />
                            })}
                        </div>
                    )
                })
            }
        </div>
    )}

    render() {
        return (
            <Container>
                {
                    this.getCircleGrid()
                }
            </Container>
         );
    }
}

export default Board;