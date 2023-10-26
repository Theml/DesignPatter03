# DesignPatter03
Created with CodeSandbox

- **Cenário**: Você precisa compartilhar uma regra de alteração de estado em vários componentes, porém quer compartilhar apenas a regra, dado que cada componente terá seu estado específico.
- **Solução**: Isolar o hook como um arquivo separado, nesse caso sempre devemos usar o prefixo **use**.
