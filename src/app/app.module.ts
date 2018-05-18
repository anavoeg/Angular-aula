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
import { CadastroComponent } from './cadastro/cadastro.component';
import { Livro } from "./model/livro";
import { LivrosComponent } from './livros/livros.component';
import { LivroService } from "./services/livro.service";
import { CarrosComponent } from './carros/carros.component';
import { CarroService } from "./services/carros.service";
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { CadastroCarrosComponent } from './cadastro-carros/cadastro-carros.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicoComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    LivrosComponent,
    CarrosComponent,
    CadastroLivroComponent,
    CadastroCarrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule //se utilizar webservices
  ],
  providers: [LivroService, CarroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
