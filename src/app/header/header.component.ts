import { Component, OnInit } from '@angular/core';
import { ExchangeDataService } from 'src/Service/exchangeData.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  
  
export class HeaderComponent implements OnInit{
  data: any;


  constructor(
    private exData: ExchangeDataService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { 
    this.matIconRegistry.addSvgIcon(
      'dollar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dollar.svg')
    ),
     this.matIconRegistry.addSvgIcon(
      'eur',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/eur.svg')
    ) 
    }

  ngOnInit(): void {
    this.exData.getData().subscribe(data=>this.data= data)
  }

  getDataValue(cc: string): any | undefined {
  if (this.data) {
    console.log(this.data);
    return this.data.find((item: any) => item.cc === cc);
  }
  return undefined;
}

}
