import Slider from '../../components/Slider'
import Datas from '../../datas/certification.json'
import { useTheme } from '../../utils/Hooks'
import styled, { keyframes } from 'styled-components'
import { Color } from '../../utils/Atoms'
import { SlBadge } from 'react-icons/sl'

const ShakeAnim = keyframes`
0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
  `
const TitleCertif = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
`
const Badge = styled(SlBadge)`
  font-size: 30px;
  color: ${Color.primaryLight};
  margin-left: 1vw;
  animation-name: ${ShakeAnim};
  animation-duration: 0.3s;
  animation-iteration-count: 100;
`
function Certifications() {
  const { theme } = useTheme()
  return (
    <div>
      <TitleCertif theme={theme}>
        Certifications <Badge />
      </TitleCertif>
      {Datas.map((certificate, index) => (
        <div key={index}>
          <Slider cover={certificate.cover} />
        </div>
      ))}
    </div>
  )
}
export default Certifications
