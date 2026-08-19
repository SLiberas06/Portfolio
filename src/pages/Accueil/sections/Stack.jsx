import styled from 'styled-components'
import { useTheme } from '../../../utils/Hooks'
import { Color } from '../../../utils/Atoms'
import { Wrap, Section, SecNum, SecHead, mutedColor, ruleColor } from './Shared'
import Reveal from './Reveal'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(20px, 3vw, 40px);

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const Column = styled.div`
  h4 {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${Color.primaryLight};
    margin: 0 0 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ $theme }) => ruleColor($theme)};
    font-weight: 500;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-family: 'Newsreader', Georgia, serif;
    font-size: 15px;
    padding: 5px 0;
    color: ${({ $theme }) => mutedColor($theme)};
    font-weight: 300;
  }
`

const columns = [
  { title: 'Langages', items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'PHP'] },
  {
    title: 'Frameworks',
    items: ['Node.js · NestJS', 'React · Next.js', 'React Native (Expo)', 'Angular'],
  },
  {
    title: 'Architecture',
    items: [
      'API REST · GraphQL',
      'Microservices',
      'Intégration tierce',
      'Normalisation de données',
    ],
  },
  {
    title: 'Data & Cloud',
    items: [
      'MongoDB · PostgreSQL',
      'MySQL · ElasticSearch',
      'AWS · CloudWatch',
      'Docker · GitLab CI',
    ],
  },
  {
    title: 'IA & LLM',
    items: ['LangChain', 'RAG · Embeddings', 'Agents & function calling', 'OpenAI · Anthropic'],
  },
  {
    title: 'Méthode',
    items: ['Scrum (iCSM certifiée)', 'Jira · Git · Postman', 'Revue de code', 'Gestion d’incidents'],
  },
  {
    title: 'Formation',
    items: [
      'RNCP niveau 6 — Développeur JS React, OpenClassrooms (2022)',
      'iCSM Scrum Master (2023)',
    ],
  },
  { title: 'En cours', items: ['LangChain, RAG, agents IA', 'Architecture LLM produit'] },
]

function Stack() {
  const { theme } = useTheme()

  return (
    <Section id="stack" $theme={theme}>
      <Wrap>
        <Reveal>
          <SecHead $theme={theme}>
            <SecNum>04</SecNum>
            <h2>Stack</h2>
            <p>Ce que j’utilise au quotidien, pas ce que j’ai croisé une fois.</p>
          </SecHead>
        </Reveal>

        <Reveal>
          <Grid>
            {columns.map((col) => (
              <Column key={col.title} $theme={theme}>
                <h4>{col.title}</h4>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Column>
            ))}
          </Grid>
        </Reveal>
      </Wrap>
    </Section>
  )
}

export default Stack