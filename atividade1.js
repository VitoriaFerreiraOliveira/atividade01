let listaProdutos = [
  {
    nome: "He-man",
    descricao: "De mestres do universo",
    preco: 299.90,
    tags: ["usado", "em alta"],
    imagem: ""
  },
  {
    nome: "Leon S. Kennedy",
    descricao: "De Resident Evil",
    preco: 599.90,
    tags: ["novo", "em alta", "Resident Evil"],
    imagem: ""
  },
  {
    nome: "Arthur Morgan",
    descricao: "De Red Dead Redemption",
    preco: 599.90,
    tags: ["semi-novo", "em alta", "Red Dead Redemption"],
    imagem: ""
  },
  {
    nome: "Kratos",
    descricao: "De God of War",
    preco: 450.00,
    tags: ["novo", "em alta", "God of War"],
    imagem: ""
  },
  {
    nome: "Ellie Williams",
    descricao: "De The Last of Us",
    preco: 389.90,
    tags: ["semi-novo", "The Last of Us"],
    imagem: ""
  },
  {
    nome: "Geralt de Rívia",
    descricao: "De The Witcher",
    preco: 499.90,
    tags: ["novo", "RPG", "em alta"],
    imagem: ""
  },
  {
    nome: "Darth Vader",
    descricao: "De Star Wars",
    preco: 650.00,
    tags: ["colecionador", "Star Wars"],
    imagem: ""
  },
  {
    nome: "Link",
    descricao: "De The Legend of Zelda",
    preco: 349.90,
    tags: ["novo", "Nintendo", "em alta"],
    imagem: ""
  },
  {
    nome: "Master Chief",
    descricao: "De Halo",
    preco: 420.00,
    tags: ["usado", "Xbox", "sci-fi"],
    imagem: ""
  },
  {
    nome: "Jill Valentine",
    descricao: "De Resident Evil",
    preco: 549.90,
    tags: ["novo", "Resident Evil"],
    imagem: ""
  }
];

const filtrarPorTag = (lista, tagBuscada) => {
  return lista.filter((produto) => produto.tags.includes(tagBuscada));
};

const produtosEmAlta = filtrarPorTag(listaProdutos, "em alta");
console.log("Produtos em alta:", produtosEmAlta);

const resumoEmAlta = produtosEmAlta.map((produto) => `${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
console.log("Resumo:", resumoEmAlta);