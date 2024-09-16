import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-produtos-details-loja',
  templateUrl: './produtos-details-loja.component.html',
  styleUrls: ['./produtos-details-loja.component.scss']
})
export class ProdutosDetailsLojaComponent implements OnInit {

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
