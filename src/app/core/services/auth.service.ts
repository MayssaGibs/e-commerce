import { Injectable, signal, computed } from "@angular/core";

type Usuario={
    email: string;
    perfil: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
private usuario =  signal <Usuario | null> (null);
private tokenJwT = signal <string | null> (null);

//!COMPUTED
usuarioAtual = computed(()=> this.usuario());
usuarioLogado = computed(()=> this.usuario() ! == null);
token = computed(()=> this.tokenJwT());

login(){}

logout() {
    this.usuario.set(null);
    this.tokenJwT.set(null);
}

obterToken(): string | null {
    return this.tokenJwT();

}
}