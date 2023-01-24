import styled from 'styled-components'
// import Loader from "../../components/Loader"
import PhotoLight from '../../assets/sabrina.png'
import PhotoDark from '../../assets/sl.png'
import { useTheme } from '../../utils/Hooks'
import { Color } from '../../utils/Atoms'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import Button from '../../components/Button'

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 992px) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    justify-content: center;
    height: 120vh;
    margin-top: 0vh;
  }
`
const AccueilWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${({ theme }) =>
      theme === 'light' ? `url(${PhotoLight})` : `url(${PhotoDark})`}
    no-repeat;
  background-position: top;
  @media (min-width: 992px) {
    background-position: center;
    width: 60%;
    align-items: start;
    justify-content: start;
    margin-left: 8vw;
    height: 120vh;
  }
`
const HomeTitle = styled.h1`
  letter-spacing: 2px;
  color: ${Color.primaryLight};
  margin-bottom: 0;
  @media (min-width: 992px) {
    font-size: 40px;
  }
`
const HomeSubtitle = styled.h2`
  text-align: center;
  margin-top: 0;
  width: ${({ $theme }) => ($theme === 'light' ? `70vw` : `60vw`)};
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
  @media (min-width: 992px) {
    font-size: 30px;
    width: auto;
  }
`
const React = styled(FaReact)`
  font-size: 40px;
  border-radius: 50px;
  padding: 2px;
  background-color: ${Color.backgroundDark};
  color: #00d8ff;
`
const NodeJs = styled(FaNodeJs)`
  font-size: 40px;
  border-radius: 50px;
  padding: 2px;
  background-color: ${Color.backgroundDark};
  color: #509941;
`
const HomeTexte = styled.p`
  font-size: 25px;
  width: 100%;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
  @media (min-width: 992px) {
    font-size: ${({ theme }) => (theme === 'light' ? `25px` : `20px`)};
    width: 90%;
    text-align: justify;
  }
`
const TextTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  letter-spacing: 2px;
  margin: 1vh;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
  background-color: ${({ theme }) =>
    theme === 'light' ? Color.backgroundLight : Color.primaryLightText};
  padding: 3vh 2vw 3vh 2vw;
  border-radius: 15px;
  box-shadow: ${({ theme }) =>
    theme === 'light' ? `none` : `0 0 10px 1px ${Color.backgroundLight}`};
  @media (min-width: 992px) {
    font-size: 30px;
    letter-spacing: 5px;
    padding: 2vh 0 2vh 0;
    background: transparent;
    box-shadow: none;
  }
`
const TextWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0vh 4vw 2vh 5vw;
  @media (min-width: 992px) {
    width: 70%;
    // height: 100vh;
    margin-op: 0;
  }
`
const Mark = styled.mark`
  background-color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLight : 'transparent'};
  border-radius: 0 10px 0 10px;
  font-weight: bold;
  padding: 2px;
  color: ${({ theme }) => (theme === 'light' ? 'black' : Color.primaryLight)};
`
function Accueil() {
  const { theme } = useTheme()
  return (
    <HomeWrapper>
      <AccueilWrapper theme={theme}>
        <HomeTitle>Sabrina LIBERAS</HomeTitle>
        <HomeSubtitle theme={theme}>Developpeuse web Full Stack</HomeSubtitle>
      </AccueilWrapper>
      <TextWrapper>
        <TextTitle theme={theme}> Bienvenue sur mon site </TextTitle>
        <HomeTexte theme={theme}>
          Pour vous parler un peu de <Mark theme={theme}>mes projets</Mark>, je
          suis actuellement en train de réunir plusieurs dev' "toutes catégories
          confondues" afin de réaliser quelques projets en{' '}
          <Mark theme={theme}>"multi-dev"</Mark>..
          <br /> le but étant d'enrichir mes compétences ainsi que mon
          expérience de développeuse et de vous partager tous ces projets, ici !{' '}
          <br />
          Alors si vous êtes dev' et interessé(e) pour discuter "projets", je
          serai ravie de vous compter parmis mes contacts ... Je souhaite me
          <Mark theme={theme}> spécialiser</Mark> en React <React /> côté
          front-end mais aussi en Node
          <NodeJs />
          côté back-end, et oui je ne peux pas m'empêcher de tout aimé concevoir
          dans ce merveilleux métier, mon objectif à moyen terme est de
          developper des <Mark theme={theme}>projets "MERN"</Mark>.<br /> Pour
          le mot de la fin , je déborde de créativité, je suis une vraie
          passionnée et je ne manque de rigueur et d'organisation dans mon
          travail ... Je ne vous en dis pas plus, je vous invite à me contacter
          pour en discuter.
        </HomeTexte>
        <Button />
      </TextWrapper>
    </HomeWrapper>
  )
}

export default Accueil
