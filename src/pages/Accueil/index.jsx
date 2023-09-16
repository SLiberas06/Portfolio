import styled from 'styled-components'
import { keyframes } from 'styled-components'
// import Loader from "../../components/Loader"
import PhotoLight from '../../assets/sabrina.png'
import PhotoDark from '../../assets/sl.png'
import { useTheme } from '../../utils/Hooks'
import { Color } from '../../utils/Atoms'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import Button from '../../components/Button'

const CascadeTitle = keyframes`
 0% { transform: translateY(-30px); opacity:0%}
 100% { transform: translateY(0px); opacity:100%}; 
`
const CascadeSubtitle = keyframes`
0% { transform: translateY(-30px); opacity:25%};
100% { transform: translateY(0px); opacity:100%}; 
`

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
  animation-name: ${CascadeTitle};
  animation-duration: 4s;
  @media (min-width: 992px) {
    font-size: 40px;
  }
`
const HomeSubtitle = styled.h2`
  text-align: center;
  margin-top: 0;
  animation-name: ${CascadeSubtitle};
  animation-duration: 3s;
  width: ${({ $theme }) => ($theme === 'light' ? `70vw` : `60vw`)};
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
  @media (min-width: 992px) {
    font-size: 30px;
    width: auto;
  }
`
const React = styled(FaReact)`
  font-size: 22px;
  border-radius: 50px;
  padding: 1px;
  background-color: ${Color.backgroundDark};
  color: #00d8ff;
`
const NodeJs = styled(FaNodeJs)`
  font-size: 22px;
  border-radius: 50px;
  padding: 1px;
  background-color: ${Color.backgroundDark};
  color: #509941;
`
const HomeTexte = styled.p`
  font-size: 22px;
  width: 100%;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
  @media (min-width: 992px) {
    font-size: ${({ theme }) => (theme === 'light' ? `22px` : `20px`)};
    width: 90%;
    text-align: center;
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
  background-color: transparent;
  text-decoration: ${({ theme }) =>
    theme === 'light' ? `underline overline ${Color.primaryLight}` : 'none'};
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
          Etant une réelle passionnée par le<Mark theme={theme}>developpement web & mobile</Mark>, 
          j'ai eu la chance de participer, durant une année entière, au developpement d'un très gros projet d'application mobile 
          <Mark theme={theme}>IOS & Android </Mark>
          au sein de la compagnie <Mark theme={theme}>MyHotelMatch</Mark> dont la sortie sur les stores 
          est prévue très prochainement...
          <br /> Entourée & accompagnée par de réels pointures au quotidien,
          cette expérience m'a permise d'enrichir mes compétences ainsi 
          que mes connaissances en <Mark theme={theme}>développement d'application IOS & Android </Mark>
          notamment en <Mark theme={theme}>React Native et Typescript</Mark> coté Front-end 
          mais aussi au developpement d'une API sécurisée en <Mark theme={theme}>Python flaskr</Mark> coté Back-end.
          <br />
          En parallèle du developpement de cette application, j'ai passé une formation  <Mark theme={theme}>SCRUM Master</Mark>, 
          obtenu ma certification & 
          eu l'occasion d'appliquer mes nouvelles compétences en <Mark theme={theme}>méthodes Agiles</Mark> pour la réalisation de ce projet.
            <br />
          Je suis<Mark theme={theme}> spécialisée</Mark> en ReactJS & React Native <React /> côté
          front-end mais aussi en Node
          <NodeJs /> & Python flaskr
          côté back-end. 
        </HomeTexte>
        <Button />
      </TextWrapper>
    </HomeWrapper>
  )
}

export default Accueil
