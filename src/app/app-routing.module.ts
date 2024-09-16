import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AdminComponent } from './admin/admin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProdutosDetailsLojaComponent } from './produtos/produtos-details-loja/produtos-details-loja.component';
import { ProdutosDetailsIfoodComponent } from './produtos/produtos-details-ifood/produtos-details-ifood.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'sobre',component:SobreComponent},
  {path:'contato', component:ContatoComponent},
  {path:'produtos',component:ProdutosComponent},
  {path:'produtos',component:ProdutosComponent, children:[
    {path:'loja', component:ProdutosDetailsLojaComponent},
    {path:'ifood', component:ProdutosDetailsIfoodComponent}
  ]},
  {path:'admin', component:AdminComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'login',component:LoginComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
