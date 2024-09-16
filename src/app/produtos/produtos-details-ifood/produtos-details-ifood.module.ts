import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosDetailsIfoodComponent } from './produtos-details-ifood.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardPizzaIfoodModule } from 'src/app/components/card-pizza-ifood/card-pizza-ifood.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    CardPizzaIfoodModule,
  ],
  declarations: [ProdutosDetailsIfoodComponent],
  exports:[ProdutosDetailsIfoodComponent]
})
export class ProdutosDetailsIfoodModule { }
