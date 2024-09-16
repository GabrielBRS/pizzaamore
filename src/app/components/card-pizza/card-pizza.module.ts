import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPizzaComponent } from './card-pizza.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [CardPizzaComponent],
  exports:[CardPizzaComponent]
})
export class CardPizzaModule { }
