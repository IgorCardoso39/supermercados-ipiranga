// ===== Dados dos produtos (estáticos) =====
const produtos = [
  { id: 1, nome: 'Arroz 5kg', preco: 22.90, imagem: 'img/arrozitaliano.jpg'},
  { id: 2, nome: 'Feijão 1kg', preco: 8.50, imagem: 'img/feijão.jpg' },
  { id: 3, nome: 'Leite 1L', preco: 4.79, imagem: 'img/leite.jpg' },
  { id: 4, nome: 'Óleo 900ml', preco: 6.99, imagem: 'img/oleo de soja.jpg' },
  { id: 5, nome: 'Farinha 1kg', preco: 3.49, imagem: 'img/farinha-mandioca-fina.jpg' },
  { id: 6, nome: 'Açúcar 1kg', preco: 4.29, imagem: 'img/açucar.jpg' },
  { id: 7, nome: 'Café 500g', preco: 12.50, imagem: 'img/cafe.jpg' },
  { id: 8, nome: 'Sabonete', preco: 2.30, imagem: 'img/sabonete.jpg' }
];

// ===== Estado do carrinho =====
let carrinho = [];

// ===== Referências DOM =====
const listaProdutosEl = document.getElementById('lista-produtos');
const itensCarrinhoEl = document.getElementById('itens-carrinho');
const totalCarrinhoEl = document.getElementById('total-carrinho');
const contadorCarrinhoEl = document.getElementById('contador-carrinho');
const finalizarBtn = document.getElementById('finalizar-compra');
const limparBtn = document.getElementById('limpar-carrinho');

// ===== Função para renderizar produtos =====
function renderizarProdutos() {
  listaProdutosEl.innerHTML = '';
  produtos.forEach(prod => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6 mb-4';
    col.innerHTML = `
      <div class="card card-produto">
        <img src="${prod.imagem}" class="card-img-top" alt="${prod.nome}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${prod.nome}</h5>
          <p class="card-text fw-bold text-success">R$ ${prod.preco.toFixed(2)}</p>
          <button class="btn btn-adicionar" data-id="${prod.id}">Adicionar</button>
        </div>
      </div>
    `;
    listaProdutosEl.appendChild(col);
  });

  // Eventos dos botões "Adicionar"
  document.querySelectorAll('.btn-adicionar').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = parseInt(this.dataset.id);
      adicionarAoCarrinho(id);
    });
  });
}

// ===== Função para adicionar ao carrinho =====
function adicionarAoCarrinho(id) {
  const itemExistente = carrinho.find(item => item.id === id);
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ id, quantidade: 1 });
  }
  atualizarCarrinho();
  // Feedback visual (opcional)
  const btn = document.querySelector(`.btn-adicionar[data-id="${id}"]`);
  if (btn) {
    btn.textContent = '✓ Adicionado';
    setTimeout(() => { btn.textContent = 'Adicionar'; }, 1000);
  }
}

// ===== Função para remover item (diminuir) =====
function removerDoCarrinho(id) {
  const index = carrinho.findIndex(item => item.id === id);
  if (index !== -1) {
    const item = carrinho[index];
    if (item.quantidade > 1) {
      item.quantidade -= 1;
    } else {
      carrinho.splice(index, 1);
    }
    atualizarCarrinho();
  }
}

// ===== Atualizar interface do carrinho =====
function atualizarCarrinho() {
  // Atualizar contador no cabeçalho
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  contadorCarrinhoEl.textContent = totalItens;

  // Limpar lista do offcanvas
  itensCarrinhoEl.innerHTML = '';

  if (carrinho.length === 0) {
    itensCarrinhoEl.innerHTML = '<li class="list-group-item text-muted">Seu carrinho está vazio.</li>';
    totalCarrinhoEl.textContent = '0,00';
    return;
  }

  // Montar lista
  let subtotal = 0;
  carrinho.forEach(item => {
    const produto = produtos.find(p => p.id === item.id);
    if (!produto) return;
    const totalItem = produto.preco * item.quantidade;
    subtotal += totalItem;

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <span>${produto.nome} (${item.quantidade}x)</span>
      <span>
        R$ ${totalItem.toFixed(2)}
        <button class="btn btn-sm btn-outline-danger ms-2 remover-item" data-id="${item.id}">-</button>
      </span>
    `;
    itensCarrinhoEl.appendChild(li);
  });

  // Eventos dos botões "-" (remover)
  document.querySelectorAll('.remover-item').forEach(btn => {
    btn.addEventListener('click', function() {
      removerDoCarrinho(parseInt(this.dataset.id));
    });
  });

  totalCarrinhoEl.textContent = subtotal.toFixed(2);
}

// ===== Finalizar compra (simulação) =====
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio. Adicione produtos antes de finalizar.');
    return;
  }
  const total = carrinho.reduce((acc, item) => {
    const prod = produtos.find(p => p.id === item.id);
    return acc + (prod ? prod.preco * item.quantidade : 0);
  }, 0);
  alert(`✅ Compra finalizada com sucesso!\nTotal: R$ ${total.toFixed(2)}\nObrigado por comprar no Supermercados Ipiranga!`);
  carrinho = [];
  atualizarCarrinho();
}

// ===== Limpar carrinho =====
function limparCarrinho() {
  if (carrinho.length === 0) return;
  if (confirm('Tem certeza que deseja limpar o carrinho?')) {
    carrinho = [];
    atualizarCarrinho();
  }
}

// ===== Inicialização =====
renderizarProdutos();
atualizarCarrinho();

// Eventos dos botões principais
finalizarBtn.addEventListener('click', finalizarCompra);
limparBtn.addEventListener('click', limparCarrinho);