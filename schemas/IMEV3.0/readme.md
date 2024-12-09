In deze map staan de schemas die horen bij IMEV 3.0.

***IMEV_OAS_3.0_RC1.yaml*** is de Open Api Specificatie (OAS) behorende bij IMEV3.0.
Deze dient als voorbeeld, maar zal voor de definitieve implementatie van de API nog aangepast moeten worden aan implementatie specifieke elementen.  

***imev30-oas-schema.yaml*** is een extra schema voor aansluiting van de OAS op het IMEV_schema_3.0_RC3.json  

***common-schema.yaml*** is een apart schema voor algemene obejecten als Geometrie en NEN3610id. Deze is eigenlijk overbodig geworden met IMEV3.0

***IMEV_schema_3.0_RC1.json*** is het eerst gepubliceerde schema op https://register.geostandaarden.nl/jsonschema/imev/3.0.0rc/
***IMEV_schema_3.0_RC2.json*** is aangepast voor publicatie als Geojson bestanden  

***IMEV_schema_3.0_RC3.json*** is gemaakt speciaal voor aanleverbestanden en sluit meer aan op de structuur van oude aanleverbetanden, maar dan wel conform IMEV3.0

***Verbeteringen van RC3 t.o.v. RC1 en RC2:***  

-relaties in het model van rechts naar links zijn uit het schema verwijderd.
-patroon attribuut bronhouder aangepast
-min en max als number ipv string
-min en max aantalAutobussen omgedraaid 
-entityType toegevoegd bij ExterneVeiligheidsObject 
-verwijzing naar Geojson schema verwijderd 
-EVContour type en properties eruit want die zijn onnodig geworden 
-8 objecten waren geometry i.p.v. geometrie en zijn omgezet naar geometrie 
-tijdstipRegistratie niet meer required in ExterneVeiligheidsObject voor aanlevering 
-3-dubbele properperties en lege required properties eruit, want dat komt uit het Geojson schema 
-pattern kvknummer exploitant en kadastrale aanduiding 1 niveau dieper geplaatst 
-comment is opgenomen bij de 5 aan te leveren objectklassen 
-Bij subtypes die een allOf aanroepen is een unevaluatedProperties key = false opgenomen 
-entityType is toegevoegd met een constante waarde waar objecten onderdeel zijn van een oneOf 
-relaties zijn gelegd naar alle subtypes met oneOf ipv alleen naar supertypes