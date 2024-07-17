import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrl: './livro-create.component.css'
})
export class LivroCreateComponent implements OnInit {

  titulo = new FormControl('', [Validators.minLength(3)]);
  nome_autor = new FormControl('', [Validators.minLength(3)]);
  texto = new FormControl('', [Validators.minLength(10)]);

  constructor() {}

  ngOnInit(): void {}

  getMessageTitulo() {
    if (this.titulo.invalid) {
      return 'O campo TITULO deve conter entre 3 e 100 caracteres';
    }
    return false;
  }

  getMessageAutor(){
    if(this.nome_autor.invalid){
      return 'O campo NOME DO AUTOR deve conter entre 3 e 100 caracteres';
    }
    return false;
  }

  getMessageTexto(){
    if(this.texto.invalid){
      return 'O campo TEXTO deve conter entre 10 e 2.000.000 catacteres';
    }
    return false;
  }

  verificaCamposPreenchidos(){
    if(this.getMessageTexto() || this.getMessageTitulo() || this.getMessageAutor()){
      return true;
    }
    return false;
  }


}
