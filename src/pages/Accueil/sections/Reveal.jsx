import styled from 'styled-components'
import { useReveal } from './Usereveal'

const RevealBox = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'none' : 'translateY(18px)')};
  transition:
    opacity 0.7s cubic-bezier(0.2, 0.7, 0.3, 1),
    transform 0.7s cubic-bezier(0.2, 0.7, 0.3, 1);

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

function Reveal({ children, as }) {
  const [ref, visible] = useReveal()
  return (
    <RevealBox ref={ref} $visible={visible} as={as}>
      {children}
    </RevealBox>
  )
}

export default Reveal