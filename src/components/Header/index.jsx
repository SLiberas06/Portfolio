import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { useTheme } from '../../utils/Hooks'
import { Link } from 'react-router-dom'
import { Color } from '../../utils/Atoms'

const AnimHeader = keyframes`
 0% { transform: translateX(0px); opacity:0%; letter-spacing: 5px}
 25% { transform: translateX(0px); opacity:25%; letter-spacing: 10px}
 50% { transform: translateX(0px); opacity:50% letter-spacing: 15px}
 100% { transform: translateX(0px); opacity:100% letter-spacing: 15px}; 
`

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === 'light' ? `${Color.backgroundLight}` : `${Color.backgroundDark}`};
  border-bottom: ${({ theme }) =>
    theme === 'light' ? 'none' : '2px solid white'};
  width: 100%;
  height: 35vh;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    height: 30vh;
  }
  h1 {
    font-size: 30px;
    letter-spacing: 15px;
    animation-name: ${AnimHeader};
    animation-duration: 3s;
    margin-top: 5vh;
    color: ${({ theme }) =>
      theme === 'light'
        ? `${Color.primaryLightText}`
        : `${Color.backgroundLight}`};
    @media (min-width: 992px) {
      margin-top: 0;
      font-size: 40px;
      margin-left: 5vw;
    }
  }
  nav {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const NavLink = styled(Link)`
  display: flex;
  margin: 2vh 5vw;
  text-decoration: none;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === 'light' ? 'white' : Color.primaryLightText};
  padding: ${({ theme }) => (theme === 'light' ? '5px 25px' : '5px 25px')};
  font-size: 20px;
  color: ${({ theme }) =>
    theme === 'light' ? `${Color.primaryLightText}` : `black`};
  font-weight: bold;
  :hover {
    color: ${({ theme }) =>
      theme === 'light'
        ? `${Color.backgroundLight}`
        : `${Color.backgroundLight}`};
    background-color: ${({ theme }) =>
      theme === 'light' ? `${Color.primaryLight}` : `${Color.primaryLight}`};
    transition: 1000ms;
    box-shadow: ${({ theme }) =>
      theme === 'light'
        ? `0 0 15px  ${Color.backgroundDark}`
        : `0 0 15px  ${Color.backgroundLight}`};
  }
  @media (min-width: 1000px) {
    margin-top: 0;
    font-size: 25px;
  }
`
function Header() {
  const { theme } = useTheme()
  return (
    <HeaderStyled theme={theme}>
      <h1>PORTFOLIO</h1>
      <nav>
        <NavLink to="/" theme={theme}>
          Accueil
        </NavLink>
        <NavLink to="/projets" theme={theme}>
          Projets
        </NavLink>
        <NavLink to="/certifications" theme={theme}>
          Certifications
        </NavLink>
      </nav>
    </HeaderStyled>
  )
}
export default Header
