import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/Service/exchangeData.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  constructor(private currencyData: ExchangeDataService) {}

  data: any;
  firstCurrency: string = 'USD';
  secondCurrency: string = 'USD';
  firstValue: number = 0;
  secondValue: number = 0;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.currencyData.getData().subscribe(
      data => this.data = data
    );
  }

  convertFirstToSecond(): void {
    const firstRate = this.getExchangeRate(this.firstCurrency);
    const secondRate = this.getExchangeRate(this.secondCurrency);
    console.log(firstRate, secondRate, '1');
    this.secondValue = this.firstValue*(firstRate/secondRate);
  }

  convertSecondToFirst(): void {
    const firstRate = this.getExchangeRate(this.firstCurrency);
    const secondRate = this.getExchangeRate(this.secondCurrency);
    
    console.log(firstRate, secondRate, '2');
    
    this.firstValue = this.secondValue*(secondRate/firstRate);;
  }

  getExchangeRate(currency: string): number {
    const rate = this.data.find((item: any) => item.cc === currency)?.rate;
    return rate !== undefined ? rate : 1;
  }
}
