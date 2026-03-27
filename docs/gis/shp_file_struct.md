# Estrutura de Arquivos Shapefile

## O que é um Shapefile?

Shapefile é um formato de arquivo geoespacial vetorial introduzido pela ESRI em 1996 como parte do ArcView GIS 3.x. Apesar do nome, não é um único arquivo, mas um conjunto de arquivos que armazenam geometria, atributos e índices de entidades espaciais (pontos, linhas e polígonos).

## Histórico de Criação

- 1996: A ESRI lançou o formato Shapefile para ArcView GIS 3.x, visando um padrão aberto e fácil de manipular para dados vetoriais.
- O formato ganhou ampla adoção em GIS por ser leve, simples e compatível com diversos softwares, incluindo QGIS, gvSIG e bibliotecas como GDAL/OGR.
- Evoluiu com extensões como `.shx`, `.dbf`, `.prj`, `.sbn`, `.sbx`, e outros para aumentar funcionalidade e desempenho.

## Conjunto de Arquivos de um Shapefile

Um shapefile completo normalmente inclui pelo menos 3 arquivos com o mesmo nome base:

1. `.shp` (obrigatório)
      - Armazena a geometria das feições em formato binário (pontos, linhas, polígonos), usando coordenadas X/Y (e opcionalmente Z/M).
      - Formato binário com cabeçalho e registros de objeto geométrico.

2. `.shx` (obrigatório)
      - Índice espacial em formato binário, contém offsets e comprimentos de cada registro em `.shp`.
      - Permite acesso aleatório eficiente às feições.

3. `.dbf` (obrigatório)
      - Atributos tabulares de cada feição (como nomes, tipos, valores).
      - Formato dBASE binário (estrutura binária com campos textuais e numéricos legíveis; nomes de campos e dados de texto são armazenados como strings ASCII, facilitando leitura em ferramentas como editores hexadecimais ou bibliotecas GIS).

Arquivos auxiliares opcionais (mas comuns):

1. `.prj` (recomendado)[^1]
    - Texto contendo a descrição do sistema de coordenadas em WKT (plain text).
    - Define Datum, projeção e unidades. Permite conversão precisa entre sistemas.

1. `.sbn` / `.sbx` (opcionais)
    - Índices espaciais binários usados por ArcGIS para aceleração de consultas espaciais.

1. `.cpg` (opcional)
    - Texto com codificação de caracteres do `.dbf` (UTF-8, ISO-8859-1, etc.).

1. `.qix` / `.idx` (opcionais)
      - Índices espaciais usados por bibliotecas como GDAL/OGR.

## Como os arquivos se conectam e se complementam

- `.shp` contém a geometria primária; cada registro geométrico tem um ID de registro.
- `.shx` contém o índice para encontrar rapidamente o offset de cada registro no `.shp`. Sem `.shx`, o shapefile pode ser lido, mas o desempenho cai drasticamente.
- `.dbf` contém a tabela de atributos com um número de registros igual ao número de feições geométricas em `.shp`. A correspondência é feita pela ordem dos registros (linha `N` no `.dbf` corresponde à feição `N` no `.shp`).
- `.prj` define o sistema de referência espacial do `.shp`; sem ele, o software não sabe a projeção e o datum, o que pode comprometer a integração com outros dados.
- Arquivos de índice adicionais (`.sbn`, `.sbx`, `.qix`) aumentam o desempenho de consultas espaciais, mas a estrutura básica do dado permanece em `.shp` + `.shx` + `.dbf`.

## Formato: Plain Text x Binário

- Plain text:
  - `.prj`: WKT textual do CRS
  - `.cpg`: Nome da codificação de caracteres (opcional)

- Binário:
  - `.shp`: Geometria vetorial (obrigatório)
  - `.shx`: Índice de geometria (obrigatório)
  - `.dbf`: Atributos (obrigatório, dBASE binary)
  - `.sbn` / `.sbx`: Índice espacial ArcGIS (opcional)
  - `.qix` / `.idx`: Índice espacial GDAL/OGR (opcional)

## Observações

- Para garantir integridade, sempre mantenha o mesmo nome base (antes da extensão) para todos os arquivos.
- Arquivos adicionais como `.xml` (metadados) podem também acompanhar o shapefile para documentação.
- O formato é amplamente compatível, mas tem limitações:
  - tamanho máximo de arquivo (~2 GB em algumas implementações);
  - nomes de campos limitados (até 10 caracteres em dBASE III/IV, 254 em DBF64/Excel);
  - alcance de tipos de dados restrito em `.dbf`: suporte nativo para números, texto, data e lógic, mas sem tipos modernos como datetime com hora, hora, timestamp, JSON, geometria complexa (multipoligonal, multilinhas com atributos avançados), etc.;
  - precisão numérica limitada: valores numéricos em `.dbf` podem perder precisão (geralmente até 15 dígitos significativos) e podem ser truncados em conversões entre diferentes softwares.

[^1]:
    Sem `.prj`, o shapefile não carrega automaticamente a referência espacial; fica “desconhecido”. Muitos softwares pedem ao usuário que informe o CRS manualmente ao abrir o shapefile, outros tentam inferir por contexto:

    - nome do arquivo/nome de pasta (`utm_24s.shp`);
    - metadados em `.xml`, `.aux.xml` ou arquivo companion;
    - dataset existente em projeto com CRS definido.

    Não existe "procedimento seguro”. Assumir WGS84 ou um CRS local pode causar erros de dezenas a centenas de metros.
    !!! warning
        Sempre utilize, armazene e compartilhe o arquivo `.prj`!!!
