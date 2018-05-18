import { Component, OnInit } from '@angular/core';
import { Livro } from "../model/livro";
import { LivroService } from "../services/livro.service";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [];
  livroCount: number;
  livroList: string;

  constructor(private livroServ: LivroService) { }

  ngOnInit() {
    this.lista();
  }

  lista(){
    this.livroServ.getLivros()
    .subscribe(response => {
      this.livros = response;
      // console.log(response);
    })
  }

  addItem() {
    this.livros.push(this.livroList);
    this.livroList = '';
    this.livroCount = this.livros.length;
  }
}
