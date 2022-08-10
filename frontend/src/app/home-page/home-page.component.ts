import { Component, OnInit } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  historyData: Array<Result> = [];
  paragraphText: string = "Insira um número inteiro e será calculado a quantidade de números naturais entre 0 e o valor \
                          inserido, que possuam a mesma quantidade de divisores positivos que o seu respectivo sucessor. \
                          Além do resultado, será exibido o tempo que foi levado para efetuar os calculos.";
  exampleText: string = "Os números 2 e 3 têm respectivamente 2 divisores positivos (1 e 2; 1 e 3), porém o número 4 \
                          possui 3 divisores positivos (1, 2 e 4). Logo, se o calculo fosse feito usando o número 5, o resultado \
                          a ser exibido seria igual à 1, pois o único inteiro positivo menor que 5 que atende a condição \
                          do desafio é o número 2.";
  loading: boolean = false;
  result: Result = {
    "input" : "",
    "amount" : "",
    "time" : ""
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.historyData = JSON.parse(localStorage.getItem("history") ?? "[]");
  } 

  updateResult(data: Result) {
    this.result = data;
    this.addToHistory(data);
  }

  addToHistory(data: Result) {
    this.historyData.push(data);
    localStorage.setItem("history", JSON.stringify(this.historyData));
  }

  clearHistory() {
    this.historyData = [];
    localStorage.setItem("history", "[]");
  }

  toogleLoading(bool: boolean) {
    this.loading = bool;
  }

}
