import Slider from '../../components/Slider'
import Datas from '../../datas/certification.json'
import { useTheme } from '../../utils/Hooks'
import styled from 'styled-components'
import { Color } from '../../utils/Atoms'

const TitleCertif = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
`
function Certifications() {
  const { theme } = useTheme()
  return (
    <div>
      <TitleCertif theme={theme}>Certifications</TitleCertif>
      {Datas.map((certificate, index) => (
        <div key={index}>
          <Slider cover={certificate.cover} />
        </div>
      ))}
    </div>
  )
}
export default Certifications
