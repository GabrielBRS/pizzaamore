import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { FooterModule } from './components/footer/footer.module';
import { AdminModule } from './admin/admin.module';
import { ProdutosModule } from './produtos/produtos.module';
import { HomeModule } from './home/home.module';
import { ContatoModule } from './contato/contato.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioModule } from './usuario/usuario.module';
import { CardPizzaModule } from './components/card-pizza/card-pizza.module';
import { ProdutosDetailsLojaModule } from './produtos/produtos-details-loja/produtos-details-loja.module';
import { ProdutosDetailsIfoodModule } from './produtos/produtos-details-ifood/produtos-details-ifood.module';
import { UserModule } from './user/user.module';
import { HomeService } from './home/home.service';
import { SobreModule } from './sobre/sobre.module';
import { CardPizzaIfoodModule } from './components/card-pizza-ifood/card-pizza-ifood.module';
import { LoginComponentModule } from './login-component/login-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    FooterModule,
    AdminModule,
    ProdutosModule,
    ProdutosDetailsLojaModule,
    ProdutosDetailsIfoodModule,
    HomeModule,
    ContatoModule,
    UsuarioModule,
    CardPizzaModule,
    UserModule,
    HttpClientModule,
    SobreModule,
    ProdutosModule,
    ContatoModule,

    AdminModule, 
    CardPizzaModule,
    CardPizzaIfoodModule,
    FooterModule,
    NavBarModule,
    ContatoModule,
    HomeModule,
    LoginComponentModule,
    SobreModule,
    UserModule,
    UsuarioModule,

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
