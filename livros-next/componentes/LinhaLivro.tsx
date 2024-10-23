import React from 'react';
import { Livro } from '../classes/modelo/Livro';
import ControleEditora from '../classes/controle/ControleEditora';

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>{nomeEditora}</td>
      <td><button onClick={() => excluir(livro.codigo)}>Excluir</button></td>
    </tr>
  );
};