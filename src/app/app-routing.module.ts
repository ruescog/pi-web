import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiosComponent } from './cambios/cambios.component';
import { CircuitoComponent } from './circuito/circuito.component';
import { IndiceComponent } from './indice/indice.component';
import { OdiseaComponent } from './odisea/odisea.component';
import { TorneoPresencialComponent } from './torneo-presencial/torneo-presencial.component';

const routes: Routes = [
  {path: "", redirectTo: "/circuito", pathMatch: "full"},  
  {path: "cambios", component: CambiosComponent},
  {path: "circuito", component: CircuitoComponent},
  {path: "indice", component: IndiceComponent},
  {path: "odisea/:idtournament", component: OdiseaComponent},
  {path: "torneo-presencial", component: TorneoPresencialComponent},
  // {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
