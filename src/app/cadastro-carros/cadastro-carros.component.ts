import { Component, OnInit } from '@angular/core';
import { CarroService } from "../services/carros.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-cadastro-carros',
  templateUrl: './cadastro-carros.component.html',
  styleUrls: ['./cadastro-carros.component.css']
})
export class CadastroCarrosComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private livroServ: CarroService) {
      this.formCarro();
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

  formCarro(){
        this.formGroup = this.formBuilder.group({
        modelo : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
        marca : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
        ano : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        preco : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
      })
   }
}

