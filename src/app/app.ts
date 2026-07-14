import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router'; // remove a importação de RoterOutlet, pois não é necessário para este componente
import {Produto} from './components/produto/produto'; //importando a classe  produto do arquivo produto.ts para ser usado no componente app
@Component({
  selector: 'app-root',
  imports: [Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
