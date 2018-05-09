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
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { StorageService } from "./services/storage.service";
import { CadastroComponent } from "./cadastro/cadastro.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicoComponent,
    ContatoComponent,
    HeaderComponent,
    FooterComponent,
    ProdutosComponent,
    CarrinhoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
