import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiosComponent } from './cambios/cambios.component';
import { CircuitoComponent } from './circuito/circuito.component';
import { IndiceComponent } from './indice/indice.component';
import { CclComponent } from './ccl/ccl.component';
import { LogrosComponent } from './logros/logros.component';

const routes: Routes = [
  {path: "", redirectTo: "/circuito", pathMatch: "full"},  
  {path: "cambios", component: CambiosComponent},
  {path: "circuito", component: CircuitoComponent},
  {path: "ccl/:idtournament", component: CclComponent},
  {path: "logros", component: LogrosComponent}
  // {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
