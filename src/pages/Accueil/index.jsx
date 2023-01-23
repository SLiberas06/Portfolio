import styled from 'styled-components'
// import Loader from "../../components/Loader"
import PhotoLight from '../../assets/sabrina.png'
import PhotoDark from '../../assets/sl.png'
import { useTheme } from '../../utils/Hooks'
import { Color } from '../../utils/Atoms'
import { FaReact, FaNodeJs } from 'react-icons/fa'

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
`
const HomeTitle = styled.h1`
  letter-spacing: 2px;
  color: ${Color.primaryLight};
  margin-bottom: 0;
`
const HomeSubtitle = styled.h2`
  text-align: center;
  margin-top: 0;
  width: ${({ $theme }) => ($theme === 'light' ? `70vw` : `60vw`)};
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
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
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
`
const TextTitle = styled.h2`
  font-size: 35px;
  text-align: center;
  letter-spacing: 2px;
  margin: 2vh 0 2vh 0;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0vh 4vw 2vh 5vw;
  hr {
    margin-top: 0;
    margin-right: 0;
    border: none;
    background-color: ${Color.primaryLightText};
    width: 110%;
    height: 5px;
  }
`
const Mark = styled.mark`
  background-color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLight : Color.primaryLightText};
  border-radius: 0 10px 0 10px;
  font-weight: bold;
  padding: 2px;
`
function Accueil() {
  const { theme } = useTheme()
  return (
    <main>
      <AccueilWrapper theme={theme}>
        <HomeTitle>Sabrina LIBERAS</HomeTitle>
        <HomeSubtitle theme={theme}>Developpeuse web Full Stack</HomeSubtitle>
      </AccueilWrapper>
      <TextWrapper>
        <hr /> <TextTitle theme={theme}> Bienvenue </TextTitle> <hr />
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
      </TextWrapper>
    </main>
  )
}

export default Accueil
