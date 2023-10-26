# DesignPatter03
Created with CodeSandbox

Workshop ao qual participei em questão de padrões de design de react. Este código é referente ao modelo de **Custom Hook Pattern**.

**Palestra e Workshop produzido por Leandro Simões.**

- Design Patterns (Padrões de Projeto) são soluções para problemas comuns no desenvolvimento de software, porém para ser considerado um padrão é necessário algum tipo de chancela da comunidade, ou seja, por pessoas mais sênior que reconhecem aquela solução como uma solução boa.
- Mais importante do que conhecer como aplicar padrões é também saber quando não usá-los, pense em padrões como diretrizes e não leis.

- **Dificuldade**: 🟢 ⚪⚪
- **Frequência**: 🟢🟢🟢

- **Cenário**: Você precisa compartilhar uma regra de alteração de estado em vários componentes, porém quer compartilhar apenas a regra, dado que cada componente terá seu estado específico.
- **Solução**: Isolar o hook como um arquivo separado, nesse caso sempre devemos usar o prefixo **use**.
