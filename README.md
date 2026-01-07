AgilStore – Gerenciamento de Produtos (CLI)

Aplicação de linha de comando desenvolvida em Node.js para gerenciamento de inventário de produtos.
O sistema permite realizar operações de cadastro, listagem, atualização, exclusão e busca de produtos, com persistência dos dados em arquivo JSON.

Projeto desenvolvido para o processo seletivo da Acelerador Ágil.

🚀 Funcionalidades

Adicionar produtos ao inventário

Listar todos os produtos cadastrados

Atualizar informações de um produto pelo ID

Excluir produtos do inventário

Buscar produtos por ID ou nome

Persistência automática dos dados em arquivo JSON

🛠️ Tecnologias Utilizadas

Node.js

JavaScript (ES Modules)

API nativa readline para interação via terminal

Arquivo JSON para persistência de dados

Orientação a Objetos e separação de responsabilidades

📁 Estrutura do Projeto
AgilStore/
├── src/
│   ├── models/
│   │   └── Product.js
│   ├── services/
│   │   └── Inventory.js
│   ├── menu.js
│   └── index.js
└── data/
    └── produtos.json

▶️ Como Rodar a Aplicação Localmente
Pré-requisitos

Node.js versão 18 ou superior instalado

Passos

Clone o repositório:

git clone https://github.com/seu-usuario/agilstore.git


Acesse a pasta do projeto:

cd AgilStore


Execute a aplicação:

node src/index.js


ou, se preferir:

npm start

💾 Persistência de Dados

Os produtos são armazenados no arquivo:

data/produtos.json


O sistema trata automaticamente os seguintes cenários:

Arquivo inexistente

Arquivo vazio

Conteúdo inválido

Garantindo que a aplicação funcione corretamente mesmo na primeira execução.

📌 Observações Técnicas

O projeto utiliza módulos ES (import/export), definidos via "type": "module" no package.json.

Não são utilizadas dependências externas para entrada de dados, apenas recursos nativos do Node.js.

O código foi estruturado visando clareza, organização e facilidade de manutenção.
