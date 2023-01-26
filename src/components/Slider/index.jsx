import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../utils/Hooks'
import { Color } from '../../utils/Atoms'
import styled, { keyframes } from 'styled-components'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'

const SlideAnimation = keyframes`
0% {transformeX(0px);  opacity:0%;}
50%{transformeX(0px); opacity:50%}
100%{transformeX(0px); opacity:100%}`

const SliderWrapper = styled.div`
  margin: 5vh 0 3vh 0;
  width: 95vw;
  height: 40vh;
  background-image: ${(props) => props.image.main};
  background-position: center;
  background-size: cover;
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? `0 0 20px  ${Color.backgroundDark}`
      : `0 0 20px ${Color.backgroundLight}`};
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 700ms ease-out;
  animation-name: ${SlideAnimation};
  animation-duration: infinite;
  @media (min-width: 992px) {
    width: 700px;
    height: 500px;
  }
`
const CurrentStyled = styled.div`
  width: 100%;
  margin-bottom: 3vh;
  text-align: center;
  color: ${({ theme }) =>
    theme === 'light' ? Color.backgroundDark : Color.backgroundLight};
`

const Left = styled(MdArrowLeft)`
  font-size: 60px;
  color: ${Color.backgroundDark};
  cursor: pointer;
  @media (min-width: 992px) {
    font-size: 80px;
  }
`
const Right = styled(MdArrowRight)`
  font-size: 60px;
  color: ${Color.backgroundDark};
  cursor: pointer;
  @media (min-width: 992px) {
    font-size: 80px;
  }
`
function Slider({ cover }) {
  const { theme } = useTheme()
  const timer = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const allCover = cover.length

  const goPrevious = () => {
    const firstCover = currentIndex === 0
    const newIndex = firstCover ? allCover - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goNext = () => {
    const lastCover = currentIndex === allCover - 1
    const newIndex = lastCover ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const oneCover = () =>
    allCover <= 1 ? null : (
      <span>
        {currentIndex + 1} / {allCover}
      </span>
    )

  const image = {
    main: `url(${cover[currentIndex]})`,
  }
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      goNext()
    }, 3000)
  })

  return (
    <div>
      <SliderWrapper image={image} theme={theme}>
        <Left onClick={goPrevious} />
        <Right onClick={goNext} />
      </SliderWrapper>
      <CurrentStyled theme={theme}>{oneCover()}</CurrentStyled>
    </div>
  )
}
export default Slider
