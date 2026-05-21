---
icon: lucide/mountain
---

<!-- markdownlint-disable MD060 -->

# Tipos de Plataformas e Taludes

Em engenharia civil, taludes são superfícies inclinadas de solo ou rocha resultantes de escavações (**taludes de corte**) ou de deposição controlada de material (**taludes de aterro**). A análise e o projeto de estabilidade de taludes são etapas fundamentais em obras rodoviárias, ferroviárias, de edificação e de saneamento.

## Classificação

| Tipo          | Origem                                      | Características principais                        |
|---------------|---------------------------------------------|---------------------------------------------------|
| Talude de corte  | Escavação do terreno natural             | Condicionado pela geologia e pela resistência do material original |
| Talude de aterro | Deposição e compactação de material      | Dependente da qualidade e grau de compactação do aterro |

## Fatores que Influenciam a Estabilidade

- Geometria do talude (altura $H$ e ângulo $\beta$)
- Propriedades do solo: ângulo de atrito $\varphi$, coesão $c$ e peso específico $\gamma$
- Regime de águas subterrâneas e pluviometria
- Geologia e estruturas de descontinuidade (falhas, juntas, planos de estratificação)
- Ação de sobrecargas e vibrações

## Métodos de Análise

A estabilidade de taludes é avaliada por meio do **fator de segurança** ($FS$), que relaciona as forças resistentes às forças atuantes:

$$FS = \frac{\text{Resistência ao cisalhamento disponível}}{\text{Tensão cisalhante mobilizada}} \geq 1{,}5$$

Os métodos de análise mais comuns são:

- **Método das fatias** (Fellenius, Bishop, Janbu)
- **Análise em equilíbrio-limite** para superfícies de ruptura circular ou poligonal
- **Análise numérica** por elementos finitos ou diferenças finitas

## Medidas de Estabilização

Quando o $FS$ calculado é insuficiente, as principais alternativas são:

- Redução da altura ou da inclinação do talude
- [Tratamento superficial](../tratamento_superficial/index.md) (proteção contra erosão)
- [Solo grampeado](../solo_grampeado/index.md) (reforço do maciço natural)
- [Solo reforçado](../solo_reforcado/index.md) (aterros estabilizados)
- [Muros de arrimo](../muro_arrimo/index.md) (contenção do pé do talude)
- Rebaixamento do nível d'água (drenos)

!!! note "Em construção"
    As seções de taludes de corte e aterro estão sendo desenvolvidas.
