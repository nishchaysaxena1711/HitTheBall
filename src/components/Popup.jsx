import React from 'react'
import styled from 'styled-components'
import { updateComplexityDetails } from '../actions/actions.js'
import { connect } from 'react-redux'

const PopUpContainer = styled.div`
    .popup {  
        position: fixed;  
        width: 100%;  
        height: 100%;  
        top: 0;  
        left: 0;  
        right: 0;  
        bottom: 0;  
        margin: auto;  
        background-color: rgba(0,0,0, 0.5);  
    }  

    .popup_inner {  
        border: 1px solid #000000;
        position: absolute;  
        left: 40%;  
        right: 40%;  
        top: 40%;  
        bottom: 40%;  
        margin: auto;  
        border-radius: 5px;  
        background: white;  
        text-align: center;
        padding: 10px;
    }
`

class Popup extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		const { score } = this.props
		return (
			<PopUpContainer className='popup'>
				<div className='popup_inner'>
					<h3>Your score is = {this.props.score}</h3>
					<button
						onClick={() => {
							this.props.dispatch(updateComplexityDetails(null))
							this.props.closePopup
						}}
					>
						Play Again
					</button>
				</div>
			</PopUpContainer>
		)
	}
}

export default connect()(Popup)
