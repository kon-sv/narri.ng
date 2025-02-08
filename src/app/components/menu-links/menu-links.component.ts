import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-menu-links',
  imports: [RouterModule],
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.scss'
})
export class MenuLinksComponent {
  routes = routes;

}
