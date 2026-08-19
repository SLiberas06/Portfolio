import styled from 'styled-components'
import { useTheme } from '../../../utils/Hooks'
import { Color } from '../../../utils/Atoms'
import { Wrap, Section, SecNum, SecHead, inkColor, mutedColor, ruleColor } from './Shared'
import Reveal from './Reveal'

const Rail = styled.div`
  position: relative;
  padding-left: clamp(28px, 5vw, 84px);

  &::before {
    content: '';
    position: absolute;
    left: clamp(6px, 1.4vw, 20px);
    top: 6px;
    bottom: 6px;
    width: 1px;
    background: ${({ $theme }) => ruleColor($theme)};
  }
`

const Stop = styled.article`
  position: relative;
  padding: 0 0 clamp(38px, 6vh, 64px);

  &:last-child {
    padding-bottom: 0;
  }
`

const Dot = styled.span`
  position: absolute;
  left: calc(clamp(6px, 1.4vw, 20px) - clamp(28px, 5vw, 84px) - 4px);
  top: 9px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${Color.primaryLight};
  border: 1.5px solid ${Color.primaryLight};
`

const StopHead = styled.div`
  display: flex;
  gap: clamp(12px, 2.4vw, 32px);
  align-items: baseline;
  flex-wrap: wrap;
`

const Year = styled.span`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: ${({ $theme }) => mutedColor($theme)};
  white-space: nowrap;
  padding-top: 2px;
`

const StopTitle = styled.h3`
  font-family: 'Archivo', system-ui, sans-serif;
  font-weight: 700;
  font-size: clamp(21px, 2.6vw, 30px);
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.1;
  color: ${({ $theme }) => inkColor($theme)};
`

const Org = styled.span`
  display: block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${Color.primaryLight};
  margin-top: 8px;
  font-weight: 500;
`

const StopBody = styled.div`
  margin-top: 16px;
  max-width: 70ch;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 9px;
    font-family: 'Newsreader', Georgia, serif;
    font-size: 16px;
    font-weight: 300;
    color: ${({ $theme }) => mutedColor($theme)};
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 7px;
    height: 1px;
    background: ${Color.primaryLight};
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
`

const Tag = styled.span`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid ${({ $theme }) => ruleColor($theme)};
  padding: 4px 9px;
  color: ${({ $theme }) => mutedColor($theme)};
`

const experiences = [
  {
    year: '2025 — auj.',
    title: 'Backend Engineer — Plateforme Flix Group & Corporate',
    org: 'Makitizy',
    bullets: [
      'Intégration complète de la plateforme Flix Group & Corporate, de la V1 jusqu’à la migration V2 — authentification, modèles de données et parcours de réservation adaptés sans interruption de production.',
      'Logique métier non supportée nativement par l’API : modifications de groupe, gestion dynamique des passagers, réservations multi-transporteurs.',
      'Réservation de sièges, ancillaires, webhooks de réservation et d’exploitation, conformité de facturation FlixTrain GmbH / Flix SE.',
      'Collaboration directe avec l’équipe technique Flix pour aligner les comportements d’API et débloquer les points d’intégration.',
    ],
    tags: ['Node.js', 'TypeScript', 'REST', 'Angular', 'MongoDB', 'Webhooks', 'i18n ×8'],
  },
  {
    year: '2024 — 2025',
    title: 'Backend Engineer — SaaS Travel Tech',
    org: 'Travel Planet',
    bullets: [
      'Conception et développement des API REST d’intégration transporteurs : SNCF, SilverRail, Benerail, SBB, FlixBus.',
      'Pipelines temps réel de disponibilité, tarification et itinéraires ; normalisation multi-fournisseurs pour un modèle unique côté produit.',
      'Monitoring et analyse via AWS CloudWatch, gestion d’incidents en production, renforcement de la résilience.',
    ],
    tags: ['Node.js', 'REST', 'AWS CloudWatch', 'ElasticSearch', 'Docker', 'GitLab CI'],
  },
  {
    year: '2024',
    title: 'Full Stack Engineer — Retail tech',
    org: 'Knap',
    bullets: [
      'Interfaces embarquées pour chariots connectés en magasin.',
      'Intégration et consommation d’API, analyse de logs et debug en environnement réel, stabilisation applicative.',
    ],
    tags: ['React', 'Node.js', 'Debug terrain'],
  },
  {
    year: '2021 — 2023',
    title: 'Full Stack Web & Mobile Engineer',
    org: 'MyHotelMatch',
    bullets: [
      'Développement de l’application mobile iOS & Android en React Native & TypeScript, sur un cycle produit d’un an.',
      'Conception de l’algorithme de matching voyageurs / hôtels (logique de recommandation).',
      'API sécurisée en Python, back-office web React, mise en place des pipelines CI/CD GitLab.',
      'Certification Scrum Master obtenue en parallèle et appliquée aux rituels de l’équipe.',
    ],
    tags: ['React Native', 'TypeScript', 'Python', 'React', 'CI/CD', 'Scrum'],
  },
  {
    year: '2020 — 2021',
    title: 'Frontend Developer & SEO',
    org: 'See U Better — Monaco',
    bullets: [
      'Sites vitrines, e-commerce et plateformes de services.',
      'SEO technique : structure, performance, indexation ; audits SEMrush et Screaming Frog ; gains de positionnement mesurés.',
    ],
    tags: ['JavaScript', 'WordPress', 'SEO technique'],
  },
]

function Parcours() {
  const { theme } = useTheme()

  return (
    <Section id="parcours" $theme={theme}>
      <Wrap>
        <Reveal>
          <SecHead $theme={theme}>
            <SecNum>02</SecNum>
            <h2>Parcours</h2>
            <p>Du SEO au backend distribué. Chaque arrêt a ajouté une couche.</p>
          </SecHead>
        </Reveal>

        <Rail $theme={theme}>
          {experiences.map((exp) => (
            <Reveal as={Stop} key={exp.title}>
              <Dot />
              <StopHead>
                <Year $theme={theme}>{exp.year}</Year>
                <div>
                  <StopTitle $theme={theme}>{exp.title}</StopTitle>
                  <Org>{exp.org}</Org>
                </div>
              </StopHead>
              <StopBody $theme={theme}>
                <ul>
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Tags>
                  {exp.tags.map((t) => (
                    <Tag key={t} $theme={theme}>
                      {t}
                    </Tag>
                  ))}
                </Tags>
              </StopBody>
            </Reveal>
          ))}
        </Rail>
      </Wrap>
    </Section>
  )
}

export default Parcours