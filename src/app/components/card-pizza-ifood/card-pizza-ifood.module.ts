import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPizzaIfoodComponent } from './card-pizza-ifood.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [CardPizzaIfoodComponent],
  exports:[CardPizzaIfoodComponent]
})
export class CardPizzaIfoodModule { }
