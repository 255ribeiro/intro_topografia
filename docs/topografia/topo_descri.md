# Elementos de Descrição em Topografia

## O que é descrição topográfica?

Na topografia, descrever um ponto, uma linha ou um terreno significa registrar informações de **posição horizontal**, **posição vertical** e **direção**. Esses elementos permitem representar o relevo, calcular distâncias, projetar obras e comunicar resultados de forma técnica.

Os termos mais comuns nesse processo são: **cota**, **altitude**, **azimute**, **rumo**, **declividade**, **curvas de nível** e **coordenadas**.[^1]

## Cota e Altitude

Embora os dois termos estejam ligados à altura, eles não são exatamente a mesma coisa.

### Cota

A **cota** é a altura de um ponto em relação a um **plano de referência adotado no projeto**. Esse plano pode ser local (por exemplo, piso acabado = 0,00 m) ou oficial, dependendo do levantamento.

- Uso comum: obras civis, terraplenagem e projetos locais.
- Unidade mais usada: metro (m).

### Altitude


A **altitude** é a altura de um ponto em relação ao **nível médio do mar** (ou a um datum vertical oficial).[^2]

- Uso comum: cartografia, geodesia, mapas regionais e dados GNSS.
- Unidade mais usada: metro (m).

### Diferença prática

- Cota: referência local ou de projeto.
- Altitude: referência geodésica/global.

Um mesmo ponto pode ter **altitude 52,30 m** e, no projeto local, **cota 3,10 m**.

## Azimute e Rumo

Azimute e rumo são formas de expressar direção no plano horizontal.

### Azimute

O **azimute** é o ângulo medido a partir do **Norte**, no sentido horário, variando de **0 graus a 360 graus**.[^3]

- Norte: 0 graus
- Leste: 90 graus
- Sul: 180 graus
- Oeste: 270 graus

Exemplo: uma linha com azimute 135 graus aponta para sudeste.

### Rumo

O **rumo** é o menor ângulo entre a direção da linha e o eixo Norte-Sul, sempre entre **0 graus e 90 graus**, acompanhado do quadrante.[^3]

- NE (Norte-Leste)
- SE (Sul-Leste)
- SW (Sul-Oeste)
- NW (Norte-Oeste)

Exemplo: rumo S 45 graus E.

### Conversão rápida (ideia geral)

- Azimute no 1 quadrante (0 a 90): rumo N az E
- Azimute no 2 quadrante (90 a 180): rumo S (180 - az) E
- Azimute no 3 quadrante (180 a 270): rumo S (az - 180) W
- Azimute no 4 quadrante (270 a 360): rumo N (360 - az) W

## Coordenadas planimétricas e altimétricas

Para descrever um ponto em topografia, é comum usar:

- **Planimetria**: coordenadas X e Y (ou E e N), que indicam a posição no plano.
- **Altimetria**: valor Z (cota ou altitude), que indica a posição vertical.[^4]

Assim, um ponto completo pode ser expresso como: **P = (E, N, Z)**.

## Curvas de nível

As **curvas de nível** são linhas que unem pontos de mesma cota/altitude. Elas ajudam a interpretar o relevo.[^5]

- Curvas muito próximas: terreno mais inclinado.
- Curvas mais afastadas: terreno mais suave.
- Curvas fechadas podem indicar morros ou depressões (dependendo da leitura das cotas).

## Declividade

A **declividade** indica o quanto o terreno sobe ou desce entre dois pontos.

Fórmula em percentual:

$$
declividade (\%) = \frac{\Delta h}{d} \times 100
$$

Onde:

- $\Delta h$: diferença de altura entre dois pontos.
- $d$: distância horizontal entre os pontos.

Exemplo: se um trecho sobe 2 m em 20 m horizontais, a declividade é 10%.

## Distâncias na Topografia

### Distância horizontal

É a distância projetada no plano. É a mais usada em plantas topográficas e em cálculos de área.

### Distância inclinada

É a distância real medida ao longo da inclinação do terreno.

Em muitos trabalhos, converte-se a distância inclinada para horizontal para manter consistência dos cálculos planimétricos.

## Precisão, erro e tolerância

Toda medição topográfica possui incerteza. Por isso, é importante controlar:

- **Precisão instrumental** (estação total, GNSS, nível).
- **Método de levantamento**.
- **Fechamento angular e linear** em poligonais.
- **Padronização de datum e sistema de coordenadas**.[^6]

Sem esse controle, as descrições (cotas, azimutes e coordenadas) podem ficar incoerentes entre si.

## Resumo

Os principais elementos de descrição em topografia formam um conjunto integrado:

- **Cota/altitude**: descrevem a componente vertical.
- **Azimute/rumo**: descrevem a orientação das linhas.
- **Coordenadas**: definem a localização dos pontos.
- **Curvas de nível e declividade**: descrevem a forma do relevo.

Com esses elementos bem definidos, é possível representar terrenos com clareza e apoiar análises em QGIS, CAD e modelagem 3D.

[^1]:
	Referência geral de topografia e geodesia no contexto brasileiro: Instituto Brasileiro de Geografia e Estatística (IBGE), Geodesia.
	[https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico.html](https://www.ibge.gov.br/geociencias/informacoes-sobre-posicionamento-geodesico.html)

[^2]:
	Sobre referência vertical e altitude no Brasil: IBGE, Sistema Geodésico Brasileiro e referência altimétrica oficial.
	[https://www.ibge.gov.br/geociencias/geodesia.html](https://www.ibge.gov.br/geociencias/geodesia.html)

[^3]:
	Definições técnicas de ângulos e direções (azimute/rumo) em normalização técnica de levantamentos: ABNT, NBR 13133 (levantamento topográfico).
	[https://www.abntcatalogo.com.br/norma.aspx?ID=4512](https://www.abntcatalogo.com.br/norma.aspx?ID=4512)

[^4]:
	Sistemas de coordenadas e códigos oficiais (exemplo SIRGAS 2000 / UTM): EPSG Registry.
	[https://epsg.io/31984](https://epsg.io/31984)

[^5]:
	Conceitos cartográficos de curvas de nível e relevo em material de referência didática: USGS, Topographic Maps.
	[https://www.usgs.gov/faqs/what-a-topographic-map](https://www.usgs.gov/faqs/what-a-topographic-map)

[^6]:
	Documento de apoio para padronização de levantamentos e representação topográfica no Brasil: INCRA, Norma Técnica para Georreferenciamento de Imóveis Rurais.
	[https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/georreferenciamento](https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/georreferenciamento)
