import { createGlobalStyle } from 'styled-components'
import { useTheme } from './Hooks'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    body {
        background-color: ${(props) =>
          props.isDarkMode ? 'rgba(0, 0, 0, 0.915)' : 'white'};
        margin: 0;
    }
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
