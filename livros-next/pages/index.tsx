import { useEffect, useState } from 'react';
import '../app/globals.css';

export default function Home() {
  return (
    <div>
      {/* Barra de navegação */}
      <nav style={{ backgroundColor: 'black', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0 }}>
          <li>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          </li>
          <li>
            <a href="/api/livros" style={{ color: 'white', textDecoration: 'none' }}>Catálogo</a>
          </li>
          <li>
            <a href="/api/editoras" style={{ color: 'white', textDecoration: 'none' }}>Novo</a>
          </li>
        </ul>
      </nav>

      {/* Conteúdo da página */}
      <div style={{ textAlign: 'center', height: 'calc(100vh - 50px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3em', margin: 0 }}>Página Inicial</h1>
      </div>
    </div>
  );
}