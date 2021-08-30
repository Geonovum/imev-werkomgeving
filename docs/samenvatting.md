Dit document bevat het informatiemodel ten behoeve van gegevensontsluiting voor het Register Externe Veiligheid (REV), het Informatiemodel Externe Veiligheid (IMEV). Het doel van deze beschrijving is om - aanvullend aan de metadata beschrijving van het dataproduct (conform MIM 1.1 en ISO 19115) - achtergrondinformatie te verstrekken over een dataproduct.  Waar de metadata de informatie op bestandsniveau beschrijft is het informatiemodel bedoeld om de gegevensstructuur en objectdefinities te beschrijven. Op basis van het informatiemodel en de metadata van het dataproduct kan een eindgebruiker zich een goed beeld vormen van de data die door een dienst worden aangeboden en de data inhoudelijk interpreteren. Daarnaast geldt dat onderdelen van het informatiemodel nodig zijn ten behoeve van applicatiebouw.

Dit document is tot stand gekomen in samenwerking met het Ministerie van Infrastructuur en Waterstaat. De tekst uit de informele beschrijving is aangevuld met informatie uit de Globale Architectuur Schets ter realisatie en de Aanleverinstructies van het REV. Daarnaast bevat het de formele beschrijving van het [logische informatiemodel](https://geonovum.github.io/MIM-Werkomgeving/#typen-informatiemodellen) IMEV.

Het beheer van het Informatiemodel Externe Veiligheid (IMEV) en daarmee dit document wordt gedaan door Stichting [Geonovum](https://www.geonovum.nl).

Leeswijzer
----------

Dit document is gestructureerd in 14 hoofdstukken.

-   [Hoofdstuk 1](#voorwoord): Bevat het voorwoord.

-   [Hoofdstuk 2](#inleiding): Bevat de inleiding.

-   [Hoofdstuk 3](#toepassingsgebied): Beschrijft het toepassingsgebied van het
    IMEV.

-   [Hoofdstuk 4](#overzicht): Geeft het informeel overzicht van de context van
    het IMEV.

-   [Hoofdstuk 5](#gegevensdefinitie): Geeft het formele beschrijving van het
    IMEV middels UML-klassediagrammen.

-   [Hoofdstuk 6](#cat): Bevat de specificatie van de objecttypen van het
    IMEV in een objectcatalogus.

-   [Hoofdstuk 7](#lis): Bevat de specificatie van de waardenlijsten van het
    IMEV.

-   [Hoofdstuk 8](#referentiesystemen): Beschrijft de gebruikte
    referentiesystemen in het informatiemodel.

-   [Hoofdstuk 9](#visualisatie): Beschrijft de verschillende visualisaties van
    dataproducten

    gebaseerd op deze specificatie.

-   [Hoofdstuk 10](#inwinning): Beschrijft de inwinningsregels voor de selectie
    van de ruimtelijke objecten die onderdeel uitmaken van het informatiemodel.

-   [Hoofdstuk 11](#metadata-dataset): Beschrijft de metadata van de dataset.

-   [Hoofdstuk 12](#levering): Beschrijft hoe een dataproduct gebaseerd op deze
    specificatie wordt geleverd of gepubliceerd.

-   [Hoofdstuk 13](#bibliografie): Beschrijft relevante documenten die
    betrekking hebben op dit informatiemodel.

-   [Hoofdstuk 14](#bijlage): Bevat bijlagen bij dit informatiemodel.
