import styled from 'styled-components'
import { useTheme } from '../../utils/Hooks'
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { Color } from '../../utils/Atoms'

const FooterStyled = styled.footer`
  width: 100%;
  height: 20vh;
  padding: 5vh 0 5vh 0;
  margin-top: 0;
  background-color: ${({ theme }) =>
    theme === 'light' ? Color.backgroundLight : Color.backgroundDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-top: ${({ theme }) =>
    theme === 'light' ? 'none' : '2px solid white'};
`
const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 1000s;
  margin-top: 0;
`

const Sun = styled(BsFillSunFill)`
  width: 100px;
  font-size: 50px;
  color: ${Color.primaryLight};
  :hover {
    font-size: 55px;
    transition: 200ms;
  }
  @media (min-width: 1000px) {
    font-size: 60px;
    :hover {
      font-size: 70px;
    }
  }
`
const Moon = styled(BsFillMoonFill)`
  width: 100px;
  font-size: 40px;
  color: ${Color.backgroundLight};
  :hover {
    font-size: 45px;
    transition: 200ms;
  }
  @media (min-width: 1000px) {
    font-size: 50px;
    :hover {
      font-size: 60px;
    }
  }
`
const ContactWrapper = styled.div`
  // background-color: blue;
  display: flex;
  width: 80%;
  flex-direction: row;
  font-size: 50px;
  justify-content: space-between;
  color: ${({ theme }) =>
    theme === 'light' ? Color.backgroundDark : Color.primaryLightText};
  @media (min-width: 1000px) {
    font-size: 70px;
    justify-content: space-around;
  }
`

function Footer() {
  const { toggleTheme, theme } = useTheme()
  return (
    <FooterStyled theme={theme}>
      <NightModeButton onClick={() => toggleTheme()}>
        {theme === 'light' ? <Sun /> : <Moon />}
      </NightModeButton>
      <ContactWrapper theme={theme}>
        <BsLinkedin />
        <BsGithub />
        <MdEmail />
      </ContactWrapper>
    </FooterStyled>
  )
}
export default Footer
