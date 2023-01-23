import { createGlobalStyle } from 'styled-components'
import { useTheme } from './Hooks'
import { Fonts, Color } from '../utils/Atoms'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family:${(props) =>
        props.isDarkMode ? `${Fonts.primaryDark}` : `${Fonts.primaryLight}`};
    }
    body {
        background-color: ${(props) =>
          props.isDarkMode ? `${Color.backgroundDark}` : 'white'};
        margin: 0;
    }
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
