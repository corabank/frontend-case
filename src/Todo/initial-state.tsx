export const TODO_LIST = [
  {
    id: "5ce31291-d06b-4940-9d14-0f41d116fe76",
    ref: "1",
    title: "Visualizar to-do list corretamente",
    description: (
      <>
        1. Criar rota e conseguir visualizar o to-do list.
        <br />
        2. Visualizar todas as tasks corretamente.
        <br />
        <br />
        <strong>Info:</strong> Ta conseguindo ver o to-do list com a quantidade
        correta de tasks? Parabéns, você finalizou a sua primeira task &#127881;
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "bcd69907-601f-461b-a8c4-4c3fc3b827e9",
    ref: "1",
    title: "Resolver to-do bugs",
    description: (
      <>
        Nos ajude com o nosso produto de to-do list e resolva os bugs abaixo:
        <br />
        <br />
        1. A troca de status, de <strong>pending</strong> para{" "}
        <strong>done</strong> e vice-versa, não esta funcionando corretamenta.
        <br />
        2. A busca não esta funcionando corretamente.
        <br />
        3. O <strong>delete</strong> não ta removendo o item.
        <br />
        4. A nossa lista ta começando com o número <strong>0</strong>, mas
        precisamos que ela comece com o número <strong>1</strong>.
        <br />
        5. Alguns links não estão funcionando.
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "ea82af08-ffd1-41fe-9c30-b760ae7ee8c9",
    ref: "1",
    title: "Página de login - CSS",
    description: (
      <>
        A página de Login já esta estruturada corretamente, mas parece que tem
        alguma coisa errada com o CSS dessa página :/
      </>
    ),
    status: "pending",
    required: true,
    links: [
      {
        name: "figma",
        url: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=3-2773&mode=dev",
      },
    ],
  },
  {
    id: "ea82af08-ffd1-41fe-9c60-b760ae7ee8ce",
    ref: "1",
    title: "Página de login - Integração",
    description: (
      <>
        1. Faça a integração com o endpoint de autenticação.
        <br />
        <br />O contrato esta no <strong>README.md</strong> do projeto.
        <br />
        <br />
        <strong>Info:</strong> Sinta-se livre para fazer melhorias :)
      </>
    ),
    status: "pending",
    required: true,
    links: [
      {
        name: "endpoint de autenticação",
        link: "http://localhost:3000/auth",
      },
    ],
  },
  {
    id: "9c3fd0b8-2cc2-433b-b80c-e12ee4c0524e",
    ref: "1",
    title: "Página de lista de transações",
    description: (
      <>
        1. Crie a página de lista de transações de acordo com o link do figma
        (não esqueça que essa é uma página de área logada).
        <br />
        2. Faça a integração com o endpoint de lista.
        <br />
        <br />O contrato esta no <strong>README.md</strong> do projeto.
      </>
    ),
    status: "pendin",
    required: true,
    links: [
      {
        name: "figma",
        url: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=5-3378&mode=dev",
      },
      {
        name: "endpoint de lista",
        link: "http://localhost:3000/list",
      },
    ],
  },
  {
    id: "5ce31291-d06b-4940-9d14-0f41d116fe76",
    ref: "1",
    title: "Filtro por tipo de transação",
    description: (
      <>
        Adicione a possibilidade de filtrar a tela de transações por tipo de
        transação (tela feita na task anterior).
        <br />
        <br />
        <strong>Note:</strong> Utilize os <u>buttons</u> que aparecem no topo da
        tela de lista de transações para fazer o filtro.
        <br />
        <br />
        <strong>Important:</strong> O tipo da transação é a chave{" "}
        <strong>entry</strong>, com valor <strong>DEBIT</strong> ou{" "}
        <strong>CREDIT</strong>, dentro do response retornado pela api.
      </>
    ),
    status: "pending",
    required: true,
    links: [
      {
        name: "figma",
        link: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=5-3396&mode=dev",
      },
    ],
  },
  {
    id: "be4f2532-aca4-46c8-84b8-c9fe41d7fb7f",
    ref: "1",
    title: "Extra",
    description: (
      <>
        Agora é o seu momento de brilhar. Teste a usabilidade e avalie o código,
        na <strong>To-do</strong> list e página de <strong>Login</strong>, para
        encontrar bugs, falhas de comportamento e possíveis melhorias
        (performance, código, boas práticas).
        <br />
        <br />
        <strong>Se faça a seguinte pergunta</strong>: Se esse produto fosse meu,
        quais melhorias eu faria no código e no produto?
        <br />
        <br />
        <strong>Note:</strong> Essa task não é obrigatória. Ela pode fazer a
        diferença na avaliação geral e/ou na hora de decidirmos o melhor perfil
        para a vaga.
        <br />
        <br />
        <strong>Important:</strong> Encontrou algo? Crie novas tasks nessa lista
        de to-dos, para conseguirmos te avaliar de uma forma mais assertiva.
        ObrigadaUm &#128640;
      </>
    ),
    status: "pending",
    required: false,
  },
];
