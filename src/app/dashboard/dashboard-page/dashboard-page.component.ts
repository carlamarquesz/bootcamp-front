import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  /*Atributo Stock que vai ser do tipo array stock que inicializa como vazio */
  stocks: Stock[] = [];
  constructor(private dashboardService: DashboardService) {}
  /*Primeiro metodo a ser chamado quando a pagina é renderizada pela primeira vez */
  ngOnInit(): void {
    this.fetchStocks();
  }
  async fetchStocks(): Promise<void> {
    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);
  }
}
