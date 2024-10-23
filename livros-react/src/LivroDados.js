import React, { useState } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora'; // Importação correta
import { useNavigate } from 'react-router-dom';
import './LivroDados.css'; // Importando o CSS específico

function LivroDados() {
  const controleLivros = new ControleLivros();
  const controleEditoras = new ControleEditora();
  
  const opcoes = controleEditoras.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();
    
    // Validação básica
    if (!titulo || !resumo || !autores) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    const livro = {
      codigo: 0,
      codEditora,
      titulo,
      resumo,
      autores: autores.split('\n'), // separando autores por linha
    };
    controleLivros.incluir(livro);
    navigate('/'); // Redireciona para a página de listagem
  };

  return (
    <main>
      <h1>Cadastro de Livro</h1>
      {error && <div className="error">{error}</div>} {/* Mensagem de erro */}

      <form onSubmit={incluir} className="livro-form">
        <div className="form-group">
          <label>Título:</label>
          <input 
            type="text" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label>Resumo:</label>
          <textarea 
            value={resumo} 
            onChange={(e) => setResumo(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label>Autores (separados por linha):</label>
          <textarea 
            value={autores} 
            onChange={(e) => setAutores(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label>Editora:</label>
          <select value={codEditora} onChange={tratarCombo}>
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Incluir</button>
      </form>
    </main>
  );
}

export default LivroDados;