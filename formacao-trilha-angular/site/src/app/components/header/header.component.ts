import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() tipoUsuario!: string;
  @Output() logout = new EventEmitter<void>();

  menu = ['home'];
  // exemplo apos ensinar sobre ciclo de vida
  verificaPermissaoUsuario() {
    if (this.tipoUsuario === 'admin') {
      this.menu = ['home', 'about', 'address', 'contact'];
    } else {
      this.menu = ['home'];
    }
    console.log('tipo usuario', this.tipoUsuario);
  }

  deslogarUsuario() {
    this.tipoUsuario = 'visitante';
    this.logout.emit();
    this.verificaPermissaoUsuario();
    // setTimeout(() => this.verificaPermissaoUsuario(), 500);
  }
}
