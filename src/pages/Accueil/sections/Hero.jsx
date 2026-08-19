import styled from 'styled-components'
import { useTheme } from '../../../utils/Hooks'
import { Color } from '../../../utils/Atoms'
import PhotoLight from '../../../assets/sabrina.png'
import PhotoDark from '../../../assets/sl.png'
import Button from '../../../components/Button'
import { Wrap, inkColor, mutedColor, ruleColor, paperColor } from './Shared'

const HeroWrapper = styled.header`
  padding: clamp(56px, 10vh, 120px) 0 clamp(40px, 7vh, 72px);
  background: ${({ $theme }) => paperColor($theme)};
`

const Eyebrow = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: clamp(24px, 4vh, 40px);
`

const Bar = styled.span`
  height: 1px;
  flex: 1;
  background: ${({ $theme }) => ruleColor($theme)};
`

const Mono = styled.span`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ $theme }) => mutedColor($theme)};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(28px, 5vw, 72px);
  align-items: end;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`

const Title = styled.h1`
  font-family: 'Archivo', system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(46px, 9.2vw, 124px);
  line-height: 0.92;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  margin: 0;
  color: ${({ $theme }) => inkColor($theme)};

  span {
    font-weight: 400;
    color: ${Color.primaryLight};
  }
`

const Lede = styled.p`
  font-family: 'Newsreader', Georgia, serif;
  font-weight: 300;
  font-size: clamp(19px, 1.9vw, 26px);
  line-height: 1.45;
  max-width: 34ch;
  margin: clamp(26px, 4vh, 40px) 0 0;
  color: ${({ $theme }) => inkColor($theme)};

  mark {
    background: transparent;
    color: inherit;
    box-shadow: inset 0 -0.4em 0
      color-mix(in srgb, ${Color.primaryLight} 22%, transparent);
  }
`

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: clamp(30px, 5vh, 44px);
`

const GhostLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 22px;
  border: 1px solid ${({ $theme }) => inkColor($theme)};
  color: ${({ $theme }) => inkColor($theme)};
  transition: 0.22s;

  &:hover {
    background: ${Color.primaryLight};
    border-color: ${Color.primaryLight};
    color: #fff;
  }
`

const Fiche = styled.div`
  border-top: 1.5px solid ${({ $theme }) => inkColor($theme)};
  padding-top: 16px;
`

const FicheRow = styled.div`
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 16px;
  padding: 11px 0;
  border-bottom: 1px solid ${({ $theme }) => ruleColor($theme)};
  align-items: baseline;

  span {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ $theme }) => mutedColor($theme)};
  }

  div {
    font-family: 'Newsreader', Georgia, serif;
    font-size: 15px;
    color: ${({ $theme }) => inkColor($theme)};
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${({ $theme }) => ruleColor($theme)};
  }

  a:hover {
    color: ${Color.primaryLight};
    border-bottom-color: ${Color.primaryLight};
  }
`

const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${Color.primaryLight};
  flex: none;
`

const Photo = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: url(${({ $src }) => $src}) center / cover no-repeat;
  border: 1px solid ${({ $theme }) => ruleColor($theme)};
`

function Hero() {
  const { theme } = useTheme()

  return (
    <HeroWrapper $theme={theme}>
      <Wrap>
        <Eyebrow>
          <Mono $theme={theme}>Software Engineer</Mono>
          <Bar $theme={theme} />
          <Mono $theme={theme}>Full-Stack &amp; LLM</Mono>
          <Bar $theme={theme} />
          <Mono $theme={theme}>AI Product Engineering</Mono>
        </Eyebrow>

        <Grid>
          <div>
            <Title $theme={theme}>
              J&apos;intègre
              <br />
              <span>l&apos;inintégrable</span>
            </Title>
            <Lede $theme={theme}>
              Six ans à faire parler entre eux des systèmes qui n&apos;ont pas
              été conçus pour ça&nbsp;: API ferroviaires, plateformes de
              réservation, produits mobiles — et aujourd&apos;hui{' '}
              <mark>des couches LLM qui rendent tout ça utilisable</mark>.
            </Lede>
            <CtaRow>
              <Button />
              <GhostLink $theme={theme} href="#projets">
                Voir les projets
              </GhostLink>
            </CtaRow>
          </div>

          <Fiche $theme={theme}>
            <FicheRow $theme={theme}>
              <span>Poste</span>
              <div>Software Engineer — Full-Stack &amp; LLM</div>
            </FicheRow>
            <FicheRow $theme={theme}>
              <span>Actuel</span>
              <div>Backend Engineer, plateforme Flix Group &amp; Corporate</div>
            </FicheRow>
            <FicheRow $theme={theme}>
              <span>Base</span>
              <div>Alpes-Maritimes (06) — remote France &amp; Europe</div>
            </FicheRow>
            <FicheRow $theme={theme}>
              <span>Dispo</span>
              <div>
                <Status>
                  <Dot />
                  Missions freelance ouvertes
                </Status>
              </div>
            </FicheRow>
            <FicheRow $theme={theme}>
              <span>Contact</span>
              <div>
                <a href="mailto:sabrina.liberas@gmail.com">
                  sabrina.liberas@gmail.com
                </a>
              </div>
            </FicheRow>
            <FicheRow $theme={theme}>
              <span>Photo</span>
              <div>
                <Photo
                  $theme={theme}
                  $src={theme === 'light' ? PhotoLight : PhotoDark}
                />
              </div>
            </FicheRow>
          </Fiche>
        </Grid>
      </Wrap>
    </HeroWrapper>
  )
}

export default Hero