import React, { Component } from 'react';
import ScoreCard from "../components/ScoreCard.jsx";

class PlayBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScoreCard />
        )
    }
}

export default PlayBoard;