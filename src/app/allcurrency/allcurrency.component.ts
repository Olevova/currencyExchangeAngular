import { Component, Input, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/Service/exchangeData.service';

@Component({
  selector: 'app-allcurrency',
  templateUrl: './allcurrency.component.html',
  styleUrls: ['./allcurrency.component.css']
})
export class AllcurrencyComponent{
  @Input() date:any
  // date: any;
  // isLoad: boolean = false;
  
  // constructor(private allcurrency: ExchangeDataService) {
    
  // }

  // ngOnInit(): void {
  //   this.isLoad = true;
  //   this.allcurrency.getData().subscribe(date => this.date=date )
  //   this.isLoad = false;
  // }
}
