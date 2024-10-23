import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: "Editora A" },
  { codEditora: 2, nome: "Editora B" },
  { codEditora: 3, nome: "Editora C" },
];

export default class ControleEditora {
  /**
   * Método para obter todas as editoras.
   * @returns Array<Editora> - Um array contendo todas as editoras.
   */
  getEditoras(): Array<Editora> {
    return editoras;
  }

  /**
   * Método para obter o nome da editora com base no código.
   * @param codEditora - O código da editora.
   * @returns string | undefined - O nome da editora ou undefined se não encontrado.
   */
  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((editora) => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}