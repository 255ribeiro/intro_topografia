# QGIS → CivilCraft: Guia de Transferência de Camadas

[CadCraft Studio](https://getcadcraft.com/great-eight)

## Visão Geral

O CivilCraft (código aberto, Apache-2.0) suporta os seguintes formatos de **importação**:

| Formato | O que carrega |
|---------|---------------|
| **LandXML** | Superfícies (TIN), pontos, linhas de quebra, alinhamentos, redes de tubulação |
| **IFC 4.3** | Alinhamentos e superfícies |
| **Arquivos CSV de pontos** | Pontos de levantamento (N, E, Z, descrição) |
| **PLY** | Nuvens de pontos / malhas |

O caminho principal de intercâmbio a partir do QGIS é o **LandXML**.

---

## Fluxo de Trabalho Passo a Passo

### 1. Preparar as camadas no QGIS

- Certifique-se de que o SRC do projeto é um **sistema de coordenadas projetado** (ex.: UTM, EPSG:327xx).
- Para **terreno**: você precisa de:
  - Uma **camada de malha** (`.2dm`) construída a partir de curvas de nível/pontos, **ou**
  - Um **MDE raster** (GeoTIFF, etc.)
- Para **linhas de quebra / linhas de feature**: camadas de linhas vetoriais com valores de Z.
- Para **pontos**: camadas de pontos vetoriais com Z ou um atributo de elevação.
- Para **alinhamentos**: camadas de linhas vetoriais (para serem exportadas como alinhamentos LandXML, se suportado).

### 2. Criar uma malha TIN (se partindo de curvas de nível)

1. **Caixa de Ferramentas de Processamento → Malha → Criação de Malha TIN**
2. Entrada: sua camada de curvas de nível
3. Se as curvas são 2D: selecione o atributo de elevação em *Valor no vértice*
4. Se as curvas são 3D: marque *Usar coordenada Z para valor no vértice*
5. Saída: salvar como `.2dm`

### 3. Exportar para LandXML

#### Comparação de plugins

**LandXML to Mesh** (Lutra Consulting, ID 3211)

| | |
|---|---|
| **Prós** | Bidirecional (malha ↔ LandXML); da Lutra Consulting (dev experiente de QGIS); round-trip testado (SRC + geometria preservados); lida com SRC via `ogcWktCode`; suporte a QGIS 4 via PR mesclado (ago/2026) |
| **Contras** | Requer uma camada de malha `.2dm` intermediária (etapa extra); último release publicado é v0.2.0 (dez/2023) — a correção para QGIS 4 pode ainda não estar no repositório; sem validação/QC embutido; apenas exporta superfícies (pontos + faces), sem linhas de quebra ou alinhamentos; produz arquivos muito grandes para malhas densas; sem controle sobre a triangulação (usa a malha como está) |

**LandXML Surface Tools** (txttxtx, ID 6337)

| | |
|---|---|
| **Prós** | Sem malha intermediária — raster → LandXML diretamente; inclui um algoritmo de **validação QC** (triângulos degenerados, vazamento de nodata, mistura de unidades, viés vertical, RMS); controle sobre tamanho de célula, extensão, unidades lineares, deslocamento de elevação; ativamente mantido (v1.0.2, set/2026); compatível com Qt6; produz relatório HTML de QC + camada de pontos com piores resíduos |
| **Contras** | Requer um MDE raster como entrada (não aceita curvas de nível vetoriais diretamente); a saída não tem SRC ou datum vertical (deve ser pré-projetado); lida apenas com superfícies (sem linhas de quebra, alinhamentos, redes de tubulação); usa triangulação de grade regular (2 triângulos/célula) — menos eficiente que um TIN irregular para terreno suave; mais novo e menos testado em campo |

**LandXML Road & Terrain GIS Tools** (EdmondAkello)

| | |
|---|---|
| **Prós** | Muito rico em funcionalidades para *importação* (LandXML → QGIS): TIN para GeoTIFF, alinhamentos, perfis, seções transversais, volumes de terraplenagem, tratamento de faces ocultas; lida com espirais de Clothoid com precisão; analisa arquivos de 75 MB em <0,4 s; testado contra QGIS 3.44 |
| **Contras** | **Apenas importação** — não exporta para LandXML; não útil para a direção QGIS → CivilCraft; projetado principalmente para revisão de arquivos do Civil 3D / OpenRoads |

**LandXml import plugin** (LINZ, ID 357)

| | |
|---|---|
| **Prós** | Importa parcelas, nós e observações do LandXML do Landonline da LINZ; leve |
| **Contras** | **Apenas importação**; projetado especificamente para dados cadastrais da Nova Zelândia; não funcionará com LandXML de outras fontes; irrelevante para exportação |

**LandXML2QGIS** (ID 1794)

| | |
|---|---|
| **Prós** | Importa LandXML cadastral de Victoria (Austrália) para camadas QGIS |
| **Contras** | **Apenas importação**; limitado a um formato regional específico; irrelevante para exportação |

> **Para seu caso de uso (QGIS → CivilCraft), os dois plugins relevantes de exportação são:**
> - **LandXML to Mesh** (malha → LandXML) — melhor quando você já tem um `.2dm`
> - **LandXML Surface Tools** (raster → LandXML) — melhor quando você tem um MDE e quer QC

---

#### Opção A: A partir de uma camada de Malha (TIN)

**Plugin:** `LandXML to Mesh`

1. Instalar em **Plugins → Gerenciar e Instalar Plugins** (buscar "LandXML to Mesh")
2. **Caixa de Ferramentas de Processamento → LandXML → Convert Meshes to LandXML surfaces**
3. Entrada: sua camada de malha `.2dm`
4. Saída: salvar como `.xml`
5. O arquivo contém um `<Surface>` com `<Points>` e `<Faces>`

#### Opção B: A partir de um MDE Raster

**Plugin:** `LandXML Surface Tools`

1. Instalar em **Plugins → Gerenciar e Instalar Plugins** (buscar "LandXML Surface Tools")
2. **Caixa de Ferramentas de Processamento → LandXML Surface Tools → Raster DEM to LandXML surface**
3. Entrada: seu raster (GeoTIFF, etc.)
4. Definir: tamanho de célula, extensão, unidades lineares (metros), deslocamento de elevação opcional
5. Saída: salvar como `.xml`
6. Executar **Check LandXML surface (QC)** para validar antes de importar
7. Sem malha intermediária — a grade raster é triangulada diretamente

#### Opção C: A partir de camadas individuais de pontos/linhas

**Abordagem manual / script:**

- Exportar pontos como CSV (`Point, Northing, Easting, Z, Description`) → importar diretamente no CivilCraft via **importação de pontos CSV**
- Para linhas de quebra: escrever um pequeno script Python para gerar os elementos XML `<Breakline>` (nenhum plugin atualmente exporta linhas de quebra para LandXML a partir do QGIS)

### 4. Importar no CivilCraft

1. Abrir o CivilCraft (navegador em [getcadcraft.com/use/civilcraft](https://getcadcraft.com/use/civilcraft) ou app desktop)
2. **Arquivo → Importar → LandXML** (ou o botão equivalente de importação)
3. Selecionar seu arquivo `.xml`
4. A superfície (e quaisquer linhas de quebra/pontos) aparecem no projeto
5. Para CSV: **Arquivo → Importar → Pontos CSV**

### 5. Verificar

- Conferir que a extensão da superfície e as elevações correspondem aos dados de origem
- Verificar o alinhamento do sistema de coordenadas (LandXML **não** transforma SRC automaticamente)
- Se a superfície aparecer deslocada, o SRC do projeto QGIS provavelmente não corresponde ao que o CivilCraft espera

---

## Plugins QGIS para LandXML (Tabela Resumo)

| Plugin | ID | Direção | Origem → LandXML | Observações |
|--------|----|---------|------------------|-------------|
| **LandXML to Mesh** | 3211 | Ambos | Malha `.2dm` → `.xml` | Lutra Consulting. Round-trip testado. Sem QC. |
| **LandXML Surface Tools** | 6337 | Apenas exportação | MDE raster → `.xml` | txttxtx. Inclui ferramenta de QC. Ativamente mantido. |
| **LandXML Road & Terrain GIS Tools** | — | Apenas importação | `.xml` → camadas QGIS | EdmondAkello. Importação rica (TIN, alinhamentos, perfis, volumes). |
| **LandXml import plugin** | 357 | Apenas importação | `.xml` → camadas QGIS | LINZ. Somente dados cadastrais NZ. |
| **LandXML2QGIS** | 1794 | Apenas importação | `.xml` → camadas QGIS | Dados cadastrais de Victoria. |

---

## Solução de Problemas

| Problema | Solução |
|----------|---------|
| Superfície aparece em local errado | Descompasso de SRC. Certifique-se de que o SRC do projeto QGIS corresponde ao que o CivilCraft espera. LandXML não tem transformação de SRC. |
| Arquivo muito grande (>20 MB) | Reduzir resolução da malha ou tamanho de célula do raster antes da exportação. LandXML é ASCII/XML — inerentemente verboso. |
| CivilCraft não exibe a superfície | Verificar que o `.xml` tem um elemento `<Surface>` válido com `<Points>` e `<Faces>`. Usar a ferramenta de QC do LandXML Surface Tools para validar. |
| Linhas de quebra ausentes | Nenhum plugin QGIS atualmente exporta linhas de quebra para LandXML. Escrever um script Python ou adicioná-las manualmente no CivilCraft após a importação. |
| Deslocamento de elevação | LandXML não armazena datum vertical. Certifique-se de que o MDE está no sistema de alturas correto (ex.: elipsoidal vs. ortométrico). |
| Versão do CivilCraft muito antiga | Usar a mais recente (0.8.1+). Verificar no [GitHub](https://github.com/getcadcraft/civilcraft) para atualizações. |

---

## Estrutura de Arquivo Após Importação no CivilCraft

O CivilCraft salva projetos como:
- `project.ifc` — modelo IFC 4.3 (legível por outras ferramentas BIM)
- `project.civilcraft.json` — regras de projeto e metadados

Ambos ficam na mesma pasta.