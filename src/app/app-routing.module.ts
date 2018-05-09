import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicoComponent } from './servico/servico.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from "./cadastro/cadastro.component";

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'servico', component: ServicoComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'produtos', component: ProdutosComponent },
{ path: 'carrinho', component: CarrinhoComponent },
{ path: 'cadastro', component: CadastroComponent }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}