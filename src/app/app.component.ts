import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/Service/exchangeData.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'currency';
  dates: any;
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      400: {
        items: 3
      },
      600: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  constructor(private datesall: ExchangeDataService) {
    
  }

  ngOnInit(): void {
     this.datesall.getData().subscribe(dates=>this.dates= dates)
  }


}
