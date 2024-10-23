import Link from 'next/link';
import React from 'react';

export const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/LivroLista">Livros</Link></li>
        <li><Link href="/LivroDados">Adicionar Livro</Link></li>
      </ul>
    </nav>
  );
};