import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
// Adicionando variaveis e classe do produto
export class Produto {
  produto = 'Notebook Gamer';
  preco = 5000;
  mostrarProduto = true;
  mostrarPreco = true;
produtos =[
    {nome: 'Teclado', preco: 49.99},
    {nome: 'Mouse', preco: 29.99},
    {nome: 'Monitor', preco: 229.99}
  ];
}
