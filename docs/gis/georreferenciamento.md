# Georreferenciamento e Sistemas de Referência

## Importância do Georreferenciamento e dos Sistemas de Referências

O georreferenciamento é o processo de associar coordenadas geográficas a pontos, linhas ou áreas na superfície da Terra, permitindo localizar com precisão elementos no espaço tridimensional. Ele é fundamental para diversas aplicações, incluindo:

- **Cartografia e Mapeamento**: Permite criar mapas precisos e atualizados, essenciais para planejamento urbano, gestão territorial e navegação.
- **Sistemas de Informação Geográfica (SIG)**: Facilita a análise espacial de dados, integrando informações de diferentes fontes para tomada de decisões.
- **Navegação e Localização**: Base para GPS, aplicativos de mapas e sistemas de transporte, garantindo rotas precisas e localização em tempo real.
- **Gestão Ambiental e Urbana**: Auxilia no monitoramento de recursos naturais, controle de desastres, planejamento de infraestrutura e gestão de propriedades.
- **Integração de Dados**: Permite combinar dados de diferentes origens, desde que utilizem o mesmo sistema de referência, evitando erros de posicionamento.

Os sistemas de referências, por sua vez, são frameworks matemáticos que definem como as coordenadas são calculadas e representadas. Eles incluem datum geodésicos (modelos da forma da Terra), elipsoides de referência e sistemas de coordenadas (geográficas ou projetadas). A padronização desses sistemas é crucial para garantir consistência e interoperabilidade entre diferentes aplicações e regiões.

## O Padrão EPSG

### O que é EPSG?

EPSG (European Petroleum Survey Group) é uma organização internacional que desenvolveu um padrão para identificar sistemas de coordenadas de referência (CRS - Coordinate Reference Systems). Atualmente, o registro EPSG é mantido pela International Association of Oil and Gas Producers (IOGP), mas o termo "EPSG" é amplamente usado para se referir aos códigos numéricos que identificam CRS específicos.

O padrão EPSG atribui códigos únicos a cada sistema de coordenadas, facilitando a troca de dados geográficos entre softwares e sistemas. Por exemplo, o código EPSG:4326 refere-se ao sistema WGS84 geográfico.

### Principais Sistemas Globais de EPSG

Os principais sistemas globais de EPSG incluem aqueles baseados em datum globais como WGS84, amplamente utilizados em GPS e aplicações mundiais:

- **WGS84 Geográfico (EPSG:4326)**: Sistema de coordenadas geográficas baseado no datum World Geodetic System 1984. Usa latitude e longitude em graus decimais. É o padrão para GPS e muitos serviços online como Google Maps.
- **WGS84 / Pseudo-Mercator (EPSG:3857)**: Projeção Mercator modificada, usada em mapas web como Google Maps, OpenStreetMap e Bing Maps. Adequada para visualização global em escalas pequenas a médias.
- **UTM (Universal Transverse Mercator)**: Sistema projetado dividido em zonas de 6° de longitude. Exemplos:
  - UTM Zone 22S (EPSG:32722): Cobre partes do Brasil meridional.
  - UTM Zone 24S (EPSG:32724): Cobre partes do nordeste brasileiro, incluindo Bahia.
- **ETRS89 (European Terrestrial Reference System 1989)**: Usado na Europa, com códigos como EPSG:4258 para coordenadas geográficas.
- **NAD83 (North American Datum 1983)**: Usado na América do Norte, com EPSG:4269 para geográficas.

Esses sistemas garantem precisão e compatibilidade em aplicações globais, mas para regiões específicas, sistemas locais podem oferecer melhor precisão.

## O Conjunto SIRGAS 2000 e Seus Sistemas de Coordenadas

SIRGAS (Sistema de Referência Geocêntrico para as Américas) é uma rede geodésica continental que visa unificar os sistemas de referência na América Latina. O SIRGAS 2000 é a realização do datum SIRGAS para o ano 2000, baseado em GPS e compatível com o ITRF2000 (International Terrestrial Reference Frame).

Ele utiliza o elipsoide GRS80 e é projetado para alta precisão em levantamentos geodésicos, cartografia e aplicações científicas. No Brasil, o SIRGAS 2000 é o datum oficial desde 2010, substituindo o SAD69.

### Sistemas de Coordenadas para Representar o Brasil Inteiro

Para representar todo o território brasileiro, que se estende por cerca de 70° de latitude e 50° de longitude, são utilizados sistemas projetados em múltiplas zonas UTM ou projeções nacionais:

- **SIRGAS 2000 / UTM**: Dividido em zonas para cobrir o país:
  - Zona 18S (EPSG:31978): Norte do país.
  - Zona 19S (EPSG:31979): Centro-norte.
  - Zona 20S (EPSG:31980): Centro.
  - Zona 21S (EPSG:31981): Centro-sul.
  - Zona 22S (EPSG:31982): Sul.
  - Zona 23S (EPSG:31983): Extremo sul.
  - Zona 24S (EPSG:31984): Nordeste, incluindo Bahia.
  - Zona 25S (EPSG:31985): Leste do Nordeste.

- **SIRGAS 2000 Geográfico (EPSG:4674)**: Para coordenadas globais em latitude/longitude.

Esses sistemas permitem representação precisa em escalas nacionais, mas para aplicações regionais, zonas específicas são preferidas para minimizar distorções.

### Sistemas de Coordenadas para Representar a Bahia

A Bahia está localizada no nordeste brasileiro, com coordenadas aproximadas entre 9°S e 18°S de latitude, e 37°W e 46°W de longitude. O sistema recomendado é:

- **SIRGAS 2000 / UTM Zone 24S (EPSG:31984)**: Adequado para a maioria do estado, com origem no equador e meridiano central em 39°W. Oferece precisão métrica em distâncias locais.

Para áreas costeiras ou específicas, pode-se usar projeções locais, mas o UTM 24S é o padrão estadual.

### Sistemas de Coordenadas para Representar Salvador

Salvador, capital da Bahia, está localizada em aproximadamente 12.97°S e 38.51°W. Como parte do estado, utiliza o mesmo sistema da Bahia:

- **SIRGAS 2000 / UTM Zone 24S (EPSG:31984)**: Ideal para mapeamento urbano, planejamento municipal e aplicações locais em Salvador.

Para escalas muito detalhadas (como projetos de engenharia), podem ser aplicadas transformações locais ou sistemas projetados específicos, mas o SIRGAS 2000 / UTM 24S é suficiente para a maioria das necessidades.

### Sistema SAD69 Utilizado Anteriormente em Salvador

Antes da adoção do SIRGAS 2000, o Brasil utilizava o Sistema Geodésico Brasileiro 1969 (SAD69), baseado no datum South American Datum 1969. Este sistema foi o padrão nacional até 2010, quando foi substituído pelo SIRGAS 2000 para maior precisão e compatibilidade internacional.

Para Salvador, o sistema SAD69 / UTM Zone 24S (EPSG:29184) era comumente usado para mapeamento e levantamentos locais. Embora ainda encontrado em dados antigos, o SAD69 apresenta desvios de até 100-200 metros em relação ao SIRGAS 2000, devido a diferenças no datum e elipsoide.

## Outros Catálogos de Sistemas de Referência Alternativos ao EPSG

Além do EPSG, existem outros catálogos de sistemas de coordenadas de referência. O principal alternativo é o catálogo da ESRI (Environmental Systems Research Institute), que utiliza códigos WKID (Well-Known ID). Embora muitos WKID coincidam com códigos EPSG (como WKID 4326 para WGS84), alguns são específicos da ESRI ou diferem ligeiramente em definições. Outros catálogos incluem o da OGP (Oil and Gas Producers) e sistemas nacionais específicos, mas o EPSG e ESRI são os mais amplamente utilizados em softwares GIS como QGIS, ArcGIS e APIs de programação.

Em resumo, o georreferenciamento e os sistemas de referência como EPSG e SIRGAS 2000 são essenciais para a precisão e integração de dados geográficos, garantindo aplicações eficazes em cartografia, planejamento e navegação.