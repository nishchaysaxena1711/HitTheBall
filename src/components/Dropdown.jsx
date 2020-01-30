import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { updateComplexityDetails } from '../actions/actions.js'
import { ComplexityLevel } from '../constants/constant'

const DropdownElement = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    i {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }

    .up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }

    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

	.dropdown-wrapper {
		width: 120px;
		text-align: center;		

		.dropdown-header {
			border: 1px solid #000000;
			padding: 5px;
			border-radius: 3px;
		}

		.dropdown-list {
			border: 1px solid #000000;
			border-radius: 3px;
			margin: 0;
			border-top: none;
			list-style: none;
			text-align: center;
			padding: 5px 0;

			.dropdown-list-item {
				padding: 3px 0;
			}
		}
	}

`

class Dropdown extends Component {
	constructor () {
		super()
		this.state = {
			dropdownOpen: false
		}
	}

	toggleList = () => {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}))
	}

	render () {
		const { dropdownOpen } = this.state
		return (
			<DropdownElement>
				<div className="dropdown-wrapper">
					<div className="dropdown-header" onClick={() => this.toggleList()}>
						<div className="dropdown-header-title">Select level</div>
						{
							dropdownOpen
								? <i className="arrow up"></i>
								: <i className="arrow down"></i>
						}
					</div>
					{
						dropdownOpen &&
						<ul className="dropdown-list">
							{
								ComplexityLevel.map((level) => (
									<li className="dropdown-list-item"
										key={level.key}
										id={level.grid}
										onClick={(e) => {
											this.props.dispatch(updateComplexityDetails(e.target.id))
										}}
									>
										{level.type}
									</li>
								))
							}
						</ul>
					}
				</div>
			</DropdownElement>
		)
	}
}

export default connect()(Dropdown)
