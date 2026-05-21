# Muros de Gravidade com Perfil Escalonado

## 📋 Visão Geral

Este projeto contém documentação técnica completa sobre muros de gravidade com perfil escalonado, incluindo diagramas SVG detalhados e métodos de dimensionamento.

## 📁 Estrutura dos Arquivos

```
├── index.md                          # Documento técnico principal
├── muro_perfil_completo.svg          # Diagrama com forças e elementos
├── muro_nomenclatura.svg             # Diagrama com dimensões e nomenclatura
├── README.md                          # Este arquivo
├── CONTEXT.md                         # Contexto técnico e decisões de design
└── TODO.md                            # Melhorias futuras possíveis
```

## 🎯 Objetivo

Fornecer material técnico de referência para engenheiros civis sobre:
- Conceitos fundamentais de muros de gravidade escalonados
- Métodos de pré-dimensionamento (empírico, Coulomb, tabelas)
- Verificações de estabilidade (tombamento, deslizamento, capacidade de carga)
- Considerações construtivas e de drenagem
- Referências bibliográficas confiáveis

## 📊 Diagramas

### muro_perfil_completo.svg
Mostra:
- Estrutura completa do muro (face externa vertical, interna escalonada)
- **Calcanhar** avançando para o lado livre
- Solo de fundação abaixo do muro
- Solo retido em camadas encostando nos degraus
- Forças atuantes: empuxo ativo, peso próprio, reação do solo, empuxo passivo
- Níveis e dimensões

### muro_nomenclatura.svg
Mostra:
- Geometria básica e proporções
- Nomenclatura técnica: H, B, b₁ (calcanhar), b₂ (corpo), b₃ (pé), e (espessura topo)
- Cotas dimensionais
- Identificação clara de componentes

## ✅ Características Técnicas Corretas

### Face Externa
- Completamente **vertical** (prumo)
- Lado livre do muro
- Aparência limpa e profissional

### Face Interna
- **Escalonada** em degraus
- Contra o solo retido
- Espessura aumenta progressivamente até a base

### Base do Muro
Composta por três partes:
1. **Calcanhar (b₁)**: Avança além da face externa (~0,1H a 0,2H)
2. **Corpo (b₂)**: Sob a estrutura vertical
3. **Pé (b₃)**: Sob o terreno retido (~0,2H a 0,4H)

### Solo
- **Fundação**: Abaixo de toda a estrutura
- **Retido**: Encosta nos degraus internos, vai até o topo do muro
- **Natural**: Do lado livre, até o nível da base

## 📐 Dimensionamento Básico

```
Largura da base: B = 0,4H a 0,7H
Calcanhar:       b₁ = 0,10H a 0,20H
Pé:              b₃ = 0,20H a 0,40H
Espessura topo:  e = 0,05H a 0,08H (mínimo 0,30m)
```

## 📚 Referências Principais

- NBR 11682: Estabilidade de Encostas
- NBR 6122: Projeto e Execução de Fundações
- Das, B.M. - Principles of Foundation Engineering
- Bowles, J.E. - Foundation Analysis and Design

## 🚀 Como Usar

1. **Visualizar o documento**: Abrir `index.md` em qualquer leitor Markdown
2. **Ver os diagramas**: Os SVGs são referenciados no documento e podem ser abertos separadamente
3. **Estudar os métodos**: Seguir as seções de pré-dimensionamento e verificação
4. **Aplicar em projetos**: Usar as tabelas e formulários como ponto de partida

## 🔧 Ferramentas Necessárias

- Leitor de Markdown (VSCode, Typora, GitHub, etc.)
- Visualizador SVG (navegador web, VSCode, etc.)
- Para edição: editor de texto + ferramenta de edição SVG (Inkscape, etc.)

## ⚠️ Aviso Importante

Este documento apresenta conceitos gerais e métodos de pré-dimensionamento. **Todo projeto definitivo deve ser desenvolvido por engenheiro habilitado**, com:
- Investigações geotécnicas adequadas
- Cálculos estruturais detalhados
- Atendimento às normas técnicas vigentes

## 📝 Notas de Versão

**Versão 1.0** - Maio 2026
- Documento técnico completo
- Dois diagramas SVG detalhados
- Métodos de dimensionamento
- Referências bibliográficas
- Correções realizadas:
  - Solo retido encostando corretamente nos degraus
  - Calcanhar claramente representado
  - Sem sobreposição de textos
  - Face externa vertical / face interna escalonada

## 👥 Uso Educacional

Este material é adequado para:
- Cursos de graduação em Engenharia Civil
- Cursos de pós-graduação em Geotecnia
- Treinamento profissional
- Consulta técnica de referência
- Material de apoio em projetos
