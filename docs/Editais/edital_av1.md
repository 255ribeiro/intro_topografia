# Edital Av1

Bem-vindo ao edital da Avaliação 1 (Av1) da Introdução à topografia

## Informações Gerais

- **Disciplina:** Introduçao a Topografia
- **Avaliação:** Av1
- **Data de entrega:** 30/10/2025

## Conteúdo Avaliado

- Introdução ao QGIS;
- Manipulação e obtenção de dados geoespaciais;
- Experimentar a  servidores de dados raster e vetoriais;
- Entendimento de conceitos básicos de Geodésia e GIS;
- Entendimento dos sistemas de coordenadas de referências;
- apresentação do formato shapefile;
- relação entre feições (geometria) e campos (dados) de um arquivo shapefile;
- Edição, criação e conversão de campos em camadas vetoriais;
- transformação de camadas vetoriais 2D em 3D pelo valor de um campo;
- Exportação de geometria e informações;
- geração da geometria 3d de um terreno.

## Critérios de Avaliação

- Entrega dentro do prazo;
- Clareza e organização dos dados;
- Aplicação correta das ferramentas do QGIS;
- Entendimento dos conceitos básicos de Georreferenciamento e Geodésia;
- Apresentação dos resultados.

## Orientações

- O trabalho pode ser realizado individualmente ou em equipes de Até 4 pessoas
- Organize suas pastas do projeto
- Configure o Qgis para acessar os Seguntes serviços:
  - Mapas do Google como Blocos XYZ
  - Servidor WFS da Cartografia da Prefeitura Municipal de Salvador
  - Servidores com imagens MDT para a região de Salvador
- Crie um projeto no Qgis, carregue um mapa do Google para referência.
- Escolha um terreno em Salvador que atenda ao critério:
  - desnível >= 8 m
  - Crie uma camada de pontos e marque um ponto dentro da poligonal do terreno escolhido.
  - Baixe os dados da prefeitura de Salvador relativos ao seu terreno e entorno
- Recorte as camadas e salve em disco na pasta adequada
- Em uma camada de polígonos, copie o polígono do terreno selecionado.
- Coloque informações descritivas do terreno nesta camada.
  - Sugestão: Use o plugin LFTools (https://plugins.qgis.org/plugins/lftools/)
- A partir das curvas de nível, gere uma camada de curvas de nível em 3D
- Para efeito didático gere curvas de nível com duas fontes diferentes de MTD
- Exporte os arquivos para DXF
- Abra o arquivo gerado em um CAD edite as cores dos layers e mova o terreno para próximo da origem utilizando o ponto de referência definido no Google earth.
- Em um programa de modelagem 3D, gere uma superfície a partir das curvas de nível 3D
- Compacte todas as suas pastas e envie um arquivo único na tarefa aberta no ambiente virtual da disciplina

---
