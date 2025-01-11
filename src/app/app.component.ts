import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'sprk-root',
  imports: [RouterOutlet, ButtonModule, CardModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'primeng';
}
