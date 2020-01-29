import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from '../components/Dropdown.jsx';
import Heading from "../components/Heading.jsx";
import Playboard from "./PlayBoard.jsx";
import { connect } from 'react-redux';

const Container = styled.div`
	height: 400px;
	width: 400px;
	margin: 25px 130px 0;
	border: 1px solid #000;
	border-radius: 3px;
	align-items: center;
`;

class Homepage extends Component {
	render() {
		const { complexity } = this.props;
		return (
			<Container>
				<Heading text={complexity === null 
					? "Please select the complexity of game!" 
					: "Test your skill how many circle you can hit?"} 
				/>
				{complexity === null ? <Dropdown/> : <Playboard grid={complexity} />}
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		complexity: state.complexity
	};
};

export default connect(mapStateToProps)(Homepage);