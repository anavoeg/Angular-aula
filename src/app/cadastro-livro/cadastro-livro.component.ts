import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LivroService } from "../services/livro.service";

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private livroServ: LivroService) {
      this.formLivro();
   }

  ngOnInit() {
  }

  cadastrar(){
    this.livroServ.insert(this.formGroup.value)
    .subscribe(response =>{
      alert("Cadastrado com sucesso!")
    }, error =>{
      alert("Erro ao cadastrar!")
    })
  }

  formLivro(){
        this.formGroup = this.formBuilder.group({
        titulo : ['', [Validators.required]],
        genero : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
        autor : ['', [Validators.required]]
      })
   }
}

