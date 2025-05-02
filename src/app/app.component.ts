import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNgModule} from './core/modules/PrimeNgModule';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeNgModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'guardian-web';
}
