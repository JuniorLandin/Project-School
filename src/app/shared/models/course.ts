export interface Course {
  id: number;
  name: string;
  category: Category;
  description: string;
  rating: number;
  year: number;
  professor: string;
}

export enum Category {
  Tecnologia = 'Tecnologia',
  Arte = 'Arte',
  Culinaria = 'Culinária',
  Financas = 'Finanças',
  Psicologia = 'Psicologia',
  Marketing = 'Marketing',
  Escrita = 'Escrita',
  Musica = 'Música',
  CienciasAmbientais = 'Ciências Ambientais',
  Moda = 'Moda',
  Comunicacao = 'Comunicação',
  Filosofia = 'Filosofia',
  Saude = 'Saúde'
}