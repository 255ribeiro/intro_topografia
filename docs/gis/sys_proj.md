# Sistemas de Coordenadas Projetados

## Principais Tipos de Projeções

=== "Projeções Cilíndricas"
    Como a Mercator, usada em mapas mundiais para navegação, mas distorce áreas polares.

=== "Projeções Cônicas"
    Como a Lambert Conformal Conic, ideal para regiões de latitudes médias, preservando formas e ângulos.

=== "Projeções Azimutais"
    Como a Estereográfica, usada para regiões polares, preservando direções.

## Principais Sistemas de Projeção

=== "Mercator"
    A projeção de Mercator é uma projeção cilíndrica que preserva ângulos e direções, sendo útil para navegação marítima. No entanto, distorce áreas e distâncias, especialmente nas regiões polares. [Saiba mais](https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_de_Mercator)

=== "UTM"
    Universal Tranversa de Mercator (UTM) é um sistema de coordenadas projetadas que divide a Terra em 60 zonas longitudinais, cada uma de 6° de largura. Dentro de cada zona, as coordenadas são expressas em metros, com origem no equador (norte) e no meridiano central da zona (leste). É amplamente usado para mapeamento de precisão em escalas locais.

    Breve Histórico da UTM

    O sistema UTM foi desenvolvido durante a Segunda Guerra Mundial pelos Estados Unidos e Reino Unido para padronizar mapas militares. Baseado na projeção Transversa de Mercator, foi adotado pela OTAN em 1947 e posteriormente pela União Geográfica Internacional. Hoje, é um padrão global para coordenadas planas em aplicações como GPS e SIG. [Saiba mais](https://pt.wikipedia.org/wiki/Universal_Transverse_Mercator)

=== "Lambert"
    A projeção de Lambert preserva ângulos e é adequada para regiões de latitudes médias, como continentes. É comumente usada em mapas nacionais e regionais. [Saiba mais](https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_c%C3%B4nica_conforme_de_Lambert)

=== "Albers"
    A projeção de Albers preserva áreas, sendo útil para análises que requerem medições precisas de superfícies, como em estudos ambientais e demográficos.
    [Saiba mais](https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_de_Albers)

=== "Azimutal Equidistante"
    Essa projeção preserva distâncias a partir de um ponto central, sendo usada para mapas polares ou representações de rotas aéreas.
    [Saiba mais](https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_azimutal_equidistante)