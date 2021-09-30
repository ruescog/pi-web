import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitoComponent } from './circuito/circuito.component';
import { CclComponent } from './ccl/ccl.component';
import { LogrosComponent } from './logros/logros.component';

const routes: Routes = [
  {path: "", redirectTo: "/circuito", pathMatch: "full"},  
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
