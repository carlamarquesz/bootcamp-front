import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly baseUrl = 'http://localhost:8080/bootcamp';
  /*http é uma instancia  do tipo HttpCliente. Faz a requisição de depencias e fica disponivel para
  para metodos para fazer a busca dos Stocks */
  constructor(private http: HttpClient) {}
  /*Metodo para buscar todos os Stocks.
  O tipo de retorno da minha funcao, é uma promise de Stock
  O http.get nao retorna uma promise e sim uma observables
  O método getStocks retorna uma Promise de uma lista de Stocks
  */

  async getStocks(): Promise<Stock[]> {
    return lastValueFrom(this.http.get<Stock[]>(`${this.baseUrl}/stock`));
  }
}
