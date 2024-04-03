let carrinho = []
let produtos = [
    { codigo: '111', produto: 'Arroz', preco: 6.50 },
    { codigo: '222', produto: 'Feijão', preco: 5.00 },
    { codigo: '333', produto: 'Carne', preco: 28.00 },
    { codigo: '444', produto: 'Ovo', preco: 15.00 },
    { codigo: '555', produto: 'Batata', preco: 4.00 },
    { codigo: '666', produto: 'Tomate', preco: 7.00 },
    { codigo: '777', produto: 'Refrigerante', preco: 10.00 },
]


document.getElementById('searchButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value;
    var result = buscarPrecoProduto(searchInput);
    if (result !== null) {
      document.getElementById('result').innerHTML = `O valor do produto ${result.produto} é R$ ${result.preco.toFixed(2)}`;
      document.getElementById('buyButton').disabled = false;
    } else {
      document.getElementById('result').innerHTML = 'Produto não encontrado.';
      document.getElementById('buyButton').disabled = true;
    }
});

function buscarPrecoProduto(input) {
    for (let i = 0; i < produtos.length; i++) {
        if ((produtos[i].codigo === input) || (produtos[i].produto.toLocaleLowerCase() === input.toLocaleLowerCase())) {
            return produtos[i]
        }
    }

    return null
}

  document.getElementById('buyButton').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value;
    comprarProduto(searchInput);
  });

  function comprarProduto(input) {
    for (let i = 0; i < produtos.length; i++) {
        if ((produtos[i].codigo === input) || (produtos[i].produto.toLocaleLowerCase() === input.toLowerCase())) {
            carrinho.push(produtos[i])
            alert('Produto adicionado ao carrinho!')
            console.log(carrinho)
        }
    }
  }