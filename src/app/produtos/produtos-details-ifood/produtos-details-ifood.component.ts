import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-details-ifood',
  templateUrl: './produtos-details-ifood.component.html',
  styleUrls: ['./produtos-details-ifood.component.scss']
})
export class ProdutosDetailsIfoodComponent implements OnInit {

  showMorePizzas:boolean=false;

  httpResponseClient:any;

  selectButton:any=1;
  @Input() DOMNavbar:any;

  tipoSabor:any = 'salgado'

  constructor() { }

  ngOnInit() {
    // this.getPizzaService();
  }

  // getPizzaService(){
  //   this.httpResponseClient = this.pizzaService.getHttpResponseCommon().forEach(res=>{
  //     this.httpResponseClient = res;
  //   });
  // }

  changeShowMorePizzas(){
    this.showMorePizzas = !this.showMorePizzas;
  }

  chevronIncDec(number:any){
    this.selectButton = this.selectButton+number;
    if(this.selectButton<=0){
      this.selectButton = 13;
    }
    if(this.selectButton>=14){
      this.selectButton = 1;
    }
  }

  trocarSabor(tipo:any){
    this.tipoSabor = tipo;
  }
}
