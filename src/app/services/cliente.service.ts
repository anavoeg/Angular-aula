import { Injectable } from "@angular/core/";
import { HttpClient } from "@angular/common/http";
import { ClienteDTO } from "../model/cliente.dto";

@Injectable()
export class ClienteService{

    constructor(private http: HttpClient) {

    }

    insert(obj: ClienteDTO) {
    return this.http.post(`https://tcc-lojavirtual.herokuapp.com/clientes`, obj, 

        {
            observe: "response",
            responseType: "text"
            
        });
    }
}
