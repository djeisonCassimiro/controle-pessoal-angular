import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from 'src/app/compartilhado/services/http-util.service';
import { environment as env } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Categoria } from './categoria.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private PATH: string = "categoria";

  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService) { }

  getAll(): Observable<Categoria[]>{
    return this.http.get(env.baseApiUrl + this.PATH).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategorias)
    );
  }

  getById(id: number): Observable<Categoria> {
    //const url = `${this.PATH}/${id}`;
    const url = `${env.baseApiUrl+this.PATH}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    );
  }

  salvar(categoria: Categoria): Observable<Categoria> {
    /*return this.http.post(this.PATH, categoria).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    );*/
    return this.http.post(env.baseApiUrl + this.PATH, categoria).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    );
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    const url = `${this.PATH}/${categoria.id}`;
    //const url = `${env.baseApiUrl+this.PATH}/${categoria.id}`;
    return this.http.put(url, categoria).pipe(
      catchError(this.handleError),
      map(() => categoria)
    );
    /*return this.http.put(env.baseApiUrl + this.PATH, categoria).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    );*/
  }

  delete(id: number): Observable<any> {
    const url = `${this.PATH}/${id}`;
    //const url = `${env.baseApiUrl+this.PATH}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  private jsonDataToCategorias(jsonData: any[]): Categoria[] {
    console.log('Json data: '+JSON.stringify(jsonData));
    const categorias: Categoria[] = [];
    jsonData.forEach(element => categorias.push(element as Categoria));
    return categorias;
  }
  
  private jsonDataToCategoria(jsonData: any): Categoria {
    return jsonData as Categoria;    
  }

  private handleError(error: any): Observable<any> {
    console.log('error: '+JSON.stringify(error));
    console.log("Erro na requisição => ", error);
    return throwError(error);
  }

  removerElementoLista(categorias: Categoria[], categoria: Categoria): Categoria[] {
    const categoriasNew: Categoria[] = [];
    categorias.forEach(element => {
      if(element.id != categoria.id)
        categoriasNew.push(element)
    });
    return categoriasNew;
  }
}
