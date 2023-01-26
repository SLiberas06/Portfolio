import styled from 'styled-components'
import Card from '../../components/Card'
import Datas from '../../datas/projet.json'
import { Color } from '../../utils/Atoms'
import { useTheme } from '../../utils/Hooks'
// import Pingouin from '../../components/Penguin'

const TitleProject = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 80%;
  }
`
const ProjectLink = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  cursor: pointer;
`

function Projets() {
  const { theme } = useTheme()
  return (
    <StyledDiv>
      <TitleProject theme={theme}>Projets</TitleProject>
      {Datas.map((project, index) => (
        <div key={index}>
          <ProjectLink href={project.lien}>
            <Card id={project.id} title={project.title} cover={project.cover} />
          </ProjectLink>
        </div>
      ))}
      {/* <Pingouin /> */}
    </StyledDiv>
  )
}
export default Projets
