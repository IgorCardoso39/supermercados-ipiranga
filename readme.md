# Supermercados Ipiranga - Site Vitrine com Carrinho Simulado

## Integrantes da dupla
- Igor Cardoso de Almeida

## Descrição do caso escolhido
Supermercados Ipiranga é um mercado de bairro que deseja aumentar sua presença digital, permitindo que clientes visualizem produtos e simulem suas compras online.

## Necessidade identificada
Os clientes não têm acesso fácil a preços e produtos antes de ir à loja. O site resolve essa falta de informação, agilizando a experiência de compra.

## Público-alvo
Moradores da região, com idade entre 25 e 60 anos, que buscam conveniência.

## Objetivo do site
Permitir que o visitante navegue pelos produtos, adicione ao carrinho, veja o total e finalize a compra (simulação).

## Processo de desenvolvimento
Dividimos o trabalho em: diagnóstico, planejamento de layout com Bootstrap, criação do array de produtos, implementação das funções de carrinho em JavaScript, testes de responsividade e publicação.

## Principais decisões do projeto
- Uso de HTML semântico (header, nav, main, section, footer).
- Bootstrap para grid e offcanvas, garantindo responsividade.
- CSS personalizado com paleta de verde claro, alinhada à marca.
- JavaScript puro para manipulação do DOM e lógica do carrinho.
- Cuidados com acessibilidade: contraste, foco visível, textos alternativos.

## Funcionalidade em JavaScript
- `renderizarProdutos()`: exibe a lista de produtos dinamicamente.
- `adicionarAoCarrinho(id)`: adiciona ou incrementa quantidade.
- `removerDoCarrinho(id)`: decrementa ou remove item.
- `atualizarCarrinho()`: atualiza contador, lista e total.
- `finalizarCompra()`: exibe alerta com total e esvazia carrinho.
- `limparCarrinho()`: limpa todos os itens (com confirmação).

## Uso de Bootstrap
- Grid responsivo (`.row` e `.col-*`) para organizar os produtos.
- Componente Offcanvas para o carrinho.
- Navbar colapsável para navegação em dispositivos móveis.
- Botões e classes utilitárias (`.w-100`, `.text-center`, etc.).

## Testes realizados
- Responsividade testada no Chrome DevTools (mobile, tablet, desktop).
- Todos os links da navegação funcionam (âncoras).
- Imagens carregam via placeholder ou caminho relativo.
- Navegação por teclado: `Tab` e `Enter` funcionam nos botões.
- Publicado no GitHub Pages e verificado o funcionamento completo.

## Links
- Repositório: https://github.com/seu-usuario/supermercados-ipiranga
- Site publicado: https://seu-usuario.github.io/supermercados-ipiranga

## Contribuição dos integrantes
- [Nome 1]: Estrutura HTML, estilização CSS, configuração do Bootstrap, documentação.
- [Nome 2]: Lógica JavaScript, testes de responsividade, ajustes de acessibilidade, publicação.

## 📸 Imagens utilizadas no projeto

Para ilustrar os produtos do Supermercados Ipiranga, utilizamos imagens que representam cada item do estoque. As imagens estão organizadas na pasta img/ e são referenciadas pelo array de produtos no script.js.

Lista de imagens:

Produto Nome do arquivo Fonte/Origem
Arroz 5kg arrozitaliano.jpg Foto real
Feijão 1kg feijão.jpg Foto real
Leite 1L leite.jpg Foto real
Óleo 900ml oleo de soja.jpg Foto real
Farinha 1kg farinha-mandioca-fina.jpg Foto real
Açúcar 1kg acucar.jpg Foto real
Café 500g cafe.jpg Foto real
Sabonete sabonete.jpg Foto real

Justificativa:
Optamos por usar imagens reais para dar mais credibilidade e contextualizar o site com o ambiente do mercado. Para os itens que não foram fotografados, utilizamos imagens livres de direitos autorais, com os devidos créditos (quando exigidos). As imagens foram otimizadas para web, garantindo carregamento rápido e boa aparência em todos os dispositivos.

Caminho de referência no código:
No arquivo js/script.js, cada produto tem uma propriedade imagem que aponta para o arquivo correspondente dentro da pasta img/. Exemplo:

```javascript
{ id: 1, nome: 'Arroz 5kg', preco: 22.90, imagem: 'img/arrozitaliano.jpg' }