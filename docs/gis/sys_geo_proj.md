# Sistemas de Projeção Geográfica

## Tipos de Dados Geográficos

Os dados geográficos podem ser classificados em dois tipos principais: **vetoriais** e **raster**.

- **Dados Vetoriais**: Representam feições geográficas como pontos, linhas e polígonos. São ideais para representar limites, redes e locais específicos. Exemplos incluem shapefiles (.shp) e GeoJSON.
- **Dados Raster**: Consistem em uma grade de células (pixels) com valores atribuídos. São usados para representar fenômenos contínuos, como elevação, temperatura ou imagens de satélite. Exemplos incluem arquivos TIFF e JPEG.

Em ambos os casos os dados devem estar atrelados à algum sistema de coordenadas de referência. Os sistema de coordenadas de referências se dividem em Geográficos e projetados, sendo o sistema UTM o mais utilizado dentre os sistemas projetados.

## Diferenças entre Coordenadas Geográficas e Projetadas

As coordenadas geográficas representam posições na superfície da Terra usando latitude e longitude, baseadas no elipsoide de referência. Elas são expressas em graus, minutos e segundos, e são ideais para navegação global e cálculos de distâncias grandes, mas não preservam áreas, distâncias ou ângulos de forma precisa em escalas locais.

As coordenadas projetadas, por outro lado, transformam as coordenadas geográficas em um plano cartesiano (x, y), facilitando medições precisas de distâncias, áreas e direções em regiões específicas. Elas são essenciais para mapeamento detalhado, mas introduzem distorções dependendo da projeção usada.

## Principais Sistemas de Projeção

### Projeção de Mercator
A projeção de Mercator é uma projeção cilíndrica que preserva ângulos e direções, sendo útil para navegação marítima. No entanto, distorce áreas e distâncias, especialmente nas regiões polares.

[Saiba mais](https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_de_Mercator)

### Projeção Transversa de Mercator (UTM)
A Transversa de Mercator é usada no sistema UTM, dividindo a Terra em zonas longitudinais. Preserva distâncias ao longo de meridianos centrais e é ideal para mapeamento de precisão em faixas estreitas.

[Saiba mais](https://pt.wikipedia.org/wiki/Universal_Transverse_Mercator)

### Projeção Cônica Conforme de Lambert
A projeção de Lambert preserva ângulos e é adequada para regiões de latitudes médias, como continentes. É comumente usada em mapas nacionais e regionais.

[Saiba mais](https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_c%C3%B4nica_conforme_de_Lambert)

### Projeção de Albers (Área Igual)
A projeção de Albers preserva áreas, sendo útil para análises que requerem medições precisas de superfícies, como em estudos ambientais e demográficos.

[Saiba mais](https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_de_Albers)

### Projeção Azimutal Equidistante
Essa projeção preserva distâncias a partir de um ponto central, sendo usada para mapas polares ou representações de rotas aéreas.

[Saiba mais](https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_azimutal_equidistante)