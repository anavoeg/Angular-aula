import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable()
export class StorageService {

    setCarrinho(carrinho: Array<Produto>) {
        localStorage.setItem('CARRINHO', JSON.stringify(carrinho));
    }

    getCarrinho(): Array<Produto> {
        let carrinho = localStorage.getItem('CARRINHO');
        if (carrinho != null) {// se erro verificar se null é com aspas
            return JSON.parse(carrinho);
        } else {
            return new Array<Produto>();
        }
    }
}
