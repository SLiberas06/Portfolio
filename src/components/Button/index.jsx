import styled from 'styled-components'
import CV from '../../datas/Cv_Sabrina_Liberas.pdf'
import { Color } from '../../utils/Atoms'
import { useTheme } from '../../utils/Hooks'
const ButtonWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) =>
    theme === 'light' ? Color.backgroundLight : Color.primaryLightText};
  margin: 2vh 0 2vh 0;
  padding: 10px 0 10px 0;
  text-align: center;
  border-radius: 15px;
  @media (min-width: 992px) {
    width: 50%;
  }
  :hover {
    box-shadow: ${({ theme }) =>
      theme === 'light'
        ? `0 0 15px 1px ${Color.backgroundDark}`
        : `0 0 15px 1px ${Color.backgroundLight}`};
    transition: 1000ms;
  }
  a {
    text-decoration: none;
    width: 100%;
    font-size: ${({ theme }) => (theme === 'light' ? '30px' : '25px')};
    color: ${({ theme }) =>
      theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
  }
`

function Button() {
  const { theme } = useTheme()
  return (
    <ButtonWrapper theme={theme}>
      <a href={CV}>Télécharger mon CV</a>
    </ButtonWrapper>
  )
}
export default Button
