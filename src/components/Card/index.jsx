import styled from 'styled-components'
import PropType from 'prop-types'
import { Color } from '../../utils/Atoms'
import { useTheme } from '../../utils/Hooks'

const CardWrapper = styled.div`
  width: 335px;
  height: 380px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? Color.backgroundLight : Color.primaryLightText};
  box-shadow: 0 0 18px 2px rgba(128, 128, 128, 0.3);
`
const PictureCard = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: top;
  border-bottom: 2px solid grey;
`
const TitleCard = styled.h1`
  font-size: 30px;
  letter-spacing: 2px;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
`
function Card({ title, cover, id }) {
  const { theme } = useTheme()
  return (
    <CardWrapper key={id} theme={theme}>
      <PictureCard src={cover} alt={title} />
      <TitleCard theme={theme}>{title}</TitleCard>
    </CardWrapper>
  )
}
Card.propTypes = {
  title: PropType.string,
  cover: PropType.string,
}

Card.defaultProps = {
  title: 'Titre du projet',
}
export default Card
