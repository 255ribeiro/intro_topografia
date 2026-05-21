---
icon: lucide/arrow-down-to-line
---

<!-- markdownlint-disable MD060 -->

# Estacas Pranchas (Sheet Piles)

As **estacas pranchas** (*sheet piles*) são perfis de aço (ou concreto) de seção transversal especial — geralmente em U, Z ou Ômega — cravados continuamente no solo para formar uma **parede impermeável e estrutural**. São utilizadas em obras marítimas, portuárias, de fundação e contenção de escavações.

## Perfis Metálicos Típicos

| Perfil | Módulo resistente $W$ (cm³/m) | Aplicação         |
|--------|-------------------------------|-------------------|
| Seção U | 400–1500                     | Geral             |
| Seção Z | 600–2500                     | Maior rigidez     |
| Seção Ômega | 200–800                  | Obras provisórias |

## Análise de Estabilidade

Para estaca prancha em balanço (sem escoramento), a profundidade de embutimento $d$ é determinada pelo equilíbrio de momentos:

$$\sum M_A = 0 \implies M_{ativo} = M_{passivo}$$

$$\frac{K_a \gamma H^3}{6} = \frac{K_p \gamma d^3}{6} - \frac{K_a \gamma (H+d) d^2}{2}$$

Adota-se um acréscimo de 20–30% em $d$ como fator de segurança.

## Com Escoramento ou Ancoragem

Para alturas maiores, adiciona-se escoramento metálico ou tirantes. O diagrama de pressões muda e deve ser analisado pelo método das vigas contínuas ou métodos numéricos.

## Vantagens

- Execução por cravação: rápida e sem escavação prévia
- Recuperáveis (perfis de aço podem ser retirados após a obra)
- Impermeabilidade: impedem infiltração lateral

## Limitações

- Limitadas a solos sem obstáculos (matacões, camadas rochosas)
- Vibração e ruído durante a cravação
- Capacidade limitada sem ancoragem para alturas $> 5$ m

!!! note "Em construção"
    O conteúdo completo de dimensionamento está sendo desenvolvido.
