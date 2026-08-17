let respecConfig = {
  useLogo: true,
  useLabel: true,

  // TODO: title is verplicht! Neem hieronder de titel van het document op
  title: "Informatiemodel Externe Veiligheid",
  //-- specStatus is verplicht! (activeer 1 van de volgende)
  // specStatus: "wv",                 // Werkversie
  specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document

  //-- specType is verplicht bij alle andere dan BASIS
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice

  //-- pubDomain is verplicht! (komt in de URL)
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  //-- TODO: vul pubDomain in
  pubDomain: "imev",

  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  //license: "cc-by",                 // Attribution, met bronvermelding

  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)
  //-- Regel: shortName mag geen hoofdletters bevatten.
  shortName: "IMEV",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
  edDraftURI: ["https://geonovum.github.io/imev-werkomgeving/"],
 
  //-- publishDate is verplicht. Als je werkversie gekozen hebt dan pakt Respec
  //-- de pushdate maar de publishDate is nog steeds verplicht.
  publishDate: "2026-08-17",
  
  //-- publishVersion is verplicht. Hij mag wel leeg zijn [], maar niet de lege string zijn "".
  publishVersion: "4.0.0",
 
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beide aan/uit! 
  previousPublishDate: "2025-07-10",
  previousPublishVersion: "3.0.2",
  prevVersion: ["https://docs.geostandaarden.nl/imev/def-im-imev-20250710/"],
  previousMaturity: "def",

  //-- Deze gebruiken we niet binnen Geonovum
  //prevVersion: "0.0.1",

  //-- TODO: de namen van de Editor(s) / Redacteur(en)
  //-- vul in: per Editor: name:, company:, companyURL:
  editors:
    [
       {
    name:       "Pieter Bresters",
	company:    "Geonovum",
    companyURL: "https://www.geonovum.nl/",
    }
  ]
   otherLinks: [
      {
        key: "Contact:",
        data: [
          {
            value: "Meer weten over IMEV",
            href: "https://www.geonovum.nl/geo-standaarden/informatiemodel-externe-veiligheid-imev/",
          },
          {
            value: "imev@geonovum.nl",
            href: "mailto:imev@geonovum.nl/",
          },
          ],
      },
    ],

  //-- de namen van de auteur(s) 
  //-- vul in: per auteur: name:, company:, companyURL: 
  authors:
    [
   {
    name:       "Paul Janssen",
    company:    "Geonovum",
    companyURL: "https://www.geonovum.nl/"
  },
   {
    name:       "Pieter Bresters",
    company:    "Geonovum",
    companyURL: "https://www.geonovum.nl/"
   },
   {
    name:       "Jan Cas Smit",
    company:    "Geonovum",
    companyURL: "https://www.geonovum.nl/"
   },   
   {
    name:       "Monique van Scherpenzeel",
    company:    "Geonovum",
    companyURL: "https://www.geonovum.nl/"
    }
  ],

  // TODO: Vul de github URL in.
  // neem hier de URL van de github repository op waar het respec document in staat
  // dit zorgt voor het 'Doe mee:' onderdeel in het voorblad van de publicatie.
  https://geonovum.github.io/imev-werkomgeving/",

  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //        uri: "static/template.pdf",
  //    },
  //],

  //
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig op: https://tools.geostandaarden.nl/specref/
  // - Voeg dan pas hieronder toe.
  // - Zie handleiding: https://geonovum.github.io/handleiding-tooling/ReSpec/ReSpec-onderdelen/#bibliografie
  //
  
};
