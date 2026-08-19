import styled from 'styled-components'
import { Color } from '../../../utils/Atoms'

/**
 * Réutilise les tokens déjà présents dans Atoms.js — aucune couleur
 * n'est ajoutée : primaryLight sert d'accent (rouge signal), les
 * mêmes couples ink/paper que sur l'ancienne page d'accueil sont repris.
 */
export const inkColor = (theme) =>
  theme === 'light' ? Color.primaryLightText : Color.backgroundLight

export const paperColor = (theme) =>
  theme === 'light' ? Color.backgroundLight : Color.backgroundDark

export const ruleColor = (theme) =>
  `color-mix(in srgb, ${inkColor(theme)} 18%, transparent)`

export const mutedColor = (theme) =>
  `color-mix(in srgb, ${inkColor(theme)} 55%, transparent)`

export const Wrap = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding-inline: clamp(20px, 5vw, 72px);
`

export const Section = styled.section`
  padding: clamp(64px, 10vh, 120px) 0;
  border-top: 1px solid ${({ $theme }) => ruleColor($theme)};
  background: ${({ $theme }) => paperColor($theme)};
`

export const SecNum = styled.span`
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: ${Color.primaryLight};
`

export const SecHead = styled.div`
  display: flex;
  gap: 16px;
  align-items: baseline;
  margin-bottom: clamp(32px, 5vh, 56px);
  flex-wrap: wrap;

  h2 {
    font-family: 'Archivo', system-ui, sans-serif;
    font-weight: 700;
    font-size: clamp(28px, 4.2vw, 52px);
    letter-spacing: -0.025em;
    line-height: 1;
    margin: 0;
    text-transform: uppercase;
    color: ${({ $theme }) => inkColor($theme)};
  }

  p {
    margin: 0;
    max-width: 42ch;
    font-family: 'Newsreader', Georgia, serif;
    font-size: 16px;
    font-weight: 300;
    color: ${({ $theme }) => mutedColor($theme)};
  }
`