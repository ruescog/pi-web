import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceComponent } from './indice/indice.component';
import { OdiseaComponent } from './odisea/odisea.component';

const routes: Routes = [
  {path: "", redirectTo: "/indice", pathMatch: "full"},
  {path: "indice", component: IndiceComponent},
  {path: "odisea", component: OdiseaComponent}
  // {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
