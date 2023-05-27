#language: pt
Funcionalidade: Validação da loja virtual

  Cenário: Realizar login com sucesso
    Dado que acesso a página inicial da loja virtual
    Quando realizo login com as credenciais corretas
    Então visualizo o título da página de inventário

  Cenário: Exibir mensagem de erro ao inserir credenciais inválidas
    Dado que acesso a página inicial da loja virtual
    Quando realizo login com credenciais inválidas
    Então visualizo a mensagem de erro "Epic sadface: Sorry, this user has been locked out" no login

  Cenário: Adicionar e remover itens do carrinho
    Dado que acesso a página inicial da loja virtual
    Quando realizo login com as credenciais corretas
    E adiciono 4 itens ao carrinho
    E acesso o carrinho de compras
    Então vejo que existem 4 itens no carrinho
    E removo um item do carrinho
    Então vejo que existem 3 itens no carrinho
    E finalizo a compra
    Então visualizo a mensagem de sucesso "Thank you for your order!"

  Cenário: Adicionar itens ao carrinho e finalizar a compra com sucesso
    Dado que acesso a página inicial da loja virtual
    Quando realizo login com as credenciais corretas
    E adiciono 2 itens ao carrinho
    E acesso o carrinho de compras
    E finalizo a compra
    Então visualizo a mensagem de sucesso "Thank you for your order!"

  Cenário: Verificar se o botão de finalizar a compra está desabilitado com campos obrigatórios em branco
    Dado que acesso a página inicial da loja virtual
    Quando realizo login com as credenciais corretas
    E adiciono 1 itens ao carrinho
    E acesso o carrinho de compras
    E finalizo a compra sem preencher os campos obrigatórios
    Então visualizo a mensagem de erro "Error: First Name is required" no checkout
    E preencho o campo "First Name"
    E tento avançar de tela
    Então visualizo a mensagem de erro "Error: Last Name is required" no checkout
    E preencho o campo "Last Name"
    E tento avançar de tela
    Então visualizo a mensagem de erro "Error: Postal Code is required" no checkout
    E preencho o campo "Postal Code"
    E finalizo o pedido
    Então visualizo a mensagem de sucesso "Thank you for your order!"
