import styled from 'styled-components'
// import Loader from "../../components/Loader"
import PhotoLight from '../../assets/sabrina.png'
import PhotoDark from '../../assets/sl.png'

import { useTheme } from '../../utils/Hooks'

const HomeWrapper = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${(props) =>
      props.isDarkMode ? `url(${PhotoDark})` : `url(${PhotoLight})`}
    no-repeat;
  background-size: 100%;
  background-position: center;
`

function Home() {
  const { theme } = useTheme()
  return (
    <HomeWrapper isDarkMode={theme === 'dark'}>
      <h1>Sabrina LIBERAS</h1>
      <h2>Developpeuse web Full Stack</h2>
    </HomeWrapper>
  )
}

export default Home
