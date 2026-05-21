# Contexto Técnico e Decisões de Design

## 📖 Histórico do Desenvolvimento

Este documento foi desenvolvido através de uma conversa iterativa focada em criar representações técnicas corretas de muros de gravidade com perfil escalonado.

## 🎯 Requisitos Identificados

### 1. Conceitos Fundamentais
- Explicar o que são muros de gravidade escalonados
- Diferenciar de outros tipos de estruturas de contenção
- Mostrar aplicações práticas

### 2. Representação Visual Correta
Após várias iterações, foi estabelecido que:
- **Face externa**: VERTICAL (lado livre)
- **Face interna**: ESCALONADA (contra o terreno retido)
- **Base**: Deve incluir CALCANHAR visível avançando para o lado livre

### 3. Posicionamento do Solo
- Solo retido deve ENCOSTAR nos degraus internos
- Solo deve ir até o TOPO do muro (não acima)
- Solo de fundação deve estar ABAIXO da estrutura
- Terreno natural do lado livre até a base

## 🔧 Decisões Técnicas Importantes

### Configuração do Perfil

**CORRETO:**
```
Face externa vertical | Face interna escalonada
         |            
    ┌────┤            
    │    ├───┐        
    │    │   ├──┐     
    │    │   │  ├───┐ 
    └────┴───┴──┴───┘
    ↑              ↑
 Calcanhar        Pé
```

**INCORRETO** (versões anteriores):
- Degraus no lado externo (face livre escalonada)
- Face interna vertical
- Base sem calcanhar visível
- Solo distante dos degraus

### Elementos Estruturais

#### Base (3 componentes):
1. **Calcanhar (b₁)**:
   - Avança para o lado LIVRE (esquerda da face externa)
   - Típico: 0,1H a 0,2H
   - Função: Aumentar momento resistente, mobilizar empuxo passivo

2. **Corpo (b₂)**:
   - Sob a estrutura vertical
   - Variável conforme projeto

3. **Pé (b₃)**:
   - Sob o terreno retido
   - Típico: 0,2H a 0,4H
   - Função: Aumentar área de base, receber peso do solo

#### Nomenclatura Padronizada:
- **H**: Altura total
- **B**: Largura total da base (B = b₁ + b₂ + b₃)
- **e**: Espessura no topo

### Forças Representadas

1. **Empuxo Ativo (Ea)**: 
   - Horizontal, do solo para o muro
   - Aumenta com a profundidade
   - Aplicado em H/3 da base

2. **Peso Próprio (W)**:
   - Vertical para baixo
   - Concentrado no centro de gravidade

3. **Reação do Solo (R)**:
   - Vertical para cima
   - Distribuída na base

4. **Empuxo Passivo (Ep)**:
   - Horizontal, do terreno natural contra o calcanhar
   - Ajuda na resistência ao deslizamento

## 🎨 Decisões de Design Visual

### Cores dos Diagramas

**Solo:**
- Fundação: Verde claro (#97C459)
- Retido: Âmbar (#EF9F27)
- Natural: Verde (#97C459)

**Estrutura:**
- Concreto: Cinza (#B4B2A9)

**Forças:**
- Empuxo ativo: Coral/Laranja (#D85A30)
- Peso próprio: Azul (#378ADD)
- Reação: Verde (#639922)
- Empuxo passivo: Teal (#1D9E75)

**Dimensões:**
- Linhas de cota: Preto (#333)
- Calcanhar: Teal (#1D9E75)
- Corpo: Azul (#378ADD)
- Pé: Coral (#D85A30)

### Layout e Espaçamento

- ViewBox: 680×540 para diagrama completo
- ViewBox: 600×500 para diagrama de nomenclatura
- Margens adequadas para textos
- Separação clara entre elementos

### Evitar Sobreposições

Correções realizadas:
- Textos divididos em múltiplas linhas quando necessário
- Reposicionamento de labels
- Ajuste de coordenadas para espaçamento adequado
- Tamanhos de fonte variados (10-14px) conforme hierarquia

## 📐 Métodos de Dimensionamento Incluídos

### 1. Método Empírico Simplificado
- Baseado em proporções estabelecidas
- Relações H:B, espessuras, número de degraus
- Exemplo completo para H=6m
- Tabelas práticas

### 2. Método de Coulomb Simplificado
- Cálculo do empuxo ativo (Rankine)
- Coeficiente Ka em função do ângulo de atrito
- Verificação de momentos
- Exemplo numérico

### 3. Tabelas de Referência
- Dimensões por altura (3-8m)
- Fatores de segurança mínimos
- Valores típicos de Ka para diferentes solos
- Capacidade de carga admissível

### 4. Verificações de Estabilidade
- Tombamento (FS ≥ 1,5)
- Deslizamento (FS ≥ 1,5)
- Capacidade de carga (FS ≥ 2,0)
- Critério de excentricidade (e' ≤ B/6)

## 📚 Referências Escolhidas

Critérios de seleção:
- Livros clássicos da área (Das, Bowles, Craig, Terzaghi)
- Normas técnicas brasileiras vigentes (NBR)
- Publicações reconhecidas internacionalmente
- Material didático de instituições respeitadas

## 🔄 Iterações e Correções

### Iteração 1: Conceito inicial
- Diagramas com degraus no lado externo (incorreto)

### Iteração 2: Correção do perfil
- Face externa vertical estabelecida
- Face interna escalonada corrigida

### Iteração 3: Solo e terreno
- Solo retido posicionado encostando nos degraus
- Terreno dos dois lados representado
- Solo de fundação adicionado

### Iteração 4: Calcanhar
- Calcanhar finalmente representado visualmente
- Base avançando para o lado livre
- Cotas dimensionais ajustadas (b₁, b₂, b₃)

### Iteração 5: Refinamentos
- Sobreposições de texto eliminadas
- Espaçamentos otimizados
- Labels e legendas ajustados

## 🎓 Conceitos-Chave Documentados

1. **Muros de gravidade**: Resistem por peso próprio
2. **Perfil escalonado**: Economia de material, melhor distribuição
3. **Face externa vertical**: Estética e economia de espaço
4. **Face interna escalonada**: Espessura onde necessário
5. **Calcanhar**: Fundamental para estabilidade ao tombamento
6. **Empuxo ativo**: Cresce com profundidade, aplicado em H/3
7. **Fatores de segurança**: Mínimos normativos

## 🔍 Detalhes Técnicos Importantes

### Drenagem
- Crítica para durabilidade
- Drenos horizontais espaçados
- Material drenante atrás do muro
- Geotêxtil separador

### Materiais
- Concreto fck ≥ 20 MPa
- Aterro compactado ≥ 95% PN
- Cobrimento adequado

### Execução
- Sequência por etapas
- Compactação cuidadosa
- Cura adequada do concreto
- Controle de qualidade

## 📊 Formato dos Arquivos

### Markdown (.md)
- Formato de texto simples
- Fácil versionamento
- Suporta tabelas, listas, fórmulas
- Referências a arquivos SVG externos

### SVG (Scalable Vector Graphics)
- Gráficos vetoriais escaláveis
- Editáveis em ferramentas gráficas
- Renderizam bem em qualquer tamanho
- Podem ser incorporados em documentos

## 🚀 Possíveis Extensões Futuras

Ver arquivo TODO.md para lista completa de melhorias possíveis.

## 📝 Notas para Continuação no Claude Code

### Contexto Preservado
- Todos os requisitos técnicos estão documentados
- Decisões de design justificadas
- Correções anteriores registradas

### Próximos Passos Sugeridos
- Adicionar mais exemplos práticos
- Criar calculadora interativa
- Expandir seção de drenagem
- Adicionar fotos de obras reais (se disponíveis)
- Desenvolver planilha de dimensionamento

### Arquivos Base para Edição
- `muro_perfil_completo.svg` - Diagrama principal
- `muro_nomenclatura.svg` - Diagrama de dimensões
- `index.md` - Documento técnico

Todos os arquivos estão prontos para continuação do trabalho.
