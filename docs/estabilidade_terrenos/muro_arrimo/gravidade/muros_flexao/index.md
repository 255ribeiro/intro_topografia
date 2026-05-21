---
icon: lucide/building-2
---

<!-- markdownlint-disable MD060 -->

# Muros de Flexão (Cantilever)

Os muros de flexão (ou em balanço, *cantilever retaining walls*) resistem ao empuxo por meio de **braços estruturais de concreto armado** engastados na fundação. São mais esbeltos e econômicos que os muros de gravidade para alturas acima de 4–5 m, pois aproveitam o peso do solo sobre a sapata de fundação como momento resistente.

## Configurações Típicas

| Configuração       | Descrição                                     |
|--------------------|-----------------------------------------------|
| Seção em L         | Sapata com pé no lado do solo retido          |
| Seção em T         | Sapata com pé e calcanhar                     |
| Seção em T invertido | Com nervura no topo                         |

## Princípio Estrutural

O muro trabalha como uma **viga em balanço** engastada na sapata. Os momentos de dimensionamento são:

**Na base da parede** (face tracionada interna):

$$M_{base} = \frac{K_a \cdot \gamma \cdot H^3}{6}$$

**Na sapata** (sobre o calcanhar):

$$M_{sap} = \frac{q_{solo} \cdot L_{calc}^2}{2}$$

Onde $q_{solo}$ é a pressão do solo sobre o calcanhar e $L_{calc}$ o comprimento do calcanhar.

## Pré-Dimensionamento

| Elemento             | Dimensão típica         |
|----------------------|-------------------------|
| Espessura do fuste   | $e = 0{,}08H$ a $0{,}12H$ |
| Largura da sapata $B$| $0{,}4H$ a $0{,}65H$   |
| Calcanhar $b_3$      | $0{,}3H$ a $0{,}45H$   |
| Espessura da sapata  | $0{,}08H$ a $0{,}12H$  |

## Diferença em Relação ao Muro de Gravidade Escalonado

| Característica       | Muro escalonado (gravidade) | Muro de flexão           |
|----------------------|-----------------------------|--------------------------|
| Material             | Concreto simples            | Concreto armado          |
| Altura ideal         | 3–8 m                       | 4–10 m                   |
| Armadura             | Não requer                  | Obrigatória              |
| Seção                | Maciça / escalonada         | Esbelta (L ou T)         |
| Custo relativo       | Menor para H $\leq$ 5 m     | Menor para H $>$ 5 m     |

!!! note "Em construção"
    O conteúdo completo sobre dimensionamento estrutural está sendo desenvolvido.
