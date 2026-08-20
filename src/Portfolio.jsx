import { useEffect, useMemo, useRef, useState } from "react";

const EMAIL = "sabrina.liberas@gmail.com";
const PHONE = "06 44 00 58 64";
const LINKEDIN = "https://linkedin.com/in/sabrina-liberas-836083198";

/*  Le formulaire poste ici. FormSubmit envoie le message sur la boîte Gmail
    associée à ce jeton. Le jeton remplace l'adresse en clair : il est prévu
    pour être public, et il évite que l'adresse soit récupérée dans le code source. */
const FORM_ENDPOINT = "https://formsubmit.co/ajax/ca2ec8dff4ce0415c277b12539848eda";

/* ------------------------------------------------------------------
   AUTRES GROS TITRES POSSIBLES — remplace COPY.xx.hero.title
   EN
   1. "I turn ambitious ideas into working products."
   2. "You have the idea. I ship the product."
   3. "I build the thing you keep describing in meetings."
   4. "From idea to something people can actually use."
   5. "I build products that make it to production."
   6. "Founders talk about it. I ship it."
   FR
   1. "Je transforme des idées ambitieuses en produits qui tournent."
   2. "Vous avez l'idée. Je livre le produit."
   3. "Je construis ce que vous décrivez depuis six mois en réunion."
   4. "De l'idée à quelque chose que les gens utilisent vraiment."
   5. "Je fais des produits qui arrivent jusqu'en production."
   6. "Tout le monde en parle. Moi je le livre."
------------------------------------------------------------------ */

const COPY = {
  en: {
    nav: { work: "Work", founders: "Founders & investors", cta: "Start a project" },
    hero: {
      title: "I turn ambitious ideas into working products.",
      role: "Software Engineer · Full-Stack · AI & Product Engineering",
      sub: "From the first idea all the way to production. I design, build and ship digital products: SaaS platforms, mobile apps, complex APIs and AI powered features.",
      primary: "Start a project",
      secondary: "Explore my work",
      avail: "Available for selected projects · France / Remote",
    },
    statement: { a: "You bring the idea.", b: "I build what makes it real." },
    sequence: ["Product", "Architecture", "Code", "AI", "Production"],
    caps: {
      title: "From idea to production",
      label: "Six things I take responsibility for",
      items: [
        { n: "01", t: "Product", d: "Turning an idea into something people can actually use. Scope, flows, trade offs, priorities." },
        { n: "02", t: "Full-Stack", d: "Frontend, backend, APIs, databases. One person across the whole chain, so nothing falls between two people." },
        { n: "03", t: "AI", d: "LLM integration, RAG, tool using agents. The work sits around the model: cost, latency, guardrails, failure cases." },
        { n: "04", t: "Mobile", d: "iOS and Android apps in React Native, from the first screen to the store release." },
        { n: "05", t: "Integrations", d: "Third party APIs, suppliers and legacy systems that were never designed to work together." },
        { n: "06", t: "Production", d: "Cloud, CI/CD, monitoring, incidents. Software that stays up long after launch day." },
      ],
    },
    work: {
      title: "Featured work",
      label: "Six products, six different sets of constraints",
      items: [
        {
          n: "01",
          title: "GoodWorker",
          tagline: "A service network for the trades: secure intermediation between professionals and clients, with the management tools built in",
          meta: "Personal SaaS · Founder & Engineer · 2024 → now",
          intro: "The building trades still run on phone calls, voicemails left unanswered and quotes that never arrive. GoodWorker turns that into a product: homeowners post what they need, professionals answer within 48 hours with a real quote or a booked appointment. Somewhere between LinkedIn, Doctolib and Airbnb. Product vision, architecture, backend, mobile app and UX: my project, end to end.",
          points: [
            "A client posts a request. The professional answers within 24 to 48 hours, either with a quote or with a meeting when the job needs a look first.",
            "Quotes generated as PDF straight from the platform, or imported from the professional's own documents.",
            "For complex requests, the professional opens his calendar and the client books an available slot himself, in real time.",
            "Professional dashboard: requests pending, handled, accepted, refused, jobs finished, plus revenue by week and by month in real time.",
            "A feed where professionals and clients both publish, to advertise a service or a need.",
            "Two way rating, the client rates the professional and the professional rates the client.",
          ],
          stack: ["React Native (Expo)", "Node.js", "Python", "MongoDB", "WebSocket", "PDF generation"],
          note: "Next up: an AI assistant on both sides, and the iOS and Android release in winter 2026",
        },
        {
          n: "02",
          title: "Flix Group & Corporate",
          tagline: "Complex travel infrastructure & booking systems",
          meta: "Makitizy · Backend Engineer · 2025 → now",
          intro: "Full integration of the Flix Group & Corporate platform, from V1 all the way through the V2 migration, with no service interruption for clients in production.",
          points: [
            "Business logic the supplier API never exposed: group modifications, dynamic passenger management, multi carrier bookings. All rebuilt on the platform side.",
            "V1 to V2 migration: authentication, data models and booking flows reworked while production stayed stable.",
            "Seat reservation, ancillaries, webhook handling, fiscal invoice compliance (FlixTrain GmbH / Flix SE).",
            "VAT computed across every EU country and outside the Schengen area, with multi operator invoicing split according to the length of the trip and the rate that applies to each leg.",
          ],
          stack: ["Node.js", "TypeScript", "Angular", "REST", "Webhooks", "Docker", "AWS CloudWatch"],
        },
        {
          n: "03",
          title: "Group travel platform",
          tagline: "White label, for a rail operator selling under its own brand",
          meta: "Makitizy · Backend Engineer · 2025 → now",
          intro: "White label software built for a rail operator so it can sell its own group offers under its own brand. Group travel is where most booking engines stop: European regulation, a different currency and a different VAT rate in every country, and rules that shift the moment a border is crossed. We opened uses of their own API they had not imagined were possible.",
          points: [
            "Group offers sold directly by the operator, from its own API, under its own brand.",
            "Currency and VAT handled country by country, with European regulation layered on top.",
            "Business rules the API never covered, rebuilt on our side so the offer becomes sellable.",
          ],
          stack: ["Node.js", "TypeScript", "Angular", "REST", "Docker", "AWS CloudWatch"],
        },
        {
          n: "04",
          title: "Click N Control",
          tagline: "Travel Planet's booking product, one API for five suppliers",
          meta: "Travel Planet · Backend Engineer · 2024 – 2025",
          intro: "The product I worked on at Travel Planet. Five rail and bus suppliers, five different ways of describing a trip, a price and an availability. One single API on the way out.",
          points: [
            "SNCF, SilverRail, Benerail, SBB and FlixBus normalised behind one data model.",
            "Real time pipelines for availability, pricing and routes.",
            "Backend performance work, AWS CloudWatch monitoring, production incident handling.",
          ],
          stack: ["Node.js", "Angular", "Microservices", "GraphQL", "Docker", "AWS", "GitLab CI"],
        },
        {
          n: "05",
          title: "MyHotelMatch",
          tagline: "Matching · Mobile · Travel · Recommendation",
          meta: "Full Stack Web & Mobile Engineer · 2021 – 2023",
          intro: "A travel matching app carried from the mobile side through to the back office, with the recommendation logic sitting at the centre of the product.",
          points: [
            "iOS and Android app in React Native and TypeScript, from interface design to release.",
            "Design of the matching algorithm between traveller profiles and properties.",
            "Secure API in Python, React web back office, GitLab CI/CD pipeline.",
          ],
          stack: ["React Native", "TypeScript", "Python", "React", "MongoDB", "GitLab CI"],
        },
        {
          n: "06",
          title: "Knap",
          tagline: "Connected hardware, real time data, AI agents",
          meta: "Full Stack Engineer · 2024",
          intro: "Smart retail carts with fraud prevention built in. AI agents, each running its own sub agents, cross read the camera feeds and the movements inside the cart to catch a fraud while it happens, and the interface reacts in the store in real time.",
          chain: ["Cameras & cart sensors", "Real time data", "AI agents & sub agents", "Fraud prevention"],
          points: [
            "AI agents delegating to specialised sub agents: one reads the camera stream, another the movements inside the cart, and their signals are cross checked before an alert is raised.",
            "Embedded interfaces for connected carts, consuming both device and backend APIs.",
            "Live log analysis and debugging on hardware running in actual stores.",
            "Stability work on a system where any failure is visible to a customer standing in an aisle.",
          ],
          stack: ["JavaScript", "Node.js", "Real time APIs", "ElasticSearch", "AI agents", "Computer vision"],
        },
      ],
    },
    tools: {
      label: "Toolbox",
      items: [
        ["Languages", "JavaScript (ES6+), TypeScript, Python"],
        ["Backend", "Node.js, NestJS, REST, GraphQL, microservices"],
        ["Mobile", "React Native, Expo, iOS and Android releases"],
        ["Web", "React, Next.js, Angular"],
        ["Data", "MongoDB, PostgreSQL, MySQL, ElasticSearch"],
        ["Cloud & ops", "AWS CloudWatch, Docker, GitLab CI/CD"],
        ["AI", "LLM integration, tool using agents, RAG, LangChain"],
      ],
    },
    education: {
      label: "Education",
      items: [
        ["LLM, RAG & AI agents", "self taught, certification in progress"],
        ["iCSM Scrum Master certification", "2023"],
        ["JavaScript React Developer", "RNCP Level 6, OpenClassrooms, 2022"],
        ["E-commerce project management", "2020"],
        ["BTS Sales Negotiation & Client Relations", "2015"],
      ],
    },
    fi: {
      label: "For founders & investors",
      title: "Need someone to turn an idea into a product?",
      intro: "I work with founders, startups and teams that need strong technical execution without building an entire engineering team from day one.",
      cells: [
        { n: "01", t: "You are building something", d: "Early product, a first version to ship, or a technical co pilot next to a non technical founder. You bring the idea, I hand back a product in production.", cta: "Have a project in mind? Let's talk", subject: "Project enquiry" },
        { n: "02", t: "You are investing in one", d: "A portfolio company stuck on an integration, a migration, a mobile release, or an AI feature that never made it past the demo. Feel free to put us in touch.", cta: "Make an introduction", subject: "Portfolio company introduction" },
      ],
    },
    contact: {
      title: "The fastest way in is to tell me about your idea.",
      text: "Tell me what you want to build, or just talk it through with me. I will tell you straight whether I am the right person for it.",
      email: "Email",
      linkedin: "LinkedIn",
      phone: "Phone",
      form: {
        label: "Write to me",
        name: "Your name",
        from: "Your email",
        company: "Company (optional)",
        message: "What are you building?",
        send: "Send message",
        sending: "Sending",
        sent: "Got it. I will get back to you within 24 hours.",
        error: "That did not go through. Write to me directly at",
        required: "Name, email and message, please.",
        badEmail: "That email address looks off.",
      },
    },
    footer: "Full-Stack · AI & Product Engineering · France / Remote",
  },

  fr: {
    nav: { work: "Projets", founders: "Fondateurs & investisseurs", cta: "Démarrer un projet" },
    hero: {
      title: "Je transforme des idées ambitieuses en produits qui tournent.",
      role: "Software Engineer · Full-Stack · IA & Product Engineering",
      sub: "De la première idée jusqu'à la mise en production. Je conçois, je développe et je livre des produits : plateformes SaaS, applications mobiles, API complexes et fonctionnalités portées par l'IA.",
      primary: "Démarrer un projet",
      secondary: "Voir mes projets",
      avail: "Disponible pour quelques projets choisis · France / Remote",
    },
    statement: { a: "Vous apportez l'idée.", b: "Je construis ce qui la rend réelle." },
    sequence: ["Produit", "Architecture", "Code", "IA", "Production"],
    caps: {
      title: "De l'idée à la production",
      label: "Six choses dont je prends la responsabilité",
      items: [
        { n: "01", t: "Produit", d: "Transformer une idée en quelque chose d'utilisable. Périmètre, parcours, arbitrages, priorités." },
        { n: "02", t: "Full-Stack", d: "Frontend, backend, API, bases de données. Une seule personne sur toute la chaîne, donc rien ne tombe entre deux intervenants." },
        { n: "03", t: "IA", d: "Intégration de LLM, RAG, agents outillés. Le travail est autour du modèle : coût, latence, garde fous, cas d'échec." },
        { n: "04", t: "Mobile", d: "Applications iOS et Android en React Native, du premier écran jusqu'à la publication sur les stores." },
        { n: "05", t: "Intégrations", d: "API tierces, fournisseurs et systèmes existants qui n'ont jamais été prévus pour fonctionner ensemble." },
        { n: "06", t: "Production", d: "Cloud, CI/CD, monitoring, incidents. Du logiciel qui tient bien après le jour du lancement." },
      ],
    },
    work: {
      title: "Projets clés",
      label: "Six produits, six contraintes différentes",
      items: [
        {
          n: "01",
          title: "GoodWorker",
          tagline: "Un réseau social de service, intermédiation sécurisée entre pro et particulier, avec outils de gestion intégrés",
          meta: "SaaS personnel · Fondatrice & ingénieure · 2024 → aujourd'hui",
          intro: "Le BTP tourne encore au téléphone, aux messages sans réponse et aux devis qui n'arrivent jamais. GoodWorker en fait un produit : le particulier crée sa demande, le pro répond sous 48 heures par un vrai devis ou un rendez vous déjà posé. Quelque part entre LinkedIn, Doctolib et Airbnb. Vision produit, architecture, backend, application et UX : mon projet, de bout en bout.",
          points: [
            "Le client crée une demande. Le pro traite sous 24 à 48 heures, soit par un devis, soit par une proposition de rendez vous quand la demande est complexe.",
            "Devis générés en PDF directement depuis la plateforme, ou importés depuis les documents du pro.",
            "Quand un rendez vous est proposé, l'agenda du pro s'ouvre avec ses disponibilités et le client réserve son créneau en direct.",
            "Dashboard pro : demandes en cours, traitées, acceptées, refusées, chantiers terminés, et chiffre d'affaires à la semaine et au mois en temps réel.",
            "Un feed où pros et clients publient, pour proposer un service ou faire connaître un besoin.",
            "Notation dans les deux sens, le client note le pro et le pro note le client.",
          ],
          stack: ["React Native (Expo)", "Node.js", "Python", "MongoDB", "WebSocket", "Génération PDF"],
          note: "À venir : un assistant IA côté pro et côté client, et la sortie iOS et Android à l'hiver 2026",
        },
        {
          n: "02",
          title: "Flix Group & Corporate",
          tagline: "Infrastructure de réservation et systèmes complexes",
          meta: "Makitizy · Backend Engineer · 2025 → aujourd'hui",
          intro: "Intégration complète de la plateforme Flix Group & Corporate, de la V1 jusqu'au bout de la migration V2, sans aucune interruption de service côté clients.",
          points: [
            "Logique métier que l'API fournisseur n'a jamais exposée : modifications de groupe, gestion dynamique des passagers, réservations multi transporteurs. Le tout reconstruit côté plateforme.",
            "Migration V1 vers V2 : authentification, modèles de données et parcours de réservation repris pendant que la production restait stable.",
            "Réservation de sièges, options additionnelles, webhooks, conformité des factures fiscales (FlixTrain GmbH / Flix SE).",
            "Calcul de la TVA sur l'ensemble des pays de l'UE et hors espace Schengen, avec une facturation multi opérateurs répartie selon la durée du trajet et le taux applicable à chaque segment.",
          ],
          stack: ["Node.js", "TypeScript", "Angular", "REST", "Webhooks", "Docker", "AWS CloudWatch"],
        },
        {
          n: "03",
          title: "Plateforme de voyage en groupe",
          tagline: "En marque blanche, pour un opérateur ferroviaire qui vend sous sa marque",
          meta: "Makitizy · Backend Engineer · 2025 → aujourd'hui",
          intro: "Plateforme de voyage en groupe développée en marque blanche pour un opérateur ferroviaire, pour qu'il vende ses propres offres sous sa marque. Le groupe, c'est là que la plupart des moteurs de réservation s'arrêtent : normes européennes, une devise et un taux de TVA différents dans chaque pays, et des règles qui changent dès qu'on passe une frontière. Nous avons ouvert des usages de leur propre API auxquels ils n'avaient pas pensé.",
          points: [
            "Offres de groupe vendues en direct par l'opérateur, depuis son API, sous sa marque.",
            "Devise et TVA traitées pays par pays, avec les normes européennes par dessus.",
            "Règles métier absentes de l'API, reconstruites chez nous pour rendre l'offre vendable.",
          ],
          stack: ["Node.js", "TypeScript", "Angular", "REST", "Docker", "AWS CloudWatch"],
        },
        {
          n: "04",
          title: "Click N Control",
          tagline: "Le produit de Travel Planet, une seule API pour cinq fournisseurs",
          meta: "Travel Planet · Backend Engineer · 2024 – 2025",
          intro: "Le produit sur lequel j'ai travaillé chez Travel Planet. Cinq fournisseurs rail et bus, cinq manières différentes de décrire un trajet, un tarif et une disponibilité. Une seule API en sortie.",
          points: [
            "SNCF, SilverRail, Benerail, SBB et FlixBus normalisés derrière un seul modèle de données.",
            "Pipelines temps réel pour les disponibilités, les tarifs et les itinéraires.",
            "Optimisation des performances backend, monitoring AWS CloudWatch, gestion d'incidents en production.",
          ],
          stack: ["Node.js", "Angular", "Microservices", "GraphQL", "Docker", "AWS", "GitLab CI"],
        },
        {
          n: "05",
          title: "MyHotelMatch",
          tagline: "Matching · Mobile · Voyage · Recommandation",
          meta: "Full Stack Web & Mobile Engineer · 2021 – 2023",
          intro: "Application de mise en relation voyageurs et hôtels, portée du mobile jusqu'au back office, avec la logique de recommandation au centre du produit.",
          points: [
            "Application iOS et Android en React Native et TypeScript, du design d'interface jusqu'à la publication.",
            "Conception de l'algorithme de matching entre profils voyageurs et établissements.",
            "API sécurisée en Python, back office web en React, mise en place de la CI/CD GitLab.",
          ],
          stack: ["React Native", "TypeScript", "Python", "React", "MongoDB", "GitLab CI"],
        },
        {
          n: "06",
          title: "Knap",
          tagline: "Hardware connecté, données temps réel, agents IA",
          meta: "Full Stack Engineer · 2024",
          intro: "Chariots connectés avec prévention de la fraude intégrée. Des agents IA, chacun pilotant ses propres sous agents, croisent les flux des caméras et les mouvements à l'intérieur du chariot pour repérer une fraude pendant qu'elle a lieu, et l'interface réagit en magasin en temps réel.",
          chain: ["Caméras & capteurs", "Données temps réel", "Agents IA & sous agents", "Prévention de la fraude"],
          points: [
            "Des agents IA qui délèguent à des sous agents spécialisés : l'un lit le flux caméra, l'autre les mouvements dans le chariot, et leurs signaux sont croisés avant de lever une alerte.",
            "Interfaces embarquées pour chariots connectés, branchées sur les API du device et du backend.",
            "Analyse de logs et débogage en direct sur du matériel qui tourne dans de vrais magasins.",
            "Fiabilisation d'un système où la moindre panne est visible par un client dans un rayon.",
          ],
          stack: ["JavaScript", "Node.js", "API temps réel", "ElasticSearch", "Agents IA", "Vision par ordinateur"],
        },
      ],
    },
    tools: {
      label: "Outils",
      items: [
        ["Langages", "JavaScript (ES6+), TypeScript, Python"],
        ["Backend", "Node.js, NestJS, REST, GraphQL, microservices"],
        ["Mobile", "React Native, Expo, publication iOS et Android"],
        ["Web", "React, Next.js, Angular"],
        ["Données", "MongoDB, PostgreSQL, MySQL, ElasticSearch"],
        ["Cloud & ops", "AWS CloudWatch, Docker, GitLab CI/CD"],
        ["IA", "Intégration LLM, agents outillés, RAG, LangChain"],
      ],
    },
    education: {
      label: "Formation",
      items: [
        ["LLM, RAG & agents IA", "en autodidacte, certification en cours"],
        ["Certification Scrum Master iCSM", "2023"],
        ["Développeuse JavaScript React", "titre RNCP niveau 6, OpenClassrooms, 2022"],
        ["Gestion de projet e-commerce", "2020"],
        ["BTS Négociation & Relation Client", "2015"],
      ],
    },
    fi: {
      label: "Fondateurs & investisseurs",
      title: "Besoin de quelqu'un pour transformer une idée en produit ?",
      intro: "Je travaille avec des fondateurs, des startups et des équipes qui ont besoin d'une exécution technique solide sans monter toute une équipe d'ingénierie dès le premier jour.",
      cells: [
        { n: "01", t: "Vous construisez quelque chose", d: "Produit early stage, première version à livrer, ou binôme technique à côté d'un fondateur non technique. Vous apportez l'idée, je rends un produit en production.", cta: "Un projet en tête ? Parlons en", subject: "Prise de contact projet" },
        { n: "02", t: "Vous investissez dans une équipe", d: "Une participation bloquée sur une intégration, une migration, une sortie mobile, ou une fonctionnalité IA restée au stade de la démo. Mettez nous en relation.", cta: "Faire une mise en relation", subject: "Mise en relation participation" },
      ],
    },
    contact: {
      title: "Le plus rapide, c'est de me décrire votre idée et d'en discuter.",
      text: "Racontez moi ce que vous voulez construire, parlons en simplement.",
      email: "E-mail",
      linkedin: "LinkedIn",
      phone: "Téléphone",
      form: {
        label: "Écrivez moi",
        name: "Votre nom",
        from: "Votre e-mail",
        company: "Société (optionnel)",
        message: "Sur quoi travaillez vous ?",
        send: "Envoyer",
        sending: "Envoi en cours",
        sent: "C'est noté. Je vous réponds sous 24 heures.",
        error: "L'envoi n'est pas passé. Écrivez moi directement à",
        required: "Il me faut au moins le nom, l'e-mail et le message.",
        badEmail: "Cette adresse e-mail a l'air incorrecte.",
      },
    },
    footer: "Full-Stack · IA & Product Engineering · France / Remote",
  },
};

/* ================================================================== */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Public+Sans:wght@300;400;500&display=swap');

/*  PALETTE
    Accent actif : vert. Pour changer d'accent, remplacer --accent,
    --accent-soft, --glow et --solid-bg-hover dans les deux themes,
    et les deux couleurs de fond dans le useEffect qui peint le body.

    Autres accents testes, contraste verifie :
      framboise    clair #B21E4B   sombre #F27BA0   glow rgba(242,123,160,.11)
                   neutres chauds  clair surface #F8F5F6 line #E9E2E5 text #120E10
                                   sombre bg #0D0A0C surface #171214 line #261E21
      terre cuite  clair #B4472A   sombre #E8926F   glow rgba(232,146,111,.10)
      prune        clair #7A2B6B   sombre #D389C6   glow rgba(211,137,198,.10)
*/
.sl-root {
  --bg: #FFFFFF;
  --surface: #F5F6F4;
  --text: #0C0F0E;
  --muted: #67706B;
  --faint: #99A19C;
  --line: #E3E6E2;
  --accent: #2F5D50;
  --accent-soft: rgba(47, 93, 80, 0.09);
  --glow: transparent;

  /* couleurs dédiées aux boutons pleins, indépendantes du fond */
  --solid-bg: #0C0F0E;
  --solid-fg: #FFFFFF;
  --solid-bg-hover: #2F5D50;
  --solid-fg-hover: #FFFFFF;

  background: var(--bg);
  color: var(--text);
  font-family: 'Public Sans', system-ui, sans-serif;
  font-weight: 300;
  font-size: 16.5px;
  line-height: 1.62;
  -webkit-font-smoothing: antialiased;
  transition: background .5s ease, color .5s ease;
}
.sl-root[data-theme="dark"] {
  --bg: #0B0E0D;
  --surface: #121716;
  --text: #E9EDEA;
  --muted: #929B96;
  --faint: #6B7570;
  --line: #202725;
  --accent: #7FC9AC;
  --accent-soft: rgba(127, 201, 172, 0.10);
  --glow: rgba(127, 201, 172, 0.10);

  --solid-bg: #E9EDEA;
  --solid-fg: #0B0E0D;
  --solid-bg-hover: #7FC9AC;
  --solid-fg-hover: #06120E;
}
.sl-root *, .sl-root *::before, .sl-root *::after { box-sizing: border-box; }
.sl-root h1, .sl-root h2, .sl-root h3, .sl-root p, .sl-root ul { margin: 0; }
.sl-root ul { padding: 0; list-style: none; }
.sl-root a { color: inherit; text-decoration: none; }
.sl-root button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }
.sl-root :focus-visible { outline: 1.5px solid var(--accent); outline-offset: 4px; }

.sl-wrap { max-width: 1120px; margin: 0 auto; padding: 0 30px; }
.sl-display { font-family: 'Archivo', system-ui, sans-serif; font-weight: 600; letter-spacing: -0.042em; line-height: 0.95; }
.sl-label { font-family: 'Archivo', system-ui, sans-serif; font-size: 10.5px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: var(--faint); }
.sl-num { font-family: 'Archivo', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.2em; color: var(--accent); }

/* boutons
   Attention : .sl-root a et .sl-root button (color: inherit) ont une specificite
   de (0,1,1). Les regles ci-dessous sont donc ecrites en (0,2,0) minimum, sinon
   la couleur du texte des boutons est ecrasee par inherit. */
.sl-root a.sl-solid, .sl-root button.sl-solid {
  background: var(--solid-bg);
  color: var(--solid-fg);
  border: 1px solid var(--solid-bg);
  transition: background .25s, color .25s, border-color .25s, transform .25s;
}
.sl-root a.sl-solid:hover, .sl-root button.sl-solid:hover {
  background: var(--solid-bg-hover);
  border-color: var(--solid-bg-hover);
  color: var(--solid-fg-hover);
}

/* header */
.sl-header { position: sticky; top: 0; z-index: 30; background: var(--bg); border-bottom: 1px solid var(--line); }
.sl-header-in { display: flex; align-items: center; justify-content: space-between; height: 64px; gap: 20px; }
.sl-brand { font-family: 'Archivo', sans-serif; font-weight: 600; font-size: 15px; letter-spacing: -0.02em; }
.sl-header nav { display: flex; align-items: center; gap: 20px; }
.sl-header nav a.sl-navlink { font-size: 14px; color: var(--muted); transition: color .2s; }
.sl-header nav a.sl-navlink:hover { color: var(--text); }
.sl-toggles { display: flex; align-items: center; gap: 6px; }
.sl-toggle { border: 1px solid var(--line); border-radius: 2px; height: 32px; padding: 0 11px; font-family: 'Archivo', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; color: var(--muted); display: inline-flex; align-items: center; gap: 5px; transition: all .2s; }
.sl-toggle:hover { border-color: var(--accent); color: var(--accent); }
.sl-lang b { color: var(--text); font-weight: 600; }
.sl-cta-head { border-radius: 2px; height: 32px; padding: 0 15px; display: inline-flex; align-items: center; font-size: 13.5px; }
@media (max-width: 900px) { .sl-header nav a.sl-navlink { display: none; } }
@media (max-width: 560px) { .sl-cta-head { display: none; } }

/* hero */
.sl-hero { position: relative; padding: 128px 0 104px; overflow: hidden; }
.sl-hero::before { content: ""; position: absolute; top: -280px; left: 50%; transform: translateX(-50%); width: 1100px; height: 620px; background: radial-gradient(ellipse at center, var(--glow), transparent 68%); pointer-events: none; }
.sl-hero > * { position: relative; }
.sl-hero h1 { font-size: clamp(2.9rem, 8vw, 5.9rem); max-width: 14em; text-wrap: balance; }
.sl-hero-rule { margin-top: 42px; padding-top: 22px; border-top: 1px solid var(--line); display: flex; flex-wrap: wrap; gap: 12px 40px; justify-content: space-between; align-items: baseline; }
.sl-hero-sub { margin-top: 24px; font-size: 1.07rem; color: var(--muted); max-width: 38em; }
.sl-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 42px; }
.sl-btn { display: inline-flex; align-items: center; gap: 10px; padding: 15px 26px; border-radius: 2px; font-size: 15px; }
.sl-root a.sl-btn.sl-solid:hover { transform: translateY(-1px); }
.sl-root a.sl-btn-line { background: transparent; border: 1px solid var(--line); color: var(--text); transition: all .25s; }
.sl-root a.sl-btn-line:hover { border-color: var(--accent); color: var(--accent); }
.sl-avail { font-family: 'Archivo', sans-serif; font-size: 12.5px; letter-spacing: 0.04em; color: var(--faint); }

.sl-rise { opacity: 0; transform: translateY(14px); animation: slRise .9s cubic-bezier(.2,.7,.3,1) forwards; }
@keyframes slRise { to { opacity: 1; transform: none; } }

/* statement */
.sl-statement { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 96px 0; background: var(--surface); }
.sl-statement h2 { font-size: clamp(1.9rem, 4.4vw, 3.1rem); max-width: 13em; }
.sl-statement h2 span { display: block; color: var(--faint); }
.sl-seq { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 54px; min-height: 34px; }
.sl-seq-item { display: inline-flex; align-items: center; gap: 12px; opacity: 0; transform: translateY(6px); transition: opacity .5s ease, transform .5s ease; }
.sl-seq-item.sl-shown { opacity: 1; transform: none; }
.sl-seq-word { font-family: 'Archivo', sans-serif; font-size: 11.5px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid var(--line); background: var(--bg); padding: 9px 15px; border-radius: 2px; }
.sl-seq-item.sl-last .sl-seq-word { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }
.sl-seq-arrow { color: var(--faint); font-size: 13px; }

/* sections */
.sl-section { padding: 104px 0 0; }
.sl-sec-head { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; flex-wrap: wrap; }
.sl-h2 { font-size: clamp(1.55rem, 3.1vw, 2.2rem); }

.sl-caps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin-top: 46px; background: var(--line); border: 1px solid var(--line); border-radius: 3px; overflow: hidden; }
.sl-cap { background: var(--bg); padding: 34px 28px 38px; transition: background .3s; }
.sl-cap:hover { background: var(--surface); }
.sl-cap h3 { font-family: 'Archivo', sans-serif; font-weight: 600; font-size: 1.13rem; letter-spacing: -0.02em; margin-top: 18px; }
.sl-cap p { color: var(--muted); font-size: 0.94rem; margin-top: 10px; }
@media (max-width: 900px) { .sl-caps { grid-template-columns: 1fr 1fr; } }
@media (max-width: 620px) { .sl-caps { grid-template-columns: 1fr; } }

/* projets */
.sl-work { position: relative; border-top: 1px solid var(--line); padding: 54px 0; display: grid; grid-template-columns: 1fr 1.55fr; gap: 46px; }
.sl-list .sl-work:last-child { border-bottom: 1px solid var(--line); }
.sl-work::after { content: ""; position: absolute; left: 0; top: -1px; height: 1px; width: 0; background: var(--accent); transition: width .6s cubic-bezier(.2,.7,.3,1); }
.sl-work:hover::after { width: 100%; }
.sl-work-index { font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 2.6rem; letter-spacing: -0.04em; line-height: 1; color: transparent; -webkit-text-stroke: 1px var(--line); transition: -webkit-text-stroke-color .3s; }
.sl-work:hover .sl-work-index { -webkit-text-stroke-color: var(--accent); }
.sl-work-title { font-family: 'Archivo', sans-serif; font-weight: 600; font-size: clamp(1.55rem, 3.2vw, 2.25rem); letter-spacing: -0.035em; line-height: 1.03; margin-top: 16px; }
.sl-work-tag { color: var(--accent); font-size: 0.98rem; margin-top: 12px; }
.sl-work-meta { color: var(--faint); font-size: 13px; margin-top: 8px; }
.sl-work-intro { max-width: 40em; }
.sl-chain { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 24px; }
.sl-chain-w { font-family: 'Archivo', sans-serif; font-size: 10.5px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; background: var(--surface); border: 1px solid var(--line); padding: 8px 13px; border-radius: 2px; }
.sl-chain-a { color: var(--faint); font-size: 12px; }
.sl-points { margin-top: 24px; display: grid; gap: 12px; }
.sl-points li { position: relative; padding-left: 22px; color: var(--muted); font-size: 0.96rem; }
.sl-points li::before { content: ""; position: absolute; left: 0; top: 0.72em; width: 9px; height: 1px; background: var(--accent); }
.sl-stack { margin-top: 26px; font-family: 'Archivo', sans-serif; font-size: 12px; letter-spacing: 0.05em; color: var(--faint); }
.sl-work-note { margin-top: 10px; font-size: 12.5px; color: var(--accent); }
@media (max-width: 860px) { .sl-work { grid-template-columns: 1fr; gap: 22px; } }

.sl-more { display: grid; grid-template-columns: 156px 1fr; gap: 32px; padding: 26px 0; border-top: 1px solid var(--line); }
.sl-more:last-of-type { border-bottom: 1px solid var(--line); }
.sl-more h3 { font-family: 'Archivo', sans-serif; font-weight: 600; font-size: 1.02rem; letter-spacing: -0.02em; }
.sl-more p { color: var(--muted); font-size: 0.94rem; margin-top: 6px; max-width: 44em; }
@media (max-width: 700px) { .sl-more { grid-template-columns: 1fr; gap: 8px; } }

.sl-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 46px; margin-top: 44px; }
.sl-cols ul { margin-top: 20px; display: grid; gap: 13px; }
.sl-cols li { font-size: 0.94rem; color: var(--muted); }
.sl-cols li b { color: var(--text); font-weight: 400; }
@media (max-width: 780px) { .sl-cols { grid-template-columns: 1fr; gap: 34px; } }

/* fondateurs & investisseurs */
.sl-fi { margin-top: 110px; background: var(--surface); border: 1px solid var(--line); border-radius: 4px; padding: 66px 54px; }
.sl-fi h2 { font-size: clamp(1.7rem, 3.7vw, 2.6rem); max-width: 15em; margin-top: 24px; }
.sl-fi > p { margin-top: 20px; color: var(--muted); max-width: 44em; }
.sl-fi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin-top: 48px; background: var(--line); border: 1px solid var(--line); border-radius: 3px; overflow: hidden; }
.sl-fi-cell { background: var(--surface); padding: 32px 30px 34px; }
.sl-fi-cell h3 { font-family: 'Archivo', sans-serif; font-weight: 600; font-size: 1.08rem; letter-spacing: -0.02em; margin-top: 16px; }
.sl-fi-cell p { color: var(--muted); font-size: 0.94rem; margin-top: 10px; }
.sl-root a.sl-inline-cta { display: inline-flex; align-items: center; gap: 8px; margin-top: 22px; font-size: 14.5px; border-bottom: 1px solid var(--text); padding-bottom: 3px; transition: color .2s, border-color .2s; }
.sl-root a.sl-inline-cta:hover { color: var(--accent); border-color: var(--accent); }
@media (max-width: 760px) { .sl-fi { padding: 44px 26px; } .sl-fi-grid { grid-template-columns: 1fr; } }

/* contact + formulaire */
.sl-contact { margin-top: 104px; padding-top: 62px; border-top: 1px solid var(--line); }
.sl-contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 8px; }
.sl-contact h2 { font-size: clamp(1.7rem, 3.9vw, 2.6rem); max-width: 15em; }
.sl-contact p.sl-contact-text { margin-top: 18px; color: var(--muted); max-width: 42em; }
.sl-lines { margin-top: 36px; }
.sl-line { display: flex; align-items: baseline; gap: 18px; padding: 16px 0; border-top: 1px solid var(--line); transition: color .2s, padding-left .25s; }
.sl-line:last-child { border-bottom: 1px solid var(--line); }
.sl-root a.sl-line:hover { color: var(--accent); padding-left: 8px; }
.sl-line .sl-label { width: 104px; flex: none; }

.sl-form { display: grid; gap: 14px; }
.sl-form .sl-label { margin-bottom: 6px; display: block; }
.sl-field { width: 100%; background: transparent; border: 1px solid var(--line); border-radius: 2px; padding: 13px 15px; color: var(--text); font-family: inherit; font-size: 15px; font-weight: 300; transition: border-color .2s, background .2s; }
.sl-field::placeholder { color: var(--faint); }
.sl-field:focus { outline: none; border-color: var(--accent); background: var(--surface); }
textarea.sl-field { min-height: 132px; resize: vertical; line-height: 1.55; }
.sl-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.sl-submit { justify-self: start; padding: 14px 26px; border-radius: 2px; font-size: 15px; display: inline-flex; align-items: center; gap: 10px; }
.sl-submit[disabled] { opacity: .55; cursor: default; }
.sl-note { font-size: 13.5px; margin-top: 4px; }
.sl-note-ok { color: var(--accent); }
.sl-note-err { color: var(--text); }
.sl-note-err a { border-bottom: 1px solid var(--accent); color: var(--accent); }
@media (max-width: 900px) { .sl-contact-grid { grid-template-columns: 1fr; gap: 44px; } }
@media (max-width: 520px) { .sl-form-row { grid-template-columns: 1fr; } }

.sl-footer { display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; padding: 46px 0 60px; color: var(--faint); font-size: 12.5px; }

.sl-fade { opacity: 0; transform: translateY(14px); transition: opacity .8s ease, transform .8s ease; }
.sl-fade.sl-in { opacity: 1; transform: none; }

/* ================= mobile ================= */
.sl-root { min-height: 100dvh; overflow-x: hidden; }
.sl-root img, .sl-root svg { max-width: 100%; }

.sl-mobilebar { display: none; position: fixed; left: 0; right: 0; bottom: 0; z-index: 40; padding: 12px 20px calc(12px + env(safe-area-inset-bottom)); background: var(--bg); border-top: 1px solid var(--line); }
.sl-root a.sl-mobilebar-btn { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 15px 18px; border-radius: 2px; font-size: 15px; }

@media (max-width: 760px) {
  .sl-wrap { padding: 0 20px; }

  .sl-header-in { height: 58px; gap: 10px; }
  .sl-brand { font-size: 14px; }
  .sl-header nav { gap: 8px; }
  .sl-toggle { height: 32px; padding: 0 10px; font-size: 10.5px; }

  .sl-hero { padding: 74px 0 60px; }
  .sl-hero h1 { font-size: clamp(2.2rem, 9.4vw, 3.4rem); max-width: 100%; line-height: 1.0; }
  .sl-hero-rule { flex-direction: column; align-items: flex-start; gap: 10px; margin-top: 30px; padding-top: 18px; }
  .sl-hero-sub { margin-top: 18px; font-size: 1rem; }
  .sl-actions { margin-top: 30px; gap: 10px; }
  .sl-root a.sl-btn { flex: 1 1 100%; justify-content: center; padding: 16px 20px; }

  .sl-statement { padding: 62px 0; }
  .sl-statement h2 { font-size: clamp(1.6rem, 6.8vw, 2.2rem); }
  .sl-seq { margin-top: 32px; gap: 8px; }
  .sl-seq-item { gap: 8px; }
  .sl-seq-word { font-size: 10px; letter-spacing: 0.14em; padding: 7px 11px; }

  .sl-section { padding-top: 66px; }
  .sl-sec-head { gap: 8px; }
  .sl-caps { margin-top: 30px; }
  .sl-cap { padding: 26px 22px 28px; }

  .sl-work { padding: 34px 0; gap: 18px; }
  .sl-work-index { font-size: 2rem; }
  .sl-work-title { margin-top: 10px; }
  .sl-work-tag { margin-top: 8px; font-size: 0.95rem; }
  .sl-points { margin-top: 20px; }
  .sl-points li { font-size: 0.93rem; }
  .sl-chain-w { font-size: 9.5px; padding: 7px 10px; }

  .sl-fi { margin-top: 74px; padding: 42px 22px; }
  .sl-fi-cell { padding: 26px 22px 28px; }

  .sl-contact { margin-top: 74px; padding-top: 48px; }
  .sl-contact-grid { gap: 38px; }
  .sl-line .sl-label { width: 76px; }
  .sl-field { font-size: 16px; }
  .sl-root button.sl-submit { width: 100%; justify-content: center; }

  .sl-footer { flex-direction: column; gap: 6px; padding: 36px 0 116px; }

  .sl-mobilebar { display: flex; }
}

@media (max-width: 380px) {
  .sl-wrap { padding: 0 16px; }
  .sl-hero h1 { font-size: 2rem; }
  .sl-lang { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .sl-root * { transition: none !important; animation: none !important; }
  .sl-fade, .sl-seq-item, .sl-rise { opacity: 1; transform: none; }
}
`;

/* --- séquence animée --- */
function Sequence({ words }) {
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(words.length);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [words.length]);

  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => setStep((s) => (s >= words.length + 3 ? 1 : s + 1)), 600);
    return () => clearInterval(id);
  }, [started, words.length]);

  const shown = Math.min(step, words.length);

  return (
    <div className="sl-seq" ref={ref} aria-label={words.join(" → ")}>
      {words.map((w, i) => (
        <span
          key={w}
          className={"sl-seq-item" + (i < shown ? " sl-shown" : "") + (i === words.length - 1 ? " sl-last" : "")}
        >
          {i > 0 && <span className="sl-seq-arrow" aria-hidden="true">→</span>}
          <span className="sl-seq-word">{w}</span>
        </span>
      ))}
    </div>
  );
}

/* --- formulaire de contact --- */
function ContactForm({ t }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | invalid
  const [hint, setHint] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("invalid");
      setHint(t.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      setStatus("invalid");
      setHint(t.badEmail);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          _subject: `Portfolio · ${form.name}${form.company ? ` (${form.company})` : ""}`,
          _template: "table",
          _captcha: "false",
          _honey: "",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="sl-form">
      <span className="sl-label">{t.label}</span>
      <div className="sl-form-row">
        <input className="sl-field" placeholder={t.name} value={form.name} onChange={set("name")} autoComplete="name" />
        <input className="sl-field" placeholder={t.from} value={form.email} onChange={set("email")} autoComplete="email" inputMode="email" />
      </div>
      <input className="sl-field" placeholder={t.company} value={form.company} onChange={set("company")} autoComplete="organization" />
      <textarea className="sl-field" placeholder={t.message} value={form.message} onChange={set("message")} />
      <button className="sl-submit sl-solid" onClick={submit} disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.send} <span aria-hidden="true">↗</span>
      </button>

      {status === "sent" && <p className="sl-note sl-note-ok">{t.sent}</p>}
      {status === "invalid" && <p className="sl-note sl-note-err">{hint}</p>}
      {status === "error" && (
        <p className="sl-note sl-note-err">
          {t.error} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      )}
    </div>
  );
}

export default function Portfolio() {
  const rootRef = useRef(null);
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const t = useMemo(() => COPY[lang], [lang]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light");
    if ((navigator.language || "").toLowerCase().startsWith("fr")) setLang("fr");
  }, []);

  /* le composant ne peint que sa propre div : sans ceci, html et body
     restent blancs et le fond sombre s'arrete au bas du contenu */
  useEffect(() => {
    const bg = theme === "dark" ? "#0B0E0D" : "#FFFFFF";
    document.documentElement.style.background = bg;
    document.body.style.background = bg;
    document.documentElement.style.colorScheme = theme;
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", bg);
  }, [theme]);

  useEffect(() => {
    const nodes = rootRef.current?.querySelectorAll(".sl-fade") ?? [];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("sl-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("sl-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [lang]);

  const mail = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="sl-root" data-theme={theme} ref={rootRef} lang={lang}>
      <style>{css}</style>

      <header className="sl-header">
        <div className="sl-wrap sl-header-in">
          <a href="#top" className="sl-brand">Sabrina Liberas</a>
          <nav>
            <a className="sl-navlink" href="#work">{t.nav.work}</a>
            <a className="sl-navlink" href="#founders">{t.nav.founders}</a>
            <div className="sl-toggles">
              <button
                className="sl-toggle sl-lang"
                onClick={() => setLang(lang === "en" ? "fr" : "en")}
                aria-label={lang === "en" ? "Passer en français" : "Switch to English"}
              >
                <b>{lang === "en" ? "EN" : "FR"}</b> / {lang === "en" ? "FR" : "EN"}
              </button>
              <button
                className="sl-toggle"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? "☀" : "☾"}
              </button>
            </div>
            <a className="sl-cta-head sl-solid" href="#contact">{t.nav.cta}</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="sl-wrap sl-hero">
          <h1 key={t.hero.title} className="sl-display sl-rise">{t.hero.title}</h1>
          <div className="sl-hero-rule sl-rise" style={{ animationDelay: ".08s" }}>
            <span className="sl-label">{t.hero.role}</span>
            <span className="sl-avail">{t.hero.avail}</span>
          </div>
          <p className="sl-hero-sub sl-rise" style={{ animationDelay: ".16s" }}>{t.hero.sub}</p>
          <div className="sl-actions sl-rise" style={{ animationDelay: ".24s" }}>
            <a className="sl-btn sl-solid" href="#contact">
              {t.hero.primary} <span aria-hidden="true">↗</span>
            </a>
            <a className="sl-btn sl-btn-line" href="#work">
              {t.hero.secondary} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* statement */}
        <section className="sl-statement">
          <div className="sl-wrap">
            <h2 className="sl-display sl-fade">
              {t.statement.a}
              <span>{t.statement.b}</span>
            </h2>
            <Sequence key={lang} words={t.sequence} />
          </div>
        </section>

        {/* capacités */}
        <section className="sl-wrap sl-section">
          <div className="sl-sec-head sl-fade">
            <h2 className="sl-h2 sl-display">{t.caps.title}</h2>
            <span className="sl-label">{t.caps.label}</span>
          </div>
          <div className="sl-caps sl-fade">
            {t.caps.items.map((c) => (
              <article key={c.n} className="sl-cap">
                <span className="sl-num">{c.n}</span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* projets */}
        <section className="sl-wrap sl-section" id="work">
          <div className="sl-sec-head sl-fade">
            <h2 className="sl-h2 sl-display">{t.work.title}</h2>
            <span className="sl-label">{t.work.label}</span>
          </div>

          <div className="sl-list" style={{ marginTop: 34 }}>
            {t.work.items.map((w) => (
              <article key={w.title} className="sl-work sl-fade">
                <div>
                  <div className="sl-work-index">{w.n}</div>
                  <h3 className="sl-work-title">{w.title}</h3>
                  <p className="sl-work-tag">{w.tagline}</p>
                  <p className="sl-work-meta">{w.meta}</p>
                </div>
                <div>
                  <p className="sl-work-intro">{w.intro}</p>
                  {w.chain && (
                    <div className="sl-chain">
                      {w.chain.map((c, i) => (
                        <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                          {i > 0 && <span className="sl-chain-a" aria-hidden="true">→</span>}
                          <span className="sl-chain-w">{c}</span>
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className="sl-points">
                    {w.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <p className="sl-stack">{w.stack.join("  ·  ")}</p>
                  {w.note && <p className="sl-work-note">{w.note}</p>}
                </div>
              </article>
            ))}
          </div>

          <div className="sl-cols">
            <div className="sl-fade">
              <p className="sl-label">{t.tools.label}</p>
              <ul>
                {t.tools.items.map(([k, v]) => <li key={k}><b>{k}</b> : {v}</li>)}
              </ul>
            </div>
            <div className="sl-fade">
              <p className="sl-label">{t.education.label}</p>
              <ul>
                {t.education.items.map(([k, v]) => <li key={k}><b>{k}</b> : {v}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* fondateurs & investisseurs */}
        <section className="sl-wrap" id="founders">
          <div className="sl-fi sl-fade">
            <span className="sl-label">{t.fi.label}</span>
            <h2 className="sl-display">{t.fi.title}</h2>
            <p>{t.fi.intro}</p>
            <div className="sl-fi-grid">
              {t.fi.cells.map((c) => (
                <div key={c.n} className="sl-fi-cell">
                  <span className="sl-num">{c.n}</span>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                  <a className="sl-inline-cta" href="#contact">
                    {c.cta} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* contact */}
        <section className="sl-wrap sl-contact" id="contact">
          <div className="sl-contact-grid">
            <div className="sl-fade">
              <h2 className="sl-display">{t.contact.title}</h2>
              <p className="sl-contact-text">{t.contact.text}</p>
              <div className="sl-lines">
                <a className="sl-line" href={mail(t.nav.cta)}>
                  <span className="sl-label">{t.contact.email}</span>
                  <span>{EMAIL}</span>
                </a>
                <a className="sl-line" href={LINKEDIN} target="_blank" rel="noreferrer">
                  <span className="sl-label">{t.contact.linkedin}</span>
                  <span>sabrina-liberas</span>
                </a>
                <a className="sl-line" href={`tel:${PHONE.replace(/\s/g, "")}`}>
                  <span className="sl-label">{t.contact.phone}</span>
                  <span>{PHONE}</span>
                </a>
              </div>
            </div>
            <div className="sl-fade">
              <ContactForm t={t.contact.form} />
            </div>
          </div>
        </section>

        <div className="sl-mobilebar">
          <a className="sl-mobilebar-btn sl-solid" href="#contact">
            {t.nav.cta} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <footer className="sl-wrap sl-footer">
          <span>© {new Date().getFullYear()} Sabrina Liberas</span>
          <span>{t.footer}</span>
        </footer>
      </main>
    </div>
  );
}