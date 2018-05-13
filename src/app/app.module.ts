import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicoComponent } from './servico/servico.component';
import { ContatoComponent } from './contato/contato.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { AlunoService } from "./services/aluno.service";
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClienteService } from "./services/cliente.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicoComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    ListaAlunosComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule //se utilizar webservices
  ],
  providers: [AlunoService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
