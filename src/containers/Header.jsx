import React from 'react'
import styled from 'styled-components'

const Routes = styled.div`
	display: flex;
	
	a {
		margin: 0 15px;
		color: #000;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`

const Head = styled.header`
	align-items: center;
	display: flex;
	flex-direction: column;
`

const Header = () => (
	<Head>
		<h2>Hit the Circle !</h2>
		<Routes>
			{/* <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
			<NavLink to="/help" activeClassName="is-active">Help</NavLink> */}
		</Routes>
	</Head>
)

export default Header
