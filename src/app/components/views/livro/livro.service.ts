import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './livro.model.';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllByCateogria(id_cat: String): Observable<Livro[]> {
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`;    
    return this.http.get<Livro[]>(url); 
  }
}
