import styled from 'styled-components'
import Card from '../../components/Card'
import Datas from '../../datas/projet.json'


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
  return (
    <StyledDiv>
      {Datas.map((project, index) => (
        <div key={index}>
          <ProjectLink href={project.lien}>
            <Card id={project.id} title={project.title} cover={project.cover} />
          </ProjectLink>
        </div>
      ))}
    </StyledDiv>
  )
}
export default Projets
