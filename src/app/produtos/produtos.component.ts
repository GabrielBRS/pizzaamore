import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtoLojaBoolean:boolean = true;
  tabIndex:number = 0;

  constructor() { }

  ngOnInit() {
    this.onTabClick;
  }

  fechar(value:boolean){
    this.produtoLojaBoolean = value;
  }

  onTabClick(tabIndex:number){
    this.tabIndex = tabIndex;
  }

}
