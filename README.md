# Case para Frontend

### O que você terá que fazer?

Nesse case você terá que desenvolver uma página que está neste (link)[https://www.figma.com/file/qOddL0ANzAG3vxCa1xUYIy/Case-frontend]

Os dados dessa página terá que ser consumido do arquivo JSON que temos dentro da pasta `data` na raiz desse repositório. Para consumir você pode usar o ExpressJS para criar um URL do tipo GET e devolver o JSON ou usar uma lib como por exemplo o `JSON-SERVER`, fique a vontade e se tiver outra forma de implementar pode usar, vamos gostar de ver!

### Algumas instruções:

- No `tipo de transação` vamos ter 2 tipos com 3 status diferentes. Para montar os tipos de transações temos algumas regras:
    - Se o item estiver com o status `COMPLETED`:
        1. `Pagamento Realizado`: Quando o item tiver o `source: "PAYMENT"` e `entry: "DEBIT"`
        2. `Transferência Realizada`: Quando o item tiver o `source: "TRANSFER"` e `entry: "DEBIT"`
        3. `Pagamento Recebido`: Quando o item tiver o `source: "PAYMENT"` e `entry: "CREDIT"`
        4. `Transferência Recebida`: Quando o item tiver o `source: "TRANSFER"` e `entry: "CREDIT"`
    - Se o item tiver o status `REFUNDED`:
        1. `Pagamento Estornado`: Quando o item tiver o `source: "PAYMENT"` e `entry: "CREDIT"`
        2. `Transferência Estornada`: Quando o item tiver o `source: "TRANSFER"` e `entry: "CREDIT"`
    - Se o item tiver o status `PENDING`:
        1. `Pagamento Agendado`: Quando o item tiver o `source: "PAYMENT"` e `entry: "DEBIT"`
        2. `Transferência Agendado`: Quando o item tiver o `source: "TRANSFER"` e `entry: "DEBIT"`
- O campo `amount` no objeto é o valor da transação que deverá ser formatada em R$, o valor conta com o centavos. (Por exemplo: `128080 = R$ 1.280,80`)
- o campo `amountTotal` é valor total na conta naquele dia, que será o que representa no layout como `saldo do dia`.
- Os filtros de status das transações tem que ser implementado e funcionando, as regras são:
    - `Entrada` tudo que no campo `entry` for igual a `CREDIT`
    - `Saída` tudo que no campo `entry` for igual a `DEBIT`
    - `Futuro` tudo que tiver o campo `scheduled` como `true`
    - NÃO vamos exigir que seja implementado o campo de busca por texto, mas caso queira implementar vamos gostar de ver.

### Como você tem que entregar o seu case?

Você tem **5 dias** para nós enviar o código. (Caso precise de mais tempo nos avise antes)

Você pode enviar o código como anexo no email ou mandar um link do repositório no GitHub (ou qualquer outro) para avaliarmos.
