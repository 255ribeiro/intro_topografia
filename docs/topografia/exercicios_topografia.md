# Exercícios de Topografia: Cota, Altitude, Azimute e Rumo

## Objetivo

Praticar os principais elementos de descrição topográfica apresentados em aula:

- cota e altitude;
- azimute e rumo;
- coordenadas planimétricas e altimétricas;
- curvas de nível e declividade.

## Parte A: Conceitos Rápidos

1. Explique, com suas palavras, a diferença entre **cota** e **altitude**.
2. Um ponto pode ter cota e altitude diferentes? Justifique com um exemplo.
3. Defina **azimute** e informe seu intervalo angular.
4. Defina **rumo** e informe seu intervalo angular.
5. Qual a principal diferença prática entre usar azimute e usar rumo em um memorial descritivo?

## Parte B: Conversão entre Azimute e Rumo

Converta os azimutes abaixo para rumo:

1. 35 graus
2. 120 graus
3. 215 graus
4. 300 graus

Agora converta os rumos abaixo para azimute:

1. N 20 graus E
2. S 35 graus E
3. S 10 graus W
4. N 75 graus W

## Parte C: Declividade

Use a fórmula abaixo:

$$
declividade (\%) = \frac{\Delta h}{d} \times 100
$$

Calcule a declividade para os casos:

1. $\Delta h = 1{,}8$ m e $d = 30$ m
2. $\Delta h = 4{,}0$ m e $d = 25$ m
3. $\Delta h = 0{,}9$ m e $d = 12$ m

Questão extra:

4. Em qual dos trechos acima o terreno é mais inclinado?

## Parte D: Leitura de Curvas de Nível

Responda:

1. Quando as curvas de nível estão muito próximas, o que isso indica?
2. Quando as curvas estão afastadas, o que isso indica?
3. Por que curvas de nível são importantes para projetar drenagem e acessos?

## Parte E: Mini atividade no QGIS

1. Abra um projeto no QGIS com uma base de Salvador.
2. Carregue uma camada vetorial com curvas de nível.
3. Escolha um trecho e identifique:
   - um ponto mais alto;
   - um ponto mais baixo;
   - a diferença de cota entre eles.
4. Estime a declividade média entre dois pontos escolhidos.
5. Registre os resultados em uma tabela com colunas:
   - Ponto;
   - Coordenada E;
   - Coordenada N;
   - Cota/Altitude;
   - Observação.

## Gabarito Resumido (Partes B e C)

### Parte B

Azimute para rumo:

1. 35 graus -> N 35 graus E
2. 120 graus -> S 60 graus E
3. 215 graus -> S 35 graus W
4. 300 graus -> N 60 graus W

Rumo para azimute:

1. N 20 graus E -> 20 graus
2. S 35 graus E -> 145 graus
3. S 10 graus W -> 190 graus
4. N 75 graus W -> 285 graus

### Parte C

1. 6%
2. 16%
3. 7,5%
4. Mais inclinado: caso 2.

## Fontes de Apoio

- IBGE - Geodesia: [https://www.ibge.gov.br/geociencias/geodesia.html](https://www.ibge.gov.br/geociencias/geodesia.html)
- EPSG (SIRGAS 2000 / UTM 24S): [https://epsg.io/31984](https://epsg.io/31984)
- USGS - Topographic Maps: [https://www.usgs.gov/faqs/what-a-topographic-map](https://www.usgs.gov/faqs/what-a-topographic-map)
- INCRA - Georreferenciamento: [https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/georreferenciamento](https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/georreferenciamento)
