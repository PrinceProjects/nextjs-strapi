import styled from '@emotion/styled'

function Header() {
	return (
		<HeaderStyled>
			<div className="logo">
				<img src="/vercel.svg" alt="Sites logo" />
				<span className="logo-text">Next Dev</span>
			</div>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	background: ${props => props.theme.colors.primary};
`

export default Header;