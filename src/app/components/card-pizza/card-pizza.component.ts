import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pizza',
  templateUrl: './card-pizza.component.html',
  styleUrls: ['./card-pizza.component.scss']
})
export class CardPizzaComponent implements OnInit {

  @Input() img:any;
  @Input() id:any;
  @Input() namePizza:any;
  @Input() price:any;
  @Input() loja:boolean = false;
  @Input() priceWithPromotion:any;
  @Input() fristDescription:any;
  @Input() secondDescription:any;
  @Input() ingredients:any;
  @Input() pizzaPhoto:any;
 // @Output() getEventShowPrice = new EventEmitter<string>();
  expandImageBoolean:boolean = false;

  showPrice:boolean=false;

  showMorePizzas:boolean=false;

  logado:boolean = false;
  @Input() linkComprar:any;

  constructor() { }

  ngOnInit() {
    // this.setImgBool(false);
  }

  showPriceIngredient(){
    //this.showPrice = !this.showPrice;
  }

  // getEventShow(value: string) {
  //   this.getEventShowPrice.emit(value);
  // }


  setImgBool(){
    this.expandImageBoolean = !this.expandImageBoolean;
  }

}
