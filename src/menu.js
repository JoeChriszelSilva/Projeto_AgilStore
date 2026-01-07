import readline from "readline";
import Inventory from "./services/Inventory.js";

export default class Menu {
  constructor() {
    this.inventory = new Inventory();

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  perguntar(pergunta) {
    return new Promise((resolve) => {
      this.rl.question(pergunta, resolve);
    });
  }

  async iniciar() {
    console.log("==============================");
    console.log("          AgilStore           ");
    console.log("==============================");
    console.log("1 - Adicionar Produto");
    console.log("2 - Listar Produtos");
    console.log("3 - Atualizar Produto");
    console.log("4 - Excluir Produto");
    console.log("5 - Buscar Produto");
    console.log("0 - Sair");
    console.log("==============================");

    const opcao = await this.perguntar("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        await this.adicionar();
        break;
      case "2":
        console.table(this.inventory.listar());
        break;
      case "3":
        await this.atualizar();
        break;
      case "4":
        await this.remover();
        break;
      case "5":
        await this.buscar();
        break;
      case "0":
        console.log("👋 Encerrando...");
        this.rl.close();
        return;
      default:
        console.log("❌ Opção inválida");
    }

    this.iniciar();
  }

  async adicionar() {
    const nome = await this.perguntar("Nome: ");
    const categoria = await this.perguntar("Categoria: ");
    const quantidade = Number(await this.perguntar("Quantidade: "));
    const preco = Number(await this.perguntar("Preço: "));

    this.inventory.adicionar(nome, categoria, quantidade, preco);
    console.log("✅ Produto adicionado!");
  }

  async atualizar() {
    const id = Number(await this.perguntar("ID: "));
    const nome = await this.perguntar("Novo nome: ");
    const categoria = await this.perguntar("Nova categoria: ");
    const quantidade = await this.perguntar("Nova quantidade: ");
    const preco = await this.perguntar("Novo preço: ");

    const sucesso = this.inventory.atualizar(id, {
      ...(nome && { nome }),
      ...(categoria && { categoria }),
      ...(quantidade && { quantidade: Number(quantidade) }),
      ...(preco && { preco: Number(preco) }),
    });

    console.log(sucesso ? "✅ Atualizado!" : "❌ Produto não encontrado");
  }

  async remover() {
    const id = Number(await this.perguntar("ID: "));
    const sucesso = this.inventory.remover(id);
    console.log(sucesso ? "🗑️ Removido!" : "❌ Produto não encontrado");
  }

  async buscar() {
    const termo = await this.perguntar("Buscar por nome ou ID: ");
    const resultado = this.inventory.buscar(termo);

    resultado.length
      ? console.table(resultado)
      : console.log("🔍 Nenhum produto encontrado");
  }
}
