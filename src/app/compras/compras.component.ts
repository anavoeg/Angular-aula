import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { LISTAPRODUTO } from "../model/mock-produto";

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  lista: Produto[] = LISTAPRODUTO;
  carrinho: Produto[];
  total: number = 0;
  // addProduto(newProduto: string) {
  //   if (newProduto) {
  //     this.produto.push(newProduto);
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }

  addCarrinho(produto: Produto) {

    if(!this.verificaItemCarrinho(produto)) {
      this.carrinho.push(produto);
      this.totalCarrinho();

    }
  }

  totalCarrinho(): void {
    let tot = 0;
    for (let selectedProduto of this.carrinho) {
      tot = tot + selectedProduto.preco;
    }
    this.total = tot;
  }

  verificaItemCarrinho(produto: Produto): boolean {
    let existe = false;

    for(let item of this.carrinho) {
      if(item.id === produto.id){
        existe  = true;

      }    
    }
    return existe;
  }
}
