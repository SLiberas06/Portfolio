import styled from 'styled-components'
import { useTheme } from '../../utils/Hooks'
import { Link } from 'react-router-dom'
import LogoDark from '../../assets/logoDark.png'
import LogoLight from '../../assets/logoLight.png'

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.isDarkMode ? `url(${LogoDark})` : `url(${LogoLight})`}no-repeat;
  background-position: center;
  width: 100%;
  height: 30vh;
  align-items: center;
  nav {
    padding: 0;
    background-color: white;
    display: flex;
    margin-top: 20vh;
  }
`
const TitleStyled = styled.h1`
  font-family: 'code', sans-serif;
  color: ${(props) => (props.isDarkMode ? 'white' : ' black')};
`
const NavLink = styled(Link)`
  display: flex;
  margin: 5px 15vw;
  text-decoration: none;
`
function Header() {
  const { theme } = useTheme()
  return (
    <HeaderStyled isDarkMode={theme === 'dark'}>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/projets">Projets</NavLink>
      </nav>
    </HeaderStyled>
  )
}
export default Header
