import styled from 'styled-components'
import { Color } from '../../../utils/Atoms'
import { Wrap, SecNum } from './Shared'
import Reveal from './Reveal'

/**
 * Contrairement aux autres sections, celle-ci reste volontairement
 * sombre quel que soit le thème choisi — c'est la respiration finale
 * de la page, pensée comme un contraste, pas une variante de thème.
 */
const ContactSection = styled.section`
  background: ${Color.backgroundDark};
  color: ${Color.backgroundLight};
  padding: clamp(64px, 11vh, 130px) 0;
`

const Title = styled.h2`
  font-family: 'Archivo', system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(38px, 7vw, 90px);
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 18px 0 0;
  text-transform: uppercase;

  span {
    font-weight: 300;
    color: color-mix(in srgb, ${Color.backgroundLight} 45%, transparent);
  }
`

const Lede = styled.p`
  font-family: 'Newsreader', Georgia, serif;
  max-width: 46ch;
  font-weight: 300;
  color: color-mix(in srgb, ${Color.backgroundLight} 72%, transparent);
  font-size: 18px;
  margin: 26px 0 0;
`

const List = styled.div`
  margin-top: clamp(34px, 6vh, 56px);
  border-top: 1px solid color-mix(in srgb, ${Color.backgroundLight} 18%, transparent);
`

const rowStyles = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid color-mix(in srgb, ${Color.backgroundLight} 18%, transparent);
`

const Row = styled.a`
  ${rowStyles}
  text-decoration: none;
  color: inherit;
  transition: 0.2s;

  &:hover {
    padding-left: 12px;
    color: #fff;
  }

  &:hover span:last-child {
    color: ${Color.primaryLight};
  }
`

const StaticRow = styled.div`
  ${rowStyles}
`

const K = styled.span`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, ${Color.backgroundLight} 50%, transparent);
`

const V = styled.span`
  font-family: 'Newsreader', Georgia, serif;
  font-size: 17px;
  font-weight: 300;
  text-align: right;
  word-break: break-word;
`

function Contact() {
  return (
    <ContactSection id="contact">
      <Wrap>
        <SecNum>05</SecNum>
        <Reveal>
          <Title>
            Un projet
            <br />
            <span>à débloquer ?</span>
          </Title>
        </Reveal>
        <Lede>
          Intégration d’API qui traîne, produit mobile à sortir, couche IA à
          brancher sur vos données métier. Dites-moi ce qui coince — je vous
          réponds sous 24 h avec un avis honnête, même si ce n’est pas pour moi.
        </Lede>

        <List>
          <Row href="mailto:sabrina.liberas@gmail.com">
            <K>Email</K>
            <V>sabrina.liberas@gmail.com</V>
          </Row>
          <Row href="tel:+33644005864">
            <K>Téléphone</K>
            <V>06 44 00 58 64</V>
          </Row>
          <Row
            href="https://linkedin.com/in/sabrina-liberas-836083198"
            target="_blank"
            rel="noopener noreferrer"
          >
            <K>LinkedIn</K>
            <V>sabrina-liberas</V>
          </Row>
          <Row href="/CV_Sabrina_LIBERAS_2026.pdf" download>
            <K>CV</K>
            <V>Télécharger le PDF</V>
          </Row>
          <StaticRow>
            <K>Localisation</K>
            <V>Alpes-Maritimes — remote France &amp; Europe</V>
          </StaticRow>
        </List>
      </Wrap>
    </ContactSection>
  )
}

export default Contact