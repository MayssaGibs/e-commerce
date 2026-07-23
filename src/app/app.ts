import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common'; 
import { usuarioLogado, login, logout } from './core/auth';
//!import {Produto} from './components/produto/produto'; //importando a classe  produto do arquivo produto.ts para ser usado no componente app

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Loja das Tecs';
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}
