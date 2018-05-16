import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicoComponent } from './servico/servico.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LivrosComponent } from "./livros/livros.component";
import { CarrosComponent } from "./carros/carros.component";
import { CadastroLivroComponent } from "./cadastro-livro/cadastro-livro.component";

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'servico', component: ServicoComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'cadastro', component: CadastroComponent },
{ path: 'livros', component: LivrosComponent },
{ path: 'carros', component: CarrosComponent },
{ path: 'cadastro-livro', component: CadastroLivroComponent }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}