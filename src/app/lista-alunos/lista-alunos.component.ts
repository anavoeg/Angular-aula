import { Component, OnInit } from '@angular/core';
import { Aluno } from "../model/aluno";
import { AlunoService } from "../services/aluno.service";

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  alunos: Aluno[];

  constructor(private alunoServ: AlunoService) { }

  ngOnInit() {

    this.alunoServ.getAlunos()
    .subscribe(response => {
      this.alunos = response['data'];
      //console.log(this.alunos.length);
    });
  }

}
