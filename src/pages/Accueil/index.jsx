import Hero from './sections/Hero'
import Expertise from './sections/Expertise'
import Parcours from './sections/Parcours'
import Projets from './sections/Projets'
import Stack from './sections/Stack'
import Contact from './sections/Contact'

/**
 * Nouvelle page d'accueil du portfolio.
 *
 * Remplace l'ancien Accueil.js : garde useTheme, Color (Atoms),
 * PhotoLight/PhotoDark et Button existants, mais restructure en
 * sections dédiées (voir ./sections) pour rester lisible.
 *
 * À faire côté projet :
 *  1. Ajouter dans public/index.html (dans <head>) :
 *     <link rel="preconnect" href="https://fonts.googleapis.com">
 *     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 *     <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=JetBrains+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,200..500&display=swap" rel="stylesheet">
 *  2. Déposer le PDF du CV dans /public sous le nom CV_Sabrina_LIBERAS_2026.pdf
 *     (le lien de téléchargement dans Contact.js pointe vers /CV_Sabrina_LIBERAS_2026.pdf)
 */
function Accueil() {
  return (
    <>
      <Hero />
      <Expertise />
      <Parcours />
      <Projets />
      <Stack />
      <Contact />
    </>
  )
}

export default Accueil