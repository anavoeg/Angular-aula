import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Livro } from '../model/livro';

@Injectable()
export class LivroService {

    constructor(private http: HttpClient){
        
    }
    getLivros(): Observable<Livro[]>{
        return this.http.get<Livro[]>
        (`https://3a91d287-d518-4ca9-a7f8-067760f8dcd7.mock.pstmn.io/livros`);
    }
    insert(obj: Livro){
        return this.http.post(`https://3a91d287-d518-4ca9-a7f8-067760f8dcd7.mock.pstmn.io/livros`,
         obj, {
            observe: 'response',
            responseType:'text'
        });
    }
}