import {
  DiSass,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiW3C,
  DiGit,
  DiAngularSimple,
  DiGoogleAnalytics,
} from 'react-icons/di'
import { SiExpress, SiLighthouse } from 'react-icons/si'
import styled from 'styled-components'
import LMJ from '../../images/La_maison_jungle.png'

const Sass = styled(DiSass)`
  font-size: 45px;
  color: #f06292;
  #F7DF1E
`
const Js = styled(DiJavascript1)`
  font-size: 40px;
  color: black;
  background-color: #f7df1e;
  padding: 5px 0 0 5px;
`
const Html = styled(DiHtml5)`
  font-size: 45px;
  color: #e44d26;
`
const Css = styled(DiCss3)`
  color: #264de4;
  font-size: 45px;
`
const Analytics = styled(DiGoogleAnalytics)`
  color: #fb3227;
  font-size: 45px;
`
const Mongo = styled(DiMongodb)`
  font-size: 45px;
  color: #599636;
`
const Lighthouse = styled(SiLighthouse)`
  font-size: 35px;
  color: #f5613e;
  background-color: white;
  border-radius: 50%;
  padding: 3px;
`
const React = styled(DiReact)`
  font-size: 45px;
  color: #00d8ff;
  background-color: black;
  border-radius: 50%;
`
const IconWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const W3c = styled(DiW3C)`
  font-size: 40px;
  background-color: #075f9f;
  border-radius: 50%;
  color: white;
`
const Node = styled(DiNodejs)`
  color: #83cd29;
  font-size: 40px;
  padding: 2.5px;
  background-color: #404137;
  border-radius: 50%;
`
const Express = styled(SiExpress)`
  font-size: 35px;
  color: black;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
`
const Angular = styled(DiAngularSimple)`
  font-size: 35px;
  color: #dd0330;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
`
export const Language = {
  Booki: (
    <IconWrapper>
      <Html />
      <Css />
      <W3c />
    </IconWrapper>
  ),
  Omf: (
    <IconWrapper>
      <Html />
      <Sass />
      <W3c />
    </IconWrapper>
  ),
  Lapan: (
    <IconWrapper>
      {' '}
      <Html />
      <Css />
      <Analytics />
      <Lighthouse />
      <W3c />
    </IconWrapper>
  ),
  Kanap: (
    <IconWrapper>
      <Js />
    </IconWrapper>
  ),
  Hot: (
    <IconWrapper>
      <Js />
      <Angular />
      <Node />
      <Mongo />

      <Express />
    </IconWrapper>
  ),
  Kasa: (
    <IconWrapper>
      <React />{' '}
    </IconWrapper>
  ),
  Jmr: (
    <IconWrapper>
      <Html />
      <Sass />
      <Js />
      <W3c />
    </IconWrapper>
  ),
  Shiny: (
    <IconWrapper>
      <React />
      <Node />
      <Express />
    </IconWrapper>
  ),
}

export const Project = [
  {
    id: '001',
    title: 'Booki',
    cover: 'https://zupimages.net/up/23/04/104r.png',
    description: "Site d'agence de reservation d'activités et d'hébergements",
    language: Language.Booki,
    version: 'Desktop - Tablette - Mobile',
    lien: 'https://sliberas06.github.io/Projet-2-Booki/',
  },
  {
    id: '002',
    title: 'Ohmyfood',
    cover: 'https://zupimages.net/up/23/04/m6lv.png',
    description: 'Site de reservation de menus de restaurant en ligne',
    language: Language.Omf,
    version: 'Desktop - Tablette - Mobile',
    lien: 'https://sliberas06.github.io/Projet-3-Ohmyfood/',
  },
  {
    id: '003',
    title: 'La Panthère',
    cover: 'https://zupimages.net/up/23/04/tu6g.png',
    description: 'Agence Web Design à Lyon',
    language: Language.Lapan,
    version: 'Desktop - Tablette - Mobile',
    lien: 'https://sliberas06.github.io/Projet-4-La-panthere/',
  },
  // {
  //   id: '004',
  //   title: 'Kanap',
  //   cover: 'https://zupimages.net/up/23/04/64v7.png',
  //   description: 'Site e-commerce de vente de canapés',
  //   language: Language.Kanap,
  //   version: 'Desktop - Tablette - Mobile',
  //   lien: 'https://projet-5-kanap-two.vercel.app/index.html',
  // },
  // {
  //   id: '005',
  //   title: 'Hot Takes',
  //   cover: 'https://zupimages.net/up/23/04/68ek.png',
  //   description: "Application d'avis gastronomique",
  //   language: Language.Hot,
  //   version: 'Desktop - Tablette - Mobile',
  //   lien: 'https://projet-6-piiquante-one.vercel.app/login',
  // },
  {
    id: '006',
    title: 'Kasa',
    cover: 'https://zupimages.net/up/23/04/421a.png',
    description: 'Application de location immobilière',
    language: Language.Kasa,
    version: 'Desktop - Tablette - Mobile',
    lien: 'https://projet-7-kasa.vercel.app/',
  },
  {
    id: '007',
    title: 'JMR Expertise',
    cover: 'https://zupimages.net/up/23/04/lsnc.png',
    description: "Site vitrine pour une société d'expertise immobilière",
    language: Language.Jmr,
    version: 'Desktop - Tablette - Mobile',
    lien: 'http://jmr-expertise.fr/',
  },
  {
    id: '008',
    title: 'Shiny-agency',
    cover: 'https://zupimages.net/up/23/04/t0r8.png',
    description: 'Agence de Freelances',
    language: Language.Shiny,
    version: 'Desktop - Tablette - Mobile',
    lien: 'https://shiny-agency-theta.vercel.app/',
  },
  {
    id: '009',
    title: 'La Maison Jungle',
    cover: LMJ,
    description: 'E-commerce de plantes',
    language: Language.Shiny,
    version: 'Desktop',
    lien: 'https://la-maison-jungle-rho.vercel.app/',
  },
]
