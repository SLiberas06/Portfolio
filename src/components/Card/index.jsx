import styled, { keyframes } from 'styled-components'
import PropType from 'prop-types'
import { Color } from '../../utils/Atoms'
import { useTheme } from '../../utils/Hooks'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

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
  transition: 2s;
  :hover {
    box-shadow: ${({ theme }) =>
      theme === 'light'
        ? `0 0 15px 1px ${Color.backgroundDark}`
        : `0 0 15px 1px ${Color.backgroundLight}`};
    transition: 1000ms;
  }
  @media (min-width: 992px) {
    width: 435px;
    height: 480px;
  }
`
const PictureCard = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  object-position: top;
  border-bottom: 2px solid grey;
  // :hover {
  //   height: 380px;
  //   transition: 1s;
  // }
  @media (min-width: 992px) {
    height: 250px;
  }
`
const TitleCard = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
  letter-spacing: 2px;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLight : Color.backgroundLight};
  @media (min-width: 992px) {
    // margin-top: 4vh;
  }
`
const WrapperInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
`
const SubtitleCard = styled.h3`
  font-size: ${({ theme }) => (theme === 'light' ? '20px' : '17px')};
  margin-top: 0;
  margin-bottom: 0;
  width: ${({ theme }) => (theme === 'light' ? '270px' : '290px')};
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
`
const VersionProject = styled.h4`
  font-size: 15px;
  margin-top: 0;
  width: 270px;
  color: ${({ theme }) =>
    theme === 'light' ? Color.primaryLightText : Color.backgroundLight};
  @media (min-width: 992px) {
    // margin-top: 4vh;
  }
`
const AnimationCollection = keyframes`
10%, 90% {
  transform: translate3d(-1px, 0, 0);
  box-shadow: 2px 1px 20px ${Color.primaryLight};
 
}

20%, 80% {
  transform: translate3d(2px, 0, 0);
}

30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}
}

40%, 60% {
  transform: translate3d(4px, 0, 0);
  color:${Color.backgroundLight};
}`

const CollectionProject = styled.div`
  color: ${({ theme }) =>
    theme === 'light' ? Color.backgroundDark : Color.backgroundLight};
  background-color: ${Color.primaryLight};
  width: 200px;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
  animation: ${AnimationCollection} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97)
    both;
  animation-iteration-count: 50;
  transform: translate3d(0, 0, 0);
  animation-delay: 0.5s;
  animation-duration: 2000ms;
`

function Card({
  title,
  cover,
  description,
  version,
  id,
  language,
  collection,
}) {
  const { theme } = useTheme()
  return (
    <Fade bottom>
      <CardWrapper theme={theme} key={id}>
        <PictureCard src={cover} alt={title} />
        <WrapperInfo>
          <TitleCard theme={theme}>{title}</TitleCard>
          <SubtitleCard theme={theme}>{description}</SubtitleCard>
          <h3>{language}</h3>
          <VersionProject theme={theme}>{version}</VersionProject>
          <CollectionProject theme={theme}>{collection}</CollectionProject>
        </WrapperInfo>
      </CardWrapper>
    </Fade>
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
