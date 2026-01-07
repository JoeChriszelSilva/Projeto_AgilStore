# 🏬 AgilStore – Gerenciamento de Produtos

Este projeto foi desenvolvido como parte do **processo seletivo da Acelerador Ágil**.

A aplicação consiste em um **sistema de gerenciamento de produtos em terminal**, permitindo o controle básico de estoque de uma loja fictícia chamada **AgilStore**, com persistência de dados em arquivo JSON.

---

## 📌 Funcionalidades

- Cadastrar produtos
- Listar produtos cadastrados
- Atualizar informações de produtos
- Remover produtos
- Buscar produtos por **ID** ou **nome**
- Persistência de dados em arquivo JSON

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **JavaScript (ES Modules)**
- **readline-sync** (entrada de dados via terminal)
- **File System (fs)** para leitura e escrita de arquivos JSON

---

## ▶️ Como rodar a aplicação localmente

### Pré-requisitos

Antes de iniciar, é necessário ter instalado na máquina:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

---

### Passo a passo

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/agilstore.git
Acesse a pasta do projeto:

bash
cd Projeto_AgilStore
Instale as dependências:

bash
npm install
Execute a aplicação:

bash
npm start
Funcionamento da aplicação
Após executar o comando npm start, a aplicação será iniciada no terminal, exibindo um menu interativo que permite ao usuário:

Gerenciar o estoque de produtos

Inserir, editar, remover e buscar itens

Visualizar os dados atualizados em tempo real

Os produtos são armazenados localmente no arquivo:

txt
/data/produtos.json
Esse arquivo é criado automaticamente caso não exista.

📂 Estrutura do Projeto
txt

AgilStore/
├── src/
│   ├── models/
│   │   └── Product.js
│   ├── services/
│   │   └── Inventory.js
│   ├── menu.js
│   └── index.js
├── data/
│   └── produtos.json
├── package.json
└── README.md
🎯 Objetivo do Projeto
Demonstrar conhecimentos em:

Lógica de programação

Organização de código

Manipulação de arquivos

Uso de classes e módulos

Desenvolvimento de aplicações em Node.js via terminal

📄 Observações
Projeto desenvolvido para fins avaliativos.

Não utiliza banco de dados externo.

Persistência feita via arquivo JSON local.

