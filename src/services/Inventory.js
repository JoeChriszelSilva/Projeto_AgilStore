import fs from "fs";
import Product from "../models/Product.js";

const DATA_PATH = "./data/produtos.json";

export default class Inventory {
  constructor() {
    this.produtos = this.carregar();
  }

  carregar() {
    if (!fs.existsSync(DATA_PATH)) {
      return [];
    }

    const data = fs.readFileSync(DATA_PATH, "utf-8");

    if (!data.trim()) {
      return [];
    }

    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("⚠️ Erro ao ler produtos.json. Reiniciando estoque.");
      return [];
    }
  }

  salvar() {
    fs.writeFileSync(DATA_PATH, JSON.stringify(this.produtos, null, 2));
  }

  gerarId() {
    return this.produtos.length
      ? Math.max(...this.produtos.map((p) => p.id)) + 1
      : 1;
  }

  adicionar(nome, categoria, quantidade, preco) {
    const produto = new Product(
      this.gerarId(),
      nome,
      categoria,
      quantidade,
      preco
    );

    this.produtos.push(produto);
    this.salvar();
  }

  listar() {
    return this.produtos;
  }

  atualizar(id, dados) {
    const produto = this.produtos.find((p) => p.id === id);
    if (!produto) return false;

    Object.assign(produto, dados);
    this.salvar();
    return true;
  }

  remover(id) {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) return false;

    this.produtos.splice(index, 1);
    this.salvar();
    return true;
  }

  buscar(termo) {
    return this.produtos.filter(
      (p) =>
        p.id === Number(termo) ||
        p.nome.toLowerCase().includes(termo.toLowerCase())
    );
  }
}
