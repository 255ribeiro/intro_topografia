# Tipos de Dados dos SIG

Os dados geográficos dos SIG podem ser classificados em dois tipos principais: **vetoriais** e **raster**.

- **Dados Vetoriais**: Representam feições geográficas como pontos, linhas e polígonos. São ideais para representar limites, redes e locais específicos. Exemplos incluem shapefiles (.shp) e GeoJSON.
- **Dados Raster**: Consistem em uma grade de células (pixels) com valores atribuídos. São usados para representar fenômenos contínuos, como elevação, temperatura ou imagens de satélite. Exemplos incluem arquivos TIFF e JPEG.

Em ambos os casos os dados devem estar atrelados à algum sistema de coordenadas de referência. Os sistema de coordenadas de referências se dividem em Geográficos e projetados, sendo o sistema UTM o mais utilizado dentre os sistemas projetados. Os sistemas SIG podem usar um dos tipos de dados ou uma combinação de dados dos dois tipos.