// src/controle/ControleLivros.ts
import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
  new Livro(1, 1, "Livro 1", "Resumo do Livro 1", ["Autor 1"]),
  new Livro(2, 2, "Livro 2", "Resumo do Livro 2", ["Autor 2"]),
  new Livro(3, 3, "Livro 3", "Resumo do Livro 3", ["Autor 3"]),
];

export class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...livros.map((l) => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      livros.splice(indice, 1);
    }
  }
}