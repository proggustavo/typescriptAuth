declare namespace Express {
  export interface Request {
    // aqui não estou sobrescrevendo a request do express, estou só fazendo um 'merge'
    // adicionando coisas
    userId: string;
  }
}
