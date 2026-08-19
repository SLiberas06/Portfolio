import styled from 'styled-components'
import { useTheme } from '../../../utils/Hooks'
import { Color } from '../../../utils/Atoms'
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
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: ${({ $theme }) => ruleColor($theme)};
  border: 1px solid ${({ $theme }) => ruleColor($theme)};

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  background: ${({ $theme }) => paperColor($theme)};
  padding: clamp(26px, 3.2vw, 40px);
  display: flex;
  flex-direction: column;
  grid-column: ${({ $wide }) => ($wide ? 'span 2' : 'span 1')};

  @media (max-width: 860px) {
    grid-column: span 1;
  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 18px;

  h3 {
    font-family: 'Archivo', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(23px, 2.6vw, 32px);
    letter-spacing: -0.02em;
    margin: 0;
    line-height: 1.05;
    color: ${({ $theme }) => inkColor($theme)};
  }
`

const Role = styled.span`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $theme }) => mutedColor($theme)};
  margin-top: 8px;
  display: block;
`

const Badge = styled.span`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 9px;
  white-space: nowrap;
  border: 1px solid
    ${({ $live, $theme }) => ($live ? Color.primaryLight : ruleColor($theme))};
  color: ${({ $live, $theme }) =>
    $live ? Color.primaryLight : mutedColor($theme)};
`

const Text = styled.p`
  margin: 0 0 14px;
  font-family: 'Newsreader', Georgia, serif;
  font-size: 16px;
  font-weight: 300;
  color: ${({ $theme }) => mutedColor($theme)};
  max-width: 62ch;
`

const AiBox = styled.div`
  border-left: 2px solid ${Color.primaryLight};
  padding: 10px 0 10px 16px;
  margin: 4px 0 16px;
  font-family: 'Newsreader', Georgia, serif;
  font-size: 15.5px;
  font-weight: 300;
  color: ${({ $theme }) => mutedColor($theme)};

  b {
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${Color.primaryLight};
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 18px;
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

const projects = [
  {
    wide: true,
    live: true,
    badge: 'Déploiement hiver 2026',
    title: 'GoodWorker',
    role: 'Fondatrice & Full Stack Engineer · 2024 → aujourd’hui',
    text: 'Place de marché mobile qui relie les particuliers aux artisans du bâtiment. Conçue, architecturée et développée intégralement seule : vision produit, design, front, back, infra. Double interface pro / particulier, demandes de prestation, cycle de vie complet (en attente → acceptée → en cours → terminée), agenda, devis et facturation automatisés — anticipant l’obligation française de facturation électronique de septembre 2026.',
    ai: 'Un particulier décrit son chantier en langage naturel ; un LLM le structure en fiche de prestation exploitable (métier, urgence, contraintes, budget estimé) et rédige le devis côté artisan. Le matching pro ↔ besoin s’appuie sur des embeddings plutôt que sur des mots-clés, et l’extraction de documents alimente la facturation.',
    tags: [
      'React Native / Expo',
      'Node.js',
      'MongoDB',
      'Python',
      'Socket.io',
      'Secure Store',
      'LLM · RAG',
      'Embeddings',
    ],
  },
  {
    live: true,
    badge: 'En production',
    title: 'Flix Corporate Platform',
    role: 'Backend Engineer · Makitizy',
    text: 'Plateforme de réservation corporate adossée à l’écosystème Flix : recherche multi-transporteurs, réservation de sièges, ancillaires, webhooks d’exploitation et facturation conforme.',
    ai: 'Assistant de réservation en langage naturel pour les voyageurs d’affaires, RAG sur la documentation fournisseur pour accélérer l’intégration, et classification automatique des erreurs webhook pour prioriser les incidents.',
    tags: ['Node.js', 'TypeScript', 'Angular', 'API v1 → v2', 'LLM · Agents'],
  },
  {
    badge: 'Non lancé',
    title: 'Lanbilans',
    role: 'Conception & développement · Guadeloupe',
    text: 'Application de mise en relation à la demande entre patients et chauffeurs ambulanciers en Guadeloupe — un « Uber du transport sanitaire » pensé pour un territoire où l’offre est dispersée. Interface bilingue français / créole guadeloupéen, avec géolocalisation et attribution de course en temps réel.',
    tags: ['React Native', 'Node.js', 'Géolocalisation', 'i18n FR / Créole', 'Temps réel'],
  },
  {
    badge: 'Non lancé',
    title: 'Poppersland',
    role: 'Freelance · Développement e-commerce',
    text: 'Boutique en ligne pour un commerçant spécialisé : catalogue, tunnel d’achat, paiement et back-office marchand sous WordPress / WooCommerce. Mission menée en autonomie complète, de la spécification au SEO technique.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'SEO technique', 'Paiement'],
  },
]

function Projets() {
  const { theme } = useTheme()

  return (
    <Section id="projets" $theme={theme}>
      <Wrap>
        <Reveal>
          <SecHead $theme={theme}>
            <SecNum>03</SecNum>
            <h2>Projets</h2>
            <p>
              Produits que j’ai portés — livrés, en cours, ou arrêtés. Les trois
              apprennent quelque chose.
            </p>
          </SecHead>
        </Reveal>

        <Reveal>
          <Grid $theme={theme}>
            {projects.map((p) => (
              <Card key={p.title} $theme={theme} $wide={p.wide}>
                <Top $theme={theme}>
                  <div>
                    <h3>{p.title}</h3>
                    <Role $theme={theme}>{p.role}</Role>
                  </div>
                  <Badge $theme={theme} $live={p.live}>
                    {p.badge}
                  </Badge>
                </Top>
                <Text $theme={theme}>{p.text}</Text>
                {p.ai && (
                  <AiBox $theme={theme}>
                    <b>Couche IA</b>
                    {p.ai}
                  </AiBox>
                )}
                <Tags>
                  {p.tags.map((t) => (
                    <Tag key={t} $theme={theme}>
                      {t}
                    </Tag>
                  ))}
                </Tags>
              </Card>
            ))}
          </Grid>
        </Reveal>
      </Wrap>
    </Section>
  )
}

export default Projets