import React, { Component } from 'react'
import styled from 'styled-components'
import Board from '../components/Board.jsx'
import Popup from '../components/Popup.jsx'
import { connect } from 'react-redux'

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
`

class PlayBoard extends Component {
	constructor (props) {
		super(props)
		this.state = {
			gameState: '',
			showPopup: false
		}
	}

	togglePopup = () => {
		this.setState({
			showPopup: !this.state.showPopup
		})
	}

	render () {
		return (
			<div>
				<Board
					gridSize={this.props.complexity}
					gameState={this.state.gameState}
				/>
				<ActionButton>
					<button
						id="play"
						disabled={this.state.showPopup}
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
						disabled={this.state.showPopup}
						onClick={this.togglePopup}
					>
						Stop
					</button>
					{this.state.showPopup ?
						<Popup
							score={this.props.score}
							closePopup={this.togglePopup}
						/>
						: null
					}
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

export default connect(mapStateToProps)(PlayBoard)
