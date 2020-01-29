import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
	align-items: center;
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

const Heading = (props) => {
    return (
        <Text>{props.text}</Text>
    )
}

export default Heading;