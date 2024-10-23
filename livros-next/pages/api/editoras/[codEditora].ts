import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora';

// Criar a instância do ControleEditora
const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const codEditora = Number(req.query.codEditora);

    try {
      const nome = controleEditora.getNomeEditora(codEditora);
      if (nome) {
        res.status(200).json({ nome });
      } else {
        res.status(404).json({ error: 'Editora não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar editora' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};