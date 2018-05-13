import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  
  this.formGroup =  this.formBuilder.group({
    
      cpf : ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      endereco : ['', [Validators.required]],
      municipio : ['', []],
      estado : ['', []],
      telefone : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required]]

    })
   }

  ngOnInit() {
  }

  cadastrar(){    

    console.log(this.formGroup.value);
  }
}
