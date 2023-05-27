# Testes de Automação de Loja Virtual com Cypress

Este projeto contém testes automatizados para uma loja virtual usando o framework de teste Cypress. Os testes são escritos em JavaScript e usam a sintaxe do Cucumber para a escrita de cenários de teste.

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. Navegue até o diretório raiz do projeto e execute o seguinte comando para instalar as dependências:

```shell
npm install
```

## Executando os testes

Para executar os testes, você pode usar um dos seguintes comandos:

- Para abrir a interface do Cypress e executar manualmente os testes:

```shell
npm run cy:open
```

- Para executar os testes em modo headless e gerar relatórios e video:

```shell
npm run cy:cucumber
```

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `cypress/e2e/virtual-store`: Contém os arquivos de teste escritos em Cucumber e JavaScript.
- `cypress/models`: Contém os modelos de página usados nos testes.
- `cypress/support/constants.js`: Contém as constantes utilizadas nos testes.
- `package.json`: Contém as dependências do projeto e scripts para execução dos testes.

## Arquivos Principais

- `cypress/e2e/virtual-store/virtual-store.js`: Contém os cenários de teste escritos em Cucumber.
- `cypress/models/login-page.js`: Contém o modelo da página de login.
- `cypress/models/inventory-page.js`: Contém o modelo da página de inventário.
- `cypress/models/checkout-page.js`: Contém o modelo da página de checkout.
- `cypress/support/constants.js`: Contém as constantes utilizadas nos testes.