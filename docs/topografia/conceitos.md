# Conceitos de Topografia e Geodésia

## O que é Topografia?

A **Topografia** é a área que mede e representa, em escala, porções limitadas da superfície terrestre. Em geral, ela é aplicada em áreas locais (lotes, bairros, corredores viários, canteiros de obra), com foco em:

- posição dos pontos no plano (X, Y);
- variação de altura (Z);
- representação do relevo e dos elementos existentes;
- apoio a projeto, execução e controle de obras.[^1]

Em termos práticos, a topografia transforma medições de campo em produtos técnicos como plantas, perfis, curvas de nível e memoriais descritivos.

## O que é Geodésia?

A **Geodésia** é a ciência que estuda a forma, as dimensões, o campo da gravidade e a orientação da Terra no espaço. Ela define os referenciais que permitem posicionamento consistente em escala regional e global.[^2]

No contexto de SIG e cartografia, a geodésia fornece a base para:

- datum geodésico;
- sistemas de coordenadas geográficas e projetadas;
- transformação entre referenciais;
- integração de dados de diferentes origens (GNSS, mapas, imagens e levantamentos).

## Diferença entre Topografia e Geodésia

As duas áreas são complementares, mas atuam em escalas e objetivos diferentes:

- **Topografia**: detalhamento local da superfície para projetos e obras.
- **Geodésia**: definição dos referenciais globais/regionais que garantem posicionamento correto.

Uma forma simples de entender:

- a geodésia define **onde** estamos no sistema de referência da Terra;
- a topografia detalha **como** é o terreno naquele local.

## Relação com a prática profissional

Em projetos reais, os dois campos caminham juntos. Por exemplo:

1. escolhe-se o sistema de referência (base geodésica);
2. faz-se o levantamento topográfico local;
3. integra-se tudo no SIG/CAD para análise e projeto.

Sem referência geodésica correta, dados podem ficar deslocados. Sem topografia bem executada, faltará precisão no detalhe da obra.[^3]

## Planimetria e Altimetria

Dentro da topografia, dois conceitos aparecem com frequência: **planimetria** e **altimetria**.

### Planimetria

A **planimetria** trata da posição dos pontos no plano horizontal. Ela representa a localização relativa dos elementos do terreno por meio de distâncias, ângulos e coordenadas planas, sem considerar diretamente as diferenças de altura.

Na prática, a planimetria é usada para definir:

- limites de lotes e terrenos;
- eixos de vias e alinhamentos;
- posição de construções, cercas, postes e outros elementos no plano;
- coordenadas X e Y, ou E e N.

### Altimetria

A **altimetria** trata da componente vertical do terreno, ou seja, das alturas e diferenças de nível entre os pontos. Ela permite representar o relevo e entender como a superfície sobe, desce ou se mantém aproximadamente constante.

Na prática, a altimetria é usada para definir:

- cotas e altitudes;
- perfis longitudinais e transversais;
- curvas de nível;
- declividades e desníveis.

### Uso conjunto

Em um levantamento topográfico completo, planimetria e altimetria trabalham juntas:

- a **planimetria** responde onde o ponto está no plano;
- a **altimetria** responde qual é a sua posição vertical.

Por isso, um ponto do terreno pode ser descrito de forma mais completa por coordenadas horizontais e um valor de altura, como **P = (X, Y, Z)**.

## Leitura complementar

Para a discussão sobre distância-limite de aplicação da topografia, critérios técnicos e interpretação normativa, veja:

- [Limites de aplicação da Topografia e da Geodésia](limites_aplicacao_topografia.md)

[^1]:
    Referência normativa para levantamento topográfico no Brasil: ABNT NBR 13133.
    [https://www.abntcatalogo.com.br/norma.aspx?ID=4512](https://www.abntcatalogo.com.br/norma.aspx?ID=4512)

[^2]:
    Referência institucional sobre Geodésia no Brasil: IBGE - Geodésia.
    [https://www.ibge.gov.br/geociencias/geodesia.html](https://www.ibge.gov.br/geociencias/geodesia.html)

[^3]:
    Referência aplicada ao georreferenciamento e padronização técnica: INCRA.
    [https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/georreferenciamento](https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/georreferenciamento)
