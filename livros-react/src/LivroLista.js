// src/LivroLista.js
import React from 'react';
import { ControleLivros } from './controle/ControleLivros';
import './App.css'; // Certifique-se de que o CSS está sendo importado

const controleLivros = new ControleLivros();

function LivroLista() {
  const livros = controleLivros.obterLivros();

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.codigo}>
              <td>{livro.titulo}</td>
              <td>{livro.resumo}</td>
              <td>{livro.codEditora}</td>
              <td>{livro.autores.join(', ')}</td>
              <td>
                <button 
                  className="excluir-button" 
                  onClick={() => controleLivros.excluir(livro.codigo)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LivroLista;