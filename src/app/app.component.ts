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

  goToTournament(idtournament: string): void {
    const url = "/ccl" + "/" + idtournament
    this.router.navigateByUrl(url).then(_ => window.location.reload())
  }
}
