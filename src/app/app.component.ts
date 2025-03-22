import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { header } from './shared/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';
import { PolicyComponent } from "./policy/policy.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, header, FooterComponent, PolicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cabana';
}
