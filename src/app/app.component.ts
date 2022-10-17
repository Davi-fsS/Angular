import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Davi'
  data = '16/10/2022'

  userData ={
    email: 'davi@outlook.com',
    role: 'dev'
  }

  title = 'curso-angular';
  infoPai = 'infoPai'
  informacao = 20 + 10
}
