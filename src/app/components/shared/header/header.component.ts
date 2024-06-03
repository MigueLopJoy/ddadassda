import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuItems = [
    {label: 'Inicio', route: '/inicio'},
    {label: 'Mascotas', route: '/mascotas'},
    {label: 'Asociaciones', route: '/asociaciones'},
    {label: 'Iniciar sesión', route: '/auth'},
  ]

  isMenuOpen: boolean = false;
  currentLink: number = 0;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeActiveLink(clickedLink: number) {
    this.currentLink = clickedLink;
  }

}
