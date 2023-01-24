import styled from 'styled-components'
import cv from '../../datas/cv.pdf'
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
  a {
    text-decoration: none;
    width: 100%;
    font-size: ${({ theme }) => (theme === 'light' ? '35px' : '30px')};
    color: ${({ theme }) =>
      theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
  }
`
function Button() {
  const { theme } = useTheme()
  return (
    <ButtonWrapper theme={theme}>
      <a href={cv}>Curriculum Vitae</a>
    </ButtonWrapper>
  )
}
export default Button
