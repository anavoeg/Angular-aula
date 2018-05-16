import { Component, OnInit } from '@angular/core';
import { Carros } from "../model/carros";
import { CarroService } from "../services/carros.service";

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carros: Carros[] = [];

  constructor(private carrosServ: CarroService) { }

  ngOnInit() {
    this.veiculos();
  }

  veiculos(){
        this.carrosServ.getCarros()
      .subscribe(response => {
      this.carros = response;
      // console.log(response);
    })

  }
}
