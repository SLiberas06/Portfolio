import styled, { keyframes } from 'styled-components'
import Card from '../../components/Card'
import DataProject from '../../datas/projects'
import { Color } from '../../utils/Atoms'
import { useTheme } from '../../utils/Hooks'
import { useAsyncValue, useParams } from 'react-router-dom'
// import Pingouin from '../../components/Penguin'
import { MdCreateNewFolder } from 'react-icons/md'

const ShakeAnim = keyframes`
0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
  `

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
const IconProject = styled(MdCreateNewFolder)`
  font-size: 30px;
  color: ${Color.primaryLight};
  margin-left: 1vw;
  animation-name: ${ShakeAnim};
  animation-duration: 0.3s;
  animation-iteration-count: 100;
`

function Projets() {
  const { theme } = useTheme()
  const { link } = useParams()
  const projet = DataProject.find((project) => project.link === link)
  // if (!projet) {
  //   return (
  //     <Routes>
  //       <Route path="*" element={<Error />} />
  //     </Routes>
  //   )
  // }

  return (
    <StyledDiv>
      <TitleProject theme={theme}>
        Projets <IconProject />
      </TitleProject>
      {DataProject.map((project, index) => (
        <div key={index}>
          <ProjectLink href={project.lien}>
            <Card
              id={project.id}
              title={project.title}
              cover={project.cover}
              description={project.description}
              version={project.version}
              language={project.language}
              collection={project.collection}
            />
          </ProjectLink>
        </div>
      ))}
      {/* <Pingouin /> */}
    </StyledDiv>
  )
}
export default Projets
