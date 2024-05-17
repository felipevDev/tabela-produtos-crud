const btnListar = document.querySelector('#btn-produto')
const produtoForm = document.querySelector('#form-produtos')

produtoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const produtoForm = document.querySelector('#form-produtos')
    if (validation()) {
        criaLinhaProduto(produtoForm);
    }
})


function criaLinhaProduto(produtoForm) {
    const linhaProduto = document.createElement('tr')

    //Cria o elemento TD
    const nomeProduto = criaColuna(produtoForm.produto.value);
    const custoProduto = criaColuna(produtoForm.custo.value);
    const vendaProduto = criaColuna(produtoForm.venda.value);
    const dataProduto = criaColuna(produtoForm.data.value);
    const estoqueProduto = criaColuna(produtoForm.estoque.value);
    const acoesProduto = document.createElement('td')

    //adicionar conteudo em cada celular
    acoesProduto.innerHTML = '<button  class="td-acoes" >X</button>'
    // Obetendo referencia do Corpo da tabela de PRodutos
    const tabelaProdutos = document.querySelector('#table_produtos').querySelector('tbody')

    linhaProduto.appendChild(nomeProduto);
    linhaProduto.appendChild(custoProduto);
    linhaProduto.appendChild(vendaProduto);
    linhaProduto.appendChild(dataProduto);
    linhaProduto.appendChild(estoqueProduto);
    linhaProduto.appendChild(acoesProduto);
    tabelaProdutos.appendChild(linhaProduto);
    return linhaProduto;
}

function criaColuna(valor) {
    var coluna = document.createElement('td')
    coluna.textContent = valor
    return coluna
}

let tabela = document.querySelector('#table_produtos')

tabela.addEventListener('click', function (event) {
    let elementoClicado = event.target
    if (elementoClicado.classList.contains("td-acoes")) {
        let celula = elementoClicado.parentNode;
        let linha = celula.parentNode
        linha.remove();
    }
})


function validation() {
    const errorSpan = document.getElementById('error')
    const limiteProduto = document.getElementById('nome-produto')
    const minCaracteres = limiteProduto.value

    const minCusto = document.getElementById('preco-custo')
    const minVenda = document.getElementById('preco-venda')
    const precoInicialCusto = minCusto.value
    const precoInicialVenda = minVenda.value
    const minCustoVEnda = 0;

    const minEstoque = document.getElementById('produto-estoque')
    const qntMinEstoque = minEstoque.value


    const minLength = 10;
    if (minCaracteres.length < 10) {
        errorSpan.textContent = `O texto deve ter pelo menos ${minLength} caracteres.`;
        return false;
    } else {
        if (precoInicialCusto <= 0 && precoInicialVenda >= 0) {
            errorSpan.textContent = `O preço do Produto não pode ser Zero`;
            return false;
        } else {
            if (qntMinEstoque > 100) {
                errorSpan.textContent = `A quantidade de Estoque não pode ser Maior que 100`;
                return false;
            } else {
                if (qntMinEstoque <= 0) {
                    errorSpan.textContent = `A quantidade de Estoque não pode ser Zero`;
                    return false;
                } else {
                    errorSpan.textContent = '';
                    return true;
                }

            }
        }

    }
}