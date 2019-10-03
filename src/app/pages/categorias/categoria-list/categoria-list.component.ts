import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../compartilhado/categoria.service';
import { Categoria } from '../compartilhado/categoria.model';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(
      categorias => this.categorias = categorias,
      error => alert('Erro ao carregar a lista')
    );
  }

  delete(categoria: Categoria) {
    const confirma = confirm("Deseja realmente excluir a categoria "+categoria.descricao+"?");
    if (confirma){
      this.categoriaService.delete(categoria.id).subscribe(
        () => this.categorias = this.categoriaService.removerElementoLista(this.categorias, categoria),
        () => alert("Erro ao excluir!")
      )
    }
  }

}
