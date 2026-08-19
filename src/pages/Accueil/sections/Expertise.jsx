import styled from 'styled-components'
import { useTheme } from '../../../utils/Hooks'
import {
  Wrap,
  Section,
  SecNum,
  SecHead,
  inkColor,
  mutedColor,
  ruleColor,
  paperColor,
} from './Shared'
import Reveal from './Reveal'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${({ $theme }) => ruleColor($theme)};
  border: 1px solid ${({ $theme }) => ruleColor($theme)};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  background: ${({ $theme }) => paperColor($theme)};
  padding: clamp(24px, 3vw, 36px);

  h3 {
    font-family: 'Archivo', system-ui, sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin: 14px 0 10px;
    letter-spacing: -0.01em;
    line-height: 1.15;
    color: ${({ $theme }) => inkColor($theme)};
  }

  p {
    margin: 0;
    font-family: 'Newsreader', Georgia, serif;
    font-size: 15.5px;
    font-weight: 300;
    color: ${({ $theme }) => mutedColor($theme)};
  }
`

const Label = styled.span`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ $theme }) => mutedColor($theme)};
`

const List = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style: none;

  li {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ $theme }) => mutedColor($theme)};
    padding: 5px 0;
    border-top: 1px solid ${({ $theme }) => ruleColor($theme)};
  }
`

const capabilities = [
  {
    label: 'Intégration',
    title: 'Backends d’API multi-fournisseurs',
    text: 'Cinq transporteurs, cinq modèles de données, cinq façons de mentir sur la disponibilité — et un seul produit cohérent en sortie. C’est mon cœur de métier.',
    items: [
      'Normalisation & transformation de données',
      'Migrations d’API en production (V1 → V2)',
      'Webhooks, idempotence, résilience',
      'Conformité facturation & fiscalité',
    ],
  },
  {
    label: 'Produit',
    title: 'Produits mobiles de bout en bout',
    text: 'De la vision produit au déploiement store, seule ou en équipe. J’ai conçu, architecturé et développé GoodWorker intégralement — front, back, infra, UX.',
    items: [
      'React Native (Expo) · iOS & Android',
      'Auth, temps réel, paiements, facturation',
      'Architecture pensée pour l’échelle',
      'Scrum Master certifié iCSM',
    ],
  },
  {
    label: 'IA',
    title: 'Couches LLM en production',
    text: 'Pas des démos. Des agents et des pipelines branchés sur de vraies données métier, avec les garde-fous, le coût et la latence qui vont avec.',
    items: [
      'RAG sur documentation fournisseur',
      'Agents outillés (function calling)',
      'Extraction & structuration de documents',
      'LangChain · OpenAI · Anthropic',
    ],
  },
]

function Expertise() {
  const { theme } = useTheme()

  return (
    <Section id="expertise" $theme={theme}>
      <Wrap>
        <Reveal>
          <SecHead $theme={theme}>
            <SecNum>01</SecNum>
            <h2>Ce que je construis</h2>
            <p>Trois terrains où j’apporte de la valeur dès la première semaine.</p>
          </SecHead>
        </Reveal>

        <Reveal>
          <Grid $theme={theme}>
            {capabilities.map((cap) => (
              <Card key={cap.title} $theme={theme}>
                <Label $theme={theme}>{cap.label}</Label>
                <h3>{cap.title}</h3>
                <p>{cap.text}</p>
                <List $theme={theme}>
                  {cap.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </List>
              </Card>
            ))}
          </Grid>
        </Reveal>
      </Wrap>
    </Section>
  )
}

export default Expertise