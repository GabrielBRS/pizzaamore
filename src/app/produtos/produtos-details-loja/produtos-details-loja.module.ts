import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosDetailsLojaComponent } from './produtos-details-loja.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardPizzaModule } from 'src/app/components/card-pizza/card-pizza.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    CardPizzaModule,
  ],
  declarations: [ProdutosDetailsLojaComponent],
  exports:[ProdutosDetailsLojaComponent]
})
export class ProdutosDetailsLojaModule { }
