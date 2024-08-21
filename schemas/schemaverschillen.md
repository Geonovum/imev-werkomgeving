Schemaverschillen Geodan en Geonovum
====================================

Onderstaande tabel geeft de verschillen tussen het schema van Geonovum en die van Geodan. 

|Aspect|Geonovum|Geodan|
|------|--------|------|
|Header|Begint met comment, schema en reqs element|geen header|
|NEN3610ID|NEN3610ID is een object conform IMEV.|NEN3610ID is een string met een regex validatie.|
|Missende IMEV elementen||De abstracte objecttypen, Attribuut: tijdstipRegistratie, Attribuut: eindRegistratie|
|Extra elementen t.o.v. IMEV||IMEV-LocatieEVActiviteiten (als array, maar in IMEV is het een abstract supertype), featureType, AllowedFeatureTypes: (enumeratie), Per BKLActiviteit is er een lijst met toegestane referenties.|
|Attributen supertype|Er is een verwijzing naar de te overerven attributen van het supertype via “allOf”|De attributen van de supertypes worden steeds herhaald, maar de supertypes zelf ontbreken en worden alleen als lijst getoond met mogelijke subtypen.|
|Link naar supertype|Ja|Nee|
|Link naar subtype|Nee|Soms, met “oneOf”|
|Relaties van links naar rechts in UML|Via naam relatierol|Via een array.|
|Relaties van rechts naar links in UML|Via naam relatierol|Nee, dat volgt uit de geneste structuur van het json-bestand, zo mist bv de relatie PRcontour naar ReferentieEVContour.|
|Geometrie|Verwijzing naar https://geojson.org/, bv: https://geojson.org/schema/LineString.json |GeoJson geometry zelf gespecificeerd in common-schema|
|Keuze bv PuntOfVlak| Apart objecttype|Direct in bijbehorende objecttype met “oneOf”|
|Volgorde|Objecttypes, BKLActiviteiten, Enumeraties|Gegeneraliseerde objecttypen, BKLActiviteiten, EVContouren, Referenties, Overige objecten, Enumeraties, GeoJson geometrieobjecten|
|Mogelijke referentieobjecten per MBA|Geen beperking|Per MBA is er een lijst met mogelijke referentieobjecten|

***Toelichting op verschil in relaties***

In het EA model zijn relaties als "object ***a*** heeft een object ***b***" gedefinieerd als relatierol. Dit is in het json-schema van Geonovum terug te vinden als een property met een description. De relatie wordt gelegd via LinkObjecten die in het schema zitten, maar waar die naar verwijzen maakt niet uit.
Zo komt bijvoorbeeld de “heeft” relatie van ReferentieEVContour naar een EVActiviteit terug in het schema met de beschrijving: “Verwijzing naar de activiteit met externe veiligheidsrisco's.”  
Relaties van links naar rechts in het UML zijn in het schema van Geodan terug te vinden als arrays. De referentieobjecten hebben bijvoorbeeld een property “evContouren” waarin verwezen wordt naar een EVContourenArray of een Voidable;
Relaties van rechts naar links in het UML zijn in het schema van Geodan niet op deze manier terug te vinden. Deze relaties volgen dan uit de geneste structuur van de json-bestanden.


