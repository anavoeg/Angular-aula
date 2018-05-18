import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Carros } from '../model/carros';

@Injectable()

export class CarroService{

    constructor(private http: HttpClient){
    }
        getCarros(): Observable<Carros[]>{
            return this.http.get<Carros[]>(`https://6e47ed9c-5cad-488e-8c07-fd78d44afd7f.mock.pstmn.io/carros`);
    }
    insert(obj: Carros){
        return this.http.post(`https://6e47ed9c-5cad-488e-8c07-fd78d44afd7f.mock.pstmn.io/carros`,
         obj, {
            observe: 'response',
            responseType:'text'
        });
    }
}