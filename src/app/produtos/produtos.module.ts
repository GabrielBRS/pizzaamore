import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardPizzaModule } from '../components/card-pizza/card-pizza.module';
import { ProdutosDetailsIfoodModule } from './produtos-details-ifood/produtos-details-ifood.module';
import { ProdutosDetailsLojaModule } from './produtos-details-loja/produtos-details-loja.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    CardPizzaModule,
    ProdutosDetailsIfoodModule,
    ProdutosDetailsLojaModule,
  ],
  declarations: [ProdutosComponent],
  exports:[ProdutosComponent]
})
export class ProdutosModule { }
