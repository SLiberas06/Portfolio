import styled from 'styled-components'
import { useTheme } from '../../utils/Hooks'

const FooterStyled = styled.footer`
  width: 100%;
  height: 20vh;
  background-color: grey;
`
const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: black;
`
function Footer() {
  const { toggleTheme, theme } = useTheme()
  return (
    <FooterStyled>
      <NightModeButton onClick={() => toggleTheme()}>
        Mode Nuit :{theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
      Footer
    </FooterStyled>
  )
}
export default Footer
