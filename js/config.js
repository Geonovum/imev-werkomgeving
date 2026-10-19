//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec
//-------------------------------------------------------------------------------------
//-- 20181015 - JvG - Initiele versie
//-- 20260901 - ILaR - generieke actuele respec
//-------------------------------------------------------------------------------------
var respecConfig =
{ 
  //-- title is verplicht!
  title: "Informatiemodel Externe Veiligheid",
  //subtitle: "Versie 4.0.0",
  //-- specStatus is verplicht! (activeer 1 van de volgende)
  //specStatus: "wv",               // Werkversie
  //specStatus: "cv",                 // Consultatieversie
  specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document

  //-- specType is verplicht bij alle andere dan basis
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  specType: "IM",                   // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                 // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice

  publishDate: "2026-10-19",  	        	  // Format is "YYYY-MM-DD"  
  publishVersion: "versie 4.0.0",
  // previous version parts
  previousPublishDate: "2026-08-17",    	  // Format is "YYYY-MM-DD"
  previousPublishVersion: "4.0.0",
  previousMaturity: "cv",

  // Format is "YYYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: [
   {
    name:       "Pieter Bresters",
	  company:    "Geonovum",
    companyURL: "https://www.geonovum.nl",
   }
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors: [
   {
    name:       "Paul Janssen",
    company:    "Geonovum",
    companyURL: "https://www.geonovum.nl"
   },
   {
    name:       "Pieter Bresters",
    company:    "Geonovum",
    companyURL: "https://www.geonovum.nl"
   },
   {
    name:       "Jan Cas Smit",
    company:    "Geonovum",
    companyURL: "https://www.geonovum.nl"
   },   
   {
    name:       "Monique van Scherpenzeel",
    company:    "Geonovum",
    companyURL: "https://www.geonovum.nl"
   },
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam/bestaand pad) --------------------
  shortName: "imev", 	              // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  pubDomain: "imev", 	              // IM Externe Veiligheid
  //-- Repositorynaam op GitHub -------------------------------------------------------
  //github: "https://github.com/Geonovum/imev-werkomgeving/",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/Geonovum/imev-werkomgeving/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/imev-werkomgeving/",

  //-- license: voor de geldende gebruiksvoorwaarden
  licence: "cc-by-nd",              //-- bronvermelding, geen afgeleide werken (default)
  // licence: "cc0",                //-- Public Domain Dedication
  // licence: "cc-by",              //-- Attribution, met bronvermelding

  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging
  //localBiblio:
  //{
  //  "MDA":
  //  {
  //   title:      "Model Driven Architecture (MDA) Guide",
  //    href:       "",
  //    status:     "rev. 2.0, 1-6-2014",
  //    publisher:  "",
  //     company:    "Object Management Group",
  //  },

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  maxTocLevel: 4,                             // Aantal niveau's ToC, default is 0

  //-- postProcess: de organisatie-stappen (mermaid e.d.) blijven behouden
  postProcess: [...(organisationConfig.postProcess || []), herstelImevLinks],
};

//-------------------------------------------------------------------------------------
//-- herstelImevLinks: corrigeert links in de door Imvertor gegenereerde objectcatalogus
//-- (data/imev-werkomgeving-cat.respec.html). Die wordt bij elke modelexport opnieuw
//-- gegenereerd; daarom hier en niet in de catalogus zelf.
//-------------------------------------------------------------------------------------
function herstelImevLinks(_config, document) {
  //-- Klikbare vlakken in diagrammen die naar een niet-bestaande global_class-sectie
  //-- wijzen (o.a. waardelijsten) laten verwijzen naar de bijbehorende detail_class-sectie
  document.querySelectorAll('area[href^="#global_class_"]').forEach((area) => {
    const id = area.getAttribute("href").slice(1);
    const detailId = id.replace(/^global_class_/, "detail_class_");
    if (!document.getElementById(id) && document.getElementById(detailId)) {
      area.setAttribute("href", "#" + detailId);
    }
  });

  //-- Outlook-safelinks vervangen door de oorspronkelijke URL
  document.querySelectorAll('a[href*="safelinks.protection.outlook.com"]').forEach((a) => {
    const url = new URL(a.href).searchParams.get("url");
    if (url) {
      a.setAttribute("href", url);
    }
  });

  //-- Primitieve datatypen verwijzen naar MIM 1.2 i.p.v. een oude versie ter vaststelling
  document.querySelectorAll('a[href^="https://docs.geostandaarden.nl/mim/vv-st-mim-20200225/"]').forEach((a) => {
    a.setAttribute("href", "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/#primitief-datatype-1");
  });
}
