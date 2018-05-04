import { Component, OnInit } from '@angular/core';
import { Compra } from '../model/compra';
import { LISTACOMPRAS } from "../model/lista-compras";

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {


  lista: Compra[] = LISTACOMPRAS;
  compra: Compra = new Compra();
  selectedCompra: Compra;

  // addProduto(newProduto: string) {
  //   if (newProduto) {
  //     this.compra.push(newProduto);
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }

  add(){
    let c = new Compra();
    c.produto = this.compra.produto;
    c.id = this.compra.id;
    c.quantidade = this.compra.quantidade;
    c.valor = this.compra.valor;
    // console.log(this.compra.produto);
    this.lista.push(c);
  }

  selected(obj: Compra) {
    this.selectedCompra = obj;
  }
}
