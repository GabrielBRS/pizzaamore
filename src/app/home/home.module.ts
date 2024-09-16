import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeService } from './home.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders<HomeModule> {
    return {
      ngModule: HomeModule,
      providers: [
       HomeService
      ]
    }
  }
}
