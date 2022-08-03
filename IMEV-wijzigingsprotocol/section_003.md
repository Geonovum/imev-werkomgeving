## Gebruik van het wijzigingsprotocol

### Het protocol schrijft een vast stramien voor het wijzigen van de standaard voor. Het protocol benoemt de fasen en op te leveren resultaten. Belangrijk zijn de randvoorwaarden en uitgangspunten. De gebruikers van het Informatiemodel betrekken wij bij het wijzigen van het model. We zetten op en rij welke betrokkenen er zijn.

### Protocol versus proces

De titel van dit document geeft aan dat het hier om een protocol gaat. Toch
wordt in dit document ook gesproken over processen. Een wijzigingsprotocol
beschrijft de manier waarop wijzigingen in het Informatiemodel Externe
Veiligheidsrisico’s plaatsvinden: het wijzigingsproces. In het protocol zijn
basisbegrippen en uitgangspunten uiteengezet voor het wijzigingsproces,
bijvoorbeeld wat onder nieuwe en volgende versies verstaan wordt en wanneer deze
verwacht mogen worden. De daadwerkelijke planning van een nieuwe versie wordt in
overleg met de opdrachtgever en eigenaar van de standaard, het ministerie van
Infrastructuur en Waterstaat, de eigenaar en beheerder van de het Register
Externe Veiligheid (REV) jaarlijks opgesteld.

Met behulp van een wijzigingsprotocol voor het Informatiemodel Externe
Veiligheidsrisico’s geeft Geonovum:

 inzicht in het behandel- en besluitproces dat ten grondslag ligt aan het
versiebeheer;

 inzicht in de aangeboden wijzigingsvoorstellen;

 stabiliteit aan de standaard;

 continuïteit aan de standaard;

 een eenduidige aanpak.

### Releasebeleid

Elke Release van een nieuwe versie van het IMEV vindt plaats in nauwe afstemming
met het REV, gebruikers en software leveranciers. Elke nieuwe versie heeft
immers consequenties voor de gebruikers van het model.

We maken daarom de afspraak dat een nieuwe versie van het IMEV pas een jaar na
publicatie inwerking treedt, zodat het REV en de software leveranciers de nieuwe
versie van het REV kunnen implementeren.

Wijzigingen van het IMEV vloeien voort uit allerlei redenen en/of wensen van
gebruikers.

Een belangrijke aanleiding voor aanpassing van het model kunnen wijzigingen in
wet- en regelgeving zijn. Aanpassingen in wet- en regelgeving zijn ruim voor dat
deze in werking treden bekend. Deze aanpassingen kunnen leiden tot aanpassingen
in het IMEV. We verwachten dat de afspraken in dit beheerplan voldoende zijn om
de benodigde aanpassingen aan het IMEV vanwege wijzigingen in wet- en
regelgeving door te voeren.

Wanneer het gaat om fundamentele wijzigingen aan het IMEV, wijzigingen die er
toe leiden dat het model niet backwards compatible is, de zogenaamde X-
wijzigingen (hierover meer in de volgende paragraaf) worden deze opgepakt buiten
het beheer om, in het kader van de (door)ontwikkeling van het IMEV.

#### Wijziging van het Informatiemodel (standaard)

Een release van een standaard is een nieuwe uitgave van de standaard. De nieuwe
release kenmerkt zich ten opzichte van de oude versie door een hoger
versienummer. Een release betreft 1 product van een standaard of is een bundel
van meerdere producten van de betreffende standaard. Bij de release is ieder
product is voorzien een nieuw versienummer conform X.Y.Z schrijfwijze (zie
hierna) en een status.

Bij een standaard in beheer horen ook afspraken over het versiebeheer. Versies
van een standaard zijn er in verschillende gradaties die elk een relatie hebben
met een voorgaande versie. De wijzigingen documenteren wij en leggen wij vast in
een apart document bij de uitgebrachte versie van de standaard. De gebruiker kan
zo nagaan op welke plaatsen de betreffende standaard gewijzigd is.

Elk product van onze standaarden voorzien wij van een versienummer. Dit doen wij
conform Semantic Versioning (SemVer). Elk product heeft zijn eigen versienummer
conform X.Y.Z schrijfwijze, bijvoorbeeld versie 2.1.0 (=X.Y.Z):

 X-wijzigingen Deze wijzigingen veranderen de structuur van de standaard.
Hierdoor zijn X-wijzigingen niet backwards compatible.

Frequentie: in overleg met de opdrachtgever.

 Y-wijzigingen Dit zijn wijzigingen die niet de structuur veranderen. Dit
kunnen bijvoorbeeld updates zijn of inhoudelijke aanpassingen aan objecten,
attributen of waardelijsten of de reikwijdte van de standaard. Deze wijzigingen
zijn backwards compatible.

Frequentie: in overleg met de opdrachtgever.

 Z-wijzigingen Dit zijn in feite oplossingen van technische fouten of
verbeteringen van technische aard. Deze wijzigingen zijn backward compatible.

Frequentie: zo spoedig mogelijk na constatering, doch in overleg met de
opdrachtgever.

#### Oudere versie van een standaard

Na het uitbrengen van een nieuwe versie van een bij Geonovum in beheer zijnde
standaard, blijven oudere versies beschikbaar en zijn vindbaar via de Geonovum
website en de registers (de conceptenbibliotheek , het technisch register en het
documentenregister ).

Voor het onderhoud en de ondersteuning van een oude versie van een standaard
gelden de volgende uitgangspunten:

 Aan een oude versie worden geen nieuwe features toegevoegd, geen aanpassingen
gedaan op X en Y niveau na het uitbrengen van een nieuwe versie. Verzoeken om
aanpassing en wijziging voor nieuwe functionaliteit worden niet meer voor de
oude standaard in behandeling genomen maar doorgegeven aan het ontwikkelteam.
Correcties (Z-wijzigingen) worden wel uitgevoerd op de vorige versies zolang
deze nog ondersteund worden.

 Bij oplevering van een nieuwe versie wordt de voorgaande versie nog een van te
voren vastgestelde periode ondersteund. De duur van de overgangsperiode wordt
mede bepaald door de omvang van de wijzigingen (X, Y en Z wijzigingen op de
vorige versies), de staat van ontwikkeling van de standaard, en of de standaard
in voorlopig dan wel permanent beheer is.

 De duur van de ondersteuningsperiode voor de diverse soorten versies moet nog
worden vastgesteld. Tot aan inwerkingtreden van de Omgevingswet, waar de
Informatiemodel Externe Veiligheidsrisico’s ook onder valt, zal naar verwachting
de ondersteuningsperiode van verschillende versies anders zijn, dan in de
periode van permanent beheer zonder dat daarnaast nog grootschalige ontwikkeling
van de standaard plaatsvindt.

### Proces varianten

In paragraaf 3.2 zijn de X, Y en Z wijzigingen uitgelegd. Voor wijzigingen kent
Geonovum twee proces varianten. Eén voor X en Y wijzigingen en één voor Z
wijzigingen.

Proces voor X en Y wijzigingen

Deze vergen volledige afstemming en het doorlopen van alle in paragraaf 3.4
beschreven fasen: Inhoud, Toetsing, Besluitvorming en Implementatie. Voor de
inhoudelijke fase wordt een CAB Gebruikersgroep gestart met daarin
vertegenwoordiging van belangrijke stakeholders/gebruikers. De Gebruikersgroep
stelt een wijzigingsvoorstel op en maakt de impactanalyse van de
wijzigingsverzoeken. Het CAB adviseert het ministerie van I \&W over het
wijzigingsvoorstel. Hierbij betrekt het CAB, het advies van het
Leveranciersoverleg. Besluitvorming over vaststelling van een nieuwe versie van
het model vindt plaats in overleg tussen het ministerie van I&W en Geonovum.
Indien nodig wordt met softwareleveranciers een convenant afgesloten of een
bestaand convenant uitgebreid, waarin wordt afgesproken dat zij (onderdelen van)
de standaard gaan ondersteunen.

Proces voor Z wijzigingen

Deze dienen zo snel als mogelijk uitgevoerd te worden. De inhoudelijke fase
wordt door een medewerker van Geonovum gedaan. Toetsing vindt plaats d.m.v.
werksessies met de CAB Gebruikersgroep. Besluitvorming vindt plaats door
Geonovum. Het team van Geonovum geeft een notificatie van de wijziging door aan
de Change Adviesrol Board (CAB) . Implementatie vindt plaats door het publiceren
van de wijziging op de website van Geonovum.

### Fasen en resultaten

Het volledige wijzigingsproces doorloopt de fasen Inhoud, Toetsing,
Besluitvorming en Implementatie, zoals weergegeven in Figuur 1.

Inhoud

In de fase inhoud wordt voor iedere melding bepaald of deze wordt opgenomen in
de nieuwe versie van de standaard of niet. Dit wordt door Geonovum intern
vastgelegd in Jira en is raadpleegbaar op de website van Geonovum. Voor
meldingen die worden meegenomen in de nieuwe versie van de standaard, worden
oplossingen uitgewerkt, op basis waarvan vervolgens de specificatie wordt
aangepast. Dit gebeurt door Geonovum in samenwerking met inhoudelijke experts in
de CAB gebruikersgroep. Afhankelijk van de omvang van de wijziging ten opzichte
van de voorgaande versie is de groep van experts evenredig groter of kleiner.

Toetsing

De fase Toetsing vormt een brug tussen de inhoud, besluitvorming en de
implementatie. In deze fase wordt eenieder (X- wijziging) of een beperkte groep
belanghebbenden (Y- wijziging) uitgenodigd om zijn visie te geven op de nieuwe
versie van de standaard. De reacties uit de consultatie worden verwerkt in de
specificatie.

Besluitvorming

Bij Besluitvorming wordt besloten om de gewijzigde specificatie vast te stellen
en te publiceren. Afhankelijk van het type wijziging (X, Y of Z, zie paragraaf
3.3), besluit het ministerie dan wel Geonovum.

Besluitvorming bij wijziging van de standaard

| Type wijziging | Besluitvorming door:                               |
|----------------|----------------------------------------------------|
| X-wijziging    | Ministerie van IenW, na advies van het CAB         |
| Y-wijziging    | Ministerie van IenW, na advies van het CAB         |
| Z-wijziging    | Geonovum, in afstemming met de CAB gebruikersgroep |

Implementatie

### Het in gebruik nemen van het Informatiemodel in de praktijk staat centraal in deze fase. Hiervoor leveren we verschillende technische bestanden op, zoals implementatiebestanden, voorbeeldbestanden en voorbeeldberichten. Deze bestanden ondersteunen softwareleveranciers bij de implementatie van de standaard in hun software. Beheerders van de voorziening/ het register e.d. nemen het Informatiemodel in gebruik. Wij ondersteunen de implementatie bovendien door de werking van het Informatiemodel toe te lichten op bijvoorbeeld tijdens bijeenkomsten en bijvoorbeeld ‘inloopspreekuren’ voor de softwareleveranciers. Resultaat van deze fase is dat de gebruikers data kunnen maken en uitwisselen conform de nieuwe standaard. In Hoofdstuk 5 lichten we de implementatie verder toe.

### Betrokkenen

De volgende groepen en instanties (actoren) zijn betrokken bij het
wijzigingsproces van het Informatiemodel:

-   Het CAB

-   Gebruikersgroep met daarin de kernwerkgroep

-   Leveranciersoverleg

-   Geonovum

-   Technisch beheeroverleg

-   Ministerie van Infrastructuur en Waterstaat

Gebruikersgroep en softwareleveranciers

Nieuwe versies van het Informatiemodel bereidt Geonovum voor in samenwerking met
de Gebruikersgroep met daarin de Kernwerkgroep en het Leveranciersoverleg. We
streven naar een unanieme instemming met de standaard. Dit versterkt het
draagvlak en zorgt voor een betere implementatie van het Informatiemodel in het
werkveld.
