//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec
//-------------------------------------------------------------------------------------
//-- 20181015 - JvG - Initiele versie
//-- 20260901 - ILaR - generieke actuele respec
//-------------------------------------------------------------------------------------
var documentConfig =
{ 
  //-- title is verplicht!
  title: "Informatiemodel Externe Veiligheid",
  //-- specStatus is verplicht! (activeer 1 van de volgende)
  //specStatus: "wv",               // Werkversie
  specStatus: "cv",                 // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
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

  publishDate: "2026-08-17",  	        	  // Format is "YYYY-MM-DD"  
  publishVersion: "versie 4.0.0",
  // previous version parts
  previousPublishDate: "2025-07-10",    	  // Format is "YYYY-MM-DD"
  previousPublishVersion: "3.0.2",
  previousMaturity: "def",

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
};
