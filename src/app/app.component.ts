import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PI-web';

  constructor(private router: Router) {}

  goToOdisea(idtournament: string): void {
    const url = "/odisea" + "/" + idtournament
    this.router.navigateByUrl(url).then(_ => window.location.reload())
  }
}
