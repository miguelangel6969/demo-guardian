import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../layouts/navbar/navbar.component';
import {HeaderComponent} from '../layouts/header/header.component';
import {FooterComponent} from '../layouts/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
